const olvideContraseña = document.getElementById("olvideContraseña")
const botonesDesaparecen = document.getElementsByTagName("form")
const mostrarInfo = document.getElementById("ocultarInfo")
const bordeInput = document.getElementById("ingresaEmail")

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