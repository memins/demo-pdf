const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/demo", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Data received" });
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
