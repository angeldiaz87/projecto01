const calculadora = {
dividir : (a,b) => {
    if(a == 0 || b == 0){
        return "No se puede dividir por 0"
    }
    return a / b
},
multiplicar : (a,b) => (a == 0 || b == 0) ? "No se puede multiplicar por 0" : a * b
}

let restar=(a,b)=> a-b
console.log (restar());
