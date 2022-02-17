const bodyParser = require('body-parser');
const receitas = require('./receitaRoutes')

module.exports = app => {
	app
	.use(bodyParser.json())
	.use(receitas)
}