"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pageRoutes = require("../controllers/page.routes.js");
var router = (0, _express.Router)();
router.get("/", _pageRoutes.renderHome);
var _default = router;
exports["default"] = _default;