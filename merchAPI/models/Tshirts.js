const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shirtSchema = new Schema({
  name: {
    type: String,
    required: true,
    allowNull: false,
  },

  color: {
    type: String,
    required: true,
    allowNull: false,
  },

  category: {
    type: String,
    required: true,
    allowNull: false,
  },

  likes: {
    type: Number,
    required: true,
    allowNull: false,
  },

  size: {
    type: String,
    required: true,
    allowNull: false,
  },

  likedBy: {
    type: Array,
    required: true,
    allowNull: false,
  },

  comments: {
    type: Map,
    of: String,
    required: true,
    allowNull: false,
  },
});

const Tshirts = mongoose.model("Tshirts", shirtSchema);

module.exports = Tshirts;
