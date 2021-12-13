/*
let nombre = "Tobi";
let apellido = "Giorgis";
let espacio = " ";
let numero1 = 6;
let numero2 = 7;
let nombreIngresado = prompt ("Ingrese su nombre");
alert("Hola " + nombreIngresado)
let numeroIngresado = parseInt(prompt("Ingrese un numero"));

resultado = numero1 + numero2;

console.log (nombre + espacio + apellido);
console.log (resultado);
console.log ("El nombre ingresado fue:" + nombreIngresado);
console.log ("El numero ingresado fue:" + numeroIngresado);

// operadores aritmeticos

edadAna = 20;
edadTomas = 18;
edadMax = 100
let diferencia = edadMax - numeroIngresado;

console.log ("La diferencia de edad entre Ana y Tomas es:" + diferencia)

alert("Le quedan " + diferencia + " años de vida!");

// Los comentarios son anotaciones de la clase.

// Entrega 2
let nombreIngresado = prompt ("Ingrese su nombre");
if ((nombreIngresado == "rodrigo") || (nombreIngresado == "RODRIGO"))
{
    alert ("Bienvenido Tutor")
}
else{
    alert("Hola " + nombreIngresado)
}

console.log ("El nombre ingresado fue:" + nombreIngresado);

let numeroIngresado = parseInt(prompt("Ingrese su edad"));

if (numeroIngresado >= 18)
{
    alert("Puede continuar. Su edad es apta para navegar por la página.");
}
else
{
    alert("Lo sentimos. Su edad no es apta para navegar por la página.");
    window.close()
}

//Entrega 3

const tope = 100;

for (let i=1; i<=tope;i++){
    let primo = true;
    let posicion = 2;
    while (primo && posicion < i)
        if ( i % (posicion++) == 0 ) 
            primo = false;  
    if (primo == true)
        console.log(i);
}    

const Crypto1 = new Crypto ({
    nombre: "Bitcoin",
    ticker: "BTC",
    precio: 64000
})

const Crypto2 = new Crypto ({
    nombre: "Ethereum",
    ticker: "ETH",
    precio: 4000
})

const Crypto3 = new Crypto ({
    nombre: "Cardano",
    ticker: "ADA",
    precio: 2.2
})

const Crypto4 = new Crypto ({
    nombre: "Solana",
    ticker: "SOL",
    precio: 160
})

// Clase 5

console.log("Clase de objetos")

const persona1 = {nombre: "Pedro", apellido: "Perez", age: 20}

const persona2 = {
    nombre: "Maria",
    apellido: "Lopez",
    edad: 40
}

console.log (persona1)
console.log (persona2)

function Persona (nombre, edad, apellido) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = apellido;
    // Metodo personalizado
    this.imprimeEdad = function(){
        console.log (`La edad de ${nombre} es ${edad}`)
    }
}
const persona4 = new Persona ({
    name: "Tobi",
    edad: 18,
    apellido: "Giorgis"
})

const persona3 = new Persona ({ nombre: "Juan", edad: 10, apellido: "Ley"})

console.log (persona3)
console.log (persona4)
persona4.imprimeEdad()

for (const key in persona4){
    console.log (persona4[key])
}

class Personaje {
    constructor (propiedades){
        this.nombre = propiedades.nombre
        this.clase = propiedades.clase
        this.vida = 100
    }
    recibeAtaque(valor){
        this.vida = this.vida - valor
        console.log(`${this.nombre} recibio un ataque de ${valor}`)
        if (this.vida <= 0) {
            console.log (`${this.nombre} ha muerto`)
            console.log(`Ahore le queda ${this.vida} puntos de vida`)
        }
    }
    recibeCuracion(valor){
        this.vida = this.vida + valor
    }
}

const goblin1 = new Personaje({clase:"Goblin", nombre: "Goblino"})
console.log(goblin1);
const personaje2 = new Personaje ({clase:"humano", nombre:"Golum"})
console.log (personaje2);

goblin1.recibeAtaque(20)
console.log(goblin1);


// Clase 4

console.log("Funciones")

function miPrimerFuncion(numero){
    console.log(`ejecucion ${numero}`);
}

miPrimerFuncion(7)
miPrimerFuncion(2)


function alCubo(numero) {
    return numero**3
}
console.log(alCubo(2));

alCubo(3)
alCubo(4)

function alCubo(numero, potencia) {
    const resultado = numero**potencia
    return resultado
}


console.log(alCubo(2));

const potenciaArrow = (numero, potencia) => {
    return numero ** potencia
}

console.log(potenciaArrow(4,3));


// Clase 6
console.log("Arreglos");

const calificaciones = [9,10,8,7,9,10]
console.log(calificaciones[3]);

// length
for(let i = 0; i < calificaciones.length; i++){
    console.log(`${i} - ${calificaciones[1]}`);
}

// push

calificaciones.push(6)

calificaciones.push(8)

calificaciones.push(7)

console.log(calificaciones.toString())

console.log("El nuevo tamaño es: " + calificaciones.length);

console.log(calificaciones.join('-'));

const extraCalif = [4,5,3,4]
console.log(calificaciones.concat(extraCalif));

console.log(extraCalif.slice(1,3));

const nombres = ["Ema", "Juan", "Ana", "Paz", "Teo"]
const find1 = nombres.find(e => e === "Ana")
console.log(find1);


// Clase 7 - Local Storage 

localStorage.setItem('bienvenida', 'hola mundo!')
localStorage.setItem(0,2021)
const mensaje = localStorage.getItem('bienvenida')
console.log(mensaje);
localStorage.removeItem('bienvenida')

localStorage.setItem('fruta1', 'Fresa')
localStorage.setItem('fruta2', 'Uva')
localStorage.setItem('fruta3', 'Banana')

for (let index = 0; index < localStorage.length; index++) {
    let clave = localStorage.key(index)
    console.log(clave);
    let valor = localStorage.getItem(clave)
    console.log(valor);
}

// JSON

let frutas = [
    {id: 1, nombre: "fresa", precio: 30},
    {id: 2, nombre: "uva", precio: 20},
    {id: 3, nombre: "pina", precio: 10}
]

console.log(frutas);

// para pasar de objeto a string
localStorage.setItem('frutas', JSON.stringify(frutas))

const frutasJson = localStorage.getItem('frutas')

// para separar
console.log( frutasJson.split(':'));

// para pasar de string a objeto
const frutasObjeto = JSON.parse(frutasJson)

console.log(document.body)

const titulo = document.getElementById("title")
const lista = document.getElementById("lista")

console.log(titulo.innerHTML);
console.log(lista.innerHTML);

const frutResal = document.getElementsByClassName("frutResal")

console.log(frutResal[0].innerHTML);

for (const e of frutResul) {
    console.log(e.innerHTML);
}
const elementosLi = document.getElementsByTagName("li")

// Agregar a HTML desde JS -- Clase 8

const nuevFrut = ['Tomaco', 'Pina', 'Durazno']

console.log(nuevFrut);

const nuevaFruta = document.createElement('li')
nuevaFruta.innerHTML = nuevFrut[2]
lista.appendChild(nuevFrut)

nuevFrut.forEach((fruta) => {
    const nuevaFruta = document.createElement('li')
    nuevaFruta.innerHTML = fruta
    lista.appendChild(nuevFrut)
})



// Eventos -- Clase 9

console.log("Mi evento");

let miBoton = document.getElementById('mibtn')

miBoton.addEventListener('click', clickHandler)

// Opcion 1
function clickHandler(){
    console.log('Se ha hecho click!' + contador + "veces" + contador++);
}

let contador = 0

// Opcion 2

miBoton.onclick = clickHandler

// o

miBoton.onclick = () => console.log("click");

let nameInput = document.getElementById('name')
let lastnameInput = document.getElementById('lastname')
nameInput.addEventListener('change', inputChange)

function inputChange(evento){
    console.log(evento.target.value);
}
*/

