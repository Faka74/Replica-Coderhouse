// Entrega 1 FUNCIONES

// const nombre = "facundo";
// const apellido = "taddia";
// let edadFacu = 18;
// let edadLucas = 19;
// const blanco = " ";
// alert("Bienvenido Usuario");

// // funcion
// function ingresarNombre() {
//     let nombreIngreso = prompt("Ingresa tu nombre");
//     alert("Tu nombre es" + blanco + nombreIngreso);
// }

// ingresarNombre()

// let ingresaTuEdad = prompt("Ingresa tu edad");
// if (ingresaTuEdad >= edadFacu) {
//     alert("Eres mayor que Facundo");
// }

// else if (ingresaTuEdad <= edadFacu) {
//     alert("Eres menor que facundo");
//     console.log(ingresaTuEdad);
// }

// // Nota de alumnos Escuela
// let notasMartinaPrimerTrimestre = 7
// let notasMartinaSegundoTrimestre = 5
// let notasMartinaTercerTrimestre = 8
// let promedioAnualMartina = (notasMartinaPrimerTrimestre + notasMartinaSegundoTrimestre + notasMartinaTercerTrimestre) / 3;
// console.log(promedioAnualMartina);

// // Calculo de producto con iva
// let fideosMarolioPrecio = 300;
// let iva = 21;
// let calculoIva = (fideosMarolioPrecio * iva)/100;
// console.log(calculoIva);
// let precioFinalFideos = fideosMarolioPrecio + calculoIva;
// console.log(precioFinalFideos);

// // Promedio de edad familia
// let edadFacundo = 18;
// let edadAlan = 19;
// let edadGabriela = 40;
// let edadMatias = 60;
// let promedioFinal = (edadAlan + edadGabriela + edadFacundo + edadMatias) / 4;
// console.log(promedioFinal)

// Fin entrega 1


// Entrega 2 DOM


// const nombreIngresado = prompt("Bienvenido a CoderHouse,ingresa nombre y apellido por favor..")
// console.log("Nombre : " + nombreIngresado + " ")

// const emailIngresado = prompt("Ok,ahora ingresa tu mail. ")
// console.log("Email : " + emailIngresado + " ")

// const ingresaDni = prompt("Por ultimo,ingresa tu dni para completar el inicio de sesion. ")
// console.log(" Dni: " + ingresaDni)
// alert("¡Felicidades " + nombreIngresado + "!,ingresaste a la plataforma CoderHouse.")

// const empleadoPablo = { nombre: "Pablo", sueldo: 150000, edad: 35 };
// const empleadoMartina = { nombre: "Martina", sueldo: 110000, edad: 22 };
// const empleadoTeo = { nombre: "Teo", sueldo: 90000, edad: 19 }


// let accionPorRealizar = prompt("Que accion desea realizar " + nombreIngresado + "?" + ", las opciones validas son : Calcular y Filtrar");
// const accionesValidas = ["calcular", "buscar", "filtrar"]

