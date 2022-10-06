'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Categories,{
        //as: 'categories',
        foreignKey: 'id_category'
      })

      Products.belongsTo(models.Colors, {
        //as: 'colors',
        foreignKey: 'id_color'
      })

      Products.hasMany(models.Images, {
        //as: 'images',
        foreignKey: 'id_product'
      })

      Products.belongsToMany(models.Users, {
        //as: 'users',
        through: 'products_users',
        foreignKey: 'id_product',
        otherKey: 'id_user'
      })
    }
  }
  Products.init({
    id_product: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    measures: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER,
    id_color: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};