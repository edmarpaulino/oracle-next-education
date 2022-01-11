// Delegação de eventos
// Event bubble

// var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

// escutando o evento de clique duplo - double click
tabela.addEventListener("dblclick", function(event) {
	// alvo do evento
	console.log(event.target);
	// dono do evento
	console.log(this);

	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode;

	// só remove o pai se o elemento for uma tag td
	if (alvoEvento.tagName == "TD") {
	
		paiDoAlvo.classList.add("fadeOut");
	
		// função para fazer o o js aguardar período de milissegundos
		// para executar uma ação
		setTimeout(function() {
			paiDoAlvo.remove();
		}, 500);
		// paiDoAlvo.remove();
	
	}
});

// Evento para cada elemento, só funciona para os elementos que
// já existiam quando o script foi carregado
// pacientes.forEach(function(paciente) {
// 	paciente.addEventListener("dblclick", function(paciente){
// 		console.log("duplo clique");
// 		// this é quem acionou o evento
// 		// dono do evento, nesse caso paciente
// 		this.remove();
// 	});
// });