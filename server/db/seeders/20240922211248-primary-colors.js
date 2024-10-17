'use strict';

/** @type {import('sequelize-cli').Migration} */

const { Color } = require('../models'); // Adjust the path as necessary

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Color.bulkCreate([
      { name: 'red' },
      { name: 'blue' },
      { name: 'yellow' }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await Color.destroy({
      where: {
        name: ['red', 'blue', 'yellow']
      }
    });
}
};
