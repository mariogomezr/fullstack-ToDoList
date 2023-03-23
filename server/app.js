const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks', tasks);

app.get('/', (req, res) => {
  res.send('use /tasks to access the tasks');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
