const express = require('express');
const items = require('../controllers/itemController');
const views   = require('../controllers/viewController');

const itemRouter = express.Router({mergeParams:true});

itemRouter.route('/:id')
.get(items.getOneItem)

itemRouter.route('/upForAuction/:id')
.put(items.upForAuction, views.handleUpdate, views.badUpdate);

itemRouter.route('/completedBid/:id/:price/:user')
.put(items.completedBid, views.handleUpdate, views.badUpdate);

itemRouter.route('/reset')
  .put(items.resetItems);

itemRouter.route('/')
  .get(items.index, views.showBidPage);

itemRouter.use(items.showJSON, items.notFound);

module.exports = itemRouter;
