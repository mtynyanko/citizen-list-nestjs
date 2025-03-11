'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: 255,
        },
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: 255,
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        onUpdate: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('groups');
  },
};