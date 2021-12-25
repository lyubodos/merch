const Tshirts = require("../models/Tshirts");

//Function for calling and receiving all of the stored tshirts in the collection
const getShirts = (req, res, next) => {
  Tshirts.find()
    .then((shirts) => res.json(shirts))
    .catch((err) => console.log(err));
};

//Function for calling and receiving a specific tshirt using the unique tshirt _id variable
const getShirt = (req, res, next) => {
  const shirtId = req.params.id;

  Tshirts.find({ _id: shirtId })
    .then((shirt) => res.json(shirt))
    .catch((err) => console.log(err));
};

//Function for creating a brand new tshirt in the tshirts collection
const createShirt = (req, res, next) => {
  const name = req.body.name;
  const color = req.body.color;
  const category = req.body.category;
  const likes = req.body.likes;
  const size = req.body.size;
  const likedBy = req.body.likedBy;
  const comments = req.body.comments;

  const newShirt = new Tshirts({
    name: name,
    color: color,
    category: category,
    likes: likes,
    size: size,
    likedBy: likedBy,
    comments: comments,
  });

  newShirt
    .save()
    .then((newShirt) => {
      console.log(`New shirt created: \n${res.json(newShirt)}`);
    })
    .catch((err) => console.log(err));
};

//Function for editing an already existing tshirt in the tshirt collection
const editShirt = (req, res, next) => {
  const shirtId = req.params.id;

  const name = req.body.name;
  const color = req.body.color;
  const category = req.body.category;
  const likes = req.body.likes;
  const size = req.body.size;
  const likedBy = req.body.likedBy;
  const comments = req.body.comments;

  const editShirt = {
    name: name,
    color: color,
    category: category,
    likes: likes,
    size: size,
    likedBy: likedBy,
    comments: comments,
  };

  Tshirts.updateOne(
    { _id: shirtId },
    {
      $set: {
        ...editShirt,
      },
    }
  )
    .then((editShiry) => res.json(editShiry))
    .catch((err) => console.log(err));
};

//Function for deleting a specific tshirt from the tshirts collections
const removeShirt = (req, res, next) => {
  const shirtId = req.params.id;

  Tshirts.remove({ _id: shirtId })
    .then((shirt) => res.json(shirt))
    .catch((err) => console.log(err));
};

//Exporting all of the contoller functions
module.exports = {
  getShirts,
  getShirt,
  createShirt,
  editShirt,
  removeShirt,
};
