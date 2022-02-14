

require('../models/database');



const Painting = require('../models/painting')

// GET / Homepage

exports.homepage = async (req, res) => {
    try {
        const paintings = await Painting.find({});
        res.render('home', { paintings });     
    } catch (error) {
        res.status(500).send({ message: error.message || "error occured"});
    }
}




// GET / Prints
exports.explorePaintings = async(req, res) => {
    try { 
        let paintingId = req.params.id;
        const paintings = await Painting.findById(paintingId);

        res.render('prints', { paintings });
    } catch (error) {
        res.status(500).send({message: error.message || "error message"});
    }
}

// GET / Signup
exports.signupPage = async(req, res) => {
    try {
        res.render('signup');
    } catch (error) {
        res.status(500).send({ message: error.message || " error message"});
    }
}

// GET / Login
exports.loginPage = async (req, res) => {
    try {
        res.render('login')
    } catch (error) {
        res.status(500).send({ message : error.message || " error message "})
    }
}


// GET CART

exports.ShoppingCart = async (req, res) => {
    try {
        res.render('cart')
    } catch (error) {
        res.status(500).send({message : error.message || ' Err'})
    }
}