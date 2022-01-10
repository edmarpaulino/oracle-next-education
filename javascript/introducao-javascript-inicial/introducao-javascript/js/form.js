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
	// com objeto
	var paciente = obtemPacienteDoFormulario(form);
	console.log(paciente);

	// pegando a tabela dos pacientes
	var tabela = document.querySelector("#tabela-pacientes");

	// adicionando o tr como filho da tabela
	tabela.appendChild(montaTr(paciente));

	// limpa o formulário
	form.reset();

});

// Utilizamos objetos no Javascript como na maioria das linguagens de 
// programação orientadas, aonde os objetos podemos compará-los com objetos
// da vida real.
// Um objeto é uma entidade independente, com propriedades e tipos. Compare-o
// com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades.
// Uma xícara tem uma cor, uma forma, peso, um material de composição, etc.
// Da mesma forma, objetos em Javascript podem ter propriedades, que definem
// suas características.
function obtemPacienteDoFormulario(form) {

	// declaração de um objeto
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	};

	return paciente;

}

function montaTr(paciente) {

	// cria um novo elemento, no caso estamos criando um tr
	var pacienteTr = document.createElement("tr");

	// adicionando a classe paciente no tr
	pacienteTr.classList.add("paciente");

	// adicionando as td como filhas do tr
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	
	return pacienteTr;

}

function montaTd(dado, classe) {

	var td = document.createElement("td");

	// atribuindo os valores pegos no form ao conteúdo das td
	td.textContent = dado;
	// adicionando a classe no td
	td.classList.add(classe);

	return td;

}
