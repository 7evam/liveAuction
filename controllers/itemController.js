const { Item, User } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    async index(req, res, next) {
    try {
      res.locals.items = await Item.findAll({
        rejectOnEmpty: true,
        include: [User],
      });
      next();
    } catch (e) {
      next(e)
    }
  },

    async getOneItem(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.items = await Item.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e)
    }
  },
   async addToAuction(req, res, next) {
    try {
      res.locals.items = await Item.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e)
    }
  },

  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      const item = await Item.update({
        price,
      }, {
       returning: true,
        where: { id }
      });
      console.log(`CHECK IT OUT!!!!! ${item}`)
      res.locals.item = item
      next()
    } catch (e) {
      console.error(e);
      next(e)
    }
  },

  async upForAuction(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      const item = await Item.update({
        upForAuction: true,
      }, {
       returning: true,
        where: { id }
      });
      res.locals.item = item
      next()
    } catch (e) {
      console.error(e);
      next(e)
    }
  },

  async completedBid(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      const price = Number.parseInt(req.params.price, 10);
      let userID = req.params.user
      const item = await Item.update({
        upForAuction: false,
        completedBid: true,
        price: price,
        userId: userID,
      }, {
       returning: true,
        where: { id }
      });
      res.locals.item = item
      next()
    } catch (e) {
      console.error(e);
      next(e)
    }
  },

  async resetItems(req, res, next){
    try {
        await Item.update({
        price: 0,
        completedBid: false,
        upforAuction: false,
      }, {
       returning: true,
        where: {
          createdAt: {
            [Op.ne]: null
          }
        }
      });
      next()
    } catch (e) {
      console.error(e);
      next(e)
    }
  },

  showJSON(req, res) {
    res.json(res.locals)
  },

  notFound(err, req, res, next) {
    console.error(err);
    res.sendStatus(404);
  },

}
