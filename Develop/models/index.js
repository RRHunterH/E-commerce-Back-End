const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '\\..\\Develop\\config\\config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = {
  sequelize,
  Product,
  Category,
  Tag,
  ProductTag,
};
