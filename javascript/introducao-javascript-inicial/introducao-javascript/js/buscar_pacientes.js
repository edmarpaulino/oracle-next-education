var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {

	console.log("Buscando pacientes...");

	// XMLHttpRequest é um objeto do javascript responsável por fazer 
	// requisições HTTP
	var xhr = new XMLHttpRequest();

	// precisamos informar qual o tipo de requisição e o endereço (servidor)
	// nesse momento seria como só checar se o endereço está correto
	// ainda não fizemos nada
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	// aqui estamos enviando a requisição para o endereço (servidor)
	xhr.send();

	// aqui criamos um evento para quando a requisição tiver terminado
	// de carregar (load) nós exibirmos ela na tela com a propriedade
	// responseText (texto resposta)
	xhr.addEventListener("load", function() {
		// Asynchronous JavaScript and XML
		var erroAjax = document.querySelector("#erro-ajax");

		// status código 200 significa que a conexão foi OK
		if (xhr.status == 200) {
			erroAjax.classList.add("invisivel");

			var resposta = xhr.responseText;
	
			// recebemos uma string no formato JSON (JavaScript Object Notation)
			// e precisamos converter ele e para isso usamos JSON.parse() que 
			// nos vai devolver o objeto formatado
			var pacientes = JSON.parse(resposta);
	
			// agora para cada paciente adicionamos ele na tabela
			pacientes.forEach(function(paciente) {
				adicionaPacienteNaTabela(paciente);
			});

		} else {
			console.log(xhr.status);
			console.log(xhr.responseText);
			erroAjax.classList.remove("invisivel");
		}
	});

});