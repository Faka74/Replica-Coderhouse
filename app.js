const olvideContraseña = document.getElementById("olvideContraseña")
const botonesDesaparecen = document.getElementsByTagName("form")
const mostrarInfo = document.getElementById("ocultarInfo")
const bordeInput = document.getElementById("ingresaEmail")
const bordeInputDos = document.getElementById("ingresaContraseña")

olvideContraseña.addEventListener("click", () => {
    olvideContraseña.innerHTML = "<a href>Cancelar</a>"
    mostrarInfo.style.display = "block"
    document.querySelector(".containerFormCorreo").style.display = "none";
    document.querySelector(".containerFormContraseña").style.display = "none";
    document.querySelector(".btnSubmit").textContent = "Enviar codigo"
})

bordeInput.addEventListener("focus" , () =>{
    event.target.style.border = "2px solid #cbdd5f"
})

bordeInput.addEventListener("blur" , () =>{
    event.target.style.border = "0px"
})

bordeInputDos.addEventListener("focus" , () =>{
    event.target.style.border = "2px solid #cbdd5f"
})

bordeInputDos.addEventListener("blur" , () =>{
    event.target.style.border = "0px"
})

const eventoBtn = document.getElementById("btnEvent")
eventoBtn.addEventListener("click" , ()=>{
})

// let año = prompt("Que año es?")
// let preguntaAño = (año > 2018) ? (console.log("Hola")) : console.log("No hola");;

// let edad = prompt("Cuantos años tiene?")
// let pregunta = (edad > 18 && edad < 25) ? alert("Tiene entre 18 y 25 años") : (edad > 25) ? alert("Es mayor que 25") :l