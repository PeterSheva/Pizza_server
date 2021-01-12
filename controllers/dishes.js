const Dish = require('../models/dishes');

module.exports.getChefDishes = (req, res, next) => {
  const { dayId } = req.params;

  Dish.find({ day: { _id: chefId } })
    .sort({ time: 'asc' })
    .populate('day')
    .then((appointment) => {
      if (!appointment) {
        throw new Error('Нет пользователей');
      }

      res.send(appointment);
    })
    .catch(next);
};

module.exports.addDishToChef = (req, res, next) => {
  const { dayId, time, half } = req.body;

  Dish.create({ time, half, day: dayId })
    .then((appointment) => {
      res.send(appointment);
    })
    .catch(next);
};

module.exports.deleteDish = (req, res, next) => {
  const { _id } = req.body;

  Dish.findById(_id)
    .then((appointment) => {
      if (!appointment) {
        throw new NotFoundError('Такого дня не существует');
      }
      appointment
        .remove()
        .then(() => {
          res.send(appointment);
        })
        .catch(next);
    })
    .catch(next);
};
