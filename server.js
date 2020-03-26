const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect the db
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "welcome to your app!" });
});

//Defines Route
app.use("/api/test", require("./routes/test"));
app.use("/api/user", require("./routes/user"));
app.use("/api/login", require("./routes/login"));
app.use("/api/chat", require("./routes/chat"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));
