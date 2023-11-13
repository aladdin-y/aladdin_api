const info = require('../controllers/info'); 
const express = require("express")
router = express.Router();

router.all("/", info.InfoControl);

module.exports = router;
