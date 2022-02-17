const database = require('../models')

class ReceitaController {
	static async listaTodasReceitas(req, res) {
		try {
			const lista = await database.receitas.findAll()
			return res.status(200).json(lista)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criaReceita(req, res) {
		const dados = req.body
		try {
			const receitaCriada = await database.receitas.create(dados)
			return res.status(200).json(receitaCriada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
}

module.exports = ReceitaController