'use strict';


const express = require('express');

const DataManger = require('../models/data-collection-class.js');

const TodoModel = require('../models/todo.js');

const dataManger = new DataManger(TodoModel);

const router = express.Router();

router.get('/', allTodo);

router.get('/:id', specificTodo);

router.post('/', addTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

async function allTodo(req, res, next) {
  try {
    const resObj = await dataManger.read();
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function specificTodo(req, res, next) {
  try {
    const resObj = await dataManger.read(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function addTodo(req, res, next) {
  try {
    const todoObj = req.body;
    const resObj = await dataManger.create(todoObj);
    res.status(201).json(resObj);
  } catch (error) {
    next(error);
  }
}

async function updateTodo(req, res, next) {
  try {
    const todoObj = req.body;
    const resObj = await dataManger.update(req.params.id, todoObj);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async function deleteTodo(req, res, next) {
  try {
    const todoObj = req.body;
    const resObj = await dataManger.delete(req.params.id, todoObj);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
