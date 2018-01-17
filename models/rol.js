'use strict'
//modelo de imagen
var mongoose= require('mongoose')
var Schema = mongoose.Schema
//esquema de objeto con titulo y descripcion
var RolSchema= Schema({
    nombreRol: String,
    //guarda nombre de imagen (imagen.png)
    Prioridad:String,
    
}
)
//crea collecccion de documentos en base de datos
module.exports=mongoose.model('Rol',RolSchema)