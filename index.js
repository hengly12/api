const app = require('express')();
const data = require('./data/data.json');
const PORT = 4000;

app.get('/test', (req, res) => {
    res.status(200).send(
      data
    );
});

app.get('/todo', (req, res) => {
    const { id } = req.query; 
    const dataQuery = data.filter((item) => {
      if (id) {
        return item.id === Number(id); 
      }
      return true; 
    });
  
    res.status(200).send(dataQuery); 
});

app.post('/todo', (req, res) => {
    const { id, title, completed } = req.query; 
    const newTodo = { id: Number(id), title, completed: Boolean(completed) }; 
    console.log(newTodo, 'added');
    data.push(newTodo);
});

app.put('/todo', (req, res) => {
    const { id, title, completed } = req.query; 
    const todoIndex = data.findIndex((item) => item.id === Number(id));
    if (todoIndex !== -1) {
      data[todoIndex] = { id: Number(id), title, completed: Boolean(completed) };
    }
    console.log(data[todoIndex]);
});

app.delete('/todo', (req, res) => {
    const { id } = req.query; 
    const todoIndex = data.findIndex((item) => item.id === Number(id));
    if (todoIndex !== -1) {
      data.splice(todoIndex, 1);
    }
    console.log(data[todoIndex], 'deleted');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
