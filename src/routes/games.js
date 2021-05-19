'use strict';


const express = require('express');

const DataManger = require('../models/data-collection-class.js');

const GameModel = require('../models/games.js');

const dataManger = new DataManger(GameModel);

const router = express.Router();

router.get('/', allGame);

router.get('/:id', specificGame);

router.post('/', addGame);

router.put('/:id', updateGame);

router.delete('/:id', deleteGame);

async function allGame(req, res, next) {
  try {
    const resObj = await dataManger.read();
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function specificGame(req, res, next) {
  try {
    const resObj = await dataManger.read(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function addGame(req, res, next) {
  try {
    const gameObj = req.body;
    const resObj = await dataManger.create(gameObj);
    res.status(201).json(resObj);
  } catch (error) {
    next(error);
  }
}

async function updateGame(req, res, next) {
  try {
    const gameObj = req.body;
    const resObj = await dataManger.update(req.params.id, gameObj);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function deleteGame(req, res, next) {
  try {
    const gameObj = req.body;
    const resObj = await dataManger.delete(req.params.id, gameObj);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
