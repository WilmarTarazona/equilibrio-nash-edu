var NombreJugador1;
var NombreJugador2;
var NumeroDeAccionesJugador1;
var NumeroDeAccionesJugador2;

function graficaM(a, b, c, d, e, f){
	var J1D1 = "P: " + a + " Q: " + c;
	var J1D2 = "P: " + a + " Q: " + b;
	var J1D3 = "P: " + c + " Q: " + b;
	var J1D4 = "P: " + c + " Q: " + a;
	var J2D1 = "P: " + d + " Q: " + f;
	var J2D2 = "P: " + e + " Q: " + f;
	var J2D3 = "P: " + e + " Q: " + d;
	var J2D4 = "P: " + f + " Q: " + d;
	
	var Int = "P: " + b + " Q: " + e;
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light1",
		title:{
			text: "Grafica De Mejor Respuesta"
		},
		axisX:{
			title: "P", 
			interval: .1,
			includeZero: true
		},
		axisY:{
			title: "Q",
			includeZero: true,
			minimum: -.5
		},
		toolTip: {
			shared: true
		},
		data: [{
			type: "line",
			name: "Jugador 1",
			dataPoints: [
				{ x: a, y: c, indexLabel: J1D1 },
				{ x: a, y: b, indexLabel: J1D2 },
				{ x: c, y: b, indexLabel: J1D3 },
				{ x: c, y: a, indexLabel: J1D4 }
			]
		},
		{
			type: "line",  
			name: "Intersección",
			dataPoints: [
				{ x: e, y: b, indexLabel: Int },
			]
		},
		{
			type: "line",  
			name: "Jugador 2",
			dataPoints: [
				{ x: d, y: f, indexLabel: J2D1 },
				{ x: e, y: f, indexLabel: J2D2 },
				{ x: e, y: d, indexLabel: J2D3 },
				{ x: f, y: d, indexLabel: J2D4 }
			]
		}]
	});
	chart.render();
}
function grafica(){
	var Div = document.getElementById("Grafica");
	var Tabla   = document.createElement("table");
	var Cuerpo = document.createElement("tbody");
	for (var i = 0; i < 11; i++) {
		var Fila = document.createElement("tr");
		for (var j = 0; j < 11; j++) {
			var Celda = document.createElement("td");
			var Texto = document.createTextNode("AAA");
			Celda.appendChild(Texto);
			Fila.appendChild(Celda);
		}
		Cuerpo.appendChild(Fila);
	}
	Tabla.appendChild(Cuerpo);
	Div.appendChild(Tabla);
	Tabla.setAttribute("border", "1");
}
function genera_tabla(){
	NombreJugador1 = document.getElementById("NombreJugador1").value;
	NombreJugador2 = document.getElementById("NombreJugador2").value;
	NumeroDeAccionesJugador1 = document.getElementById("NumeroDeAccionesJugador1").value;
	NumeroDeAccionesJugador2 = document.getElementById("NumeroDeAccionesJugador2").value;
	if (NombreJugador1 == "" || NombreJugador2 == "" || NumeroDeAccionesJugador2 == "" || NumeroDeAccionesJugador2 == "") alert("Valores incompletos");
	else{
	var DivTabla = document.getElementById("Pura");
	var Tabla   = document.createElement("table");
	var CuerpoDeTabla = document.createElement("tbody");
	var ContadorIds1 = 1;
	var ContadorIds2 = 1;
	var ContadorIdsCel = 1;
	var N = 1;
	for(var i = 0; i <= document.getElementById("NumeroDeAccionesJugador1").value; i++) N++;
	
	var Cab1 = document.createElement("th");
	Cab1.setAttribute("colspan", N);
	var Nombre1 = document.createTextNode(NombreJugador2);
	Cab1.appendChild(Nombre1);
	var Cab2 = document.createElement("th");
	Cab2.setAttribute("rowspan", N);
	var Nombre2 = document.createTextNode(NombreJugador1);
	Cab2.appendChild(Nombre2);
	for (var i = 1; i <= NumeroDeAccionesJugador1; i++) {
		if (i == 1){
			var Columnas = document.createElement("tr");
			Columnas.appendChild(Cab1);
			CuerpoDeTabla.appendChild(Columnas);
			var Columnas = document.createElement("tr");
			Columnas.appendChild(Cab2);
			CuerpoDeTabla.appendChild(Columnas);
		}
		var Columnas = document.createElement("tr");
		for (var j = 1; j <= NumeroDeAccionesJugador2; j++) {
			var Celda = document.createElement("td");
			var Peso1 = document.createElement("input");
			Peso1.setAttribute("type", "number");
			Peso1.setAttribute("step", "any");
			var Texto1 = document.createTextNode("Ingresar Pesos: ");
			var Peso2 = document.createElement("input");
			Peso2.setAttribute("type", "number");
			Peso2.setAttribute("step", "any");
			var Texto2 = document.createTextNode(", ");
			Celda.appendChild(Texto1);
			Celda.appendChild(Peso1);
			Celda.appendChild(Texto2);
			Celda.appendChild(Peso2);
			Columnas.appendChild(Celda);
			Peso1.id = 'input1.' + ContadorIds1;
			Peso2.id = 'input2.' + ContadorIds2;
			Celda.id = 'Celda.' + ContadorIdsCel;
			ContadorIds1++;
			ContadorIds2++;
			ContadorIdsCel++;
	    }
	    CuerpoDeTabla.appendChild(Columnas);
	}
	Tabla.appendChild(CuerpoDeTabla);
	DivTabla.appendChild(Tabla);
	}
}
function analizar(){
	var Pesos1 = new Array(NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2);
	for (var i = 0; i < Pesos1.length; i++) {
		Pesos1[i] = 0;
	}	
	var Pesos2 = new Array(NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2);
	for (var i = 0; i < Pesos2.length; i++) {
		Pesos2[i] = 0;
	}	
	var CeldaMayor;
	var ids;
	for(var i = 1; i <= NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2; i++){
		ids = "input1." + i;
		for (var j = 0; j < document.getElementById(ids).value; j++){
			Pesos1[i - 1]++;
		}
	}
	for(var i = 1; i <= NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2; i++){
		ids = "input2." + i;
		for (var j = 0; j < document.getElementById(ids).value; j++){
			Pesos2[i - 1]++;
		}
	}
	var Mayor1 = 0;
	var Fila = 0;
	for(var i = 0; i < NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2; i++){
		if (Pesos1[i] > Mayor1){
			Mayor1 = Pesos1[i]
			Fila = i + 1;
		}
	}
	var Mayor2 = 0;
	var Columna = 0;
	for(var i = 0; i < NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2; i++){
		if (Pesos2[i] > Mayor2){
			Mayor2 = Pesos2[i];
			Columna = i + 1;
		}
	}
	var Nash = 0;
	for(var i = 1; i <= NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2; i++){
		if(Mayor1 == Pesos1[i-1] && Mayor2 == Pesos2[i-1] && Mayor1 == Mayor2){
			Nash = 1;
			CeldaMayor = "Celda." + i;
		}
	}
	if (!Nash){
		for(var i = 1; i <= NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2; i++){
			if(Mayor1 == Pesos1[i-1]) CeldaMayor = "Celda." + i;
		}
		var td = document.getElementById(CeldaMayor);
		var att = document.createAttribute("class");
		att.value = "democlass";
		td.setAttributeNode(att);
		for(var i = 1; i <= NumeroDeAccionesJugador1 * NumeroDeAccionesJugador2; i++){
			if(Mayor2 == Pesos2[i-1]) CeldaMayor = "Celda." + i;
		}
		var td = document.getElementById(CeldaMayor);
		var att = document.createAttribute("class");
		att.value = "democlass";
		td.setAttributeNode(att);
		alert("El equilibrio de Nash se encuentra en las celdas resaltada de amarillo");
	}
	else if(Nash){
		var td = document.getElementById(CeldaMayor);
		var att = document.createAttribute("class");
		att.value = "democlass";
		td.setAttributeNode(att);
		alert("El equilibrio de Nash se encuentra en la celda resaltada de amarillo");
	}
	else alert("No hay equilibrio de Nash en estrategia pura pruebe con la calculadora de estrategias mixtas");
}
function genera_tablaM(){
	if (document.getElementById("NombreJugador1M").value == "" || document.getElementById("NombreJugador2M").value == "") alert("Valores incompletos");
	else{
	var MDivTabla = document.getElementById("Mixta");
	var MTabla   = document.createElement("table");
	var MCuerpoDeTabla = document.createElement("tbody");
	var MContadorIds1 = 1;
	var MContadorIds2 = 1;
	var MContadorIdsCel = 1;
	var MCab1 = document.createElement("th");
	MCab1.setAttribute("colspan", 3);
	var MNombre1 = document.createTextNode(document.getElementById("NombreJugador2M").value);
	MCab1.appendChild(MNombre1);
	var MCab2 = document.createElement("th");
	MCab2.setAttribute("rowspan", 3);
	var MNombre2 = document.createTextNode(document.getElementById("NombreJugador1M").value);
	MCab2.appendChild(MNombre2);
	for(var i = 1; i <= 2; i++){
		if (i == 1){
			var MColumnas = document.createElement("tr");
			MColumnas.appendChild(MCab1);
			MCuerpoDeTabla.appendChild(MColumnas);
			var MColumnas = document.createElement("tr");
			MColumnas.appendChild(MCab2);
			MCuerpoDeTabla.appendChild(MColumnas);
		}
		var MColumnas = document.createElement("tr");
		for (var j = 1; j <= 2; j++) {
			var MCelda = document.createElement("td");
	      	var MPeso1 = document.createElement("input");
	      	MPeso1.setAttribute("type", "number");
	      	var MTexto1 = document.createTextNode("Ingresar Pesos: ");
	      	var MPeso2 = document.createElement("input");
	      	MPeso2.setAttribute("type", "number");
	      	var MTexto2 = document.createTextNode(", ");
	      	MCelda.appendChild(MTexto1);
	      	MCelda.appendChild(MPeso1);
	      	MCelda.appendChild(MTexto2);
	      	MCelda.appendChild(MPeso2);
	      	MColumnas.appendChild(MCelda);
	      	MPeso1.id = 'Minput1.' + MContadorIds1;
	      	MPeso2.id = 'Minput2.' + MContadorIds2;
	      	MCelda.id = 'MCelda.' + MContadorIdsCel;
	      	MContadorIds1++;
	      	MContadorIds2++;
	      	MContadorIdsCel++;
		}
		MCuerpoDeTabla.appendChild(MColumnas);
	}
	MTabla.appendChild(MCuerpoDeTabla);
	MDivTabla.appendChild(MTabla);
	}
}
function analizarM() {
	var MPesos1 = new Array(4);
	MPesos1[0] = MPesos1[1] = MPesos1[2] = MPesos1[3] = 0; 
	var MPesos2 = new Array(4);
	MPesos2[0] = MPesos2[1] = MPesos2[2] = MPesos2[3] = 0;
	var A1;
	var B1;
	var C1;
	var D1;
	var A2;
	var B2;
	var C2;
	var D2;
	var PQ1;
	var P;
	var PQ2;
	var Q;
	var ProbQ;
	var ProbP;
	var MCeldaMayor1;
	var MCeldaMayor2;
	var Mids;
	for(var i = 1; i <= 4; i++){
		Mids = "Minput1." + i;
		for (var j = 0; j < document.getElementById(Mids).value; j++){
			MPesos1[i - 1]++;
		}
		if (i == 1) A1 = document.getElementById(Mids).value;
		if (i == 2) B1 = document.getElementById(Mids).value;
		if (i == 3) C1 = document.getElementById(Mids).value;
		if (i == 4) D1 = document.getElementById(Mids).value;
	}
	PQ1 = A1 - B1 - C1;
	for (var i = 0; i < D1; i++) {
		PQ1++;
	}
	P = B1 - D1;
	if (PQ1 == 0) ProbQ = 0;
	else ProbQ = P / PQ1;
	if (ProbQ < 0) ProbQ *= -1;
	for(var i = 1; i <= 4; i++){
		Mids = "Minput2." + i;
		for (var j = 0; j < document.getElementById(Mids).value; j++){
			MPesos2[i - 1]++;
		}
		if (i == 1) A2 = document.getElementById(Mids).value;
		if (i == 2) B2 = document.getElementById(Mids).value;
		if (i == 3) C2 = document.getElementById(Mids).value;
		if (i == 4) D2 = document.getElementById(Mids).value;
	}
	PQ2 = A2 - B2 - C2;
	for (var i = 0; i < D2; i++) {
		PQ2++;
	}
	Q = C2 - D2;
	if (PQ2 == 0) ProbP = 0;
	else ProbP = Q / PQ2;
	if (ProbP < 0) ProbP *= -1;
	if (PQ1 > 0){
		if (PQ2 > 0) graficaM(0, ProbQ, 1, 0, ProbP, 1);
		else graficaM(0, ProbQ, 1, 1, ProbP, 0);
	}
	else{
		if (PQ2 > 0) graficaM(1, ProbQ, 0, 0, ProbP, 1);
		else graficaM(1, ProbQ, 0, 1, ProbP, 0);
	}
	var ENEM;
	ENEM = ProbP + "A + " + (1 - ProbP) + "B + " + ProbQ + "X + " + (1 - ProbQ) + "Y";
	ENEM = "El equilibrio de Nash en estrategias mixtas se determina mediante la siguiente formula = " + ENEM;
	document.getElementById("Formula").innerHTML = ENEM;
	document.getElementById("Ex").innerHTML = "Donde A es la accion de la fila 1 y B es la accion de la fila 2 de " + NombreJugador1M.value + " y X es la accion de la columna 1 y Y es la accion de la columna 2 de " + NombreJugador2M.value;
}