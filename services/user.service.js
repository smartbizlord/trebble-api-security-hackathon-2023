const httpStatus = require('http-status');
const bcrypt = require('bcryptjs');
const ApiError = require('../utils/ApiError');
const { dB } = require('../models');
const logger = require('../config/logger');

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @returns {Promise<boolean>}
 */
const isEmailTaken = async function (email) {
  const user = await dB.users.findOne( { email } );
  logger.info(user);
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
const isPasswordMatch = async function (password, user) {
  const comp = bcrypt.compareSync(password, user.password);
  logger.info(comp);
  return comp;
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  console.log(userBody)
  if (await isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  // eslint-disable-next-line no-param-reassign
  userBody.password = bcrypt.hashSync(userBody.password, 8);
  return dB.users.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (limit, page, where) => {
  const usersCount = await dB.users.estimatedDocumentCount(where);
  const users = await dB.users.find(where || {})
    .skip(page * limit || 0)
    .limit(limit || 5)
    const count = limit || 5
    page = page || 0
    const totalPage = usersCount / count;
  return {users, total: usersCount, page, count, totalPage};
};

const getUsers = async () => {
  const users = await dB.users.find()
    .skip(1)
    .limit(3)
  return users;
}

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (_id) => {
  return dB.users.findOne( { _id });
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return dB.users.findOne( { email } );
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (_id, updateBody) => {
  const userById = await getUserById(_id);
  if (!userById) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await isEmailTaken(updateBody.email, _id))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (updateBody.password) { 
    updateBody.password = bcrypt.hashSync(updateBody.password, 8);
  }
  const user = await dB.users.findOneAndUpdate({_id}, updateBody, {new: true})
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await dB.users.findByIdAndDelete(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  isPasswordMatch,
};
