const { Realty } = require("../models/heroes");
const removeHero = async (req, res, next) => {
  const { heroId } = req.params;
  const result = await Realty.findByIdAndRemove(heroId);
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
    message: "hero deleted",
    data: result,
  });
};

module.exports = removeHero;
