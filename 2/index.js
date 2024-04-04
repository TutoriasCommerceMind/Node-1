//Requerir las funciones

const rectangulo= require("./rectangulo")

//DIMENSIONES DEL RECTANGULO


const b=10
const a= 20


//Calcular el area del rectangulo usando la funcion del modulo "rectangulo.js"
const area= rectangulo.calcularArea(b,a)
console.log("El area del recangulo es de ", area)

//Calcular el perimetro del rectangulo usando la funcion del modulo "rectangulo.j"

const perimetro= rectangulo.calcularPerimetro(b,a)
console.log("El perimetro del rectangulo es de ", perimetro)