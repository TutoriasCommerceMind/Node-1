const http= require("http")

const port = 3001

//Creacion del server

const server= http.createServer()

// Ruta principal "/"

const homeHandler= (req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"})
    res.end("<h1>Pagina principal a traves de Node JS Modulo HTTP </h1>")
} 

// Ruta About "/about"

const aboutHandler= (req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"})
    res.end("<h1>Pagina de About a traves de Node Js Modulo HTTP</h1>")
}


// Asignacion a las rutas

server.on("request",(req,res)=>{
    if(req.url === "/"){
        homeHandler(req,res)
    } else if (req.url === "/about"){
        aboutHandler(req,res)
    } else{
        res.writeHead(404, {"Content-Type":"text/html"})
        res.end("<h1>Pagina no encontrada</h1>")
    }
})

server.listen(port, ()=>{
    console.log("Servidor funcionando correctamente en el puerto ", port)
})