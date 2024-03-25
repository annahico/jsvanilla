
// // // // // console.log("Hola, soy console log.");

// // // // // console.log("Hola, soy otro console log.");

// // // // // let numero = 55;
// // // // // const numero2 = 100;

// // // // // numero = 44;

// // // // // numero = 22;

// // // // // numero = 53;

// // // // // console.log(numero) //let es una variable, por lo que saldrá el último numero antes del console.log//
// // // // // console.log(numero2)

// // // // // // let numero = 290; //estaría mal porque el "numero" ya esta pillado con anterioridad//

// // // // //////////JAVASCRIPT 25/03/2024/////////// DECLARACIÓN DE VARIABLE Y OPERACIONES BÁSICAS

// // // // // let numero1 = 500;

// // // // // let numero2 = 455;

// // // // // console.log(numero1 + numero2); //no quedará fijo porque no se ha puesto el resultado//

// // // // // let resultado = numero1 + numero2;

// // // // // resultado = 100;

// // // // // console.log(resultado)

// // // // // OPERACIONES BÁSICAS ARITMÉTICAS//

// // // // let numero1 = 100;
// // // // let numero2 = 500;

// // // // let resultado = numero1 - numero2
// // // // console.log("El resultado de la resta es.......", resultado)

// // // // resultado = numero1 + numero2
// // // // console.log("El resultado de la suma es...", resultado)

// // // // resultado = numero1 * numero2
// // // // console.log("El resultado de la multiplicación es....", resultado)

// // // // resultado = numero1 / numero2
// // // // console.log("El resultado de la división es.....", resultado)

// // // // //MODULO

// // // // resultado = 17 % 2;
// // // // console.log("El resultado del módulo es.....", resultado)

// // // // //Cerciorate de si un número es par o impar

// // // // if (resultado !==0){

// // // //     console.log("No se trata de un número par")

// // // // }

// // // // //Pràctica 

// // // // let numero4 = 12;
// // // // let numero5 = 7;
// // // // let numero6 = 20;

// // // // // Verificar si el primer número es par o impar
// // // // if (numero1 % 2 === 0) {
// // // //     console.log(numero1 + " es un número par.");
// // // //   } else {
// // // //     console.log(numero1 + " es un número impar.");
// // // //   }

// // // //   // Verificar si el segundo número es par o impar
// // // //   if (numero2 % 2 === 0) {
// // // //     console.log(numero2 + " es un número par.");
// // // //   } else {
// // // //     console.log(numero2 + " es un número impar.");
// // // //   }

// // // //   // Verificar si el tercer número es par o impar
// // // //   if (numero3 % 2 === 0) {
// // // //     console.log(numero3 + " es un número par.");
// // // //   } else {
// // // //     console.log(numero3 + " es un número impar.");
// // // //   }

// // // //ESTRUCTURA DE CONTROL DE PROGRAMACIÓN CONDICIONAL "IF"

// // // let nombre = "Pepe"

// // // if (nombre ==="Daniel"){

// // //     console.log("Hola Daniel")
// // // }else{

// // //     console.log("Tu no eres Daniel")
// // // }

// // // let numero1 = 10;

// // // let numero2 = 35;

// // // let resultado = numero1 + numero2;

// // // if (resultado > 80){

// // //     console.log("Si, el resultado es mayor que 28")
// // // }

// // //OPERACIONES ARITMETICAS DE INCREMENTO Y DECREMENTO

// // let numero = 5;

// // numero = numero + 1  //numero++;
// // console.log(numero)


// // numero = numero - 1 //numero--
// // console.log(numero) 

// // let numero = prompt("Dime el número que quieras");

// // if (numero >10){

// //     console.log("El número es mayor a 10.")
// // }

// //proposición de ejercicio: Genera un programa que pida un número por prompt al usuario, a continuación, averiguará si se trata de un número par o impar, lo dirá entonces por console.log.

// // // Pedir al usuario que ingrese un número
// // let numero = prompt("Ingresa un número:");

// // // Verificar si el número es par o impar
// // if (numeroEntero % 2 === 0) {
// //   console.log(numeroEntero + " es un número par.");
// // } else {
// //   console.log(numeroEntero + " es un número impar.");
// // }

// //NEGACIÓN UNARIA Y UNARIO POSITIVO

// let numero5 = 5;

// let numero6 = -2;

// console.log(-numero2);

//OPERADORES LÓGICOS

//&&.....and.....(si)

let numero = 10;

if ((numero > 2) && (numero < 20)) {

    console.log("Hola, habremos entendido esto???")
}

// || ..... or.... (o)

let numero2 = 20;

if ((numero2 > 1000) || (numero2 < 21)) {
    console.log("Hola, esto tambien???");
}

let variable3 = false;

if (!variable3) {

    console.log("esto saldria???")
}

// //proposicion ejercicio:Pide por prompt 2 veces, números al usuario..... compara a continuación esos números..... si los el primer número es mayor que 100, muestra un mensaje indicándolo.... si el segundo número es mayor que 200.... muestra un mensaje también indicándolo


// Pedir al usuario que ingrese dos números
let numero7 = prompt("Ingresa el primer número:");
let numero8 = prompt("Ingresa el segundo número:");

// Comparar los números según las condiciones dadas
if (numero7 > 100) {
    console.log("El primer número es mayor que 100.");
}

if (numero8 > 200) {
    console.log("El segundo número es mayor que 200.");
}

if (numero7 > numero8) {
    console.log("El primer número es mayor que el segundo.");
} else if (numero8 > numero7) {
    console.log("El segundo número es mayor que el primero.");
    
} else {
    console.log("los dos numeros son iguales")
}

if (numero8 >= 200 && numero7 <= 1000) {
    console.log("El segundo número es mayor que 200 y menor que 1000.");
}
