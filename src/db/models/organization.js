'use strict';
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define('organization', {
    uuid: DataTypes.UUID,
    name: DataTypes.STRING,
    contact: DataTypes.JSON,
    isDeleted: DataTypes.BOOLEAN,
  }, {});
  organization.associate = function(models) {
    // associations can be defined here
  };
  return organization;
};