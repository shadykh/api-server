'use strict';


const express = require('express');

const DataManger = require('../models/data-collection-class.js');

const AnimeModel = require('../models/anime.js');

const dataManger = new DataManger(AnimeModel);

const router = express.Router();

router.get('/', allAnime);

router.get('/:id', specificAnime);

router.post('/', addAnime);

router.put('/:id', updateAnime);

router.delete('/:id', deleteAnime);

async function allAnime(req, res, next) {
  try {
    const resObj = await dataManger.read();
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function specificAnime(req, res, next) {
  try {
    const resObj = await dataManger.read(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function addAnime(req, res, next) {
  try {
    const animeObj = req.body;
    const resObj = await dataManger.create(animeObj);
    res.status(201).json(resObj);
  } catch (error) {
    next(error);
  }
}

async function updateAnime(req, res, next) {
  try {
    const animeObj = req.body;
    const resObj = await dataManger.update(req.params.id, animeObj);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function deleteAnime(req, res, next) {
  try {
    const animeObj = req.body;
    const resObj = await dataManger.delete(req.params.id, animeObj);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
