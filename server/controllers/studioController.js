

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





// exports.explorePaintings = async(req, res) => {
//     try { 
//         limitNumber = 5;
//         const paintings = await Painting.find({}).limit(limitNumber);

//         res.render('home', { paintings });
//     } catch (error) {
//         res.status(500).send({message: error.message || "error message"});
//     }
// }


