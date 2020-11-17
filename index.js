var express = require("express");
var app = express();

var nombre = require("./nombre");


app.get("/",function(req,res){
    res.send("Hola Pepe!");
});

app.get("/nombre",function(req,res){
    nombre.ingresarNombre();
    
});

app.get("/ads", function(req, res){
    res.send("Bienvenidos a la Clase 4 de NodeJs!");
})

app.get("/nombre", function(req, res){
    res.send("Hola JUAN!");
})

app.get("/SUMA", function(req, res){
    var suma = (15+7);
    res.json(suma);
})

app.listen(3000, function() {
    console.log("Aplicacion ejemplo, escuchando el puerto 3000!");
});