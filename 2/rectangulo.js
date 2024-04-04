//Crear funcion para calcular el area

const calcularArea= (base,altura)=>{
    return base*altura
}

//Crear funcion para calcular el perimetro

const calcularPerimetro= (base,altura)=>{
    return 2*(base+altura)
}

module.exports={
    calcularArea,
    calcularPerimetro
}