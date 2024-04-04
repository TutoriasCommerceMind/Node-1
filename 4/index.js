const express= require("express")

const app= express()

//Declaracion del puerto

let puerto= 3000

// Funcion para manejar la ruta "/"

app.get("/", (req,res)=>{
    res.send("<h1>Pagina Principal a traves de EXPRESS </h1>")
})

// Funcion para manejar el About "/About"

app.get("/about",(req,res)=>{
    res.send("<h1>Pagina de About a traves de EXPRESS</h1>")
})

// Funcion 404

app.get("*",(req,res)=>{
    res.send("<h1>404 NOT FOUND ESCRITO POR NOSOTROS</h1>")
})

// Inicio de Servidor

app.listen(puerto, ()=>{
    console.log("Servidor escuchando en el puerto "+ puerto)
})