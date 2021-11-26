const express = require('express');
const cors = require('cors');

// Creacion de servidor express
const app = express();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());


// Rutas
app.use('/api/user', require('./routes/user'));


app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto 4000`);
});