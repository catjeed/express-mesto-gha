const userRouter = require('express').Router();

const {
  getUsers, createUser, getUserById, updateAvatar, updateProfile,
} = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUserById);
userRouter.post('/', createUser);
userRouter.patch('/me', updateProfile);
userRouter.patch('/me/avatar', updateAvatar);

module.exports = userRouter;
