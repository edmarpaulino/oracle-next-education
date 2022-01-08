var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var imc = peso / (altura * altura);

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
	pesoEhValido = false;
	paciente.querySelector(".info-imc").textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
	alturaEhValida = false;
	paciente.querySelector(".info-imc").textContent = "Altura inválida!";
}

if (pesoEhValido && alturaEhValida) {
	paciente.querySelector(".info-imc").textContent = imc;
}