const userRouter = require('express').Router();

const { getUsers, postUser, getUserById } = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUserById);
userRouter.post('/', postUser);

module.exports = userRouter;
