function toggleMenu(){

const menu = document.getElementById("menu");

menu.classList.toggle("active");

}

const elements = document.querySelectorAll(".fade-in");

elements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("visible");

}

});

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-num");

const count = +counter.innerText;

const speed = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + speed);

setTimeout(update,20);

}else{

counter.innerText = target;

}

};

update();

});
let estrellas = document.querySelectorAll(".rating span");
let valor = 0;

estrellas.forEach(e => {
e.addEventListener("click", () => {
valor = e.getAttribute("data-value");

estrellas.forEach(s => s.style.opacity = "0.3");
for(let i = 0; i < valor; i++){
estrellas[i].style.opacity = "1";
}
});
});

function guardarReseña(){

let texto = document.getElementById("comentario").value;

if(valor == 0 || texto == ""){
alert("Completa estrellas y comentario");
return;
}

let nueva = document.createElement("div");
nueva.innerHTML = "⭐".repeat(valor) + "<p>" + texto + "</p>";

document.getElementById("lista-reseñas").appendChild(nueva);

document.getElementById("comentario").value = "";

}


function enviarWhatsApp(e){
e.preventDefault();

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;
let mensaje = document.getElementById("mensaje").value;

let texto = `Hola, soy ${nombre}%0AEmail: ${email}%0ATeléfono: ${telefono}%0AMensaje: ${mensaje}`;

window.open(`https://wa.me/34644600447?text=${texto}`, "_blank");

}
