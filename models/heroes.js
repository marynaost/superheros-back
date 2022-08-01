const { Schema, model } = require("mongoose");
const heroesSchema = Schema(
  {
    nickname: {
      type: String,
      required: [true, "Set nickname for hero"],
    },
    real_name: {
      type: String,
      required: [true, "Set real name for hero"],
    },
    origin_description: {
      type: String,
      required: [true, "Set origin description for hero"],
    },
    superpowers: {
      type: String,
      required: [true, "Set superpowers for hero"],
    },
    catch_phrase: {
      type: String,
      required: [true, "Set catch phrase for hero"],
    },
    images: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2017/07/19/17/26/gabriel-2519793_960_720.jpg",
    },
  },
  { versionKey: false, timestamps: true }
);

const Hero = model("heroe", heroesSchema);
module.exports = { Hero };
