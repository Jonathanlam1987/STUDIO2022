const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult} = require('express-validator');

const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 3333;
require('dotenv').config();

// MIDDLEWARE
// app.use(express.urlencoded( { extended: true}));
const urlencodedPaser = bodyParser.urlencoded({ extended: false})
app.use(express.static("public"));
app.use(expressLayouts);
app.set('layout', './layouts/main');
// SET TEMPLATING ENGINE
app.set('view engine', 'ejs');

app.post('/signup', urlencodedPaser,[

    check('username', '*Username must be 5 characters long')
    .exists()
    .isLength({ min : 5})
    .isLength({max:15}),

    check('email', '*Invalid email')
    .isEmail()
    .normalizeEmail(),

    check('password', '*Password must be 5 characters long, and no more than 15')
    .isLength({min: 5 })
    .isLength({max: 15}),
   
    check('confirmPassword', '*Invalid')
    .isLength({min: 5})
    .isLength({max: 15})


 ], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
}    const alert = errors.array()
    res.render('signup', { alert } )
})




// ROUTING
const routes = require('./server/routes/studioRoutes.js');
const { exists } = require('./server/models/painting.js');
const { param } = require('./server/routes/studioRoutes.js');
app.use('/', routes);












// STARTING SERVER 
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}` )
})