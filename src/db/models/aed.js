/* eslint-disable lines-around-directive */
// eslint-disable-next-line lines-around-directive
// eslint-disable-next-line strict
'use strict';
module.exports = (sequelize, DataTypes) => {
  const aed = sequelize.define('aed', {
    mid: DataTypes.STRING,
    aed: DataTypes.STRING,
    uid: DataTypes.STRING,
    address: DataTypes.JSON,
    location: DataTypes.JSON,
    organid: DataTypes.STRING,
    groupid: DataTypes.STRING,
    asw: DataTypes.INTEGER,
    psw: DataTypes.INTEGER,
    dsw: DataTypes.INTEGER,
    contact: DataTypes.JSON,
    isConnected: DataTypes.BOOLEAN,
    isMaintain: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN,
  }, {});
  aed.associate = (models) => {
    // associations can be defined here
  };
  return aed;
};
