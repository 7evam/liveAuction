//require('dotenv').config();

const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'live_auction',
  dialect:  'postgres',
  define:   {
    underscored:   true,
    returning:     true,
  },
});

// const db = new Sequelize(
//   process.env.DATABASE_URL,
// {
//     underscored: true,
//     returning: true,
//   },
// );

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING(64),
    allowNull: false,
    unique: true,
  },
  price: {
    type: Sequelize.SMALLINT,
  }
});

const User = db.define('user', {
  username: {
    type: Sequelize.STRING(128),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(128),
    allowNull: false,
  },
});



//associations
User.hasMany(Item);
Item.belongsTo(User);

module.exports = {
  User,
  Item,
  db,
};
