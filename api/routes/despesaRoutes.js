const {Router} = require('express')
const DespesaController = require('../controllers/DespesaController')

const router = Router()

router
.get('/despesas', DespesaController.listaTodasDespesas)
.get('/despesas/:id', DespesaController.listaUmaDespesa)
.post('/despesas', DespesaController.criaDespesa)
.put('/despesas/:id', DespesaController.atualizaDespesa)
.delete('/despesas/:id', DespesaController.deletaDespesa)

module.exports = router