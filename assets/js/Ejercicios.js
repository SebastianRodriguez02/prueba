function suma () {
    let valor_usuario = document.getElementById("numero_suma").value
    let resultado = 0
    for (let i = 1; i <= valor_usuario; i++) {
        resultado = resultado + i
        
    }
    let span = document.getElementById("resultado") 
    span.innerHTML = resultado
} 


function Validarnumero () {
let numero = document.getElementById("numero").value;
if(numero % 2 == 0) {
    document.getElementById ("resultadosvalidarnumero").innerHTML=" Par";
} 
else {
    document.getElementById("resultadosvalidarnumero").innerHTML=" Impar";
}
}

function Confirmar () {
    let edad = parseInt (document.getElementById("edad").value);
    let genero = document.querySelector("input[name='Grupo']:checked").value
    if (genero == "hombre")  {
        if (edad <=10) {
            alert ('Reclama un jugo')
        }else if (edad >=18 ) {
            alert ('Reclama una cerveza')
            alert ('Reclama adicionalmente una porción de pizza tres carnes')
        } else {
            alert ('Desafortunadamente, no recibe ningún premio')
        }
        
    }
    else if (genero == "mujer") {
        if (edad <=10) {
            alert ('Reclama un jugo')
        }else if (edad >=18 ) {
            alert ('Reclama una cerveza')
            alert ('Reclama adicionalmente una porción de pizza hawaiana') 
        } else {
            alert ('Desafortunadamente, no recibe ningún premio')
        }
         
    }
}


function TablaMultiplicar() {
    let factor = document.getElementById("multiplicar").value;
    let mensaje="";
    for (let i = 1; i <= 10; i++) {
        let resultadomultiplicacion = factor * i;
        let msnMultiplicacion=  " " + factor +" X " + i + "" + "=" + resultadomultiplicacion +"<br>";
        mensaje=mensaje+msnMultiplicacion;
    }
    document.getElementById("resultadosvalidarmutiplicacion").innerHTML=mensaje;
    
}


function Promedio () {
    let promediodematricula = document.querySelector('#Promedioagregado') 
    let numero = parseInt(promediodematricula.value)
    let valor = 1000000
    let descuentoaplicado = 0

    if (numero < 3) {
        alert ('No aplica ningún descuento para la matricula')
    } else if (numero >= 3 && numero <=4){
        descuentoaplicado= (valor * 5) / 100
        valor = valor - descuentoaplicado
        alert ('El total de tu matricula con descuento es de $' +valor)
    } else if(numero > 4) {
        descuentoaplicado= (valor * 50) / 100
        valor = valor - descuentoaplicado
        alert ('El total de tu matricula con descuento es de $' +valor)
    }
    console.log (valor)
}


