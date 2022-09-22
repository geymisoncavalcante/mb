const express = require('express');
const armasController = require('../controllers/armasController');
const especieController = require('../controllers/especieController');
const router = express.Router();

//     /armasRouter isso é a router do meu middleware
router.get('/armas', armasController.armasView);

router.get('/cadArmas', armasController.cadArmas);

router.post('/insertArmas', armasController.insertArmas);
// router.get('/getId',armasController.getId)

//  /armasRouter/especie
router.get('/especie', especieController.especieView);

router.get('/getId/:id?', armasController.getId);



module.exports = router