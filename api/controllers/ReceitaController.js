const database = require('../models')

class ReceitaController {
	static async listaTodasReceitas(req, res) {
		const { descricao } = req.query
		const where = {}
		descricao ? where.descricao = descricao : null

		try {
			const lista = await database.receitas.findAll({ where: { ...where }})
			return res.status(200).json(lista)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async listaUmaReceita(req, res) {
		const { id } = req.params
		try {
			const lista = await database.receitas.findOne({
				where: {
					id : Number(id)
				}
			})
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

	static async atualizaReceita(req, res) {
		const { id } = req.params
		const dados = req.body
		try {
			await database.receitas.update( dados, {
				where: {
					id : Number(id)
				}
			})
			const dadoAtualizado = await database.receitas.findOne({
				where: {
					id : Number(id)
				}
			})
			return res.status(200).json(dadoAtualizado)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async deletaReceita(req, res) {
		const { id } = req.params
		try {
			const lista = await database.receitas.destroy({
				where: {
					id : Number(id)
				}
			})
			return res.status(200).json(`O id ${id} foi deletado`)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
}

module.exports = ReceitaController