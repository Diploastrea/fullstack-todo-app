module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
      },
      priority: {
        type: Sequelize.ENUM,
        values: ['low', 'medium', 'high'],
      },
      dueDate: {
        type: Sequelize.DATEONLY,
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tasks');
  },
};
