function mostrarNombre(){
    let Nombre = document.getElementById("campoNombre").value
    let Mensaje = "Hola , "+ Nombre + " ! "
    document.getElementById("text").innerText = Mensaje
}

function dark(){
    document.body.style.backgroundColor = "#000"
    document.querySelector("form").style.backgroundColor = "#303030"
    document.getElementById("btn").style.backgroundColor = "#000"
    document.getElementById("h1").style.color = "#fff"
    document.getElementById("name").style.color = "#fff"
    document.getElementById("dark").style.backgroundColor = "#fff"
    document.getElementById("dark").style.color = "#000"
    document.getElementById("dark").style.border = "2px solid #000"
    document.getElementById("text").style.color = "#fff"
    document.getElementById("white").style.backgroundColor = "#000"
    document.getElementById("white").style.color = "#fff"
    document.getElementById("white").style.border = "2px solid #000"
}

function white(){
    document.body.style.backgroundColor = "#e4ded6"
    document.querySelector("form").style.backgroundColor = "#fff"
    document.getElementById("btn").style.backgroundColor = "#000ff0"
    document.getElementById("h1").style.color = "#000"
    document.getElementById("name").style.color = "#000"
    document.getElementById("white").style.backgroundColor = "#fff"
    document.getElementById("white").style.color = "#000"
    document.getElementById("white").style.border = "2px solid #000"
    document.getElementById("dark").style.backgroundColor = "#000"
    document.getElementById("dark").style.color = "#fff"
    document.getElementById("dark").style.border = "2px solid #000"
    document.getElementById("text").style.color = "#000" 
}
