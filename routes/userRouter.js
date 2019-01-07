const express = require('express');
const users = require('../controllers/userController');
const views   = require('../controllers/viewController');

const userRouter = express.Router({mergeParams:true});

userRouter.route('/')
  .get(users.index);

userRouter.route('/reset')
  .put(users.resetUsers);

userRouter.route('/:id')
.get(users.getOneUser);

userRouter.route('/:id/:newBalance')
.put(users.editBalance, views.handleUpdate, views.badUpdate);

userRouter.use(users.showJSON, users.notFound);

module.exports = userRouter;

