'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {allowNull:false,
    type:DataTypes.STRING},
    price: {
      allowNull:false,
      type:DataTypes.DECIMAL},
    image_path:{
      allowNull: false,
     type: DataTypes.STRING},
    description: DataTypes.TEXT,
    CategoryId: DataTypes.INTEGER,
    youtubelink: DataTypes.STRING

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