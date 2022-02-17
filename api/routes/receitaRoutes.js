const {Router} = require('express')
const ReceitaController = require('../controllers/ReceitaController')

const router = Router()

router
.get('/receitas', ReceitaController.listaTodasReceitas)
.get('/receitas/:id', ReceitaController.listaUmaReceita)
.post('/receitas', ReceitaController.criaReceita)
.put('/receitas/:id', ReceitaController.atualizaReceita)
.delete('/receitas/:id', ReceitaController.deletaReceita)

module.exports = router