const { Realty } = require("../models/heroes");
const updateHero = async (req, res, next) => {
  const { heroId } = req.params;
  if (!req.body) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "missing fields",
    });
    return;
  }
  const result = await Realty.findByIdAndUpdate(heroId, req.body, {
    new: true,
  });
  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Hero with id = ${heroId} not found`,
    });
    return;
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateHero;
