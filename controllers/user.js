'use strict'
var User = require('../models/user');
function getUser(req,res){
    var userId= req.params.id;
    var params=req.body;
    User.findById(userId,(err,user)=>{
        if(err){
            res.status(500).send({message:'error al obtener usuario'})
        }
        else if(!userId){
            res.status(404).send({message:'No existe el usuario'})
        }
        else{res.status(200).send({message:`bienvenido ${params.user}`})}

    })
}