const express = require('express');
const router = express.Router();
const studioController = require('../controllers/studioController');


// App Routes

router.get('/', studioController.homepage);
router.get('/prints/:id', studioController.explorePaintings);
router.get('/signup', studioController.signupPage);
router.get('/login', studioController.loginPage);
router.get('/cart', studioController.ShoppingCart)


module.exports = router;