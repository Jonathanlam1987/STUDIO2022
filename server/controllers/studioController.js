

require('../models/database');





// GET / Homepage

exports.homepage = async (req, res) => {
    try {
        res.render('home', { title : 'STUDIO - homepage'});     
    } catch (error) {
        res.status(500).send({ message: error.message || "error occured"});
    }
    
    
}