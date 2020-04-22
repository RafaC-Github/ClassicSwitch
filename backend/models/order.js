'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    deliveryDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsToMany(models.Product,{
      through:models.OrderProduct 
    });//MANY TO MANY Relationship
  };
  return Order;
};