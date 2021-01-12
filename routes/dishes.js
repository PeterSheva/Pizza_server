const router = require('express').Router();

const {
  getChefDishes,
  addDishToChef,
  deleteDish,
} = require('../controllers/dishes');

router.get('/:chefId', getChefDishes);

router.post('/', addDishToChef);

router.delete('/', deleteDish);

module.exports = router;
