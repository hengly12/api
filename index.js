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
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
