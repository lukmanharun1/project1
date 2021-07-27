const express = require('express');
const router = express.Router();
const kotaController = require('../controllers/KotaController');
router.get('/kota', kotaController.getAllKota);
router.get('/kota/:id', kotaController.showKotaById);
router.post('/kota', kotaController.createKota);
router.put('/kota/:id', kotaController.updateKota);
router.delete('/kota/:id', kotaController.hapusKota);

module.exports = router;