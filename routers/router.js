let express = require('express');
const { getCadastro_Caes, createCadastro_Caes, updateCadastro_Caes, deleteCadastro_Caes } = require('../controllers/cadastroCaoController');
const { createCadastro_Donos, getCadastro_Donos, updateCadastro_Donos, deleteCadastro_Donos } = require('../controllers/cadastroDonoController');
const { createCaes_Dono, getCaes_Dono, updateCaes_Dono, deleteCaes_Dono } = require('../controllers/caesDonosController');
const { createRelatorio, getRelatorio, Relatorio, updateRelatorio, deleteRelatorio } = require('../controllers/relatorioController');
const { createRel_Caes_Donos, getRel_Caes_Donos, Rel_Caes_Donos, updateRel_caes_donos, deleteRel_Caes_Donos } = require('../controllers/relCaesDonosController');
let router = express.Router();
 

router.post('/api/cadastrocao', createCadastro_Caes);
router.get('/api/cadastrocao/:id', getCadastro_Caes);
router.put('/api/cadastrocao', updateCadastro_Caes);
router.delete('/api/cadastrocao/:id', deleteCadastro_Caes);

router.post('/api/cadastrodono', createCadastro_Donos);
router.get('/api/cadastrodono/:id', getCadastro_Donos);
router.put('/api/cadastrodono', updateCadastro_Donos);
router.delete('/api/cadastrodono/:id', deleteCadastro_Donos);

router.post('/api/caesdonos', createCaes_Dono);
router.get('/api/caesdonos/:id', getCaes_Dono);
router.put('/api/caesdonos', updateCaes_Dono);
router.delete('/api/caesdonos/:id', deleteCaes_Dono);

router.post('/api/relatorio', createRelatorio);
router.get('/api/relatorio/:id', getRelatorio);
router.get('/api/relatorio', Relatorio);
router.put('/api/relatorio', updateRelatorio);
router.delete('/api/relatorio/:id', deleteRelatorio);

router.post('/api/relcaesdopnos', createRel_Caes_Donos);
router.get('/api/relcaesdonos/:id', getRel_Caes_Donos);
router.get('/api/relcaesdonos', Rel_Caes_Donos);
router.put('/api/relcaesdonos', updateRel_caes_donos);
router.delete('/api/relcaesdonos/:id', deleteRel_Caes_Donos);

module.exports = router;

