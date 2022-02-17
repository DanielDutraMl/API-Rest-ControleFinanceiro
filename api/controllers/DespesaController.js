const database = require('../models')

class DespesaController {
	static async listaTodasDespesas(req, res) {
		try {
			const lista = await database.despesas.findAll()
			return res.status(200).json(lista)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async listaUmaDespesa(req, res) {
		const { id } = req.params
		try {
			const lista = await database.despesas.findOne({
				where: {
					id : Number(id)
				}
			})
			return res.status(200).json(lista)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criaDespesa(req, res) {
		const dados = req.body
		try {
			const despesaCriada = await database.despesas.create(dados)
			return res.status(200).json(despesaCriada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async atualizaDespesa(req, res) {
		const { id } = req.params
		const dados = req.body
		try {
			await database.despesas.update( dados, {
				where: {
					id : Number(id)
				}
			})
			const dadoAtualizado = await database.despesas.findOne({
				where: {
					id : Number(id)
				}
			})
			return res.status(200).json(dadoAtualizado)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async deletaDespesa(req, res) {
		const { id } = req.params
		try {
			const lista = await database.despesas.destroy({
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

module.exports = DespesaController