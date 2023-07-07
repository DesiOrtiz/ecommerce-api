const connection = require ("../database");
const obtenerProductos = (req, res) => {
    connection.query ("select * from productos", (error, results) => {
     if (error) {
        console.error("Error al obtener productos", error);
        res.status(500).json({
            error: "Error al obtener productos", 
        });
     } else{
        res.json(results);
     }
    });
};

const obtenerProductosPorId = (req, res) =>{
const id = req.params.id_productos;

connection.query("SELECT*FROM productos WHERE id_producto = ?", [id], (error, results) => {
    if(error){
        console.error("Error al obtener productos", error);
        res.status(500).json({error:"Ocurrio un error el obtener la productos"});
    }else if (results.lenght === 0){
        res.status(500).jason({error: "El productos no fue encontrada"});
    }else {
        res.json(results [0]);
    }
});
}

const crearProductos = (req, res) => {
    const {nombre, descripcion, precio, imagen} = req.body;
    connection.query("INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?,?,?,?)", [nombre, descripcion, precio, imagen], (error, results) => {
        if (error){
            console.error("Error al agregar producto", error);
            res.status(500).json({error: "Error al agregar producto"});
        }else {
            res.json({message:"Producto agregado"});
        }
    })
}

const actualizarProductosPorId =(req, res) => {
    const id = req.params.id_productos;
    const {nombre, descripcion, precio, imagen} = req.body;

    connection.query("UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, imagen = ? WHERE id_producto = ?",[nombre, descripcion, precio, imagen, id], (error,results) => {
        if(error){
            console.error("Error al actualizar productos", error);
            res.status(500).json({error:"Ocurrio un error al actualiza la productos"});
        }else{
            res.json({message:"El producto fue actualizada correctamente"});
        }
    })
}

const eliminarProductosPorId = (req, res) => {
    const id = req.params.id_productos;

    connection.query("DELETE FROM productos WHERE id_producto = ?", [id], (error, results) => {
        if (error) {
            console.error("No se eliminó el productos correctamente", error);
            res.status(500).json({ error: "No se eliminó el productos correctamente" });
        } else if (results.lenght === 0){
            res.status(500).jason({error: "La categoria no fue eliminada"});
        } else {
            res.json({ Message: "Se eliminó el productos correctamente" });    
        }
    })
}

module.exports = {
obtenerProductos,
obtenerProductosPorId,
crearProductos,
actualizarProductosPorId,
eliminarProductosPorId,  

}