// if (accionPorRealizar.toLowerCase() == accionesValidas[0]) {
//     alert(nombreIngresado + ",elegiste la opcion Calcular")
//     const cifraUno = parseInt(prompt("Ingresa la primera cifra a calcular"))
//     const operador = prompt("Ingresa una de estas 4 operaciones ( + - * / )")
//     const cifraDos = parseInt(prompt("Ingresa la segunda cifra a calcular"))
//     switch (operador) {
//         case "+":
//             resultado = cifraUno + cifraDos
//             document.write("El resultado de su operacion es : " + cifraUno + operador + cifraDos + "=" + resultado);
//             break;
//         case "-":
//             resultado = cifraUno - cifraDos
//             document.write("El resultado de su operacion es : " + cifraUno + operador + cifraDos + "=" + resultado);
//             break;
//         case "*":
//             resultado = cifraUno * cifraDos
//             document.write("El resultado de su operacion es : " + cifraUno + operador + cifraDos + "=" + resultado);
//             break;
//         case "/":
//             resultado = cifraUno / cifraDos
//             document.write("El resultado de su operacion es : " + cifraUno + operador + cifraDos + "=" + resultado);
//             break;
//     }
// }
// else if (accionPorRealizar.toLowerCase() == accionesValidas[2]) {
//     alert(nombreIngresado + ",elegiste la opcion filtrar")
//     let filtradoPregunta = prompt("Estas filtrando,escribe la palabra Empleados,si quieres conocer los nombres de nuestro equipo de trabajo,si quieres conocer sus sueldos escribe la palabra Sueldos y si quieres conocer la edad coloca la palabra Edad");
//     if (filtradoPregunta.toLowerCase() == "empleados") {
//         alert("Nuestros empleados son: " + empleadoMartina["nombre"] + " " + empleadoPablo["nombre"] + " y " + empleadoTeo["nombre"])
//         document.write("Nuestros empleados son: " + empleadoMartina["nombre"] + " " + empleadoPablo["nombre"] + " y " + empleadoTeo["nombre"])
//     }
//     else if (filtradoPregunta.toLowerCase() == "sueldos") {
//         alert("Los sueldos de nuestros empleados son: " + "Martina : " + empleadoMartina["sueldo"])
//         alert("Los sueldos de nuestros empleados son: " + "Pablo : " + empleadoPablo["sueldo"])
//         alert("Los sueldos de nuestros empleados son: " + "Teo : " + empleadoTeo["sueldo"])
//         let ordenado = prompt("Deseas ordenarlos de mayor a menor (escribir > ) o de menor a mayor (escribir <)")
//         const arraySueldos = [empleadoMartina["sueldo"], empleadoPablo["sueldo"], empleadoTeo["sueldo"]]
//         if (ordenado == ">") {
//             arraySueldos.sort((a, b) => a > b ? 1 : -1)
//             document.write(arraySueldos)
//         }
//         else if (ordenado == "<") {
//             arraySueldos.sort((a, b) => a > b ? -1 : 1)
//             document.write(arraySueldos)
//         }
//     }

//     else if (filtradoPregunta.toLowerCase() == "edad") {
//         alert("La edad de nuestros empleados son: " + "Martina : " + empleadoMartina["edad"] + " años")
//         alert("La edad de nuestros empleados son: " + "Pablo : " + empleadoPablo["edad"] + " años")
//         alert("La edad de nuestros empleados son: " + "Teo : " + empleadoTeo["edad"] + " años")
//     }
// }


// Fin entrega 2


// Entrega 3 Operadores avanzados
const contenidoCuenta = document.getElementById("contenidoCuenta")
const botonCero = document.getElementById("botonCero");
const botonUno = document.getElementById("botonUno");
const botonDos = document.getElementById("botonDos")
const botonTres = document.getElementById("botonTres")
const botonCuatro = document.getElementById("botonCuatro")
const botonCinco = document.getElementById("botonCinco")
const botonSeis = document.getElementById("botonSeis")
const botonSiete = document.getElementById("botonSiete")
const botonOcho = document.getElementById("botonOcho")
const botonNueve = document.getElementById("botonNueve")
const botonMas = document.getElementById("botonMas")
const botonMenos = document.getElementById("botonMenos")
const botonMultiplicar = document.getElementById("botonMultiplicar")
const botonDividir = document.getElementById("botonDividir")
const botonReset = document.getElementById("botonReset")

botonCero.addEventListener("click", () => {
    document.calculator.ans.value += "0"
})
botonUno.addEventListener("click", () => {
    document.calculator.ans.value += "1"
})
botonDos.addEventListener("click", () => {
    document.calculator.ans.value += "2"
})
botonTres.addEventListener("click", () => {
    document.calculator.ans.value += "3"
})
botonCuatro.addEventListener("click", () => {
    document.calculator.ans.value += "4"
})
botonCinco.addEventListener("click", () => {
    document.calculator.ans.value += "5"
})
botonSeis.addEventListener("click", () => {
    document.calculator.ans.value += "6"
})
botonSiete.addEventListener("click", () => {
    document.calculator.ans.value += "7"
})
botonOcho.addEventListener("click", () => {
    document.calculator.ans.value += "8"
})
botonNueve.addEventListener("click", () => {
    document.calculator.ans.value += "9"
})
botonMas.addEventListener("click", () => {
    document.calculator.ans.value += "+"
})
botonMenos.addEventListener("click", () => {
    document.calculator.ans.value += "-"
})
botonMultiplicar.addEventListener("click", () => {
    document.calculator.ans.value += "*"
})
botonDividir.addEventListener("click", () => {
    document.calculator.ans.value += "/"
})
botonIgual.addEventListener("click", () => {
    document.calculator.ans.value = eval(document.calculator.ans.value)
})
botonReset.addEventListener("click" , () => {
    document.calculator.ans.value = eval(document.calculator.ans.value)
})