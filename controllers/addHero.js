const { Realty } = require("../models/heroes");

const addHero = async (req, res, next) => {
  const result = await Realty.create(req.body);
  res.status(201).json({
    status: "created",
    code: 201,
    data: result
  });
};

module.exports = addHero;
