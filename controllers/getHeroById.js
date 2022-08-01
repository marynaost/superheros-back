const { Hero } = require("../models/heroes");
const getHeroById = async (req, res, next) => {
  const { heroId } = req.params;
  const hero = await Hero.findById(heroId);

  if (!hero) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Hero with id = ${heroId} not found`,
    });

    return;
  }

  res.json({
    status: "success",
    code: 200,
    data: hero,
  });
};

module.exports = getHeroById;
