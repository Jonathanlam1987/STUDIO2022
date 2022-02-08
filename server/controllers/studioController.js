

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





exports.explorePaintings = async(req, res) => {
    try { 
        let paintingId = req.params.id;
        const paintings = await Painting.findById(paintingId);

        res.render('prints', { paintings });
    } catch (error) {
        res.status(500).send({message: error.message || "error message"});
    }
}


