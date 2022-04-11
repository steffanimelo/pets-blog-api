const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://DogsBlog:project6@cluster0.k59y5.mongodb.net/DogsAPI?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conected to MongoDB"))
  .catch((error) => console.log(error));
