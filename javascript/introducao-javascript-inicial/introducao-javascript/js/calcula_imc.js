var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {
		paciente.querySelector(".info-imc").textContent = "Peso inválido!";
		// adiciona uma nova classe ao elemento
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEhValida) {
		paciente.querySelector(".info-imc").textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida) {
		paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
	}

}

function validaPeso(peso) {

	if (peso <= 0 || peso >= 1000) {
		return false;
	} else {
		return true;
	}

}

function validaAltura(altura) {

	if (altura <= 0 || altura >= 3.00) {
		return false;
	} else {
		return true;
	}

}

function calculaImc(peso, altura) {

	var imc;

	imc = peso / (altura * altura);
	return imc.toFixed(2);
}
