let operacion = prompt ("Ingrese una operacion");
let valor1 = parseInt (prompt ("Ingrese valor 1"));
let valor2 = parseInt (prompt ("Ingrese un valor 2"));

if (operacion === "sum") {
    console.log (valor1 + valor2);
}

if (operacion === "div") {
    if (valor2 === 0) {
        do {
            valor2 = parseInt (prompt ("Ingrese un valor 2 nuevamente"));
        } while (valor2 === 0);
        
    }
    console.log (valor1 / valor2);
}