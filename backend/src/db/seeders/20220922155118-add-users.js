module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2b$10$bAS9oW4Md0l/ZT8uj9qavuBYv.fAMLIftOU9SjkfOjHBjnpjZaw8i',
      },
      {
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2b$10$JeCahIUo7nrE508jxfWGT.fz26D/V9cd3eAaxwjXUIULGGuLjwsiG',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const { Op } = Sequelize;
    await queryInterface.bulkDelete('users', { id: { [Op.in]: [1, 2] } }, {});
  },
};
