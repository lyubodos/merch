const Tshirts = require("../models/Tshirts");


const getShirts = (req, res, next) => {
    Tshirts.find()
    .then(shirts => res.json(shirts))
    .catch(err => console.log(err));
};


module.exports = {
    getShirts
}