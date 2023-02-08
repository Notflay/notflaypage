const { Router } = require("express");
const { renderHome } = require("../controllers/page.routes.js");

const router = Router();

router.get("/", renderHome);

module.exports = router;
