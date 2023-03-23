const Todo = require('../schemas/todo');

exports.getAll = async (_req, res) => {
  await Todo.find({}).then((tasks) => {
    res.status(200).send(tasks);
  });
};

exports.post = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    completed: req.body.completed || false
  });
  try {
    await todo.save().then((todo) => {
      res.status(201).send(todo);
    });
  } catch (err) {
    console.log(`Error creating todo item: ${err}`);
    res.status(500).send(`Error creating todo item: ${err}`);
  }
};

exports.delete = async (req, res) => {
  await Todo.deleteMany({ title: req.body.title });
  res.sendStatus(204);
};
exports.deleteById = async ({ params: { id } }, res) => {
  await Todo.deleteOne({ _id: id });
  res.sendStatus(204);
};

exports.patch = async ({ body: { id, title, completed = false } }, res) => {
  await Todo.updateOne({ _id: id }, { title, completed })
  res.sendStatus(204)

};
