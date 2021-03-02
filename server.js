require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

/* middleware before routes */
app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => {
  console.log("server has start");
});
