const {Router} = require('express')
const ReceitaController = require('../controllers/ReceitaController')

const router = Router()

router
.get('/receitas', ReceitaController.listaTodasReceitas)
.post('/receitas', ReceitaController.criaReceita)


module.exports = router