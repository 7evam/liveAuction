const { Item } = require('../models');

module.exports = {

    async index(req, res, next) {
    try {
      res.locals.items = await Item.findAll({
        rejectOnEmpty: true,
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

  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      const { price } = req.body;
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
  showJSON(req, res) {
    res.json(res.locals)
  },
  notFound(err, req, res, next) {
    console.error(err);
    res.sendStatus(404);
  },
}
