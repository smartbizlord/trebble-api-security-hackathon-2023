const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const where = pick(req.query, ['role']);
  const page = pick(req.query, ['page']);
  const limit = pick(req.query, ['limit']);
  const result = await userService.queryUsers(limit.limit, page.page, where.role);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.id, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.id);
  res.status(httpStatus.OK).send({message: "User deleted Successfully"});
});

const mumu = catchAsync(async (req, res) => {
  const {user} = req;
  console.log(user);
  res.send(user);
})

const mumuVer = catchAsync(async (req, res) => {
  const {user} = req;
  console.log(user);
  console.log({
    reequest : req.user,
    dataVals : req.user?.dataValues,
    userRole : req.user?.dataValues?.userRole,
    supple : req.user.userRole
  })
  res.send(user);
})

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  mumu,
  mumuVer
};
