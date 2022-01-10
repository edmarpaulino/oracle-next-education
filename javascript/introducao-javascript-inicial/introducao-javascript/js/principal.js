var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	var imc = peso / (altura * altura);

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso >= 1000) {
		pesoEhValido = false;
		paciente.querySelector(".info-imc").textContent = "Peso inválido!";
		// adiciona uma nova classe ao elemento
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00) {
		alturaEhValida = false;
		paciente.querySelector(".info-imc").textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida) {
		paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
	}

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

// uso de eventos e função anônima
// ao invés de addEventListener  poderíamos ter usado um event shortcut
// o .onclick só que nesse caso teria a limitação de executar uma única
// função por evento, com o addEventListener podemos empilhar chamadas e
// executar várias funções para um mesmo evento
// é uma boa prática usar o addEventListener mesmo que só precise executar
// uma única função, pois mais tarde outro dev pode precisar adicionar outra
// função e então a segunda sobrescreve a primeira no caso do event shortcut
botaoAdicionar.addEventListener("click", function (event) {

	// Previne o comportamento padrão da página
	event.preventDefault();

	// pegando o form
	var form = document.querySelector("#form-adiciona");

	// pegando o valor de cada campo do form através da propriedade name do form
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	// cria um novo elemento, no caso estamos criando um tr
	var pacienteTr = document.createElement("tr");

	// aqui estamos criando td
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	// atribuindo os valores pegos no form ao conteúdo das td
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = 0;

	// adicionando as td como filhas do tr
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	// pegando a tabela dos pacientes
	var tabela = document.querySelector("#tabela-pacientes");

	// adicionando o tr como filho da tabela
	tabela.appendChild(pacienteTr);

});
