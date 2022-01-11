var campoFiltro = document.querySelector("#filtrar-tabela");

// com regex
// campoFiltro.addEventListener("input", function() {

// 	console.log(this.value);

// 	var pacientes = document.querySelectorAll(".paciente");

// 	for (var i = 0; i < pacientes.length; i++) {

// 		var paciente = pacientes[i];
// 		var tdNome = paciente.querySelector(".info-nome");
// 		var nome = tdNome.textContent;
// 		var expressao = new RegExp(this.value, "i");

// 		if (!expressao.test(nome)) {
// 			paciente.classList.add("invisivel");
// 		} else {
// 			paciente.classList.remove("invisivel");
// 		}

// 		if (this.value.length == 0) {
// 			paciente.classList.remove("invisivel");
// 		}

// 	}

// });

// sem regex
campoFiltro.addEventListener("input", function() {

	console.log(this.value);

	var pacientes = document.querySelectorAll(".paciente");

	for (var i = 0; i < pacientes.length; i++) {

		var paciente = pacientes[i];
		var tdNome = paciente.querySelector(".info-nome");
		var nome = tdNome.textContent.substring(0, this.value.length);
		var nomeMinusculo = nome.toLocaleLowerCase();
		var comparavelMinusculo = this.value.toLocaleLowerCase();


		if (nomeMinusculo != comparavelMinusculo) {
			paciente.classList.add("invisivel");
		} else {
			paciente.classList.remove("invisivel");
		}

		if (this.value.length == 0) {
			paciente.classList.remove("invisivel");
		}

	}

});
