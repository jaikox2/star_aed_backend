'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mid: {
        type: Sequelize.STRING
      },
      aed: {
        type: Sequelize.STRING
      },
      uid: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.JSON
      },
      location: {
        type: Sequelize.JSON
      },
      organid: {
        type: Sequelize.STRING
      },
      groupid: {
        type: Sequelize.STRING
      },
      asw: {
        type: Sequelize.INTEGER
      },
      psw: {
        type: Sequelize.INTEGER
      },
      dsw: {
        type: Sequelize.INTEGER
      },
      contact: {
        type: Sequelize.JSON
      },
      isConnected: {
        type: Sequelize.BOOLEAN
      },
      isMaintain: {
        type: Sequelize.BOOLEAN
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aeds');
  }
};