const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 3333;
require('dotenv').config();

// MIDDLEWARE
app.use(express.urlencoded( { extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// ROUTING
const routes = require('./server/routes/studioRoutes.js');
app.use('/', routes);












// STARTING SERVER 
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}` )
})