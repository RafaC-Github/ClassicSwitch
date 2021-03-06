'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    Token: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Token.associate = function(models) {
    // associations can be defined here
    Token.belongsTo(models.User);

  };
  return Token;
};