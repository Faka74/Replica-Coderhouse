let container = document.querySelector(".containerHijo")
let timeNow = new Date().getHours();
let greeting = timeNow >= 5 && timeNow < 12
? "Buenos dias coder!"
: timeNow >= 12 && timeNow < 18
? "Buenas tardes coder!"
: "Buenas noches coder!";
container.innerHTML = `<h1>${greeting}</h1>`;