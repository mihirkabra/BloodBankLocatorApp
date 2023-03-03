const mongoose = require("mongoose");
const mongoURI = "mongodb://0.0.0.0:27017/bloodbanks";
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, () => {
      console.log("Connected to Mongo");
    });
  } catch (error) {
    console.log(error);
  }
};

require("./models/Bloodbank");
module.exports = connectToMongo;
