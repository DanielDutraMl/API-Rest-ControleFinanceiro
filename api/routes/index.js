const bodyParser = require('body-parser');
const receitas = require('./receitaRoutes')
const despesas = require('./despesaRoutes')

module.exports = app => {
	app
	.use(bodyParser.json())
	.use(receitas)
	.use(despesas)
}