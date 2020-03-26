const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// add event that examine if the code is connected
var dbConnect = mongoose.connection;
dbConnect.on("error", console.error.bind(console, "connection error:"));
dbConnect.once("open", function() {
  console.log("MongoDB Connected ...");
  // we're connected!
});

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
