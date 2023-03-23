const express = require('express');
const router = express.Router();
const todo_controller = require('../controller/todo-controller');

router
  .get('/', todo_controller.getAll)
  .post('/', todo_controller.post)
  .patch('/', todo_controller.patch)
  .delete('/', todo_controller.delete)
  .delete('/:id', todo_controller.delete);


module.exports = router;
