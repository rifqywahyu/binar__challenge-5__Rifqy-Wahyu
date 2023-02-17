"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "cars",
      [
        {
          name: "kijang",
          type: "sedan",
          price: 123e5,
          dateCreated: new Date(),
          dateUpdated: new Date(),
          imgURL: "resume.lockonmaram.com",
        },
        {
          name: "inova",
          type: "sedan",
          price: 155e5,
          dateCreated: new Date(),
          dateUpdated: new Date(),
          imgURL: "resume.lockonmaram.com",
        },
        {
          name: "kijang",
          type: "sedan",
          price: 222e5,
          dateCreated: new Date(),
          dateUpdated: new Date(),
          imgURL: "resume.lockonmaram.com",
        },
        {
          name: "toyota",
          type: "sedan",
          price: 333e5,
          dateCreated: new Date(),
          dateUpdated: new Date(),
          imgURL: "resume.lockonmaram.com",
        },
        {
          name: "yamaha",
          type: "sedan",
          price: 443e5,
          dateCreated: new Date(),
          dateUpdated: new Date(),
          imgURL: "resume.lockonmaram.com",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("cars", null, {});
  },
};
