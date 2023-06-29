const express = require("express");
/* var router = require("./routes/index.routes.js"); */
const path = require("path");

const app = express();
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(express.urlencoded({ extended: false }));
// --------
app.use("/", (req, res) => {
  console.log(path.join(__dirname, "views", "public"));
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

const port = process.env.PORT || 9001;
app.listen(port, () => console.log("connect"));
