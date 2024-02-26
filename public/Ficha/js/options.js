

firebase.initializeApp({


	apiKey: "AIzaSyDMte7b_-fC_0FHWF4HLOQAsPUFiaVCiC4",
	authDomain: "pruebarepresentaciones.firebaseapp.com",
	databaseURL: "https://pruebarepresentaciones.firebaseio.com",
	projectId: "pruebarepresentaciones",
	storageBucket: "pruebarepresentaciones.appspot.com",
	messagingSenderId: "193911640535",
	appId: "1:193911640535:web:97a9a4384f2c2173b8bb92",
	measurementId: "G-JV5GCTR8P2"
});
db = firebase.firestore();

/*const ALGOLIA_APP_ID='';
const ALGOLIA_ADMIN_KEY='';
const ALGOLIA_INDEX_NAME='';



//-------------------Algolia---------------------------
const fetchDataFromDatabase = () => {
	const actors = db.collection("MaestroOperaciones")//.where("capital", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
			var codigo = `${doc.data().codigo}`;
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
	return actors;
  }
  
const records = fetchDataFromDatabase();


index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true }); */

//--------------------------------------------------------------------


var storageService = firebase.storage();

actualizar = function () { location.reload(); }

test = function () {
	// var tabl=document.getElementById("tablaRefe");
	dataSet = new Array();
	var i = 1;


	db.collection("FichaJesus")
		.orderBy("Referencia", "asc").onSnapshot((querySnapshot) => {
			// tabl.innerHTML="";
			querySnapshot.forEach(function (doc) {
				// doc.data() is never undefined for query doc snapshots
				//console.log(doc.id, " => ", doc.data());
				var re = `${doc.data().Referencia}`;
				var cli = `${doc.data().Cliente}`;

				// console.log("las referencias son"+re)

				dataSet.push([cli, re]);

				i = i + 1;



				$(document).ready(function () {
					var tablaSuma = $('#dtVerticalScrollExample').DataTable({


						data: dataSet,
						"bDestroy": true,
						columns: [
							{ title: "Cliente" },
							{ title: "Referencia" },



						],

						//para cambiar el lenguaje a español
						"language": {
							"lengthMenu": "_MENU_",
							"zeroRecords": "No se encontraron resultados",
							"info": "",
							"infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
							"infoFiltered": "(filtrado de un total de _MAX_ registros)",
							"sSearch": "",
							"oPaginate": {
								"sFirst": "Primero",
								"sLast": "Último",
								"sNext": "Siguiente",
								"sPrevious": "Anterior"
							},

							"sProcessing": "Procesando...",

						}
					});



				});






			});
		})

}

test2 = function () {
	// var tabl=document.getElementById("tablaRefe");
	dataSet2 = new Array();
	var i = 1;


	db.collection("MaestroOperaciones")
		.orderBy("codigo", "asc").onSnapshot((querySnapshot) => {
			// tabl.innerHTML="";
			querySnapshot.forEach(function (doc) {
				// doc.data() is never undefined for query doc snapshots
				//console.log(doc.id, " => ", doc.data());
				var codigo = `${doc.data().codigo}`;
				var descrip = `${doc.data().descrip}`;

				// console.log("las referencias son"+re)

				dataSet2.push([codigo, descrip]);

				i = i + 1;



				$(document).ready(function () {
					var tablaSuma = $('#dtVerticalScrollExample2').DataTable({


						data: dataSet2,
						"bDestroy": true,
						columns: [
							{ title: "Codigo" },
							{ title: "Descripcion" },



						],

						//para cambiar el lenguaje a español
						"language": {
							"lengthMenu": "_MENU_",
							"zeroRecords": "No se encontraron resultados",
							"info": "",
							"infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
							"infoFiltered": "(filtrado de un total de _MAX_ registros)",
							"sSearch": "",
							"oPaginate": {
								"sFirst": "Primero",
								"sLast": "Último",
								"sNext": "Siguiente",
								"sPrevious": "Anterior"
							},

							"sProcessing": "Procesando...",

						}
					});



				});






			});
		})

}





uploadProfileImg = function () {
	foto1 = false;

	var file2 = ($('#campoarchivo2'))[0].files[0];

	console.log(file2);

	if (!file2) {

	}
	else {
		var storageRef = storageService.ref('/trasera/' + file2.name);

		var uploadtask = storageRef.put(file2);

		uploadtask.on('state_changed', function (snapshot) {

		}, function (error) {

			console.log(error);

		}, function () {

			console.log('Archivo o imagen subida Firebase');

			dowloadURLespalda = uploadtask.snapshot.downloadURL;

			console.log(dowloadURLespalda);

			var enviarCliente = document.getElementById("cliente").value;
			var datoRef = document.getElementById("Referencia").value;

			var datoRef2 = datoRef.split(/\s+/).join('');

			//UrlTrasera:dowloadURLespalda
			if (document.getElementById("Referencia").value != "" && document.getElementById("cliente").value != "") {

				db.collection("FotosCamisasEspal").add({

					// OrdenOperacion:OPE,
					Referencia: datoRef2,
					Cliente: enviarCliente,
					UrlTrasera: dowloadURLespalda
					// UrlTrasera: dowloadURLespalda //-----------
				})

				//alert("Url trasera enviada con exito");
				console.log("la foto trasera ha sido enviada");
				foto1 = true;
			} else {

				alert("Complete la informacion de la Ref, OP y Cliente");
				Swal.fire(
					'Complete la informacion de la Ref, OP y Cliente',
					'',
					'error'
				)


			}





		});
	}


};

//--------------------------------segunda prueba camisa delantera---------------------
camisaDel = function () {

	foto2 = false;

	var file = ($('#campoarchivo'))[0].files[0];

	console.log(file);

	if (!file) {

	}
	else {
		var storageRef = storageService.ref('/delantera/' + file.name);

		var uploadtask = storageRef.put(file);

		uploadtask.on('state_changed', function (snapshot) {

		}, function (error) {

			console.log(error);

		}, function () {

			console.log('Archivo o imagen subida Firebase');

			dowloadURLespalda = uploadtask.snapshot.downloadURL;

			console.log(dowloadURLespalda);

			var enviarCliente = document.getElementById("cliente").value;
			var datoRef = document.getElementById("Referencia").value;

			var datoRef2 = datoRef.split(/\s+/).join('');

			//UrlTrasera:dowloadURLespalda
			if (document.getElementById("Referencia").value != "" && document.getElementById("cliente").value != "") {

				db.collection("FotosCamisas").add({

					// OrdenOperacion:OPE,
					Referencia: datoRef2,
					Cliente: enviarCliente,
					UrlFrente: dowloadURLespalda
					// UrlTrasera: dowloadURLespalda //-----------
				})

				//alert("Url trasera enviada con exito");
				console.log("la foto delantera ha sido enviada");
				foto2 = true;

			} else {

				alert("Complete la informacion de la Ref, OP y Cliente");
				Swal.fire(
					'Complete la informacion de la Ref, OP y Cliente',
					'',
					'error'
				)


			}





		});
	}


};


//-----------------------------------previsualizacion de imagenes-------------------------

function readURL2(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			// Asignamos el atributo src a la tag de imagen
			$('#imagenTrasera').attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}

// El listener va asignado al input
$("#campoarchivo2").change(function () {
	readURL2(this);
});

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			// Asignamos el atributo src a la tag de imagen
			$('#imagenFrente').attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}

// El listener va asignado al input
$("#campoarchivo").change(function () {
	readURL(this);
});



function calcularTie() {
	var datotiempo = Number(document.getElementById("estan1").value);

	var datotiempo2 = Number(document.getElementById("estan2").value);

	var datotiempo3 = Number(document.getElementById("estan3").value);

	var datotiempo4 = Number(document.getElementById("estan4").value);
	var datotiempo5 = Number(document.getElementById("estan5").value);
	var datotiempo6 = Number(document.getElementById("estan6").value);
	var datotiempo7 = Number(document.getElementById("estan7").value);
	var datotiempo8 = Number(document.getElementById("estan8").value);
	var datotiempo9 = Number(document.getElementById("estan9").value);
	var datotiempo10 = Number(document.getElementById("estan10").value);
	var datotiempo11 = Number(document.getElementById("estan11").value);
	var datotiempo12 = Number(document.getElementById("estan12").value);
	var datotiempo13 = Number(document.getElementById("estan13").value);
	var datotiempo14 = Number(document.getElementById("estan14").value);
	var datotiempo15 = Number(document.getElementById("estan15").value);
	var datotiempo16 = Number(document.getElementById("estan16").value);
	var datotiempo17 = Number(document.getElementById("estan17").value);
	var datotiempo18 = Number(document.getElementById("estan18").value);
	var datotiempo19 = Number(document.getElementById("estan19").value);
	var datotiempo20 = Number(document.getElementById("estan20").value);
	var datotiempo21 = Number(document.getElementById("estan21").value);
	var datotiempo22 = Number(document.getElementById("estan22").value);
	var datotiempo23 = Number(document.getElementById("estan23").value);
	var datotiempo24 = Number(document.getElementById("estan24").value);
	var datotiempo25 = Number(document.getElementById("estan25").value);
	var datotiempo26 = Number(document.getElementById("estan26").value);
	var datotiempo27 = Number(document.getElementById("estan27").value);
	var datotiempo28 = Number(document.getElementById("estan28").value);
	var datotiempo29 = Number(document.getElementById("estan29").value);
	var datotiempo30 = Number(document.getElementById("estan30").value);
	var datotiempo31 = Number(document.getElementById("estan31").value);
	var datotiempo32 = Number(document.getElementById("estan32").value);
	var datotiempo33 = Number(document.getElementById("estan33").value);
	var datotiempo34 = Number(document.getElementById("estan34").value);
	var datotiempo35 = Number(document.getElementById("estan35").value);
	var datotiempo36 = Number(document.getElementById("estan36").value);
	var datotiempo37 = Number(document.getElementById("estan37").value);
	var datotiempo38 = Number(document.getElementById("estan38").value);
	var datotiempo39 = Number(document.getElementById("estan39").value);
	var datotiempo40 = Number(document.getElementById("estan40").value);
	var datotiempo41 = Number(document.getElementById("estan41").value);
	var datotiempo42 = Number(document.getElementById("estan42").value);
	var datotiempo43 = Number(document.getElementById("estan43").value);
	var datotiempo44 = Number(document.getElementById("estan44").value);
	var datotiempo45 = Number(document.getElementById("estan45").value);
	var datotiempo46 = Number(document.getElementById("estan46").value);
	var datotiempo47 = Number(document.getElementById("estan47").value);
	var datotiempo48 = Number(document.getElementById("estan48").value);
	var datotiempo49 = Number(document.getElementById("estan49").value);
	var datotiempo50 = Number(document.getElementById("estan50").value);

	SumaTiempo = datotiempo + datotiempo2 + datotiempo3 + datotiempo4 + datotiempo5 + datotiempo6 + datotiempo7 +
		datotiempo8 + datotiempo9 + datotiempo10 + datotiempo11 + datotiempo12 + datotiempo13 + datotiempo14 + datotiempo15
		+ datotiempo16 + datotiempo17 + datotiempo18 + datotiempo19 + datotiempo20 + datotiempo21 + datotiempo22
		+ datotiempo23 + datotiempo24 + datotiempo25 + datotiempo26 + datotiempo27 + datotiempo28 + datotiempo29
		+ datotiempo30 + datotiempo31 + datotiempo32 + datotiempo33 + datotiempo34 + datotiempo35 + datotiempo36
		+ datotiempo37 + datotiempo38 + datotiempo39 + datotiempo40 + datotiempo41 + datotiempo42 + datotiempo43
		+ datotiempo44 + datotiempo45 + datotiempo46 + datotiempo47 + datotiempo48 + datotiempo49 + datotiempo50;


	// resul=(SumaTiempo/60).toFixed(2)+""+"Min";

	resul = (SumaTiempo / 60).toFixed(2);

	IncrementoSuma = (resul * 1.15).toFixed(2);

	console.log("1:" + datotiempo + " 2:" + datotiempo2 + "3:" + datotiempo3 + "4:" + datotiempo4 + "5:" + datotiempo5 +
		"6:" + datotiempo6);

	// console.log(IncrementoSuma+"min");



	//console.log(datotiempo);
	//document.getElementById("totaltiempo").innerHTML=resul;
	document.getElementById("totaltiempo").value = resul;
	document.getElementById("totaltiempo2").value = resul;
	document.getElementById("tiempoIncremento").value = IncrementoSuma;

}

function AnadirDinueve() {

	var maq = "";

	var to1 = Number(document.getElementById("to19").value);
	var maq = document.getElementById("mq19").value;
	var su1 = document.getElementById("s19").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s19").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s19").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan19").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem19").value = Math.round(unixhora);





	}
}

function AnadirVetres() {

	var maq = "";

	var to1 = Number(document.getElementById("to23").value);
	var maq = document.getElementById("mq23").value;
	var su1 = document.getElementById("s23").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s23").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s23").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan23").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem23").value = Math.round(unixhora);





	}
}
function AnadirCicuenta() {

	var maq = "";

	var to1 = Number(document.getElementById("to50").value);
	var maq = document.getElementById("mq50").value;
	var su1 = document.getElementById("s50").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s50").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s50").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan50").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem50").value = Math.round(unixhora);





	}
}
function AnadirCuannueve() {

	var maq = "";

	var to1 = Number(document.getElementById("to49").value);
	var maq = document.getElementById("mq49").value;
	var su1 = document.getElementById("s49").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s49").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s49").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan49").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem49").value = Math.round(unixhora);





	}
}
function AnadirCuanocho() {

	var maq = "";

	var to1 = Number(document.getElementById("to48").value);
	var maq = document.getElementById("mq48").value;
	var su1 = document.getElementById("s48").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s48").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s48").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan48").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem48").value = Math.round(unixhora);





	}
}
function AnadirCuasiete() {

	var maq = "";

	var to1 = Number(document.getElementById("to47").value);
	var maq = document.getElementById("mq47").value;
	var su1 = document.getElementById("s47").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s47").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s47").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan47").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem47").value = Math.round(unixhora);





	}
}
function AnadirCuaseis() {

	var maq = "";

	var to1 = Number(document.getElementById("to46").value);
	var maq = document.getElementById("mq46").value;
	var su1 = document.getElementById("s46").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s46").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s46").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan46").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem46").value = Math.round(unixhora);





	}
}
function AnadirCuacinco() {

	var maq = "";

	var to1 = Number(document.getElementById("to45").value);
	var maq = document.getElementById("mq45").value;
	var su1 = document.getElementById("s45").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s45").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s45").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan45").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem45").value = Math.round(unixhora);





	}
}
function AnadirCuacuat() {

	var maq = "";

	var to1 = Number(document.getElementById("to44").value);
	var maq = document.getElementById("mq44").value;
	var su1 = document.getElementById("s44").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s44").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s44").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan44").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem44").value = Math.round(unixhora);





	}
}
function AnadirCuatres() {

	var maq = "";

	var to1 = Number(document.getElementById("to43").value);
	var maq = document.getElementById("mq43").value;
	var su1 = document.getElementById("s43").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s43").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s43").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan43").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem43").value = Math.round(unixhora);





	}
}
function AnadirCuados() {

	var maq = "";

	var to1 = Number(document.getElementById("to42").value);
	var maq = document.getElementById("mq42").value;
	var su1 = document.getElementById("s42").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s42").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s42").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan42").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem42").value = Math.round(unixhora);





	}
}
function AnadirCuauno() {
	var maq = "";

	var to1 = Number(document.getElementById("to41").value);
	var maq = document.getElementById("mq41").value;
	var su1 = document.getElementById("s41").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s41").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s41").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan41").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem41").value = Math.round(unixhora);





	}
}
function AnadirCuaren() {

	var maq = "";

	var to1 = Number(document.getElementById("to40").value);
	var maq = document.getElementById("mq40").value;
	var su1 = document.getElementById("s40").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s40").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s40").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan40").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem40").value = Math.round(unixhora);





	}
}

function AnadirTrenueve() {

	var maq = "";

	var to1 = Number(document.getElementById("to39").value);
	var maq = document.getElementById("mq39").value;
	var su1 = document.getElementById("s39").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s39").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s39").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan39").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem39").value = Math.round(unixhora);





	}
}
function AnadirTreocho() {

	var maq = "";

	var to1 = Number(document.getElementById("to38").value);
	var maq = document.getElementById("mq38").value;
	var su1 = document.getElementById("s38").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s38").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s38").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan38").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem38").value = Math.round(unixhora);





	}
}
function Anadirtresiete() {

	var maq = "";

	var to1 = Number(document.getElementById("to37").value);
	var maq = document.getElementById("mq37").value;
	var su1 = document.getElementById("s37").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s37").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s37").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan37").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem37").value = Math.round(unixhora);





	}
}
function AnadirTreseis() {

	var maq = "";

	var to1 = Number(document.getElementById("to36").value);
	var maq = document.getElementById("mq36").value;
	var su1 = document.getElementById("s36").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s36").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s36").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan36").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem36").value = Math.round(unixhora);





	}
}
function AnadirTreincinco() {
	var maq = "";

	var to1 = Number(document.getElementById("to35").value);
	var maq = document.getElementById("mq35").value;
	var su1 = document.getElementById("s35").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s35").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s35").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan35").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem35").value = Math.round(unixhora);





	}
}
function AnadirTreincuatro() {

	var maq = "";

	var to1 = Number(document.getElementById("to34").value);
	var maq = document.getElementById("mq34").value;
	var su1 = document.getElementById("s34").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s34").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s34").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan34").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem34").value = Math.round(unixhora);





	}


}
function AnadirTretrets() {

	var maq = "";

	var to1 = Number(document.getElementById("to33").value);
	var maq = document.getElementById("mq33").value;
	var su1 = document.getElementById("s33").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s33").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s33").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan33").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem33").value = Math.round(unixhora);





	}
}
function AnadirTreidos() {

	var maq = "";

	var to1 = Number(document.getElementById("to32").value);
	var maq = document.getElementById("mq32").value;
	var su1 = document.getElementById("s32").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s32").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s32").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan32").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem32").value = Math.round(unixhora);





	}
}
function AnadirTreinuno() {
	var maq = "";

	var to1 = Number(document.getElementById("to31").value);
	var maq = document.getElementById("mq31").value;
	var su1 = document.getElementById("s31").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s31").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s31").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan31").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem31").value = Math.round(unixhora);





	}
}
function AnadirTrein() {

	var maq = "";

	var to1 = Number(document.getElementById("to30").value);
	var maq = document.getElementById("mq30").value;
	var su1 = document.getElementById("s30").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s30").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s30").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan30").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem30").value = Math.round(unixhora);





	}
}
function AnadirVenueve() {

	var maq = "";

	var to1 = Number(document.getElementById("to29").value);
	var maq = document.getElementById("mq29").value;
	var su1 = document.getElementById("s29").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s29").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s29").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan29").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem29").value = Math.round(unixhora);





	}
}
function AnadirVeocho() {

	var maq = "";

	var to1 = Number(document.getElementById("to28").value);
	var maq = document.getElementById("mq28").value;
	var su1 = document.getElementById("s28").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s28").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s28").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan28").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem28").value = Math.round(unixhora);





	}
}
function AnadirVesiete() {
	var maq = "";

	var to1 = Number(document.getElementById("to27").value);
	var maq = document.getElementById("mq27").value;
	var su1 = document.getElementById("s27").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s27").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s27").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan27").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem27").value = Math.round(unixhora);





	}
}
function AnadirVeseis() {

	var maq = "";

	var to1 = Number(document.getElementById("to26").value);
	var maq = document.getElementById("mq26").value;
	var su1 = document.getElementById("s26").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s26").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s26").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan26").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem26").value = Math.round(unixhora);





	}
}

function AnadirVecinco() {

	var maq = "";

	var to1 = Number(document.getElementById("to25").value);
	var maq = document.getElementById("mq25").value;
	var su1 = document.getElementById("s25").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s25").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s25").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan25").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem25").value = Math.round(unixhora);





	}
}

function AnadirVecuatro() {

	var maq = "";

	var to1 = Number(document.getElementById("to24").value);
	var maq = document.getElementById("mq24").value;
	var su1 = document.getElementById("s24").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s24").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s24").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan24").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem24").value = Math.round(unixhora);





	}
}
function AnadirVedos() {
	var maq = "";

	var to1 = Number(document.getElementById("to22").value);
	var maq = document.getElementById("mq22").value;
	var su1 = document.getElementById("s22").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s22").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s22").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan22").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem22").value = Math.round(unixhora);





	}
}

function AnadirVeuno() {

	var maq = "";

	var to1 = Number(document.getElementById("to21").value);
	var maq = document.getElementById("mq21").value;
	var su1 = document.getElementById("s21").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s21").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s21").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan21").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem21").value = Math.round(unixhora);





	}
}

function AnadirVein() {

	var maq = "";

	var to1 = Number(document.getElementById("to20").value);
	var maq = document.getElementById("mq20").value;
	var su1 = document.getElementById("s20").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s20").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s20").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan20").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem20").value = Math.round(unixhora);





	}
}


function AnadirDiocho() {

	var maq = "";

	var to1 = Number(document.getElementById("to18").value);
	var maq = document.getElementById("mq18").value;
	var su1 = document.getElementById("s18").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s18").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s18").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan18").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem18").value = Math.round(unixhora);





	}
}


function AnadirDisiete() {

	var maq = "";

	var to1 = Number(document.getElementById("to17").value);
	var maq = document.getElementById("mq17").value;
	var su1 = document.getElementById("s17").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s17").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s17").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan17").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem17").value = Math.round(unixhora);





	}
}

function AnadirDiecises() {

	var maq = "";

	var to1 = Number(document.getElementById("to16").value);
	var maq = document.getElementById("mq16").value;
	var su1 = document.getElementById("s16").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s16").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s16").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan16").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem16").value = Math.round(unixhora);





	}
}

function AnadirQuince() {

	var maq = "";

	var to1 = Number(document.getElementById("to15").value);
	var maq = document.getElementById("mq15").value;
	var su1 = document.getElementById("s15").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s15").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s15").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan15").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem15").value = Math.round(unixhora);





	}
}

function AnadirCatorce() {

	var maq = "";

	var to1 = Number(document.getElementById("to14").value);
	var maq = document.getElementById("mq14").value;
	var su1 = document.getElementById("s14").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s14").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s14").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan14").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem14").value = Math.round(unixhora);





	}
}

function AnadirTrece() {

	var maq = "";

	var to1 = Number(document.getElementById("to13").value);
	var maq = document.getElementById("mq13").value;
	var su1 = document.getElementById("s13").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s13").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s13").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan13").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem13").value = Math.round(unixhora);





	}
}

function AnadirDoce() {

	var maq = "";

	var to1 = Number(document.getElementById("to12").value);
	var maq = document.getElementById("mq12").value;
	var su1 = document.getElementById("s12").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s12").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s12").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan12").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem12").value = Math.round(unixhora);





	}
}

function AnadirOnce() {

	var maq = "";

	var to1 = Number(document.getElementById("to11").value);
	var maq = document.getElementById("mq11").value;
	var su1 = document.getElementById("s11").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s11").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s11").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan11").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem11").value = Math.round(unixhora);





	}
}

function AnadirDiez() {

	var maq = "";

	var to1 = Number(document.getElementById("to10").value);
	var maq = document.getElementById("mq10").value;
	var su1 = document.getElementById("s10").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s10").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s10").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan10").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem10").value = Math.round(unixhora);





	}
}


function AnadirNueve() {

	var maq = "";

	var to1 = Number(document.getElementById("to9").value);
	var maq = document.getElementById("mq9").value;
	var su1 = document.getElementById("s9").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s9").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s9").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan9").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem9").value = Math.round(unixhora);





	}
}

function AnadirOcho() {
	var maq = "";

	var to1 = Number(document.getElementById("to8").value);
	var maq = document.getElementById("mq8").value;
	var su1 = document.getElementById("s8").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s8").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s8").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan8").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem8").value = Math.round(unixhora);





	}
}

function AnadirSiete() {

	var maq = "";

	var to1 = Number(document.getElementById("to7").value);
	var maq = document.getElementById("mq7").value;
	var su1 = document.getElementById("s7").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s7").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s7").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan7").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem7").value = Math.round(unixhora);





	}
}

