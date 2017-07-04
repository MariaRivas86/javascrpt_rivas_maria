
var calculadora = {

	//Declaracion de variables
	num1: 0,
	num2: 0,
	opera: " ",

	concatena: function (numero) {

		calculadora.num1 += numero;
		var span = document.getElementById("display");
		span.textContent = calculadora.num1;

	},

	operacion: function (oper) {
		calculadora.num2 = calculadora.num1
			calculadora.num1 = 0
			calculadora.opera = oper

	},

	igualito: function () {

		if (calculadora.opera == "mas") {

			calculadora.num1 = parseFloat(calculadora.num1) + parseFloat(calculadora.num2)

				var span = document.getElementById("display");

			span.textContent = calculadora.num1;

		}
	}

}

window.onload = carga;

function carga() {
	var botones = document.getElementsByClassName("tecla")

		for (i = 0; i < botones.length; i++) {

			botones[i].addEventListener('click', function () {

				if (isNaN(this.id) == false) {
					calculadora.concatena(this.id);
				} else {
					if (this.id != "igual") {
						calculadora.operacion(this.id);
					} else {

						calculadora.igualito(this.id)
					}
				}

			})

		}

}
