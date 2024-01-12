var inputC = document.getElementById("value");
inputC.addEventListener("keyup",convertidor);
outputDiv = document.getElementById("resultado"); //ver si funciona sin el const
unidad = document.getElementById("unidad")
unidad.addEventListener("change",convertidor)

function convertirF(){ 
    return (valor * 9/5) + 32;
}
function convertirK(){
    return valor + 273.15;
}

function convertidor(){
    if (inputC.value==""){
        return;
    }
    valor = inputC.value;
    valor = parseFloat(valor)

    if (unidad.value=="f"){
        outputDiv.innerHTML = valor + "°C equivalen a " + convertirF(valor) + "°F";
    }else if(unidad.value=="k") {
        outputDiv.innerHTML = valor + "°C equivalen a " + convertirK(valor) + " K";
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}