// Crear un programa que calcule cuantas palabras itene el archivo "Texto"

const fs= require("fs")

const texto=  process.argv[2]

const resultado= "./resultado.txt"


//Leer el archivo de entrada

fs.readFile(texto, "utf-8", (err, data)=>{
if (err){
    console.error("Error al leer el archivo ",err)
    return
}

// Contar las palabras

const palabras= data.split(/\s+/).length

// Escribir el resultado en un txt

fs.writeFile(resultado, palabras.toString(), (err)=>{
    if(err){
        console.error("Error al escribir en el archivo ", err)
        return
    }

    console.log("El numero de las palabras que contiene el arhcivo original se guardo en ", resultado)
})

})
