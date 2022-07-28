const app = require("./app");
const mongoose = require("mongoose");

// const { DB_HOST } = process.env;

mongoose
  .connect(
    "mongodb+srv://Maryna:01111995nm@cluster0.avjyq.mongodb.net/superheroes?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
