const Chef = require("../models/chefs");

module.exports.getChefs = (req, res, next) => {
  Chef.find({})
    .then((chefs) => {
      if (!chefs) {
        throw new Error("Нет поваров");
      }

      res.send(chefs);
    })
    .catch(next);
};

module.exports.createChef = (req, res, next) => {
  const { name } = req.body;

  Chef.create({ name })
    .then((chef) => {
      res.send(chef);
    })
    .catch(next);
};

module.exports.deleteChef = (req, res, next) => {
  const { chefId } = req.params;

  Chef.findById(chefId)
    .then((chef) => {
      if (!chef) {
        throw new NotFoundError("Такого повара не существует");
      }
      chef
        .remove()
        .then(() => {
          res.send(chef);
        })
        .catch(next);
    })
    .catch(next);
};
