//dependencias
const express = require('express');
const cors = require ('cors');
const categoriasRouter= require('./router/categoriasRouter');
const productosRouter= require('./router/productosRouter')

//app tendra todos los atributos y metodos de express

const app = express ();

//
app.use(cors());
app.use (express.json());
//rutas al router
app.use ('/categorias', categoriasRouter);
app.use ('/productos', productosRouter);

app.get("/", (req, res) => {
    res.send("<h1>Hola pikachu</h1>");
});

app.listen(3001,() => {
    console.log("API escuchando por el puerto 3001");
});