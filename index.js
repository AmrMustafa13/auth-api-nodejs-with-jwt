const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

// import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// connect to the database
mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("connected");
});

// middlewares
app.use(express.json());

// routes middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => console.log("server is running"));
