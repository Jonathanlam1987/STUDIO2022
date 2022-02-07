const express = require('express');
const router = express.Router();
const studioController = require('../controllers/studioController');


// App Routes

router.get('/', studioController.homepage);
// router.get('/', studioController.explorePaintings);


module.exports = router;