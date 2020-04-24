'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name:{
      allowNull:false,
      type: DataTypes.STRING}
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Product);
  };
  return Category;
};