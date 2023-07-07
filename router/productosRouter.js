const express = require("express");
const productosControllers = require ("../controllers/productosControllers");
const router =express.Router();

//rutas para los productos
router.get('/', productosControllers.obtenerProductos);
router.get('/:id_productos', productosControllers.obtenerProductosPorId);
router.post('/', productosControllers.crearProductos);
router.delete('/:id_productos', productosControllers.eliminarProductosPorId);
router.put('/:id_productos', productosControllers.actualizarProductosPorId);


module.exports =router;