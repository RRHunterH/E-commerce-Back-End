module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('categories', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        category_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('categories');
    },
  };