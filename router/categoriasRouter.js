const express = require("express");
const categoriasControllers = require ("../controllers/categoriasControllers");
const router =express.Router();

//rutas para las categorias
router.get('/', categoriasControllers.obtenerCategorias);
router.get('/:id_categorias', categoriasControllers.obtenerCategoriasPorId);
router.post('/', categoriasControllers.crearCategorias);
router.delete('/:id_categorias', categoriasControllers.eliminarCategoriasPorId);
router.put('/:id_categorias', categoriasControllers.actualizarCategoriasPorId);


module.exports =router;