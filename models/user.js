'use strict'
var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var userSchema=Schema({
    user:String,
    password:String,
    rol:[{type:Schema.ObjectId,
    ref:'roles'}]
});
module.exports=mongoose.model('user',userSchema);