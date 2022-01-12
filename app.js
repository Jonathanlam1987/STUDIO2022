const express = require('express');
const { engine } = require('express-handlebars');



const app = express();
const PORT = 3333;



// CONFIG EXPRESS TO USE HANDLEBARS

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// MIDDLEWARE
app.use(express.static('public/style/'));
app.use(express.static(__dirname + '/public'));



// ROUTING
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}` )
})