function AnadirSeis() {

	var maq = "";

	var to1 = Number(document.getElementById("to6").value);
	var maq = document.getElementById("mq6").value;
	var su1 = document.getElementById("s6").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s6").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s6").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan6").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem6").value = Math.round(unixhora);





	}
}

function AnadirCinco() {

	var maq = "";

	var to1 = Number(document.getElementById("to5").value);
	var maq = document.getElementById("mq5").value;
	var su1 = document.getElementById("s5").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s5").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s5").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan5").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem5").value = Math.round(unixhora);





	}
}

function AnadirCuatro() {

	var maq = "";

	var to1 = Number(document.getElementById("to4").value);
	var maq = document.getElementById("mq4").value;
	var su1 = document.getElementById("s4").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s4").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s4").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan4").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem4").value = Math.round(unixhora);





	}


}

function AnadirTres() {

	var maq = "";

	var to1 = Number(document.getElementById("to3").value);
	var maq = document.getElementById("mq3").value;
	var su1 = document.getElementById("s3").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s3").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s3").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan3").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem3").value = Math.round(unixhora);





	}
}



function Anadir() {
	var maq = "";

	var to1 = Number(document.getElementById("to1").value);
	var maq = document.getElementById("mq1").value;
	var su1 = document.getElementById("s1").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s1").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s1").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan1").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem1").value = Math.round(unixhora);



	}

}
function AnadirDos() {
	var maq = "";

	var to1 = Number(document.getElementById("to2").value);
	var maq = document.getElementById("mq2").value;
	var su1 = document.getElementById("s2").value;

	// console.log(P1A);
	//document.getElementById("s1").value=to1;


	if (maq == "P1A") {

		var calSuple = to1 * 0.2;
		var suplefina = document.getElementById("s2").value = calSuple;

		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

	if (maq == "R") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

	if (maq == "RR2A") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

	if (maq == "RR3A") {
		var calSuplet = to1 * 0.21;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

	if (maq == "F.C.P.S") {
		var calSuplet = to1 * 0.22;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}
	if (maq == "F.S.P.S") {
		var calSuplet = to1 * 0.19;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

	if (maq == "B") {
		var calSuplet = to1 * 0.18;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

	if (maq == "O") {
		var calSuplet = to1 * 0.2;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

	if (maq == "M.T") {
		var calSuplet = to1 * 0.13;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

	if (maq == "S2A") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}
	if (maq == "S3A") {
		var calSuplet = to1 * 0.26;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}
	if (maq == "S4A") {
		var calSuplet = to1 * 0.30;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}
	if (maq == "P.E") {
		var calSuplet = to1 * 0.20;
		var suplefina = document.getElementById("s2").value = calSuplet;
		var suma = suplefina + to1;

		//console.log(suma);

		var estan = document.getElementById("estan2").value = Math.round(suma);

		var unixhora = 3600 / estan;

		var UNIDA = document.getElementById("tiem2").value = Math.round(unixhora);



	}

}

function limpiar1() {

	document.getElementById("estan1").value = "";
	document.getElementById("op1").value = "";
	document.getElementById("descrip1").value = "";
	document.getElementById("mq1").value = "";
	document.getElementById("to1").value = "";
	document.getElementById("s1").value = "";
	document.getElementById("tiem1").value = "";
	document.getElementById("comen1").value = "";




}

function limpiar2() {

	document.getElementById("estan2").value = "";
	document.getElementById("op2").value = "";
	document.getElementById("descrip2").value = "";
	document.getElementById("mq2").value = "";
	document.getElementById("to2").value = "";
	document.getElementById("s2").value = "";
	document.getElementById("tiem2").value = "";
	document.getElementById("comen2").value = ""
}
function limpiar3() {

	document.getElementById("estan3").value = "";
	document.getElementById("op3").value = "";
	document.getElementById("descrip3").value = "";
	document.getElementById("mq3").value = "";
	document.getElementById("to3").value = "";
	document.getElementById("s3").value = "";
	document.getElementById("tiem3").value = "";
	document.getElementById("comen3").value = "";
}
function limpiar4() {

	document.getElementById("estan4").value = "";
	document.getElementById("op4").value = "";
	document.getElementById("descrip4").value = "";
	document.getElementById("mq4").value = "";
	document.getElementById("to4").value = "";
	document.getElementById("s4").value = "";
	document.getElementById("tiem4").value = "";
	document.getElementById("comen4").value = "";
}
function limpiar5() {

	document.getElementById("estan5").value = "";
	document.getElementById("op5").value = "";
	document.getElementById("descrip5").value = "";
	document.getElementById("mq5").value = "";
	document.getElementById("to5").value = "";
	document.getElementById("s5").value = "";
	document.getElementById("tiem5").value = "";
	document.getElementById("comen5").value = "";
}
function limpiar6() {

	document.getElementById("estan6").value = "";
	document.getElementById("op6").value = "";
	document.getElementById("descrip6").value = "";
	document.getElementById("mq6").value = "";
	document.getElementById("to6").value = "";
	document.getElementById("s6").value = "";
	document.getElementById("tiem6").value = "";
	document.getElementById("comen6").value = "";
}
function limpiar7() {

	document.getElementById("estan7").value = "";
	document.getElementById("op7").value = "";
	document.getElementById("descrip7").value = "";
	document.getElementById("mq7").value = "";
	document.getElementById("to7").value = "";
	document.getElementById("s7").value = "";
	document.getElementById("tiem7").value = "";
	document.getElementById("comen7").value = "";
}
function limpiar8() {

	document.getElementById("estan8").value = "";
	document.getElementById("op8").value = "";
	document.getElementById("descrip8").value = "";
	document.getElementById("mq8").value = "";
	document.getElementById("to8").value = "";
	document.getElementById("s8").value = "";
	document.getElementById("tiem8").value = "";
	document.getElementById("comen8").value = "";
}
function limpiar9() {

	document.getElementById("estan9").value = "";
	document.getElementById("op9").value = "";
	document.getElementById("descrip9").value = "";
	document.getElementById("mq9").value = "";
	document.getElementById("to9").value = "";
	document.getElementById("s9").value = "";
	document.getElementById("tiem9").value = "";
	document.getElementById("comen9").value = "";
}
function limpiar10() {

	document.getElementById("estan10").value = "";
	document.getElementById("op10").value = "";
	document.getElementById("descrip10").value = "";
	document.getElementById("mq10").value = "";
	document.getElementById("to10").value = "";
	document.getElementById("s10").value = "";
	document.getElementById("tiem10").value = "";
	document.getElementById("comen10").value = "";
}
function limpiar11() {

	document.getElementById("estan11").value = "";
	document.getElementById("op11").value = "";
	document.getElementById("descrip11").value = "";
	document.getElementById("mq11").value = "";
	document.getElementById("to11").value = "";
	document.getElementById("s11").value = "";
	document.getElementById("tiem11").value = "";
	document.getElementById("comen11").value = "";
}
function limpiar12() {

	document.getElementById("estan12").value = "";
	document.getElementById("op12").value = "";
	document.getElementById("descrip12").value = "";
	document.getElementById("mq12").value = "";
	document.getElementById("to12").value = "";
	document.getElementById("s12").value = "";
	document.getElementById("tiem12").value = "";
	document.getElementById("comen12").value = "";
}
function limpiar13() {

	document.getElementById("estan13").value = "";
	document.getElementById("op13").value = "";
	document.getElementById("descrip13").value = "";
	document.getElementById("mq13").value = "";
	document.getElementById("to13").value = "";
	document.getElementById("s13").value = "";
	document.getElementById("tiem13").value = "";
	document.getElementById("comen13").value = "";
}
function limpiar14() {

	document.getElementById("estan14").value = "";
	document.getElementById("op14").value = "";
	document.getElementById("descrip14").value = "";
	document.getElementById("mq14").value = "";
	document.getElementById("to14").value = "";
	document.getElementById("s14").value = "";
	document.getElementById("tiem14").value = "";
	document.getElementById("comen14").value = "";
}
function limpiar15() {

	document.getElementById("estan15").value = "";
	document.getElementById("op15").value = "";
	document.getElementById("descrip15").value = "";
	document.getElementById("mq15").value = "";
	document.getElementById("to15").value = "";
	document.getElementById("s15").value = "";
	document.getElementById("tiem15").value = "";
	document.getElementById("comen15").value = "";
}
function limpiar16() {

	document.getElementById("estan16").value = "";
	document.getElementById("op16").value = "";
	document.getElementById("descrip16").value = "";
	document.getElementById("mq16").value = "";
	document.getElementById("to16").value = "";
	document.getElementById("s16").value = "";
	document.getElementById("tiem16").value = "";
	document.getElementById("comen16").value = "";
}
function limpiar17() {

	document.getElementById("estan17").value = "";
	document.getElementById("op17").value = "";
	document.getElementById("descrip17").value = "";
	document.getElementById("mq17").value = "";
	document.getElementById("to17").value = "";
	document.getElementById("s17").value = "";
	document.getElementById("tiem17").value = "";
	document.getElementById("comen17").value = "";
}
function limpiar18() {

	document.getElementById("estan18").value = "";
	document.getElementById("op18").value = "";
	document.getElementById("descrip18").value = "";
	document.getElementById("mq18").value = "";
	document.getElementById("to18").value = "";
	document.getElementById("s18").value = "";
	document.getElementById("tiem18").value = "";
	document.getElementById("comen18").value = "";
}
function limpiar19() {

	document.getElementById("estan19").value = "";
	document.getElementById("op19").value = "";
	document.getElementById("descrip19").value = "";
	document.getElementById("mq19").value = "";
	document.getElementById("to19").value = "";
	document.getElementById("s19").value = "";
	document.getElementById("tiem19").value = "";
	document.getElementById("comen19").value = "";
}
function limpiar20() {

	document.getElementById("estan20").value = "";
	document.getElementById("op20").value = "";
	document.getElementById("descrip20").value = "";
	document.getElementById("mq20").value = "";
	document.getElementById("to20").value = "";
	document.getElementById("s20").value = "";
	document.getElementById("tiem20").value = "";
	document.getElementById("comen20").value = "";
}
function limpiar21() {

	document.getElementById("estan21").value = "";
	document.getElementById("op21").value = "";
	document.getElementById("descrip21").value = "";
	document.getElementById("mq21").value = "";
	document.getElementById("to21").value = "";
	document.getElementById("s21").value = "";
	document.getElementById("tiem21").value = "";
	document.getElementById("comen21").value = "";
}
function limpiar22() {

	document.getElementById("estan22").value = "";
	document.getElementById("op22").value = "";
	document.getElementById("descrip22").value = "";
	document.getElementById("mq22").value = "";
	document.getElementById("to22").value = "";
	document.getElementById("s22").value = "";
	document.getElementById("tiem22").value = "";
	document.getElementById("comen22").value = "";
}
function limpiar23() {

	document.getElementById("estan23").value = "";
	document.getElementById("op23").value = "";
	document.getElementById("descrip23").value = "";
	document.getElementById("mq23").value = "";
	document.getElementById("to23").value = "";
	document.getElementById("s23").value = "";
	document.getElementById("tiem23").value = "";
	document.getElementById("comen23").value = "";
}
function limpiar24() {

	document.getElementById("estan24").value = "";
	document.getElementById("op24").value = "";
	document.getElementById("descrip24").value = "";
	document.getElementById("mq24").value = "";
	document.getElementById("to24").value = "";
	document.getElementById("s24").value = "";
	document.getElementById("tiem24").value = "";
	document.getElementById("comen24").value = "";
}
function limpiar25() {

	document.getElementById("estan25").value = "";
	document.getElementById("op25").value = "";
	document.getElementById("descrip25").value = "";
	document.getElementById("mq25").value = "";
	document.getElementById("to25").value = "";
	document.getElementById("s25").value = "";
	document.getElementById("tiem25").value = "";
	document.getElementById("comen25").value = "";
}
function limpiar26() {

	document.getElementById("estan26").value = "";
	document.getElementById("op26").value = "";
	document.getElementById("descrip26").value = "";
	document.getElementById("mq26").value = "";
	document.getElementById("to26").value = "";
	document.getElementById("s26").value = "";
	document.getElementById("tiem26").value = "";
	document.getElementById("comen26").value = "";
}
function limpiar27() {

	document.getElementById("estan27").value = "";
	document.getElementById("op27").value = "";
	document.getElementById("descrip27").value = "";
	document.getElementById("mq27").value = "";
	document.getElementById("to27").value = "";
	document.getElementById("s27").value = "";
	document.getElementById("tiem27").value = "";
	document.getElementById("comen27").value = "";
}
function limpiar28() {

	document.getElementById("estan28").value = "";
	document.getElementById("op28").value = "";
	document.getElementById("descrip28").value = "";
	document.getElementById("mq28").value = "";
	document.getElementById("to28").value = "";
	document.getElementById("s28").value = "";
	document.getElementById("tiem28").value = "";
	document.getElementById("comen28").value = "";
}
function limpiar29() {

	document.getElementById("estan29").value = "";
	document.getElementById("op29").value = "";
	document.getElementById("descrip29").value = "";
	document.getElementById("mq29").value = "";
	document.getElementById("to29").value = "";
	document.getElementById("s29").value = "";
	document.getElementById("tiem29").value = "";
	document.getElementById("comen29").value = "";
}
function limpiar30() {

	document.getElementById("estan30").value = "";
	document.getElementById("op30").value = "";
	document.getElementById("descrip30").value = "";
	document.getElementById("mq30").value = "";
	document.getElementById("to30").value = "";
	document.getElementById("s30").value = "";
	document.getElementById("tiem30").value = "";
	document.getElementById("comen30").value = "";
}
function limpiar31() {

	document.getElementById("estan31").value = "";
	document.getElementById("op31").value = "";
	document.getElementById("descrip31").value = "";
	document.getElementById("mq31").value = "";
	document.getElementById("to31").value = "";
	document.getElementById("s31").value = "";
	document.getElementById("tiem31").value = "";
	document.getElementById("comen31").value = "";
}
function limpiar32() {

	document.getElementById("estan32").value = "";
	document.getElementById("op32").value = "";
	document.getElementById("descrip32").value = "";
	document.getElementById("mq32").value = "";
	document.getElementById("to32").value = "";
	document.getElementById("s32").value = "";
	document.getElementById("tiem32").value = "";
	document.getElementById("comen32").value = "";
}
function limpiar33() {

	document.getElementById("estan33").value = "";
	document.getElementById("op33").value = "";
	document.getElementById("descrip33").value = "";
	document.getElementById("mq33").value = "";
	document.getElementById("to33").value = "";
	document.getElementById("s33").value = "";
	document.getElementById("tiem33").value = "";
	document.getElementById("comen33").value = "";
}
function limpiar34() {

	document.getElementById("estan34").value = "";
	document.getElementById("op34").value = "";
	document.getElementById("descrip34").value = "";
	document.getElementById("mq34").value = "";
	document.getElementById("to34").value = "";
	document.getElementById("s34").value = "";
	document.getElementById("tiem34").value = "";
	document.getElementById("comen34").value = "";
}
function limpiar35() {

	document.getElementById("estan35").value = "";
	document.getElementById("op35").value = "";
	document.getElementById("descrip35").value = "";
	document.getElementById("mq35").value = "";
	document.getElementById("to35").value = "";
	document.getElementById("s35").value = "";
	document.getElementById("tiem35").value = "";
	document.getElementById("comen35").value = "";
}
function limpiar36() {

	document.getElementById("estan36").value = "";
	document.getElementById("op36").value = "";
	document.getElementById("descrip36").value = "";
	document.getElementById("mq36").value = "";
	document.getElementById("to36").value = "";
	document.getElementById("s36").value = "";
	document.getElementById("tiem36").value = "";
	document.getElementById("comen36").value = "";
}
function limpiar37() {

	document.getElementById("estan37").value = "";
	document.getElementById("op37").value = "";
	document.getElementById("descrip37").value = "";
	document.getElementById("mq37").value = "";
	document.getElementById("to37").value = "";
	document.getElementById("s37").value = "";
	document.getElementById("tiem37").value = "";
	document.getElementById("comen37").value = "";
}
function limpiar38() {

	document.getElementById("estan38").value = "";
	document.getElementById("op38").value = "";
	document.getElementById("descrip38").value = "";
	document.getElementById("mq38").value = "";
	document.getElementById("to38").value = "";
	document.getElementById("s38").value = "";
	document.getElementById("tiem38").value = "";
	document.getElementById("comen38").value = "";
}
function limpiar39() {

	document.getElementById("estan39").value = "";
	document.getElementById("op39").value = "";
	document.getElementById("descrip39").value = "";
	document.getElementById("mq39").value = "";
	document.getElementById("to39").value = "";
	document.getElementById("s39").value = "";
	document.getElementById("tiem39").value = "";
	document.getElementById("comen39").value = "";
}
function limpiar40() {

	document.getElementById("estan40").value = "";
	document.getElementById("op40").value = "";
	document.getElementById("descrip40").value = "";
	document.getElementById("mq40").value = "";
	document.getElementById("to40").value = "";
	document.getElementById("s240").value = "";
	document.getElementById("tiem40").value = "";
	document.getElementById("comen40").value = "";
}
function limpiar41() {

	document.getElementById("estan41").value = "";
	document.getElementById("op41").value = "";
	document.getElementById("descrip41").value = "";
	document.getElementById("mq41").value = "";
	document.getElementById("to41").value = "";
	document.getElementById("s41").value = "";
	document.getElementById("tiem41").value = "";
	document.getElementById("comen41").value = "";
}
function limpiar42() {

	document.getElementById("estan42").value = "";
	document.getElementById("op42").value = "";
	document.getElementById("descrip42").value = "";
	document.getElementById("mq42").value = "";
	document.getElementById("to42").value = "";
	document.getElementById("s42").value = "";
	document.getElementById("tiem42").value = "";
	document.getElementById("comen42").value = "";
}
function limpiar43() {

	document.getElementById("estan43").value = "";
	document.getElementById("op43").value = "";
	document.getElementById("descrip43").value = "";
	document.getElementById("mq43").value = "";
	document.getElementById("to43").value = "";
	document.getElementById("s43").value = "";
	document.getElementById("tiem43").value = "";
	document.getElementById("comen43").value = "";
}
function limpiar44() {

	document.getElementById("estan44").value = "";
	document.getElementById("op44").value = "";
	document.getElementById("descrip44").value = "";
	document.getElementById("mq44").value = "";
	document.getElementById("to44").value = "";
	document.getElementById("s44").value = "";
	document.getElementById("tiem44").value = "";
	document.getElementById("comen44").value = "";
}
function limpiar45() {

	document.getElementById("estan45").value = "";
	document.getElementById("op45").value = "";
	document.getElementById("descrip45").value = "";
	document.getElementById("mq45").value = "";
	document.getElementById("to45").value = "";
	document.getElementById("s45").value = "";
	document.getElementById("tiem45").value = "";
	document.getElementById("comen45").value = "";
}
function limpiar46() {

	document.getElementById("estan46").value = "";
	document.getElementById("op46").value = "";
	document.getElementById("descrip46").value = "";
	document.getElementById("mq46").value = "";
	document.getElementById("to46").value = "";
	document.getElementById("s46").value = "";
	document.getElementById("tiem46").value = "";
	document.getElementById("comen46").value = "";
}
function limpiar47() {

	document.getElementById("estan47").value = "";
	document.getElementById("op47").value = "";
	document.getElementById("descrip47").value = "";
	document.getElementById("mq47").value = "";
	document.getElementById("to47").value = "";
	document.getElementById("s47").value = "";
	document.getElementById("tiem47").value = "";
	document.getElementById("comen47").value = "";
}
function limpiar48() {

	document.getElementById("estan48").value = "";
	document.getElementById("op48").value = "";
	document.getElementById("descrip48").value = "";
	document.getElementById("mq48").value = "";
	document.getElementById("to48").value = "";
	document.getElementById("s48").value = "";
	document.getElementById("tiem48").value = "";
	document.getElementById("comen48").value = "";
}
function limpiar49() {

	document.getElementById("estan49").value = "";
	document.getElementById("op49").value = "";
	document.getElementById("descrip49").value = "";
	document.getElementById("mq49").value = "";
	document.getElementById("to49").value = "";
	document.getElementById("s49").value = "";
	document.getElementById("tiem49").value = "";
	document.getElementById("comen49").value = "";
}
function limpiar50() {

	document.getElementById("estan50").value = "";
	document.getElementById("op50").value = "";
	document.getElementById("descrip50").value = "";
	document.getElementById("mq50").value = "";
	document.getElementById("to50").value = "";
	document.getElementById("s50").value = "";
	document.getElementById("tiem50").value = "";
	document.getElementById("comen50").value = "";
}










function cod1(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip1').value = descrip;
				document.getElementById('mq1').value = maquina;
				document.getElementById('to1').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod2(val2) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val2)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip2').value = descrip;
				document.getElementById('mq2').value = maquina;
				document.getElementById('to2').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
				
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod3(val3) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val3)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip3').value = descrip;
				document.getElementById('mq3').value = maquina;
				document.getElementById('to3').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod4(val4) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val4)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip4').value = descrip;
				document.getElementById('mq4').value = maquina;
				document.getElementById('to4').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod5(val5) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val5)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip5').value = descrip;
				document.getElementById('mq5').value = maquina;
				document.getElementById('to5').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod6(val6) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val6)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip6').value = descrip;
				document.getElementById('mq6').value = maquina;
				document.getElementById('to6').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod7(val7) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val7)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip7').value = descrip;
				document.getElementById('mq7').value = maquina;
				document.getElementById('to7').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod8(val8) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val8)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip8').value = descrip;
				document.getElementById('mq8').value = maquina;
				document.getElementById('to8').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod9(val9) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val9)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip9').value = descrip;
				document.getElementById('mq9').value = maquina;
				document.getElementById('to9').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod10(val10) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val10)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip10').value = descrip;
				document.getElementById('mq10').value = maquina;
				document.getElementById('to10').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod11(val11) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val11)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip11').value = descrip;
				document.getElementById('mq11').value = maquina;
				document.getElementById('to11').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod12(val12) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val12)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip12').value = descrip;
				document.getElementById('mq12').value = maquina;
				document.getElementById('to12').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod13(val13) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val13)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip13').value = descrip;
				document.getElementById('mq13').value = maquina;
				document.getElementById('to13').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod14(val14) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val14)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip14').value = descrip;
				document.getElementById('mq14').value = maquina;
				document.getElementById('to14').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod15(val15) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val15)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip15').value = descrip;
				document.getElementById('mq15').value = maquina;
				document.getElementById('to15').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod16(val16) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val16)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip16').value = descrip;
				document.getElementById('mq16').value = maquina;
				document.getElementById('to16').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod17(val17) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val17)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip17').value = descrip;
				document.getElementById('mq17').value = maquina;
				document.getElementById('to17').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod18(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip18').value = descrip;
				document.getElementById('mq18').value = maquina;
				document.getElementById('to18').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod19(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip19').value = descrip;
				document.getElementById('mq19').value = maquina;
				document.getElementById('to19').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod20(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip20').value = descrip;
				document.getElementById('mq20').value = maquina;
				document.getElementById('to20').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod21(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip21').value = descrip;
				document.getElementById('mq21').value = maquina;
				document.getElementById('to21').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod22(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip22').value = descrip;
				document.getElementById('mq22').value = maquina;
				document.getElementById('to22').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod23(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip23').value = descrip;
				document.getElementById('mq23').value = maquina;
				document.getElementById('to23').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod24(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip24').value = descrip;
				document.getElementById('mq24').value = maquina;
				document.getElementById('to24').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod25(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip25').value = descrip;
				document.getElementById('mq25').value = maquina;
				document.getElementById('to25').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod26(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip26').value = descrip;
				document.getElementById('mq26').value = maquina;
				document.getElementById('to26').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod27(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip27').value = descrip;
				document.getElementById('mq27').value = maquina;
				document.getElementById('to27').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod28(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip28').value = descrip;
				document.getElementById('mq28').value = maquina;
				document.getElementById('to28').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod29(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip29').value = descrip;
				document.getElementById('mq29').value = maquina;
				document.getElementById('to29').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod30(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip30').value = descrip;
				document.getElementById('mq30').value = maquina;
				document.getElementById('to30').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod31(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip31').value = descrip;
				document.getElementById('mq31').value = maquina;
				document.getElementById('to31').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod32(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip32').value = descrip;
				document.getElementById('mq32').value = maquina;
				document.getElementById('to32').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod33(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip33').value = descrip;
				document.getElementById('mq33').value = maquina;
				document.getElementById('to33').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod34(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip34').value = descrip;
				document.getElementById('mq34').value = maquina;
				document.getElementById('to34').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod35(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip35').value = descrip;
				document.getElementById('mq35').value = maquina;
				document.getElementById('to35').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod36(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip36').value = descrip;
				document.getElementById('mq36').value = maquina;
				document.getElementById('to36').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod37(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip37').value = descrip;
				document.getElementById('mq37').value = maquina;
				document.getElementById('to37').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod38(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip38').value = descrip;
				document.getElementById('mq38').value = maquina;
				document.getElementById('to38').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod39(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip39').value = descrip;
				document.getElementById('mq39').value = maquina;
				document.getElementById('to39').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod40(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip40').value = descrip;
				document.getElementById('mq40').value = maquina;
				document.getElementById('to40').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod41(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip41').value = descrip;
				document.getElementById('mq41').value = maquina;
				document.getElementById('to41').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod42(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip42').value = descrip;
				document.getElementById('mq42').value = maquina;
				document.getElementById('to42').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod43(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip43').value = descrip;
				document.getElementById('mq43').value = maquina;
				document.getElementById('to43').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod44(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip44').value = descrip;
				document.getElementById('mq44').value = maquina;
				document.getElementById('to44').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod45(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip45').value = descrip;
				document.getElementById('mq45').value = maquina;
				document.getElementById('to45').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod46(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip46').value = descrip;
				document.getElementById('mq46').value = maquina;
				document.getElementById('to46').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod47(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip47').value = descrip;
				document.getElementById('mq47').value = maquina;
				document.getElementById('to47').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod48(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip48').value = descrip;
				document.getElementById('mq48').value = maquina;
				document.getElementById('to48').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
function cod49(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip49').value = descrip;
				document.getElementById('mq49').value = maquina;
				document.getElementById('to49').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

function cod50(val) { //MaestroOperaciones
	var existe2 = '';
	db.collection("MaestroOperaciones").where("codigo", "==", val)
		.get()
		.then(function (querySnapshot) {
			//tabl.innerHTML = "";
			querySnapshot.forEach(function (doc) {

				console.log(doc.id, " => ", doc.data());

				existe2 = doc.id;

				var descrip = `${doc.data().descrip}`;
				var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;




				document.getElementById('descrip50').value = descrip;
				document.getElementById('mq50').value = maquina;
				document.getElementById('to50').value = tiempoObse;




			});
			if (existe2 != '') {
				console.log(' entonces si existe');
			}
			else {
				console.log(' definitivamente no existe');
				Swal.fire(
					'No existe la operacion',
					'',
					'error'
				)
			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}
const tareas = document.getElementById('tareas');
const tareasCompletadas = document.getElementById('tareasCompletadas');

const listaTareas = Sortable.create(tareas, {
	group: {
		name: "lista-tareas",
		pull: true,
		put: true
	},
	animation: 150,
	easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
	handle: ".fas",
	filter: ".titulo",
	// ghostClass: "active",
	chosenClass: "active",
	//dragClass: "invisible"
	dataIdAttr: "data-identificador",
	store: {
		set: function (sortable) {
			orden = sortable.toArray();
			console.log('Orden ' + orden)
			localStorage.setItem('lista-tareas', orden.join('|'));
		},

		/*get: function () {
			 orden2 = localStorage.getItem('lista-tareas');
			console.log('Orden 2' + orden2)
			return orden2 ? orden2.split('|') : [];
		}*/
	},

	if(orden=''){
		alert("Por Favor activa la función de orden....")
		Swal.fire(
			'Por Favor activa la función de orden....',
			'',
			'error'
		)
	}

	// onChoose: (evento) => { 
	// 	console.log('Se ha seleccionado un elemento')
	// },
	// onUnchoose: (evento) => { console.log('Se ha deseleccionado un elemento') },
	// onStart: (evento) => { console.log('Se inicio el drag and drop') },
	// onEnd: (evento) => { console.log('Finalizo el drag and drop') },
	// onAdd: (evento) => { console.log('Se agrego un elemento a la lista') },
	// onRemove: (evento) => { console.log('Se elimino un elemento a la lista') },
	// onUpdate: (evento) => { console.log('Se actualizo la lista') },
	// onFilter: (evento) => { console.log('Se intento mover un elemento filtrado') },
	// onMove: (evento) => { console.log('Se movio un elemento') },
	// onChange: (evento) => { console.log('Un elemento cambio de lugar') },
});



function Guardar() {

	if(orden=''){
		alert("Por Favor activa la función de orden....")
		Swal.fire(
			'Por Favor activa la función de orden....',
			'',
			'error'
		)
	}

	//-------------------------
	//validacionRegis();

	var enviarFecha = document.getElementById("fecha").value;
	var enviarCliente = document.getElementById("cliente").value;


	var datoRef = document.getElementById("Referencia").value;
	//var OPE=document.getElementById("OrdenProduccion").value;
	var total = document.getElementById("totaltiempo").value;
	existe = '';

	db.collection("FichaJesus").where("Referencia", "==", datoRef)
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());

				existe = doc.id;
			});
			if (existe != '') {
				console.log('entonces si existe');
				Swal.fire(
					'La Referencia ya ha sido registrada',
					'',
					'error'
				)
				
			} else {
				console.log('No existe');
				alert('Ingresando nueva Referencia....');
				//---------------------1-------------------------------
				var estanda1 = document.getElementById("estan1").value;
				var codi1 = document.getElementById("op1").value;
				var desc1 = document.getElementById("descrip1").value;
				var maquina1 = document.getElementById("mq1").value;
				var tObse1 = document.getElementById("to1").value;
				var supl1 = document.getElementById("s1").value;
				var uni1 = document.getElementById("tiem1").value;

				var comen1 = document.getElementById("comen1").value;

				/*var totalUniP = document.getElementById("tuPlana").value;
				var totalUniR = document.getElementById("inUniR").value;
				var totalUniRR2A = document.getElementById("tuRR2A").value;
				var totalUniRR3A = document.getElementById("tuRR3A").value;
				var totalUniFSPS = document.getElementById("tuFSPS").value;
				var totalUniFCPS = document.getElementById("tuFCPS").value;
				var totalUniB = document.getElementById("tuB").value;
				var totalUniO = document.getElementById("tuO").value;
				var totalUniMT = document.getElementById("tuMT").value;
				var totalUniS2A = document.getElementById("tuS2A").value;
				var totalUniS3A = document.getElementById("tuS3A").value;
				var totalUniPE = document.getElementById("tuPE").value;*/


				// var guardarPLANA=document.getElementById("guardarPorcenPlana").value;

				//------------------------2-----------------------------
				var estanda2 = document.getElementById("estan2").value;
				var codi2 = document.getElementById("op2").value;
				var desc2 = document.getElementById("descrip2").value;
				var maquina2 = document.getElementById("mq2").value;
				var tObse2 = document.getElementById("to2").value;
				var supl2 = document.getElementById("s2").value;
				var uni2 = document.getElementById("tiem2").value;

				var comen2 = document.getElementById("comen2").value;





				//-------------------------3--------------------------
				var estanda3 = document.getElementById("estan3").value;
				var codi3 = document.getElementById("op3").value;
				var desc3 = document.getElementById("descrip3").value;
				var maquina3 = document.getElementById("mq3").value;
				var tObse3 = document.getElementById("to3").value;
				var supl3 = document.getElementById("s3").value;
				var uni3 = document.getElementById("tiem3").value;
				var comen3 = document.getElementById("comen3").value;

				//-------------------------4--------------------------
				var estanda4 = document.getElementById("estan4").value;
				var codi4 = document.getElementById("op4").value;
				var desc4 = document.getElementById("descrip4").value;
				var maquina4 = document.getElementById("mq4").value;
				var tObse4 = document.getElementById("to4").value;
				var supl4 = document.getElementById("s4").value;
				var uni4 = document.getElementById("tiem4").value;

				var comen4 = document.getElementById("comen4").value;


				//-------------------------5--------------------------
				var estanda5 = document.getElementById("estan5").value;
				var codi5 = document.getElementById("op5").value;
				var desc5 = document.getElementById("descrip5").value;
				var maquina5 = document.getElementById("mq5").value;
				var tObse5 = document.getElementById("to5").value;
				var supl5 = document.getElementById("s5").value;
				var uni5 = document.getElementById("tiem5").value;
				var comen5 = document.getElementById("comen5").value;


				//-------------------------6--------------------------
				var estanda6 = document.getElementById("estan6").value;
				var codi6 = document.getElementById("op6").value;
				var desc6 = document.getElementById("descrip6").value;
				var maquina6 = document.getElementById("mq6").value;
				var tObse6 = document.getElementById("to6").value;
				var supl6 = document.getElementById("s6").value;
				var uni6 = document.getElementById("tiem6").value;

				var comen6 = document.getElementById("comen6").value;


				//-------------------------7--------------------------
				var estanda7 = document.getElementById("estan7").value;
				var codi7 = document.getElementById("op7").value;
				var desc7 = document.getElementById("descrip7").value;
				var maquina7 = document.getElementById("mq7").value;
				var tObse7 = document.getElementById("to7").value;
				var supl7 = document.getElementById("s7").value;
				var uni7 = document.getElementById("tiem7").value;

				var comen7 = document.getElementById("comen7").value;


				//-------------------------8--------------------------
				var estanda8 = document.getElementById("estan8").value;
				var codi8 = document.getElementById("op8").value;
				var desc8 = document.getElementById("descrip8").value;
				var maquina8 = document.getElementById("mq8").value;
				var tObse8 = document.getElementById("to8").value;
				var supl8 = document.getElementById("s8").value;
				var uni8 = document.getElementById("tiem8").value;

				var comen8 = document.getElementById("comen8").value;


				//-------------------------9--------------------------
				var estanda9 = document.getElementById("estan9").value;
				var codi9 = document.getElementById("op9").value;
				var desc9 = document.getElementById("descrip9").value;
				var maquina9 = document.getElementById("mq9").value;
				var tObse9 = document.getElementById("to9").value;
				var supl9 = document.getElementById("s9").value;
				var uni9 = document.getElementById("tiem9").value;

				var comen9 = document.getElementById("comen9").value;


				//-------------------------10--------------------------
				var estanda10 = document.getElementById("estan10").value;
				var codi10 = document.getElementById("op10").value;
				var desc10 = document.getElementById("descrip10").value;
				var maquina10 = document.getElementById("mq10").value;
				var tObse10 = document.getElementById("to10").value;
				var supl10 = document.getElementById("s10").value;
				var uni10 = document.getElementById("tiem10").value;

				var comen10 = document.getElementById("comen10").value;


				//-------------------------11--------------------------
				var estanda11 = document.getElementById("estan11").value;
				var codi11 = document.getElementById("op11").value;
				var desc11 = document.getElementById("descrip11").value;
				var maquina11 = document.getElementById("mq11").value;
				var tObse11 = document.getElementById("to11").value;
				var supl11 = document.getElementById("s11").value;
				var uni11 = document.getElementById("tiem11").value;

				var comen11 = document.getElementById("comen11").value;


				//-------------------------12--------------------------
				var estanda12 = document.getElementById("estan12").value;
				var codi12 = document.getElementById("op12").value;
				var desc12 = document.getElementById("descrip12").value;
				var maquina12 = document.getElementById("mq12").value;
				var tObse12 = document.getElementById("to12").value;
				var supl12 = document.getElementById("s12").value;
				var uni12 = document.getElementById("tiem12").value;

				var comen12 = document.getElementById("comen12").value;


				//-------------------------13--------------------------
				var estanda13 = document.getElementById("estan13").value;
				var codi13 = document.getElementById("op13").value;
				var desc13 = document.getElementById("descrip13").value;
				var maquina13 = document.getElementById("mq13").value;
				var tObse13 = document.getElementById("to13").value;
				var supl13 = document.getElementById("s13").value;
				var uni13 = document.getElementById("tiem13").value;

				var comen13 = document.getElementById("comen13").value;


				//-------------------------14--------------------------
				var estanda14 = document.getElementById("estan14").value;
				var codi14 = document.getElementById("op14").value;
				var desc14 = document.getElementById("descrip14").value;
				var maquina14 = document.getElementById("mq14").value;
				var tObse14 = document.getElementById("to14").value;
				var supl14 = document.getElementById("s14").value;
				var uni14 = document.getElementById("tiem14").value;

				var comen14 = document.getElementById("comen14").value;


				//-------------------------15--------------------------
				var estanda15 = document.getElementById("estan15").value;
				var codi15 = document.getElementById("op15").value;
				var desc15 = document.getElementById("descrip15").value;
				var maquina15 = document.getElementById("mq15").value;
				var tObse15 = document.getElementById("to15").value;
				var supl15 = document.getElementById("s15").value;
				var uni15 = document.getElementById("tiem15").value;

				var comen15 = document.getElementById("comen15").value;


				//-------------------------16--------------------------
				var estanda16 = document.getElementById("estan16").value;
				var codi16 = document.getElementById("op16").value;
				var desc16 = document.getElementById("descrip16").value;
				var maquina16 = document.getElementById("mq16").value;
				var tObse16 = document.getElementById("to16").value;
				var supl16 = document.getElementById("s16").value;
				var uni16 = document.getElementById("tiem16").value;

				var comen16 = document.getElementById("comen16").value;


				//-------------------------17--------------------------
				var estanda17 = document.getElementById("estan17").value;
				var codi17 = document.getElementById("op17").value;
				var desc17 = document.getElementById("descrip17").value;
				var maquina17 = document.getElementById("mq17").value;
				var tObse17 = document.getElementById("to17").value;
				var supl17 = document.getElementById("s17").value;
				var uni17 = document.getElementById("tiem17").value;

				var comen17 = document.getElementById("comen17").value;


				//-------------------------18--------------------------
				var estanda18 = document.getElementById("estan18").value;
				var codi18 = document.getElementById("op18").value;
				var desc18 = document.getElementById("descrip18").value;
				var maquina18 = document.getElementById("mq18").value;
				var tObse18 = document.getElementById("to18").value;
				var supl18 = document.getElementById("s18").value;
				var uni18 = document.getElementById("tiem18").value;

				var comen18 = document.getElementById("comen18").value;


				//-------------------------19--------------------------
				var estanda19 = document.getElementById("estan19").value;
				var codi19 = document.getElementById("op19").value;
				var desc19 = document.getElementById("descrip19").value;
				var maquina19 = document.getElementById("mq19").value;
				var tObse19 = document.getElementById("to19").value;
				var supl19 = document.getElementById("s19").value;
				var uni19 = document.getElementById("tiem19").value;

				var comen19 = document.getElementById("comen19").value;


				//-------------------------20--------------------------
				var estanda20 = document.getElementById("estan20").value;
				var codi20 = document.getElementById("op20").value;
				var desc20 = document.getElementById("descrip20").value;
				var maquina20 = document.getElementById("mq20").value;
				var tObse20 = document.getElementById("to20").value;
				var supl20 = document.getElementById("s20").value;
				var uni20 = document.getElementById("tiem20").value;

				var comen20 = document.getElementById("comen20").value;


				//-------------------------21--------------------------
				var estanda21 = document.getElementById("estan21").value;
				var codi21 = document.getElementById("op21").value;
				var desc21 = document.getElementById("descrip21").value;
				var maquina21 = document.getElementById("mq21").value;
				var tObse21 = document.getElementById("to21").value;
				var supl21 = document.getElementById("s21").value;
				var uni21 = document.getElementById("tiem21").value;

				var comen21 = document.getElementById("comen21").value;



				//-------------------------22--------------------------
				var estanda22 = document.getElementById("estan22").value;
				var codi22 = document.getElementById("op22").value;
				var desc22 = document.getElementById("descrip22").value;
				var maquina22 = document.getElementById("mq22").value;
				var tObse22 = document.getElementById("to22").value;
				var supl22 = document.getElementById("s22").value;
				var uni22 = document.getElementById("tiem22").value;

				var comen22 = document.getElementById("comen22").value;


				//-------------------------23--------------------------
				var estanda23 = document.getElementById("estan23").value;
				var codi23 = document.getElementById("op23").value;
				var desc23 = document.getElementById("descrip23").value;
				var maquina23 = document.getElementById("mq23").value;
				var tObse23 = document.getElementById("to23").value;
				var supl23 = document.getElementById("s23").value;
				var uni23 = document.getElementById("tiem23").value;

				var comen23 = document.getElementById("comen23").value;


				//-------------------------24--------------------------
				var estanda24 = document.getElementById("estan24").value;
				var codi24 = document.getElementById("op24").value;
				var desc24 = document.getElementById("descrip24").value;
				var maquina24 = document.getElementById("mq24").value;
				var tObse24 = document.getElementById("to24").value;
				var supl24 = document.getElementById("s24").value;
				var uni24 = document.getElementById("tiem24").value;

				var comen24 = document.getElementById("comen24").value;


				//-------------------------25--------------------------
				var estanda25 = document.getElementById("estan25").value;
				var codi25 = document.getElementById("op25").value;
				var desc25 = document.getElementById("descrip25").value;
				var maquina25 = document.getElementById("mq25").value;
				var tObse25 = document.getElementById("to25").value;
				var supl25 = document.getElementById("s25").value;
				var uni25 = document.getElementById("tiem25").value;

				var comen25 = document.getElementById("comen25").value;


				//-------------------------26--------------------------
				var estanda26 = document.getElementById("estan26").value;
				var codi26 = document.getElementById("op26").value;
				var desc26 = document.getElementById("descrip26").value;
				var maquina26 = document.getElementById("mq26").value;
				var tObse26 = document.getElementById("to26").value;
				var supl26 = document.getElementById("s26").value;
				var uni26 = document.getElementById("tiem26").value;

				var comen26 = document.getElementById("comen26").value;



				//-------------------------27--------------------------
				var estanda27 = document.getElementById("estan27").value;
				var codi27 = document.getElementById("op27").value;
				var desc27 = document.getElementById("descrip27").value;
				var maquina27 = document.getElementById("mq27").value;
				var tObse27 = document.getElementById("to27").value;
				var supl27 = document.getElementById("s27").value;
				var uni27 = document.getElementById("tiem27").value;

				var comen27 = document.getElementById("comen27").value;


				//-------------------------28--------------------------
				var estanda28 = document.getElementById("estan28").value;
				var codi28 = document.getElementById("op28").value;
				var desc28 = document.getElementById("descrip28").value;
				var maquina28 = document.getElementById("mq28").value;
				var tObse28 = document.getElementById("to28").value;
				var supl28 = document.getElementById("s28").value;
				var uni28 = document.getElementById("tiem28").value;

				var comen28 = document.getElementById("comen28").value;


				//-------------------------29--------------------------
				var estanda29 = document.getElementById("estan29").value;
				var codi29 = document.getElementById("op29").value;
				var desc29 = document.getElementById("descrip29").value;
				var maquina29 = document.getElementById("mq29").value;
				var tObse29 = document.getElementById("to29").value;
				var supl29 = document.getElementById("s29").value;
				var uni29 = document.getElementById("tiem29").value;

				var comen29 = document.getElementById("comen29").value;



				//-------------------------30--------------------------
				var estanda30 = document.getElementById("estan30").value;
				var codi30 = document.getElementById("op30").value;
				var desc30 = document.getElementById("descrip30").value;
				var maquina30 = document.getElementById("mq30").value;
				var tObse30 = document.getElementById("to30").value;
				var supl30 = document.getElementById("s30").value;
				var uni30 = document.getElementById("tiem30").value;

				var comen30 = document.getElementById("comen30").value;


				//-------------------------31--------------------------
				var estanda31 = document.getElementById("estan31").value;
				var codi31 = document.getElementById("op31").value;
				var desc31 = document.getElementById("descrip31").value;
				var maquina31 = document.getElementById("mq31").value;
				var tObse31 = document.getElementById("to31").value;
				var supl31 = document.getElementById("s31").value;
				var uni31 = document.getElementById("tiem31").value;

				//-------------------------32--------------------------
				var estanda32 = document.getElementById("estan32").value;
				var codi32 = document.getElementById("op32").value;
				var desc32 = document.getElementById("descrip32").value;
				var maquina32 = document.getElementById("mq32").value;
				var tObse32 = document.getElementById("to32").value;
				var supl32 = document.getElementById("s32").value;
				var uni32 = document.getElementById("tiem32").value;

				//-------------------------33--------------------------
				var estanda33 = document.getElementById("estan33").value;
				var codi33 = document.getElementById("op33").value;
				var desc33 = document.getElementById("descrip33").value;
				var maquina33 = document.getElementById("mq33").value;
				var tObse33 = document.getElementById("to33").value;
				var supl33 = document.getElementById("s33").value;
				var uni33 = document.getElementById("tiem33").value;

				//-------------------------34--------------------------
				var estanda34 = document.getElementById("estan34").value;
				var codi34 = document.getElementById("op34").value;
				var desc34 = document.getElementById("descrip34").value;
				var maquina34 = document.getElementById("mq34").value;
				var tObse34 = document.getElementById("to34").value;
				var supl34 = document.getElementById("s34").value;
				var uni34 = document.getElementById("tiem34").value;

				//-------------------------35--------------------------
				var estanda35 = document.getElementById("estan35").value;
				var codi35 = document.getElementById("op35").value;
				var desc35 = document.getElementById("descrip35").value;
				var maquina35 = document.getElementById("mq35").value;
				var tObse35 = document.getElementById("to35").value;
				var supl35 = document.getElementById("s35").value;
				var uni35 = document.getElementById("tiem35").value;

				//-------------------------36--------------------------
				var estanda36 = document.getElementById("estan36").value;
				var codi36 = document.getElementById("op36").value;
				var desc36 = document.getElementById("descrip36").value;
				var maquina36 = document.getElementById("mq36").value;
				var tObse36 = document.getElementById("to36").value;
				var supl36 = document.getElementById("s36").value;
				var uni36 = document.getElementById("tiem36").value;

				//-------------------------37--------------------------
				var estanda37 = document.getElementById("estan37").value;
				var codi37 = document.getElementById("op37").value;
				var desc37 = document.getElementById("descrip37").value;
				var maquina37 = document.getElementById("mq37").value;
				var tObse37 = document.getElementById("to37").value;
				var supl37 = document.getElementById("s37").value;
				var uni37 = document.getElementById("tiem37").value;

				//-------------------------38--------------------------
				var estanda38 = document.getElementById("estan38").value;
				var codi38 = document.getElementById("op38").value;
				var desc38 = document.getElementById("descrip38").value;
				var maquina38 = document.getElementById("mq38").value;
				var tObse38 = document.getElementById("to38").value;
				var supl38 = document.getElementById("s38").value;
				var uni38 = document.getElementById("tiem38").value;

				//-------------------------39--------------------------
				var estanda39 = document.getElementById("estan39").value;
				var codi39 = document.getElementById("op39").value;
				var desc39 = document.getElementById("descrip39").value;
				var maquina39 = document.getElementById("mq39").value;
				var tObse39 = document.getElementById("to39").value;
				var supl39 = document.getElementById("s39").value;
				var uni39 = document.getElementById("tiem39").value;

				//-------------------------40--------------------------
				var estanda40 = document.getElementById("estan40").value;
				var codi40 = document.getElementById("op40").value;
				var desc40 = document.getElementById("descrip40").value;
				var maquina40 = document.getElementById("mq40").value;
				var tObse40 = document.getElementById("to40").value;
				var supl40 = document.getElementById("s40").value;
				var uni40 = document.getElementById("tiem40").value;

				//-------------------------41--------------------------
				var estanda41 = document.getElementById("estan41").value;
				var codi41 = document.getElementById("op41").value;
				var desc41 = document.getElementById("descrip41").value;
				var maquina41 = document.getElementById("mq41").value;
				var tObse41 = document.getElementById("to41").value;
				var supl41 = document.getElementById("s41").value;
				var uni41 = document.getElementById("tiem41").value;

				//-------------------------42--------------------------
				var estanda42 = document.getElementById("estan42").value;
				var codi42 = document.getElementById("op42").value;
				var desc42 = document.getElementById("descrip42").value;
				var maquina42 = document.getElementById("mq42").value;
				var tObse42 = document.getElementById("to42").value;
				var supl42 = document.getElementById("s42").value;
				var uni42 = document.getElementById("tiem42").value;

				//-------------------------43--------------------------
				var estanda43 = document.getElementById("estan43").value;
				var codi43 = document.getElementById("op43").value;
				var desc43 = document.getElementById("descrip43").value;
				var maquina43 = document.getElementById("mq43").value;
				var tObse43 = document.getElementById("to43").value;
				var supl43 = document.getElementById("s43").value;
				var uni43 = document.getElementById("tiem43").value;

				//-------------------------44--------------------------
				var estanda44 = document.getElementById("estan44").value;
				var codi44 = document.getElementById("op44").value;
				var desc44 = document.getElementById("descrip44").value;
				var maquina44 = document.getElementById("mq44").value;
				var tObse44 = document.getElementById("to44").value;
				var supl44 = document.getElementById("s44").value;
				var uni44 = document.getElementById("tiem44").value;

				//-------------------------45--------------------------
				var estanda45 = document.getElementById("estan45").value;
				var codi45 = document.getElementById("op45").value;
				var desc45 = document.getElementById("descrip45").value;
				var maquina45 = document.getElementById("mq45").value;
				var tObse45 = document.getElementById("to45").value;
				var supl45 = document.getElementById("s45").value;
				var uni45 = document.getElementById("tiem45").value;

				//-------------------------46--------------------------
				var estanda46 = document.getElementById("estan46").value;
				var codi46 = document.getElementById("op46").value;
				var desc46 = document.getElementById("descrip46").value;
				var maquina46 = document.getElementById("mq46").value;
				var tObse46 = document.getElementById("to46").value;
				var supl46 = document.getElementById("s46").value;
				var uni46 = document.getElementById("tiem46").value;

				//-------------------------47--------------------------
				var estanda47 = document.getElementById("estan47").value;
				var codi47 = document.getElementById("op47").value;
				var desc47 = document.getElementById("descrip47").value;
				var maquina47 = document.getElementById("mq47").value;
				var tObse47 = document.getElementById("to47").value;
				var supl47 = document.getElementById("s47").value;
				var uni47 = document.getElementById("tiem47").value;

				//-------------------------48--------------------------
				var estanda48 = document.getElementById("estan48").value;
				var codi48 = document.getElementById("op48").value;
				var desc48 = document.getElementById("descrip48").value;
				var maquina48 = document.getElementById("mq48").value;
				var tObse48 = document.getElementById("to48").value;
				var supl48 = document.getElementById("s48").value;
				var uni48 = document.getElementById("tiem48").value;

				//-------------------------49--------------------------
				var estanda49 = document.getElementById("estan49").value;
				var codi49 = document.getElementById("op49").value;
				var desc49 = document.getElementById("descrip49").value;
				var maquina49 = document.getElementById("mq49").value;
				var tObse49 = document.getElementById("to49").value;
				var supl49 = document.getElementById("s49").value;
				var uni49 = document.getElementById("tiem49").value;

				//-------------------------50--------------------------
				var estanda50 = document.getElementById("estan50").value;
				var codi50 = document.getElementById("op50").value;
				var desc50 = document.getElementById("descrip50").value;
				var maquina50 = document.getElementById("mq50").value;
				var tObse50 = document.getElementById("to50").value;
				var supl50 = document.getElementById("s50").value;
				var uni50 = document.getElementById("tiem50").value;








				var datotiempo3 = document.getElementById("estan3").value;
				var datoOpera3 = document.getElementById("op3").value;

				var datotiempo4 = document.getElementById("estan4").value;
				var datoOpera4 = document.getElementById("op4").value;

				var datotiempo5 = document.getElementById("estan5").value;
				var datoOpera5 = document.getElementById("op5").value;

				var datotiempo6 = document.getElementById("tiem6").value;
				var datoOpera6 = document.getElementById("op6").value;

				var datotiempo7 = document.getElementById("tiem7").value;
				var datoOpera7 = document.getElementById("op7").value;

				var datotiempo8 = document.getElementById("tiem8").value;
				var datoOpera8 = document.getElementById("op8").value;

				var datotiempo9 = document.getElementById("tiem9").value;
				var datoOpera9 = document.getElementById("op9").value;

				var datotiempo10 = document.getElementById("tiem10").value;
				var datoOpera10 = document.getElementById("op10").value;

				var datotiempo11 = document.getElementById("tiem11").value;
				var datoOpera11 = document.getElementById("op11").value;

				var datotiempo12 = document.getElementById("tiem12").value;
				var datoOpera12 = document.getElementById("op12").value;

				var datotiempo13 = document.getElementById("tiem13").value;
				var datoOpera13 = document.getElementById("op13").value;

				var datotiempo14 = document.getElementById("tiem14").value;
				var datoOpera14 = document.getElementById("op14").value;

				var datotiempo15 = document.getElementById("tiem15").value;
				var datoOpera15 = document.getElementById("op15").value;

				var datotiempo16 = document.getElementById("tiem16").value;
				var datoOpera16 = document.getElementById("op16").value;

				var datotiempo17 = document.getElementById("tiem17").value;
				var datoOpera17 = document.getElementById("op17").value;


				var datotiempo18 = document.getElementById("tiem18").value;
				var datoOpera18 = document.getElementById("op18").value;

				var datotiempo19 = document.getElementById("tiem19").value;
				var datoOpera19 = document.getElementById("op19").value;

				var datotiempo20 = document.getElementById("tiem20").value;
				var datoOpera20 = document.getElementById("op20").value;

				var datotiempo21 = document.getElementById("tiem21").value;
				var datoOpera21 = document.getElementById("op21").value;

				var datotiempo22 = document.getElementById("tiem22").value;
				var datoOpera22 = document.getElementById("op22").value;

				/*  var datotiempo23=document.getElementById("tiem23").value;
				  var datoOpera23=document.getElementById("op23").value;
			   
				var datotiempo24=document.getElementById("tiem24").value;
				  var datoOpera24=document.getElementById("op24").value;
			   
				  var datotiempo25=document.getElementById("tiem25").value;
				  var datoOpera25=document.getElementById("op25").value;
			   
			   
				var datotiempo26=document.getElementById("tiem26").value;
				  var datoOpera26=document.getElementById("op26").value;*/
				//TotalTiempoEs=datotiempo+datotiempo2;

				var textoTare = document.getElementById("txtTarea").value;

				//  var fech=document.getElementById("fecha").value;

				var tiempoTotal2 = document.getElementById("totaltiempo2").value;
				var aumentoTiempo = document.getElementById("tiempoIncremento").value;


				//var totalOperaciones = document.getElementById("ito").value;

				if (confirm("Seguro que desea REGISTRAR la Referencia?")) {


					if (document.getElementById("Referencia").value != "" && document.getElementById("cliente").value != ""
						&& document.getElementById("totaltiempo").value != "") {

						var datoRef2 = datoRef.split(/\s+/).join('');

						if(orden=''){
							alert("Por Favor activa la función de orden....")
							Swal.fire(
								'Por Favor activa la función de orden....',
								'',
								'error'
							)
						}


						//-------------------------------------------------------------------------------
						// uploadProfileImg();
						//subirCamiFren();

						db.collection("FichaJesus").add({

							Orden: orden,
							Codigo: codi1,
							//orden: orden1,
							Descripcion: desc1,
							Maquina: maquina1,
							//OrdenOperacion:OPE,
							Referencia: datoRef2,
							Observado: tObse1,
							Suplementario: supl1,
							Estandar: estanda1,
							Unidad: uni1,
							Fecha: enviarFecha,
							Texto: textoTare,
							Cliente: enviarCliente,
							Comentarios: comen1,
							TiempTotal2: tiempoTotal2,
							IncrementoTiemp: aumentoTiempo,
							//TotalOperaxCamisa: totalOperaciones,
							/*UnidadesP: totalUniP,
							UnidadesR: totalUniR,
							UnidadesRR2A: totalUniRR2A,
							UnidadesRR3A: totalUniRR3A,
							UnidadesFSPS: totalUniFSPS,
							UnidadesFCPS: totalUniFCPS,
							UnidadesB: totalUniB,
							UnidadesO: totalUniO,
							UnidadesMT: totalUniMT,
							UnidadesS2A: totalUniS2A,
							UnidadesS3A: totalUniS3A,
							UnidadesPE: totalUniPE,*/

							TiempoTotal: total,

							//----------------------------2----------------------------------
							Codigo2: codi2,
							Descripcion2: desc2,
							Maquina2: maquina2,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado2: tObse2,
							Suplementario2: supl2,
							Estandar2: estanda2,
							Unidad2: uni2,
							Comentarios2: comen2,

							//Cliente:enviarCliente

							//-------------------------------3------------------------------
							Codigo3: codi3,
							Descripcion3: desc3,
							Maquina3: maquina3,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado3: tObse3,
							Suplementario3: supl3,
							Estandar3: estanda3,
							Unidad3: uni3,
							Comentarios3: comen3,

							// Cliente:enviarCliente
							//------------------------------4-------------------------------
							Codigo4: codi4,
							Descripcion4: desc4,
							Maquina4: maquina4,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado4: tObse4,
							Suplementario4: supl4,
							Estandar4: estanda4,
							Unidad4: uni4,

							Comentarios4: comen4,

							//Cliente:enviarCliente

							//---------------------------------5-----------------------------
							Codigo5: codi5,
							Descripcion5: desc5,
							Maquina5: maquina5,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado5: tObse5,
							Suplementario5: supl5,
							Estandar5: estanda5,
							Unidad5: uni5,
							Comentarios5: comen5,

							//Cliente:enviarCliente
							//--------------------------------6------------------------------
							Codigo6: codi6,
							Descripcion6: desc6,
							Maquina6: maquina6,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado6: tObse6,
							Suplementario6: supl6,
							Estandar6: estanda6,
							Unidad6: uni6,
							Comentarios6: comen6,

							// Cliente:enviarCliente
							//----------------------------------7-----------------------------
							Codigo7: codi7,
							Descripcion7: desc7,
							Maquina7: maquina7,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado7: tObse7,
							Suplementario7: supl7,
							Estandar7: estanda7,
							Unidad7: uni7,
							Comentarios7: comen7,

							//Cliente:enviarCliente
							//----------------------------------8-----------------------------

							Codigo8: codi8,
							Descripcion8: desc8,
							Maquina8: maquina8,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado8: tObse8,
							Suplementario8: supl8,
							Estandar8: estanda8,
							Unidad8: uni8,
							Comentarios8: comen8,

							//Cliente:enviarCliente
							//--------------------------------9--------------------------------

							Codigo9: codi9,
							Descripcion9: desc9,
							Maquina9: maquina9,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado9: tObse9,
							Suplementario9: supl9,
							Estandar9: estanda9,
							Unidad9: uni9,
							Comentarios9: comen9,

							//Cliente:enviarCliente
							//-----------------------------------10------------------------------

							Codigo10: codi10,
							Descripcion10: desc10,
							Maquina10: maquina10,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado10: tObse10,
							Suplementario10: supl10,
							Estandar10: estanda10,
							Unidad10: uni10,
							Comentarios10: comen10,

							// Cliente:enviarCliente
							//----------------------------------11---------------------------------

							Codigo11: codi11,
							Descripcion11: desc11,
							Maquina11: maquina11,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado11: tObse11,
							Suplementario11: supl11,
							Estandar11: estanda11,
							Unidad11: uni11,

							Comentarios11: comen11,

							// Cliente:enviarCliente
							//-------------------------------------12-------------------------------

							Codigo12: codi12,
							Descripcion12: desc12,
							Maquina12: maquina12,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado12: tObse12,
							Suplementario12: supl12,
							Estandar12: estanda12,
							Unidad12: uni12,
							Comentarios12: comen12,

							// Cliente:enviarCliente
							//----------------------------------------13------------------------------

							// Cliente:enviarCliente,


							Codigo13: codi13,
							Descripcion13: desc13,
							Maquina13: maquina13,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado13: tObse13,
							Suplementario13: supl13,
							Estandar13: estanda13,
							Comentarios13: comen13,

							Unidad13: uni13,

							//--------------------------------------14----------------------------------
							//Cliente:enviarCliente,
							Codigo14: codi14,
							Descripcion14: desc14,
							Maquina14: maquina14,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado14: tObse14,
							Suplementario14: supl14,
							Estandar14: estanda14,
							Comentarios14: comen14,

							Unidad14: uni14,
							//TiempoTotal:total
							//----------------------------------------15----------------------------------
							//   Cliente:enviarCliente,
							Codigo15: codi15,
							Descripcion15: desc15,
							Maquina15: maquina15,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado15: tObse15,
							Suplementario15: supl15,
							Estandar15: estanda15,
							Comentarios15: comen15,

							Unidad15: uni15,
							//TiempoTotal:total

							//-------------------------------------------16-----------------------------------
							//  Cliente:enviarCliente,
							Codigo16: codi16,
							Descripcion16: desc16,
							Maquina16: maquina16,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado16: tObse16,
							Suplementario16: supl16,
							Estandar16: estanda16,
							Comentarios16: comen16,

							Unidad16: uni16,
							//-----------------------------------------------17---------------------------------
							//  Cliente:enviarCliente,
							Codigo17: codi17,
							Descripcion17: desc17,
							Maquina17: maquina17,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado17: tObse17,
							Suplementario17: supl17,
							Estandar17: estanda17,
							Comentarios17: comen17,

							Unidad17: uni17,

							//-------------------------------------------------18---------------------------------
							//Cliente:enviarCliente,
							Codigo18: codi18,
							Descripcion18: desc18,
							Maquina18: maquina18,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado18: tObse18,
							Suplementario18: supl18,
							Estandar18: estanda18,
							Comentarios18: comen18,

							Unidad18: uni18,
							//------------------------------------------------19------------------------------------
							//Cliente:enviarCliente,
							Codigo19: codi19,
							Descripcion19: desc19,
							Maquina19: maquina19,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado19: tObse19,
							Suplementario19: supl19,
							Estandar19: estanda19,
							Comentarios19: comen19,

							Unidad19: uni19,
							//--------------------------------------------------20------------------------------------
							// Cliente:enviarCliente,
							Codigo20: codi20,
							Descripcion20: desc20,
							Maquina20: maquina20,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado20: tObse20,
							Suplementario20: supl20,
							Estandar20: estanda20,
							Comentarios20: comen20,

							Unidad20: uni20,
							//TiempoTotal:total
							//-------------------------------------------------21----------------------------------------
							//Cliente:enviarCliente,
							Codigo21: codi21,
							Descripcion21: desc21,
							Maquina21: maquina21,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado21: tObse21,
							Suplementario21: supl21,
							Estandar21: estanda21,
							Comentarios21: comen21,

							Unidad21: uni21,
							//---------------------------------------------------22---------------------------------------
							//Cliente:enviarCliente,
							Codigo22: codi22,
							Descripcion22: desc22,
							Maquina22: maquina22,
							//OrdenOperacion:OPE,
							//  Referencia:datoRef,
							Observado22: tObse22,
							Suplementario22: supl22,
							Estandar22: estanda22,
							Comentarios22: comen22,

							Unidad22: uni22,
							//-------------------------------------------------23------------------------------------------
							//Cliente:enviarCliente,
							Codigo23: codi23,
							Descripcion23: desc23,
							Maquina23: maquina23,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado23: tObse23,
							Suplementario23: supl23,
							Estandar23: estanda23,
							Comentarios23: comen23,

							Unidad23: uni23,
							//----------------------------------------------------24----------------------------------------
							//  Cliente:enviarCliente,
							Codigo24: codi24,
							Descripcion24: desc24,
							Maquina24: maquina24,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado24: tObse24,
							Suplementario24: supl24,
							Estandar24: estanda24,
							Comentarios24: comen24,

							Unidad24: uni24,
							//--------------------------------------------------------25-------------------------------------
							// Cliente:enviarCliente,
							Codigo25: codi25,
							Descripcion25: desc25,
							Maquina25: maquina25,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado25: tObse25,
							Suplementario25: supl25,
							Estandar25: estanda25,
							Comentarios25: comen25,

							Unidad25: uni25,
							//----------------------------------------------------26-------------------------------------------
							//Cliente:enviarCliente,
							Codigo26: codi26,
							Descripcion26: desc26,
							Maquina26: maquina26,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado26: tObse26,
							Suplementario26: supl26,
							Estandar26: estanda26,
							Comentarios26: comen26,

							Unidad26: uni26,
							//---------------------------------------------------27----------------------------------------------
							// Cliente:enviarCliente,
							Codigo27: codi27,
							Descripcion27: desc27,
							Maquina27: maquina27,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado27: tObse27,
							Suplementario27: supl27,
							Estandar27: estanda27,
							Comentarios27: comen27,

							Unidad27: uni27,
							//----------------------------------------------------28--------------------------------------
							// Cliente:enviarCliente,
							Codigo28: codi28,
							Descripcion28: desc28,
							Maquina28: maquina28,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado28: tObse28,
							Suplementario28: supl28,
							Estandar28: estanda28,
							Comentarios28: comen28,

							Unidad28: uni28,
							//-------------------------------------------------29-------------------------------------------
							//Cliente:enviarCliente,
							Codigo29: codi29,
							Descripcion29: desc29,
							Maquina29: maquina29,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado29: tObse29,
							Suplementario29: supl29,
							Estandar29: estanda29,
							Comentarios29: comen29,

							Unidad29: uni29,
							//------------------------------------------------30------------------------------------------
							//  Cliente:enviarCliente,
							Codigo30: codi30,
							Descripcion30: desc30,
							Maquina30: maquina30,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado30: tObse30,
							Suplementario30: supl30,
							Estandar30: estanda30,
							Comentarios30: comen30,

							Unidad30: uni30,
							//-----------------------------------------------31--------------------------------------------
							// Cliente:enviarCliente,
							Codigo31: codi31,
							Descripcion31: desc31,
							Maquina31: maquina31,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado31: tObse31,
							Suplementario31: supl31,
							Estandar31: estanda31,
							Unidad31: uni31,

							//------------------------------------------------32-------------------------------------------
							//  Cliente:enviarCliente,
							Codigo32: codi32,
							Descripcion32: desc32,
							Maquina32: maquina32,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado32: tObse32,
							Suplementario32: supl32,
							Estandar32: estanda32,
							Unidad32: uni32,
							//-------------------------------------------------33---------------------------------------------
							//Cliente:enviarCliente,
							Codigo33: codi33,
							Descripcion33: desc33,
							Maquina33: maquina33,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado33: tObse33,
							Suplementario33: supl33,
							Estandar33: estanda33,
							Unidad33: uni33,
							//TiempoTotal:total

							//--------------------------------------------------34-------------------------------------------
							// Cliente:enviarCliente,
							Codigo34: codi34,
							Descripcion34: desc34,
							Maquina34: maquina34,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado34: tObse34,
							Suplementario34: supl34,
							Estandar34: estanda34,
							Unidad34: uni34,
							//-------------------------------------------------35------------------------------------------
							// Cliente:enviarCliente,
							Codigo35: codi35,
							Descripcion35: desc35,
							Maquina35: maquina35,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado35: tObse35,
							Suplementario35: supl35,
							Estandar35: estanda35,
							Unidad35: uni35,
							//TiempoTotal:total

							//---------------------------------------------36----------------------------------------------
							//  Cliente:enviarCliente,
							Codigo36: codi36,
							Descripcion36: desc36,
							Maquina36: maquina36,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado36: tObse36,
							Suplementario36: supl36,
							Estandar36: estanda36,
							Unidad36: uni36,
							//TiempoTotal:total

							//------------------------------------------------37-------------------------------------------
							// Cliente:enviarCliente,
							Codigo37: codi37,
							Descripcion37: desc37,
							Maquina37: maquina37,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado37: tObse37,
							Suplementario37: supl37,
							Estandar37: estanda37,
							Unidad37: uni37,
							//---------------------------------------------38-----------------------------------------------
							// Cliente:enviarCliente,
							Codigo38: codi38,
							Descripcion38: desc38,
							Maquina38: maquina38,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado38: tObse38,
							Suplementario38: supl38,
							Estandar38: estanda38,
							Unidad38: uni38,
							//-----------------------------------------------39-----------------------------------------------
							// Cliente:enviarCliente,
							Codigo39: codi39,
							Descripcion39: desc39,
							Maquina39: maquina39,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado39: tObse39,
							Suplementario39: supl39,
							Estandar39: estanda39,
							Unidad39: uni39,
							//TiempoTotal:total

							//------------------------------------------------40------------------------------------------------
							// Cliente:enviarCliente,
							Codigo40: codi40,
							Descripcion40: desc40,
							Maquina40: maquina40,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado40: tObse40,
							Suplementario40: supl40,
							Estandar40: estanda40,
							Unidad40: uni40,
							//---------------------------------------------41----------------------------------------------------
							//   Cliente:enviarCliente,
							Codigo41: codi41,
							Descripcion41: desc41,
							Maquina41: maquina41,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado41: tObse41,
							Suplementario41: supl41,
							Estandar41: estanda41,
							Unidad41: uni41,
							//TiempoTotal:total
							//--------------------------------------------42--------------------------------------------------
							//Cliente:enviarCliente,
							Codigo42: codi42,
							Descripcion42: desc42,
							Maquina42: maquina42,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado42: tObse42,
							Suplementario42: supl42,
							Estandar42: estanda42,
							Unidad42: uni42,
							//TiempoTotal:total

							//---------------------------------------------43--------------------------------------------------
							//  Cliente:enviarCliente,
							Codigo43: codi43,
							Descripcion43: desc43,
							Maquina43: maquina43,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado43: tObse43,
							Suplementario43: supl43,
							Estandar43: estanda43,
							Unidad43: uni43,
							//-----------------------------------------------44------------------------------------------------
							//  Cliente:enviarCliente,
							Codigo44: codi44,
							Descripcion44: desc44,
							Maquina44: maquina44,
							//OrdenOperacion:OPE,
							//  Referencia:datoRef,
							Observado44: tObse44,
							Suplementario44: supl44,
							Estandar44: estanda44,
							Unidad44: uni44,
							//------------------------------------------------45------------------------------------------------
							// Cliente:enviarCliente,
							Codigo45: codi45,
							Descripcion45: desc45,
							Maquina45: maquina45,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado45: tObse45,
							Suplementario45: supl45,
							Estandar45: estanda45,
							Unidad45: uni45,
							//------------------------------------------46--------------------------------------------------
							//  Cliente:enviarCliente,
							Codigo46: codi46,
							Descripcion46: desc46,
							Maquina46: maquina46,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado46: tObse46,
							Suplementario46: supl46,
							Estandar46: estanda46,
							Unidad46: uni46,
							//TiempoTotal:total

							//----------------------------------------------47-----------------------------------------------
							// Cliente:enviarCliente,
							Codigo47: codi47,
							Descripcion47: desc47,
							Maquina47: maquina47,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado47: tObse47,
							Suplementario47: supl47,
							Estandar47: estanda47,
							Unidad47: uni47,
							//TiempoTotal:total

							//-------------------------------------------------48-----------------------------------------------
							//Cliente:enviarCliente,
							Codigo48: codi48,
							Descripcion48: desc48,
							Maquina48: maquina48,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado48: tObse48,
							Suplementario48: supl48,
							Estandar48: estanda48,
							Unidad48: uni48,
							//TiempoTotal:total

							//--------------------------------------------------49---------------------------------------------
							//  Cliente:enviarCliente,
							Codigo49: codi49,
							Descripcion49: desc49,
							Maquina49: maquina49,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado49: tObse49,
							Suplementario49: supl49,
							Estandar49: estanda49,
							Unidad49: uni49,
							//TiempoTotal:total
							//--------------------------------------------50--------------------------------------------------
							// Cliente:enviarCliente,
							Codigo50: codi50,
							Descripcion50: desc50,
							Maquina50: maquina50,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado50: tObse50,
							Suplementario50: supl50,
							Estandar50: estanda50,
							Unidad50: uni50
							//------------------------------------------------------------------------------------------------


						})




						//aqui iba el confirm
						//  setTimeout(location.reload(), 5000) 
						//location.reload();
						setInterval("location.reload()", 3000);
						// document.getElementById("Referencia").value = "";
						// document.getElementById("cliente").value = "";
						alert("Referencia creada exitosamente!!!");
						Swal.fire(
							'Registro Exitoso!!!',
							'Referencia creada exitosamente!!!',
							'success'
						)





					}



					else {

						alert("Presione el boton calcular antes de continuar....");
						Swal.fire(
							'Presione el boton calcular antes de continuar....',
							'',
							'error'
						)
						

					}
				} else { }





				// console.log(datotiempo+datoOpera+datotiempo2+datoOpera2);




			}
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});





	//--------------------------
	/*db.collection("Drag").add({
		Orden: orden,
		//country: "Japan"
	})
		.then((docRef) => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});*/

}

function Leer() {

	//-------------------------------------------------------------------
	var leerFecha = document.getElementById("fecha").value;
	var consultaref = document.getElementById("Referencia").value;
	var consultaClient = document.getElementById("cliente").value;
	// var consulOP=document.getElementById("OrdenProduccion").value;
	var ur = "  ";
	var ur2 = "";
	grande = document.getElementById("imagenFrente");
	grandeTrase = document.getElementById("imagenTrasera");



	if (document.getElementById("Referencia").value == "" && document.getElementById("cliente").value == "") {

		alert("Llene los campos Referencia y Cliente");
		Swal.fire(
			'Llene los campos Referencia y Cliente',
			'',
			'error'
		)
	}
	if (document.getElementById("Referencia").value == "") {
		alert("Indique la Referencia a Consultar");
		Swal.fire(
			'Indique la Referencia a Consultare',
			'',
			'error'
		)
	}
	if (document.getElementById("cliente").value == "") {

		alert("Indique el Cliente asociado a la Referencia");
		Swal.fire(
			'Indique el Cliente asociado a la Referencia',
			'',
			'error'
		)
	}


	else {


		db.collection("FichaJesus").where("Referencia", "==", consultaref).where("Cliente", "==", consultaClient)//.where("capital", "==", true)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, " => ", doc.data());
					Operacion = `${doc.data().Orden}`;
					var cod1 = `${doc.data().Codigo}`;
					var desc1 = `${doc.data().Descripcion}`;
					var mq1 = `${doc.data().Maquina}`;
					var ob1 = `${doc.data().Observado}`;
					var su1 = `${doc.data().Suplementario}`;
					var es1 = `${doc.data().Estandar}`;
					var uni1 = `${doc.data().Unidad}`;
					var co1 = `${doc.data().Comentarios}`;
					var fecha = `${doc.data().Fecha}`;
					var txt = `${doc.data().Texto}`;

					var TiempTotal2 = `${doc.data().TiempTotal2}`;
					var IncrementoTiemp = `${doc.data().IncrementoTiemp}`;

					//---------------------------eliminar ficha1--------------------
					elimi1 = function () {
						db.collection("FichaJesus").doc(doc.id).delete().then(function () {
							//  alert("Ha eliminado la Referencia...");
							console.log("Document successfully deleted!");
							setInterval("location.reload()", 3000);
							// document.getElementById("Referencia").value = "";
							// document.getElementById("cliente").value = "";
							Swal.fire(
								'Registro Eliminado!!!',
								'',
								'success'
							)

						}).catch(function (error) {
							// alert("No se ha podido eliminar el documento");
							console.error("Error removing document: ", error);
						});

					}


					//-------------------------actualizar-----------------------------
					edit1 = function () {
						//-------------------------
						//validacionRegis();

						var enviarFecha = document.getElementById("fecha").value;
						var enviarCliente = document.getElementById("cliente").value;


						var datoRef = document.getElementById("Referencia").value;
						//var OPE=document.getElementById("OrdenProduccion").value;
						var total = document.getElementById("totaltiempo").value;
						existe = '';

						//---------------------1-------------------------------
						var estanda1 = document.getElementById("estan1").value;
						var codi1 = document.getElementById("op1").value;
						var desc1 = document.getElementById("descrip1").value;
						var maquina1 = document.getElementById("mq1").value;
						var tObse1 = document.getElementById("to1").value;
						var supl1 = document.getElementById("s1").value;
						var uni1 = document.getElementById("tiem1").value;

						var comen1 = document.getElementById("comen1").value;

						/*var totalUniP = document.getElementById("tuPlana").value;
						var totalUniR = document.getElementById("inUniR").value;
						var totalUniRR2A = document.getElementById("tuRR2A").value;
						var totalUniRR3A = document.getElementById("tuRR3A").value;
						var totalUniFSPS = document.getElementById("tuFSPS").value;
						var totalUniFCPS = document.getElementById("tuFCPS").value;
						var totalUniB = document.getElementById("tuB").value;
						var totalUniO = document.getElementById("tuO").value;
						var totalUniMT = document.getElementById("tuMT").value;
						var totalUniS2A = document.getElementById("tuS2A").value;
						var totalUniS3A = document.getElementById("tuS3A").value;
						var totalUniPE = document.getElementById("tuPE").value;*/


						// var guardarPLANA=document.getElementById("guardarPorcenPlana").value;

						//------------------------2-----------------------------
						var estanda2 = document.getElementById("estan2").value;
						var codi2 = document.getElementById("op2").value;
						var desc2 = document.getElementById("descrip2").value;
						var maquina2 = document.getElementById("mq2").value;
						var tObse2 = document.getElementById("to2").value;
						var supl2 = document.getElementById("s2").value;
						var uni2 = document.getElementById("tiem2").value;

						var comen2 = document.getElementById("comen2").value;





						//-------------------------3--------------------------
						var estanda3 = document.getElementById("estan3").value;
						var codi3 = document.getElementById("op3").value;
						var desc3 = document.getElementById("descrip3").value;
						var maquina3 = document.getElementById("mq3").value;
						var tObse3 = document.getElementById("to3").value;
						var supl3 = document.getElementById("s3").value;
						var uni3 = document.getElementById("tiem3").value;
						var comen3 = document.getElementById("comen3").value;

						//-------------------------4--------------------------
						var estanda4 = document.getElementById("estan4").value;
						var codi4 = document.getElementById("op4").value;
						var desc4 = document.getElementById("descrip4").value;
						var maquina4 = document.getElementById("mq4").value;
						var tObse4 = document.getElementById("to4").value;
						var supl4 = document.getElementById("s4").value;
						var uni4 = document.getElementById("tiem4").value;

						var comen4 = document.getElementById("comen4").value;


						//-------------------------5--------------------------
						var estanda5 = document.getElementById("estan5").value;
						var codi5 = document.getElementById("op5").value;
						var desc5 = document.getElementById("descrip5").value;
						var maquina5 = document.getElementById("mq5").value;
						var tObse5 = document.getElementById("to5").value;
						var supl5 = document.getElementById("s5").value;
						var uni5 = document.getElementById("tiem5").value;
						var comen5 = document.getElementById("comen5").value;


						//-------------------------6--------------------------
						var estanda6 = document.getElementById("estan6").value;
						var codi6 = document.getElementById("op6").value;
						var desc6 = document.getElementById("descrip6").value;
						var maquina6 = document.getElementById("mq6").value;
						var tObse6 = document.getElementById("to6").value;
						var supl6 = document.getElementById("s6").value;
						var uni6 = document.getElementById("tiem6").value;

						var comen6 = document.getElementById("comen6").value;


						//-------------------------7--------------------------
						var estanda7 = document.getElementById("estan7").value;
						var codi7 = document.getElementById("op7").value;
						var desc7 = document.getElementById("descrip7").value;
						var maquina7 = document.getElementById("mq7").value;
						var tObse7 = document.getElementById("to7").value;
						var supl7 = document.getElementById("s7").value;
						var uni7 = document.getElementById("tiem7").value;

						var comen7 = document.getElementById("comen7").value;


						//-------------------------8--------------------------
						var estanda8 = document.getElementById("estan8").value;
						var codi8 = document.getElementById("op8").value;
						var desc8 = document.getElementById("descrip8").value;
						var maquina8 = document.getElementById("mq8").value;
						var tObse8 = document.getElementById("to8").value;
						var supl8 = document.getElementById("s8").value;
						var uni8 = document.getElementById("tiem8").value;

						var comen8 = document.getElementById("comen8").value;


						//-------------------------9--------------------------
						var estanda9 = document.getElementById("estan9").value;
						var codi9 = document.getElementById("op9").value;
						var desc9 = document.getElementById("descrip9").value;
						var maquina9 = document.getElementById("mq9").value;
						var tObse9 = document.getElementById("to9").value;
						var supl9 = document.getElementById("s9").value;
						var uni9 = document.getElementById("tiem9").value;

						var comen9 = document.getElementById("comen9").value;


						//-------------------------10--------------------------
						var estanda10 = document.getElementById("estan10").value;
						var codi10 = document.getElementById("op10").value;
						var desc10 = document.getElementById("descrip10").value;
						var maquina10 = document.getElementById("mq10").value;
						var tObse10 = document.getElementById("to10").value;
						var supl10 = document.getElementById("s10").value;
						var uni10 = document.getElementById("tiem10").value;

						var comen10 = document.getElementById("comen10").value;


						//-------------------------11--------------------------
						var estanda11 = document.getElementById("estan11").value;
						var codi11 = document.getElementById("op11").value;
						var desc11 = document.getElementById("descrip11").value;
						var maquina11 = document.getElementById("mq11").value;
						var tObse11 = document.getElementById("to11").value;
						var supl11 = document.getElementById("s11").value;
						var uni11 = document.getElementById("tiem11").value;

						var comen11 = document.getElementById("comen11").value;


						//-------------------------12--------------------------
						var estanda12 = document.getElementById("estan12").value;
						var codi12 = document.getElementById("op12").value;
						var desc12 = document.getElementById("descrip12").value;
						var maquina12 = document.getElementById("mq12").value;
						var tObse12 = document.getElementById("to12").value;
						var supl12 = document.getElementById("s12").value;
						var uni12 = document.getElementById("tiem12").value;

						var comen12 = document.getElementById("comen12").value;


						//-------------------------13--------------------------
						var estanda13 = document.getElementById("estan13").value;
						var codi13 = document.getElementById("op13").value;
						var desc13 = document.getElementById("descrip13").value;
						var maquina13 = document.getElementById("mq13").value;
						var tObse13 = document.getElementById("to13").value;
						var supl13 = document.getElementById("s13").value;
						var uni13 = document.getElementById("tiem13").value;

						var comen13 = document.getElementById("comen13").value;


						//-------------------------14--------------------------
						var estanda14 = document.getElementById("estan14").value;
						var codi14 = document.getElementById("op14").value;
						var desc14 = document.getElementById("descrip14").value;
						var maquina14 = document.getElementById("mq14").value;
						var tObse14 = document.getElementById("to14").value;
						var supl14 = document.getElementById("s14").value;
						var uni14 = document.getElementById("tiem14").value;

						var comen14 = document.getElementById("comen14").value;


						//-------------------------15--------------------------
						var estanda15 = document.getElementById("estan15").value;
						var codi15 = document.getElementById("op15").value;
						var desc15 = document.getElementById("descrip15").value;
						var maquina15 = document.getElementById("mq15").value;
						var tObse15 = document.getElementById("to15").value;
						var supl15 = document.getElementById("s15").value;
						var uni15 = document.getElementById("tiem15").value;

						var comen15 = document.getElementById("comen15").value;


						//-------------------------16--------------------------
						var estanda16 = document.getElementById("estan16").value;
						var codi16 = document.getElementById("op16").value;
						var desc16 = document.getElementById("descrip16").value;
						var maquina16 = document.getElementById("mq16").value;
						var tObse16 = document.getElementById("to16").value;
						var supl16 = document.getElementById("s16").value;
						var uni16 = document.getElementById("tiem16").value;

						var comen16 = document.getElementById("comen16").value;


						//-------------------------17--------------------------
						var estanda17 = document.getElementById("estan17").value;
						var codi17 = document.getElementById("op17").value;
						var desc17 = document.getElementById("descrip17").value;
						var maquina17 = document.getElementById("mq17").value;
						var tObse17 = document.getElementById("to17").value;
						var supl17 = document.getElementById("s17").value;
						var uni17 = document.getElementById("tiem17").value;

						var comen17 = document.getElementById("comen17").value;


						//-------------------------18--------------------------
						var estanda18 = document.getElementById("estan18").value;
						var codi18 = document.getElementById("op18").value;
						var desc18 = document.getElementById("descrip18").value;
						var maquina18 = document.getElementById("mq18").value;
						var tObse18 = document.getElementById("to18").value;
						var supl18 = document.getElementById("s18").value;
						var uni18 = document.getElementById("tiem18").value;

						var comen18 = document.getElementById("comen18").value;


						//-------------------------19--------------------------
						var estanda19 = document.getElementById("estan19").value;
						var codi19 = document.getElementById("op19").value;
						var desc19 = document.getElementById("descrip19").value;
						var maquina19 = document.getElementById("mq19").value;
						var tObse19 = document.getElementById("to19").value;
						var supl19 = document.getElementById("s19").value;
						var uni19 = document.getElementById("tiem19").value;

						var comen19 = document.getElementById("comen19").value;


						//-------------------------20--------------------------
						var estanda20 = document.getElementById("estan20").value;
						var codi20 = document.getElementById("op20").value;
						var desc20 = document.getElementById("descrip20").value;
						var maquina20 = document.getElementById("mq20").value;
						var tObse20 = document.getElementById("to20").value;
						var supl20 = document.getElementById("s20").value;
						var uni20 = document.getElementById("tiem20").value;

						var comen20 = document.getElementById("comen20").value;


						//-------------------------21--------------------------
						var estanda21 = document.getElementById("estan21").value;
						var codi21 = document.getElementById("op21").value;
						var desc21 = document.getElementById("descrip21").value;
						var maquina21 = document.getElementById("mq21").value;
						var tObse21 = document.getElementById("to21").value;
						var supl21 = document.getElementById("s21").value;
						var uni21 = document.getElementById("tiem21").value;

						var comen21 = document.getElementById("comen21").value;



						//-------------------------22--------------------------
						var estanda22 = document.getElementById("estan22").value;
						var codi22 = document.getElementById("op22").value;
						var desc22 = document.getElementById("descrip22").value;
						var maquina22 = document.getElementById("mq22").value;
						var tObse22 = document.getElementById("to22").value;
						var supl22 = document.getElementById("s22").value;
						var uni22 = document.getElementById("tiem22").value;

						var comen22 = document.getElementById("comen22").value;


						//-------------------------23--------------------------
						var estanda23 = document.getElementById("estan23").value;
						var codi23 = document.getElementById("op23").value;
						var desc23 = document.getElementById("descrip23").value;
						var maquina23 = document.getElementById("mq23").value;
						var tObse23 = document.getElementById("to23").value;
						var supl23 = document.getElementById("s23").value;
						var uni23 = document.getElementById("tiem23").value;

						var comen23 = document.getElementById("comen23").value;


						//-------------------------24--------------------------
						var estanda24 = document.getElementById("estan24").value;
						var codi24 = document.getElementById("op24").value;
						var desc24 = document.getElementById("descrip24").value;
						var maquina24 = document.getElementById("mq24").value;
						var tObse24 = document.getElementById("to24").value;
						var supl24 = document.getElementById("s24").value;
						var uni24 = document.getElementById("tiem24").value;

						var comen24 = document.getElementById("comen24").value;


						//-------------------------25--------------------------
						var estanda25 = document.getElementById("estan25").value;
						var codi25 = document.getElementById("op25").value;
						var desc25 = document.getElementById("descrip25").value;
						var maquina25 = document.getElementById("mq25").value;
						var tObse25 = document.getElementById("to25").value;
						var supl25 = document.getElementById("s25").value;
						var uni25 = document.getElementById("tiem25").value;

						var comen25 = document.getElementById("comen25").value;


						//-------------------------26--------------------------
						var estanda26 = document.getElementById("estan26").value;
						var codi26 = document.getElementById("op26").value;
						var desc26 = document.getElementById("descrip26").value;
						var maquina26 = document.getElementById("mq26").value;
						var tObse26 = document.getElementById("to26").value;
						var supl26 = document.getElementById("s26").value;
						var uni26 = document.getElementById("tiem26").value;

						var comen26 = document.getElementById("comen26").value;



						//-------------------------27--------------------------
						var estanda27 = document.getElementById("estan27").value;
						var codi27 = document.getElementById("op27").value;
						var desc27 = document.getElementById("descrip27").value;
						var maquina27 = document.getElementById("mq27").value;
						var tObse27 = document.getElementById("to27").value;
						var supl27 = document.getElementById("s27").value;
						var uni27 = document.getElementById("tiem27").value;

						var comen27 = document.getElementById("comen27").value;


						//-------------------------28--------------------------
						var estanda28 = document.getElementById("estan28").value;
						var codi28 = document.getElementById("op28").value;
						var desc28 = document.getElementById("descrip28").value;
						var maquina28 = document.getElementById("mq28").value;
						var tObse28 = document.getElementById("to28").value;
						var supl28 = document.getElementById("s28").value;
						var uni28 = document.getElementById("tiem28").value;

						var comen28 = document.getElementById("comen28").value;


						//-------------------------29--------------------------
						var estanda29 = document.getElementById("estan29").value;
						var codi29 = document.getElementById("op29").value;
						var desc29 = document.getElementById("descrip29").value;
						var maquina29 = document.getElementById("mq29").value;
						var tObse29 = document.getElementById("to29").value;
						var supl29 = document.getElementById("s29").value;
						var uni29 = document.getElementById("tiem29").value;

						var comen29 = document.getElementById("comen29").value;



						//-------------------------30--------------------------
						var estanda30 = document.getElementById("estan30").value;
						var codi30 = document.getElementById("op30").value;
						var desc30 = document.getElementById("descrip30").value;
						var maquina30 = document.getElementById("mq30").value;
						var tObse30 = document.getElementById("to30").value;
						var supl30 = document.getElementById("s30").value;
						var uni30 = document.getElementById("tiem30").value;

						var comen30 = document.getElementById("comen30").value;


						//-------------------------31--------------------------
						var estanda31 = document.getElementById("estan31").value;
						var codi31 = document.getElementById("op31").value;
						var desc31 = document.getElementById("descrip31").value;
						var maquina31 = document.getElementById("mq31").value;
						var tObse31 = document.getElementById("to31").value;
						var supl31 = document.getElementById("s31").value;
						var uni31 = document.getElementById("tiem31").value;

						//-------------------------32--------------------------
						var estanda32 = document.getElementById("estan32").value;
						var codi32 = document.getElementById("op32").value;
						var desc32 = document.getElementById("descrip32").value;
						var maquina32 = document.getElementById("mq32").value;
						var tObse32 = document.getElementById("to32").value;
						var supl32 = document.getElementById("s32").value;
						var uni32 = document.getElementById("tiem32").value;

						//-------------------------33--------------------------
						var estanda33 = document.getElementById("estan33").value;
						var codi33 = document.getElementById("op33").value;
						var desc33 = document.getElementById("descrip33").value;
						var maquina33 = document.getElementById("mq33").value;
						var tObse33 = document.getElementById("to33").value;
						var supl33 = document.getElementById("s33").value;
						var uni33 = document.getElementById("tiem33").value;

						//-------------------------34--------------------------
						var estanda34 = document.getElementById("estan34").value;
						var codi34 = document.getElementById("op34").value;
						var desc34 = document.getElementById("descrip34").value;
						var maquina34 = document.getElementById("mq34").value;
						var tObse34 = document.getElementById("to34").value;
						var supl34 = document.getElementById("s34").value;
						var uni34 = document.getElementById("tiem34").value;

						//-------------------------35--------------------------
						var estanda35 = document.getElementById("estan35").value;
						var codi35 = document.getElementById("op35").value;
						var desc35 = document.getElementById("descrip35").value;
						var maquina35 = document.getElementById("mq35").value;
						var tObse35 = document.getElementById("to35").value;
						var supl35 = document.getElementById("s35").value;
						var uni35 = document.getElementById("tiem35").value;

						//-------------------------36--------------------------
						var estanda36 = document.getElementById("estan36").value;
						var codi36 = document.getElementById("op36").value;
						var desc36 = document.getElementById("descrip36").value;
						var maquina36 = document.getElementById("mq36").value;
						var tObse36 = document.getElementById("to36").value;
						var supl36 = document.getElementById("s36").value;
						var uni36 = document.getElementById("tiem36").value;

						//-------------------------37--------------------------
						var estanda37 = document.getElementById("estan37").value;
						var codi37 = document.getElementById("op37").value;
						var desc37 = document.getElementById("descrip37").value;
						var maquina37 = document.getElementById("mq37").value;
						var tObse37 = document.getElementById("to37").value;
						var supl37 = document.getElementById("s37").value;
						var uni37 = document.getElementById("tiem37").value;

						//-------------------------38--------------------------
						var estanda38 = document.getElementById("estan38").value;
						var codi38 = document.getElementById("op38").value;
						var desc38 = document.getElementById("descrip38").value;
						var maquina38 = document.getElementById("mq38").value;
						var tObse38 = document.getElementById("to38").value;
						var supl38 = document.getElementById("s38").value;
						var uni38 = document.getElementById("tiem38").value;

						//-------------------------39--------------------------
						var estanda39 = document.getElementById("estan39").value;
						var codi39 = document.getElementById("op39").value;
						var desc39 = document.getElementById("descrip39").value;
						var maquina39 = document.getElementById("mq39").value;
						var tObse39 = document.getElementById("to39").value;
						var supl39 = document.getElementById("s39").value;
						var uni39 = document.getElementById("tiem39").value;

						//-------------------------40--------------------------
						var estanda40 = document.getElementById("estan40").value;
						var codi40 = document.getElementById("op40").value;
						var desc40 = document.getElementById("descrip40").value;
						var maquina40 = document.getElementById("mq40").value;
						var tObse40 = document.getElementById("to40").value;
						var supl40 = document.getElementById("s40").value;
						var uni40 = document.getElementById("tiem40").value;

						//-------------------------41--------------------------
						var estanda41 = document.getElementById("estan41").value;
						var codi41 = document.getElementById("op41").value;
						var desc41 = document.getElementById("descrip41").value;
						var maquina41 = document.getElementById("mq41").value;
						var tObse41 = document.getElementById("to41").value;
						var supl41 = document.getElementById("s41").value;
						var uni41 = document.getElementById("tiem41").value;

						//-------------------------42--------------------------
						var estanda42 = document.getElementById("estan42").value;
						var codi42 = document.getElementById("op42").value;
						var desc42 = document.getElementById("descrip42").value;
						var maquina42 = document.getElementById("mq42").value;
						var tObse42 = document.getElementById("to42").value;
						var supl42 = document.getElementById("s42").value;
						var uni42 = document.getElementById("tiem42").value;

						//-------------------------43--------------------------
						var estanda43 = document.getElementById("estan43").value;
						var codi43 = document.getElementById("op43").value;
						var desc43 = document.getElementById("descrip43").value;
						var maquina43 = document.getElementById("mq43").value;
						var tObse43 = document.getElementById("to43").value;
						var supl43 = document.getElementById("s43").value;
						var uni43 = document.getElementById("tiem43").value;

						//-------------------------44--------------------------
						var estanda44 = document.getElementById("estan44").value;
						var codi44 = document.getElementById("op44").value;
						var desc44 = document.getElementById("descrip44").value;
						var maquina44 = document.getElementById("mq44").value;
						var tObse44 = document.getElementById("to44").value;
						var supl44 = document.getElementById("s44").value;
						var uni44 = document.getElementById("tiem44").value;

						//-------------------------45--------------------------
						var estanda45 = document.getElementById("estan45").value;
						var codi45 = document.getElementById("op45").value;
						var desc45 = document.getElementById("descrip45").value;
						var maquina45 = document.getElementById("mq45").value;
						var tObse45 = document.getElementById("to45").value;
						var supl45 = document.getElementById("s45").value;
						var uni45 = document.getElementById("tiem45").value;

						//-------------------------46--------------------------
						var estanda46 = document.getElementById("estan46").value;
						var codi46 = document.getElementById("op46").value;
						var desc46 = document.getElementById("descrip46").value;
						var maquina46 = document.getElementById("mq46").value;
						var tObse46 = document.getElementById("to46").value;
						var supl46 = document.getElementById("s46").value;
						var uni46 = document.getElementById("tiem46").value;

						//-------------------------47--------------------------
						var estanda47 = document.getElementById("estan47").value;
						var codi47 = document.getElementById("op47").value;
						var desc47 = document.getElementById("descrip47").value;
						var maquina47 = document.getElementById("mq47").value;
						var tObse47 = document.getElementById("to47").value;
						var supl47 = document.getElementById("s47").value;
						var uni47 = document.getElementById("tiem47").value;

						//-------------------------48--------------------------
						var estanda48 = document.getElementById("estan48").value;
						var codi48 = document.getElementById("op48").value;
						var desc48 = document.getElementById("descrip48").value;
						var maquina48 = document.getElementById("mq48").value;
						var tObse48 = document.getElementById("to48").value;
						var supl48 = document.getElementById("s48").value;
						var uni48 = document.getElementById("tiem48").value;

						//-------------------------49--------------------------
						var estanda49 = document.getElementById("estan49").value;
						var codi49 = document.getElementById("op49").value;
						var desc49 = document.getElementById("descrip49").value;
						var maquina49 = document.getElementById("mq49").value;
						var tObse49 = document.getElementById("to49").value;
						var supl49 = document.getElementById("s49").value;
						var uni49 = document.getElementById("tiem49").value;

						//-------------------------50--------------------------
						var estanda50 = document.getElementById("estan50").value;
						var codi50 = document.getElementById("op50").value;
						var desc50 = document.getElementById("descrip50").value;
						var maquina50 = document.getElementById("mq50").value;
						var tObse50 = document.getElementById("to50").value;
						var supl50 = document.getElementById("s50").value;
						var uni50 = document.getElementById("tiem50").value;








						var datotiempo3 = document.getElementById("estan3").value;
						var datoOpera3 = document.getElementById("op3").value;

						var datotiempo4 = document.getElementById("estan4").value;
						var datoOpera4 = document.getElementById("op4").value;

						var datotiempo5 = document.getElementById("estan5").value;
						var datoOpera5 = document.getElementById("op5").value;

						var datotiempo6 = document.getElementById("tiem6").value;
						var datoOpera6 = document.getElementById("op6").value;

						var datotiempo7 = document.getElementById("tiem7").value;
						var datoOpera7 = document.getElementById("op7").value;

						var datotiempo8 = document.getElementById("tiem8").value;
						var datoOpera8 = document.getElementById("op8").value;

						var datotiempo9 = document.getElementById("tiem9").value;
						var datoOpera9 = document.getElementById("op9").value;

						var datotiempo10 = document.getElementById("tiem10").value;
						var datoOpera10 = document.getElementById("op10").value;

						var datotiempo11 = document.getElementById("tiem11").value;
						var datoOpera11 = document.getElementById("op11").value;

						var datotiempo12 = document.getElementById("tiem12").value;
						var datoOpera12 = document.getElementById("op12").value;

						var datotiempo13 = document.getElementById("tiem13").value;
						var datoOpera13 = document.getElementById("op13").value;

						var datotiempo14 = document.getElementById("tiem14").value;
						var datoOpera14 = document.getElementById("op14").value;

						var datotiempo15 = document.getElementById("tiem15").value;
						var datoOpera15 = document.getElementById("op15").value;

						var datotiempo16 = document.getElementById("tiem16").value;
						var datoOpera16 = document.getElementById("op16").value;

						var datotiempo17 = document.getElementById("tiem17").value;
						var datoOpera17 = document.getElementById("op17").value;


						var datotiempo18 = document.getElementById("tiem18").value;
						var datoOpera18 = document.getElementById("op18").value;

						var datotiempo19 = document.getElementById("tiem19").value;
						var datoOpera19 = document.getElementById("op19").value;

						var datotiempo20 = document.getElementById("tiem20").value;
						var datoOpera20 = document.getElementById("op20").value;

						var datotiempo21 = document.getElementById("tiem21").value;
						var datoOpera21 = document.getElementById("op21").value;

						var datotiempo22 = document.getElementById("tiem22").value;
						var datoOpera22 = document.getElementById("op22").value;

						/*  var datotiempo23=document.getElementById("tiem23").value;
						  var datoOpera23=document.getElementById("op23").value;
					   
						var datotiempo24=document.getElementById("tiem24").value;
						  var datoOpera24=document.getElementById("op24").value;
					   
						  var datotiempo25=document.getElementById("tiem25").value;
						  var datoOpera25=document.getElementById("op25").value;
					   
					   
						var datotiempo26=document.getElementById("tiem26").value;
						  var datoOpera26=document.getElementById("op26").value;*/
						//TotalTiempoEs=datotiempo+datotiempo2;

						var textoTare = document.getElementById("txtTarea").value;

						//  var fech=document.getElementById("fecha").value;

						var tiempoTotal2 = document.getElementById("totaltiempo2").value;
						var aumentoTiempo = document.getElementById("tiempoIncremento").value;

						var datoRef2 = datoRef.split(/\s+/).join('');
						if(orden=''){
							alert("Debes activar la función Orden para poder guardar la actualización...");
							Swal.fire(
								'Debes activar la función Orden para poder guardar la actualización...',
								'',
								'error'
							)
						} 

						//var totalOperaciones = document.getElementById("ito").value;

						var washingtonRef = db.collection("FichaJesus").doc(doc.id);

						// Set the "capital" field of the city 'DC'
						return washingtonRef.update({
							Orden: orden,
							Codigo: codi1,
							//orden: orden1,
							Descripcion: desc1,
							Maquina: maquina1,
							//OrdenOperacion:OPE,
							Referencia: datoRef2,
							Observado: tObse1,
							Suplementario: supl1,
							Estandar: estanda1,
							Unidad: uni1,
							Fecha: enviarFecha,
							Texto: textoTare,
							Cliente: enviarCliente,
							Comentarios: comen1,
							TiempTotal2: tiempoTotal2,
							IncrementoTiemp: aumentoTiempo,
							//TotalOperaxCamisa: totalOperaciones,
							/*UnidadesP: totalUniP,
							UnidadesR: totalUniR,
							UnidadesRR2A: totalUniRR2A,
							UnidadesRR3A: totalUniRR3A,
							UnidadesFSPS: totalUniFSPS,
							UnidadesFCPS: totalUniFCPS,
							UnidadesB: totalUniB,
							UnidadesO: totalUniO,
							UnidadesMT: totalUniMT,
							UnidadesS2A: totalUniS2A,
							UnidadesS3A: totalUniS3A,
							UnidadesPE: totalUniPE,*/

							TiempoTotal: total,

							//----------------------------2----------------------------------
							Codigo2: codi2,
							Descripcion2: desc2,
							Maquina2: maquina2,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado2: tObse2,
							Suplementario2: supl2,
							Estandar2: estanda2,
							Unidad2: uni2,
							Comentarios2: comen2,

							//Cliente:enviarCliente

							//-------------------------------3------------------------------
							Codigo3: codi3,
							Descripcion3: desc3,
							Maquina3: maquina3,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado3: tObse3,
							Suplementario3: supl3,
							Estandar3: estanda3,
							Unidad3: uni3,
							Comentarios3: comen3,

							// Cliente:enviarCliente
							//------------------------------4-------------------------------
							Codigo4: codi4,
							Descripcion4: desc4,
							Maquina4: maquina4,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado4: tObse4,
							Suplementario4: supl4,
							Estandar4: estanda4,
							Unidad4: uni4,

							Comentarios4: comen4,

							//Cliente:enviarCliente

							//---------------------------------5-----------------------------
							Codigo5: codi5,
							Descripcion5: desc5,
							Maquina5: maquina5,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado5: tObse5,
							Suplementario5: supl5,
							Estandar5: estanda5,
							Unidad5: uni5,
							Comentarios5: comen5,

							//Cliente:enviarCliente
							//--------------------------------6------------------------------
							Codigo6: codi6,
							Descripcion6: desc6,
							Maquina6: maquina6,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado6: tObse6,
							Suplementario6: supl6,
							Estandar6: estanda6,
							Unidad6: uni6,
							Comentarios6: comen6,

							// Cliente:enviarCliente
							//----------------------------------7-----------------------------
							Codigo7: codi7,
							Descripcion7: desc7,
							Maquina7: maquina7,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado7: tObse7,
							Suplementario7: supl7,
							Estandar7: estanda7,
							Unidad7: uni7,
							Comentarios7: comen7,

							//Cliente:enviarCliente
							//----------------------------------8-----------------------------

							Codigo8: codi8,
							Descripcion8: desc8,
							Maquina8: maquina8,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado8: tObse8,
							Suplementario8: supl8,
							Estandar8: estanda8,
							Unidad8: uni8,
							Comentarios8: comen8,

							//Cliente:enviarCliente
							//--------------------------------9--------------------------------

							Codigo9: codi9,
							Descripcion9: desc9,
							Maquina9: maquina9,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado9: tObse9,
							Suplementario9: supl9,
							Estandar9: estanda9,
							Unidad9: uni9,
							Comentarios9: comen9,

							//Cliente:enviarCliente
							//-----------------------------------10------------------------------

							Codigo10: codi10,
							Descripcion10: desc10,
							Maquina10: maquina10,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado10: tObse10,
							Suplementario10: supl10,
							Estandar10: estanda10,
							Unidad10: uni10,
							Comentarios10: comen10,

							// Cliente:enviarCliente
							//----------------------------------11---------------------------------

							Codigo11: codi11,
							Descripcion11: desc11,
							Maquina11: maquina11,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado11: tObse11,
							Suplementario11: supl11,
							Estandar11: estanda11,
							Unidad11: uni11,

							Comentarios11: comen11,

							// Cliente:enviarCliente
							//-------------------------------------12-------------------------------

							Codigo12: codi12,
							Descripcion12: desc12,
							Maquina12: maquina12,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado12: tObse12,
							Suplementario12: supl12,
							Estandar12: estanda12,
							Unidad12: uni12,
							Comentarios12: comen12,

							// Cliente:enviarCliente
							//----------------------------------------13------------------------------

							// Cliente:enviarCliente,


							Codigo13: codi13,
							Descripcion13: desc13,
							Maquina13: maquina13,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado13: tObse13,
							Suplementario13: supl13,
							Estandar13: estanda13,
							Comentarios13: comen13,

							Unidad13: uni13,

							//--------------------------------------14----------------------------------
							//Cliente:enviarCliente,
							Codigo14: codi14,
							Descripcion14: desc14,
							Maquina14: maquina14,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado14: tObse14,
							Suplementario14: supl14,
							Estandar14: estanda14,
							Comentarios14: comen14,

							Unidad14: uni14,
							//TiempoTotal:total
							//----------------------------------------15----------------------------------
							//   Cliente:enviarCliente,
							Codigo15: codi15,
							Descripcion15: desc15,
							Maquina15: maquina15,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado15: tObse15,
							Suplementario15: supl15,
							Estandar15: estanda15,
							Comentarios15: comen15,

							Unidad15: uni15,
							//TiempoTotal:total

							//-------------------------------------------16-----------------------------------
							//  Cliente:enviarCliente,
							Codigo16: codi16,
							Descripcion16: desc16,
							Maquina16: maquina16,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado16: tObse16,
							Suplementario16: supl16,
							Estandar16: estanda16,
							Comentarios16: comen16,

							Unidad16: uni16,
							//-----------------------------------------------17---------------------------------
							//  Cliente:enviarCliente,
							Codigo17: codi17,
							Descripcion17: desc17,
							Maquina17: maquina17,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado17: tObse17,
							Suplementario17: supl17,
							Estandar17: estanda17,
							Comentarios17: comen17,

							Unidad17: uni17,

							//-------------------------------------------------18---------------------------------
							//Cliente:enviarCliente,
							Codigo18: codi18,
							Descripcion18: desc18,
							Maquina18: maquina18,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado18: tObse18,
							Suplementario18: supl18,
							Estandar18: estanda18,
							Comentarios18: comen18,

							Unidad18: uni18,
							//------------------------------------------------19------------------------------------
							//Cliente:enviarCliente,
							Codigo19: codi19,
							Descripcion19: desc19,
							Maquina19: maquina19,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado19: tObse19,
							Suplementario19: supl19,
							Estandar19: estanda19,
							Comentarios19: comen19,

							Unidad19: uni19,
							//--------------------------------------------------20------------------------------------
							// Cliente:enviarCliente,
							Codigo20: codi20,
							Descripcion20: desc20,
							Maquina20: maquina20,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado20: tObse20,
							Suplementario20: supl20,
							Estandar20: estanda20,
							Comentarios20: comen20,

							Unidad20: uni20,
							//TiempoTotal:total
							//-------------------------------------------------21----------------------------------------
							//Cliente:enviarCliente,
							Codigo21: codi21,
							Descripcion21: desc21,
							Maquina21: maquina21,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado21: tObse21,
							Suplementario21: supl21,
							Estandar21: estanda21,
							Comentarios21: comen21,

							Unidad21: uni21,
							//---------------------------------------------------22---------------------------------------
							//Cliente:enviarCliente,
							Codigo22: codi22,
							Descripcion22: desc22,
							Maquina22: maquina22,
							//OrdenOperacion:OPE,
							//  Referencia:datoRef,
							Observado22: tObse22,
							Suplementario22: supl22,
							Estandar22: estanda22,
							Comentarios22: comen22,

							Unidad22: uni22,
							//-------------------------------------------------23------------------------------------------
							//Cliente:enviarCliente,
							Codigo23: codi23,
							Descripcion23: desc23,
							Maquina23: maquina23,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado23: tObse23,
							Suplementario23: supl23,
							Estandar23: estanda23,
							Comentarios23: comen23,

							Unidad23: uni23,
							//----------------------------------------------------24----------------------------------------
							//  Cliente:enviarCliente,
							Codigo24: codi24,
							Descripcion24: desc24,
							Maquina24: maquina24,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado24: tObse24,
							Suplementario24: supl24,
							Estandar24: estanda24,
							Comentarios24: comen24,

							Unidad24: uni24,
							//--------------------------------------------------------25-------------------------------------
							// Cliente:enviarCliente,
							Codigo25: codi25,
							Descripcion25: desc25,
							Maquina25: maquina25,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado25: tObse25,
							Suplementario25: supl25,
							Estandar25: estanda25,
							Comentarios25: comen25,

							Unidad25: uni25,
							//----------------------------------------------------26-------------------------------------------
							//Cliente:enviarCliente,
							Codigo26: codi26,
							Descripcion26: desc26,
							Maquina26: maquina26,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado26: tObse26,
							Suplementario26: supl26,
							Estandar26: estanda26,
							Comentarios26: comen26,

							Unidad26: uni26,
							//---------------------------------------------------27----------------------------------------------
							// Cliente:enviarCliente,
							Codigo27: codi27,
							Descripcion27: desc27,
							Maquina27: maquina27,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado27: tObse27,
							Suplementario27: supl27,
							Estandar27: estanda27,
							Comentarios27: comen27,

							Unidad27: uni27,
							//----------------------------------------------------28--------------------------------------
							// Cliente:enviarCliente,
							Codigo28: codi28,
							Descripcion28: desc28,
							Maquina28: maquina28,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado28: tObse28,
							Suplementario28: supl28,
							Estandar28: estanda28,
							Comentarios28: comen28,

							Unidad28: uni28,
							//-------------------------------------------------29-------------------------------------------
							//Cliente:enviarCliente,
							Codigo29: codi29,
							Descripcion29: desc29,
							Maquina29: maquina29,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado29: tObse29,
							Suplementario29: supl29,
							Estandar29: estanda29,
							Comentarios29: comen29,

							Unidad29: uni29,
							//------------------------------------------------30------------------------------------------
							//  Cliente:enviarCliente,
							Codigo30: codi30,
							Descripcion30: desc30,
							Maquina30: maquina30,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado30: tObse30,
							Suplementario30: supl30,
							Estandar30: estanda30,
							Comentarios30: comen30,

							Unidad30: uni30,
							//-----------------------------------------------31--------------------------------------------
							// Cliente:enviarCliente,
							Codigo31: codi31,
							Descripcion31: desc31,
							Maquina31: maquina31,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado31: tObse31,
							Suplementario31: supl31,
							Estandar31: estanda31,
							Unidad31: uni31,

							//------------------------------------------------32-------------------------------------------
							//  Cliente:enviarCliente,
							Codigo32: codi32,
							Descripcion32: desc32,
							Maquina32: maquina32,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado32: tObse32,
							Suplementario32: supl32,
							Estandar32: estanda32,
							Unidad32: uni32,
							//-------------------------------------------------33---------------------------------------------
							//Cliente:enviarCliente,
							Codigo33: codi33,
							Descripcion33: desc33,
							Maquina33: maquina33,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado33: tObse33,
							Suplementario33: supl33,
							Estandar33: estanda33,
							Unidad33: uni33,
							//TiempoTotal:total

							//--------------------------------------------------34-------------------------------------------
							// Cliente:enviarCliente,
							Codigo34: codi34,
							Descripcion34: desc34,
							Maquina34: maquina34,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado34: tObse34,
							Suplementario34: supl34,
							Estandar34: estanda34,
							Unidad34: uni34,
							//-------------------------------------------------35------------------------------------------
							// Cliente:enviarCliente,
							Codigo35: codi35,
							Descripcion35: desc35,
							Maquina35: maquina35,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado35: tObse35,
							Suplementario35: supl35,
							Estandar35: estanda35,
							Unidad35: uni35,
							//TiempoTotal:total

							//---------------------------------------------36----------------------------------------------
							//  Cliente:enviarCliente,
							Codigo36: codi36,
							Descripcion36: desc36,
							Maquina36: maquina36,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado36: tObse36,
							Suplementario36: supl36,
							Estandar36: estanda36,
							Unidad36: uni36,
							//TiempoTotal:total

							//------------------------------------------------37-------------------------------------------
							// Cliente:enviarCliente,
							Codigo37: codi37,
							Descripcion37: desc37,
							Maquina37: maquina37,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado37: tObse37,
							Suplementario37: supl37,
							Estandar37: estanda37,
							Unidad37: uni37,
							//---------------------------------------------38-----------------------------------------------
							// Cliente:enviarCliente,
							Codigo38: codi38,
							Descripcion38: desc38,
							Maquina38: maquina38,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado38: tObse38,
							Suplementario38: supl38,
							Estandar38: estanda38,
							Unidad38: uni38,
							//-----------------------------------------------39-----------------------------------------------
							// Cliente:enviarCliente,
							Codigo39: codi39,
							Descripcion39: desc39,
							Maquina39: maquina39,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado39: tObse39,
							Suplementario39: supl39,
							Estandar39: estanda39,
							Unidad39: uni39,
							//TiempoTotal:total

							//------------------------------------------------40------------------------------------------------
							// Cliente:enviarCliente,
							Codigo40: codi40,
							Descripcion40: desc40,
							Maquina40: maquina40,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado40: tObse40,
							Suplementario40: supl40,
							Estandar40: estanda40,
							Unidad40: uni40,
							//---------------------------------------------41----------------------------------------------------
							//   Cliente:enviarCliente,
							Codigo41: codi41,
							Descripcion41: desc41,
							Maquina41: maquina41,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado41: tObse41,
							Suplementario41: supl41,
							Estandar41: estanda41,
							Unidad41: uni41,
							//TiempoTotal:total
							//--------------------------------------------42--------------------------------------------------
							//Cliente:enviarCliente,
							Codigo42: codi42,
							Descripcion42: desc42,
							Maquina42: maquina42,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado42: tObse42,
							Suplementario42: supl42,
							Estandar42: estanda42,
							Unidad42: uni42,
							//TiempoTotal:total

							//---------------------------------------------43--------------------------------------------------
							//  Cliente:enviarCliente,
							Codigo43: codi43,
							Descripcion43: desc43,
							Maquina43: maquina43,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado43: tObse43,
							Suplementario43: supl43,
							Estandar43: estanda43,
							Unidad43: uni43,
							//-----------------------------------------------44------------------------------------------------
							//  Cliente:enviarCliente,
							Codigo44: codi44,
							Descripcion44: desc44,
							Maquina44: maquina44,
							//OrdenOperacion:OPE,
							//  Referencia:datoRef,
							Observado44: tObse44,
							Suplementario44: supl44,
							Estandar44: estanda44,
							Unidad44: uni44,
							//------------------------------------------------45------------------------------------------------
							// Cliente:enviarCliente,
							Codigo45: codi45,
							Descripcion45: desc45,
							Maquina45: maquina45,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado45: tObse45,
							Suplementario45: supl45,
							Estandar45: estanda45,
							Unidad45: uni45,
							//------------------------------------------46--------------------------------------------------
							//  Cliente:enviarCliente,
							Codigo46: codi46,
							Descripcion46: desc46,
							Maquina46: maquina46,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado46: tObse46,
							Suplementario46: supl46,
							Estandar46: estanda46,
							Unidad46: uni46,
							//TiempoTotal:total

							//----------------------------------------------47-----------------------------------------------
							// Cliente:enviarCliente,
							Codigo47: codi47,
							Descripcion47: desc47,
							Maquina47: maquina47,
							//OrdenOperacion:OPE,
							// Referencia:datoRef,
							Observado47: tObse47,
							Suplementario47: supl47,
							Estandar47: estanda47,
							Unidad47: uni47,
							//TiempoTotal:total

							//-------------------------------------------------48-----------------------------------------------
							//Cliente:enviarCliente,
							Codigo48: codi48,
							Descripcion48: desc48,
							Maquina48: maquina48,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado48: tObse48,
							Suplementario48: supl48,
							Estandar48: estanda48,
							Unidad48: uni48,
							//TiempoTotal:total

							//--------------------------------------------------49---------------------------------------------
							//  Cliente:enviarCliente,
							Codigo49: codi49,
							Descripcion49: desc49,
							Maquina49: maquina49,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado49: tObse49,
							Suplementario49: supl49,
							Estandar49: estanda49,
							Unidad49: uni49,
							//TiempoTotal:total
							//--------------------------------------------50--------------------------------------------------
							// Cliente:enviarCliente,
							Codigo50: codi50,
							Descripcion50: desc50,
							Maquina50: maquina50,
							//OrdenOperacion:OPE,
							//Referencia:datoRef,
							Observado50: tObse50,
							Suplementario50: supl50,
							Estandar50: estanda50,
							Unidad50: uni50
							//------------------------------------------------------------------------------------------------


						})
							.then(() => {
								console.log("Document successfully updated!");
								setInterval("location.reload()", 4000);
							})
							.catch((error) => {
								// The document probably doesn't exist.
								console.error("Error updating document: ", error);
							});
					}


					//------------------------fin actualizar--------------------------

					document.getElementById("totaltiempo2").value = TiempTotal2;
					document.getElementById("tiempoIncremento").value = IncrementoTiemp;

					document.getElementById("txtTarea").value = txt;
					document.getElementById("fecha").value = fecha;
					document.getElementById("op1").value = cod1;
					document.getElementById("descrip1").value = desc1;
					document.getElementById("mq1").value = mq1;
					document.getElementById("to1").value = ob1;
					document.getElementById("s1").value = su1;
					document.getElementById("estan1").value = es1;
					document.getElementById("tiem1").value = uni1;
					document.getElementById("comen1").value = co1;

					//-----------------2-----------------------------
					var cod2 = `${doc.data().Codigo2}`;
					var desc2 = `${doc.data().Descripcion2}`;
					var mq2 = `${doc.data().Maquina2}`;
					var ob2 = `${doc.data().Observado2}`;
					var su2 = `${doc.data().Suplementario2}`;
					var es2 = `${doc.data().Estandar2}`;
					var uni2 = `${doc.data().Unidad2}`;
					var co2 = `${doc.data().Comentarios2}`;
					//queryOrden = `${doc.data().orden}`;


					//document.getElementById('ordenes').value = queryOrden;

					document.getElementById("op2").value = cod2;
					document.getElementById("descrip2").value = desc2;
					document.getElementById("mq2").value = mq2;
					document.getElementById("to2").value = ob2;
					document.getElementById("s2").value = su2;
					document.getElementById("estan2").value = es2;
					document.getElementById("tiem2").value = uni2;
					document.getElementById("comen2").value = co2;


					//-----------------3-----------------------------
					var cod3 = `${doc.data().Codigo3}`;
					var desc3 = `${doc.data().Descripcion3}`;
					var mq3 = `${doc.data().Maquina3}`;
					var ob3 = `${doc.data().Observado3}`;
					var su3 = `${doc.data().Suplementario3}`;
					var es3 = `${doc.data().Estandar3}`;
					var uni3 = `${doc.data().Unidad3}`;
					var co3 = `${doc.data().Comentarios3}`;

					document.getElementById("op3").value = cod3;
					document.getElementById("descrip3").value = desc3;
					document.getElementById("mq3").value = mq3;
					document.getElementById("to3").value = ob3;
					document.getElementById("s3").value = su3;
					document.getElementById("estan3").value = es3;
					document.getElementById("tiem3").value = uni3;
					document.getElementById("comen3").value = co3;
					//-----------------4-----------------------------
					var cod4 = `${doc.data().Codigo4}`;
					var desc4 = `${doc.data().Descripcion4}`;
					var mq4 = `${doc.data().Maquina4}`;
					var ob4 = `${doc.data().Observado4}`;
					var su4 = `${doc.data().Suplementario4}`;
					var es4 = `${doc.data().Estandar4}`;
					var uni4 = `${doc.data().Unidad4}`;
					var co4 = `${doc.data().Comentarios4}`;

					document.getElementById("op4").value = cod4;
					document.getElementById("descrip4").value = desc4;
					document.getElementById("mq4").value = mq4;
					document.getElementById("to4").value = ob4;
					document.getElementById("s4").value = su4;
					document.getElementById("estan4").value = es4;
					document.getElementById("tiem4").value = uni4;
					document.getElementById("comen4").value = co4;
					//-----------------5-----------------------------
					var cod5 = `${doc.data().Codigo5}`;
					var desc5 = `${doc.data().Descripcion5}`;
					var mq5 = `${doc.data().Maquina5}`;
					var ob5 = `${doc.data().Observado5}`;
					var su5 = `${doc.data().Suplementario5}`;
					var es5 = `${doc.data().Estandar5}`;
					var uni5 = `${doc.data().Unidad5}`;
					var co5 = `${doc.data().Comentarios5}`;

					document.getElementById("op5").value = cod5;
					document.getElementById("descrip5").value = desc5;
					document.getElementById("mq5").value = mq5;
					document.getElementById("to5").value = ob5;
					document.getElementById("s5").value = su5;
					document.getElementById("estan5").value = es5;
					document.getElementById("tiem5").value = uni5;
					document.getElementById("comen5").value = co5;
					//-----------------6-----------------------------
					var cod6 = `${doc.data().Codigo6}`;
					var desc6 = `${doc.data().Descripcio6n}`;
					var mq6 = `${doc.data().Maquina6}`;
					var ob6 = `${doc.data().Observado6}`;
					var su6 = `${doc.data().Suplementario6}`;
					var es6 = `${doc.data().Estandar6}`;
					var uni6 = `${doc.data().Unidad6}`;
					var co6 = `${doc.data().Comentarios6}`;

					document.getElementById("op6").value = cod6;
					document.getElementById("descrip6").value = desc6;
					document.getElementById("mq6").value = mq6;
					document.getElementById("to6").value = ob6;
					document.getElementById("s6").value = su6;
					document.getElementById("estan6").value = es6;
					document.getElementById("tiem6").value = uni6;
					document.getElementById("comen6").value = co6;
					//-----------------7-----------------------------
					var cod7 = `${doc.data().Codigo7}`;
					var desc7 = `${doc.data().Descripcion7}`;
					var mq7 = `${doc.data().Maquina7}`;
					var ob7 = `${doc.data().Observado7}`;
					var su7 = `${doc.data().Suplementario7}`;
					var es7 = `${doc.data().Estandar7}`;
					var uni7 = `${doc.data().Unidad7}`;
					var codi7 = `${doc.data().Comentarios7}`;

					document.getElementById("op7").value = cod7;
					document.getElementById("descrip7").value = desc7;
					document.getElementById("mq7").value = mq7;
					document.getElementById("to7").value = ob7;
					document.getElementById("s7").value = su7;
					document.getElementById("estan7").value = es7;
					document.getElementById("tiem7").value = uni7;
					document.getElementById("comen7").value = codi7;
					//-----------------8-----------------------------
					var cod8 = `${doc.data().Codigo8}`;
					var desc8 = `${doc.data().Descripcion8}`;
					var mq8 = `${doc.data().Maquina8}`;
					var ob8 = `${doc.data().Observado8}`;
					var su8 = `${doc.data().Suplementario8}`;
					var es8 = `${doc.data().Estandar8}`;
					var uni8 = `${doc.data().Unidad8}`;
					var co8 = `${doc.data().Comentarios8}`;

					document.getElementById("op8").value = cod8;
					document.getElementById("descrip8").value = desc8;
					document.getElementById("mq8").value = mq8;
					document.getElementById("to8").value = ob8;
					document.getElementById("s8").value = su8;
					document.getElementById("estan8").value = es8;
					document.getElementById("tiem8").value = uni8;
					document.getElementById("comen8").value = co8;
					//-----------------9-----------------------------
					var cod9 = `${doc.data().Codigo9}`;
					var desc9 = `${doc.data().Descripcion9}`;
					var mq9 = `${doc.data().Maquina9}`;
					var ob9 = `${doc.data().Observado9}`;
					var su9 = `${doc.data().Suplementario9}`;
					var es9 = `${doc.data().Estandar9}`;
					var uni9 = `${doc.data().Unidad9}`;
					var co9 = `${doc.data().Comentarios9}`;

					document.getElementById("op9").value = cod9;
					document.getElementById("descrip9").value = desc9;
					document.getElementById("mq9").value = mq9;
					document.getElementById("to9").value = ob9;
					document.getElementById("s9").value = su9;
					document.getElementById("estan9").value = es9;
					document.getElementById("tiem9").value = uni9;
					document.getElementById("comen9").value = co9;
					//-----------------10-----------------------------
					var cod10 = `${doc.data().Codigo10}`;
					var desc10 = `${doc.data().Descripcion10}`;
					var mq10 = `${doc.data().Maquina10}`;
					var ob10 = `${doc.data().Observado10}`;
					var su10 = `${doc.data().Suplementario10}`;
					var es10 = `${doc.data().Estandar10}`;
					var uni10 = `${doc.data().Unidad10}`;
					var co10 = `${doc.data().Comentarios10}`;

					document.getElementById("op10").value = cod10;
					document.getElementById("descrip10").value = desc10;
					document.getElementById("mq10").value = mq10;
					document.getElementById("to10").value = ob10;
					document.getElementById("s10").value = su10;
					document.getElementById("estan10").value = es10;
					document.getElementById("tiem10").value = uni10;
					document.getElementById("comen10").value = co10;
					//-----------------11-----------------------------
					var cod11 = `${doc.data().Codigo11}`;
					var desc11 = `${doc.data().Descripcion11}`;
					var mq11 = `${doc.data().Maquina11}`;
					var ob11 = `${doc.data().Observado11}`;
					var su11 = `${doc.data().Suplementario11}`;
					var es11 = `${doc.data().Estandar11}`;
					var uni11 = `${doc.data().Unidad11}`;
					var co11 = `${doc.data().Comentarios11}`;

					document.getElementById("op11").value = cod11;
					document.getElementById("descrip11").value = desc11;
					document.getElementById("mq11").value = mq11;
					document.getElementById("to11").value = ob11;
					document.getElementById("s11").value = su11;
					document.getElementById("estan11").value = es11;
					document.getElementById("tiem11").value = uni11;
					document.getElementById("comen11").value = co11;
					//-----------------12-----------------------------
					var cod12 = `${doc.data().Codigo12}`;
					var desc12 = `${doc.data().Descripcion12}`;
					var mq12 = `${doc.data().Maquina12}`;
					var ob12 = `${doc.data().Observado12}`;
					var su12 = `${doc.data().Suplementario12}`;
					var es12 = `${doc.data().Estandar12}`;
					var uni12 = `${doc.data().Unidad12}`;
					var co12 = `${doc.data().Comentarios12}`;

					document.getElementById("op12").value = cod12;
					document.getElementById("descrip12").value = desc12;
					document.getElementById("mq12").value = mq12;
					document.getElementById("to12").value = ob12;
					document.getElementById("s12").value = su12;
					document.getElementById("estan12").value = es12;
					document.getElementById("tiem12").value = uni12;
					document.getElementById("comen12").value = co12;
					//-----------------13-----------------------------
					var cod13 = `${doc.data().Codigo13}`;
					var desc13 = `${doc.data().Descripcion13}`;
					var mq13 = `${doc.data().Maquina13}`;
					var ob13 = `${doc.data().Observado13}`;
					var su13 = `${doc.data().Suplementario13}`;
					var es13 = `${doc.data().Estandar13}`;
					var uni13 = `${doc.data().Unidad13}`;
					var co13 = `${doc.data().Comentarios13}`;

					document.getElementById("op13").value = cod13;
					document.getElementById("descrip13").value = desc13;
					document.getElementById("mq13").value = mq13;
					document.getElementById("to13").value = ob13;
					document.getElementById("s13").value = su13;
					document.getElementById("estan13").value = es13;
					document.getElementById("tiem13").value = uni13;
					document.getElementById("comen13").value = co13;
					//-----------------14-----------------------------
					var cod14 = `${doc.data().Codigo14}`;
					var desc14 = `${doc.data().Descripcion14}`;
					var mq14 = `${doc.data().Maquina14}`;
					var ob14 = `${doc.data().Observado14}`;
					var su14 = `${doc.data().Suplementario14}`;
					var es14 = `${doc.data().Estandar14}`;
					var uni14 = `${doc.data().Unidad14}`;
					var co14 = `${doc.data().Comentarios14}`;

					document.getElementById("op14").value = cod14;
					document.getElementById("descrip14").value = desc14;
					document.getElementById("mq14").value = mq14;
					document.getElementById("to14").value = ob14;
					document.getElementById("s14").value = su14;
					document.getElementById("estan14").value = es14;
					document.getElementById("tiem14").value = uni14;
					document.getElementById("comen14").value = co14;
					//-----------------15-----------------------------
					var cod15 = `${doc.data().Codigo15}`;
					var desc15 = `${doc.data().Descripcion15}`;
					var mq15 = `${doc.data().Maquina15}`;
					var ob15 = `${doc.data().Observado15}`;
					var su15 = `${doc.data().Suplementario15}`;
					var es15 = `${doc.data().Estandar15}`;
					var uni15 = `${doc.data().Unidad15}`;
					var co15 = `${doc.data().Comentarios15}`;

					document.getElementById("op15").value = cod15;
					document.getElementById("descrip15").value = desc15;
					document.getElementById("mq15").value = mq15;
					document.getElementById("to15").value = ob15;
					document.getElementById("s15").value = su15;
					document.getElementById("estan15").value = es15;
					document.getElementById("tiem15").value = uni15;
					document.getElementById("comen15").value = co15;
					//-----------------16-----------------------------
					var cod16 = `${doc.data().Codigo16}`;
					var desc16 = `${doc.data().Descripcion16}`;
					var mq16 = `${doc.data().Maquina16}`;
					var ob16 = `${doc.data().Observado16}`;
					var su16 = `${doc.data().Suplementario16}`;
					var es16 = `${doc.data().Estandar16}`;
					var uni16 = `${doc.data().Unidad16}`;
					var co16 = `${doc.data().Comentarios16}`;

					document.getElementById("op16").value = cod16;
					document.getElementById("descrip16").value = desc16;
					document.getElementById("mq16").value = mq16;
					document.getElementById("to16").value = ob16;
					document.getElementById("s16").value = su16;
					document.getElementById("estan16").value = es16;
					document.getElementById("tiem16").value = uni16;
					document.getElementById("comen16").value = co16;
					//-----------------17-----------------------------
					var cod17 = `${doc.data().Codigo17}`;
					var desc17 = `${doc.data().Descripcion17}`;
					var mq17 = `${doc.data().Maquina17}`;
					var ob17 = `${doc.data().Observado17}`;
					var su17 = `${doc.data().Suplementario17}`;
					var es17 = `${doc.data().Estandar17}`;
					var uni17 = `${doc.data().Unidad17}`;
					var co17 = `${doc.data().Comentarios17}`;

					document.getElementById("op17").value = cod17;
					document.getElementById("descrip17").value = desc17;
					document.getElementById("mq17").value = mq17;
					document.getElementById("to17").value = ob17;
					document.getElementById("s17").value = su17;
					document.getElementById("estan17").value = es17;
					document.getElementById("tiem17").value = uni17;
					document.getElementById("comen17").value = co17;
					//-----------------18-----------------------------
					var cod18 = `${doc.data().Codigo18}`;
					var desc18 = `${doc.data().Descripcion18}`;
					var mq18 = `${doc.data().Maquina18}`;
					var ob18 = `${doc.data().Observado18}`;
					var su18 = `${doc.data().Suplementario18}`;
					var es18 = `${doc.data().Estandar18}`;
					var uni18 = `${doc.data().Unidad18}`;
					var co18 = `${doc.data().Comentarios18}`;

					document.getElementById("op18").value = cod18;
					document.getElementById("descrip18").value = desc18;
					document.getElementById("mq18").value = mq18;
					document.getElementById("to18").value = ob18;
					document.getElementById("s18").value = su18;
					document.getElementById("estan18").value = es18;
					document.getElementById("tiem18").value = uni18;
					document.getElementById("comen18").value = co18;
					//-----------------19-----------------------------
					var cod19 = `${doc.data().Codigo19}`;
					var desc19 = `${doc.data().Descripcion19}`;
					var mq19 = `${doc.data().Maquina19}`;
					var ob19 = `${doc.data().Observado19}`;
					var su19 = `${doc.data().Suplementario19}`;
					var es19 = `${doc.data().Estandar19}`;
					var uni19 = `${doc.data().Unidad19}`;
					var co19 = `${doc.data().Comentarios19}`;

					document.getElementById("op19").value = cod19;
					document.getElementById("descrip19").value = desc19;
					document.getElementById("mq19").value = mq19;
					document.getElementById("to19").value = ob19;
					document.getElementById("s19").value = su19;
					document.getElementById("estan19").value = es19;
					document.getElementById("tiem19").value = uni19;
					document.getElementById("comen19").value = co19;
					//-----------------20-----------------------------
					var cod20 = `${doc.data().Codigo20}`;
					var desc20 = `${doc.data().Descripcion20}`;
					var mq20 = `${doc.data().Maquina20}`;
					var ob20 = `${doc.data().Observado20}`;
					var su20 = `${doc.data().Suplementario20}`;
					var es20 = `${doc.data().Estandar20}`;
					var uni20 = `${doc.data().Unidad20}`;
					var co20 = `${doc.data().Comentarios20}`;

					document.getElementById("op20").value = cod20;
					document.getElementById("descrip20").value = desc20;
					document.getElementById("mq20").value = mq20;
					document.getElementById("to20").value = ob20;
					document.getElementById("s20").value = su20;
					document.getElementById("estan20").value = es20;
					document.getElementById("tiem20").value = uni20;
					document.getElementById("comen20").value = co20;
					//-----------------21-----------------------------
					var cod21 = `${doc.data().Codigo21}`;
					var desc21 = `${doc.data().Descripcion21}`;
					var mq21 = `${doc.data().Maquina21}`;
					var ob21 = `${doc.data().Observado21}`;
					var su21 = `${doc.data().Suplementario21}`;
					var es21 = `${doc.data().Estandar21}`;
					var uni21 = `${doc.data().Unidad21}`;
					var co21 = `${doc.data().Comentarios21}`;

					document.getElementById("op21").value = cod21;
					document.getElementById("descrip21").value = desc21;
					document.getElementById("mq21").value = mq21;
					document.getElementById("to21").value = ob21;
					document.getElementById("s21").value = su21;
					document.getElementById("estan21").value = es21;
					document.getElementById("tiem21").value = uni21;
					document.getElementById("comen21").value = co21;
					//-----------------22-----------------------------
					var cod22 = `${doc.data().Codigo22}`;
					var desc22 = `${doc.data().Descripcion22}`;
					var mq22 = `${doc.data().Maquina22}`;
					var ob22 = `${doc.data().Observado22}`;
					var su22 = `${doc.data().Suplementario22}`;
					var es22 = `${doc.data().Estandar22}`;
					var uni22 = `${doc.data().Unidad22}`;
					var co22 = `${doc.data().Comentarios22}`;

					document.getElementById("op22").value = cod22;
					document.getElementById("descrip22").value = desc22;
					document.getElementById("mq22").value = mq22;
					document.getElementById("to22").value = ob22;
					document.getElementById("s22").value = su22;
					document.getElementById("estan22").value = es22;
					document.getElementById("tiem22").value = uni22;
					document.getElementById("comen22").value = co22;
					//-----------------23-----------------------------
					var cod23 = `${doc.data().Codigo23}`;
					var desc23 = `${doc.data().Descripcion23}`;
					var mq23 = `${doc.data().Maquina23}`;
					var ob23 = `${doc.data().Observado23}`;
					var su23 = `${doc.data().Suplementario23}`;
					var es23 = `${doc.data().Estandar23}`;
					var uni23 = `${doc.data().Unidad23}`;
					var co23 = `${doc.data().Comentarios23}`;

					document.getElementById("op23").value = cod23;
					document.getElementById("descrip23").value = desc23;
					document.getElementById("mq23").value = mq23;
					document.getElementById("to23").value = ob23;
					document.getElementById("s23").value = su23;
					document.getElementById("estan23").value = es23;
					document.getElementById("tiem23").value = uni23;
					document.getElementById("comen23").value = co23;
					//-----------------24-----------------------------
					var cod24 = `${doc.data().Codigo24}`;
					var desc24 = `${doc.data().Descripcion24}`;
					var mq24 = `${doc.data().Maquina24}`;
					var ob24 = `${doc.data().Observado24}`;
					var su24 = `${doc.data().Suplementario24}`;
					var es24 = `${doc.data().Estandar24}`;
					var uni24 = `${doc.data().Unidad24}`;
					var co24 = `${doc.data().Comentarios24}`;

					document.getElementById("op24").value = cod24;
					document.getElementById("descrip24").value = desc24;
					document.getElementById("mq24").value = mq24;
					document.getElementById("to24").value = ob24;
					document.getElementById("s24").value = su24;
					document.getElementById("estan24").value = es24;
					document.getElementById("tiem24").value = uni24;
					document.getElementById("comen24").value = co24;
					//-----------------5-----------------------------
					var cod25 = `${doc.data().Codigo25}`;
					var desc25 = `${doc.data().Descripcion25}`;
					var mq25 = `${doc.data().Maquina25}`;
					var ob25 = `${doc.data().Observado25}`;
					var su25 = `${doc.data().Suplementario25}`;
					var es25 = `${doc.data().Estandar25}`;
					var uni25 = `${doc.data().Unidad25}`;
					var co25 = `${doc.data().Comentarios25}`;

					document.getElementById("op25").value = cod25;
					document.getElementById("descrip25").value = desc25;
					document.getElementById("mq25").value = mq25;
					document.getElementById("to25").value = ob25;
					document.getElementById("s25").value = su25;
					document.getElementById("estan25").value = es25;
					document.getElementById("tiem25").value = uni25;
					document.getElementById("comen25").value = co25;
					//-----------------26-----------------------------
					var cod26 = `${doc.data().Codigo26}`;
					var desc26 = `${doc.data().Descripcion26}`;
					var mq26 = `${doc.data().Maquina26}`;
					var ob26 = `${doc.data().Observado26}`;
					var su26 = `${doc.data().Suplementario26}`;
					var es26 = `${doc.data().Estandar26}`;
					var uni26 = `${doc.data().Unidad26}`;
					var co26 = `${doc.data().Comentarios26}`;

					document.getElementById("op26").value = cod26;
					document.getElementById("descrip26").value = desc26;
					document.getElementById("mq26").value = mq26;
					document.getElementById("to26").value = ob26;
					document.getElementById("s26").value = su26;
					document.getElementById("estan26").value = es26;
					document.getElementById("tiem26").value = uni26;
					document.getElementById("comen26").value = co26;
					//-----------------1-----------------------------
					var cod27 = `${doc.data().Codigo27}`;
					var desc27 = `${doc.data().Descripcion27}`;
					var mq27 = `${doc.data().Maquina27}`;
					var ob27 = `${doc.data().Observado27}`;
					var su27 = `${doc.data().Suplementario27}`;
					var es27 = `${doc.data().Estandar27}`;
					var uni27 = `${doc.data().Unidad27}`;
					var co27 = `${doc.data().Comentarios27}`;

					document.getElementById("op27").value = cod27;
					document.getElementById("descrip27").value = desc27;
					document.getElementById("mq27").value = mq27;
					document.getElementById("to27").value = ob27;
					document.getElementById("s27").value = su27;
					document.getElementById("estan27").value = es27;
					document.getElementById("tiem27").value = uni27;
					document.getElementById("comen27").value = co27;
					//-----------------28-----------------------------
					var cod28 = `${doc.data().Codigo28}`;
					var desc28 = `${doc.data().Descripcion28}`;
					var mq28 = `${doc.data().Maquina28}`;
					var ob28 = `${doc.data().Observado28}`;
					var su28 = `${doc.data().Suplementario28}`;
					var es28 = `${doc.data().Estandar28}`;
					var uni28 = `${doc.data().Unidad28}`;
					var co28 = `${doc.data().Comentarios28}`;

					document.getElementById("op28").value = cod28;
					document.getElementById("descrip28").value = desc28;
					document.getElementById("mq28").value = mq28;
					document.getElementById("to28").value = ob28;
					document.getElementById("s28").value = su28;
					document.getElementById("estan28").value = es28;
					document.getElementById("tiem28").value = uni28;
					document.getElementById("comen28").value = co28;
					//-----------------29-----------------------------
					var cod29 = `${doc.data().Codigo29}`;
					var desc29 = `${doc.data().Descripcion29}`;
					var mq29 = `${doc.data().Maquina29}`;
					var ob29 = `${doc.data().Observado29}`;
					var su29 = `${doc.data().Suplementario29}`;
					var es29 = `${doc.data().Estandar29}`;
					var uni29 = `${doc.data().Unidad29}`;
					var co29 = `${doc.data().Comentarios29}`;

					document.getElementById("op29").value = cod29;
					document.getElementById("descrip29").value = desc29;
					document.getElementById("mq29").value = mq29;
					document.getElementById("to29").value = ob29;
					document.getElementById("s29").value = su29;
					document.getElementById("estan29").value = es29;
					document.getElementById("tiem29").value = uni29;
					document.getElementById("comen29").value = co29;
					//-----------------30-----------------------------
					var cod30 = `${doc.data().Codigo30}`;
					var desc30 = `${doc.data().Descripcion30}`;
					var mq30 = `${doc.data().Maquina30}`;
					var ob30 = `${doc.data().Observado30}`;
					var su30 = `${doc.data().Suplementario30}`;
					var es30 = `${doc.data().Estandar30}`;
					var uni30 = `${doc.data().Unidad30}`;
					var co30 = `${doc.data().Comentarios30}`;

					document.getElementById("op30").value = cod30;
					document.getElementById("descrip30").value = desc30;
					document.getElementById("mq30").value = mq30;
					document.getElementById("to30").value = ob30;
					document.getElementById("s30").value = su30;
					document.getElementById("estan30").value = es30;
					document.getElementById("tiem30").value = uni30;
					document.getElementById("comen30").value = co30;


					//-----------------31-----------------------------
					var cod31 = `${doc.data().Codigo31}`;
					var desc31 = `${doc.data().Descripcion31}`;
					var mq31 = `${doc.data().Maquina31}`;
					var ob31 = `${doc.data().Observado31}`;
					var su31 = `${doc.data().Suplementario31}`;
					var es31 = `${doc.data().Estandar31}`;
					var uni31 = `${doc.data().Unidad31}`;
					var co31 = `${doc.data().Comentarios31}`;

					document.getElementById("op31").value = cod31;
					document.getElementById("descrip31").value = desc31;
					document.getElementById("mq31").value = mq31;
					document.getElementById("to31").value = ob31;
					document.getElementById("s31").value = su31;
					document.getElementById("estan31").value = es31;
					document.getElementById("tiem31").value = uni31;
					document.getElementById("comen31").value = co31;
					//-----------------32-----------------------------
					var cod32 = `${doc.data().Codigo32}`;
					var desc32 = `${doc.data().Descripcion32}`;
					var mq32 = `${doc.data().Maquina32}`;
					var ob32 = `${doc.data().Observado32}`;
					var su32 = `${doc.data().Suplementario32}`;
					var es32 = `${doc.data().Estandar32}`;
					var uni32 = `${doc.data().Unidad32}`;
					var co32 = `${doc.data().Comentarios32}`;

					document.getElementById("op32").value = cod32;
					document.getElementById("descrip32").value = desc32;
					document.getElementById("mq32").value = mq32;
					document.getElementById("to32").value = ob32;
					document.getElementById("s32").value = su32;
					document.getElementById("estan32").value = es32;
					document.getElementById("tiem32").value = uni32;
					document.getElementById("comen32").value = co32;
					//-----------------33-----------------------------
					var cod33 = `${doc.data().Codigo33}`;
					var desc33 = `${doc.data().Descripcion33}`;
					var mq33 = `${doc.data().Maquina33}`;
					var ob33 = `${doc.data().Observado33}`;
					var su33 = `${doc.data().Suplementario33}`;
					var es33 = `${doc.data().Estandar33}`;
					var uni33 = `${doc.data().Unidad33}`;
					var co33 = `${doc.data().Comentarios33}`;

					document.getElementById("op33").value = cod33;
					document.getElementById("descrip33").value = desc33;
					document.getElementById("mq33").value = mq33;
					document.getElementById("to33").value = ob33;
					document.getElementById("s33").value = su33;
					document.getElementById("estan33").value = es33;
					document.getElementById("tiem33").value = uni33;
					document.getElementById("comen33").value = co33;
					//-----------------34-----------------------------
					var cod34 = `${doc.data().Codigo34}`;
					var desc34 = `${doc.data().Descripcion34}`;
					var mq34 = `${doc.data().Maquina34}`;
					var ob34 = `${doc.data().Observado34}`;
					var su34 = `${doc.data().Suplementario34}`;
					var es34 = `${doc.data().Estandar34}`;
					var uni34 = `${doc.data().Unidad34}`;
					var co34 = `${doc.data().Comentarios34}`;

					document.getElementById("op34").value = cod34;
					document.getElementById("descrip34").value = desc34;
					document.getElementById("mq34").value = mq34;
					document.getElementById("to34").value = ob34;
					document.getElementById("s34").value = su34;
					document.getElementById("estan34").value = es34;
					document.getElementById("tiem34").value = uni34;
					document.getElementById("comen34").value = co34;
					//-----------------35-----------------------------
					var cod35 = `${doc.data().Codigo35}`;
					var desc35 = `${doc.data().Descripcion35}`;
					var mq35 = `${doc.data().Maquina35}`;
					var ob35 = `${doc.data().Observado35}`;
					var su35 = `${doc.data().Suplementario35}`;
					var es35 = `${doc.data().Estandar35}`;
					var uni35 = `${doc.data().Unidad35}`;
					var co35 = `${doc.data().Comentarios35}`;

					document.getElementById("op35").value = cod35;
					document.getElementById("descrip35").value = desc35;
					document.getElementById("mq35").value = mq35;
					document.getElementById("to35").value = ob35;
					document.getElementById("s35").value = su35;
					document.getElementById("estan35").value = es35;
					document.getElementById("tiem35").value = uni35;
					document.getElementById("comen35").value = co35;
					//-----------------36-----------------------------
					var cod36 = `${doc.data().Codigo36}`;
					var desc36 = `${doc.data().Descripcion36}`;
					var mq36 = `${doc.data().Maquina36}`;
					var ob36 = `${doc.data().Observado36}`;
					var su36 = `${doc.data().Suplementario36}`;
					var es36 = `${doc.data().Estandar36}`;
					var uni36 = `${doc.data().Unidad36}`;
					var co36 = `${doc.data().Comentarios36}`;

					document.getElementById("op36").value = cod36;
					document.getElementById("descrip36").value = desc36;
					document.getElementById("mq36").value = mq36;
					document.getElementById("to36").value = ob36;
					document.getElementById("s36").value = su36;
					document.getElementById("estan36").value = es36;
					document.getElementById("tiem36").value = uni36;
					document.getElementById("comen36").value = co36;
					//-----------------37-----------------------------
					var cod37 = `${doc.data().Codigo37}`;
					var desc37 = `${doc.data().Descripcion37}`;
					var mq37 = `${doc.data().Maquina37}`;
					var ob37 = `${doc.data().Observado37}`;
					var su37 = `${doc.data().Suplementario37}`;
					var es37 = `${doc.data().Estandar37}`;
					var uni37 = `${doc.data().Unidad37}`;
					var co37 = `${doc.data().Comentarios37}`;

					document.getElementById("op37").value = cod37;
					document.getElementById("descrip37").value = desc37;
					document.getElementById("mq37").value = mq37;
					document.getElementById("to37").value = ob37;
					document.getElementById("s37").value = su37;
					document.getElementById("estan37").value = es37;
					document.getElementById("tiem37").value = uni37;
					document.getElementById("comen37").value = co37;
					//-----------------38-----------------------------
					var cod38 = `${doc.data().Codigo38}`;
					var desc38 = `${doc.data().Descripcion38}`;
					var mq38 = `${doc.data().Maquina38}`;
					var ob38 = `${doc.data().Observado38}`;
					var su38 = `${doc.data().Suplementario38}`;
					var es38 = `${doc.data().Estandar38}`;
					var uni38 = `${doc.data().Unidad38}`;
					var co38 = `${doc.data().Comentarios38}`;

					document.getElementById("op38").value = cod38;
					document.getElementById("descrip38").value = desc38;
					document.getElementById("mq38").value = mq38;
					document.getElementById("to38").value = ob38;
					document.getElementById("s38").value = su38;
					document.getElementById("estan38").value = es38;
					document.getElementById("tiem38").value = uni38;
					document.getElementById("comen38").value = co38;
					//-----------------39-----------------------------
					var cod39 = `${doc.data().Codigo39}`;
					var desc39 = `${doc.data().Descripcion39}`;
					var mq39 = `${doc.data().Maquina39}`;
					var ob39 = `${doc.data().Observado39}`;
					var su39 = `${doc.data().Suplementario39}`;
					var es39 = `${doc.data().Estandar39}`;
					var uni39 = `${doc.data().Unidad39}`;
					var co39 = `${doc.data().Comentarios39}`;

					document.getElementById("op39").value = cod39;
					document.getElementById("descrip39").value = desc39;
					document.getElementById("mq39").value = mq39;
					document.getElementById("to39").value = ob39;
					document.getElementById("s39").value = su39;
					document.getElementById("estan39").value = es39;
					document.getElementById("tiem39").value = uni39;
					document.getElementById("comen39").value = co39;
					//-----------------40-----------------------------
					var cod40 = `${doc.data().Codigo40}`;
					var desc40 = `${doc.data().Descripcion40}`;
					var mq40 = `${doc.data().Maquina40}`;
					var ob40 = `${doc.data().Observado40}`;
					var su40 = `${doc.data().Suplementario40}`;
					var es40 = `${doc.data().Estandar40}`;
					var uni40 = `${doc.data().Unidad40}`;
					var co40 = `${doc.data().Comentarios40}`;

					document.getElementById("op40").value = cod40;
					document.getElementById("descrip40").value = desc40;
					document.getElementById("mq40").value = mq40;
					document.getElementById("to40").value = ob40;
					document.getElementById("s40").value = su40;
					document.getElementById("estan40").value = es40;
					document.getElementById("tiem40").value = uni40;
					document.getElementById("comen40").value = co40;
					//-----------------41-----------------------------
					var cod41 = `${doc.data().Codigo41}`;
					var desc41 = `${doc.data().Descripcion41}`;
					var mq41 = `${doc.data().Maquina41}`;
					var ob41 = `${doc.data().Observado41}`;
					var su41 = `${doc.data().Suplementario41}`;
					var es41 = `${doc.data().Estandar41}`;
					var uni41 = `${doc.data().Unidad41}`;
					var co41 = `${doc.data().Comentarios41}`;

					document.getElementById("op41").value = cod41;
					document.getElementById("descrip41").value = desc41;
					document.getElementById("mq41").value = mq41;
					document.getElementById("to41").value = ob41;
					document.getElementById("s41").value = su41;
					document.getElementById("estan41").value = es41;
					document.getElementById("tiem41").value = uni41;
					document.getElementById("comen41").value = co41;
					//-----------------42-----------------------------
					var cod42 = `${doc.data().Codigo42}`;
					var desc42 = `${doc.data().Descripcion42}`;
					var mq42 = `${doc.data().Maquina42}`;
					var ob42 = `${doc.data().Observado42}`;
					var su42 = `${doc.data().Suplementario42}`;
					var es42 = `${doc.data().Estandar42}`;
					var uni42 = `${doc.data().Unidad42}`;
					var co42 = `${doc.data().Comentarios42}`;

					document.getElementById("op42").value = cod42;
					document.getElementById("descrip42").value = desc42;
					document.getElementById("mq42").value = mq42;
					document.getElementById("to42").value = ob42;
					document.getElementById("s42").value = su42;
					document.getElementById("estan42").value = es42;
					document.getElementById("tiem42").value = uni42;
					document.getElementById("comen42").value = co42;
					//-----------------43-----------------------------
					var cod43 = `${doc.data().Codigo43}`;
					var desc43 = `${doc.data().Descripcion43}`;
					var mq43 = `${doc.data().Maquina43}`;
					var ob43 = `${doc.data().Observado43}`;
					var su43 = `${doc.data().Suplementario43}`;
					var es43 = `${doc.data().Estandar43}`;
					var uni43 = `${doc.data().Unidad43}`;
					var co43 = `${doc.data().Comentarios43}`;

					document.getElementById("op43").value = cod43;
					document.getElementById("descrip43").value = desc43;
					document.getElementById("mq43").value = mq43;
					document.getElementById("to43").value = ob43;
					document.getElementById("s43").value = su43;
					document.getElementById("estan43").value = es43;
					document.getElementById("tiem43").value = uni43;
					document.getElementById("comen43").value = co43;
					//-----------------44-----------------------------
					var cod44 = `${doc.data().Codigo44}`;
					var desc44 = `${doc.data().Descripcion44}`;
					var mq44 = `${doc.data().Maquina44}`;
					var ob44 = `${doc.data().Observado44}`;
					var su44 = `${doc.data().Suplementario44}`;
					var es44 = `${doc.data().Estandar44}`;
					var uni44 = `${doc.data().Unidad44}`;
					var co44 = `${doc.data().Comentarios44}`;

					document.getElementById("op44").value = cod44;
					document.getElementById("descrip44").value = desc44;
					document.getElementById("mq44").value = mq44;
					document.getElementById("to44").value = ob44;
					document.getElementById("s44").value = su44;
					document.getElementById("estan44").value = es44;
					document.getElementById("tiem44").value = uni44;
					document.getElementById("comen44").value = co44;
					//-----------------45-----------------------------
					var cod45 = `${doc.data().Codigo45}`;
					var desc45 = `${doc.data().Descripcion45}`;
					var mq45 = `${doc.data().Maquina45}`;
					var ob45 = `${doc.data().Observado45}`;
					var su45 = `${doc.data().Suplementario45}`;
					var es45 = `${doc.data().Estandar45}`;
					var uni45 = `${doc.data().Unidad45}`;
					var co45 = `${doc.data().Comentarios45}`;

					document.getElementById("op45").value = cod45;
					document.getElementById("descrip45").value = desc45;
					document.getElementById("mq45").value = mq45;
					document.getElementById("to45").value = ob45;
					document.getElementById("s45").value = su45;
					document.getElementById("estan45").value = es45;
					document.getElementById("tiem45").value = uni45;
					document.getElementById("comen45").value = co45;
					//-----------------46-----------------------------
					var cod46 = `${doc.data().Codigo46}`;
					var desc46 = `${doc.data().Descripcion46}`;
					var mq46 = `${doc.data().Maquina46}`;
					var ob46 = `${doc.data().Observado46}`;
					var su46 = `${doc.data().Suplementario46}`;
					var es46 = `${doc.data().Estandar46}`;
					var uni46 = `${doc.data().Unidad46}`;
					var co46 = `${doc.data().Comentarios46}`;

					document.getElementById("op46").value = cod46;
					document.getElementById("descrip46").value = desc46;
					document.getElementById("mq46").value = mq46;
					document.getElementById("to46").value = ob46;
					document.getElementById("s46").value = su46;
					document.getElementById("estan46").value = es46;
					document.getElementById("tiem46").value = uni46;
					document.getElementById("comen46").value = co46;
					//-----------------47-----------------------------
					var cod47 = `${doc.data().Codigo47}`;
					var desc47 = `${doc.data().Descripcion47}`;
					var mq47 = `${doc.data().Maquina47}`;
					var ob47 = `${doc.data().Observado47}`;
					var su47 = `${doc.data().Suplementario47}`;
					var es47 = `${doc.data().Estandar47}`;
					var uni47 = `${doc.data().Unidad47}`;
					var co47 = `${doc.data().Comentarios47}`;

					document.getElementById("op47").value = cod47;
					document.getElementById("descrip47").value = desc47;
					document.getElementById("mq47").value = mq47;
					document.getElementById("to47").value = ob47;
					document.getElementById("s47").value = su47;
					document.getElementById("estan47").value = es47;
					document.getElementById("tiem47").value = uni47;
					document.getElementById("comen47").value = co47;
					//-----------------48-----------------------------
					var cod48 = `${doc.data().Codigo48}`;
					var desc48 = `${doc.data().Descripcion48}`;
					var mq48 = `${doc.data().Maquina48}`;
					var ob48 = `${doc.data().Observado48}`;
					var su48 = `${doc.data().Suplementario48}`;
					var es48 = `${doc.data().Estandar48}`;
					var uni48 = `${doc.data().Unidad48}`;
					var co48 = `${doc.data().Comentarios48}`;

					document.getElementById("op48").value = cod48;
					document.getElementById("descrip48").value = desc48;
					document.getElementById("mq48").value = mq48;
					document.getElementById("to48").value = ob48;
					document.getElementById("s48").value = su48;
					document.getElementById("estan48").value = es48;
					document.getElementById("tiem48").value = uni48;
					document.getElementById("comen48").value = co48;
					//-----------------49-----------------------------
					var cod49 = `${doc.data().Codigo49}`;
					var desc49 = `${doc.data().Descripcion49}`;
					var mq49 = `${doc.data().Maquina49}`;
					var ob49 = `${doc.data().Observado49}`;
					var su49 = `${doc.data().Suplementario49}`;
					var es49 = `${doc.data().Estandar49}`;
					var uni49 = `${doc.data().Unidad49}`;
					var co49 = `${doc.data().Comentarios49}`;

					document.getElementById("op49").value = cod49;
					document.getElementById("descrip49").value = desc49;
					document.getElementById("mq49").value = mq49;
					document.getElementById("to49").value = ob49;
					document.getElementById("s49").value = su49;
					document.getElementById("estan49").value = es49;
					document.getElementById("tiem49").value = uni49;
					document.getElementById("comen49").value = co49;
					//-----------------50-----------------------------
					var cod50 = `${doc.data().Codigo50}`;
					var desc50 = `${doc.data().Descripcion50}`;
					var mq50 = `${doc.data().Maquina50}`;
					var ob50 = `${doc.data().Observado50}`;
					var su50 = `${doc.data().Suplementario50}`;
					var es50 = `${doc.data().Estandar50}`;
					var uni50 = `${doc.data().Unidad50}`;
					var co50 = `${doc.data().Comentarios50}`;

					document.getElementById("op50").value = cod50;
					document.getElementById("descrip50").value = desc50;
					document.getElementById("mq50").value = mq50;
					document.getElementById("to50").value = ob50;
					document.getElementById("s50").value = su50;
					document.getElementById("estan50").value = es50;
					document.getElementById("tiem50").value = uni50;
					document.getElementById("comen50").value = co50;

					db.collection("FotosCamisas").where("Referencia", "==", consultaref).where("Cliente", "==", consultaClient)
						.get()
						.then(function (querySnapshot) {
							querySnapshot.forEach(function (doc) {
								// doc.data() is never undefined for query doc snapshots
								console.log(doc.id, " => ", doc.data());
								var ur = `${doc.data().UrlFrente}`;


								actuCamiDel = function () {
									foto2 = false;

									var file = ($('#campoarchivo'))[0].files[0];

									console.log(file);

									if (!file) {

									}
									else {
										var storageRef = storageService.ref('/delantera/' + file.name);

										var uploadtask = storageRef.put(file);

										uploadtask.on('state_changed', function (snapshot) {

										}, function (error) {

											console.log(error);

										}, function () {

											console.log('Archivo o imagen subida Firebase');

											dowloadURLespalda2 = uploadtask.snapshot.downloadURL;

											console.log(dowloadURLespalda2);

											var enviarCliente = document.getElementById("cliente").value;
											var datoRef = document.getElementById("Referencia").value;

											var datoRef2 = datoRef.split(/\s+/).join('');



											var washingtonRef = db.collection("FotosCamisas").doc(doc.id);

											// Set the "capital" field of the city 'DC'
											return washingtonRef.update({
												Referencia: datoRef2,
												Cliente: enviarCliente,
												UrlFrente: dowloadURLespalda2
											})
												.then(() => {
													console.log("la foto trasera ha sido actualizada");
													foto1 = true;
												})
												.catch((error) => {
													// The document probably doesn't exist.
													console.error("Error updating document: ", error);
												});


										});
									}
								} // final


								db.collection("FotosCamisasEspal").where("Referencia", "==", consultaref).where("Cliente", "==", consultaClient)
									.get()
									.then(function (querySnapshot) {
										querySnapshot.forEach(function (doc) {
											// doc.data() is never undefined for query doc snapshots
											console.log(doc.id, " => ", doc.data());
											var ur2 = `${doc.data().UrlTrasera}`;

											actuCamiTras = function () {
												foto1 = false;

												var file2 = ($('#campoarchivo2'))[0].files[0];

												console.log(file2);

												if (!file2) {

												}
												else {
													var storageRef = storageService.ref('/trasera/' + file2.name);

													var uploadtask = storageRef.put(file2);

													uploadtask.on('state_changed', function (snapshot) {

													}, function (error) {

														console.log(error);

													}, function () {

														console.log('Archivo o imagen subida Firebase');

														dowloadURLespalda = uploadtask.snapshot.downloadURL;


														var enviarCliente = document.getElementById("cliente").value;
														var datoRef = document.getElementById("Referencia").value;

														var datoRef2 = datoRef.split(/\s+/).join('');

														var washingtonRef = db.collection("FotosCamisasEspal").doc(doc.id);

														// Set the "capital" field of the city 'DC'
														return washingtonRef.update({
															Referencia: datoRef2,
															Cliente: enviarCliente,
															UrlTrasera: dowloadURLespalda
														})
															.then(() => {
																console.log("la foto trasera ha sido actualizada");
																foto1 = true;
															})
															.catch((error) => {
																// The document probably doesn't exist.
																console.error("Error updating document: ", error);
															});


													});
												}
											} // final





											//-----------------leer imagenes-------------

											grande.src = ur;
											grandeTrase.src = ur2;



											//aqui iba edit1


											const tareas = document.getElementById('tareas');
											const tareasCompletadas = document.getElementById('tareasCompletadas');

											const listaTareas = Sortable.create(tareas, {
												group: {
													name: "lista-tareas",
													pull: true,
													put: true
												},
												animation: 150,
												easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
												handle: ".fas",
												filter: ".titulo",
												// ghostClass: "active",
												chosenClass: "active",
												//dragClass: "invisible"
												dataIdAttr: "data-identificador",
												store: {
													get: function () {
														Operacion = localStorage.getItem('lista-tareas');
														console.log('Orden 2' + Operacion)
														return Operacion ? Operacion.split('|') : [];
													}
													//},

													/*get: function () {
														 orden2 = localStorage.getItem('lista-tareas');
														console.log('Orden 2' + orden2)
														return orden2 ? orden2.split('|') : [];
													}*/
												},

												// onChoose: (evento) => { 
												// 	console.log('Se ha seleccionado un elemento')
												// },
												// onUnchoose: (evento) => { console.log('Se ha deseleccionado un elemento') },
												// onStart: (evento) => { console.log('Se inicio el drag and drop') },
												// onEnd: (evento) => { console.log('Finalizo el drag and drop') },
												// onAdd: (evento) => { console.log('Se agrego un elemento a la lista') },
												// onRemove: (evento) => { console.log('Se elimino un elemento a la lista') },
												// onUpdate: (evento) => { console.log('Se actualizo la lista') },
												// onFilter: (evento) => { console.log('Se intento mover un elemento filtrado') },
												// onMove: (evento) => { console.log('Se movio un elemento') },
												// onChange: (evento) => { console.log('Un elemento cambio de lugar') },
											});

											//---------

										});
									})

							});
						})


					//-------------



				});
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});

	}


	//-----------------------------------------------------------------------

	db.collection("Drag")//.where("capital", "==", true)
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
				Operacion = `${doc.data().Orden}`;

				const tareas = document.getElementById('tareas');
				const tareasCompletadas = document.getElementById('tareasCompletadas');

				const listaTareas = Sortable.create(tareas, {
					group: {
						name: "lista-tareas",
						pull: true,
						put: true
					},
					animation: 150,
					easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
					handle: ".fas",
					filter: ".titulo",
					chosenClass: "active",
					dataIdAttr: "data-identificador",
					store: {
						get: function () {
							Operacion = localStorage.getItem('lista-tareas');
							console.log('Orden 2' + Operacion)
							return Operacion ? Operacion.split('|') : [];
						}

					},


				});



			});
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

}

const listaTareasCompletadas = Sortable.create(tareasCompletadas, {
	group: {
		name: "lista-tareas",
		pull: true,
		put: true
	},
	animation: 150,
	easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
	handle: ".fas",
	filter: ".titulo",
	// ghostClass: "active",
	chosenClass: "active",
	//dragClass: "invisible"
});

const btnToggle = document.getElementById('toggle');
btnToggle.addEventListener('click', () => {
	const estado = listaTareas.option('disabled');
	listaTareas.option('disabled', !estado);

	if (estado) {
		btnToggle.textContent = "Bloquear";
	} else {
		btnToggle.textContent = "Desbloquear";
	}
});


function fotoTras() {  //para subir ambas imagenes 1era vez

	if (confirm("Seguro que desea adjuntar estos archivos?")) {

		


		uploadProfileImg();
		//subirCamiFren();
		camisaDel();

		Swal.fire(
			'Se han adjuntado las imagenes',
			'',
			'success'
		)
		document.getElementById("btnSubirFotos").style.display = "none"
		//document.getElementById("btnActuFotos").style.display="block"

	} else {

	}
}


//------------------------------EDITAR---------------------
function editar1() {
	//alert("Recuerde Calcular el tiempo antes de Actualizar el registro");

	if(document.getElementById("totaltiempo").value!=''){
		
	if (confirm("Seguro que desea ACTUALIZAR el registro?")) {


		Swal.fire(
			'Actualizacion exitosa!!!',
			'',
			'success'
		)


		edit1();
		actuCamiTras();
		actuCamiDel();

		//setInterval("actualizar()", 3000);






	}
	else {
		alert("Ha cancelado la Actualizacion");
	}

	}else{

		Swal.fire(
			'Debe calcular nuevamente el tiempo...',
			'',
			'error'
		)

	}





}

function deletear() {

	if (confirm("Seguro que desea ELIMINAR la Referencia?")) {

		elimi1();



		document.getElementById("Referencia").value = "";
		document.getElementById("cliente").value = "";

	} else {
		alert("Ha cancelado el proceso...");

	}
}





function MostrarTable() {

	test();
	test2();

}

test2 = function () {
	console.log('funcina2')
}


