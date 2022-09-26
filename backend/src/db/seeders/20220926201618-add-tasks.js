module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('tasks', [
      {
        description: 'Buy milk',
        priority: 'high',
        dueDate: '2022-10-05',
        isDone: true,
        userId: 1,
      },
      {
        description: 'Fix the wardrobe',
        priority: 'low',
        dueDate: '2022-10-05',
        isDone: false,
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const { Op } = Sequelize;
    await queryInterface.bulkDelete('tasks', { id: { [Op.in]: [1, 2] } }, {});
  },
};
