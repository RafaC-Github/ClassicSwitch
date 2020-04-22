'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    available: DataTypes.BOOLEAN,
    image_path: DataTypes.STRING,
    platform: DataTypes.BOOLEAN,
    description: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Category,{ onDelete: 'cascade' });
    Product.belongsToMany(models.Order,{
      through:models.OrderProduct
    });//MANY TO MANY Relationship
  };
  return Product;
};