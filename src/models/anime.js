'use strict';


const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  character: { type: String,  required: true },
  hairColor: { type: String,  default: 'White' },
});

const AnimeModel = mongoose.model('Anime', animeSchema);


module.exports = AnimeModel;