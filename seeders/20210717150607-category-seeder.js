'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Nodejs'
      },
      {
        name: "Vuejs"
      },
      {
        name: 'Reactjs'
      },
      {
        name: "ReactNative"
      },
      {
        name: 'Laravel'
      },
      {
        name: "Flutter"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('categories', {}, null);
  }
};
