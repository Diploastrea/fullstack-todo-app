module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$oPkv6gkGZVJ/YjO1/sFKxuKdRblgvT1iMluSn9sn.MgfHtjDXGkOq',
      },
      {
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$Ac77ODYOKWUw5CJnAx1xA.217A7ovc5lkA8Pnv7JLB77EwzymV.tO',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const { Op } = Sequelize;
    await queryInterface.bulkDelete('users', { id: { [Op.in]: [1, 2] } }, {});
  },
};
