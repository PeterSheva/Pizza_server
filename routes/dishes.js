const router = require('express').Router();

const {
  getChefDishes,
  addDishToChef,
  deleteDish,
  switchChef,
  changeDish,
} = require('../controllers/dishes');

router.get('/:chefId', getChefDishes);

router.post('/', addDishToChef);

router.delete('/', deleteDish);

router.patch('/:dishId', switchChef);

router.put('/:dishId', changeDish);

module.exports = router;
