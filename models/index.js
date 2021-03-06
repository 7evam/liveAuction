//require('dotenv').config();

const Sequelize = require('sequelize');

// this is used on local machine

const db = new Sequelize({
  database: 'live_auction',
  dialect:  'postgres',
  define:   {
    underscored:   true,
    returning:     true,
  },
});

// this is used on heroku

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
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
  },
  price: {
    type: Sequelize.SMALLINT,
    defaultValue: 0,
  },
  completedBid: {
    type:         Sequelize.BOOLEAN,
    allowNull:    false,
    defaultValue: false,
  },
  upForAuction: {
    type:         Sequelize.BOOLEAN,
    allowNull:    false,
    defaultValue: false,
  },
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
  balance: {
    type: Sequelize.SMALLINT,
  }
});

//associations
User.hasMany(Item);
Item.belongsTo(User);

module.exports = {
  User,
  Item,
  db,
};

