const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let tasks = [
  { id: 1, name: 'Hacer la compra', description: 'Comprar leche y pan', dueDate: '2024-03-30', completed: false },
  { id: 2, name: 'Terminar proyecto', description: 'Finalizar la documentación', dueDate: '2024-04-05', completed: false }
];
let nextTaskId = 3;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { name, description, dueDate } = req.body;
  const newTask = {
    id: nextTaskId++,
    name,
    description,
    dueDate,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.patch('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = true;
      res.json(task);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

