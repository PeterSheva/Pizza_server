const router = require('express').Router();

const { getChefs, createChef, deleteChef } = require('../controllers/chefs');

router.get('/', getChefs);

router.post('/', createChef);

router.delete('/:chefId', deleteChef);

module.exports = router;
