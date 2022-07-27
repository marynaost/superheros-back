const { Realty } = require("../models/heroes");
const getHeroById = async (req, res, next) => {
  const { heroId } = req.params;
  const hero = await Realty.findById(heroId);

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
    data: {
      result: hero,
    },
  });
};

module.exports = getHeroById;
