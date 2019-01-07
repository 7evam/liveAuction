const { User } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      res.locals.users = await User.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e)
    }
  },
  async getOneUser(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.users = await User.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e)
    }
  },

  async editBalance(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      const newBalance = Number.parseInt(req.params.newBalance, 10);
      const user = await User.update({
        balance: newBalance
      }, {
       returning: true,
        where: { id }
      });
      res.locals.user = user
      next()
    } catch (e) {
      console.error(e);
      next(e)
    }
  },
    async resetUsers(req, res, next){
    try {
        await User.update({
        balance: 200,
      }, {
       returning: true,
       where: { password: "password" }
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
