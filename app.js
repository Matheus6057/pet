const express = require('express');
const bodyParser = require('body-parser');
const petController = require('./controllers/petController');
const app = express();


// Configuração do EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Middleware para parsing do body
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.get('/', petController.getAllPets);
app.get('/add', (req, res) => res.render('add')); 
app.post('/add', petController.addPet); 
app.get('/edit/:id', petController.getPetById); 
app.post('/edit/:id', petController.updatePet); 
app.get('/dell/:id', petController.getDeleteByPet); 
app.post('/dell/:id', petController.deletePet);

// Iniciar o servidor
app.listen(2000, () => {
  console.log('Servidor rodando na porta 2000');
});
