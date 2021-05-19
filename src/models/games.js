'use strict';


const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String,  required: true },
  portal: { type: String,  default: 'PC' },
});

const GameModel = mongoose.model('Game', gameSchema);


module.exports = GameModel;