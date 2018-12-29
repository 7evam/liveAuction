const { User } = require('../models');

module.exports = {
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

    showJSON(req, res) {
    res.json(res.locals)
  },
  notFound(err, req, res, next) {
    console.error(err);
    res.sendStatus(404);
  },

}
