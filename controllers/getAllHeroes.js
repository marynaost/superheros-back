const { Hero } = require("../models/heroes");

const getAllHeroes = async (req, res, next) => {
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const heroes = await Hero.find({}, "", {
    skip,
    limit: Number(limit),
  });

  const shownDocuments = heroes.length;
  const totalDocuments = await Hero.countDocuments({});
  console.log(totalDocuments);
  console.log(shownDocuments);
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
    totalCount: totalDocuments,
    page: Number(page),
    data: heroes,
  });
};

module.exports = getAllHeroes;
