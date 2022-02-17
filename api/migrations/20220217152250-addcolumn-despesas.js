'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('despesas', 'categoria', {
        allowNull: true,
		defaultValue: 'Outras',
        type: Sequelize.ENUM('Alimentação','Saúde','Moradia','Transporte','Educação','Lazer','Imprevistos','Outras')
			}
		)
	},	
	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('despesas','categorias')
		}
}
