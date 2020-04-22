'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    units: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {});
  OrderProduct.associate = function(models) {
    // associations can be defined here
  };
  return OrderProduct;
};