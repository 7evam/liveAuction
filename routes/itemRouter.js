const express = require('express');
const items = require('../controllers/itemController');

const itemRouter = express.Router({mergeParams:true});

itemRouter.route('/:id/edit')
.get(items.getOneItem)
.put(items.update);

itemRouter.route('/')
  .get(items.index)

itemRouter.use(items.showJSON, items.notFound);

module.exports = itemRouter;
