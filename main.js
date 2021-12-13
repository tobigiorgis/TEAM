// JavaScript
// const nombre = document.getElementById("inputNom")
// localStorage.setItem("nombre", nombre.value);
// const email = document.getElementById("inputEmail")
// localStorage.setItem("email", email.value);
// const password = document.getElementById("inputPassword")
// localStorage.setItem("password", password.value);
// const username = document.getElementById("inputUser")
// localStorage.setItem("username", username.value);
// const age = document.getElementById("inputAge")
// localStorage.setItem("age", age.value);
// const prof = document.getElementById("inputProf")
// localStorage.setItem("profesion", prof.value);
// const city = document.getElementById("inputCity")
// localStorage.setItem("city", city.value);
// const country = document.getElementById("inputCountry")
// localStorage.setItem("country", country.value);
// const parrafo = document.getElementById("warnings")
// const form = document.getElementById("formReg")

// Register form

$('#aReg').click((e) =>{
    e.preventDefault()
    let warnings = ""
    let entrar = false 
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
    parrafo.innerHTML = " "
    if(password.value.length <8){
        warnings += 'La password debe ser de al menos 8 caracteres <br>'
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(regexEmail.test(email.value)){
        warnings += 'El Email no es valido <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Ya estas registrado!"
    }
})

$('#butSub').click(() => {window.location("perfiles.html")})
$('#butReg').click(() => {
const nombre = document.getElementById("inputNom")
localStorage.setItem("nombre", nombre.value);
const email = document.getElementById("inputEmail")
localStorage.setItem("email", email.value);
const password = document.getElementById("inputPassword")
localStorage.setItem("password", password.value);
const username = document.getElementById("inputUser")
localStorage.setItem("username", username.value);
const age = document.getElementById("inputAge")
localStorage.setItem("age", age.value);
const prof = document.getElementById("inputProf")
localStorage.setItem("profesion", prof.value);
const city = document.getElementById("inputCity")
localStorage.setItem("city", city.value);
const country = document.getElementById("inputCountry")
localStorage.setItem("country", country.value);
})

// Postear

function addItem() {
    let taskValue = document.getElementById('input-task').value
    addElemntToDOM('li', taskValue, 'listaPost')
    document.getElementById('input-task').value = ""
}

function addElemntToDOM(type, content, parentID) {
    const parent = document.getElementById(parentID)
    const elem = document.createElement(type)
    const text = document.createTextNode(content)
    elem.id = `elem`

    elem.appendChild(text)
    parent.appendChild(elem)
}

function addEnterItem(e) {
    console.log(e);
    if (e.code == "Enter" || e.code == "BracketRight") {
        let taskValue = document.getElementById("input-task").value;
        addElementToDOM("li", taskValue, "listaPost");
        document.getElementById("input-task").value = "";
    }
}

// Profiles

const perfil = [
    {id: 1, nombre: "Tobias", apellido: "Giorgis", edad: 19},
    {id: 2, nombre: "Ignacio", apellido: "Giorgis", edad: 21},
    {id: 3, nombre: "Francisco", apellido: "Giorgis", edad: 13}
]

perfil.map((p) =>  {
    const callPers = document.getElementById("listaPerf")
    const itemPerf = document.createElement('li')
    const createPerf = document.createTextNode(p.id)
    itemPerf.appendChild(createPerf)
    callPers.appendChild(itemPerf)
})

function mostrarPerfiles(value) {
    const item = document.createElement('li');
    const texto = document.createTextNode(value);
    const lista = document.getElementById('listaPerf');

item.appendChild(texto);
lista.appendChild(item);
}

perfil.forEach(elemento => {
    $('.showPer').append(`<div><h3> ${elemento.nombre} + ${elemento.apellido}</h3>
    <p>${elemento.edad}</p></div>`)
}
)

// Accepting cookies w animations

$("footer").append(`<div id="divFoot">
                    <h2> Acepta el uso de cookies? </h2>
                    <button id="butR">Rechazar</button>
                    <button id="butA">Aceptar</button>
                    </div>`)

$("#divFoot").css("color", "white", "background-color", "black", "justify-content", "center")
            .fadeIn(function fade() {
                setTimeout(5000) // After 5 sec
})

$("#butR").click(window.close())
$("#butA").click(() => {
    $("#divFoot").fadeOut("fast")
}) 


const USERS = 'https://jsonplaceholder.typicode.com/users'

$.get(USERS), function perfiles (response, status){
    if (status === "success"){
        for(const dato of response){
            $(".showPer").prepend(`<div>
                                    <h4>${dato.name}</h4>
                                    <p>${dato.username}</p>
                                    <p>${dato.email}</p>`)
        }
    }
}