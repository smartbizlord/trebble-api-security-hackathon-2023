const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const id = await user._id.toString()
  const tokens = await tokenService.generateAuthTokens(id);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const id = await user._id.toString()
  const tokens = await tokenService.generateAuthTokens(id);
  res.send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  let fromapp = req.headers.fromapp;
  if(fromapp != "yes"){
    const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
    await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
    res.status(httpStatus.OK).send({message: "Email Sent successfully"});
  } else {
    const verifyEmailToken = await tokenService.generateVerifyEmailTokenApp(req.user);
    await emailService.sendVerificationEmailApp(req.user.email, verifyEmailToken);
    res.status(httpStatus.NO_CONTENT).send();
  }
});

const verifyEmail = catchAsync(async (req, res) => {
  let fromapp = req.headers.fromapp;
  if(fromapp != "yes") {
    await authService.verifyEmail(req.query.token);
    res.status(httpStatus.OK).send({message: "Email Verified successfully"});
  } else {
    await authService.verifyEmailApp(req.query.token, req.user.id);
    res.status(httpStatus.NO_CONTENT).send();
  }
});

const sendTestEmail = catchAsync(async (req, res) => {
  await emailService.sendTestEmail(req.body.email);
  res.status(httpStatus.NO_CONTENT).send({
    message : "successful mail"
  });
});

const uploadFile = catchAsync(async (req, res) => {
  console.log(`ff\n`)
  console.log(req.file)
  console.log(`ff\n`)
  res.end()
})


module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
  sendTestEmail,
  uploadFile,
};
