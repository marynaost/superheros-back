const { Realty } = require("../models/heroes");

const getAllHeroes = async (req, res, next) => {
  const heroes = await Realty.find({});
  if (heroes.length === 0) {
    res.status(400).json({
      status: "Error 400",
      message: `The list of heroes is empty`,
    });
    return;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: heroes,
    },
  });
};

module.exports = getAllHeroes;
