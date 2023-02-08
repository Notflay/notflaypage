"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _expressHandlebars = require("express-handlebars");
var _morgan = _interopRequireDefault(require("morgan"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var app = (0, _express["default"])();
app.use(_express["default"].json());

// Config para que funciones el hbs

app.set("views", _path["default"].join(__dirname, "views"));
app.engine(".hbs", (0, _expressHandlebars.engine)({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", ".hbs");

// Middlewares
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
// --------
app.use(_indexRoutes["default"]);
// Static files
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
app.listen(3000);