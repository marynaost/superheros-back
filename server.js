const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
