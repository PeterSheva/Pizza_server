const Dish = require('../models/dishes');

module.exports.getChefDishes = (req, res, next) => {
  const { chefId } = req.params;

  Dish.find({ chef: { _id: chefId } })
    .populate('chef')
    .then((dish) => {
      if (!dish) {
        throw new Error('Нет блюд');
      }

      res.send(dish);
    })
    .catch(next);
};

module.exports.addDishToChef = (req, res, next) => {
  const { chefId, dishName } = req.body;

  Dish.create({ chef: chefId, dishName })
    .then((dish) => {
      res.send(dish);
    })
    .catch(next);
};

module.exports.deleteDish = (req, res, next) => {
  const { _id } = req.body;

  Dish.findById(_id)
    .then((dish) => {
      if (!dish) {
        throw new NotFoundError('Такого блюда не существует');
      }
      dish
        .remove()
        .then(() => {
          res.send(dish);
        })
        .catch(next);
    })
    .catch(next);
};

module.exports.switchChef = (req, res, next) => {
  const { chefId } = req.body;
  const { dishId } = req.params

  Dish.findByIdAndUpdate(dishId, { chef: chefId }, { new: true, runValidators: true })
    .then((dish) => {
      if (!dish) {
        throw new NotFoundError('Такого блюда не существует');
      }

      res.send(dish);
    })
    .catch(next);
};

module.exports.changeDish = (req, res, next) => {
  const { newName } = req.body;
  const { dishId } = req.params

  Dish.findByIdAndUpdate(dishId, { dishName: newName }, { new: true, runValidators: true })
    .then((dish) => {
      if (!dish) {
        throw new NotFoundError('Такого блюда не существует');
      }

      res.send(dish);
    })
    .catch(next);
};