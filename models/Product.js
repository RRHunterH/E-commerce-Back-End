const { Model, DataTypes } = require('sequelize');
const sequelize = require('..\\Develop\\config\\connection'); // Corrected path

class Product extends Model {}

Product.init(
  {
    // define your model attributes here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'product', // Make sure to set the table name explicitly
    timestamps: false, // If you don't want createdAt and updatedAt columns
  }
);

module.exports = Product;
