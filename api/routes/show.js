const show = require('../controllers/show'); 
const express = require("express")
router = express.Router();

router.all("/", show.show);

module.exports = router;
