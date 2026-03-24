

const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');

function abrirMenu(){
menu.style.display = "flex";
overlay.style.display = "block";
}

function cerrarMenu(){
menu.style.display = "none";
overlay.style.display = "none";
}

overlay.addEventListener("click", cerrarMenu);


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



function enviarWhatsApp(e){
e.preventDefault();

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;
let mensaje = document.getElementById("mensaje").value;

let texto = `Hola, soy ${nombre}%0AEmail: ${email}%0ATeléfono: ${telefono}%0AMensaje: ${mensaje}`;

window.open(`https://wa.me/644600447?text=${texto}`, "_blank");

}




async function cargarReseñas(){
const url = "https://docs.google.com/forms/d/e/1FAIpQLSdExtaG5F4ipQs-_QtnzqbPev1DynPAezutZ86d3ifdE0l-jQ/viewform?usp=dialog"; // ← tu Google Sheets

const res = await fetch(url);
const data = await res.text();

const filas = data.split("\n").slice(1);

const container = document.getElementById("reviews-container");
container.innerHTML = "";

filas.reverse().forEach(fila => {
const columnas = fila.split(",");

const nombre = columnas[1];
const valoracion = parseInt(columnas[2]);
const comentario = columnas[3];

if(!nombre) return;

let estrellasHTML = "";

for(let i=1; i<=5; i++){
estrellasHTML += i <= valoracion ? "⭐" : "☆";
}

const div = document.createElement("div");
div.classList.add("reseña");

div.innerHTML = `
<strong>${nombre}</strong>
<div class="estrellas">${estrellasHTML}</div>
<p>${comentario}</p>
`;

container.appendChild(div);
});
}

cargarReseñas();


