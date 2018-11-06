const express = require('express');
const items = require('../controllers/itemController');
const views   = require('../controllers/viewController');

const itemRouter = express.Router({mergeParams:true});

itemRouter.route('/:id/edit')
.get(items.getOneItem)
.put(items.update, views.handleUpdate, views.badUpdate);

itemRouter.route('/')
  .get(items.index, views.showBidPage)

itemRouter.use(items.showJSON, items.notFound);

module.exports = itemRouter;
