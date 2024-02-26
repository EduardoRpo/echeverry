
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

//datosNuevos = function(){
    dataSet = new Array();
	var i = 1;


	db.collection("MaestroOperaciones")
		.orderBy("codigo", "asc").onSnapshot((querySnapshot) => {
			// tabl.innerHTML="";
			querySnapshot.forEach(function (doc) {
				// doc.data() is never undefined for query doc snapshots
				//console.log(doc.id, " => ", doc.data());
				var descrip = `${doc.data().descrip}`;
				var codigo = `${doc.data().codigo}`;
                var maquina = `${doc.data().maquina}`;
				var tiempoObse = `${doc.data().tiempoObse}`;

				// console.log("las referencias son"+re)

				dataSet.push([codigo, descrip,maquina,tiempoObse]);

				i = i + 1;



				$(document).ready(function () {
					var tablaSuma = $('#dtVerticalScrollExample2').DataTable({


						data: dataSet,
						"bDestroy": true,
						columns: [
							{ title: "Codigo" },
							{ title: "Referencia" },
                            { title: "Maquina" },
                            { title: "T.O" },



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


//}


//----------tabla clientes-------------------
dataSet2 = new Array();
var j = 1;


db.collection("MaestroClientes")
    .orderBy("Cliente", "asc").onSnapshot((querySnapshot) => {
        // tabl.innerHTML="";
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            var Cliente = `${doc.data().Cliente}`;
            var Observaciones = `${doc.data().Observaciones}`;
           
            // console.log("las referencias son"+re)

            dataSet2.push([Cliente, Observaciones]);

            j = j + 1;



            $(document).ready(function () {
                var tablaSuma2 = $('#dtVerticalScrollExample3').DataTable({


                    data: dataSet2,
                    "bDestroy": true,
                    columns: [
                        { title: "Cliente" },
                        { title: "Observaciones" },
                       


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



//-------------------------------------------


registroNuevo=function(){

    var query = document.getElementById('codigo').value;

    existe = '';

    db.collection("MaestroOperaciones").where("codigo", "==", query)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

                existe = doc.id;

            });
            console.log('test' + existe);
            if (existe != '') {
                console.log('entonces si existe');
                Swal.fire(
                    'Ya existe este Registro',
                    '',
                    'error'
                )
            }
            else {
                console.log('definitivamente no existe');
                Swal.fire(
                    'Creando Nuevo Registro!!!',
                    '',
                    'success'
                )
                //setInterval("location.reload()", 3000);
                //newRegister();

                //---------------------------------
                var codigo = document.getElementById('codigo').value;
                var maquina = document.getElementById('maquina').value;
                var tiempoObse = document.getElementById('tiempoObse').value;
                var descrip = document.getElementById('descrip').value;
                var fecha = new Date();

                // Add a new document with a generated id.
                db.collection("MaestroOperaciones").add({
                    codigo: codigo,
                    maquina: maquina,
                    tiempoObse: parseFloat(tiempoObse),
                    descrip: descrip,
                    Fecha: fecha,
                })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                        console.log('Registro exitoso')
                        document.getElementById('codigo').value='';
                        document.getElementById('maquina').value='';
                        document.getElementById('tiempoObse').value='';
                        document.getElementById('descrip').value='';
                        setInterval("location.reload()", 3000);
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                //---------------------------------
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


    //--------------------------------------

}


function ConsultaExis() {

    if(document.getElementById('codigo').value != '' && document.getElementById('maquina').value != '' && document.getElementById('tiempoObse').value != '' && document.getElementById('descrip').value != '' ){
        if (confirm("Seguro que desea continuar con el registro?")) {
            registroNuevo();
        }
        else{
    
        }
    }else{
        Swal.fire(
            'Llene todos los campos',
            '',
            'error'
        )
    }

    

    /* var docRef = db.collection("MaestroOperaciones");//.doc("SF");
 
     docRef.get().then((doc) => {
         if (doc.exists) {
             console.log("Document data:", doc.data());
         } else {
             // doc.data() will be undefined in this case
             console.log("No such document!");
         }
     }).catch((error) => {
         console.log("Error getting document:", error);
     });*/


    //-------------------------------------
    

}

function RegistOp() {



    if (existe != '') {
        console.log(' entonces si existe');
    }
    else {
        console.log(' definitivamente no existe');
        //newRegister();

    }



}

function Consulta() {

    var query = document.getElementById('codigo').value;
    existe2 = '';

    db.collection("MaestroOperaciones").where("codigo", "==", query)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                //var code = `${doc.data().codigo}`;
                var description = `${doc.data().descrip}`;
                var machine = `${doc.data().maquina}`;
                var timeOb = `${doc.data().tiempoObse}`;
                //var calendarr = `${doc.data().Fecha}`;

                existe2 = doc.id;

                document.getElementById('maquina').value = machine;
                document.getElementById('tiempoObse').value = timeOb;
                document.getElementById('descrip').value = description;


                //--------------actualizar registros---------------
                change = function () {
                    var codigo = document.getElementById('codigo').value;
                    var maquina = document.getElementById('maquina').value;
                    var tiempoObse = document.getElementById('tiempoObse').value;
                    var descrip = document.getElementById('descrip').value;
                    var fechaAct = new Date();

                    var washingtonRef = db.collection("MaestroOperaciones").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        codigo: codigo,
                        maquina: maquina,
                        tiempoObse: parseFloat(tiempoObse),
                        descrip: descrip,
                        //Fecha: fecha,
                        FechaActua: fechaAct,
                    })
                        .then(() => {
                            console.log("Document successfully updated!");
                            Swal.fire(
                                'Actualización exitosa!!!',
                                '',
                                'success'
                            )
                            setInterval("location.reload()", 3000);
                        })
                        .catch((error) => {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                }

                //-----------------------------eliminar--------------------

                elimi = function () {
                    db.collection("MaestroOperaciones").doc(doc.id).delete().then(function () {
                        // alert("Ha eliminado el Registro");
                        //limpiarV();
                        //document.getElementById('actualizarOP').style.display = 'none';
                        //document.getElementById('EliminarOP').style.display = 'none';
                        //document.getElementById('imprimirOP').style.display = 'none';
                        console.log("Document successfully deleted!");
                        Swal.fire(
                            'Documento eliminado!!!',
                            '',
                            'success'
                        )
                        setInterval("location.reload()", 3000);

                    }).catch(function (error) {
                        alert("No se ha podido eliminar el documento");
                        console.error("Error removing document: ", error);
                    });

                }

                //----------------------------------------------------------

            });
            if (existe2 != '') {
                //alert("Ya existe el Registro");
                //console.log('entonces si existe');
                
                /*Swal.fire(
                    'Ya existe el Registro',
                    '',
                    'error'
                )*/
            }
            else {
                console.log(' definitivamente no existe');
                Swal.fire(
                    'No existe el Registro buscado',
                    '',
                    'error'
                )

            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

}

function Actualizar() {
    change();
}


function Delete() {

    elimi();

}


function MostrarTable2(){
   //datosNuevos();
}


//Modulo Cliente
function RegistCli() {



    if (existe != '') {
        console.log(' entonces si existe');
    }
    else {
        console.log(' definitivamente no existe');
        //newRegister();

    }



}
registroNuevoCli=function(){

    var query = document.getElementById('cliente').value;

    existe = '';

    db.collection("MaestroClientes").where("Cliente", "==", query)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

                existe = doc.id;

            });
            console.log('test' + existe);
            if (existe != '') {
                console.log('entonces si existe');
                Swal.fire(
                    'Ya existe este Registro',
                    '',
                    'error'
                )
            }
            else {
                console.log('definitivamente no existe');
                Swal.fire(
                    'Creando Nuevo Registro!!!',
                    '',
                    'success'
                )
                //setInterval("location.reload()", 3000);
                //newRegister();

                //---------------------------------
                var cliente = document.getElementById('cliente').value;
                
                var observaciones = document.getElementById('observaciones').value;
                var fecha = new Date();

                // Add a new document with a generated id.
                db.collection("MaestroClientes").add({
                    Cliente: cliente,
                    Observaciones: observaciones,
                    
                    Fecha: fecha,
                })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                        console.log('Registro exitoso')
                        document.getElementById('cliente').value='';
                        document.getElementById('observaciones').value='';
                        
                        setInterval("location.reload()", 3000);
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                //---------------------------------
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


    //--------------------------------------

}

function ConsultaExisCli() {

    if(document.getElementById('cliente').value != '' && document.getElementById('observaciones').value != '' ){
        if (confirm("Seguro que desea continuar con el registro?")) {
            registroNuevoCli();
        }
        else{
    
        }
    }else{
        Swal.fire(
            'Llene todos los campos',
            '',
            'error'
        )
    }

    

    

}

function ConsultaCli() {

    var query = document.getElementById('cliente').value;
    existe2 = '';

    db.collection("MaestroClientes").where("Cliente", "==", query)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                //var code = `${doc.data().codigo}`;
                var Cliente = `${doc.data().Cliente}`;
                var Observaciones = `${doc.data().Observaciones}`;
                //var timeOb = `${doc.data().tiempoObse}`;
                //var calendarr = `${doc.data().Fecha}`;

                existe2 = doc.id;

                document.getElementById('cliente').value = Cliente;
                document.getElementById('observaciones').value = Observaciones;


                //--------------actualizar cliente---------------
                changeCli = function () {
                    var cliente = document.getElementById('cliente').value;
                    var observaciones = document.getElementById('observaciones').value;
                   
                    var fechaAct = new Date();

                    var washingtonRef = db.collection("MaestroClientes").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Cliente: cliente,
                        Observaciones: observaciones,
                        //Fecha: fecha,
                        FechaActua: fechaAct,
                    })
                        .then(() => {
                            console.log("Document successfully updated!");
                            Swal.fire(
                                'Actualización exitosa!!!',
                                '',
                                'success'
                            )
                            setInterval("location.reload()", 3000);
                        })
                        .catch((error) => {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                }

                //-----------------------------eliminar cliente--------------------

                elimiCli = function () {
                    db.collection("MaestroClientes").doc(doc.id).delete().then(function () {
                        // alert("Ha eliminado el Registro");
                        //limpiarV();
                        //document.getElementById('actualizarOP').style.display = 'none';
                        //document.getElementById('EliminarOP').style.display = 'none';
                        //document.getElementById('imprimirOP').style.display = 'none';
                        console.log("Document successfully deleted!");
                        Swal.fire(
                            'Documento eliminado!!!',
                            '',
                            'success'
                        )
                        setInterval("location.reload()", 3000);

                    }).catch(function (error) {
                        alert("No se ha podido eliminar el documento");
                        console.error("Error removing document: ", error);
                    });

                }

                //----------------------------------------------------------

            });
            if (existe2 != '') {
                //alert("Ya existe el Registro");
                //console.log('entonces si existe');
                
                /*Swal.fire(
                    'Ya existe el Registro',
                    '',
                    'error'
                )*/
            }
            else {
                console.log(' definitivamente no existe');
                Swal.fire(
                    'No existe el Registro buscado',
                    '',
                    'error'
                )

            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

}
function ActualizarCli() {
    changeCli();
}

function DeleteCli() {

    elimiCli();

}