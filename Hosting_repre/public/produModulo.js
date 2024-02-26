
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
var db = firebase.firestore();

function cerrarJornada() {

  if (confirm("Seguro que desea terminar la jornada?")) {
    // alert("Ya ha iniciado el Cronometro...");

    document.getElementById('sumatoriaCantidades').value = 0;
    audio.pause();
    Swal.fire(
      'Nos vemos mañana!!!',
      'Ha reiniciado el conteo de forma exitosa',
      'success'
    )

  } else {
  }



}

//--------------funcion boton suena---------------
var audio = document.getElementById('audio');
var btnPlay = document.getElementById('play');
var contador = 0;

function Play() {

  audio.play();

}
function detener() {

  audio.pause();
}

//---------------mensajes toast vanilla---------------
function msjPush() {
  var usuario = document.getElementById('nombre').value;


  if (usuario == 'Preparación 1') {
    db.collection("centroMensajesPr1").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;

          console.log('El Mensaje es:' + mensaje);

          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }


        });
      })
  }

  if (usuario == 'Preparación 2') {
    db.collection("centroMensajesPr2").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Ensamble 1') {
    db.collection("centroMensajesEn1").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Ensamble 2') {
    db.collection("centroMensajesEn2").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Apoyo preparacion 1') {
    db.collection("centroMensajesAPr1").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Apoyo preparacion 2') {
    db.collection("centroMensajesAPr2").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Apoyo ensamble 1') {
    db.collection("centroMensajesAen1").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Apoyo ensamble 2') {
    db.collection("centroMensajesAen2").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Terminación 1') {
    db.collection("centroMensajesT1").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Terminación 2') {
    db.collection("centroMensajesT2").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Terminación 3') {
    db.collection("centroMensajesT3").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Terminación 4') {
    db.collection("centroMensajesT4").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Pulida y Revisada 1') {
    db.collection("centroMensajesPyR1").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Pulida y Revisada 2') {
    db.collection("centroMensajesPyR2").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Ruedo 1') {
    db.collection("centroMensajesR1").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }
  if (usuario == 'Ruedo 2') {
    db.collection("centroMensajesR2").orderBy("Fecha", "asc").limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          mensaje = `${doc.data().Mensaje}`;
          usu = `${doc.data().Usuario}`;
          estado = `${doc.data().Estado}`;


          console.log('El Mensaje es:' + mensaje);


          if (estado == 'Activado') {
            VanillaToasts.create({
              title: 'Representaciones Echeverry',
              text: mensaje,
              type: 'info',
              icon: 'img/info.png',
              timeout: 16000,
            });

          } else {

          }

        });
      })
  }





}

//------------------------------------------------

tv = function () {
  tiemTrabajado1 = 0;
  comida = 0;
  tinto = 0;
  tinto2 = 0;

  Operacion = document.getElementById("operaci").value;
  Operacion2 = document.getElementById("operaci2").value;
  Operacion3 = document.getElementById("operaci3").value;
  Operacion4 = document.getElementById("operaci4").value;
  Operacion5 = document.getElementById("operaci5").value;
  Operacion6 = document.getElementById("operaci6").value;
  Operacion7 = document.getElementById("operaci7").value;
  Operacion8 = document.getElementById("operaci8").value;
  Operacion9 = document.getElementById("operaci9").value;

  var isChecked = document.getElementById('cbComida').checked;
  if (isChecked) {
    comida = 900;
    tinto = 0;
    tinto2 = 0;
  }
  var isChecked2 = document.getElementById('cbTinto').checked;
  if (isChecked2) {
    tinto = 480;
    comida = 0;
    tinto2 = 0;

  }
  var isChecked3 = document.getElementById('cbTinto2').checked;
  if (isChecked3) {
    tinto2 = 180;
    comida = 0;
    tinto = 0;
  }

  if (isChecked && isChecked2) {
    comida = 900;
    tinto = 480;
    tinto2 = 0;

  }
  if (isChecked2 && isChecked3) {
    tinto = 480;
    tinto2 = 180;
    comida = 0;

  }


  // Maqui=document.getElementById("mq").value;

  Operario = document.getElementById("nombre").value;
  cantidadElabo = document.getElementById("canti").value;
  tiemTrabajado1 = document.getElementById("resta").value;

  tiemTrabajado = parseFloat(tiemTrabajado1) - parseFloat(comida) - parseFloat(tinto) - parseFloat(tinto2);

  // var tabl=document.getElementById("tabla");
  var consultaOP = document.getElementById("op").value;
  RendimientoOp = 0;
  unidadesSeg = 0;
  relaTiemp = 0;
  tiempEstan = 0;
  TiempoStdTotal = 0;
  tiempEstan1 = 0;
  tiempEstan2 = 0;
  tiempEstan3 = 0;
  tiempEstan4 = 0;
  tiempEstan5 = 0;
  tiempEstan6 = 0;
  tiempEstan7 = 0;
  tiempEstan8 = 0;
  tiempEstan9 = 0;


  unidadSTD = 0
  Unidad1 = 0;
  Unidad2 = 0;
  Unidad3 = 0;
  Unidad4 = 0;
  Unidad5 = 0;
  Unidad6 = 0;
  Unidad7 = 0;
  Unidad8 = 0;
  Unidad9 = 0;




  db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        canti = `${doc.data().Cantidad}`;
        consultaref = `${doc.data().Referenc}`;


        //document.getElementById("cantiOp").value=canti;
        // document.getElementById("RefOp").value=consultaref;




        //--------------------------------------consulta global-------------------------------------
        db.collection("FichaTecniGlobal").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
          .get()
          .then(function (querySnapshot) {
            //  tabl.innerHTML ="";
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());


              OpFic1 = `${doc.data().Codigo}`;
              UniFich1 = parseInt(`${doc.data().Unidad}`);
              estan1 = parseInt(`${doc.data().Estandar}`);

              OpFic2 = `${doc.data().Codigo2}`;
              UniFich2 = parseInt(`${doc.data().Unidad2}`);
              estan2 = parseInt(`${doc.data().Estandar2}`);

              OpFic3 = `${doc.data().Codigo3}`;
              UniFich3 = parseInt(`${doc.data().Unidad3}`);
              estan3 = parseInt(`${doc.data().Estandar3}`);

              OpFic4 = `${doc.data().Codigo4}`;
              UniFich4 = parseInt(`${doc.data().Unidad4}`);
              console.log(UniFich4);
              estan4 = parseInt(`${doc.data().Estandar4}`);

              OpFic5 = `${doc.data().Codigo5}`;
              UniFich5 = parseInt(`${doc.data().Unidad5}`);
              estan5 = parseInt(`${doc.data().Estandar5}`);

              OpFic6 = `${doc.data().Codigo6}`;
              UniFich6 = parseInt(`${doc.data().Unidad6}`);
              estan6 = parseInt(`${doc.data().Estandar6}`);

              OpFic7 = `${doc.data().Codigo7}`;
              UniFich7 = parseInt(`${doc.data().Unidad7}`);
              estan7 = parseInt(`${doc.data().Estandar7}`);

              OpFic8 = `${doc.data().Codigo8}`;
              UniFich8 = parseInt(`${doc.data().Unidad8}`);
              estan8 = parseInt(`${doc.data().Estandar8}`);

              OpFic9 = `${doc.data().Codigo9}`;
              UniFich9 = parseInt(`${doc.data().Unidad9}`);
              estan9 = parseInt(`${doc.data().Estandar9}`);

              OpFic10 = `${doc.data().Codigo10}`;
              UniFich10 = parseInt(`${doc.data().Unidad10}`);
              estan10 = parseInt(`${doc.data().Estandar10}`);

              OpFic11 = `${doc.data().Codigo11}`;
              UniFich11 = parseInt(`${doc.data().Unidad11}`);
              estan11 = parseInt(`${doc.data().Estandar11}`);

              OpFic12 = `${doc.data().Codigo12}`;
              UniFich12 = parseInt(`${doc.data().Unidad12}`);
              estan12 = parseInt(`${doc.data().Estandar12}`);

              OpFic13 = `${doc.data().Codigo13}`;
              UniFich13 = parseInt(`${doc.data().Unidad13}`);
              estan13 = parseInt(`${doc.data().Estandar13}`);

              OpFic14 = `${doc.data().Codigo14}`;
              UniFich14 = parseInt(`${doc.data().Unidad14}`);
              estan14 = parseInt(`${doc.data().Estandar14}`);

              OpFic15 = `${doc.data().Codigo15}`;
              UniFich15 = parseInt(`${doc.data().Unidad15}`);
              estan15 = parseInt(`${doc.data().Estandar15}`);

              OpFic16 = `${doc.data().Codigo16}`;
              UniFich16 = parseInt(`${doc.data().Unidad16}`);
              estan16 = parseInt(`${doc.data().Estandar16}`);

              OpFic17 = `${doc.data().Codigo17}`;
              UniFich17 = parseInt(`${doc.data().Unidad17}`);
              estan17 = parseInt(`${doc.data().Estandar17}`);

              OpFic18 = `${doc.data().Codigo18}`;
              UniFich18 = parseInt(`${doc.data().Unidad18}`);
              estan18 = parseInt(`${doc.data().Estandar18}`);

              OpFic19 = `${doc.data().Codigo19}`;
              UniFich19 = parseInt(`${doc.data().Unidad19}`);
              estan19 = parseInt(`${doc.data().Estandar19}`);

              OpFic20 = `${doc.data().Codigo20}`;
              UniFich20 = parseInt(`${doc.data().Unidad20}`);
              estan20 = parseInt(`${doc.data().Estandar20}`);

              OpFic21 = `${doc.data().Codigo21}`;
              UniFich21 = parseInt(`${doc.data().Unidad21}`);
              estan21 = parseInt(`${doc.data().Estandar21}`);

              OpFic22 = `${doc.data().Codigo22}`;
              UniFich22 = parseInt(`${doc.data().Unidad22}`);
              estan22 = parseInt(`${doc.data().Estandar22}`);

              OpFic23 = `${doc.data().Codigo23}`;
              UniFich23 = parseInt(`${doc.data().Unidad23}`);
              estan23 = parseInt(`${doc.data().Estandar23}`);

              OpFic24 = `${doc.data().Codigo24}`;
              UniFich24 = parseInt(`${doc.data().Unidad24}`);
              estan24 = parseInt(`${doc.data().Estandar24}`);

              OpFic25 = `${doc.data().Codigo25}`;
              UniFich25 = parseInt(`${doc.data().Unidad25}`);
              estan25 = parseInt(`${doc.data().Estandar25}`);

              OpFic26 = `${doc.data().Codigo26}`;
              UniFich26 = parseInt(`${doc.data().Unidad26}`);
              estan26 = parseInt(`${doc.data().Estandar26}`);

              OpFic27 = `${doc.data().Codigo27}`;
              UniFich27 = parseInt(`${doc.data().Unidad27}`);
              estan27 = parseInt(`${doc.data().Estandar27}`);

              OpFic28 = `${doc.data().Codigo28}`;
              UniFich28 = parseInt(`${doc.data().Unidad28}`);
              estan28 = parseInt(`${doc.data().Estandar28}`);

              OpFic29 = `${doc.data().Codigo29}`;
              UniFich29 = parseInt(`${doc.data().Unidad29}`);
              estan29 = parseInt(`${doc.data().Estandar29}`);

              OpFic30 = `${doc.data().Codigo30}`;
              UniFich30 = parseInt(`${doc.data().Unidad30}`);
              estan30 = parseInt(`${doc.data().Estandar30}`);

              OpFic31 = `${doc.data().Codigo31}`;
              UniFich31 = parseInt(`${doc.data().Unidad31}`);
              estan31 = parseInt(`${doc.data().Estandar31}`);

              OpFic32 = `${doc.data().Codigo32}`;
              UniFich32 = parseInt(`${doc.data().Unidad32}`);
              estan32 = parseInt(`${doc.data().Estandar32}`);

              OpFic33 = `${doc.data().Codigo33}`;
              UniFich33 = parseInt(`${doc.data().Unidad33}`);
              estan33 = parseInt(`${doc.data().Estandar33}`);

              OpFic34 = `${doc.data().Codigo34}`;
              UniFich34 = parseInt(`${doc.data().Unidad34}`);
              estan34 = parseInt(`${doc.data().Estandar34}`);

              OpFic35 = `${doc.data().Codigo35}`;
              UniFich35 = parseInt(`${doc.data().Unidad35}`);
              estan35 = parseInt(`${doc.data().Estandar35}`);

              OpFic36 = `${doc.data().Codigo36}`;
              UniFich36 = parseInt(`${doc.data().Unidad36}`);
              estan36 = parseInt(`${doc.data().Estandar36}`);

              OpFic37 = `${doc.data().Codigo37}`;
              UniFich37 = parseInt(`${doc.data().Unidad37}`);
              estan37 = parseInt(`${doc.data().Estandar37}`);

              OpFic38 = `${doc.data().Codigo38}`;
              UniFich38 = parseInt(`${doc.data().Unidad38}`);
              estan38 = parseInt(`${doc.data().Estandar38}`);

              OpFic39 = `${doc.data().Codigo39}`;
              UniFich39 = parseInt(`${doc.data().Unidad39}`);
              estan39 = parseInt(`${doc.data().Estandar39}`);

              OpFic40 = `${doc.data().Codigo40}`;
              UniFich40 = parseInt(`${doc.data().Unidad40}`);
              estan40 = parseInt(`${doc.data().Estandar40}`);

              OpFic41 = `${doc.data().Codigo41}`;
              UniFich41 = parseInt(`${doc.data().Unidad41}`);
              estan41 = parseInt(`${doc.data().Estandar41}`);

              OpFic42 = `${doc.data().Codigo42}`;
              UniFich42 = parseInt(`${doc.data().Unidad42}`);
              estan42 = parseInt(`${doc.data().Estandar42}`);

              OpFic43 = `${doc.data().Codigo43}`;
              UniFich43 = parseInt(`${doc.data().Unidad43}`);
              estan43 = parseInt(`${doc.data().Estandar43}`);

              OpFic44 = `${doc.data().Codigo44}`;
              UniFich44 = parseInt(`${doc.data().Unidad44}`);
              estan44 = parseInt(`${doc.data().Estandar44}`);

              OpFic45 = `${doc.data().Codigo45}`;
              UniFich45 = parseInt(`${doc.data().Unidad45}`);
              estan45 = parseInt(`${doc.data().Estandar45}`);

              OpFic46 = `${doc.data().Codigo46}`;
              UniFich46 = parseInt(`${doc.data().Unidad46}`);
              estan46 = parseInt(`${doc.data().Estandar46}`);

              OpFic47 = `${doc.data().Codigo47}`;
              UniFich47 = parseInt(`${doc.data().Unidad47}`);
              estan47 = parseInt(`${doc.data().Estandar47}`);

              OpFic48 = `${doc.data().Codigo48}`;
              UniFich48 = parseInt(`${doc.data().Unidad48}`);
              estan48 = parseInt(`${doc.data().Estandar48}`);

              OpFic49 = `${doc.data().Codigo49}`;
              UniFich49 = parseInt(`${doc.data().Unidad49}`);
              estan49 = parseInt(`${doc.data().Estandar49}`);

              OpFic50 = `${doc.data().Codigo50}`;
              UniFich50 = parseInt(`${doc.data().Unidad50}`);
              estan50 = parseInt(`${doc.data().Estandar50}`);





              if (Operacion == OpFic1) {
                tiempEstan1 = estan1;
                Unidad1 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion == OpFic2) {
                tiempEstan1 = estan2;

                Unidad1 = UniFich2;
                //console.log("el tiempo en la posicion 1: "+tiempEstan1);

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion == OpFic3) {
                tiempEstan1 = estan3;

                Unidad1 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion == OpFic4) {
                tiempEstan1 = estan4;

                Unidad1 = UniFich4;


              }
              if (Operacion == OpFic5) {
                tiempEstan1 = estan5;

                Unidad1 = UniFich5;


              }
              if (Operacion == OpFic6) {
                tiempEstan1 = estan6;

                Unidad1 = UniFich6;


              }
              if (Operacion == OpFic7) {
                tiempEstan1 = estan7;

                Unidad1 = UniFich7;

              }
              if (Operacion == OpFic8) {
                tiempEstan1 = estan8;

                Unidad1 = UniFich8;


              }
              if (Operacion == OpFic9) {
                tiempEstan1 = estan9;

                Unidad1 = UniFich9;


              }
              if (Operacion == OpFic10) {
                tiempEstan1 = estan10;

                Unidad1 = UniFich10;

              }
              if (Operacion == OpFic11) {
                tiempEstan1 = estan11;

                Unidad1 = UniFich11;


              }
              if (Operacion == OpFic12) {
                tiempEstan1 = estan12;

                Unidad1 = UniFich12;


              }
              if (Operacion == OpFic13) {
                tiempEstan1 = estan13;

                Unidad1 = UniFich13;


              }
              if (Operacion == OpFic14) {
                tiempEstan1 = estan14;

                Unidad1 = UniFich14;


              }
              if (Operacion == OpFic15) {
                tiempEstan1 = estan15;

                Unidad1 = UniFich15;

              }
              if (Operacion == OpFic16) {
                tiempEstan1 = estan16;

                Unidad1 = UniFich16;


              }
              if (Operacion == OpFic17) {
                tiempEstan1 = estan17;

                Unidad1 = UniFich17;


              }
              if (Operacion == OpFic18) {
                tiempEstan1 = estan18;

                Unidad1 = UniFich18;

              }
              if (Operacion == OpFic19) {
                tiempEstan1 = estan19;

                Unidad1 = UniFich19;


              }
              if (Operacion == OpFic20) {
                tiempEstan1 = estan20;

                Unidad1 = UniFich20;


              }
              if (Operacion == OpFic21) {
                tiempEstan1 = estan21;

                Unidad1 = UniFich21;


              }
              if (Operacion == OpFic22) {
                tiempEstan1 = estan22;

                Unidad1 = UniFich22;


              }
              if (Operacion == OpFic23) {
                tiempEstan1 = estan23;

                Unidad1 = UniFich23;


              }
              if (Operacion == OpFic24) {
                tiempEstan1 = estan24;

                Unidad1 = UniFich24;

              }
              if (Operacion == OpFic25) {
                tiempEstan1 = estan25;

                Unidad1 = UniFich25;


              }
              if (Operacion == OpFic26) {
                tiempEstan1 = estan26;

                Unidad1 = UniFich26;


              }
              if (Operacion == OpFic27) {
                tiempEstan1 = estan27;

                Unidad1 = UniFich27;


              }
              if (Operacion == OpFic28) {
                tiempEstan1 = estan28;

                Unidad1 = UniFich28;


              }
              if (Operacion == OpFic29) {
                tiempEstan1 = estan29;

                Unidad1 = UniFich29;


              }
              if (Operacion == OpFic30) {
                tiempEstan1 = estan30;

                Unidad1 = UniFich30;


              }

              if (Operacion == OpFic31) {
                tiempEstan1 = estan31;

                Unidad1 = UniFich31;


              }
              if (Operacion == OpFic32) {
                tiempEstan1 = estan32;

                Unidad1 = UniFich32;

              }
              if (Operacion == OpFic33) {
                tiempEstan1 = estan33;

                Unidad1 = UniFich33;

              }
              if (Operacion == OpFic34) {
                tiempEstan1 = estan34;

                Unidad1 = UniFich34;

              }
              if (Operacion == OpFic35) {
                tiempEstan1 = estan35;

                Unidad1 = UniFich35;


              }
              if (Operacion == OpFic36) {
                tiempEstan1 = estan36;

                Unidad1 = UniFich36;


              }
              if (Operacion == OpFic37) {
                tiempEstan1 = estan37;

                Unidad1 = UniFich37;

              }
              if (Operacion == OpFic38) {
                tiempEstan1 = estan38;

                Unidad1 = UniFich38;

              }
              if (Operacion == OpFic39) {
                tiempEstan1 = estan39;

                Unidad1 = UniFich39;


              }
              if (Operacion == OpFic40) {
                tiempEstan1 = estan40;

                Unidad1 = UniFich40;


              }
              if (Operacion == OpFic41) {
                tiempEstan1 = estan41;

                Unidad1 = UniFich41;


              }
              if (Operacion == OpFic42) {
                tiempEstan1 = estan42;

                Unidad1 = UniFich42;


              }
              if (Operacion == OpFic43) {
                tiempEstan1 = estan43;

                Unidad1 = UniFich43;


              }
              if (Operacion == OpFic44) {
                tiempEstan1 = estan44;

                Unidad1 = UniFich44;


              }
              if (Operacion == OpFic45) {
                tiempEstan1 = estan45;

                Unidad1 = UniFich45;

              }
              if (Operacion == OpFic46) {
                tiempEstan1 = estan46;

                Unidad1 = UniFich46;

              }
              if (Operacion == OpFic47) {
                tiempEstan1 = estan47;

                Unidad1 = UniFich47;


              }
              if (Operacion == OpFic48) {
                tiempEstan1 = estan48;

                Unidad1 = UniFich48;


              }
              if (Operacion == OpFic49) {
                tiempEstan1 = estan49;

                Unidad1 = UniFich49;


              }
              if (Operacion == OpFic50) {
                tiempEstan1 = estan50;

                Unidad1 = UniFich50;


              }

              //---------------------------------------condicion 2---------------------

              if (Operacion2 == OpFic1) {
                tiempEstan2 = estan1;
                Unidad2 = UniFich1;



              }
              if (Operacion2 == OpFic2) {
                tiempEstan2 = estan2;

                Unidad2 = UniFich2;




              }
              if (Operacion2 == OpFic3) {
                tiempEstan2 = estan3;

                Unidad2 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion2 == OpFic4) {
                tiempEstan2 = estan4;

                Unidad2 = UniFich4;


              }
              if (Operacion2 == OpFic5) {
                tiempEstan2 = estan5;

                Unidad2 = UniFich5;


              }
              if (Operacion2 == OpFic6) {
                tiempEstan2 = estan6;

                Unidad2 = UniFich6;


              }
              if (Operacion2 == OpFic7) {
                tiempEstan2 = estan7;

                Unidad2 = UniFich7;

              }
              if (Operacion2 == OpFic8) {
                tiempEstan2 = estan8;

                Unidad2 = UniFich8;


              }
              if (Operacion2 == OpFic9) {
                tiempEstan2 = estan9;

                Unidad2 = UniFich9;


              }
              if (Operacion2 == OpFic10) {
                tiempEstan2 = estan10;

                Unidad2 = UniFich10;

              }
              if (Operacion2 == OpFic11) {
                tiempEstan2 = estan11;

                Unidad2 = UniFich11;


              }
              if (Operacion2 == OpFic12) {
                tiempEstan2 = estan12;

                Unidad2 = UniFich12;


              }
              if (Operacion2 == OpFic13) {
                tiempEstan2 = estan13;

                Unidad2 = UniFich13;


              }
              if (Operacion2 == OpFic14) {
                tiempEstan2 = estan14;

                Unidad2 = UniFich14;


              }
              if (Operacion2 == OpFic15) {
                tiempEstan2 = estan15;

                Unidad2 = UniFich15;

              }
              if (Operacion2 == OpFic16) {
                tiempEstan2 = estan16;

                Unidad2 = UniFich16;


              }
              if (Operacion2 == OpFic17) {
                tiempEstan2 = estan17;

                Unidad2 = UniFich17;


              }
              if (Operacion2 == OpFic18) {
                tiempEstan2 = estan18;

                Unidad2 = UniFich18;

              }
              if (Operacion2 == OpFic19) {
                tiempEstan2 = estan19;

                Unidad2 = UniFich19;


              }
              if (Operacion2 == OpFic20) {
                tiempEstan2 = estan20;

                Unidad2 = UniFich20;


              }
              if (Operacion2 == OpFic21) {
                tiempEstan2 = estan21;

                Unidad2 = UniFich21;


              }
              if (Operacion2 == OpFic22) {
                tiempEstan2 = estan22;

                Unidad2 = UniFich22;


              }
              if (Operacion2 == OpFic23) {
                tiempEstan2 = estan23;

                Unidad2 = UniFich23;


              }
              if (Operacion2 == OpFic24) {
                tiempEstan2 = estan24;

                Unidad2 = UniFich24;

              }
              if (Operacion2 == OpFic25) {
                tiempEstan2 = estan25;

                Unidad2 = UniFich25;


              }
              if (Operacion2 == OpFic26) {
                tiempEstan2 = estan26;

                Unidad2 = UniFich26;


              }
              if (Operacion2 == OpFic27) {
                tiempEstan2 = estan27;

                Unidad2 = UniFich27;


              }
              if (Operacion2 == OpFic28) {
                tiempEstan2 = estan28;

                Unidad2 = UniFich28;


              }
              if (Operacion2 == OpFic29) {
                tiempEstan2 = estan29;

                Unidad2 = UniFich29;


              }
              if (Operacion2 == OpFic30) {
                tiempEstan2 = estan30;

                Unidad2 = UniFich30;


              }

              if (Operacion2 == OpFic31) {
                tiempEstan2 = estan31;

                Unidad2 = UniFich31;


              }
              if (Operacion2 == OpFic32) {
                tiempEstan2 = estan32;

                Unidad2 = UniFich32;

              }
              if (Operacion2 == OpFic33) {
                tiempEstan2 = estan33;

                Unidad2 = UniFich33;

              }
              if (Operacion2 == OpFic34) {
                tiempEstan2 = estan34;

                Unidad2 = UniFich34;

              }
              if (Operacion2 == OpFic35) {
                tiempEstan2 = estan35;

                Unidad2 = UniFich35;


              }
              if (Operacion2 == OpFic36) {
                tiempEstan2 = estan36;

                Unidad2 = UniFich36;


              }
              if (Operacion2 == OpFic37) {
                tiempEstan2 = estan37;

                Unidad2 = UniFich37;

              }
              if (Operacion2 == OpFic38) {
                tiempEstan2 = estan38;

                Unidad2 = UniFich38;

              }
              if (Operacion2 == OpFic39) {
                tiempEstan2 = estan39;

                Unidad2 = UniFich39;


              }
              if (Operacion2 == OpFic40) {
                tiempEstan2 = estan40;

                Unidad2 = UniFich40;


              }
              if (Operacion2 == OpFic41) {
                tiempEstan2 = estan41;

                Unidad2 = UniFich41;


              }
              if (Operacion2 == OpFic42) {
                tiempEstan2 = estan42;

                Unidad2 = UniFich42;


              }
              if (Operacion2 == OpFic43) {
                tiempEstan2 = estan43;

                Unidad2 = UniFich43;


              }
              if (Operacion2 == OpFic44) {
                tiempEstan2 = estan44;

                Unidad2 = UniFich44;


              }
              if (Operacion2 == OpFic45) {
                tiempEstan2 = estan45;

                Unidad2 = UniFich45;

              }
              if (Operacion2 == OpFic46) {
                tiempEstan2 = estan46;

                Unidad2 = UniFich46;

              }
              if (Operacion2 == OpFic47) {
                tiempEstan2 = estan47;

                Unidad2 = UniFich47;


              }
              if (Operacion2 == OpFic48) {
                tiempEstan2 = estan48;

                Unidad2 = UniFich48;


              }
              if (Operacion2 == OpFic49) {
                tiempEstan2 = estan49;

                Unidad2 = UniFich49;


              }
              if (Operacion2 == OpFic50) {
                tiempEstan2 = estan50;

                Unidad2 = UniFich50;


              }
              //-----------------------------------3---------------------------------------
              if (Operacion3 == OpFic1) {
                tiempEstan3 = estan1;
                Unidad3 = UniFich1;



              }
              if (Operacion3 == OpFic2) {
                tiempEstan3 = estan2;

                Unidad3 = UniFich2;



              }
              if (Operacion3 == OpFic3) {
                tiempEstan3 = estan3;

                Unidad3 = UniFich3;



              }
              if (Operacion3 == OpFic4) {
                tiempEstan3 = estan4;

                Unidad3 = UniFich4;


              }
              if (Operacion3 == OpFic5) {
                tiempEstan3 = estan5;

                Unidad3 = UniFich5;




              }
              if (Operacion3 == OpFic6) {
                tiempEstan3 = estan6;

                Unidad3 = UniFich6;


              }
              if (Operacion3 == OpFic7) {
                tiempEstan3 = estan7;

                Unidad3 = UniFich7;

              }
              if (Operacion3 == OpFic8) {
                tiempEstan3 = estan8;

                Unidad3 = UniFich8;


              }
              if (Operacion3 == OpFic9) {
                tiempEstan3 = estan9;

                Unidad3 = UniFich9;


              }
              if (Operacion3 == OpFic10) {
                tiempEstan3 = estan10;

                Unidad3 = UniFich10;

              }
              if (Operacion3 == OpFic11) {
                tiempEstan3 = estan11;

                Unidad3 = UniFich11;


              }
              if (Operacion3 == OpFic12) {
                tiempEstan3 = estan12;

                Unidad3 = UniFich12;


              }
              if (Operacion3 == OpFic13) {
                tiempEstan3 = estan13;

                Unidad3 = UniFich13;


              }
              if (Operacion3 == OpFic14) {
                tiempEstan3 = estan14;

                Unidad3 = UniFich14;


              }
              if (Operacion3 == OpFic15) {
                tiempEstan3 = estan15;

                Unidad3 = UniFich15;

              }
              if (Operacion3 == OpFic16) {
                tiempEstan3 = estan16;

                Unidad3 = UniFich16;


              }
              if (Operacion3 == OpFic17) {
                tiempEstan3 = estan17;

                Unidad3 = UniFich17;


              }
              if (Operacion3 == OpFic18) {
                tiempEstan3 = estan18;

                Unidad3 = UniFich18;

              }
              if (Operacion3 == OpFic19) {
                tiempEstan3 = estan19;

                Unidad3 = UniFich19;


              }
              if (Operacion3 == OpFic20) {
                tiempEstan3 = estan20;

                Unidad3 = UniFich20;


              }
              if (Operacion3 == OpFic21) {
                tiempEstan3 = estan21;

                Unidad3 = UniFich21;


              }
              if (Operacion3 == OpFic22) {
                tiempEstan3 = estan22;

                Unidad3 = UniFich22;


              }
              if (Operacion3 == OpFic23) {
                tiempEstan3 = estan23;

                Unidad3 = UniFich23;


              }
              if (Operacion3 == OpFic24) {
                tiempEstan3 = estan24;

                Unidad3 = UniFich24;

              }
              if (Operacion3 == OpFic25) {
                tiempEstan3 = estan25;

                Unidad3 = UniFich25;


              }
              if (Operacion3 == OpFic26) {
                tiempEstan3 = estan26;

                Unidad3 = UniFich26;


              }
              if (Operacion3 == OpFic27) {
                tiempEstan3 = estan27;

                Unidad3 = UniFich27;


              }
              if (Operacion3 == OpFic28) {
                tiempEstan3 = estan28;

                Unidad3 = UniFich28;


              }
              if (Operacion3 == OpFic29) {
                tiempEstan3 = estan29;

                Unidad3 = UniFich29;


              }
              if (Operacion3 == OpFic30) {
                tiempEstan3 = estan30;

                Unidad3 = UniFich30;


              }

              if (Operacion3 == OpFic31) {
                tiempEstan3 = estan31;

                Unidad3 = UniFich31;


              }
              if (Operacion3 == OpFic32) {
                tiempEstan3 = estan32;

                Unidad3 = UniFich32;

              }
              if (Operacion3 == OpFic33) {
                tiempEstan3 = estan33;

                Unidad3 = UniFich33;

              }
              if (Operacion3 == OpFic34) {
                tiempEstan3 = estan34;

                Unidad3 = UniFich34;

              }
              if (Operacion3 == OpFic35) {
                tiempEstan3 = estan35;

                Unidad3 = UniFich35;


              }
              if (Operacion3 == OpFic36) {
                tiempEstan3 = estan36;

                Unidad3 = UniFich36;


              }
              if (Operacion3 == OpFic37) {
                tiempEstan3 = estan37;

                Unidad3 = UniFich37;

              }
              if (Operacion3 == OpFic38) {
                tiempEstan3 = estan38;

                Unidad3 = UniFich38;

              }
              if (Operacion3 == OpFic39) {
                tiempEstan3 = estan39;

                Unidad3 = UniFich39;


              }
              if (Operacion3 == OpFic40) {
                tiempEstan3 = estan40;

                Unidad3 = UniFich40;


              }
              if (Operacion3 == OpFic41) {
                tiempEstan3 = estan41;

                Unidad3 = UniFich41;


              }
              if (Operacion3 == OpFic42) {
                tiempEstan3 = estan42;

                Unidad3 = UniFich42;


              }
              if (Operacion3 == OpFic43) {
                tiempEstan3 = estan43;

                Unidad3 = UniFich43;


              }
              if (Operacion3 == OpFic44) {
                tiempEstan3 = estan44;

                Unidad3 = UniFich44;


              }
              if (Operacion3 == OpFic45) {
                tiempEstan3 = estan45;

                Unidad3 = UniFich45;

              }
              if (Operacion3 == OpFic46) {
                tiempEstan3 = estan46;

                Unidad3 = UniFich46;

              }
              if (Operacion3 == OpFic47) {
                tiempEstan3 = estan47;

                Unidad3 = UniFich47;


              }
              if (Operacion3 == OpFic48) {
                tiempEstan3 = estan48;

                Unidad3 = UniFich48;


              }
              if (Operacion3 == OpFic49) {
                tiempEstan3 = estan49;

                Unidad3 = UniFich49;


              }
              if (Operacion3 == OpFic50) {
                tiempEstan3 = estan50;

                Unidad3 = UniFich50;


              }

              //----------------------------------------------4-----------------------------------------

              if (Operacion4 == OpFic1) {
                tiempEstan4 = estan1;
                Unidad4 = UniFich1;



              }
              if (Operacion4 == OpFic2) {
                tiempEstan4 = estan2;

                Unidad4 = UniFich2;



              }
              if (Operacion4 == OpFic3) {
                tiempEstan4 = estan3;

                Unidad4 = UniFich3;


              }
              if (Operacion4 == OpFic4) {
                tiempEstan4 = estan4;

                Unidad4 = UniFich4;


              }
              if (Operacion4 == OpFic5) {
                tiempEstan4 = estan5;

                Unidad4 = UniFich5;


              }
              if (Operacion4 == OpFic6) {
                tiempEstan4 = estan6;

                Unidad4 = UniFich6;


              }
              if (Operacion4 == OpFic7) {
                tiempEstan4 = estan7;

                Unidad4 = UniFich7;

              }
              if (Operacion4 == OpFic8) {
                tiempEstan4 = estan8;

                Unidad4 = UniFich8;


              }
              if (Operacion4 == OpFic9) {
                tiempEstan4 = estan9;

                Unidad4 = UniFich9;


              }
              if (Operacion4 == OpFic10) {
                tiempEstan4 = estan10;

                Unidad4 = UniFich10;


              }
              if (Operacion4 == OpFic11) {
                tiempEstan4 = estan11;

                Unidad4 = UniFich11;


              }
              if (Operacion4 == OpFic12) {
                tiempEstan4 = estan12;

                Unidad4 = UniFich12;


              }
              if (Operacion4 == OpFic13) {
                tiempEstan4 = estan13;

                Unidad4 = UniFich13;


              }
              if (Operacion4 == OpFic14) {
                tiempEstan4 = estan14;

                Unidad4 = UniFich14;



              }
              if (Operacion4 == OpFic15) {
                tiempEstan4 = estan15;

                Unidad4 = UniFich15;

              }
              if (Operacion4 == OpFic16) {
                tiempEstan4 = estan16;

                Unidad4 = UniFich16;


              }
              if (Operacion4 == OpFic17) {
                tiempEstan4 = estan17;

                Unidad4 = UniFich17;


              }
              if (Operacion4 == OpFic18) {
                tiempEstan4 = estan18;

                Unidad4 = UniFich18;

              }
              if (Operacion4 == OpFic19) {
                tiempEstan4 = estan19;

                Unidad4 = UniFich19;


              }
              if (Operacion4 == OpFic20) {
                tiempEstan4 = estan20;

                Unidad4 = UniFich20;


              }
              if (Operacion4 == OpFic21) {
                tiempEstan4 = estan21;

                Unidad4 = UniFich21;


              }
              if (Operacion4 == OpFic22) {
                tiempEstan4 = estan22;

                Unidad4 = UniFich22;


              }
              if (Operacion4 == OpFic23) {
                tiempEstan4 = estan23;

                Unidad4 = UniFich23;


              }
              if (Operacion4 == OpFic24) {
                tiempEstan4 = estan24;

                Unidad4 = UniFich24;

              }
              if (Operacion4 == OpFic25) {
                tiempEstan4 = estan25;

                Unidad4 = UniFich25;


              }
              if (Operacion4 == OpFic26) {
                tiempEstan4 = estan26;

                Unidad4 = UniFich26;


              }
              if (Operacion4 == OpFic27) {
                tiempEstan4 = estan27;

                Unidad4 = UniFich27;


              }
              if (Operacion4 == OpFic28) {
                tiempEstan4 = estan28;

                Unidad4 = UniFich28;


              }
              if (Operacion4 == OpFic29) {
                tiempEstan4 = estan29;

                Unidad4 = UniFich29;


              }
              if (Operacion4 == OpFic30) {
                tiempEstan4 = estan30;

                Unidad4 = UniFich30;


              }

              if (Operacion4 == OpFic31) {
                tiempEstan4 = estan31;

                Unidad4 = UniFich31;


              }
              if (Operacion4 == OpFic32) {
                tiempEstan4 = estan32;

                Unidad4 = UniFich32;

              }
              if (Operacion4 == OpFic33) {
                tiempEstan4 = estan33;

                Unidad4 = UniFich33;

              }
              if (Operacion4 == OpFic34) {
                tiempEstan4 = estan34;

                Unidad4 = UniFich34;

              }
              if (Operacion4 == OpFic35) {
                tiempEstan4 = estan35;

                Unidad4 = UniFich35;


              }
              if (Operacion4 == OpFic36) {
                tiempEstan4 = estan36;

                Unidad4 = UniFich36;


              }
              if (Operacion4 == OpFic37) {
                tiempEstan4 = estan37;

                Unidad4 = UniFich37;

              }
              if (Operacion4 == OpFic38) {
                tiempEstan4 = estan38;

                Unidad4 = UniFich38;

              }
              if (Operacion4 == OpFic39) {
                tiempEstan4 = estan39;

                Unidad4 = UniFich39;


              }
              if (Operacion4 == OpFic40) {
                tiempEstan4 = estan40;

                Unidad4 = UniFich40;


              }
              if (Operacion4 == OpFic41) {
                tiempEstan4 = estan41;

                Unidad4 = UniFich41;


              }
              if (Operacion4 == OpFic42) {
                tiempEstan4 = estan42;

                Unidad4 = UniFich42;


              }
              if (Operacion4 == OpFic43) {
                tiempEstan4 = estan43;

                Unidad4 = UniFich43;


              }
              if (Operacion4 == OpFic44) {
                tiempEstan4 = estan44;

                Unidad4 = UniFich44;


              }
              if (Operacion4 == OpFic45) {
                tiempEstan4 = estan45;

                Unidad4 = UniFich45;

              }
              if (Operacion4 == OpFic46) {
                tiempEstan4 = estan46;

                Unidad4 = UniFich46;

              }
              if (Operacion4 == OpFic47) {
                tiempEstan4 = estan47;

                Unidad4 = UniFich47;


              }
              if (Operacion4 == OpFic48) {
                tiempEstan4 = estan48;

                Unidad4 = UniFich48;


              }
              if (Operacion4 == OpFic49) {
                tiempEstan4 = estan49;

                Unidad4 = UniFich49;


              }
              if (Operacion4 == OpFic50) {
                tiempEstan4 = estan50;

                Unidad4 = UniFich50;


              }

              //-------------------------------------------------5---------------------------------
              if (Operacion5 == OpFic1) {
                tiempEstan5 = estan1;
                Unidad5 = UniFich1;



              }
              if (Operacion5 == OpFic2) {
                tiempEstan5 = estan2;

                Unidad5 = UniFich2;



              }
              if (Operacion5 == OpFic3) {
                tiempEstan5 = estan3;

                Unidad5 = UniFich3;


              }
              if (Operacion5 == OpFic4) {
                tiempEstan5 = estan4;

                Unidad5 = UniFich4;


              }
              if (Operacion5 == OpFic5) {
                tiempEstan5 = estan5;

                Unidad5 = UniFich5;



              }
              if (Operacion5 == OpFic6) {
                tiempEstan5 = estan6;

                Unidad5 = UniFich6;


              }
              if (Operacion5 == OpFic7) {
                tiempEstan5 = estan7;

                Unidad5 = UniFich7;

              }
              if (Operacion5 == OpFic8) {
                tiempEstan5 = estan8;

                Unidad5 = UniFich8;


              }
              if (Operacion5 == OpFic9) {
                tiempEstan5 = estan9;

                Unidad5 = UniFich9;


              }
              if (Operacion5 == OpFic10) {
                tiempEstan5 = estan10;

                Unidad5 = UniFich10;

              }
              if (Operacion5 == OpFic11) {
                tiempEstan5 = estan11;

                Unidad5 = UniFich11;



              }
              if (Operacion5 == OpFic12) {
                tiempEstan5 = estan12;

                Unidad5 = UniFich12;


              }
              if (Operacion5 == OpFic13) {
                tiempEstan5 = estan13;

                Unidad5 = UniFich13;


              }
              if (Operacion5 == OpFic14) {
                tiempEstan5 = estan14;

                Unidad5 = UniFich14;


              }
              if (Operacion5 == OpFic15) {
                tiempEstan5 = estan15;

                Unidad5 = UniFich15;

              }
              if (Operacion5 == OpFic16) {
                tiempEstan5 = estan16;

                Unidad5 = UniFich16;



              }
              if (Operacion5 == OpFic17) {
                tiempEstan5 = estan17;

                Unidad5 = UniFich17;


              }
              if (Operacion5 == OpFic18) {
                tiempEstan5 = estan18;

                Unidad5 = UniFich18;

              }
              if (Operacion5 == OpFic19) {
                tiempEstan5 = estan19;

                Unidad5 = UniFich19;


              }
              if (Operacion5 == OpFic20) {
                tiempEstan5 = estan20;

                Unidad5 = UniFich20;


              }
              if (Operacion5 == OpFic21) {
                tiempEstan5 = estan21;

                Unidad5 = UniFich21;


              }
              if (Operacion5 == OpFic22) {
                tiempEstan5 = estan22;

                Unidad5 = UniFich22;


              }
              if (Operacion5 == OpFic23) {
                tiempEstan5 = estan23;

                Unidad5 = UniFich23;


              }
              if (Operacion5 == OpFic24) {
                tiempEstan5 = estan24;

                Unidad5 = UniFich24;

              }
              if (Operacion5 == OpFic25) {
                tiempEstan5 = estan25;

                Unidad5 = UniFich25;


              }
              if (Operacion5 == OpFic26) {
                tiempEstan5 = estan26;

                Unidad5 = UniFich26;


              }
              if (Operacion5 == OpFic27) {
                tiempEstan5 = estan27;

                Unidad5 = UniFich27;


              }
              if (Operacion5 == OpFic28) {
                tiempEstan5 = estan28;

                Unidad5 = UniFich28;


              }
              if (Operacion5 == OpFic29) {
                tiempEstan5 = estan29;

                Unidad5 = UniFich29;


              }
              if (Operacion5 == OpFic30) {
                tiempEstan5 = estan30;

                Unidad5 = UniFich30;


              }

              if (Operacion5 == OpFic31) {
                tiempEstan5 = estan31;

                Unidad5 = UniFich31;


              }
              if (Operacion5 == OpFic32) {
                tiempEstan5 = estan32;

                Unidad5 = UniFich32;

              }
              if (Operacion5 == OpFic33) {
                tiempEstan5 = estan33;

                Unidad5 = UniFich33;

              }
              if (Operacion5 == OpFic34) {
                tiempEstan5 = estan34;

                Unidad5 = UniFich34;

              }
              if (Operacion5 == OpFic35) {
                tiempEstan5 = estan35;

                Unidad5 = UniFich35;


              }
              if (Operacion5 == OpFic36) {
                tiempEstan5 = estan36;

                Unidad5 = UniFich36;


              }
              if (Operacion5 == OpFic37) {
                tiempEstan5 = estan37;

                Unidad5 = UniFich37;

              }
              if (Operacion5 == OpFic38) {
                tiempEstan5 = estan38;

                Unidad5 = UniFich38;

              }
              if (Operacion5 == OpFic39) {
                tiempEstan5 = estan39;

                Unidad5 = UniFich39;


              }
              if (Operacion5 == OpFic40) {
                tiempEstan5 = estan40;

                Unidad5 = UniFich40;


              }
              if (Operacion5 == OpFic41) {
                tiempEstan5 = estan41;

                Unidad5 = UniFich41;


              }
              if (Operacion5 == OpFic42) {
                tiempEstan5 = estan42;

                Unidad5 = UniFich42;


              }
              if (Operacion5 == OpFic43) {
                tiempEstan5 = estan43;

                Unidad5 = UniFich43;


              }
              if (Operacion5 == OpFic44) {
                tiempEstan5 = estan44;

                Unidad5 = UniFich44;


              }
              if (Operacion5 == OpFic45) {
                tiempEstan5 = estan45;

                Unidad5 = UniFich45;

              }
              if (Operacion5 == OpFic46) {
                tiempEstan5 = estan46;

                Unidad5 = UniFich46;

              }
              if (Operacion5 == OpFic47) {
                tiempEstan5 = estan47;

                Unidad5 = UniFich47;


              }
              if (Operacion5 == OpFic48) {
                tiempEstan5 = estan48;

                Unidad5 = UniFich48;


              }
              if (Operacion5 == OpFic49) {
                tiempEstan5 = estan49;

                Unidad5 = UniFich49;


              }
              if (Operacion5 == OpFic50) {
                tiempEstan5 = estan50;

                Unidad5 = UniFich50;


              }
              //---------------------------------------condicion 6---------------------

              if (Operacion6 == OpFic1) {
                tiempEstan6 = estan1;
                Unidad6 = UniFich1;



              }
              if (Operacion6 == OpFic2) {
                tiempEstan6 = estan2;

                Unidad6 = UniFich2;



              }
              if (Operacion6 == OpFic3) {
                tiempEstan6 = estan3;

                Unidad6 = UniFich3;


              }
              if (Operacion6 == OpFic4) {
                tiempEstan6 = estan4;

                Unidad6 = UniFich4;


              }
              if (Operacion6 == OpFic5) {
                tiempEstan6 = estan5;

                Unidad6 = UniFich5;


              }
              if (Operacion6 == OpFic6) {
                tiempEstan6 = estan6;

                Unidad6 = UniFich6;


              }
              if (Operacion6 == OpFic7) {
                tiempEstan6 = estan7;

                Unidad6 = UniFich7;

              }
              if (Operacion6 == OpFic8) {
                tiempEstan6 = estan8;

                Unidad6 = UniFich8;


              }
              if (Operacion6 == OpFic9) {
                tiempEstan6 = estan9;

                Unidad6 = UniFich9;


              }
              if (Operacion6 == OpFic10) {
                tiempEstan6 = estan10;

                Unidad6 = UniFich10;

              }
              if (Operacion6 == OpFic11) {
                tiempEstan6 = estan11;

                Unidad6 = UniFich11;


              }
              if (Operacion6 == OpFic12) {
                tiempEstan6 = estan12;

                Unidad6 = UniFich12;


              }
              if (Operacion6 == OpFic13) {
                tiempEstan6 = estan13;

                Unidad6 = UniFich13;


              }
              if (Operacion6 == OpFic14) {
                tiempEstan6 = estan14;

                Unidad6 = UniFich14;



              }
              if (Operacion6 == OpFic15) {
                tiempEstan6 = estan15;

                Unidad6 = UniFich15;

              }
              if (Operacion6 == OpFic16) {
                tiempEstan6 = estan16;

                Unidad6 = UniFich16;


              }
              if (Operacion6 == OpFic17) {
                tiempEstan6 = estan17;

                Unidad6 = UniFich17;


              }
              if (Operacion6 == OpFic18) {
                tiempEstan6 = estan18;

                Unidad6 = UniFich18;

              }
              if (Operacion6 == OpFic19) {
                tiempEstan6 = estan19;

                Unidad6 = UniFich19;


              }
              if (Operacion6 == OpFic20) {
                tiempEstan6 = estan20;

                Unidad6 = UniFich20;


              }
              if (Operacion6 == OpFic21) {
                tiempEstan6 = estan21;

                Unidad6 = UniFich21;


              }
              if (Operacion6 == OpFic22) {
                tiempEstan6 = estan22;

                Unidad6 = UniFich22;


              }
              if (Operacion6 == OpFic23) {
                tiempEstan6 = estan23;

                Unidad6 = UniFich23;


              }
              if (Operacion6 == OpFic24) {
                tiempEstan6 = estan24;

                Unidad6 = UniFich24;

              }
              if (Operacion6 == OpFic25) {
                tiempEstan6 = estan25;

                Unidad6 = UniFich25;


              }
              if (Operacion6 == OpFic26) {
                tiempEstan6 = estan26;

                Unidad6 = UniFich26;



              }
              if (Operacion6 == OpFic27) {
                tiempEstan6 = estan27;

                Unidad6 = UniFich27;


              }
              if (Operacion6 == OpFic28) {
                tiempEstan6 = estan28;

                Unidad6 = UniFich28;


              }
              if (Operacion6 == OpFic29) {
                tiempEstan6 = estan29;

                Unidad6 = UniFich29;


              }
              if (Operacion6 == OpFic30) {
                tiempEstan6 = estan30;

                Unidad6 = UniFich30;


              }

              if (Operacion6 == OpFic31) {
                tiempEstan6 = estan31;

                Unidad6 = UniFich31;


              }
              if (Operacion6 == OpFic32) {
                tiempEstan6 = estan32;

                Unidad6 = UniFich32;

              }
              if (Operacion6 == OpFic33) {
                tiempEstan6 = estan33;

                Unidad6 = UniFich33;

              }
              if (Operacion6 == OpFic34) {
                tiempEstan6 = estan34;

                Unidad6 = UniFich34;

              }
              if (Operacion6 == OpFic35) {
                tiempEstan6 = estan35;

                Unidad6 = UniFich35;


              }
              if (Operacion6 == OpFic36) {
                tiempEstan6 = estan36;

                Unidad6 = UniFich36;


              }
              if (Operacion6 == OpFic37) {
                tiempEstan6 = estan37;

                Unidad6 = UniFich37;

              }
              if (Operacion6 == OpFic38) {
                tiempEstan6 = estan38;

                Unidad6 = UniFich38;

              }
              if (Operacion6 == OpFic39) {
                tiempEstan6 = estan39;

                Unidad6 = UniFich39;


              }
              if (Operacion6 == OpFic40) {
                tiempEstan6 = estan40;

                Unidad6 = UniFich40;


              }
              if (Operacion6 == OpFic41) {
                tiempEstan6 = estan41;

                Unidad6 = UniFich41;


              }
              if (Operacion6 == OpFic42) {
                tiempEstan6 = estan42;

                Unidad6 = UniFich42;


              }
              if (Operacion6 == OpFic43) {
                tiempEstan6 = estan43;

                Unidad6 = UniFich43;


              }
              if (Operacion6 == OpFic44) {
                tiempEstan6 = estan44;

                Unidad6 = UniFich44;


              }
              if (Operacion6 == OpFic45) {
                tiempEstan6 = estan45;

                Unidad6 = UniFich45;

              }
              if (Operacion6 == OpFic46) {
                tiempEstan6 = estan46;

                Unidad6 = UniFich46;

              }
              if (Operacion6 == OpFic47) {
                tiempEstan6 = estan47;

                Unidad6 = UniFich47;


              }
              if (Operacion6 == OpFic48) {
                tiempEstan6 = estan48;

                Unidad6 = UniFich48;


              }
              if (Operacion6 == OpFic49) {
                tiempEstan6 = estan49;

                Unidad6 = UniFich49;


              }
              if (Operacion6 == OpFic50) {
                tiempEstan6 = estan50;

                Unidad6 = UniFich50;


              }
              //---------------------------------------condicion 7---------------------

              if (Operacion7 == OpFic1) {
                tiempEstan7 = estan1;
                Unidad7 = UniFich1;



              }
              if (Operacion7 == OpFic2) {
                tiempEstan7 = estan2;

                Unidad7 = UniFich2;



              }
              if (Operacion7 == OpFic3) {
                tiempEstan7 = estan3;

                Unidad7 = UniFich3;


              }
              if (Operacion7 == OpFic4) {
                tiempEstan7 = estan4;

                Unidad7 = UniFich4;


              }
              if (Operacion7 == OpFic5) {
                tiempEstan7 = estan5;

                Unidad7 = UniFich5;


              }
              if (Operacion7 == OpFic6) {
                tiempEstan7 = estan6;

                Unidad7 = UniFich6;


              }
              if (Operacion7 == OpFic7) {
                tiempEstan7 = estan7;

                Unidad7 = UniFich7;

              }
              if (Operacion7 == OpFic8) {
                tiempEstan7 = estan8;

                Unidad7 = UniFich8;


              }
              if (Operacion7 == OpFic9) {
                tiempEstan7 = estan9;

                Unidad7 = UniFich9;


              }
              if (Operacion7 == OpFic10) {
                tiempEstan7 = estan10;

                Unidad7 = UniFich10;

              }
              if (Operacion7 == OpFic11) {
                tiempEstan7 = estan11;

                Unidad7 = UniFich11;


              }
              if (Operacion7 == OpFic12) {
                tiempEstan7 = estan12;

                Unidad7 = UniFich12;


              }
              if (Operacion7 == OpFic13) {
                tiempEstan7 = estan13;

                Unidad7 = UniFich13;


              }
              if (Operacion7 == OpFic14) {
                tiempEstan7 = estan14;

                Unidad7 = UniFich14;


              }
              if (Operacion7 == OpFic15) {
                tiempEstan7 = estan15;

                Unidad7 = UniFich15;

              }
              if (Operacion7 == OpFic16) {
                tiempEstan7 = estan16;

                Unidad7 = UniFich16;



              }
              if (Operacion7 == OpFic17) {
                tiempEstan7 = estan17;

                Unidad7 = UniFich17;


              }
              if (Operacion7 == OpFic18) {
                tiempEstan7 = estan18;

                Unidad7 = UniFich18;

              }
              if (Operacion7 == OpFic19) {
                tiempEstan7 = estan19;

                Unidad7 = UniFich19;


              }
              if (Operacion7 == OpFic20) {
                tiempEstan7 = estan20;

                Unidad7 = UniFich20;


              }
              if (Operacion7 == OpFic21) {
                tiempEstan7 = estan21;

                Unidad7 = UniFich21;


              }
              if (Operacion7 == OpFic22) {
                tiempEstan7 = estan22;

                Unidad7 = UniFich22;


              }
              if (Operacion7 == OpFic23) {
                tiempEstan7 = estan23;

                Unidad7 = UniFich23;


              }
              if (Operacion7 == OpFic24) {
                tiempEstan7 = estan24;

                Unidad7 = UniFich24;

              }
              if (Operacion7 == OpFic25) {
                tiempEstan7 = estan25;

                Unidad7 = UniFich25;



              }
              if (Operacion7 == OpFic26) {
                tiempEstan7 = estan26;

                Unidad7 = UniFich26;


              }
              if (Operacion7 == OpFic27) {
                tiempEstan7 = estan27;

                Unidad7 = UniFich27;


              }
              if (Operacion7 == OpFic28) {
                tiempEstan7 = estan28;

                Unidad7 = UniFich28;


              }
              if (Operacion7 == OpFic29) {
                tiempEstan7 = estan29;

                Unidad7 = UniFich29;


              }
              if (Operacion7 == OpFic30) {
                tiempEstan7 = estan30;

                Unidad7 = UniFich30;


              }

              if (Operacion7 == OpFic31) {
                tiempEstan7 = estan31;

                Unidad7 = UniFich31;


              }
              if (Operacion7 == OpFic32) {
                tiempEstan7 = estan32;

                Unidad7 = UniFich32;

              }
              if (Operacion7 == OpFic33) {
                tiempEstan7 = estan33;

                Unidad7 = UniFich33;

              }
              if (Operacion7 == OpFic34) {
                tiempEstan7 = estan34;

                Unidad7 = UniFich34;

              }
              if (Operacion7 == OpFic35) {
                tiempEstan7 = estan35;

                Unidad7 = UniFich35;


              }
              if (Operacion7 == OpFic36) {
                tiempEstan7 = estan36;

                Unidad7 = UniFich36;


              }
              if (Operacion7 == OpFic37) {
                tiempEstan7 = estan37;

                Unidad7 = UniFich37;

              }
              if (Operacion7 == OpFic38) {
                tiempEstan7 = estan38;

                Unidad7 = UniFich38;

              }
              if (Operacion7 == OpFic39) {
                tiempEstan7 = estan39;

                Unidad7 = UniFich39;


              }
              if (Operacion7 == OpFic40) {
                tiempEstan7 = estan40;

                Unidad7 = UniFich40;


              }
              if (Operacion7 == OpFic41) {
                tiempEstan7 = estan41;

                Unidad7 = UniFich41;


              }
              if (Operacion7 == OpFic42) {
                tiempEstan7 = estan42;

                Unidad7 = UniFich42;


              }
              if (Operacion7 == OpFic43) {
                tiempEstan7 = estan43;

                Unidad7 = UniFich43;


              }
              if (Operacion7 == OpFic44) {
                tiempEstan7 = estan44;

                Unidad7 = UniFich44;


              }
              if (Operacion7 == OpFic45) {
                tiempEstan7 = estan45;

                Unidad7 = UniFich45;

              }
              if (Operacion7 == OpFic46) {
                tiempEstan7 = estan46;

                Unidad7 = UniFich46;

              }
              if (Operacion7 == OpFic47) {
                tiempEstan7 = estan47;

                Unidad7 = UniFich47;


              }
              if (Operacion7 == OpFic48) {
                tiempEstan7 = estan48;

                Unidad7 = UniFich48;


              }
              if (Operacion7 == OpFic49) {
                tiempEstan7 = estan49;

                Unidad7 = UniFich49;


              }
              if (Operacion7 == OpFic50) {
                tiempEstan7 = estan50;

                Unidad7 = UniFich50;


              }

              //---------------------------------------condicion 8---------------------

              if (Operacion8 == OpFic1) {
                tiempEstan8 = estan1;
                Unidad8 = UniFich1;



              }
              if (Operacion8 == OpFic2) {
                tiempEstan8 = estan2;

                Unidad8 = UniFich2;



              }
              if (Operacion8 == OpFic3) {
                tiempEstan8 = estan3;

                Unidad8 = UniFich3;


              }
              if (Operacion8 == OpFic4) {
                tiempEstan8 = estan4;

                Unidad8 = UniFich4;


              }
              if (Operacion8 == OpFic5) {
                tiempEstan8 = estan5;

                Unidad8 = UniFich5;


              }
              if (Operacion8 == OpFic6) {
                tiempEstan8 = estan6;

                Unidad8 = UniFich6;


              }
              if (Operacion8 == OpFic7) {
                tiempEstan8 = estan7;

                Unidad8 = UniFich7;

              }
              if (Operacion8 == OpFic8) {
                tiempEstan8 = estan8;

                Unidad8 = UniFich8;


              }
              if (Operacion8 == OpFic9) {
                tiempEstan8 = estan9;

                Unidad8 = UniFich9;


              }
              if (Operacion8 == OpFic10) {
                tiempEstan8 = estan10;

                Unidad8 = UniFich10;


              }
              if (Operacion8 == OpFic11) {
                tiempEstan8 = estan11;

                Unidad8 = UniFich11;


              }
              if (Operacion8 == OpFic12) {
                tiempEstan8 = estan12;

                Unidad8 = UniFich12;


              }
              if (Operacion8 == OpFic13) {
                tiempEstan8 = estan13;

                Unidad8 = UniFich13;


              }
              if (Operacion8 == OpFic14) {
                tiempEstan8 = estan14;

                Unidad8 = UniFich14;


              }
              if (Operacion8 == OpFic15) {
                tiempEstan8 = estan15;

                Unidad8 = UniFich15;

              }
              if (Operacion8 == OpFic16) {
                tiempEstan8 = estan16;

                Unidad8 = UniFich16;


              }
              if (Operacion8 == OpFic17) {
                tiempEstan8 = estan17;

                Unidad8 = UniFich17;


              }
              if (Operacion8 == OpFic18) {
                tiempEstan8 = estan18;

                Unidad8 = UniFich18;

              }
              if (Operacion8 == OpFic19) {
                tiempEstan8 = estan19;

                Unidad8 = UniFich19;


              }
              if (Operacion8 == OpFic20) {
                tiempEstan8 = estan20;

                Unidad8 = UniFich20;


              }
              if (Operacion8 == OpFic21) {
                tiempEstan8 = estan21;

                Unidad8 = UniFich21;


              }
              if (Operacion8 == OpFic22) {
                tiempEstan8 = estan22;

                Unidad8 = UniFich22;


              }
              if (Operacion8 == OpFic23) {
                tiempEstan8 = estan23;

                Unidad8 = UniFich23;


              }
              if (Operacion8 == OpFic24) {
                tiempEstan8 = estan24;

                Unidad8 = UniFich24;

              }
              if (Operacion8 == OpFic25) {
                tiempEstan8 = estan25;

                Unidad8 = UniFich25;



              }
              if (Operacion8 == OpFic26) {
                tiempEstan8 = estan26;

                Unidad8 = UniFich26;


              }
              if (Operacion8 == OpFic27) {
                tiempEstan8 = estan27;

                Unidad8 = UniFich27;


              }
              if (Operacion8 == OpFic28) {
                tiempEstan8 = estan28;

                Unidad8 = UniFich28;


              }
              if (Operacion8 == OpFic29) {
                tiempEstan8 = estan29;

                Unidad8 = UniFich29;


              }
              if (Operacion8 == OpFic30) {
                tiempEstan8 = estan30;

                Unidad8 = UniFich30;


              }

              if (Operacion8 == OpFic31) {
                tiempEstan8 = estan31;

                Unidad8 = UniFich31;


              }
              if (Operacion8 == OpFic32) {
                tiempEstan8 = estan32;

                Unidad8 = UniFich32;

              }
              if (Operacion8 == OpFic33) {
                tiempEstan8 = estan33;

                Unidad8 = UniFich33;

              }
              if (Operacion8 == OpFic34) {
                tiempEstan8 = estan34;

                Unidad8 = UniFich34;

              }
              if (Operacion8 == OpFic35) {
                tiempEstan8 = estan35;

                Unidad8 = UniFich35;


              }
              if (Operacion8 == OpFic36) {
                tiempEstan8 = estan36;

                Unidad8 = UniFich36;


              }
              if (Operacion8 == OpFic37) {
                tiempEstan8 = estan37;

                Unidad8 = UniFich37;

              }
              if (Operacion8 == OpFic38) {
                tiempEstan8 = estan38;

                Unidad8 = UniFich38;

              }
              if (Operacion8 == OpFic39) {
                tiempEstan8 = estan39;

                Unidad8 = UniFich39;


              }
              if (Operacion8 == OpFic40) {
                tiempEstan8 = estan40;

                Unidad8 = UniFich40;


              }
              if (Operacion8 == OpFic41) {
                tiempEstan8 = estan41;

                Unidad8 = UniFich41;


              }
              if (Operacion8 == OpFic42) {
                tiempEstan8 = estan42;

                Unidad8 = UniFich42;


              }
              if (Operacion8 == OpFic43) {
                tiempEstan8 = estan43;

                Unidad8 = UniFich43;


              }
              if (Operacion8 == OpFic44) {
                tiempEstan8 = estan44;

                Unidad8 = UniFich44;


              }
              if (Operacion8 == OpFic45) {
                tiempEstan8 = estan45;

                Unidad8 = UniFich45;

              }
              if (Operacion8 == OpFic46) {
                tiempEstan8 = estan46;

                Unidad8 = UniFich46;

              }
              if (Operacion8 == OpFic47) {
                tiempEstan8 = estan47;

                Unidad8 = UniFich47;


              }
              if (Operacion8 == OpFic48) {
                tiempEstan8 = estan48;

                Unidad8 = UniFich48;


              }
              if (Operacion8 == OpFic49) {
                tiempEstan8 = estan49;

                Unidad8 = UniFich49;


              }
              if (Operacion8 == OpFic50) {
                tiempEstan8 = estan50;

                Unidad8 = UniFich50;


              }

              //---------------------------------------condicion 9---------------------

              if (Operacion9 == OpFic1) {
                tiempEstan9 = estan1;
                Unidad9 = UniFich1;



              }
              if (Operacion9 == OpFic2) {
                tiempEstan9 = estan2;

                Unidad9 = UniFich2;



              }
              if (Operacion9 == OpFic3) {
                tiempEstan9 = estan3;

                Unidad9 = UniFich3;


              }
              if (Operacion9 == OpFic4) {
                tiempEstan9 = estan4;

                Unidad9 = UniFich4;


              }
              if (Operacion9 == OpFic5) {
                tiempEstan9 = estan5;

                Unidad9 = UniFich5;


              }
              if (Operacion9 == OpFic6) {
                tiempEstan9 = estan6;

                Unidad9 = UniFich6;


              }
              if (Operacion9 == OpFic7) {
                tiempEstan9 = estan7;

                Unidad9 = UniFich7;

              }
              if (Operacion9 == OpFic8) {
                tiempEstan9 = estan8;

                Unidad9 = UniFich8;


              }
              if (Operacion9 == OpFic9) {
                tiempEstan9 = estan9;

                Unidad9 = UniFich9;


              }
              if (Operacion9 == OpFic10) {
                tiempEstan9 = estan10;

                Unidad9 = UniFich10;

              }
              if (Operacion9 == OpFic11) {
                tiempEstan9 = estan11;

                Unidad9 = UniFich11;



              }
              if (Operacion9 == OpFic12) {
                tiempEstan9 = estan12;

                Unidad9 = UniFich12;


              }
              if (Operacion9 == OpFic13) {
                tiempEstan9 = estan13;

                Unidad9 = UniFich13;


              }
              if (Operacion9 == OpFic14) {
                tiempEstan9 = estan14;

                Unidad9 = UniFich14;


              }
              if (Operacion9 == OpFic15) {
                tiempEstan9 = estan15;

                Unidad9 = UniFich15;

              }
              if (Operacion9 == OpFic16) {
                tiempEstan9 = estan16;

                Unidad9 = UniFich16;


              }
              if (Operacion9 == OpFic17) {
                tiempEstan9 = estan17;

                Unidad9 = UniFich17;


              }
              if (Operacion9 == OpFic18) {
                tiempEstan9 = estan18;

                Unidad9 = UniFich18;

              }
              if (Operacion9 == OpFic19) {
                tiempEstan9 = estan19;

                Unidad9 = UniFich19;


              }
              if (Operacion9 == OpFic20) {
                tiempEstan9 = estan20;

                Unidad9 = UniFich20;


              }
              if (Operacion9 == OpFic21) {
                tiempEstan9 = estan21;

                Unidad9 = UniFich21;


              }
              if (Operacion9 == OpFic22) {
                tiempEstan9 = estan22;

                Unidad9 = UniFich22;


              }
              if (Operacion9 == OpFic23) {
                tiempEstan9 = estan23;

                Unidad9 = UniFich23;


              }
              if (Operacion9 == OpFic24) {
                tiempEstan9 = estan24;

                Unidad9 = UniFich24;

              }
              if (Operacion9 == OpFic25) {
                tiempEstan9 = estan25;

                Unidad9 = UniFich25;


              }
              if (Operacion9 == OpFic26) {
                tiempEstan9 = estan26;

                Unidad9 = UniFich26;



              }
              if (Operacion9 == OpFic27) {
                tiempEstan9 = estan27;

                Unidad9 = UniFich27;


              }
              if (Operacion9 == OpFic28) {
                tiempEstan9 = estan28;

                Unidad9 = UniFich28;


              }
              if (Operacion9 == OpFic29) {
                tiempEstan9 = estan29;

                Unidad9 = UniFich29;


              }
              if (Operacion9 == OpFic30) {
                tiempEstan9 = estan30;

                Unidad9 = UniFich30;


              }

              if (Operacion9 == OpFic31) {
                tiempEstan9 = estan31;

                Unidad9 = UniFich31;


              }
              if (Operacion9 == OpFic32) {
                tiempEstan9 = estan32;

                Unidad9 = UniFich32;

              }
              if (Operacion9 == OpFic33) {
                tiempEstan9 = estan33;

                Unidad9 = UniFich33;

              }
              if (Operacion9 == OpFic34) {
                tiempEstan9 = estan34;

                Unidad9 = UniFich34;

              }
              if (Operacion9 == OpFic35) {
                tiempEstan9 = estan35;

                Unidad9 = UniFich35;


              }
              if (Operacion9 == OpFic36) {
                tiempEstan9 = estan36;

                Unidad9 = UniFich36;


              }
              if (Operacion9 == OpFic37) {
                tiempEstan9 = estan37;

                Unidad9 = UniFich37;

              }
              if (Operacion9 == OpFic38) {
                tiempEstan9 = estan38;

                Unidad9 = UniFich38;

              }
              if (Operacion9 == OpFic39) {
                tiempEstan9 = estan39;

                Unidad9 = UniFich39;


              }
              if (Operacion9 == OpFic40) {
                tiempEstan9 = estan40;

                Unidad9 = UniFich40;


              }
              if (Operacion9 == OpFic41) {
                tiempEstan9 = estan41;

                Unidad9 = UniFich41;


              }
              if (Operacion9 == OpFic42) {
                tiempEstan9 = estan42;

                Unidad9 = UniFich42;


              }
              if (Operacion9 == OpFic43) {
                tiempEstan9 = estan43;

                Unidad9 = UniFich43;


              }
              if (Operacion9 == OpFic44) {
                tiempEstan9 = estan44;

                Unidad9 = UniFich44;


              }
              if (Operacion9 == OpFic45) {
                tiempEstan9 = estan45;

                Unidad9 = UniFich45;

              }
              if (Operacion9 == OpFic46) {
                tiempEstan9 = estan46;

                Unidad9 = UniFich46;

              }
              if (Operacion9 == OpFic47) {
                tiempEstan9 = estan47;

                Unidad9 = UniFich47;


              }
              if (Operacion9 == OpFic48) {
                tiempEstan9 = estan48;

                Unidad9 = UniFich48;


              }
              if (Operacion9 == OpFic49) {
                tiempEstan9 = estan49;

                Unidad9 = UniFich49;


              }
              if (Operacion9 == OpFic50) {
                tiempEstan9 = estan50;

                Unidad9 = UniFich50;


              }

              //---------------------------------------------vacios-------------------------
              if (Operacion == "") {
                tiempEstan1 = 0;

                Unidad1 = 0;
              }
              if (Operacion2 == "") {
                tiempEstan2 = 0;

                Unidad2 = 0;
              }
              if (Operacion3 == "") {
                tiempEstan3 = 0;

                Unidad3 = 0;
              }
              if (Operacion4 == "") {
                tiempEstan4 = 0;

                Unidad4 = 0;
              }
              if (Operacion5 == "") {
                tiempEstan5 = 0;

                Unidad5 = 0;
              }
              if (Operacion6 == "") {
                tiempEstan6 = 0;

                Unidad6 = 0;
              }
              if (Operacion7 == "") {
                tiempEstan7 = 0;

                Unidad7 = 0;
              }
              if (Operacion8 == "") {
                tiempEstan8 = 0;

                Unidad8 = 0;
              }
              if (Operacion9 == "") {
                tiempEstan9 = 0;

                Unidad9 = 0;
              }

              //-----------------------------validacion check box--------------------
              comis = 0;
              pau11 = 0;
              dos = 0;
              tiempoSin = 0;
              var comida = document.getElementById("cbComida").value;
              var tinto = document.getElementById("cbTinto").value;
              var dosPM = document.getElementById("cbTinto2").value;

              if (comida) {
                comis = 900;
              }
              if (tinto) {
                pau11 = 480;
              }
              if (dosPM) {
                dos = 180;
              }







              //---------------------------calculo porcentaje-----------------------------
              //-------------------------------------------------------------------------
              var texto = document.getElementById("Comentarios").value;
              //Reemplazamos los saltos de linea por espacios
              texto = texto.replace(/\r?\n/g, " ");
              //Reemplazamos los espacios seguidos por uno solo
              texto = texto.replace(/[ ]+/g, " ");
              //Quitarmos los espacios del principio y del final
              texto = texto.replace(/^ /, "");
              texto = texto.replace(/ $/, "");
              //Troceamos el texto por los espacios
              var textoTroceado = texto.split(" ");
              //Contamos todos los trozos de cadenas que existen
              numeroPalabras = textoTroceado.length;

              //  tiempoSin=tiemTrabajado - comis - pau11 - dos;
              //----------------------------------------------------------------------
              TiempoStdTotal = tiempEstan1 + tiempEstan2 + tiempEstan3 + tiempEstan4 + tiempEstan5 + tiempEstan6 + tiempEstan7
                + tiempEstan8 + tiempEstan9;
              //console.log("el tiempo total STD es de:  " + TiempoStdTotal);
              unidadSTD = parseInt(Unidad1 + Unidad2 + Unidad3 + Unidad4 + Unidad5 + Unidad6 + Unidad7 + Unidad8 + Unidad9);
              //console.log("Las undiades Std son :" + unidadSTD);

              /*rela=(cantidadElabo*3600)/unidadSTD;
              Rendi=(rela*100)/tiemTrabajado;*/
              rela = TiempoStdTotal * cantidadElabo;
              Rendi = ((rela * 100) / (tiemTrabajado)) / numeroPalabras;
              // Rendi = ((rela * 100) / (tiempoSin)) / numeroPalabras;
              // console.log(numeroPalabras);

              console.log("px se calcula el %");
              var fecha = "";

              var hora = new Date().getHours();
              var minutos = new Date().getMinutes();
              var seg = new Date().getSeconds();

              if (hora < 10) {
                hora = '0' + hora;
              }
              if (minutos < 10) {
                minutos = '0' + minutos;
              }
              if (seg < 10) {
                seg = '0' + seg;
              }

              /*  var f = new Date();

                fech=(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());*/

              var hoy = new Date();
              var dia = Number(hoy.getDate());
              var mes = Number(hoy.getMonth() + 1);
              var ano = Number(hoy.getFullYear());
              


              if (dia < 10) {
                dia = '0' + dia;
              }
              if (mes < 10) {
                mes = '0' + mes;
              }

              fecha = (ano + "-" + mes + "-" + dia + "  "+hora+":"+minutos+':'+seg);
              console.log('FECHA VISTA ' + fecha);//jesus

              /*if (dia < 10 && mes < 10) {

                fechaDelDia = (ano + "-0" + mes + "-0" + dia);

              }
              else if (mes < 10) {
                // alert(ano+"-0"+mes+"-"+dia);
                fechaDelDia = (ano + "-0" + mes + "-" + dia);
              }
              else if (dia < 10) {

                fechaDelDia = (ano + "-0" + mes + "-0" + dia);

              }
              else {
                // alert(ano+"-"+mes+"-"+dia);
                fechaDelDia = (ano + "-" + mes + "-" + dia);
              }


              if (hora < 10 && minutos < 10 && seg < 10) {
                var fecha = fechaDelDia + "  " + "0" + hora + ':' + "0" + minutos + ':' + '0' + seg;
                console.log("la fecha es:" + fecha);


              }
              else if (hora < 10 && minutos < 10) {
                var fecha = fechaDelDia + "  " + "0" + hora + ':' + "0" + minutos + ':' + seg;
                console.log("la fecha es:" + fecha);


              }
              else if (hora < 10 && seg < 10) {
                var fecha = fechaDelDia + "  " + "0" + hora + ':' + minutos + ':' + '0' + seg;
                console.log("la fecha es:" + fecha);


              }
              else if (minutos < 10 && seg < 10) {
                var fecha = fechaDelDia + "  " + hora + ':' + "0" + minutos + ':' + '0' + seg;
                console.log("la fecha es:" + fecha);


              }
              else if (hora < 10) {
                var fecha = fechaDelDia + "  " + "0" + hora + ':' + minutos + ':' + seg;
                console.log("la fecha es:" + fecha);


              }
              else if (minutos < 10) {
                var fecha = fechaDelDia + "  " + hora + ':' + "0" + minutos + ':' + seg;
                console.log("la fecha es:" + fecha);


              }
              else if (seg < 10) {
                var fecha = fechaDelDia + "  " + hora + ':' + minutos + ':' + '0' + seg;
                console.log("la fecha es:" + fecha);


              }
              else {
                var fecha = fechaDelDia + "  " + hora + ':' + minutos + ':' + seg;
                console.log("la fecha es:" + fecha);



              }*/









              //console.log("El rendimiento de las unidades realizadas es de: " + Rendi);

              /*  alert("Tu tiempo fue de: " +(tiemTrabajado/60).toFixed(2) + "minutos" + " " + 
                " El Rendimiento ha sido: " +Math.round(Rendi)+ "%");*/

              db.collection("vistasTV2").add({
                Modulo: Operario,
                Integrantes: texto,
                Rendimiento: Rendi,
                Fecha: fecha,
              })
                .then((docRef) => {
                  console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });

              //--------------------------------------------------------------------------

              /*alert("Tu tiempo fue de:"+(tiemTrabajado/60).toFixed(2)+" minutos"+"  "+
              "EL Rendimiento obtenido fue del: " +Math.round(RendimientoOp)+"%");*/

              //   alert("El rendimiento fue: "+RendimientoOp);

              /* tabl.innerHTML +=`
               <tr>
           <th scope="row">${Operario}</th>
           <th scope="row">${Maqui}</th>
       
           <td>${Operacion}</td>
           <td>${tiempEstan}seg</td>
       
           <td>${cantidadElabo}</td>
           <td>${tiemTrabajado}seg</td>
       
           <td>${Math.round(RendimientoOp)}%</td>
           </tr>
       
       
       
       `*/


              //  console.log(consultaref);


              // console.log("rendimiento .................................#30"+RendimientoOp);




            });
          })

      });
    })

  /*   });
  })
 
       });
  })
 
      });
  })
 
       });
  })
 
      });
  })
 
       });
  })
 
      });
  })
 
       });
  })
 
      });
  })
       });
  })
 
      });
  })
 
       });
  })
 
      });
  })
 
       });
  })
 
      });
  })
 
       });
  })
 
      });
  })
 
       });
  })
 
      });
  })
 
       });
  })
 
      });
  })
 
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
 
               });
           })
    
                        });
                    })
 
               });
           })
                       });
})
           });
})*/




  // console.log("totalilizimooooooooooooooooooooooo"+tiempoTotalizimo);
  //   console.log("el totaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal:"+tiempoTotal);



  //-------------------------------verificacion maq---------------------





}

//--------------------------------------------Refrescar--------------------------

function refrecar() {

  if (confirm("Seguro que desea Actualizar la pagina?")) {
    // alert("Ya ha iniciado el Cronometro...");

    location.reload();


  } else {
  }


}

//----------------------------------------------------tiquetes-------------------------

funTqt = function pruebaTq() {
  console.log("px entra a funTqt");
  tiquetes();

}

tiquetes = function () {

  var primerTq = document.getElementById("primer").value;
  var ultTq = document.getElementById("ultimo").value;
  resta = 0;



  if (primerTq > ultTq) {

    resta = Math.abs((primerTq - ultTq)) + 1;

    //document.getElementById("regAnt").value=resta;

  }




  if (ultTq > primerTq) {
    resta = Math.abs((ultTq - primerTq)) + 1;

    //console.log("el RESULTADO"+resta);

    // document.getElementById("canti").value=resta;

    //document.getElementById("regAnt").value=resta;

  }
  if (ultTq == primerTq) {
    resta = 1;
  }
  console.log("el RESULTADO" + resta);

  document.getElementById("canti").value = resta;




  console.log("px Calcula la diferencia en tiquetes");
}

//--------------------------------------tabla unidades disponibles------------------------------

unidadesDisponibles = function () {
  tablitaUnidad = document.getElementById("UnidadesXoperaciones");

  consultaOPveri = document.getElementById("op").value;

  db.collection("OrdenProduccion").where("OrdenP", "==", consultaOPveri).get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        var nombreref = `${doc.data().Referenc}`;
        var cantidadOp = `${doc.data().Cantidad}`;




        db.collection("FichaTecniGlobal").where("Referencia", "==", nombreref).get()
          .then(function (querySnapshot) {
            tablitaUnidad.innerHTML = "";
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());

              var cod1 = `${doc.data().Codigo}`;
              var cod2 = `${doc.data().Codigo2}`;
              var cod3 = `${doc.data().Codigo3}`;
              var cod4 = `${doc.data().Codigo4}`;
              var cod5 = `${doc.data().Codigo5}`;

              var cod6 = `${doc.data().Codigo6}`;
              var cod7 = `${doc.data().Codigo7}`;
              var cod8 = `${doc.data().Codigo8}`;
              var cod9 = `${doc.data().Codigo9}`;
              var cod10 = `${doc.data().Codigo10}`;

              var cod11 = `${doc.data().Codigo11}`;
              var cod12 = `${doc.data().Codigo12}`;
              var cod13 = `${doc.data().Codigo13}`;
              var cod14 = `${doc.data().Codigo14}`;
              var cod15 = `${doc.data().Codigo15}`;

              var cod16 = `${doc.data().Codigo16}`;
              var cod17 = `${doc.data().Codigo17}`;
              var cod18 = `${doc.data().Codigo18}`;
              var cod19 = `${doc.data().Codigo19}`;
              var cod20 = `${doc.data().Codigo20}`;

              var cod21 = `${doc.data().Codigo21}`;
              var cod22 = `${doc.data().Codigo22}`;
              var cod23 = `${doc.data().Codigo23}`;
              var cod24 = `${doc.data().Codigo24}`;
              var cod25 = `${doc.data().Codigo25}`;

              var cod26 = `${doc.data().Codigo26}`;
              var cod27 = `${doc.data().Codigo27}`;
              var cod28 = `${doc.data().Codigo28}`;
              var cod29 = `${doc.data().Codigo29}`;
              var cod30 = `${doc.data().Codigo30}`;

              var cod31 = `${doc.data().Codigo31}`;
              var cod32 = `${doc.data().Codigo32}`;
              var cod33 = `${doc.data().Codigo33}`;
              var cod34 = `${doc.data().Codigo34}`;
              var cod35 = `${doc.data().Codigo35}`;

              var cod36 = `${doc.data().Codigo36}`;
              var cod37 = `${doc.data().Codigo37}`;
              var cod38 = `${doc.data().Codigo38}`;
              var cod39 = `${doc.data().Codigo39}`;
              var cod40 = `${doc.data().Codigo40}`;

              var cod41 = `${doc.data().Codigo41}`;
              var cod42 = `${doc.data().Codigo42}`;
              var cod43 = `${doc.data().Codigo43}`;
              var cod44 = `${doc.data().Codigo44}`;
              var cod45 = `${doc.data().Codigo45}`;

              var cod46 = `${doc.data().Codigo46}`;
              var cod47 = `${doc.data().Codigo47}`;
              var cod48 = `${doc.data().Codigo48}`;
              var cod49 = `${doc.data().Codigo49}`;
              var cod50 = `${doc.data().Codigo50}`;





              tablitaUnidad.innerHTML += `
          <tr>
      <td  scope="row">${cod1}</td>
      <td>${cod2}</td>
      <td>${cod3}</td>
      <td >${cod4}</td>
      <td>${cod5}</td>
      <td>${cod6}</td>
      <td >${cod7}</td>
      <td>${cod8}</td>
      <td>${cod9}</td>

      <td>${cod10}</td>
      <td>${cod11}</td>
      <td >${cod12}</td>
      <td>${cod13}</td>
      <td>${cod14}</td>
      <td >${cod15}</td>
      <td>${cod16}</td>
      <td>${cod17}</td>

      <td>${cod18}</td>
      <td>${cod19}</td>
      <td >${cod20}</td>
      <td>${cod21}</td>
      <td>${cod22}</td>
      <td >${cod23}</td>
      <td>${cod24}</td>
      <td>${cod25}</td>

      <td>${cod26}</td>
      <td>${cod27}</td>
      <td >${cod28}</td>
      <td>${cod29}</td>
      <td>${cod30}</td>
      <td>${cod31}</td>
      <td>${cod32}</td>
      <td>${cod33}</td>

      <td>${cod34}</td>
      <td>${cod35}</td>
      <td >${cod36}</td>
      <td>${cod37}</td>
      <td>${cod38}</td>
      <td>${cod39}</td>
      <td>${cod40}</td>
      <td>${cod41}</td>

      <td>${cod42}</td>
      <td>${cod43}</td>
      <td >${cod44}</td>
      <td>${cod45}</td>
      <td>${cod46}</td>
      <td >${cod47}</td>
      <td>${cod48}</td>
      <td>${cod49}</td>
      <td>${cod50}</td>

     
      </tr>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>
      <td>${cantidadOp}</td>




 
 
 `

            })
          });
      })
    });






}

validacionCantidades2 = function () {

  var nombreref = document.getElementById("op").value;

  unidadesElaboradaop = 0;
  unidadesElaboradaop = document.getElementById("canti").value;

  opera1 = "";
  opera2 = "";
  opera3 = "";
  opera4 = "";
  opera5 = "";
  opera6 = "";
  opera7 = "";
  opera8 = "";
  opera9 = "";



  var opera1 = document.getElementById("operaci").value;
  var opera2 = document.getElementById("operaci2").value;
  var opera3 = document.getElementById("operaci3").value;
  var opera4 = document.getElementById("operaci4").value;
  var opera5 = document.getElementById("operaci5").value;
  var opera6 = document.getElementById("operaci6").value;
  var opera7 = document.getElementById("operaci7").value;
  var opera8 = document.getElementById("operaci8").value;
  var opera9 = document.getElementById("operaci9").value;


  // unidadesElaboradaop = document.getElementById("canti").value;
  //console.log("CANTIDADESSSSS:"+unidadesElaboradaop);


  db.collection("CantidadesDisponibles")
    .where("OP", "==", nombreref).get()
    .then(function (querySnapshot) {

      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        var codH1 = `${doc.data().Codigo}`;
        var canCod1 = `${doc.data().cantiCod1}`;

        var codH2 = `${doc.data().Codigo2}`;
        var canCod2 = `${doc.data().cantiCod2}`;
        //  console.log("la unidades de 2 son:"+canCod2);

        var codH3 = `${doc.data().Codigo3}`;
        var canCod3 = `${doc.data().cantiCod3}`;

        var codH4 = `${doc.data().Codigo4}`;
        var canCod4 = `${doc.data().cantiCod4}`;

        var codH5 = `${doc.data().Codigo5}`;
        var canCod5 = `${doc.data().cantiCod5}`;

        var codH6 = `${doc.data().Codigo6}`;
        var canCod6 = `${doc.data().cantiCod6}`;

        var codH7 = `${doc.data().Codigo7}`;
        var canCod7 = `${doc.data().cantiCod7}`;

        var codH8 = `${doc.data().Codigo8}`;
        var canCod8 = `${doc.data().cantiCod8}`;

        var codH9 = `${doc.data().Codigo9}`;
        var canCod9 = `${doc.data().cantiCod9}`;

        var codH10 = `${doc.data().Codigo10}`;
        var canCod10 = `${doc.data().cantiCod10}`;

        var codH11 = `${doc.data().Codigo11}`;
        var canCod11 = `${doc.data().cantiCod11}`;

        var codH12 = `${doc.data().Codigo12}`;
        var canCod12 = `${doc.data().cantiCod12}`;

        var codH13 = `${doc.data().Codigo13}`;
        var canCod13 = `${doc.data().cantiCod13}`;

        var codH14 = `${doc.data().Codigo14}`;
        var canCod14 = `${doc.data().cantiCod14}`;

        var codH15 = `${doc.data().Codigo15}`;
        var canCod15 = `${doc.data().cantiCod15}`;

        var codH16 = `${doc.data().Codigo16}`;
        var canCod16 = `${doc.data().cantiCod16}`;

        var codH17 = `${doc.data().Codigo17}`;
        var canCod17 = `${doc.data().cantiCod17}`;

        var codH18 = `${doc.data().Codigo18}`;
        var canCod18 = `${doc.data().cantiCod18}`;

        var codH19 = `${doc.data().Codigo19}`;
        var canCod19 = `${doc.data().cantiCod19}`;

        var codH20 = `${doc.data().Codigo20}`;
        var canCod20 = `${doc.data().cantiCod20}`;

        var codH21 = `${doc.data().Codigo21}`;
        var canCod21 = `${doc.data().cantiCod21}`;

        var codH22 = `${doc.data().Codigo22}`;
        var canCod22 = `${doc.data().cantiCod22}`;

        var codH23 = `${doc.data().Codigo23}`;
        var canCod23 = `${doc.data().cantiCod23}`;

        var codH24 = `${doc.data().Codigo24}`;
        var canCod24 = `${doc.data().cantiCod24}`;

        var codH25 = `${doc.data().Codigo25}`;
        var canCod25 = `${doc.data().cantiCod25}`;

        var codH26 = `${doc.data().Codigo26}`;
        var canCod26 = `${doc.data().cantiCod26}`;

        var codH27 = `${doc.data().Codigo27}`;
        var canCod27 = `${doc.data().cantiCod27}`;

        var codH28 = `${doc.data().Codigo28}`;
        var canCod28 = `${doc.data().cantiCod28}`;

        var codH29 = `${doc.data().Codigo29}`;
        var canCod29 = `${doc.data().cantiCod29}`;

        var codH30 = `${doc.data().Codigo30}`;
        var canCod30 = `${doc.data().cantiCod30}`;

        var codH31 = `${doc.data().Codigo31}`;
        var canCod31 = `${doc.data().cantiCod31}`;

        var codH32 = `${doc.data().Codigo32}`;
        var canCod32 = `${doc.data().cantiCod32}`;

        var codH33 = `${doc.data().Codigo33}`;
        var canCod33 = `${doc.data().cantiCod33}`;

        var codH34 = `${doc.data().Codigo34}`;
        var canCod34 = `${doc.data().cantiCod34}`;

        var codH35 = `${doc.data().Codigo35}`;
        var canCod35 = `${doc.data().cantiCod35}`;

        var codH36 = `${doc.data().Codigo36}`;
        var canCod36 = `${doc.data().cantiCod36}`;

        var codH37 = `${doc.data().Codigo37}`;
        var canCod37 = `${doc.data().cantiCod37}`;

        var codH38 = `${doc.data().Codigo38}`;
        var canCod38 = `${doc.data().cantiCod38}`;

        var codH39 = `${doc.data().Codigo39}`;
        var canCod39 = `${doc.data().cantiCod39}`;

        var codH40 = `${doc.data().Codigo40}`;
        var canCod40 = `${doc.data().cantiCod40}`;

        var codH41 = `${doc.data().Codigo41}`;
        var canCod41 = `${doc.data().cantiCod41}`;

        var codH42 = `${doc.data().Codigo42}`;
        var canCod42 = `${doc.data().cantiCod42}`;

        var codH43 = `${doc.data().Codigo43}`;
        var canCod43 = `${doc.data().cantiCod43}`;

        var codH44 = `${doc.data().Codigo44}`;
        var canCod44 = `${doc.data().cantiCod44}`;

        var codH45 = `${doc.data().Codigo45}`;
        var canCod45 = `${doc.data().cantiCod45}`;

        var codH46 = `${doc.data().Codigo46}`;
        var canCod46 = `${doc.data().cantiCod46}`;

        var codH47 = `${doc.data().Codigo47}`;
        var canCod47 = `${doc.data().cantiCod47}`;

        var codH48 = `${doc.data().Codigo48}`;
        var canCod48 = `${doc.data().cantiCod48}`;

        var codH49 = `${doc.data().Codigo49}`;
        var canCod49 = `${doc.data().cantiCod49}`;

        var codH50 = `${doc.data().Codigo50}`;
        var canCod50 = `${doc.data().cantiCod50}`;

        if (isNaN(canCod1)) {
          canCod1 = 150;
        }
        if (isNaN(canCod2)) {
          canCod2 = 150;
        }
        if (isNaN(canCod3)) {
          canCod3 = 150;
        }
        if (isNaN(canCod4)) {
          canCod4 = 150;
        }
        if (isNaN(canCod5)) {
          canCod22 = 150;
        }
        if (isNaN(canCod6)) {
          canCod6 = 150;
        }
        if (isNaN(canCod7)) {
          canCod7 = 150;
        }
        if (isNaN(canCod8)) {
          canCod8 = 150;
        }
        if (isNaN(canCod9)) {
          canCod9 = 150;
        }
        if (isNaN(canCod10)) {
          canCod10 = 150;
        }
        if (isNaN(canCod11)) {
          canCod11 = 150;
        }
        if (isNaN(canCod12)) {
          canCod12 = 150;
        }
        if (isNaN(canCod13)) {
          canCod13 = 150;
        }

        if (isNaN(canCod14)) {
          canCod14 = 150;
        }

        if (isNaN(canCod15)) {
          canCod15 = 150;
        }
        if (isNaN(canCod16)) {
          canCod16 = 150;
        }
        if (isNaN(canCod17)) {
          canCod17 = 150;
        }
        if (isNaN(canCod18)) {
          canCod18 = 150;
        }
        if (isNaN(canCod19)) {
          canCod19 = 150;
        }
        if (isNaN(canCod20)) {
          canCod20 = 150;
        }
        if (isNaN(canCod21)) {
          canCod21 = 150;
        }
        if (isNaN(canCod22)) {
          canCod22 = 150;
        }
        if (isNaN(canCod23)) {
          canCod23 = 150;
        }
        if (isNaN(canCod24)) {
          canCod24 = 150;
        }
        if (isNaN(canCod25)) {
          canCod25 = 150;
        }
        if (isNaN(canCod26)) {
          canCod26 = 150;
        }
        if (isNaN(canCod27)) {
          canCod27 = 150;
        }
        if (isNaN(canCod28)) {
          canCod28 = 150;
        }

        if (isNaN(canCod29)) {
          canCod29 = 150;
        }

        if (isNaN(canCod30)) {
          canCod30 = 150;
        }
        if (isNaN(canCod31)) {
          canCod31 = 150;
        }
        if (isNaN(canCod32)) {
          canCod32 = 150;
        }
        if (isNaN(canCod33)) {
          canCod33 = 150;
        }
        if (isNaN(canCod34)) {
          canCod34 = 150;
        }
        if (isNaN(canCod35)) {
          canCod35 = 150;
        }
        if (isNaN(canCod36)) {
          canCod36 = 150;
        }
        if (isNaN(canCod37)) {
          canCod37 = 150;
        }
        if (isNaN(canCod38)) {
          canCod38 = 150;
        }
        if (isNaN(canCod39)) {
          canCod39 = 150;
        }
        if (isNaN(canCod40)) {
          canCod40 = 150;
        }
        if (isNaN(canCod41)) {
          canCod41 = 150;
        }
        if (isNaN(canCod42)) {
          canCod42 = 150;
        }
        if (isNaN(canCod43)) {
          canCod43 = 150;
        }
        if (isNaN(canCod44)) {
          canCod44 = 150;
        }
        if (isNaN(canCod45)) {
          canCod45 = 150;
        }
        if (isNaN(canCod46)) {
          canCod46 = 150;
        }
        if (isNaN(canCod47)) {
          canCod47 = 150;
        }
        if (isNaN(canCod48)) {
          canCod48 = 150;
        }
        if (isNaN(canCod49)) {
          canCod49 = 150;
        }
        if (isNaN(canCod50)) {
          canCod50s = 150;
        }




        /* if (unidadesElaboradaop > cantiCod1 || unidadesElaboradaop > cantiCod2 || unidadesElaboradaop > cantiCod3  || unidadesElaboradaop > cantiCod4 || unidadesElaboradaop > cantiCod5 || unidadesElaboradaop > cantiCod6   || unidadesElaboradaop > cantiCod7 || unidadesElaboradaop > cantiCod8 || unidadesElaboradaop > cantiCod9   || unidadesElaboradaop > cantiCod10 || unidadesElaboradaop > cantiCod11 || unidadesElaboradaop > cantiCod12 || unidadesElaboradaop > cantiCod13 || unidadesElaboradaop > cantiCod14 || unidadesElaboradaop > cantiCod15 || unidadesElaboradaop > cantiCod16 || unidadesElaboradaop > cantiCod17                       || unidadesElaboradaop > cantiCod18 || unidadesElaboradaop > cantiCod19 ||               unidadesElaboradaop > cantiCod20 || unidadesElaboradaop > cantiCod21 || unidadesElaboradaop > cantiCod22   || unidadesElaboradaop > cantiCod23 || unidadesElaboradaop > cantiCod24 ||                unidadesElaboradaop > cantiCod25 || unidadesElaboradaop > cantiCod26 || unidadesElaboradaop > cantiCod27   || unidadesElaboradaop > cantiCod28 || unidadesElaboradaop > cantiCod29 ||               unidadesElaboradaop > cantiCod30 || unidadesElaboradaop > cantiCod31 || unidadesElaboradaop > cantiCod32   || unidadesElaboradaop > cantiCod33 || unidadesElaboradaop > cantiCod34 ||              unidadesElaboradaop > cantiCod35 || unidadesElaboradaop > cantiCod36 || unidadesElaboradaop > cantiCod37   || unidadesElaboradaop > cantiCod38 || unidadesElaboradaop > cantiCod39 ||               unidadesElaboradaop > cantiCod40 || unidadesElaboradaop > cantiCod41 || unidadesElaboradaop > cantiCod42   || unidadesElaboradaop > cantiCod43 || unidadesElaboradaop > cantiCod44 ||              unidadesElaboradaop > cantiCod45 || unidadesElaboradaop > cantiCod46 || unidadesElaboradaop > cantiCod47   || unidadesElaboradaop > cantiCod48 || unidadesElaboradaop > cantiCod49 ||              unidadesElaboradaop > cantiCod50) {
 
           alert("Ha excedido la cantidad de registros permitidos...");
          
         }*/
        //------------------------------------------------------------------------------------------------
        // else {
        //alert("podemos registrar");
        cantidadCod1ResOp1 = 0;
        cantidadCod1ResOp2 = 0;
        cantidadCod1ResOp3 = 0;

        cantidadCod1ResOp4 = 0;
        cantidadCod1ResOp5 = 0;
        cantidadCod1ResOp6 = 0;

        cantidadCod1ResOp7 = 0;
        cantidadCod1ResOp8 = 0;
        cantidadCod1ResOp9 = 0;


        //-------------------------------2---------------------------
        cantidadCod2ResOp1 = 0;
        cantidadCod2ResOp2 = 0;
        cantidadCod2ResOp3 = 0;

        cantidadCod2ResOp4 = 0;
        cantidadCod2ResOp5 = 0;
        cantidadCod2ResOp6 = 0;

        cantidadCod2ResOp7 = 0;
        cantidadCod2ResOp8 = 0;
        cantidadCod2ResOp9 = 0;

        //-----------------------------------3-----------------------------
        cantidadCod3ResOp1 = 0;
        cantidadCod3ResOp2 = 0;
        cantidadCod3ResOp3 = 0;

        cantidadCod3ResOp4 = 0;
        cantidadCod3ResOp5 = 0;
        cantidadCod3ResOp6 = 0;

        cantidadCod3ResOp7 = 0;
        cantidadCod3ResOp8 = 0;
        cantidadCod3ResOp9 = 0;


        //----------------------------------espacio 4---------------------------------------

        cantidadCod4ResOp1 = 0;
        cantidadCod4ResOp2 = 0;
        cantidadCod4ResOp3 = 0;

        cantidadCod4ResOp4 = 0;
        cantidadCod4ResOp5 = 0;
        cantidadCod4ResOp6 = 0;

        cantidadCod4ResOp7 = 0;
        cantidadCod4ResOp8 = 0;
        cantidadCod4ResOp9 = 0;



        //----------------------------------espacio 5---------------------------------------

        cantidadCod5ResOp1 = 0;
        cantidadCod5ResOp2 = 0;
        cantidadCod5ResOp3 = 0;

        cantidadCod5ResOp4 = 0;
        cantidadCod5ResOp5 = 0;
        cantidadCod5ResOp6 = 0;

        cantidadCod5ResOp7 = 0;
        cantidadCod5ResOp8 = 0;
        cantidadCod5ResOp9 = 0;



        //----------------------------------espacio 6---------------------------------------

        cantidadCod6ResOp1 = 0;
        cantidadCod6ResOp2 = 0;
        cantidadCod6ResOp3 = 0;

        cantidadCod6ResOp4 = 0;
        cantidadCod6ResOp5 = 0;
        cantidadCod6ResOp6 = 0;

        cantidadCod6ResOp7 = 0;
        cantidadCod6ResOp8 = 0;
        cantidadCod6ResOp9 = 0;



        //----------------------------------espacio 7---------------------------------------

        cantidadCod7ResOp1 = 0;
        cantidadCod7ResOp2 = 0;
        cantidadCod7ResOp3 = 0;

        cantidadCod7ResOp4 = 0;
        cantidadCod7ResOp5 = 0;
        cantidadCod7ResOp6 = 0;

        cantidadCod7ResOp7 = 0;
        cantidadCod7ResOp8 = 0;
        cantidadCod7ResOp9 = 0;


        //----------------------------------espacio 8---------------------------------------

        cantidadCod8ResOp1 = 0;
        cantidadCod8ResOp2 = 0;
        cantidadCod8ResOp3 = 0;

        cantidadCod8ResOp4 = 0;
        cantidadCod8ResOp5 = 0;
        cantidadCod8ResOp6 = 0;

        cantidadCod8ResOp7 = 0;
        cantidadCod8ResOp8 = 0;
        cantidadCod8ResOp9 = 0;

        //----------------------------------espacio 9---------------------------------------

        cantidadCod9ResOp1 = 0;
        cantidadCod9ResOp2 = 0;
        cantidadCod9ResOp3 = 0;

        cantidadCod9ResOp4 = 0;
        cantidadCod9ResOp5 = 0;
        cantidadCod9ResOp6 = 0;

        cantidadCod9ResOp7 = 0;
        cantidadCod9ResOp8 = 0;
        cantidadCod9ResOp9 = 0;


        //----------------------------------espacio 10---------------------------------------

        cantidadCod10ResOp1 = 0;
        cantidadCod10ResOp2 = 0;
        cantidadCod10ResOp3 = 0;

        cantidadCod10ResOp4 = 0;
        cantidadCod10ResOp5 = 0;
        cantidadCod10ResOp6 = 0;

        cantidadCod10ResOp7 = 0;
        cantidadCod10ResOp8 = 0;
        cantidadCod10ResOp9 = 0;




        //----------------------------------espacio 11---------------------------------------

        cantidadCod11ResOp1 = 0;
        cantidadCod11ResOp2 = 0;
        cantidadCod11ResOp3 = 0;

        cantidadCod11ResOp4 = 0;
        cantidadCod11ResOp5 = 0;
        cantidadCod11ResOp6 = 0;

        cantidadCod11ResOp7 = 0;
        cantidadCod11ResOp8 = 0;
        cantidadCod11ResOp9 = 0;



        //----------------------------------espacio 12---------------------------------------

        cantidadCod12ResOp1 = 0;
        cantidadCod12ResOp2 = 0;
        cantidadCod12ResOp3 = 0;

        cantidadCod12ResOp4 = 0;
        cantidadCod12ResOp5 = 0;
        cantidadCod12ResOp6 = 0;

        cantidadCod12ResOp7 = 0;
        cantidadCod12ResOp8 = 0;
        cantidadCod12ResOp9 = 0;



        //----------------------------------espacio 13---------------------------------------

        cantidadCod13ResOp1 = 0;
        cantidadCod13ResOp2 = 0;
        cantidadCod13ResOp3 = 0;

        cantidadCod13ResOp4 = 0;
        cantidadCod13ResOp5 = 0;
        cantidadCod13ResOp6 = 0;

        cantidadCod13ResOp7 = 0;
        cantidadCod13ResOp8 = 0;
        cantidadCod13ResOp9 = 0;




        //----------------------------------espacio 14---------------------------------------

        cantidadCod14ResOp1 = 0;
        cantidadCod14ResOp2 = 0;
        cantidadCod14ResOp3 = 0;

        cantidadCod14ResOp4 = 0;
        cantidadCod14ResOp5 = 0;
        cantidadCod14ResOp6 = 0;

        cantidadCod14ResOp7 = 0;
        cantidadCod14ResOp8 = 0;
        cantidadCod14ResOp9 = 0;


        //----------------------------------espacio 15---------------------------------------

        cantidadCod15ResOp1 = 0;
        cantidadCod15ResOp2 = 0;
        cantidadCod15ResOp3 = 0;

        cantidadCod15ResOp4 = 0;
        cantidadCod15ResOp5 = 0;
        cantidadCod15ResOp6 = 0;

        cantidadCod15ResOp7 = 0;
        cantidadCod15ResOp8 = 0;
        cantidadCod15ResOp9 = 0;



        //----------------------------------espacio 16---------------------------------------

        cantidadCod16ResOp1 = 0;
        cantidadCod16ResOp2 = 0;
        cantidadCod16ResOp3 = 0;

        cantidadCod16ResOp4 = 0;
        cantidadCod16ResOp5 = 0;
        cantidadCod16ResOp6 = 0;

        cantidadCod16ResOp7 = 0;
        cantidadCod16ResOp8 = 0;
        cantidadCod16ResOp9 = 0;


        //----------------------------------espacio 17---------------------------------------

        cantidadCod17ResOp1 = 0;
        cantidadCod17ResOp2 = 0;
        cantidadCod17ResOp3 = 0;

        cantidadCod17ResOp4 = 0;
        cantidadCod17ResOp5 = 0;
        cantidadCod17ResOp6 = 0;

        cantidadCod17ResOp7 = 0;
        cantidadCod17ResOp8 = 0;
        cantidadCod17ResOp9 = 0;


        //----------------------------------espacio 18---------------------------------------

        cantidadCod18ResOp1 = 0;
        cantidadCod18ResOp2 = 0;
        cantidadCod18ResOp3 = 0;

        cantidadCod18ResOp4 = 0;
        cantidadCod18ResOp5 = 0;
        cantidadCod18ResOp6 = 0;

        cantidadCod18ResOp7 = 0;
        cantidadCod18ResOp8 = 0;
        cantidadCod18ResOp9 = 0;


        //----------------------------------espacio 19---------------------------------------

        cantidadCod19ResOp1 = 0;
        cantidadCod19ResOp2 = 0;
        cantidadCod19ResOp3 = 0;

        cantidadCod19ResOp4 = 0;
        cantidadCod19ResOp5 = 0;
        cantidadCod19ResOp6 = 0;

        cantidadCod19ResOp7 = 0;
        cantidadCod19ResOp8 = 0;
        cantidadCod19ResOp9 = 0;


        //----------------------------------espacio 20---------------------------------------

        cantidadCod20ResOp1 = 0;
        cantidadCod20ResOp2 = 0;
        cantidadCod20ResOp3 = 0;

        cantidadCod20ResOp4 = 0;
        cantidadCod20ResOp5 = 0;
        cantidadCod20ResOp6 = 0;

        cantidadCod20ResOp7 = 0;
        cantidadCod20ResOp8 = 0;
        cantidadCod20ResOp9 = 0;


        //----------------------------------espacio 21---------------------------------------

        cantidadCod21ResOp1 = 0;
        cantidadCod21ResOp2 = 0;
        cantidadCod21ResOp3 = 0;

        cantidadCod21ResOp4 = 0;
        cantidadCod21ResOp5 = 0;
        cantidadCod21ResOp6 = 0;

        cantidadCod21ResOp7 = 0;
        cantidadCod21ResOp8 = 0;
        cantidadCod21ResOp9 = 0;



        //----------------------------------espacio 22---------------------------------------

        cantidadCod22ResOp1 = 0;
        cantidadCod22ResOp2 = 0;
        cantidadCod22ResOp3 = 0;

        cantidadCod22ResOp4 = 0;
        cantidadCod22ResOp5 = 0;
        cantidadCod22ResOp6 = 0;

        cantidadCod22ResOp7 = 0;
        cantidadCod22ResOp8 = 0;
        cantidadCod22ResOp9 = 0;


        //----------------------------------espacio 23---------------------------------------

        cantidadCod23ResOp1 = 0;
        cantidadCod23ResOp2 = 0;
        cantidadCod23ResOp3 = 0;

        cantidadCod23ResOp4 = 0;
        cantidadCod23ResOp5 = 0;
        cantidadCod23ResOp6 = 0;

        cantidadCod23ResOp7 = 0;
        cantidadCod23ResOp8 = 0;
        cantidadCod23ResOp9 = 0;


        //----------------------------------espacio 24---------------------------------------

        cantidadCod24ResOp1 = 0;
        cantidadCod24ResOp2 = 0;
        cantidadCod24ResOp3 = 0;

        cantidadCod24ResOp4 = 0;
        cantidadCod24ResOp5 = 0;
        cantidadCod24ResOp6 = 0;

        cantidadCod24ResOp7 = 0;
        cantidadCod24ResOp8 = 0;
        cantidadCod24ResOp9 = 0;


        //----------------------------------espacio 25---------------------------------------

        cantidadCod25ResOp1 = 0;
        cantidadCod25ResOp2 = 0;
        cantidadCod25ResOp3 = 0;

        cantidadCod25ResOp4 = 0;
        cantidadCod25ResOp5 = 0;
        cantidadCod25ResOp6 = 0;

        cantidadCod25ResOp7 = 0;
        cantidadCod25ResOp8 = 0;
        cantidadCod25ResOp9 = 0;


        //----------------------------------espacio 26---------------------------------------

        cantidadCod26ResOp1 = 0;
        cantidadCod26ResOp2 = 0;
        cantidadCod26ResOp3 = 0;

        cantidadCod26ResOp4 = 0;
        cantidadCod26ResOp5 = 0;
        cantidadCod26ResOp6 = 0;

        cantidadCod26ResOp7 = 0;
        cantidadCod26ResOp8 = 0;
        cantidadCod26ResOp9 = 0;


        //----------------------------------espacio 27---------------------------------------

        cantidadCod27ResOp1 = 0;
        cantidadCod27ResOp2 = 0;
        cantidadCod27ResOp3 = 0;

        cantidadCod27ResOp4 = 0;
        cantidadCod27ResOp5 = 0;
        cantidadCod27ResOp6 = 0;

        cantidadCod27ResOp7 = 0;
        cantidadCod27ResOp8 = 0;
        cantidadCod27ResOp9 = 0;


        //----------------------------------espacio 28---------------------------------------

        cantidadCod28ResOp1 = 0;
        cantidadCod28ResOp2 = 0;
        cantidadCod28ResOp3 = 0;

        cantidadCod28ResOp4 = 0;
        cantidadCod28ResOp5 = 0;
        cantidadCod28ResOp6 = 0;

        cantidadCod28ResOp7 = 0;
        cantidadCod28ResOp8 = 0;
        cantidadCod28ResOp9 = 0;


        //----------------------------------espacio 29---------------------------------------

        cantidadCod29ResOp1 = 0;
        cantidadCod29ResOp2 = 0;
        cantidadCod29ResOp3 = 0;

        cantidadCod29ResOp4 = 0;
        cantidadCod29ResOp5 = 0;
        cantidadCod29ResOp6 = 0;

        cantidadCod29ResOp7 = 0;
        cantidadCod29ResOp8 = 0;
        cantidadCod29ResOp9 = 0;


        //----------------------------------espacio 30---------------------------------------

        cantidadCod30ResOp1 = 0;
        cantidadCod30ResOp2 = 0;
        cantidadCod30ResOp3 = 0;

        cantidadCod30ResOp4 = 0;
        cantidadCod30ResOp5 = 0;
        cantidadCod30ResOp6 = 0;

        cantidadCod30ResOp7 = 0;
        cantidadCod30ResOp8 = 0;
        cantidadCod30ResOp9 = 0;




        //----------------------------------espacio 31---------------------------------------

        cantidadCod31ResOp1 = 0;
        cantidadCod31ResOp2 = 0;
        cantidadCod31ResOp3 = 0;

        cantidadCod31ResOp4 = 0;
        cantidadCod31ResOp5 = 0;
        cantidadCod31ResOp6 = 0;

        cantidadCod31ResOp7 = 0;
        cantidadCod31ResOp8 = 0;
        cantidadCod31ResOp9 = 0;
        //----------------------------------espacio 32---------------------------------------

        cantidadCod32ResOp1 = 0;
        cantidadCod32ResOp2 = 0;
        cantidadCod32ResOp3 = 0;

        cantidadCod32ResOp4 = 0;
        cantidadCod32ResOp5 = 0;
        cantidadCod32ResOp6 = 0;

        cantidadCod32ResOp7 = 0;
        cantidadCod32ResOp8 = 0;
        cantidadCod32ResOp9 = 0;


        //----------------------------------espacio 33---------------------------------------

        cantidadCod33ResOp1 = 0;
        cantidadCod33ResOp2 = 0;
        cantidadCod33ResOp3 = 0;

        cantidadCod33ResOp4 = 0;
        cantidadCod33ResOp5 = 0;
        cantidadCod33ResOp6 = 0;

        cantidadCod33ResOp7 = 0;
        cantidadCod33ResOp8 = 0;
        cantidadCod33ResOp9 = 0;

        //----------------------------------espacio 34---------------------------------------

        cantidadCod34ResOp1 = 0;
        cantidadCod34ResOp2 = 0;
        cantidadCod34ResOp3 = 0;

        cantidadCod34ResOp4 = 0;
        cantidadCod34ResOp5 = 0;
        cantidadCod34ResOp6 = 0;

        cantidadCod34ResOp7 = 0;
        cantidadCod34ResOp8 = 0;
        cantidadCod34ResOp9 = 0;


        //----------------------------------espacio 35---------------------------------------

        cantidadCod35ResOp1 = 0;
        cantidadCod35ResOp2 = 0;
        cantidadCod35ResOp3 = 0;

        cantidadCod35ResOp4 = 0;
        cantidadCod35ResOp5 = 0;
        cantidadCod35ResOp6 = 0;

        cantidadCod35ResOp7 = 0;
        cantidadCod35ResOp8 = 0;
        cantidadCod35ResOp9 = 0;

        //----------------------------------espacio 36---------------------------------------

        cantidadCod36ResOp1 = 0;
        cantidadCod36ResOp2 = 0;
        cantidadCod36ResOp3 = 0;

        cantidadCod36ResOp4 = 0;
        cantidadCod36ResOp5 = 0;
        cantidadCod36ResOp6 = 0;

        cantidadCod36ResOp7 = 0;
        cantidadCod36ResOp8 = 0;
        cantidadCod36ResOp9 = 0;

        //----------------------------------espacio 37---------------------------------------

        cantidadCod37ResOp1 = 0;
        cantidadCod37ResOp2 = 0;
        cantidadCod37ResOp3 = 0;

        cantidadCod37ResOp4 = 0;
        cantidadCod37ResOp5 = 0;
        cantidadCod37ResOp6 = 0;

        cantidadCod37ResOp7 = 0;
        cantidadCod37ResOp8 = 0;
        cantidadCod37ResOp9 = 0;


        //----------------------------------espacio 38---------------------------------------

        cantidadCod38ResOp1 = 0;
        cantidadCod38ResOp2 = 0;
        cantidadCod38ResOp3 = 0;

        cantidadCod38ResOp4 = 0;
        cantidadCod38ResOp5 = 0;
        cantidadCod38ResOp6 = 0;

        cantidadCod38ResOp7 = 0;
        cantidadCod38ResOp8 = 0;
        cantidadCod38ResOp9 = 0;


        //----------------------------------espacio 39---------------------------------------

        cantidadCod39ResOp1 = 0;
        cantidadCod39ResOp2 = 0;
        cantidadCod39ResOp3 = 0;

        cantidadCod39ResOp4 = 0;
        cantidadCod39ResOp5 = 0;
        cantidadCod39ResOp6 = 0;

        cantidadCod39ResOp7 = 0;
        cantidadCod39ResOp8 = 0;
        cantidadCod39ResOp9 = 0;


        //----------------------------------espacio 40---------------------------------------

        cantidadCod40ResOp1 = 0;
        cantidadCod40ResOp2 = 0;
        cantidadCod40ResOp3 = 0;

        cantidadCod40ResOp4 = 0;
        cantidadCod40ResOp5 = 0;
        cantidadCod40ResOp6 = 0;

        cantidadCod40ResOp7 = 0;
        cantidadCod40ResOp8 = 0;
        cantidadCod40ResOp9 = 0;



        //----------------------------------espacio 41---------------------------------------

        cantidadCod41ResOp1 = 0;
        cantidadCod41ResOp2 = 0;
        cantidadCod41ResOp3 = 0;

        cantidadCod41ResOp4 = 0;
        cantidadCod41ResOp5 = 0;
        cantidadCod41ResOp6 = 0;

        cantidadCod41ResOp7 = 0;
        cantidadCod41ResOp8 = 0;
        cantidadCod41ResOp9 = 0;

        //----------------------------------espacio 42---------------------------------------

        cantidadCod42ResOp1 = 0;
        cantidadCod42ResOp2 = 0;
        cantidadCod42ResOp3 = 0;

        cantidadCod42ResOp4 = 0;
        cantidadCod42ResOp5 = 0;
        cantidadCod42ResOp6 = 0;

        cantidadCod42ResOp7 = 0;
        cantidadCod42ResOp8 = 0;
        cantidadCod42ResOp9 = 0;

        //----------------------------------espacio 43---------------------------------------

        cantidadCod43ResOp1 = 0;
        cantidadCod43ResOp2 = 0;
        cantidadCod43ResOp3 = 0;

        cantidadCod43ResOp4 = 0;
        cantidadCod43ResOp5 = 0;
        cantidadCod43ResOp6 = 0;

        cantidadCod43ResOp7 = 0;
        cantidadCod43ResOp8 = 0;
        cantidadCod43ResOp9 = 0;

        //----------------------------------espacio 44---------------------------------------

        cantidadCod44ResOp1 = 0;
        cantidadCod44ResOp2 = 0;
        cantidadCod44ResOp3 = 0;

        cantidadCod44ResOp4 = 0;
        cantidadCod44ResOp5 = 0;
        cantidadCod44ResOp6 = 0;

        cantidadCod44ResOp7 = 0;
        cantidadCod44ResOp8 = 0;
        cantidadCod44ResOp9 = 0;

        //----------------------------------espacio 45---------------------------------------

        cantidadCod45ResOp1 = 0;
        cantidadCod45ResOp2 = 0;
        cantidadCod45ResOp3 = 0;

        cantidadCod45ResOp4 = 0;
        cantidadCod45ResOp5 = 0;
        cantidadCod45ResOp6 = 0;

        cantidadCod45ResOp7 = 0;
        cantidadCod45ResOp8 = 0;
        cantidadCod45ResOp9 = 0;

        //----------------------------------espacio 46---------------------------------------

        cantidadCod46ResOp1 = 0;
        cantidadCod46ResOp2 = 0;
        cantidadCod46ResOp3 = 0;

        cantidadCod46ResOp4 = 0;
        cantidadCod46ResOp5 = 0;
        cantidadCod46ResOp6 = 0;

        cantidadCod46ResOp7 = 0;
        cantidadCod46ResOp8 = 0;
        cantidadCod46ResOp9 = 0;

        //----------------------------------espacio 47---------------------------------------

        cantidadCod47ResOp1 = 0;
        cantidadCod47ResOp2 = 0;
        cantidadCod47ResOp3 = 0;

        cantidadCod47ResOp4 = 0;
        cantidadCod47ResOp5 = 0;
        cantidadCod47ResOp6 = 0;

        cantidadCod47ResOp7 = 0;
        cantidadCod47ResOp8 = 0;
        cantidadCod47ResOp9 = 0;


        //----------------------------------espacio 48---------------------------------------

        cantidadCod48ResOp1 = 0;
        cantidadCod48ResOp2 = 0;
        cantidadCod48ResOp3 = 0;

        cantidadCod48ResOp4 = 0;
        cantidadCod48ResOp5 = 0;
        cantidadCod48ResOp6 = 0;

        cantidadCod48ResOp7 = 0;
        cantidadCod48ResOp8 = 0;
        cantidadCod48ResOp9 = 0;


        //----------------------------------espacio 49---------------------------------------

        cantidadCod49ResOp1 = 0;
        cantidadCod49ResOp2 = 0;
        cantidadCod49ResOp3 = 0;

        cantidadCod49ResOp4 = 0;
        cantidadCod49ResOp5 = 0;
        cantidadCod49ResOp6 = 0;

        cantidadCod49ResOp7 = 0;
        cantidadCod49ResOp8 = 0;
        cantidadCod49ResOp9 = 0;

        //----------------------------------espacio 50---------------------------------------

        cantidadCod50ResOp1 = 0;
        cantidadCod50ResOp2 = 0;
        cantidadCod50ResOp3 = 0;

        cantidadCod50ResOp4 = 0;
        cantidadCod50ResOp5 = 0;
        cantidadCod50ResOp6 = 0;

        cantidadCod50ResOp7 = 0;
        cantidadCod50ResOp8 = 0;
        cantidadCod50ResOp9 = 0;

        //----------------------------------espacio 1--------------------------------
        if (opera1 == codH1) {


          cantidadCod1ResOp1 = canCod1 - unidadesElaboradaop;
        }

        if (opera1 == codH2) {

          cantidadCod2ResOp1 = canCod2 - unidadesElaboradaop;
        }

        if (opera1 == codH3) {

          cantidadCod3ResOp1 = canCod3 - unidadesElaboradaop;
        }
        if (opera1 == codH4) {


          cantidadCod4ResOp1 = canCod4 - unidadesElaboradaop;
        }

        if (opera1 == codH5) {

          cantidadCod5ResOp1 = canCod5 - unidadesElaboradaop;
        }

        if (opera1 == codH6) {

          cantidadCod6ResOp1 = canCod6 - unidadesElaboradaop;
        }
        if (opera1 == codH7) {


          cantidadCod7ResOp1 = canCod7 - unidadesElaboradaop;
        }

        if (opera1 == codH8) {

          cantidadCod8ResOp1 = canCod8 - unidadesElaboradaop;
        }

        if (opera1 == codH9) {

          cantidadCod9ResOp1 = canCod9 - unidadesElaboradaop;
        }
        if (opera1 == codH10) {

          cantidadCod10ResOp1 = canCod10 - unidadesElaboradaop;
        }


        if (opera1 == codH11) {


          cantidadCod11ResOp1 = canCod11 - unidadesElaboradaop;
        }

        if (opera1 == codH12) {

          cantidadCod12ResOp1 = canCod12 - unidadesElaboradaop;
        }

        if (opera1 == codH13) {

          cantidadCod13ResOp1 = canCod13 - unidadesElaboradaop;
        }
        if (opera1 == codH14) {


          cantidadCod14ResOp1 = canCod14 - unidadesElaboradaop;
        }

        if (opera1 == codH15) {

          cantidadCod15ResOp1 = canCod15 - unidadesElaboradaop;
        }

        if (opera1 == codH16) {

          cantidadCod16ResOp1 = canCod16 - unidadesElaboradaop;
          console.log("EL DIECIEIAS REPORT:" + cantidadCod16ResOp1);
          console.log("EL DIECIEIAS REPORT el codigo:" + codH16);

        }
        if (opera1 == codH17) {


          cantidadCod17ResOp1 = canCod17 - unidadesElaboradaop;
        }

        if (opera1 == codH18) {

          cantidadCod18ResOp1 = canCod18 - unidadesElaboradaop;
          //  console.log("opera 1 cod18"+cantidadCod18ResOp1);
        }

        if (opera1 == codH19) {

          cantidadCod19ResOp1 = canCod19 - unidadesElaboradaop;
          console.log("opera 1 cod19 heeeeeeeeeey" + cantidadCod19ResOp1);
        }
        if (opera1 == codH20) {

          cantidadCod20ResOp1 = canCod20 - unidadesElaboradaop;
        }

        if (opera1 == codH21) {


          cantidadCod21ResOp1 = canCod21 - unidadesElaboradaop;
        }

        if (opera1 == codH22) {

          cantidadCod22ResOp1 = canCod22 - unidadesElaboradaop;
        }

        if (opera1 == codH23) {

          cantidadCod23ResOp1 = canCod23 - unidadesElaboradaop;
        }
        if (opera1 == codH24) {


          cantidadCod24ResOp1 = canCod24 - unidadesElaboradaop;
        }

        if (opera1 == codH25) {

          cantidadCod25ResOp1 = canCod25 - unidadesElaboradaop;
        }

        if (opera1 == codH26) {

          cantidadCod26ResOp1 = canCod26 - unidadesElaboradaop;
        }
        if (opera1 == codH27) {


          cantidadCod27ResOp1 = canCod27 - unidadesElaboradaop;
        }

        if (opera1 == codH28) {

          cantidadCod28ResOp1 = canCod28 - unidadesElaboradaop;
        }

        if (opera1 == codH29) {

          cantidadCod29ResOp1 = canCod29 - unidadesElaboradaop;
        }
        if (opera1 == codH30) {

          cantidadCod30ResOp1 = canCod30 - unidadesElaboradaop;
        }

        if (opera1 == codH31) {


          cantidadCod31ResOp1 = canCod31 - unidadesElaboradaop;
        }

        if (opera1 == codH32) {

          cantidadCod32ResOp1 = canCod32 - unidadesElaboradaop;
        }

        if (opera1 == codH33) {

          cantidadCod33ResOp1 = canCod33 - unidadesElaboradaop;
        }
        if (opera1 == codH34) {


          cantidadCod34ResOp1 = canCod34 - unidadesElaboradaop;
        }

        if (opera1 == codH35) {

          cantidadCod35ResOp1 = canCod35 - unidadesElaboradaop;
        }

        if (opera1 == codH36) {

          cantidadCod36ResOp1 = canCod36 - unidadesElaboradaop;
        }
        if (opera1 == codH37) {


          cantidadCod37ResOp1 = canCod37 - unidadesElaboradaop;
        }

        if (opera1 == codH38) {

          cantidadCod38ResOp1 = canCod38 - unidadesElaboradaop;
        }

        if (opera1 == codH39) {

          cantidadCod39ResOp1 = canCod39 - unidadesElaboradaop;
        }
        if (opera1 == codH40) {

          cantidadCod40ResOp1 = canCod40 - unidadesElaboradaop;
        }

        if (opera1 == codH41) {


          cantidadCod41ResOp1 = canCod41 - unidadesElaboradaop;
        }

        if (opera1 == codH42) {

          cantidadCod42ResOp1 = canCod42 - unidadesElaboradaop;
        }

        if (opera1 == codH43) {

          cantidadCod43ResOp1 = canCod43 - unidadesElaboradaop;
        }
        if (opera1 == codH44) {


          cantidadCod44ResOp1 = canCod44 - unidadesElaboradaop;
        }

        if (opera1 == codH45) {

          cantidadCod45ResOp1 = canCod45 - unidadesElaboradaop;
        }

        if (opera1 == codH46) {

          cantidadCod46ResOp1 = canCod46 - unidadesElaboradaop;
        }
        if (opera1 == codH47) {


          cantidadCod47ResOp1 = canCod47 - unidadesElaboradaop;
        }

        if (opera1 == codH48) {

          cantidadCod48ResOp1 = canCod48 - unidadesElaboradaop;
        }

        if (opera1 == codH49) {

          cantidadCod49ResOp1 = canCod49 - unidadesElaboradaop;
        }
        if (opera1 == codH50) {

          cantidadCod50ResOp1 = canCod50 - unidadesElaboradaop;
        }
        //----------------------------------espacio 2---------------------------------------
        if (opera2 == codH1) {

          cantidadCod1ResOp2 = canCod1 - unidadesElaboradaop;
        }

        if (opera2 == codH2) {

          cantidadCod2ResOp2 = canCod2 - unidadesElaboradaop;
        }

        if (opera2 == codH3) {

          cantidadCod3ResOp2 = canCod3 - unidadesElaboradaop;
        }



        if (opera2 == codH4) {

          cantidadCod4ResOp2 = canCod4 - unidadesElaboradaop;
        }

        if (opera2 == codH5) {

          cantidadCod5ResOp2 = canCod5 - unidadesElaboradaop;
        }

        if (opera2 == codH6) {

          cantidadCod6ResOp2 = canCod6 - unidadesElaboradaop;
        }


        if (opera2 == codH7) {

          cantidadCod7ResOp2 = canCod7 - unidadesElaboradaop;
        }

        if (opera2 == codH8) {

          cantidadCod8ResOp2 = canCod8 - unidadesElaboradaop;
        }

        if (opera2 == codH9) {

          cantidadCod9ResOp2 = canCod9 - unidadesElaboradaop;
        }


        if (opera2 == codH10) {

          cantidadCod10ResOp2 = canCod10 - unidadesElaboradaop;
        }

        if (opera2 == codH11) {

          cantidadCod11ResOp2 = canCod11 - unidadesElaboradaop;
        }

        if (opera2 == codH12) {

          cantidadCod12ResOp2 = canCod12 - unidadesElaboradaop;
        }



        if (opera2 == codH13) {

          cantidadCod13ResOp2 = canCod13 - unidadesElaboradaop;
        }

        if (opera2 == codH14) {

          cantidadCod14ResOp2 = canCod14 - unidadesElaboradaop;
        }

        if (opera2 == codH15) {

          cantidadCod15ResOp2 = canCod15 - unidadesElaboradaop;
        }




        if (opera2 == codH16) {

          cantidadCod16ResOp2 = canCod16 - unidadesElaboradaop;
        }

        if (opera2 == codH17) {

          cantidadCod17ResOp2 = canCod17 - unidadesElaboradaop;
        }

        if (opera2 == codH18) {

          cantidadCod18ResOp2 = canCod18 - unidadesElaboradaop;
          //  console.log("opera 2 cod18"+cantidadCod18ResOp2);

        }





        if (opera2 == codH19) {

          cantidadCod19ResOp2 = canCod19 - unidadesElaboradaop;
          console.log("opera 2 cod19" + cantidadCod19ResOp2);

        }

        if (opera2 == codH20) {

          cantidadCod20ResOp2 = canCod20 - unidadesElaboradaop;
        }

        if (opera2 == codH21) {

          cantidadCod21ResOp2 = canCod21 - unidadesElaboradaop;
        }


        if (opera2 == codH22) {

          cantidadCod22ResOp2 = canCod22 - unidadesElaboradaop;
        }

        if (opera2 == codH23) {

          cantidadCod23ResOp2 = canCod23 - unidadesElaboradaop;
        }

        if (opera2 == codH24) {

          cantidadCod24ResOp2 = canCod24 - unidadesElaboradaop;
        }


        if (opera2 == codH25) {

          cantidadCod25ResOp2 = canCod25 - unidadesElaboradaop;
        }

        if (opera2 == codH26) {

          cantidadCod26ResOp2 = canCod26 - unidadesElaboradaop;
        }

        if (opera2 == codH27) {

          cantidadCod27ResOp2 = canCod27 - unidadesElaboradaop;
        }



        if (opera2 == codH28) {

          cantidadCod28ResOp2 = canCod28 - unidadesElaboradaop;
        }

        if (opera2 == codH29) {

          cantidadCod29ResOp2 = canCod29 - unidadesElaboradaop;
        }

        if (opera2 == codH30) {

          cantidadCod30ResOp2 = canCod30 - unidadesElaboradaop;
        }


        if (opera2 == codH31) {

          cantidadCod31ResOp2 = canCod31 - unidadesElaboradaop;
        }

        if (opera2 == codH32) {

          cantidadCod32ResOp2 = canCod32 - unidadesElaboradaop;
        }

        if (opera2 == codH33) {

          cantidadCod33ResOp2 = canCod33 - unidadesElaboradaop;
        }



        if (opera2 == codH34) {

          cantidadCod34ResOp2 = canCod34 - unidadesElaboradaop;
        }

        if (opera2 == codH35) {

          cantidadCod35ResOp2 = canCod35 - unidadesElaboradaop;
        }

        if (opera2 == codH36) {

          cantidadCod36ResOp2 = canCod36 - unidadesElaboradaop;
        }



        if (opera2 == codH37) {

          cantidadCod37ResOp2 = canCod37 - unidadesElaboradaop;
        }

        if (opera2 == codH38) {

          cantidadCod38ResOp2 = canCod38 - unidadesElaboradaop;
        }

        if (opera2 == codH39) {

          cantidadCod39ResOp2 = canCod39 - unidadesElaboradaop;
        }


        if (opera2 == codH40) {

          cantidadCod40ResOp2 = canCod40 - unidadesElaboradaop;
        }

        if (opera2 == codH41) {

          cantidadCod41ResOp2 = canCod41 - unidadesElaboradaop;
        }

        if (opera2 == codH42) {

          cantidadCod42ResOp2 = canCod42 - unidadesElaboradaop;
        }


        if (opera2 == codH43) {

          cantidadCod43ResOp2 = canCod43 - unidadesElaboradaop;
        }

        if (opera2 == codH44) {

          cantidadCod44ResOp2 = canCod44 - unidadesElaboradaop;
        }

        if (opera2 == codH45) {

          cantidadCod45ResOp2 = canCod45 - unidadesElaboradaop;
        }




        if (opera2 == codH46) {

          cantidadCod46ResOp2 = canCod46 - unidadesElaboradaop;
        }

        if (opera2 == codH47) {

          cantidadCod47ResOp2 = canCod47 - unidadesElaboradaop;
        }

        if (opera2 == codH48) {

          cantidadCod48ResOp2 = canCod48 - unidadesElaboradaop;
        }



        if (opera2 == codH49) {

          cantidadCod49ResOp2 = canCod49 - unidadesElaboradaop;
        }

        if (opera2 == codH50) {

          cantidadCod50ResOp2 = canCod50 - unidadesElaboradaop;
        }


        //-------------------------------------espacio 3-----------------------------------------

        if (opera3 == codH1) {

          cantidadCod1ResOp3 = canCod1 - unidadesElaboradaop;
        }

        if (opera3 == codH2) {

          cantidadCod2ResOp3 = canCod2 - unidadesElaboradaop;
        }

        if (opera3 == codH3) {

          cantidadCod3ResOp3 = canCod3 - unidadesElaboradaop;
        }
        if (opera3 == codH4) {

          cantidadCod4ResOp3 = canCod4 - unidadesElaboradaop;
        }

        if (opera3 == codH5) {

          cantidadCod5ResOp3 = canCod5 - unidadesElaboradaop;
        }

        if (opera3 == codH6) {

          cantidadCod6ResOp3 = canCod6 - unidadesElaboradaop;
        }
        if (opera3 == codH7) {

          cantidadCod7ResOp3 = canCod7 - unidadesElaboradaop;
        }

        if (opera3 == codH8) {

          cantidadCod8ResOp3 = canCod8 - unidadesElaboradaop;
        }

        if (opera3 == codH9) {

          cantidadCod9ResOp3 = canCod9 - unidadesElaboradaop;
        }
        if (opera3 == codH10) {

          cantidadCod10ResOp3 = canCod10 - unidadesElaboradaop;
        }



        if (opera3 == codH11) {

          cantidadCod11ResOp3 = canCod11 - unidadesElaboradaop;
        }

        if (opera3 == codH12) {

          cantidadCod12ResOp3 = canCod12 - unidadesElaboradaop;
        }

        if (opera3 == codH13) {

          cantidadCod13ResOp3 = canCod13 - unidadesElaboradaop;
        }
        if (opera3 == codH14) {

          cantidadCod14ResOp3 = canCod14 - unidadesElaboradaop;
        }

        if (opera3 == codH15) {

          cantidadCod15ResOp3 = canCod15 - unidadesElaboradaop;
        }

        if (opera3 == codH16) {

          cantidadCod16ResOp3 = canCod16 - unidadesElaboradaop;
        }
        if (opera3 == codH17) {

          cantidadCod17ResOp3 = canCod17 - unidadesElaboradaop;
        }

        if (opera3 == codH18) {

          cantidadCod18ResOp3 = canCod18 - unidadesElaboradaop;
          //  console.log("op3 cod18: "+cantidadCod18ResOp3);
        }

        if (opera3 == codH19) {

          cantidadCod19ResOp3 = canCod19 - unidadesElaboradaop;
          console.log("opera 3 cod19" + cantidadCod19ResOp3);

        }
        if (opera3 == codH20) {

          cantidadCod20ResOp3 = canCod20 - unidadesElaboradaop;
        }


        if (opera3 == codH21) {

          cantidadCod21ResOp3 = canCod21 - unidadesElaboradaop;
        }

        if (opera3 == codH22) {

          cantidadCod22ResOp3 = canCod22 - unidadesElaboradaop;
        }

        if (opera3 == codH23) {

          cantidadCod23ResOp3 = canCod23 - unidadesElaboradaop;
        }
        if (opera3 == codH24) {

          cantidadCod24ResOp3 = canCod24 - unidadesElaboradaop;
        }

        if (opera3 == codH25) {

          cantidadCod25ResOp3 = canCod25 - unidadesElaboradaop;
        }

        if (opera3 == codH26) {

          cantidadCod26ResOp3 = canCod26 - unidadesElaboradaop;
        }
        if (opera3 == codH27) {

          cantidadCod27ResOp3 = canCod27 - unidadesElaboradaop;
        }

        if (opera3 == codH28) {

          cantidadCod28ResOp3 = canCod28 - unidadesElaboradaop;
        }

        if (opera3 == codH29) {

          cantidadCod29ResOp3 = canCod29 - unidadesElaboradaop;
        }
        if (opera3 == codH30) {

          cantidadCod30ResOp3 = canCod30 - unidadesElaboradaop;
        }


        if (opera3 == codH31) {

          cantidadCod31ResOp3 = canCod31 - unidadesElaboradaop;
        }

        if (opera3 == codH32) {

          cantidadCod32ResOp3 = canCod32 - unidadesElaboradaop;
        }

        if (opera3 == codH33) {

          cantidadCod33ResOp3 = canCod33 - unidadesElaboradaop;
        }
        if (opera3 == codH34) {

          cantidadCod34ResOp3 = canCod34 - unidadesElaboradaop;
        }

        if (opera3 == codH35) {

          cantidadCod35ResOp3 = canCod35 - unidadesElaboradaop;
        }

        if (opera3 == codH36) {

          cantidadCod36ResOp3 = canCod36 - unidadesElaboradaop;
        }
        if (opera3 == codH37) {

          cantidadCod37ResOp3 = canCod37 - unidadesElaboradaop;
        }

        if (opera3 == codH38) {

          cantidadCod38ResOp3 = canCod38 - unidadesElaboradaop;
        }

        if (opera3 == codH39) {

          cantidadCod39ResOp3 = canCod39 - unidadesElaboradaop;
        }
        if (opera3 == codH40) {

          cantidadCod40ResOp3 = canCod40 - unidadesElaboradaop;
        }


        if (opera3 == codH41) {

          cantidadCod41ResOp3 = canCod41 - unidadesElaboradaop;
        }

        if (opera3 == codH42) {

          cantidadCod42ResOp3 = canCod42 - unidadesElaboradaop;
        }

        if (opera3 == codH43) {

          cantidadCod43ResOp3 = canCod43 - unidadesElaboradaop;
        }
        if (opera3 == codH44) {

          cantidadCod44ResOp3 = canCod44 - unidadesElaboradaop;
        }

        if (opera3 == codH45) {

          cantidadCod45ResOp3 = canCod45 - unidadesElaboradaop;
        }

        if (opera3 == codH46) {

          cantidadCod46ResOp3 = canCod46 - unidadesElaboradaop;
        }
        if (opera3 == codH47) {

          cantidadCod47ResOp3 = canCod47 - unidadesElaboradaop;
        }

        if (opera3 == codH48) {

          cantidadCod48ResOp3 = canCod48 - unidadesElaboradaop;
        }

        if (opera3 == codH49) {

          cantidadCod49ResOp3 = canCod49 - unidadesElaboradaop;
        }
        if (opera3 == codH50) {

          cantidadCod50ResOp3 = canCod50 - unidadesElaboradaop;
        }

        //-----------------------------4-------------------------------------------
        if (opera4 == codH1) {

          cantidadCod1ResOp4 = canCod1 - unidadesElaboradaop;
        }

        if (opera4 == codH2) {

          cantidadCod2ResOp4 = canCod2 - unidadesElaboradaop;
        }

        if (opera4 == codH3) {

          cantidadCod3ResOp4 = canCod3 - unidadesElaboradaop;
        }



        if (opera4 == codH4) {

          cantidadCod4ResOp4 = canCod4 - unidadesElaboradaop;
        }

        if (opera4 == codH5) {

          cantidadCod5ResOp4 = canCod5 - unidadesElaboradaop;
        }

        if (opera4 == codH6) {

          cantidadCod6ResOp4 = canCod6 - unidadesElaboradaop;
        }







        if (opera4 == codH7) {

          cantidadCod7ResOp4 = canCod7 - unidadesElaboradaop;
        }

        if (opera4 == codH8) {

          cantidadCod8ResOp4 = canCod8 - unidadesElaboradaop;
        }

        if (opera4 == codH9) {

          cantidadCod9ResOp4 = canCod9 - unidadesElaboradaop;
        }


        if (opera4 == codH10) {

          cantidadCod10ResOp4 = canCod10 - unidadesElaboradaop;
        }

        if (opera4 == codH11) {

          cantidadCod11ResOp4 = canCod11 - unidadesElaboradaop;
        }

        if (opera4 == codH12) {

          cantidadCod12ResOp4 = canCod12 - unidadesElaboradaop;
        }



        if (opera4 == codH13) {

          cantidadCod13ResOp4 = canCod13 - unidadesElaboradaop;
        }

        if (opera4 == codH14) {

          cantidadCod14ResOp4 = canCod14 - unidadesElaboradaop;
        }

        if (opera4 == codH15) {

          cantidadCod15ResOp4 = canCod15 - unidadesElaboradaop;
        }




        if (opera4 == codH16) {

          cantidadCod16ResOp4 = canCod16 - unidadesElaboradaop;
        }

        if (opera4 == codH17) {

          cantidadCod17ResOp4 = canCod17 - unidadesElaboradaop;
        }

        if (opera4 == codH18) {

          cantidadCod18ResOp4 = canCod18 - unidadesElaboradaop;
          // console.log("op3 cod18: "+cantidadCod18ResOp4);

        }





        if (opera4 == codH19) {

          cantidadCod19ResOp4 = canCod19 - unidadesElaboradaop;
          console.log("opera 4 cod19" + cantidadCod19ResOp4);

        }

        if (opera4 == codH20) {

          cantidadCod20ResOp4 = canCod20 - unidadesElaboradaop;
        }

        if (opera4 == codH21) {

          cantidadCod21ResOp4 = canCod21 - unidadesElaboradaop;
        }


        if (opera4 == codH22) {

          cantidadCod22ResOp4 = canCod22 - unidadesElaboradaop;
        }

        if (opera4 == codH23) {

          cantidadCod23ResOp4 = canCod23 - unidadesElaboradaop;
        }

        if (opera4 == codH24) {

          cantidadCod24ResOp4 = canCod24 - unidadesElaboradaop;
        }


        if (opera4 == codH25) {

          cantidadCod25ResOp4 = canCod25 - unidadesElaboradaop;
        }

        if (opera4 == codH26) {

          cantidadCod26ResOp4 = canCod26 - unidadesElaboradaop;
        }

        if (opera4 == codH27) {

          cantidadCod27ResOp4 = canCod27 - unidadesElaboradaop;
        }



        if (opera4 == codH28) {

          cantidadCod28ResOp4 = canCod28 - unidadesElaboradaop;
        }

        if (opera4 == codH29) {

          cantidadCod29ResOp4 = canCod29 - unidadesElaboradaop;
        }

        if (opera4 == codH30) {

          cantidadCod30ResOp4 = canCod30 - unidadesElaboradaop;
        }


        if (opera4 == codH31) {

          cantidadCod31ResOp4 = canCod31 - unidadesElaboradaop;
        }

        if (opera4 == codH32) {

          cantidadCod32ResOp4 = canCod32 - unidadesElaboradaop;
        }

        if (opera4 == codH33) {

          cantidadCod33ResOp4 = canCod33 - unidadesElaboradaop;
        }



        if (opera4 == codH34) {

          cantidadCod34ResOp4 = canCod34 - unidadesElaboradaop;
        }

        if (opera4 == codH35) {

          cantidadCod35ResOp4 = canCod35 - unidadesElaboradaop;
        }

        if (opera4 == codH36) {

          cantidadCod36ResOp4 = canCod36 - unidadesElaboradaop;
        }



        if (opera4 == codH37) {

          cantidadCod37ResOp4 = canCod37 - unidadesElaboradaop;
        }

        if (opera4 == codH38) {

          cantidadCod38ResOp4 = canCod38 - unidadesElaboradaop;
        }

        if (opera4 == codH39) {

          cantidadCod39ResOp4 = canCod39 - unidadesElaboradaop;
        }


        if (opera4 == codH40) {

          cantidadCod40ResOp4 = canCod40 - unidadesElaboradaop;
        }

        if (opera4 == codH41) {

          cantidadCod41ResOp4 = canCod41 - unidadesElaboradaop;
        }

        if (opera4 == codH42) {

          cantidadCod42ResOp4 = canCod42 - unidadesElaboradaop;
        }


        if (opera4 == codH43) {

          cantidadCod43ResOp4 = canCod43 - unidadesElaboradaop;
        }

        if (opera4 == codH44) {

          cantidadCod44ResOp4 = canCod44 - unidadesElaboradaop;
        }

        if (opera4 == codH45) {

          cantidadCod45ResOp4 = canCod45 - unidadesElaboradaop;
        }




        if (opera4 == codH46) {

          cantidadCod46ResOp4 = canCod46 - unidadesElaboradaop;
        }

        if (opera4 == codH47) {

          cantidadCod47ResOp4 = canCod47 - unidadesElaboradaop;
        }

        if (opera4 == codH48) {

          cantidadCod48ResOp4 = canCod48 - unidadesElaboradaop;
        }



        if (opera4 == codH49) {

          cantidadCod49ResOp4 = canCod49 - unidadesElaboradaop;
        }

        if (opera4 == codH50) {

          cantidadCod50ResOp4 = canCod50 - unidadesElaboradaop;
        }

        //------------------------------------ espacio 5-------------------------------------------------



        if (opera5 == codH1) {

          cantidadCod1ResOp5 = canCod1 - unidadesElaboradaop;
        }

        if (opera5 == codH2) {

          cantidadCod2ResOp5 = canCod2 - unidadesElaboradaop;
        }

        if (opera5 == codH3) {

          cantidadCod3ResOp5 = canCod3 - unidadesElaboradaop;
        }



        if (opera5 == codH4) {

          cantidadCod4ResOp5 = canCod4 - unidadesElaboradaop;
        }

        if (opera5 == codH5) {

          cantidadCod5ResOp5 = canCod5 - unidadesElaboradaop;
        }

        if (opera5 == codH6) {

          cantidadCod6ResOp5 = canCod6 - unidadesElaboradaop;
        }







        if (opera5 == codH7) {

          cantidadCod7ResOp5 = canCod7 - unidadesElaboradaop;
        }

        if (opera5 == codH8) {

          cantidadCod8ResOp5 = canCod8 - unidadesElaboradaop;
        }

        if (opera5 == codH9) {

          cantidadCod9ResOp5 = canCod9 - unidadesElaboradaop;
        }


        if (opera5 == codH10) {

          cantidadCod10ResOp5 = canCod10 - unidadesElaboradaop;
        }

        if (opera5 == codH11) {

          cantidadCod11ResOp5 = canCod11 - unidadesElaboradaop;
        }

        if (opera5 == codH12) {

          cantidadCod12ResOp5 = canCod12 - unidadesElaboradaop;
        }



        if (opera5 == codH13) {

          cantidadCod13ResOp5 = canCod13 - unidadesElaboradaop;
        }

        if (opera5 == codH14) {

          cantidadCod14ResOp5 = canCod14 - unidadesElaboradaop;
        }

        if (opera5 == codH15) {

          cantidadCod15ResOp5 = canCod15 - unidadesElaboradaop;
        }




        if (opera5 == codH16) {

          cantidadCod16ResOp5 = canCod16 - unidadesElaboradaop;
        }

        if (opera5 == codH17) {

          cantidadCod17ResOp5 = canCod17 - unidadesElaboradaop;
        }

        if (opera5 == codH18) {

          cantidadCod18ResOp5 = canCod18 - unidadesElaboradaop;
          //  console.log("op3 cod18: "+cantidadCod18ResOp5);

        }





        if (opera5 == codH19) {

          cantidadCod19ResOp5 = canCod19 - unidadesElaboradaop;
          console.log("opera 5 cod19" + cantidadCod19ResOp5);

        }

        if (opera5 == codH20) {

          cantidadCod20ResOp5 = canCod20 - unidadesElaboradaop;
        }

        if (opera5 == codH21) {

          cantidadCod21ResOp5 = canCod21 - unidadesElaboradaop;
        }


        if (opera5 == codH22) {

          cantidadCod22ResOp5 = canCod22 - unidadesElaboradaop;
        }

        if (opera5 == codH23) {

          cantidadCod23ResOp5 = canCod23 - unidadesElaboradaop;
        }

        if (opera5 == codH24) {

          cantidadCod24ResOp5 = canCod24 - unidadesElaboradaop;
        }


        if (opera5 == codH25) {

          cantidadCod25ResOp5 = canCod25 - unidadesElaboradaop;
        }

        if (opera5 == codH26) {

          cantidadCod26ResOp5 = canCod26 - unidadesElaboradaop;
        }

        if (opera5 == codH27) {

          cantidadCod27ResOp5 = canCod27 - unidadesElaboradaop;
        }



        if (opera5 == codH28) {

          cantidadCod28ResOp5 = canCod28 - unidadesElaboradaop;
        }

        if (opera5 == codH29) {

          cantidadCod29ResOp5 = canCod29 - unidadesElaboradaop;
        }

        if (opera5 == codH30) {

          cantidadCod30ResOp5 = canCod30 - unidadesElaboradaop;
        }


        if (opera5 == codH31) {

          cantidadCod31ResOp5 = canCod31 - unidadesElaboradaop;
        }

        if (opera5 == codH32) {

          cantidadCod32ResOp5 = canCod32 - unidadesElaboradaop;
        }

        if (opera5 == codH33) {

          cantidadCod33ResOp5 = canCod33 - unidadesElaboradaop;
        }



        if (opera5 == codH34) {

          cantidadCod34ResOp5 = canCod34 - unidadesElaboradaop;
        }

        if (opera5 == codH35) {

          cantidadCod35ResOp5 = canCod35 - unidadesElaboradaop;
        }

        if (opera5 == codH36) {

          cantidadCod36ResOp5 = canCod36 - unidadesElaboradaop;
        }



        if (opera5 == codH37) {

          cantidadCod37ResOp5 = canCod37 - unidadesElaboradaop;
        }

        if (opera5 == codH38) {

          cantidadCod38ResOp5 = canCod38 - unidadesElaboradaop;
        }

        if (opera5 == codH39) {

          cantidadCod39ResOp5 = canCod39 - unidadesElaboradaop;
        }


        if (opera5 == codH40) {

          cantidadCod40ResOp5 = canCod40 - unidadesElaboradaop;
        }

        if (opera5 == codH41) {

          cantidadCod41ResOp5 = canCod41 - unidadesElaboradaop;
        }

        if (opera5 == codH42) {

          cantidadCod42ResOp5 = canCod42 - unidadesElaboradaop;
        }


        if (opera5 == codH43) {

          cantidadCod43ResOp5 = canCod43 - unidadesElaboradaop;
        }

        if (opera5 == codH44) {

          cantidadCod44ResOp5 = canCod44 - unidadesElaboradaop;
        }

        if (opera5 == codH45) {

          cantidadCod45ResOp5 = canCod45 - unidadesElaboradaop;
        }




        if (opera5 == codH46) {

          cantidadCod46ResOp5 = canCod46 - unidadesElaboradaop;
        }

        if (opera5 == codH47) {

          cantidadCod47ResOp5 = canCod47 - unidadesElaboradaop;
        }

        if (opera5 == codH48) {

          cantidadCod48ResOp5 = canCod48 - unidadesElaboradaop;
        }



        if (opera5 == codH49) {

          cantidadCod49ResOp5 = canCod49 - unidadesElaboradaop;
        }

        if (opera5 == codH50) {

          cantidadCod50ResOp5 = canCod50 - unidadesElaboradaop;
        }

        //------------------------------------ espacio 6-------------------------------------------------



        if (opera6 == codH1) {

          cantidadCod1ResOp6 = canCod1 - unidadesElaboradaop;
        }

        if (opera6 == codH2) {

          cantidadCod2ResOp6 = canCod2 - unidadesElaboradaop;
        }

        if (opera6 == codH3) {

          cantidadCod3ResOp6 = canCod3 - unidadesElaboradaop;
        }



        if (opera6 == codH4) {

          cantidadCod4ResOp6 = canCod4 - unidadesElaboradaop;
        }

        if (opera6 == codH5) {

          cantidadCod5ResOp6 = canCod5 - unidadesElaboradaop;
        }

        if (opera6 == codH6) {

          cantidadCod6ResOp6 = canCod6 - unidadesElaboradaop;
        }







        if (opera6 == codH7) {

          cantidadCod7ResOp6 = canCod7 - unidadesElaboradaop;
        }

        if (opera6 == codH8) {

          cantidadCod8ResOp6 = canCod8 - unidadesElaboradaop;
        }

        if (opera6 == codH9) {

          cantidadCod9ResOp6 = canCod9 - unidadesElaboradaop;
        }


        if (opera6 == codH10) {

          cantidadCod10ResOp6 = canCod10 - unidadesElaboradaop;
        }

        if (opera6 == codH11) {

          cantidadCod11ResOp6 = canCod11 - unidadesElaboradaop;
        }

        if (opera6 == codH12) {

          cantidadCod12ResOp6 = canCod12 - unidadesElaboradaop;
        }



        if (opera6 == codH13) {

          cantidadCod13ResOp6 = canCod13 - unidadesElaboradaop;
        }

        if (opera6 == codH14) {

          cantidadCod14ResOp6 = canCod14 - unidadesElaboradaop;
        }

        if (opera6 == codH15) {

          cantidadCod15ResOp6 = canCod15 - unidadesElaboradaop;
        }




        if (opera6 == codH16) {

          cantidadCod16ResOp6 = canCod16 - unidadesElaboradaop;
        }

        if (opera6 == codH17) {

          cantidadCod17ResOp6 = canCod17 - unidadesElaboradaop;
        }

        if (opera6 == codH18) {

          cantidadCod18ResOp6 = canCod18 - unidadesElaboradaop;
          //  console.log("op6 cod18: "+cantidadCod18ResOp6);

        }





        if (opera6 == codH19) {

          cantidadCod19ResOp6 = canCod19 - unidadesElaboradaop;
          console.log("opera 6 cod19" + cantidadCod19ResOp6);

        }

        if (opera6 == codH20) {

          cantidadCod20ResOp6 = canCod20 - unidadesElaboradaop;
        }

        if (opera6 == codH21) {

          cantidadCod21ResOp6 = canCod21 - unidadesElaboradaop;
        }


        if (opera6 == codH22) {

          cantidadCod22ResOp6 = canCod22 - unidadesElaboradaop;
        }

        if (opera6 == codH23) {

          cantidadCod23ResOp6 = canCod23 - unidadesElaboradaop;
        }

        if (opera6 == codH24) {

          cantidadCod24ResOp6 = canCod24 - unidadesElaboradaop;
        }


        if (opera6 == codH25) {

          cantidadCod25ResOp6 = canCod25 - unidadesElaboradaop;
        }

        if (opera6 == codH26) {

          cantidadCod26ResOp6 = canCod26 - unidadesElaboradaop;
        }

        if (opera6 == codH27) {

          cantidadCod27ResOp6 = canCod27 - unidadesElaboradaop;
        }



        if (opera6 == codH28) {

          cantidadCod28ResOp6 = canCod28 - unidadesElaboradaop;
        }

        if (opera6 == codH29) {

          cantidadCod29ResOp6 = canCod29 - unidadesElaboradaop;
        }

        if (opera6 == codH30) {

          cantidadCod30ResOp6 = canCod30 - unidadesElaboradaop;
        }


        if (opera6 == codH31) {

          cantidadCod31ResOp6 = canCod31 - unidadesElaboradaop;
        }

        if (opera6 == codH32) {

          cantidadCod32ResOp6 = canCod32 - unidadesElaboradaop;
        }

        if (opera6 == codH33) {

          cantidadCod33ResOp6 = canCod33 - unidadesElaboradaop;
        }



        if (opera6 == codH34) {

          cantidadCod34ResOp6 = canCod34 - unidadesElaboradaop;
        }

        if (opera6 == codH35) {

          cantidadCod35ResOp6 = canCod35 - unidadesElaboradaop;
        }

        if (opera6 == codH36) {

          cantidadCod36ResOp6 = canCod36 - unidadesElaboradaop;
        }



        if (opera6 == codH37) {

          cantidadCod37ResOp6 = canCod37 - unidadesElaboradaop;
        }

        if (opera6 == codH38) {

          cantidadCod38ResOp6 = canCod38 - unidadesElaboradaop;
        }

        if (opera6 == codH39) {

          cantidadCod39ResOp6 = canCod39 - unidadesElaboradaop;
        }


        if (opera6 == codH40) {

          cantidadCod40ResOp6 = canCod40 - unidadesElaboradaop;
        }

        if (opera6 == codH41) {

          cantidadCod41ResOp6 = canCod41 - unidadesElaboradaop;
        }

        if (opera6 == codH42) {

          cantidadCod42ResOp6 = canCod42 - unidadesElaboradaop;
        }


        if (opera6 == codH43) {

          cantidadCod43ResOp6 = canCod43 - unidadesElaboradaop;
        }

        if (opera6 == codH44) {

          cantidadCod44ResOp6 = canCod44 - unidadesElaboradaop;
        }

        if (opera6 == codH45) {

          cantidadCod45ResOp6 = canCod45 - unidadesElaboradaop;
        }




        if (opera6 == codH46) {

          cantidadCod46ResOp6 = canCod46 - unidadesElaboradaop;
        }

        if (opera6 == codH47) {

          cantidadCod47ResOp6 = canCod47 - unidadesElaboradaop;
        }

        if (opera6 == codH48) {

          cantidadCod48ResOp6 = canCod48 - unidadesElaboradaop;
        }



        if (opera6 == codH49) {

          cantidadCod49ResOp6 = canCod49 - unidadesElaboradaop;
        }

        if (opera6 == codH50) {

          cantidadCod50ResOp6 = canCod50 - unidadesElaboradaop;
        }

        //-------------------------------------espacio 7---------------------------------
        if (opera7 == codH1) {

          cantidadCod1ResOp7 = canCod1 - unidadesElaboradaop;
        }

        if (opera7 == codH2) {

          cantidadCod2ResOp7 = canCod2 - unidadesElaboradaop;
        }

        if (opera7 == codH3) {

          cantidadCod3ResOp7 = canCod3 - unidadesElaboradaop;
        }
        if (opera7 == codH4) {

          cantidadCod4ResOp7 = canCod4 - unidadesElaboradaop;
        }

        if (opera7 == codH5) {

          cantidadCod5ResOp7 = canCod5 - unidadesElaboradaop;
        }

        if (opera7 == codH6) {

          cantidadCod6ResOp7 = canCod6 - unidadesElaboradaop;
        }
        if (opera7 == codH7) {

          cantidadCod7ResOp7 = canCod7 - unidadesElaboradaop;
        }

        if (opera7 == codH8) {

          cantidadCod8ResOp7 = canCod8 - unidadesElaboradaop;
        }

        if (opera7 == codH9) {

          cantidadCod9ResOp7 = canCod9 - unidadesElaboradaop;
        }
        if (opera7 == codH10) {

          cantidadCod10ResOp7 = canCod10 - unidadesElaboradaop;
        }



        if (opera7 == codH11) {

          cantidadCod11ResOp7 = canCod11 - unidadesElaboradaop;
        }

        if (opera7 == codH12) {

          cantidadCod12ResOp7 = canCod12 - unidadesElaboradaop;
        }

        if (opera7 == codH13) {

          cantidadCod13ResOp7 = canCod13 - unidadesElaboradaop;
        }
        if (opera7 == codH14) {

          cantidadCod14ResOp7 = canCod14 - unidadesElaboradaop;
        }

        if (opera7 == codH15) {

          cantidadCod15ResOp7 = canCod15 - unidadesElaboradaop;
        }

        if (opera7 == codH16) {

          cantidadCod16ResOp7 = canCod16 - unidadesElaboradaop;
        }
        if (opera7 == codH17) {

          cantidadCod17ResOp7 = canCod17 - unidadesElaboradaop;
        }

        if (opera7 == codH18) {

          cantidadCod18ResOp7 = canCod18 - unidadesElaboradaop;
          // console.log("op7 cod18: "+cantidadCod18ResOp7);

        }

        if (opera7 == codH19) {

          cantidadCod19ResOp7 = canCod19 - unidadesElaboradaop;
          console.log("opera 7 cod19" + cantidadCod19ResOp7);

        }
        if (opera7 == codH20) {

          cantidadCod20ResOp7 = canCod20 - unidadesElaboradaop;
        }


        if (opera7 == codH21) {

          cantidadCod21ResOp7 = canCod21 - unidadesElaboradaop;
        }

        if (opera7 == codH22) {

          cantidadCod22ResOp7 = canCod22 - unidadesElaboradaop;
        }

        if (opera7 == codH23) {

          cantidadCod23ResOp7 = canCod23 - unidadesElaboradaop;
        }
        if (opera7 == codH24) {

          cantidadCod24ResOp7 = canCod24 - unidadesElaboradaop;
        }

        if (opera7 == codH25) {

          cantidadCod25ResOp7 = canCod25 - unidadesElaboradaop;
        }

        if (opera7 == codH26) {

          cantidadCod26ResOp7 = canCod26 - unidadesElaboradaop;
        }
        if (opera7 == codH27) {

          cantidadCod27ResOp7 = canCod27 - unidadesElaboradaop;
        }

        if (opera7 == codH28) {

          cantidadCod28ResOp7 = canCod28 - unidadesElaboradaop;
        }

        if (opera7 == codH29) {

          cantidadCod29ResOp7 = canCod29 - unidadesElaboradaop;
        }
        if (opera7 == codH30) {

          cantidadCod30ResOp7 = canCod30 - unidadesElaboradaop;
        }


        if (opera7 == codH31) {

          cantidadCod31ResOp7 = canCod31 - unidadesElaboradaop;
        }

        if (opera7 == codH32) {

          cantidadCod32ResOp7 = canCod32 - unidadesElaboradaop;
        }

        if (opera7 == codH33) {

          cantidadCod33ResOp7 = canCod33 - unidadesElaboradaop;
        }
        if (opera7 == codH34) {

          cantidadCod34ResOp7 = canCod34 - unidadesElaboradaop;
        }

        if (opera7 == codH35) {

          cantidadCod35ResOp7 = canCod35 - unidadesElaboradaop;
        }

        if (opera7 == codH36) {

          cantidadCod36ResOp7 = canCod36 - unidadesElaboradaop;
        }
        if (opera7 == codH37) {

          cantidadCod37ResOp8 = canCod37 - unidadesElaboradaop;
        }

        if (opera7 == codH38) {

          cantidadCod38ResOp7 = canCod38 - unidadesElaboradaop;
        }

        if (opera7 == codH39) {

          cantidadCod39ResOp7 = canCod39 - unidadesElaboradaop;
        }
        if (opera7 == codH40) {

          cantidadCod40ResOp7 = canCod40 - unidadesElaboradaop;
        }


        if (opera7 == codH41) {

          cantidadCod41ResOp7 = canCod41 - unidadesElaboradaop;
        }

        if (opera7 == codH42) {

          cantidadCod42ResOp7 = canCod42 - unidadesElaboradaop;
        }

        if (opera7 == codH43) {

          cantidadCod43ResOp7 = canCod43 - unidadesElaboradaop;
        }
        if (opera7 == codH44) {

          cantidadCod44ResOp7 = canCod44 - unidadesElaboradaop;
        }

        if (opera7 == codH45) {

          cantidadCod45ResOp7 = canCod45 - unidadesElaboradaop;
        }

        if (opera7 == codH46) {

          cantidadCod46ResOp7 = canCod46 - unidadesElaboradaop;
        }
        if (opera7 == codH47) {

          cantidadCod47ResOp7 = canCod47 - unidadesElaboradaop;
        }

        if (opera7 == codH48) {

          cantidadCod48ResOp7 = canCod48 - unidadesElaboradaop;
        }

        if (opera7 == codH49) {

          cantidadCod49ResOp7 = canCod49 - unidadesElaboradaop;
        }
        if (opera7 == codH50) {

          cantidadCod50ResOp7 = canCod50 - unidadesElaboradaop;
        }

        //---------------------------------espacio 8----------------------------------
        if (opera8 == codH1) {

          cantidadCod1ResOp8 = canCod1 - unidadesElaboradaop;
        }

        if (opera8 == codH2) {

          cantidadCod2ResOp8 = canCod2 - unidadesElaboradaop;
        }

        if (opera8 == codH3) {

          cantidadCod3ResOp8 = canCod3 - unidadesElaboradaop;
        }
        if (opera8 == codH4) {

          cantidadCod4ResOp8 = canCod4 - unidadesElaboradaop;
        }

        if (opera8 == codH5) {

          cantidadCod5ResOp8 = canCod5 - unidadesElaboradaop;
        }

        if (opera8 == codH6) {

          cantidadCod6ResOp8 = canCod6 - unidadesElaboradaop;
        }
        if (opera8 == codH7) {

          cantidadCod7ResOp8 = canCod7 - unidadesElaboradaop;
        }

        if (opera8 == codH8) {

          cantidadCod8ResOp8 = canCod8 - unidadesElaboradaop;
        }

        if (opera8 == codH9) {

          cantidadCod9ResOp8 = canCod9 - unidadesElaboradaop;
        }
        if (opera8 == codH10) {

          cantidadCod10ResOp8 = canCod10 - unidadesElaboradaop;
        }



        if (opera8 == codH11) {

          cantidadCod11ResOp8 = canCod11 - unidadesElaboradaop;
        }

        if (opera8 == codH12) {

          cantidadCod12ResOp8 = canCod12 - unidadesElaboradaop;
        }

        if (opera8 == codH13) {

          cantidadCod13ResOp8 = canCod13 - unidadesElaboradaop;
        }
        if (opera8 == codH14) {

          cantidadCod14ResOp8 = canCod14 - unidadesElaboradaop;
        }

        if (opera8 == codH15) {

          cantidadCod15ResOp8 = canCod15 - unidadesElaboradaop;
        }

        if (opera8 == codH16) {

          cantidadCod16ResOp8 = canCod16 - unidadesElaboradaop;
        }
        if (opera8 == codH17) {

          cantidadCod17ResOp8 = canCod17 - unidadesElaboradaop;
        }

        if (opera8 == codH18) {

          cantidadCod18ResOp8 = canCod18 - unidadesElaboradaop;
          //  console.log("op8 cod18: "+cantidadCod18ResOp8);

        }

        if (opera8 == codH19) {

          cantidadCod19ResOp8 = canCod19 - unidadesElaboradaop;
          console.log("opera 8 cod19" + cantidadCod19ResOp8);

        }
        if (opera8 == codH20) {

          cantidadCod20ResOp8 = canCod20 - unidadesElaboradaop;
        }


        if (opera8 == codH21) {

          cantidadCod21ResOp8 = canCod21 - unidadesElaboradaop;
        }

        if (opera8 == codH22) {

          cantidadCod22ResOp8 = canCod22 - unidadesElaboradaop;
        }

        if (opera8 == codH23) {

          cantidadCod23ResOp8 = canCod23 - unidadesElaboradaop;
        }
        if (opera8 == codH24) {

          cantidadCod24ResOp8 = canCod24 - unidadesElaboradaop;
        }

        if (opera8 == codH25) {

          cantidadCod25ResOp8 = canCod25 - unidadesElaboradaop;
        }

        if (opera8 == codH26) {

          cantidadCod26ResOp8 = canCod26 - unidadesElaboradaop;
        }
        if (opera8 == codH27) {

          cantidadCod27ResOp8 = canCod27 - unidadesElaboradaop;
        }

        if (opera8 == codH28) {

          cantidadCod28ResOp8 = canCod28 - unidadesElaboradaop;
        }

        if (opera8 == codH29) {

          cantidadCod29ResOp8 = canCod29 - unidadesElaboradaop;
        }
        if (opera8 == codH30) {

          cantidadCod30ResOp8 = canCod30 - unidadesElaboradaop;
        }


        if (opera8 == codH31) {

          cantidadCod31ResOp8 = canCod31 - unidadesElaboradaop;
        }

        if (opera8 == codH32) {

          cantidadCod32ResOp8 = canCod32 - unidadesElaboradaop;
        }

        if (opera8 == codH33) {

          cantidadCod33ResOp8 = canCod33 - unidadesElaboradaop;
        }
        if (opera8 == codH34) {

          cantidadCod34ResOp8 = canCod34 - unidadesElaboradaop;
        }

        if (opera8 == codH35) {

          cantidadCod35ResOp8 = canCod35 - unidadesElaboradaop;
        }

        if (opera8 == codH36) {

          cantidadCod36ResOp8 = canCod36 - unidadesElaboradaop;
        }
        if (opera8 == codH37) {

          cantidadCod37ResOp8 = canCod37 - unidadesElaboradaop;
        }

        if (opera8 == codH38) {

          cantidadCod38ResOp8 = canCod38 - unidadesElaboradaop;
        }

        if (opera8 == codH39) {

          cantidadCod39ResOp8 = canCod39 - unidadesElaboradaop;
        }
        if (opera8 == codH40) {

          cantidadCod40ResOp8 = canCod40 - unidadesElaboradaop;
        }


        if (opera8 == codH41) {

          cantidadCod41ResOp8 = canCod41 - unidadesElaboradaop;
        }

        if (opera8 == codH42) {

          cantidadCod42ResOp8 = canCod42 - unidadesElaboradaop;
        }

        if (opera8 == codH43) {

          cantidadCod43ResOp8 = canCod43 - unidadesElaboradaop;
        }
        if (opera8 == codH44) {

          cantidadCod44ResOp8 = canCod44 - unidadesElaboradaop;
        }

        if (opera8 == codH45) {

          cantidadCod45ResOp8 = canCod45 - unidadesElaboradaop;
        }

        if (opera8 == codH46) {

          cantidadCod46ResOp8 = canCod46 - unidadesElaboradaop;
        }
        if (opera8 == codH47) {

          cantidadCod47ResOp8 = canCod47 - unidadesElaboradaop;
        }

        if (opera8 == codH48) {

          cantidadCod48ResOp8 = canCod48 - unidadesElaboradaop;
        }

        if (opera8 == codH49) {

          cantidadCod49ResOp8 = canCod49 - unidadesElaboradaop;
        }
        if (opera8 == codH50) {

          cantidadCod50ResOp8 = canCod50 - unidadesElaboradaop;
        }







        //------------------------------------espacio 9-----------------------------

        if (opera9 == codH1) {

          cantidadCod1ResOp9 = canCod1 - unidadesElaboradaop;
        }

        if (opera9 == codH2) {

          cantidadCod2ResOp9 = canCod2 - unidadesElaboradaop;
        }

        if (opera9 == codH3) {

          cantidadCod3ResOp9 = canCod3 - unidadesElaboradaop;
        }
        if (opera9 == codH4) {

          cantidadCod4ResOp9 = canCod4 - unidadesElaboradaop;
        }

        if (opera9 == codH5) {

          cantidadCod5ResOp9 = canCod5 - unidadesElaboradaop;
        }

        if (opera9 == codH6) {

          cantidadCod6ResOp9 = canCod6 - unidadesElaboradaop;
        }
        if (opera9 == codH7) {

          cantidadCod7ResOp9 = canCod7 - unidadesElaboradaop;
        }

        if (opera9 == codH8) {

          cantidadCod8ResOp9 = canCod8 - unidadesElaboradaop;
        }

        if (opera9 == codH9) {

          cantidadCod9ResOp9 = canCod9 - unidadesElaboradaop;
        }
        if (opera9 == codH10) {

          cantidadCod10ResOp9 = canCod10 - unidadesElaboradaop;
        }



        if (opera9 == codH11) {

          cantidadCod11ResOp9 = canCod11 - unidadesElaboradaop;
        }

        if (opera9 == codH12) {

          cantidadCod12ResOp9 = canCod12 - unidadesElaboradaop;
        }

        if (opera9 == codH13) {

          cantidadCod13ResOp9 = canCod13 - unidadesElaboradaop;
        }
        if (opera9 == codH14) {

          cantidadCod14ResOp9 = canCod14 - unidadesElaboradaop;
        }

        if (opera9 == codH15) {

          cantidadCod15ResOp9 = canCod15 - unidadesElaboradaop;
        }

        if (opera9 == codH16) {

          cantidadCod16ResOp9 = canCod16 - unidadesElaboradaop;
        }
        if (opera9 == codH17) {

          cantidadCod17ResOp9 = canCod17 - unidadesElaboradaop;
        }

        if (opera9 == codH18) {

          cantidadCod18ResOp9 = canCod18 - unidadesElaboradaop;
          //console.log("op9 cod18: "+cantidadCod18ResOp9);

        }

        if (opera9 == codH19) {

          cantidadCod19ResOp9 = canCod19 - unidadesElaboradaop;
          console.log("opera 9 cod19" + cantidadCod19ResOp9);

        }
        if (opera9 == codH20) {

          cantidadCod20ResOp9 = canCod20 - unidadesElaboradaop;
        }


        if (opera9 == codH21) {

          cantidadCod21ResOp9 = canCod21 - unidadesElaboradaop;
        }

        if (opera9 == codH22) {

          cantidadCod22ResOp9 = canCod22 - unidadesElaboradaop;
        }

        if (opera9 == codH23) {

          cantidadCod23ResOp9 = canCod23 - unidadesElaboradaop;
        }
        if (opera9 == codH24) {

          cantidadCod24ResOp9 = canCod24 - unidadesElaboradaop;
        }

        if (opera9 == codH25) {

          cantidadCod25ResOp9 = canCod25 - unidadesElaboradaop;
        }

        if (opera9 == codH26) {

          cantidadCod26ResOp9 = canCod26 - unidadesElaboradaop;
        }
        if (opera9 == codH27) {

          cantidadCod27ResOp9 = canCod27 - unidadesElaboradaop;
        }

        if (opera9 == codH28) {

          cantidadCod28ResOp9 = canCod28 - unidadesElaboradaop;
        }

        if (opera9 == codH29) {

          cantidadCod29ResOp9 = canCod29 - unidadesElaboradaop;
        }
        if (opera9 == codH30) {

          cantidadCod30ResOp9 = canCod30 - unidadesElaboradaop;
        }


        if (opera9 == codH31) {

          cantidadCod31ResOp9 = canCod31 - unidadesElaboradaop;
        }

        if (opera9 == codH32) {

          cantidadCod32ResOp9 = canCod32 - unidadesElaboradaop;
        }

        if (opera9 == codH33) {

          cantidadCod33ResOp9 = canCod33 - unidadesElaboradaop;
        }
        if (opera9 == codH34) {

          cantidadCod34ResOp9 = canCod34 - unidadesElaboradaop;
        }

        if (opera9 == codH35) {

          cantidadCod35ResOp9 = canCod35 - unidadesElaboradaop;
        }

        if (opera9 == codH36) {

          cantidadCod36ResOp9 = canCod36 - unidadesElaboradaop;
        }
        if (opera9 == codH37) {

          cantidadCod37ResOp9 = canCod37 - unidadesElaboradaop;
        }

        if (opera9 == codH38) {

          cantidadCod38ResOp9 = canCod38 - unidadesElaboradaop;
        }

        if (opera9 == codH39) {

          cantidadCod39ResOp9 = canCod39 - unidadesElaboradaop;
        }
        if (opera9 == codH40) {

          cantidadCod40ResOp9 = canCod40 - unidadesElaboradaop;
        }


        if (opera9 == codH41) {

          cantidadCod41ResOp9 = canCod41 - unidadesElaboradaop;
        }

        if (opera9 == codH42) {

          cantidadCod42ResOp9 = canCod42 - unidadesElaboradaop;
        }

        if (opera9 == codH43) {

          cantidadCod43ResOp9 = canCod43 - unidadesElaboradaop;
        }
        if (opera9 == codH44) {

          cantidadCod44ResOp9 = canCod44 - unidadesElaboradaop;
        }

        if (opera9 == codH45) {

          cantidadCod45ResOp9 = canCod45 - unidadesElaboradaop;
        }

        if (opera9 == codH46) {

          cantidadCod46ResOp9 = canCod46 - unidadesElaboradaop;
        }
        if (opera9 == codH47) {

          cantidadCod47ResOp9 = canCod47 - unidadesElaboradaop;
        }

        if (opera9 == codH48) {

          cantidadCod48ResOp9 = canCod48 - unidadesElaboradaop;
        }

        if (opera9 == codH49) {

          cantidadCod49ResOp9 = canCod49 - unidadesElaboradaop;
        }
        if (opera9 == codH50) {

          cantidadCod50ResOp9 = canCod50 - unidadesElaboradaop;
        }




        console.log("opera 1 cod19 despues" + cantidadCod19ResOp1);


        restaGlobalCod1 = Number(cantidadCod1ResOp1 + cantidadCod1ResOp2 + cantidadCod1ResOp3 + cantidadCod1ResOp4 + cantidadCod1ResOp5 + cantidadCod1ResOp6 + cantidadCod1ResOp7 + cantidadCod1ResOp8 + cantidadCod1ResOp9);
        console.log("la suma es 1:" + restaGlobalCod1);


        restaGlobalCod2 = Number(cantidadCod2ResOp1 + cantidadCod2ResOp2 + cantidadCod2ResOp3 + cantidadCod2ResOp4 + cantidadCod2ResOp5 + cantidadCod2ResOp6 + cantidadCod2ResOp7 + cantidadCod2ResOp8 + cantidadCod2ResOp9);
        console.log("la suma es 2:" + restaGlobalCod2);

        restaGlobalCod3 = Number(cantidadCod3ResOp1 + cantidadCod3ResOp2 + cantidadCod3ResOp3 + cantidadCod3ResOp4 + cantidadCod3ResOp5 + cantidadCod3ResOp6 + cantidadCod3ResOp7 + cantidadCod3ResOp8 + cantidadCod3ResOp9);
        console.log("la suma es 3:" + restaGlobalCod3);

        restaGlobalCod4 = Number(cantidadCod4ResOp1 + cantidadCod4ResOp2 + cantidadCod4ResOp3 + cantidadCod4ResOp4 + cantidadCod4ResOp5 + cantidadCod4ResOp6 + cantidadCod4ResOp7 + cantidadCod4ResOp8 + cantidadCod4ResOp9);
        console.log("la suma es 4:" + restaGlobalCod4);

        restaGlobalCod5 = Number(cantidadCod5ResOp1 + cantidadCod5ResOp2 + cantidadCod5ResOp3 + cantidadCod5ResOp4 + cantidadCod5ResOp5 + cantidadCod5ResOp6 + cantidadCod5ResOp7 + cantidadCod5ResOp8 + cantidadCod5ResOp9);
        console.log("la suma es 5:" + restaGlobalCod5);

        restaGlobalCod6 = Number(cantidadCod6ResOp1 + cantidadCod6ResOp2 + cantidadCod6ResOp3 + cantidadCod6ResOp4 + cantidadCod6ResOp5 + cantidadCod6ResOp6 + cantidadCod6ResOp7 + cantidadCod6ResOp8 + cantidadCod6ResOp9);
        console.log("la suma es 6:" + restaGlobalCod6);

        restaGlobalCod7 = Number(cantidadCod7ResOp1 + cantidadCod7ResOp2 + cantidadCod7ResOp3 + cantidadCod7ResOp4 + cantidadCod7ResOp5 + cantidadCod7ResOp6 + cantidadCod7ResOp7 + cantidadCod7ResOp8 + cantidadCod7ResOp9);
        console.log("la suma es 7:" + restaGlobalCod7);

        restaGlobalCod8 = Number(cantidadCod8ResOp1 + cantidadCod8ResOp2 + cantidadCod8ResOp3 + cantidadCod8ResOp4 + cantidadCod8ResOp5 + cantidadCod8ResOp6 + cantidadCod8ResOp7 + cantidadCod8ResOp8 + cantidadCod8ResOp9);
        console.log("la suma es 8:" + restaGlobalCod8);

        restaGlobalCod9 = Number(cantidadCod9ResOp1 + cantidadCod9ResOp2 + cantidadCod9ResOp3 + cantidadCod9ResOp4 + cantidadCod9ResOp5 + cantidadCod9ResOp6 + cantidadCod9ResOp7 + cantidadCod9ResOp8 + cantidadCod9ResOp9);
        console.log("la suma es 9:" + restaGlobalCod9);

        restaGlobalCod10 = Number(cantidadCod10ResOp1 + cantidadCod10ResOp2 + cantidadCod10ResOp3 + cantidadCod10ResOp4 + cantidadCod10ResOp5 + cantidadCod10ResOp6 + cantidadCod10ResOp7 + cantidadCod10ResOp8 + cantidadCod10ResOp9);
        console.log("la suma es 10:" + restaGlobalCod10);


        restaGlobalCod11 = Number(cantidadCod11ResOp1 + cantidadCod11ResOp2 + cantidadCod11ResOp3 + cantidadCod11ResOp4 + cantidadCod11ResOp5 + cantidadCod11ResOp6 + cantidadCod11ResOp7 + cantidadCod11ResOp8 + cantidadCod11ResOp9);
        console.log("la suma es 11:" + restaGlobalCod11);

        restaGlobalCod12 = Number(cantidadCod12ResOp1 + cantidadCod12ResOp2 + cantidadCod12ResOp3 + cantidadCod12ResOp4 + cantidadCod12ResOp5 + cantidadCod12ResOp6 + cantidadCod12ResOp7 + cantidadCod12ResOp8 + cantidadCod12ResOp9);
        console.log("la suma es 12:" + restaGlobalCod12);

        restaGlobalCod13 = Number(cantidadCod13ResOp1 + cantidadCod13ResOp2 + cantidadCod13ResOp3 + cantidadCod13ResOp4 + cantidadCod13ResOp5 + cantidadCod13ResOp6 + cantidadCod13ResOp7 + cantidadCod13ResOp8 + cantidadCod13ResOp9);
        console.log("la suma es 13:" + restaGlobalCod13);

        restaGlobalCod14 = Number(cantidadCod14ResOp1 + cantidadCod14ResOp2 + cantidadCod14ResOp3 + cantidadCod14ResOp4 + cantidadCod14ResOp5 + cantidadCod14ResOp6 + cantidadCod14ResOp7 + cantidadCod14ResOp8 + cantidadCod14ResOp9);
        console.log("la suma es 14:" + restaGlobalCod14);

        restaGlobalCod15 = Number(cantidadCod15ResOp1 + cantidadCod15ResOp2 + cantidadCod15ResOp3 + cantidadCod15ResOp4 + cantidadCod15ResOp5 + cantidadCod15ResOp6 + cantidadCod15ResOp7 + cantidadCod15ResOp8 + cantidadCod15ResOp9);
        console.log("la suma es 15:" + restaGlobalCod15);

        restaGlobalCod16 = Number(cantidadCod16ResOp1 + cantidadCod16ResOp2 + cantidadCod16ResOp3 + cantidadCod16ResOp4 + cantidadCod16ResOp5 + cantidadCod16ResOp6 + cantidadCod16ResOp7 + cantidadCod16ResOp8 + cantidadCod16ResOp9);
        console.log("la suma es 16:" + cantidadCod16ResOp1);


        restaGlobalCod17 = Number(cantidadCod17ResOp1 + cantidadCod17ResOp2 + cantidadCod17ResOp3 + cantidadCod17ResOp4 + cantidadCod17ResOp5 + cantidadCod17ResOp6 + cantidadCod17ResOp7 + cantidadCod17ResOp8 + cantidadCod17ResOp9);
        console.log("la suma es 17:" + restaGlobalCod17);

        restaGlobalCod18 = Number(cantidadCod18ResOp1 + cantidadCod18ResOp2 + cantidadCod18ResOp3 + cantidadCod18ResOp4 + cantidadCod18ResOp5 + cantidadCod18ResOp6 + cantidadCod18ResOp7 + cantidadCod18ResOp8 + cantidadCod18ResOp9);
        console.log("la suma es 18:" + restaGlobalCod18);

        restaGlobalCod19 = Number(cantidadCod19ResOp1 + cantidadCod19ResOp2 + cantidadCod19ResOp3 + cantidadCod19ResOp4 + cantidadCod19ResOp5 + cantidadCod19ResOp6 + cantidadCod19ResOp7 + cantidadCod19ResOp8 + cantidadCod19ResOp9);
        console.log("la suma es 19:" + restaGlobalCod19);

        restaGlobalCod20 = Number(cantidadCod20ResOp1 + cantidadCod20ResOp2 + cantidadCod20ResOp3 + cantidadCod20ResOp4 + cantidadCod20ResOp5 + cantidadCod20ResOp6 + cantidadCod20ResOp7 + cantidadCod20ResOp8 + cantidadCod20ResOp9);
        console.log("la suma es 20:" + restaGlobalCod20);

        restaGlobalCod21 = Number(cantidadCod21ResOp1 + cantidadCod21ResOp2 + cantidadCod21ResOp3 + cantidadCod21ResOp4 + cantidadCod21ResOp5 + cantidadCod21ResOp6 + cantidadCod21ResOp7 + cantidadCod21ResOp8 + cantidadCod21ResOp9);
        console.log("la suma es 21:" + restaGlobalCod21);


        restaGlobalCod22 = Number(cantidadCod22ResOp1 + cantidadCod22ResOp2 + cantidadCod22ResOp3 + cantidadCod22ResOp4 + cantidadCod22ResOp5 + cantidadCod22ResOp6 + cantidadCod22ResOp7 + cantidadCod22ResOp8 + cantidadCod22ResOp9);
        console.log("la suma es 22:" + restaGlobalCod22);

        restaGlobalCod23 = Number(cantidadCod23ResOp1 + cantidadCod23ResOp2 + cantidadCod23ResOp3 + cantidadCod23ResOp4 + cantidadCod23ResOp5 + cantidadCod23ResOp6 + cantidadCod23ResOp7 + cantidadCod23ResOp8 + cantidadCod23ResOp9);
        console.log("la suma es 23:" + restaGlobalCod23);

        restaGlobalCod24 = Number(cantidadCod24ResOp1 + cantidadCod24ResOp2 + cantidadCod24ResOp3 + cantidadCod24ResOp4 + cantidadCod24ResOp5 + cantidadCod24ResOp6 + cantidadCod24ResOp7 + cantidadCod24ResOp8 + cantidadCod24ResOp9);
        console.log("la suma es 24:" + restaGlobalCod24);

        restaGlobalCod25 = Number(cantidadCod25ResOp1 + cantidadCod25ResOp2 + cantidadCod25ResOp3 + cantidadCod25ResOp4 + cantidadCod25ResOp5 + cantidadCod25ResOp6 + cantidadCod25ResOp7 + cantidadCod25ResOp8 + cantidadCod25ResOp9);
        console.log("la suma es 25:" + restaGlobalCod25);

        restaGlobalCod26 = Number(cantidadCod26ResOp1 + cantidadCod26ResOp2 + cantidadCod26ResOp3 + cantidadCod26ResOp4 + cantidadCod26ResOp5 + cantidadCod26ResOp6 + cantidadCod26ResOp7 + cantidadCod26ResOp8 + cantidadCod26ResOp9);
        console.log("la suma es 26:" + restaGlobalCod26);


        restaGlobalCod27 = Number(cantidadCod27ResOp1 + cantidadCod27ResOp2 + cantidadCod27ResOp3 + cantidadCod27ResOp4 + cantidadCod27ResOp5 + cantidadCod27ResOp6 + cantidadCod27ResOp7 + cantidadCod27ResOp8 + cantidadCod27ResOp9);
        console.log("la suma es 27:" + restaGlobalCod27);

        restaGlobalCod28 = Number(cantidadCod28ResOp1 + cantidadCod28ResOp2 + cantidadCod28ResOp3 + cantidadCod28ResOp4 + cantidadCod28ResOp5 + cantidadCod28ResOp6 + cantidadCod28ResOp7 + cantidadCod28ResOp8 + cantidadCod28ResOp9);
        console.log("la suma es 28:" + restaGlobalCod28);

        restaGlobalCod29 = Number(cantidadCod29ResOp1 + cantidadCod29ResOp2 + cantidadCod29ResOp3 + cantidadCod29ResOp4 + cantidadCod29ResOp5 + cantidadCod29ResOp6 + cantidadCod29ResOp7 + cantidadCod29ResOp8 + cantidadCod29ResOp9);
        console.log("la suma es 29:" + restaGlobalCod29);

        restaGlobalCod30 = Number(cantidadCod30ResOp1 + cantidadCod30ResOp2 + cantidadCod30ResOp3 + cantidadCod30ResOp4 + cantidadCod30ResOp5 + cantidadCod30ResOp6 + cantidadCod30ResOp7 + cantidadCod30ResOp8 + cantidadCod30ResOp9);
        console.log("la suma es 30:" + restaGlobalCod30);

        restaGlobalCod31 = Number(cantidadCod31ResOp1 + cantidadCod31ResOp2 + cantidadCod31ResOp3 + cantidadCod31ResOp4 + cantidadCod31ResOp5 + cantidadCod31ResOp6 + cantidadCod31ResOp7 + cantidadCod31ResOp8 + cantidadCod31ResOp9);
        console.log("la suma es 31:" + restaGlobalCod31);


        restaGlobalCod32 = Number(cantidadCod32ResOp1 + cantidadCod32ResOp2 + cantidadCod32ResOp3 + cantidadCod32ResOp4 + cantidadCod32ResOp5 + cantidadCod32ResOp6 + cantidadCod32ResOp7 + cantidadCod32ResOp8 + cantidadCod32ResOp9);
        console.log("la suma es 32:" + restaGlobalCod32);

        restaGlobalCod33 = Number(cantidadCod33ResOp1 + cantidadCod33ResOp2 + cantidadCod33ResOp3 + cantidadCod33ResOp4 + cantidadCod33ResOp5 + cantidadCod33ResOp6 + cantidadCod33ResOp7 + cantidadCod33ResOp8 + cantidadCod33ResOp9);
        console.log("la suma es 33:" + restaGlobalCod33);

        restaGlobalCod34 = Number(cantidadCod34ResOp1 + cantidadCod34ResOp2 + cantidadCod34ResOp3 + cantidadCod34ResOp4 + cantidadCod34ResOp5 + cantidadCod34ResOp6 + cantidadCod34ResOp7 + cantidadCod34ResOp8 + cantidadCod34ResOp9);
        console.log("la suma es 34:" + restaGlobalCod34);

        restaGlobalCod35 = Number(cantidadCod35ResOp1 + cantidadCod35ResOp2 + cantidadCod35ResOp3 + cantidadCod35ResOp4 + cantidadCod35ResOp5 + cantidadCod35ResOp6 + cantidadCod35ResOp7 + cantidadCod35ResOp8 + cantidadCod35ResOp9);
        console.log("la suma es 35:" + restaGlobalCod35);

        restaGlobalCod36 = Number(cantidadCod36ResOp1 + cantidadCod36ResOp2 + cantidadCod36ResOp3 + cantidadCod36ResOp4 + cantidadCod36ResOp5 + cantidadCod36ResOp6 + cantidadCod36ResOp7 + cantidadCod36ResOp8 + cantidadCod36ResOp9);
        console.log("la suma es 36:" + restaGlobalCod36);

        restaGlobalCod37 = Number(cantidadCod37ResOp1 + cantidadCod37ResOp2 + cantidadCod37ResOp3 + cantidadCod37ResOp4 + cantidadCod37ResOp5 + cantidadCod37ResOp6 + cantidadCod37ResOp7 + cantidadCod37ResOp8 + cantidadCod37ResOp9);
        console.log("la suma es 37:" + restaGlobalCod37);

        restaGlobalCod38 = Number(cantidadCod38ResOp1 + cantidadCod38ResOp2 + cantidadCod38ResOp3 + cantidadCod38ResOp4 + cantidadCod38ResOp5 + cantidadCod38ResOp6 + cantidadCod38ResOp7 + cantidadCod38ResOp8 + cantidadCod38ResOp9);
        console.log("la suma es 38:" + restaGlobalCod38);


        restaGlobalCod39 = Number(cantidadCod39ResOp1 + cantidadCod39ResOp2 + cantidadCod39ResOp3 + cantidadCod39ResOp4 + cantidadCod39ResOp5 + cantidadCod39ResOp6 + cantidadCod39ResOp7 + cantidadCod39ResOp8 + cantidadCod39ResOp9);
        console.log("la suma es 39:" + restaGlobalCod39);

        restaGlobalCod40 = Number(cantidadCod40ResOp1 + cantidadCod40ResOp2 + cantidadCod40ResOp3 + cantidadCod40ResOp4 + cantidadCod40ResOp5 + cantidadCod40ResOp6 + cantidadCod40ResOp7 + cantidadCod40ResOp8 + cantidadCod40ResOp9);
        console.log("la suma es 40:" + restaGlobalCod40);

        restaGlobalCod41 = Number(cantidadCod41ResOp1 + cantidadCod41ResOp2 + cantidadCod41ResOp3 + cantidadCod41ResOp4 + cantidadCod41ResOp5 + cantidadCod41ResOp6 + cantidadCod41ResOp7 + cantidadCod41ResOp8 + cantidadCod41ResOp9);
        console.log("la suma es 41:" + restaGlobalCod41);

        restaGlobalCod42 = Number(cantidadCod42ResOp1 + cantidadCod42ResOp2 + cantidadCod42ResOp3 + cantidadCod42ResOp4 + cantidadCod42ResOp5 + cantidadCod42ResOp6 + cantidadCod42ResOp7 + cantidadCod42ResOp8 + cantidadCod42ResOp9);
        console.log("la suma es 42:" + restaGlobalCod42);

        restaGlobalCod43 = Number(cantidadCod43ResOp1 + cantidadCod43ResOp2 + cantidadCod43ResOp3 + cantidadCod43ResOp4 + cantidadCod43ResOp5 + cantidadCod43ResOp6 + cantidadCod43ResOp7 + cantidadCod43ResOp8 + cantidadCod43ResOp9);
        console.log("la suma es 43:" + restaGlobalCod43);

        restaGlobalCod44 = Number(cantidadCod44ResOp1 + cantidadCod44ResOp2 + cantidadCod44ResOp3 + cantidadCod44ResOp4 + cantidadCod44ResOp5 + cantidadCod44ResOp6 + cantidadCod44ResOp7 + cantidadCod44ResOp8 + cantidadCod44ResOp9);
        console.log("la suma es 44:" + restaGlobalCod44);

        restaGlobalCod45 = Number(cantidadCod45ResOp1 + cantidadCod45ResOp2 + cantidadCod45ResOp3 + cantidadCod45ResOp4 + cantidadCod45ResOp5 + cantidadCod45ResOp6 + cantidadCod45ResOp7 + cantidadCod45ResOp8 + cantidadCod45ResOp9);
        console.log("la suma es 45:" + restaGlobalCod45);

        restaGlobalCod46 = Number(cantidadCod46ResOp1 + cantidadCod46ResOp2 + cantidadCod46ResOp3 + cantidadCod46ResOp4 + cantidadCod46ResOp5 + cantidadCod46ResOp6 + cantidadCod46ResOp7 + cantidadCod46ResOp8 + cantidadCod46ResOp9);
        console.log("la suma es 46:" + restaGlobalCod46);

        restaGlobalCod47 = Number(cantidadCod47ResOp1 + cantidadCod47ResOp2 + cantidadCod47ResOp3 + cantidadCod47ResOp4 + cantidadCod47ResOp5 + cantidadCod47ResOp6 + cantidadCod47ResOp7 + cantidadCod47ResOp8 + cantidadCod47ResOp9);
        console.log("la suma es 47:" + restaGlobalCod47);

        restaGlobalCod48 = Number(cantidadCod48ResOp1 + cantidadCod48ResOp2 + cantidadCod48ResOp3 + cantidadCod48ResOp4 + cantidadCod48ResOp5 + cantidadCod48ResOp6 + cantidadCod48ResOp7 + cantidadCod48ResOp8 + cantidadCod48ResOp9);
        console.log("la suma es 48:" + restaGlobalCod48);

        restaGlobalCod49 = Number(cantidadCod49ResOp1 + cantidadCod49ResOp2 + cantidadCod49ResOp3 + cantidadCod49ResOp4 + cantidadCod49ResOp5 + cantidadCod49ResOp6 + cantidadCod49ResOp7 + cantidadCod49ResOp8 + cantidadCod49ResOp9);
        console.log("la suma es 49:" + restaGlobalCod49);

        restaGlobalCod50 = Number(cantidadCod50ResOp1 + cantidadCod50ResOp2 + cantidadCod50ResOp3 + cantidadCod50ResOp4 + cantidadCod50ResOp5 + cantidadCod50ResOp6 + cantidadCod50ResOp7 + cantidadCod50ResOp8 + cantidadCod50ResOp9);
        console.log("la suma es 50:" + restaGlobalCod50);




        if (restaGlobalCod1 == 0) { restaGlobalCod1 = Number(canCod1); }

        if (restaGlobalCod2 == 0) { restaGlobalCod2 = Number(canCod2); }
        if (restaGlobalCod3 == 0) { restaGlobalCod3 = Number(canCod3); }
        if (restaGlobalCod4 == 0) { restaGlobalCod4 = Number(canCod4); }
        if (restaGlobalCod5 == 0) { restaGlobalCod5 = Number(canCod5); }
        if (restaGlobalCod6 == 0) { restaGlobalCod6 = Number(canCod6); }
        if (restaGlobalCod7 == 0) { restaGlobalCod7 = Number(canCod7); }
        if (restaGlobalCod8 == 0) { restaGlobalCod8 = Number(canCod8); }
        if (restaGlobalCod9 == 0) { restaGlobalCod9 = Number(canCod9); }
        if (restaGlobalCod10 == 0) { restaGlobalCod10 = Number(canCod10); }
        if (restaGlobalCod11 == 0) { restaGlobalCod11 = Number(canCod11); }
        if (restaGlobalCod12 == 0) { restaGlobalCod12 = Number(canCod12); }
        if (restaGlobalCod13 == 0) { restaGlobalCod13 = Number(canCod13); }
        if (restaGlobalCod14 == 0) { restaGlobalCod14 = Number(canCod14); }
        if (restaGlobalCod15 == 0) { restaGlobalCod15 = Number(canCod15); }

        if (restaGlobalCod16 == 0) { restaGlobalCod16 = Number(canCod16); }
        if (restaGlobalCod17 == 0) { restaGlobalCod17 = Number(canCod17); }
        if (restaGlobalCod18 == 0) { restaGlobalCod18 = Number(canCod18); }
        if (restaGlobalCod19 == 0) { restaGlobalCod19 = Number(canCod19); }
        if (restaGlobalCod20 == 0) { restaGlobalCod20 = Number(canCod20); }
        if (restaGlobalCod21 == 0) { restaGlobalCod21 = Number(canCod21); }
        if (restaGlobalCod22 == 0) { restaGlobalCod22 = Number(canCod22); }
        if (restaGlobalCod23 == 0) { restaGlobalCod23 = Number(canCod23); }
        if (restaGlobalCod24 == 0) { restaGlobalCod24 = Number(canCod24); }
        if (restaGlobalCod25 == 0) { restaGlobalCod25 = Number(canCod25); }
        if (restaGlobalCod26 == 0) { restaGlobalCod26 = Number(canCod26); }

        if (restaGlobalCod27 == 0) { restaGlobalCod27 = Number(canCod27); }
        if (restaGlobalCod28 == 0) { restaGlobalCod28 = Number(canCod28); }
        if (restaGlobalCod29 == 0) { restaGlobalCod29 = Number(canCod29); }

        if (restaGlobalCod30 == 0) { restaGlobalCod30 = Number(canCod30); }
        if (restaGlobalCod31 == 0) { restaGlobalCod31 = Number(canCod31); }
        if (restaGlobalCod32 == 0) { restaGlobalCod32 = Number(canCod32); }
        if (restaGlobalCod33 == 0) { restaGlobalCod33 = Number(canCod33); }
        if (restaGlobalCod34 == 0) { restaGlobalCod34 = Number(canCod34); }
        if (restaGlobalCod35 == 0) { restaGlobalCod35 = Number(canCod35); }
        if (restaGlobalCod36 == 0) { restaGlobalCod36 = Number(canCod36); }

        if (restaGlobalCod37 == 0) { restaGlobalCod37 = Number(canCod37); }
        if (restaGlobalCod38 == 0) { restaGlobalCod38 = Number(canCod38); }
        if (restaGlobalCod39 == 0) { restaGlobalCod39 = Number(canCod39); }

        if (restaGlobalCod40 == 0) { restaGlobalCod40 = Number(canCod40); }
        if (restaGlobalCod41 == 0) { restaGlobalCod41 = Number(canCod41); }
        if (restaGlobalCod42 == 0) { restaGlobalCod42 = Number(canCod42); }
        if (restaGlobalCod43 == 0) { restaGlobalCod43 = Number(canCod43); }
        if (restaGlobalCod44 == 0) { restaGlobalCod44 = Number(canCod44); }
        if (restaGlobalCod45 == 0) { restaGlobalCod45 = Number(canCod45); }
        if (restaGlobalCod46 == 0) { restaGlobalCod46 = Number(canCod46); }

        if (restaGlobalCod47 == 0) { restaGlobalCod47 = Number(canCod47); }
        if (restaGlobalCod48 == 0) { restaGlobalCod48 = Number(canCod48); }
        if (restaGlobalCod49 == 0) { restaGlobalCod49 = Number(canCod49); }
        if (restaGlobalCod50 == 0) { restaGlobalCod50 = Number(canCod50); }




        var washingtonRef = db.collection("CantidadesDisponibles").doc(doc.id);

        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
          cantiCod1: restaGlobalCod1,
          cantiCod2: restaGlobalCod2,
          cantiCod3: restaGlobalCod3,
          cantiCod4: restaGlobalCod4,
          cantiCod5: restaGlobalCod5,
          cantiCod6: restaGlobalCod6,
          cantiCod7: restaGlobalCod7,
          cantiCod8: restaGlobalCod8,
          cantiCod9: restaGlobalCod9,
          cantiCod10: restaGlobalCod10,
          cantiCod11: restaGlobalCod11,
          cantiCod12: restaGlobalCod12,
          cantiCod13: restaGlobalCod13,
          cantiCod14: restaGlobalCod14,
          cantiCod15: restaGlobalCod15,
          cantiCod16: restaGlobalCod16,
          cantiCod17: restaGlobalCod17,
          cantiCod18: restaGlobalCod18,
          cantiCod19: restaGlobalCod19,
          cantiCod20: restaGlobalCod20,
          cantiCod21: restaGlobalCod21,
          cantiCod22: restaGlobalCod22,
          cantiCod23: restaGlobalCod23,
          cantiCod24: restaGlobalCod24,
          cantiCod25: restaGlobalCod25,
          cantiCod26: restaGlobalCod26,
          cantiCod27: restaGlobalCod27,
          cantiCod28: restaGlobalCod28,
          cantiCod29: restaGlobalCod29,
          cantiCod30: restaGlobalCod30,
          cantiCod31: restaGlobalCod31,
          cantiCod32: restaGlobalCod32,
          cantiCod33: restaGlobalCod33,
          cantiCod34: restaGlobalCod34,
          cantiCod35: restaGlobalCod35,
          cantiCod36: restaGlobalCod36,
          cantiCod37: restaGlobalCod37,
          cantiCod38: restaGlobalCod38,
          cantiCod39: restaGlobalCod39,
          cantiCod40: restaGlobalCod40,
          cantiCod41: restaGlobalCod41,
          cantiCod42: restaGlobalCod42,
          cantiCod43: restaGlobalCod43,
          cantiCod44: restaGlobalCod44,
          cantiCod45: restaGlobalCod45,
          cantiCod46: restaGlobalCod46,
          cantiCod47: restaGlobalCod47,
          cantiCod48: restaGlobalCod48,
          cantiCod49: restaGlobalCod49,
          cantiCod50: restaGlobalCod50,



        })

          .then(function () {

            //Actu();
            //--------------------------------------------------actualizar-----------------------
            //porcenSin();

            //---------------------------------------------------------------------------------

            // TablaPro();



            console.log("SE ACTUALIZO LOS CAMPOS");
            console.log("px resta las unidades realizadas de la ficha");
            //     alert("se pudo realizar el registro");
          })
          .catch(function (error) {

            console.error("Error updating document: ", error);
          });





        // }



      });
    })

}

validacionCantidades = function () {
  var nombreref = document.getElementById("op").value;

  unidadesElaboradaop = 0;
  /* opera1=""; 
    opera2="";
   opera3="";
   opera4="";
   opera5="";
   opera6="";
   opera7="";
   opera8="";
   opera9="";*/



  var opera1 = document.getElementById("operaci").value;
  var opera2 = document.getElementById("operaci2").value;
  var opera3 = document.getElementById("operaci3").value;
  var opera4 = document.getElementById("operaci4").value;
  var opera5 = document.getElementById("operaci5").value;
  var opera6 = document.getElementById("operaci6").value;
  var opera7 = document.getElementById("operaci7").value;
  var opera8 = document.getElementById("operaci8").value;
  var opera9 = document.getElementById("operaci9").value;


  unidadesElaboradaop = document.getElementById("canti").value;
  //  console.log("CANTIDADESSS:"+unidadesElaboradaop);




  db.collection("CantidadesDisponibles")
    .where("OP", "==", nombreref).get()
    .then(function (querySnapshot) {

      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        var codH1 = `${doc.data().Codigo}`;
        var canCod1 = `${doc.data().cantiCod1}`;

        var codH2 = `${doc.data().Codigo2}`;
        var canCod2 = `${doc.data().cantiCod2}`;

        var codH3 = `${doc.data().Codigo3}`;
        var canCod3 = `${doc.data().cantiCod3}`;

        var codH4 = `${doc.data().Codigo4}`;
        var canCod4 = `${doc.data().cantiCod4}`;

        var codH5 = `${doc.data().Codigo5}`;
        var canCod5 = `${doc.data().cantiCod5}`;

        var codH6 = `${doc.data().Codigo6}`;
        var canCod6 = `${doc.data().cantiCod6}`;

        var codH7 = `${doc.data().Codigo7}`;
        var canCod7 = `${doc.data().cantiCod7}`;

        var codH8 = `${doc.data().Codigo8}`;
        var canCod8 = `${doc.data().cantiCod8}`;

        var codH9 = `${doc.data().Codigo9}`;
        var canCod9 = `${doc.data().cantiCod9}`;

        var codH10 = `${doc.data().Codigo10}`;
        var canCod10 = `${doc.data().cantiCod10}`;

        var codH11 = `${doc.data().Codigo11}`;
        var canCod11 = `${doc.data().cantiCod11}`;

        var codH12 = `${doc.data().Codigo12}`;
        var canCod12 = `${doc.data().cantiCod12}`;

        var codH13 = `${doc.data().Codigo13}`;
        var canCod13 = `${doc.data().cantiCod13}`;

        var codH14 = `${doc.data().Codigo14}`;
        var canCod14 = `${doc.data().cantiCod14}`;

        var codH15 = `${doc.data().Codigo15}`;
        var canCod15 = `${doc.data().cantiCod15}`;

        var codH16 = `${doc.data().Codigo16}`;
        var canCod16 = `${doc.data().cantiCod16}`;

        var codH17 = `${doc.data().Codigo17}`;
        var canCod17 = `${doc.data().cantiCod17}`;

        var codH18 = `${doc.data().Codigo18}`;
        var canCod18 = `${doc.data().cantiCod18}`;

        var codH19 = `${doc.data().Codigo19}`;
        var canCod19 = `${doc.data().cantiCod19}`;

        var codH20 = `${doc.data().Codigo20}`;
        var canCod20 = `${doc.data().cantiCod20}`;

        var codH21 = `${doc.data().Codigo21}`;
        var canCod21 = `${doc.data().cantiCod21}`;

        var codH22 = `${doc.data().Codigo22}`;
        var canCod22 = `${doc.data().cantiCod22}`;

        var codH23 = `${doc.data().Codigo23}`;
        var canCod23 = `${doc.data().cantiCod23}`;

        var codH24 = `${doc.data().Codigo24}`;
        var canCod24 = `${doc.data().cantiCod24}`;

        var codH25 = `${doc.data().Codigo25}`;
        var canCod25 = `${doc.data().cantiCod25}`;

        var codH26 = `${doc.data().Codigo26}`;
        var canCod26 = `${doc.data().cantiCod26}`;

        var codH27 = `${doc.data().Codigo27}`;
        var canCod27 = `${doc.data().cantiCod27}`;

        var codH28 = `${doc.data().Codigo28}`;
        var canCod28 = `${doc.data().cantiCod28}`;

        var codH29 = `${doc.data().Codigo29}`;
        var canCod29 = `${doc.data().cantiCod29}`;

        var codH30 = `${doc.data().Codigo30}`;
        var canCod30 = `${doc.data().cantiCod30}`;

        var codH31 = `${doc.data().Codigo31}`;
        var canCod31 = `${doc.data().cantiCod31}`;

        var codH32 = `${doc.data().Codigo32}`;
        var canCod32 = `${doc.data().cantiCod32}`;

        var codH33 = `${doc.data().Codigo33}`;
        var canCod33 = `${doc.data().cantiCod33}`;

        var codH34 = `${doc.data().Codigo34}`;
        var canCod34 = `${doc.data().cantiCod34}`;

        var codH35 = `${doc.data().Codigo35}`;
        var canCod35 = `${doc.data().cantiCod35}`;

        var codH36 = `${doc.data().Codigo36}`;
        var canCod36 = `${doc.data().cantiCod36}`;

        var codH37 = `${doc.data().Codigo37}`;
        var canCod37 = `${doc.data().cantiCod37}`;

        var codH38 = `${doc.data().Codigo38}`;
        var canCod38 = `${doc.data().cantiCod38}`;

        var codH39 = `${doc.data().Codigo39}`;
        var canCod39 = `${doc.data().cantiCod39}`;

        var codH40 = `${doc.data().Codigo40}`;
        var canCod40 = `${doc.data().cantiCod40}`;

        var codH41 = `${doc.data().Codigo41}`;
        var canCod41 = `${doc.data().cantiCod41}`;

        var codH42 = `${doc.data().Codigo42}`;
        var canCod42 = `${doc.data().cantiCod42}`;

        var codH43 = `${doc.data().Codigo43}`;
        var canCod43 = `${doc.data().cantiCod43}`;

        var codH44 = `${doc.data().Codigo44}`;
        var canCod44 = `${doc.data().cantiCod44}`;

        var codH45 = `${doc.data().Codigo45}`;
        var canCod45 = `${doc.data().cantiCod45}`;

        var codH46 = `${doc.data().Codigo46}`;
        var canCod46 = `${doc.data().cantiCod46}`;

        var codH47 = `${doc.data().Codigo47}`;
        var canCod47 = `${doc.data().cantiCod47}`;

        var codH48 = `${doc.data().Codigo48}`;
        var canCod48 = `${doc.data().cantiCod48}`;

        var codH49 = `${doc.data().Codigo49}`;
        var canCod49 = `${doc.data().cantiCod49}`;

        var codH50 = `${doc.data().Codigo50}`;
        var canCod50 = `${doc.data().cantiCod50}`;

        if (isNaN(canCod1)) {
          canCod1 = 150;
        }
        if (isNaN(canCod2)) {
          canCod2 = 150;
        }
        if (isNaN(canCod3)) {
          canCod3 = 150;
        }
        if (isNaN(canCod4)) {
          canCod4 = 150;
        }
        if (isNaN(canCod5)) {
          canCod22 = 150;
        }
        if (isNaN(canCod6)) {
          canCod6 = 150;
        }
        if (isNaN(canCod7)) {
          canCod7 = 150;
        }
        if (isNaN(canCod8)) {
          canCod8 = 150;
        }
        if (isNaN(canCod9)) {
          canCod9 = 150;
        }
        if (isNaN(canCod10)) {
          canCod10 = 150;
        }
        if (isNaN(canCod11)) {
          canCod11 = 150;
        }
        if (isNaN(canCod12)) {
          canCod12 = 150;
        }
        if (isNaN(canCod13)) {
          canCod13 = 150;
        }

        if (isNaN(canCod14)) {
          canCod14 = 150;
        }

        if (isNaN(canCod15)) {
          canCod15 = 150;
        }
        if (isNaN(canCod16)) {
          canCod16 = 150;
        }
        if (isNaN(canCod17)) {
          canCod17 = 150;
        }
        if (isNaN(canCod18)) {
          canCod18 = 150;
        }
        if (isNaN(canCod19)) {
          canCod19 = 150;
        }
        if (isNaN(canCod20)) {
          canCod20 = 150;
        }
        if (isNaN(canCod21)) {
          canCod21 = 150;
        }
        if (isNaN(canCod22)) {
          canCod22 = 150;
        }
        if (isNaN(canCod23)) {
          canCod23 = 150;
        }
        if (isNaN(canCod24)) {
          canCod24 = 150;
        }
        if (isNaN(canCod25)) {
          canCod25 = 150;
        }
        if (isNaN(canCod26)) {
          canCod26 = 150;
        }
        if (isNaN(canCod27)) {
          canCod27 = 150;
        }
        if (isNaN(canCod28)) {
          canCod28 = 150;
        }

        if (isNaN(canCod29)) {
          canCod29 = 150;
        }

        if (isNaN(canCod30)) {
          canCod30 = 150;
        }
        if (isNaN(canCod31)) {
          canCod31 = 150;
        }
        if (isNaN(canCod32)) {
          canCod32 = 150;
        }
        if (isNaN(canCod33)) {
          canCod33 = 150;
        }
        if (isNaN(canCod34)) {
          canCod34 = 150;
        }
        if (isNaN(canCod35)) {
          canCod35 = 150;
        }
        if (isNaN(canCod36)) {
          canCod36 = 150;
        }
        if (isNaN(canCod37)) {
          canCod37 = 150;
        }
        if (isNaN(canCod38)) {
          canCod38 = 150;
        }
        if (isNaN(canCod39)) {
          canCod39 = 150;
        }
        if (isNaN(canCod40)) {
          canCod40 = 150;
        }
        if (isNaN(canCod41)) {
          canCod41 = 150;
        }
        if (isNaN(canCod42)) {
          canCod42 = 150;
        }
        if (isNaN(canCod43)) {
          canCod43 = 150;
        }
        if (isNaN(canCod44)) {
          canCod44 = 150;
        }
        if (isNaN(canCod45)) {
          canCod45 = 150;
        }
        if (isNaN(canCod46)) {
          canCod46 = 150;
        }
        if (isNaN(canCod47)) {
          canCod47 = 150;
        }
        if (isNaN(canCod48)) {
          canCod48 = 150;
        }
        if (isNaN(canCod49)) {
          canCod49 = 150;
        }
        if (isNaN(canCod50)) {
          canCod50s = 150;
        }

        if (isNaN(canCod29)) {
          canCod29 = 150;
        }

        if (isNaN(canCod30)) {
          canCod30 = 150;
        }

        //console.log("prueba conulta inexistente:"+canCod22);
        if (unidadesElaboradaop > canCod1) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH1,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod2) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH2,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod3) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH3,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod4) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH4,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod5) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH5,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod6) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH6,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod7) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH7,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod8) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH8,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod9) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH9,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod10) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH10,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod11) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH11,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod12) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH12,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod13) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH13,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod14) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH14,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod15) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH15,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod16) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH16,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod17) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH17,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod18) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH18,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod19) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH19,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod20) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH20,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod21) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH21,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod22) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH22,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod23) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH23,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod24) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH24,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod25) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH25,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod26) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH26,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod27) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH27,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod28) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH28,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod29) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH29,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod30) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH30,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod31) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH31,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod32) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH32,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod33) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH33,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod34) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH34,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod35) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH35,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod36) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH36,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod37) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH37,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod38) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH38,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod39) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH39,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod40) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH40,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod41) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH41,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod42) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH42,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod43) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH43,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod44) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH44,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod45) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH45,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod46) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH46,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod47) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH47,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod48) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH48,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod49) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH49,
            'info'
          )

        }
        if (unidadesElaboradaop > canCod50) {

          Swal.fire(
            'Error',
            'Ha excedido la cantidad de unidades, Favor verifique...' + codH50,
            'info'
          )

        }



        else {
          //--------------------------1----------------------
          cantidadCod1ResOp1 = 0;
          cantidadCod1ResOp2 = 0;
          cantidadCod1ResOp3 = 0;

          cantidadCod1ResOp4 = 0;
          cantidadCod1ResOp5 = 0;
          cantidadCod1ResOp6 = 0;

          cantidadCod1ResOp7 = 0;
          cantidadCod1ResOp8 = 0;
          cantidadCod1ResOp9 = 0;


          //-------------------------------2---------------------------
          cantidadCod2ResOp1 = 0;
          cantidadCod2ResOp2 = 0;
          cantidadCod2ResOp3 = 0;

          cantidadCod2ResOp4 = 0;
          cantidadCod2ResOp5 = 0;
          cantidadCod2ResOp6 = 0;

          cantidadCod2ResOp7 = 0;
          cantidadCod2ResOp8 = 0;
          cantidadCod2ResOp9 = 0;

          //-----------------------------------3-----------------------------
          cantidadCod3ResOp1 = 0;
          cantidadCod3ResOp2 = 0;
          cantidadCod3ResOp3 = 0;

          cantidadCod3ResOp4 = 0;
          cantidadCod3ResOp5 = 0;
          cantidadCod3ResOp6 = 0;

          cantidadCod3ResOp7 = 0;
          cantidadCod3ResOp8 = 0;
          cantidadCod3ResOp9 = 0;


          //----------------------------------espacio 4---------------------------------------

          cantidadCod4ResOp1 = 0;
          cantidadCod4ResOp2 = 0;
          cantidadCod4ResOp3 = 0;

          cantidadCod4ResOp4 = 0;
          cantidadCod4ResOp5 = 0;
          cantidadCod4ResOp6 = 0;

          cantidadCod4ResOp7 = 0;
          cantidadCod4ResOp8 = 0;
          cantidadCod4ResOp9 = 0;



          //----------------------------------espacio 5---------------------------------------

          cantidadCod5ResOp1 = 0;
          cantidadCod5ResOp2 = 0;
          cantidadCod5ResOp3 = 0;

          cantidadCod5ResOp4 = 0;
          cantidadCod5ResOp5 = 0;
          cantidadCod5ResOp6 = 0;

          cantidadCod5ResOp7 = 0;
          cantidadCod5ResOp8 = 0;
          cantidadCod5ResOp9 = 0;



          //----------------------------------espacio 6---------------------------------------

          cantidadCod6ResOp1 = 0;
          cantidadCod6ResOp2 = 0;
          cantidadCod6ResOp3 = 0;

          cantidadCod6ResOp4 = 0;
          cantidadCod6ResOp5 = 0;
          cantidadCod6ResOp6 = 0;

          cantidadCod6ResOp7 = 0;
          cantidadCod6ResOp8 = 0;
          cantidadCod6ResOp9 = 0;



          //----------------------------------espacio 7---------------------------------------

          cantidadCod7ResOp1 = 0;
          cantidadCod7ResOp2 = 0;
          cantidadCod7ResOp3 = 0;

          cantidadCod7ResOp4 = 0;
          cantidadCod7ResOp5 = 0;
          cantidadCod7ResOp6 = 0;

          cantidadCod7ResOp7 = 0;
          cantidadCod7ResOp8 = 0;
          cantidadCod7ResOp9 = 0;


          //----------------------------------espacio 8---------------------------------------

          cantidadCod8ResOp1 = 0;
          cantidadCod8ResOp2 = 0;
          cantidadCod8ResOp3 = 0;

          cantidadCod8ResOp4 = 0;
          cantidadCod8ResOp5 = 0;
          cantidadCod8ResOp6 = 0;

          cantidadCod8ResOp7 = 0;
          cantidadCod8ResOp8 = 0;
          cantidadCod8ResOp9 = 0;

          //----------------------------------espacio 9---------------------------------------

          cantidadCod9ResOp1 = 0;
          cantidadCod9ResOp2 = 0;
          cantidadCod9ResOp3 = 0;

          cantidadCod9ResOp4 = 0;
          cantidadCod9ResOp5 = 0;
          cantidadCod9ResOp6 = 0;

          cantidadCod9ResOp7 = 0;
          cantidadCod9ResOp8 = 0;
          cantidadCod9ResOp9 = 0;


          //----------------------------------espacio 10---------------------------------------

          cantidadCod10ResOp1 = 0;
          cantidadCod10ResOp2 = 0;
          cantidadCod10ResOp3 = 0;

          cantidadCod10ResOp4 = 0;
          cantidadCod10ResOp5 = 0;
          cantidadCod10ResOp6 = 0;

          cantidadCod10ResOp7 = 0;
          cantidadCod10ResOp8 = 0;
          cantidadCod10ResOp9 = 0;




          //----------------------------------espacio 11---------------------------------------

          cantidadCod11ResOp1 = 0;
          cantidadCod11ResOp2 = 0;
          cantidadCod11ResOp3 = 0;

          cantidadCod11ResOp4 = 0;
          cantidadCod11ResOp5 = 0;
          cantidadCod11ResOp6 = 0;

          cantidadCod11ResOp7 = 0;
          cantidadCod11ResOp8 = 0;
          cantidadCod11ResOp9 = 0;



          //----------------------------------espacio 12---------------------------------------

          cantidadCod12ResOp1 = 0;
          cantidadCod12ResOp2 = 0;
          cantidadCod12ResOp3 = 0;

          cantidadCod12ResOp4 = 0;
          cantidadCod12ResOp5 = 0;
          cantidadCod12ResOp6 = 0;

          cantidadCod12ResOp7 = 0;
          cantidadCod12ResOp8 = 0;
          cantidadCod12ResOp9 = 0;



          //----------------------------------espacio 13---------------------------------------

          cantidadCod13ResOp1 = 0;
          cantidadCod13ResOp2 = 0;
          cantidadCod13ResOp3 = 0;

          cantidadCod13ResOp4 = 0;
          cantidadCod13ResOp5 = 0;
          cantidadCod13ResOp6 = 0;

          cantidadCod13ResOp7 = 0;
          cantidadCod13ResOp8 = 0;
          cantidadCod13ResOp9 = 0;




          //----------------------------------espacio 14---------------------------------------

          cantidadCod14ResOp1 = 0;
          cantidadCod14ResOp2 = 0;
          cantidadCod14ResOp3 = 0;

          cantidadCod14ResOp4 = 0;
          cantidadCod14ResOp5 = 0;
          cantidadCod14ResOp6 = 0;

          cantidadCod14ResOp7 = 0;
          cantidadCod14ResOp8 = 0;
          cantidadCod14ResOp9 = 0;


          //----------------------------------espacio 15---------------------------------------

          cantidadCod15ResOp1 = 0;
          cantidadCod15ResOp2 = 0;
          cantidadCod15ResOp3 = 0;

          cantidadCod15ResOp4 = 0;
          cantidadCod15ResOp5 = 0;
          cantidadCod15ResOp6 = 0;

          cantidadCod15ResOp7 = 0;
          cantidadCod15ResOp8 = 0;
          cantidadCod15ResOp9 = 0;



          //----------------------------------espacio 16---------------------------------------

          cantidadCod16ResOp1 = 0;
          cantidadCod16ResOp2 = 0;
          cantidadCod16ResOp3 = 0;

          cantidadCod16ResOp4 = 0;
          cantidadCod16ResOp5 = 0;
          cantidadCod16ResOp6 = 0;

          cantidadCod16ResOp7 = 0;
          cantidadCod16ResOp8 = 0;
          cantidadCod16ResOp9 = 0;


          //----------------------------------espacio 17---------------------------------------

          cantidadCod17ResOp1 = 0;
          cantidadCod17ResOp2 = 0;
          cantidadCod17ResOp3 = 0;

          cantidadCod17ResOp4 = 0;
          cantidadCod17ResOp5 = 0;
          cantidadCod17ResOp6 = 0;

          cantidadCod17ResOp7 = 0;
          cantidadCod17ResOp8 = 0;
          cantidadCod17ResOp9 = 0;


          //----------------------------------espacio 18---------------------------------------

          cantidadCod18ResOp1 = 0;
          cantidadCod18ResOp2 = 0;
          cantidadCod18ResOp3 = 0;

          cantidadCod18ResOp4 = 0;
          cantidadCod18ResOp5 = 0;
          cantidadCod18ResOp6 = 0;

          cantidadCod18ResOp7 = 0;
          cantidadCod18ResOp8 = 0;
          cantidadCod18ResOp9 = 0;


          //----------------------------------espacio 19---------------------------------------

          cantidadCod19ResOp1 = 0;
          cantidadCod19ResOp2 = 0;
          cantidadCod190ResOp3 = 0;

          cantidadCod19ResOp4 = 0;
          cantidadCod19ResOp5 = 0;
          cantidadCod19ResOp6 = 0;

          cantidadCod19ResOp7 = 0;
          cantidadCod19ResOp8 = 0;
          cantidadCod19ResOp9 = 0;


          //----------------------------------espacio 20---------------------------------------

          cantidadCod20ResOp1 = 0;
          cantidadCod20ResOp2 = 0;
          cantidadCod20ResOp3 = 0;

          cantidadCod20ResOp4 = 0;
          cantidadCod20ResOp5 = 0;
          cantidadCod20ResOp6 = 0;

          cantidadCod20ResOp7 = 0;
          cantidadCod20ResOp8 = 0;
          cantidadCod20ResOp9 = 0;


          //----------------------------------espacio 21---------------------------------------

          cantidadCod21ResOp1 = 0;
          cantidadCod21ResOp2 = 0;
          cantidadCod21ResOp3 = 0;

          cantidadCod21ResOp4 = 0;
          cantidadCod21ResOp5 = 0;
          cantidadCod21ResOp6 = 0;

          cantidadCod21ResOp7 = 0;
          cantidadCod21ResOp8 = 0;
          cantidadCod21ResOp9 = 0;



          //----------------------------------espacio 22---------------------------------------

          cantidadCod22ResOp1 = 0;
          cantidadCod22ResOp2 = 0;
          cantidadCod22ResOp3 = 0;

          cantidadCod22ResOp4 = 0;
          cantidadCod22ResOp5 = 0;
          cantidadCod22ResOp6 = 0;

          cantidadCod22ResOp7 = 0;
          cantidadCod22ResOp8 = 0;
          cantidadCod22ResOp9 = 0;


          //----------------------------------espacio 23---------------------------------------

          cantidadCod23ResOp1 = 0;
          cantidadCod23ResOp2 = 0;
          cantidadCod23ResOp3 = 0;

          cantidadCod23ResOp4 = 0;
          cantidadCod23ResOp5 = 0;
          cantidadCod23ResOp6 = 0;

          cantidadCod23ResOp7 = 0;
          cantidadCod23ResOp8 = 0;
          cantidadCod23ResOp9 = 0;


          //----------------------------------espacio 24---------------------------------------

          cantidadCod24ResOp1 = 0;
          cantidadCod24ResOp2 = 0;
          cantidadCod24ResOp3 = 0;

          cantidadCod24ResOp4 = 0;
          cantidadCod24ResOp5 = 0;
          cantidadCod24ResOp6 = 0;

          cantidadCod24ResOp7 = 0;
          cantidadCod24ResOp8 = 0;
          cantidadCod24ResOp9 = 0;


          //----------------------------------espacio 25---------------------------------------

          cantidadCod25ResOp1 = 0;
          cantidadCod25ResOp2 = 0;
          cantidadCod25ResOp3 = 0;

          cantidadCod25ResOp4 = 0;
          cantidadCod25ResOp5 = 0;
          cantidadCod25ResOp6 = 0;

          cantidadCod25ResOp7 = 0;
          cantidadCod25ResOp8 = 0;
          cantidadCod25ResOp9 = 0;


          //----------------------------------espacio 26---------------------------------------

          cantidadCod26ResOp1 = 0;
          cantidadCod26ResOp2 = 0;
          cantidadCod26ResOp3 = 0;

          cantidadCod26ResOp4 = 0;
          cantidadCod26ResOp5 = 0;
          cantidadCod26ResOp6 = 0;

          cantidadCod26ResOp7 = 0;
          cantidadCod26ResOp8 = 0;
          cantidadCod26ResOp9 = 0;


          //----------------------------------espacio 27---------------------------------------

          cantidadCod27ResOp1 = 0;
          cantidadCod27ResOp2 = 0;
          cantidadCod27ResOp3 = 0;

          cantidadCod27ResOp4 = 0;
          cantidadCod27ResOp5 = 0;
          cantidadCod27ResOp6 = 0;

          cantidadCod27ResOp7 = 0;
          cantidadCod27ResOp8 = 0;
          cantidadCod27ResOp9 = 0;


          //----------------------------------espacio 28---------------------------------------

          cantidadCod28ResOp1 = 0;
          cantidadCod28ResOp2 = 0;
          cantidadCod28ResOp3 = 0;

          cantidadCod28ResOp4 = 0;
          cantidadCod28ResOp5 = 0;
          cantidadCod28ResOp6 = 0;

          cantidadCod28ResOp7 = 0;
          cantidadCod28ResOp8 = 0;
          cantidadCod28ResOp9 = 0;


          //----------------------------------espacio 29---------------------------------------

          cantidadCod29ResOp1 = 0;
          cantidadCod29ResOp2 = 0;
          cantidadCod29ResOp3 = 0;

          cantidadCod29ResOp4 = 0;
          cantidadCod29ResOp5 = 0;
          cantidadCod29ResOp6 = 0;

          cantidadCod29ResOp7 = 0;
          cantidadCod29ResOp8 = 0;
          cantidadCod29ResOp9 = 0;


          //----------------------------------espacio 30---------------------------------------

          cantidadCod30ResOp1 = 0;
          cantidadCod30ResOp2 = 0;
          cantidadCod30ResOp3 = 0;

          cantidadCod30ResOp4 = 0;
          cantidadCod30ResOp5 = 0;
          cantidadCod30ResOp6 = 0;

          cantidadCod30ResOp7 = 0;
          cantidadCod30ResOp8 = 0;
          cantidadCod30ResOp9 = 0;




          //----------------------------------espacio 31---------------------------------------

          cantidadCod31ResOp1 = 0;
          cantidadCod31ResOp2 = 0;
          cantidadCod31ResOp3 = 0;

          cantidadCod31ResOp4 = 0;
          cantidadCod31ResOp5 = 0;
          cantidadCod31ResOp6 = 0;

          cantidadCod31ResOp7 = 0;
          cantidadCod31ResOp8 = 0;
          cantidadCod31ResOp9 = 0;
          //----------------------------------espacio 32---------------------------------------

          cantidadCod32ResOp1 = 0;
          cantidadCod32ResOp2 = 0;
          cantidadCod32ResOp3 = 0;

          cantidadCod32ResOp4 = 0;
          cantidadCod32ResOp5 = 0;
          cantidadCod32ResOp6 = 0;

          cantidadCod32ResOp7 = 0;
          cantidadCod32ResOp8 = 0;
          cantidadCod32ResOp9 = 0;


          //----------------------------------espacio 33---------------------------------------

          cantidadCod33ResOp1 = 0;
          cantidadCod33ResOp2 = 0;
          cantidadCod33ResOp3 = 0;

          cantidadCod33ResOp4 = 0;
          cantidadCod33ResOp5 = 0;
          cantidadCod33ResOp6 = 0;

          cantidadCod33ResOp7 = 0;
          cantidadCod33ResOp8 = 0;
          cantidadCod33ResOp9 = 0;

          //----------------------------------espacio 34---------------------------------------

          cantidadCod34ResOp1 = 0;
          cantidadCod34ResOp2 = 0;
          cantidadCod34ResOp3 = 0;

          cantidadCod34ResOp4 = 0;
          cantidadCod34ResOp5 = 0;
          cantidadCod34ResOp6 = 0;

          cantidadCod34ResOp7 = 0;
          cantidadCod34ResOp8 = 0;
          cantidadCod34ResOp9 = 0;


          //----------------------------------espacio 35---------------------------------------

          cantidadCod35ResOp1 = 0;
          cantidadCod35ResOp2 = 0;
          cantidadCod35ResOp3 = 0;

          cantidadCod35ResOp4 = 0;
          cantidadCod35ResOp5 = 0;
          cantidadCod35ResOp6 = 0;

          cantidadCod35ResOp7 = 0;
          cantidadCod35ResOp8 = 0;
          cantidadCod35ResOp9 = 0;

          //----------------------------------espacio 36---------------------------------------

          cantidadCod36ResOp1 = 0;
          cantidadCod36ResOp2 = 0;
          cantidadCod36ResOp3 = 0;

          cantidadCod36ResOp4 = 0;
          cantidadCod36ResOp5 = 0;
          cantidadCod36ResOp6 = 0;

          cantidadCod36ResOp7 = 0;
          cantidadCod36ResOp8 = 0;
          cantidadCod36ResOp9 = 0;

          //----------------------------------espacio 37---------------------------------------

          cantidadCod37ResOp1 = 0;
          cantidadCod37ResOp2 = 0;
          cantidadCod37ResOp3 = 0;

          cantidadCod37ResOp4 = 0;
          cantidadCod37ResOp5 = 0;
          cantidadCod37ResOp6 = 0;

          cantidadCod37ResOp7 = 0;
          cantidadCod37ResOp8 = 0;
          cantidadCod37ResOp9 = 0;


          //----------------------------------espacio 38---------------------------------------

          cantidadCod38ResOp1 = 0;
          cantidadCod38ResOp2 = 0;
          cantidadCod38ResOp3 = 0;

          cantidadCod38ResOp4 = 0;
          cantidadCod38ResOp5 = 0;
          cantidadCod38ResOp6 = 0;

          cantidadCod38ResOp7 = 0;
          cantidadCod38ResOp8 = 0;
          cantidadCod38ResOp9 = 0;


          //----------------------------------espacio 39---------------------------------------

          cantidadCod39ResOp1 = 0;
          cantidadCod39ResOp2 = 0;
          cantidadCod39ResOp3 = 0;

          cantidadCod39ResOp4 = 0;
          cantidadCod39ResOp5 = 0;
          cantidadCod39ResOp6 = 0;

          cantidadCod39ResOp7 = 0;
          cantidadCod39ResOp8 = 0;
          cantidadCod39ResOp9 = 0;


          //----------------------------------espacio 40---------------------------------------

          cantidadCod40ResOp1 = 0;
          cantidadCod40ResOp2 = 0;
          cantidadCod40ResOp3 = 0;

          cantidadCod40ResOp4 = 0;
          cantidadCod40ResOp5 = 0;
          cantidadCod40ResOp6 = 0;

          cantidadCod40ResOp7 = 0;
          cantidadCod40ResOp8 = 0;
          cantidadCod40ResOp9 = 0;



          //----------------------------------espacio 41---------------------------------------

          cantidadCod41ResOp1 = 0;
          cantidadCod41ResOp2 = 0;
          cantidadCod41ResOp3 = 0;

          cantidadCod41ResOp4 = 0;
          cantidadCod41ResOp5 = 0;
          cantidadCod41ResOp6 = 0;

          cantidadCod41ResOp7 = 0;
          cantidadCod41ResOp8 = 0;
          cantidadCod41ResOp9 = 0;

          //----------------------------------espacio 42---------------------------------------

          cantidadCod42ResOp1 = 0;
          cantidadCod42ResOp2 = 0;
          cantidadCod42ResOp3 = 0;

          cantidadCod42ResOp4 = 0;
          cantidadCod42ResOp5 = 0;
          cantidadCod42ResOp6 = 0;

          cantidadCod42ResOp7 = 0;
          cantidadCod42ResOp8 = 0;
          cantidadCod42ResOp9 = 0;

          //----------------------------------espacio 43---------------------------------------

          cantidadCod43ResOp1 = 0;
          cantidadCod43ResOp2 = 0;
          cantidadCod43ResOp3 = 0;

          cantidadCod43ResOp4 = 0;
          cantidadCod43ResOp5 = 0;
          cantidadCod43ResOp6 = 0;

          cantidadCod43ResOp7 = 0;
          cantidadCod43ResOp8 = 0;
          cantidadCod43ResOp9 = 0;

          //----------------------------------espacio 44---------------------------------------

          cantidadCod44ResOp1 = 0;
          cantidadCod44ResOp2 = 0;
          cantidadCod44ResOp3 = 0;

          cantidadCod44ResOp4 = 0;
          cantidadCod44ResOp5 = 0;
          cantidadCod44ResOp6 = 0;

          cantidadCod44ResOp7 = 0;
          cantidadCod44ResOp8 = 0;
          cantidadCod44ResOp9 = 0;

          //----------------------------------espacio 45---------------------------------------

          cantidadCod45ResOp1 = 0;
          cantidadCod45ResOp2 = 0;
          cantidadCod45ResOp3 = 0;

          cantidadCod45ResOp4 = 0;
          cantidadCod45ResOp5 = 0;
          cantidadCod45ResOp6 = 0;

          cantidadCod45ResOp7 = 0;
          cantidadCod45ResOp8 = 0;
          cantidadCod45ResOp9 = 0;

          //----------------------------------espacio 46---------------------------------------

          cantidadCod46ResOp1 = 0;
          cantidadCod46ResOp2 = 0;
          cantidadCod46ResOp3 = 0;

          cantidadCod46ResOp4 = 0;
          cantidadCod46ResOp5 = 0;
          cantidadCod46ResOp6 = 0;

          cantidadCod46ResOp7 = 0;
          cantidadCod46ResOp8 = 0;
          cantidadCod46ResOp9 = 0;

          //----------------------------------espacio 47---------------------------------------

          cantidadCod47ResOp1 = 0;
          cantidadCod47ResOp2 = 0;
          cantidadCod47ResOp3 = 0;

          cantidadCod47ResOp4 = 0;
          cantidadCod47ResOp5 = 0;
          cantidadCod47ResOp6 = 0;

          cantidadCod47ResOp7 = 0;
          cantidadCod47ResOp8 = 0;
          cantidadCod47ResOp9 = 0;


          //----------------------------------espacio 48---------------------------------------

          cantidadCod48ResOp1 = 0;
          cantidadCod48ResOp2 = 0;
          cantidadCod48ResOp3 = 0;

          cantidadCod48ResOp4 = 0;
          cantidadCod48ResOp5 = 0;
          cantidadCod48ResOp6 = 0;

          cantidadCod48ResOp7 = 0;
          cantidadCod48ResOp8 = 0;
          cantidadCod48ResOp9 = 0;


          //----------------------------------espacio 49---------------------------------------

          cantidadCod49ResOp1 = 0;
          cantidadCod49ResOp2 = 0;
          cantidadCod49ResOp3 = 0;

          cantidadCod49ResOp4 = 0;
          cantidadCod49ResOp5 = 0;
          cantidadCod49ResOp6 = 0;

          cantidadCod49ResOp7 = 0;
          cantidadCod49ResOp8 = 0;
          cantidadCod49ResOp9 = 0;

          //----------------------------------espacio 50---------------------------------------

          cantidadCod50ResOp1 = 0;
          cantidadCod50ResOp2 = 0;
          cantidadCod50ResOp3 = 0;

          cantidadCod50ResOp4 = 0;
          cantidadCod50ResOp5 = 0;
          cantidadCod50ResOp6 = 0;

          cantidadCod50ResOp7 = 0;
          cantidadCod50ResOp8 = 0;
          cantidadCod50ResOp9 = 0;













          //----------------------------------espacio 1--------------------------------
          if (opera1 == codH1) {


            cantidadCod1ResOp1 = canCod1 - unidadesElaboradaop;
          }

          if (opera1 == codH2) {

            cantidadCod2ResOp1 = canCod2 - unidadesElaboradaop;
          }

          if (opera1 == codH3) {

            cantidadCod3ResOp1 = canCod3 - unidadesElaboradaop;
          }
          if (opera1 == codH4) {


            cantidadCod4ResOp1 = canCod4 - unidadesElaboradaop;
          }

          if (opera1 == codH5) {

            cantidadCod5ResOp1 = canCod5 - unidadesElaboradaop;
          }

          if (opera1 == codH6) {

            cantidadCod6ResOp1 = canCod6 - unidadesElaboradaop;
          }
          if (opera1 == codH7) {


            cantidadCod7ResOp1 = canCod7 - unidadesElaboradaop;
          }

          if (opera1 == codH8) {

            cantidadCod8ResOp1 = canCod8 - unidadesElaboradaop;
          }

          if (opera1 == codH9) {

            cantidadCod9ResOp1 = canCod9 - unidadesElaboradaop;
          }
          if (opera1 == codH10) {

            cantidadCod10ResOp1 = canCod10 - unidadesElaboradaop;
          }


          if (opera1 == codH11) {


            cantidadCod11ResOp1 = canCod11 - unidadesElaboradaop;
          }

          if (opera1 == codH12) {

            cantidadCod12ResOp1 = canCod12 - unidadesElaboradaop;
          }

          if (opera1 == codH13) {

            cantidadCod13ResOp1 = canCod13 - unidadesElaboradaop;
          }
          if (opera1 == codH14) {


            cantidadCod14ResOp1 = canCod14 - unidadesElaboradaop;
          }

          if (opera1 == codH15) {

            cantidadCod15ResOp1 = canCod15 - unidadesElaboradaop;
          }

          if (opera1 == codH16) {

            cantidadCod16ResOp1 = canCod16 - unidadesElaboradaop;
          }
          if (opera1 == codH17) {


            cantidadCod17ResOp1 = canCod17 - unidadesElaboradaop;
          }

          if (opera1 == codH18) {

            cantidadCod18ResOp1 = canCod18 - unidadesElaboradaop;
            //  console.log("opera 1 cod18"+cantidadCod18ResOp1);
          }

          if (opera1 == codH19) {

            cantidadCod19ResOp1 = canCod19 - unidadesElaboradaop;
            console.log("opera 1 cod19 heeeeeeeeeey" + cantidadCod19ResOp1);
          }
          if (opera1 == codH20) {

            cantidadCod20ResOp1 = canCod20 - unidadesElaboradaop;
          }

          if (opera1 == codH21) {


            cantidadCod21ResOp1 = canCod21 - unidadesElaboradaop;
          }

          if (opera1 == codH22) {

            cantidadCod22ResOp1 = canCod22 - unidadesElaboradaop;
          }

          if (opera1 == codH23) {

            cantidadCod23ResOp1 = canCod23 - unidadesElaboradaop;
          }
          if (opera1 == codH24) {


            cantidadCod24ResOp1 = canCod24 - unidadesElaboradaop;
          }

          if (opera1 == codH25) {

            cantidadCod25ResOp1 = canCod25 - unidadesElaboradaop;
          }

          if (opera1 == codH26) {

            cantidadCod26ResOp1 = canCod26 - unidadesElaboradaop;
          }
          if (opera1 == codH27) {


            cantidadCod27ResOp1 = canCod27 - unidadesElaboradaop;
          }

          if (opera1 == codH28) {

            cantidadCod28ResOp1 = canCod28 - unidadesElaboradaop;
          }

          if (opera1 == codH29) {

            cantidadCod29ResOp1 = canCod29 - unidadesElaboradaop;
          }
          if (opera1 == codH30) {

            cantidadCod30ResOp1 = canCod30 - unidadesElaboradaop;
          }

          if (opera1 == codH31) {


            cantidadCod31ResOp1 = canCod31 - unidadesElaboradaop;
          }

          if (opera1 == codH32) {

            cantidadCod32ResOp1 = canCod32 - unidadesElaboradaop;
          }

          if (opera1 == codH33) {

            cantidadCod33ResOp1 = canCod33 - unidadesElaboradaop;
          }
          if (opera1 == codH34) {


            cantidadCod34ResOp1 = canCod34 - unidadesElaboradaop;
          }

          if (opera1 == codH35) {

            cantidadCod35ResOp1 = canCod35 - unidadesElaboradaop;
          }

          if (opera1 == codH36) {

            cantidadCod36ResOp1 = canCod36 - unidadesElaboradaop;
          }
          if (opera1 == codH37) {


            cantidadCod37ResOp1 = canCod37 - unidadesElaboradaop;
          }

          if (opera1 == codH38) {

            cantidadCod38ResOp1 = canCod38 - unidadesElaboradaop;
          }

          if (opera1 == codH39) {

            cantidadCod39ResOp1 = canCod39 - unidadesElaboradaop;
          }
          if (opera1 == codH40) {

            cantidadCod40ResOp1 = canCod40 - unidadesElaboradaop;
          }

          if (opera1 == codH41) {


            cantidadCod41ResOp1 = canCod41 - unidadesElaboradaop;
          }

          if (opera1 == codH42) {

            cantidadCod42ResOp1 = canCod42 - unidadesElaboradaop;
          }

          if (opera1 == codH43) {

            cantidadCod43ResOp1 = canCod43 - unidadesElaboradaop;
          }
          if (opera1 == codH44) {


            cantidadCod44ResOp1 = canCod44 - unidadesElaboradaop;
          }

          if (opera1 == codH45) {

            cantidadCod45ResOp1 = canCod45 - unidadesElaboradaop;
          }

          if (opera1 == codH46) {

            cantidadCod46ResOp1 = canCod46 - unidadesElaboradaop;
          }
          if (opera1 == codH47) {


            cantidadCod47ResOp1 = canCod47 - unidadesElaboradaop;
          }

          if (opera1 == codH48) {

            cantidadCod48ResOp1 = canCod48 - unidadesElaboradaop;
          }

          if (opera1 == codH49) {

            cantidadCod49ResOp1 = canCod49 - unidadesElaboradaop;
          }
          if (opera1 == codH50) {

            cantidadCod50ResOp1 = canCod50 - unidadesElaboradaop;
          }


          //----------------------------------espacio 2---------------------------------------
          if (opera2 == codH1) {

            cantidadCod1ResOp2 = canCod1 - unidadesElaboradaop;
          }

          if (opera2 == codH2) {

            cantidadCod2ResOp2 = canCod2 - unidadesElaboradaop;
          }

          if (opera2 == codH3) {

            cantidadCod3ResOp2 = canCod3 - unidadesElaboradaop;
          }



          if (opera2 == codH4) {

            cantidadCod4ResOp2 = canCod4 - unidadesElaboradaop;
          }

          if (opera2 == codH5) {

            cantidadCod5ResOp2 = canCod5 - unidadesElaboradaop;
          }

          if (opera2 == codH6) {

            cantidadCod6ResOp2 = canCod6 - unidadesElaboradaop;
          }


          if (opera2 == codH7) {

            cantidadCod7ResOp2 = canCod7 - unidadesElaboradaop;
          }

          if (opera2 == codH8) {

            cantidadCod8ResOp2 = canCod8 - unidadesElaboradaop;
          }

          if (opera2 == codH9) {

            cantidadCod9ResOp2 = canCod9 - unidadesElaboradaop;
          }


          if (opera2 == codH10) {

            cantidadCod10ResOp2 = canCod10 - unidadesElaboradaop;
          }

          if (opera2 == codH11) {

            cantidadCod11ResOp2 = canCod11 - unidadesElaboradaop;
          }

          if (opera2 == codH12) {

            cantidadCod12ResOp2 = canCod12 - unidadesElaboradaop;
          }



          if (opera2 == codH13) {

            cantidadCod13ResOp2 = canCod13 - unidadesElaboradaop;
          }

          if (opera2 == codH14) {

            cantidadCod14ResOp2 = canCod14 - unidadesElaboradaop;
          }

          if (opera2 == codH15) {

            cantidadCod15ResOp2 = canCod15 - unidadesElaboradaop;
          }




          if (opera2 == codH16) {

            cantidadCod16ResOp2 = canCod16 - unidadesElaboradaop;
          }

          if (opera2 == codH17) {

            cantidadCod17ResOp2 = canCod17 - unidadesElaboradaop;
          }

          if (opera2 == codH18) {

            cantidadCod18ResOp2 = canCod18 - unidadesElaboradaop;
            //  console.log("opera 2 cod18"+cantidadCod18ResOp2);

          }





          if (opera2 == codH19) {

            cantidadCod19ResOp2 = canCod19 - unidadesElaboradaop;
            console.log("opera 2 cod19" + cantidadCod19ResOp2);

          }

          if (opera2 == codH20) {

            cantidadCod20ResOp2 = canCod20 - unidadesElaboradaop;
          }

          if (opera2 == codH21) {

            cantidadCod21ResOp2 = canCod21 - unidadesElaboradaop;
          }


          if (opera2 == codH22) {

            cantidadCod22ResOp2 = canCod22 - unidadesElaboradaop;
          }

          if (opera2 == codH23) {

            cantidadCod23ResOp2 = canCod23 - unidadesElaboradaop;
          }

          if (opera2 == codH24) {

            cantidadCod24ResOp2 = canCod24 - unidadesElaboradaop;
          }


          if (opera2 == codH25) {

            cantidadCod25ResOp2 = canCod25 - unidadesElaboradaop;
          }

          if (opera2 == codH26) {

            cantidadCod26ResOp2 = canCod26 - unidadesElaboradaop;
          }

          if (opera2 == codH27) {

            cantidadCod27ResOp2 = canCod27 - unidadesElaboradaop;
          }



          if (opera2 == codH28) {

            cantidadCod28ResOp2 = canCod28 - unidadesElaboradaop;
          }

          if (opera2 == codH29) {

            cantidadCod29ResOp2 = canCod29 - unidadesElaboradaop;
          }

          if (opera2 == codH30) {

            cantidadCod30ResOp2 = canCod30 - unidadesElaboradaop;
          }


          if (opera2 == codH31) {

            cantidadCod31ResOp2 = canCod31 - unidadesElaboradaop;
          }

          if (opera2 == codH32) {

            cantidadCod32ResOp2 = canCod32 - unidadesElaboradaop;
          }

          if (opera2 == codH33) {

            cantidadCod33ResOp2 = canCod33 - unidadesElaboradaop;
          }



          if (opera2 == codH34) {

            cantidadCod34ResOp2 = canCod34 - unidadesElaboradaop;
          }

          if (opera2 == codH35) {

            cantidadCod35ResOp2 = canCod35 - unidadesElaboradaop;
          }

          if (opera2 == codH36) {

            cantidadCod36ResOp2 = canCod36 - unidadesElaboradaop;
          }



          if (opera2 == codH37) {

            cantidadCod37ResOp2 = canCod37 - unidadesElaboradaop;
          }

          if (opera2 == codH38) {

            cantidadCod38ResOp2 = canCod38 - unidadesElaboradaop;
          }

          if (opera2 == codH39) {

            cantidadCod39ResOp2 = canCod39 - unidadesElaboradaop;
          }


          if (opera2 == codH40) {

            cantidadCod40ResOp2 = canCod40 - unidadesElaboradaop;
          }

          if (opera2 == codH41) {

            cantidadCod41ResOp2 = canCod41 - unidadesElaboradaop;
          }

          if (opera2 == codH42) {

            cantidadCod42ResOp2 = canCod42 - unidadesElaboradaop;
          }


          if (opera2 == codH43) {

            cantidadCod43ResOp2 = canCod43 - unidadesElaboradaop;
          }

          if (opera2 == codH44) {

            cantidadCod44ResOp2 = canCod44 - unidadesElaboradaop;
          }

          if (opera2 == codH45) {

            cantidadCod45ResOp2 = canCod45 - unidadesElaboradaop;
          }




          if (opera2 == codH46) {

            cantidadCod46ResOp2 = canCod46 - unidadesElaboradaop;
          }

          if (opera2 == codH47) {

            cantidadCod47ResOp2 = canCod47 - unidadesElaboradaop;
          }

          if (opera2 == codH48) {

            cantidadCod48ResOp2 = canCod48 - unidadesElaboradaop;
          }



          if (opera2 == codH49) {

            cantidadCod49ResOp2 = canCod49 - unidadesElaboradaop;
          }

          if (opera2 == codH50) {

            cantidadCod50ResOp2 = canCod50 - unidadesElaboradaop;
          }


          //-------------------------------------espacio 3-----------------------------------------

          if (opera3 == codH1) {

            cantidadCod1ResOp3 = canCod1 - unidadesElaboradaop;
          }

          if (opera3 == codH2) {

            cantidadCod2ResOp3 = canCod2 - unidadesElaboradaop;
          }

          if (opera3 == codH3) {

            cantidadCod3ResOp3 = canCod3 - unidadesElaboradaop;
          }
          if (opera3 == codH4) {

            cantidadCod4ResOp3 = canCod4 - unidadesElaboradaop;
          }

          if (opera3 == codH5) {

            cantidadCod5ResOp3 = canCod5 - unidadesElaboradaop;
          }

          if (opera3 == codH6) {

            cantidadCod6ResOp3 = canCod6 - unidadesElaboradaop;
          }
          if (opera3 == codH7) {

            cantidadCod7ResOp3 = canCod7 - unidadesElaboradaop;
          }

          if (opera3 == codH8) {

            cantidadCod8ResOp3 = canCod8 - unidadesElaboradaop;
          }

          if (opera3 == codH9) {

            cantidadCod9ResOp3 = canCod9 - unidadesElaboradaop;
          }
          if (opera3 == codH10) {

            cantidadCod10ResOp3 = canCod10 - unidadesElaboradaop;
          }



          if (opera3 == codH11) {

            cantidadCod11ResOp3 = canCod11 - unidadesElaboradaop;
          }

          if (opera3 == codH12) {

            cantidadCod12ResOp3 = canCod12 - unidadesElaboradaop;
          }

          if (opera3 == codH13) {

            cantidadCod13ResOp3 = canCod13 - unidadesElaboradaop;
          }
          if (opera3 == codH14) {

            cantidadCod14ResOp3 = canCod14 - unidadesElaboradaop;
          }

          if (opera3 == codH15) {

            cantidadCod15ResOp3 = canCod15 - unidadesElaboradaop;
          }

          if (opera3 == codH16) {

            cantidadCod16ResOp3 = canCod16 - unidadesElaboradaop;
          }
          if (opera3 == codH17) {

            cantidadCod17ResOp3 = canCod17 - unidadesElaboradaop;
          }

          if (opera3 == codH18) {

            cantidadCod18ResOp3 = canCod18 - unidadesElaboradaop;
            //  console.log("op3 cod18: "+cantidadCod18ResOp3);
          }

          if (opera3 == codH19) {

            cantidadCod19ResOp3 = canCod19 - unidadesElaboradaop;
            console.log("opera 3 cod19" + cantidadCod19ResOp3);

          }
          if (opera3 == codH20) {

            cantidadCod20ResOp3 = canCod20 - unidadesElaboradaop;
          }


          if (opera3 == codH21) {

            cantidadCod21ResOp3 = canCod21 - unidadesElaboradaop;
          }

          if (opera3 == codH22) {

            cantidadCod22ResOp3 = canCod22 - unidadesElaboradaop;
          }

          if (opera3 == codH23) {

            cantidadCod23ResOp3 = canCod23 - unidadesElaboradaop;
          }
          if (opera3 == codH24) {

            cantidadCod24ResOp3 = canCod24 - unidadesElaboradaop;
          }

          if (opera3 == codH25) {

            cantidadCod25ResOp3 = canCod25 - unidadesElaboradaop;
          }

          if (opera3 == codH26) {

            cantidadCod26ResOp3 = canCod26 - unidadesElaboradaop;
          }
          if (opera3 == codH27) {

            cantidadCod27ResOp3 = canCod27 - unidadesElaboradaop;
          }

          if (opera3 == codH28) {

            cantidadCod28ResOp3 = canCod28 - unidadesElaboradaop;
          }

          if (opera3 == codH29) {

            cantidadCod29ResOp3 = canCod29 - unidadesElaboradaop;
          }
          if (opera3 == codH30) {

            cantidadCod30ResOp3 = canCod30 - unidadesElaboradaop;
          }


          if (opera3 == codH31) {

            cantidadCod31ResOp3 = canCod31 - unidadesElaboradaop;
          }

          if (opera3 == codH32) {

            cantidadCod32ResOp3 = canCod32 - unidadesElaboradaop;
          }

          if (opera3 == codH33) {

            cantidadCod33ResOp3 = canCod33 - unidadesElaboradaop;
          }
          if (opera3 == codH34) {

            cantidadCod34ResOp3 = canCod34 - unidadesElaboradaop;
          }

          if (opera3 == codH35) {

            cantidadCod35ResOp3 = canCod35 - unidadesElaboradaop;
          }

          if (opera3 == codH36) {

            cantidadCod36ResOp3 = canCod36 - unidadesElaboradaop;
          }
          if (opera3 == codH37) {

            cantidadCod37ResOp3 = canCod37 - unidadesElaboradaop;
          }

          if (opera3 == codH38) {

            cantidadCod38ResOp3 = canCod38 - unidadesElaboradaop;
          }

          if (opera3 == codH39) {

            cantidadCod39ResOp3 = canCod39 - unidadesElaboradaop;
          }
          if (opera3 == codH40) {

            cantidadCod40ResOp3 = canCod40 - unidadesElaboradaop;
          }


          if (opera3 == codH41) {

            cantidadCod41ResOp3 = canCod41 - unidadesElaboradaop;
          }

          if (opera3 == codH42) {

            cantidadCod42ResOp3 = canCod42 - unidadesElaboradaop;
          }

          if (opera3 == codH43) {

            cantidadCod43ResOp3 = canCod43 - unidadesElaboradaop;
          }
          if (opera3 == codH44) {

            cantidadCod44ResOp3 = canCod44 - unidadesElaboradaop;
          }

          if (opera3 == codH45) {

            cantidadCod45ResOp3 = canCod45 - unidadesElaboradaop;
          }

          if (opera3 == codH46) {

            cantidadCod46ResOp3 = canCod46 - unidadesElaboradaop;
          }
          if (opera3 == codH47) {

            cantidadCod47ResOp3 = canCod47 - unidadesElaboradaop;
          }

          if (opera3 == codH48) {

            cantidadCod48ResOp3 = canCod48 - unidadesElaboradaop;
          }

          if (opera3 == codH49) {

            cantidadCod49ResOp3 = canCod49 - unidadesElaboradaop;
          }
          if (opera3 == codH50) {

            cantidadCod50ResOp3 = canCod50 - unidadesElaboradaop;
          }

          //-----------------------------4-------------------------------------------
          if (opera4 == codH1) {

            cantidadCod1ResOp4 = canCod1 - unidadesElaboradaop;
          }

          if (opera4 == codH2) {

            cantidadCod2ResOp4 = canCod2 - unidadesElaboradaop;
          }

          if (opera4 == codH3) {

            cantidadCod3ResOp4 = canCod3 - unidadesElaboradaop;
          }



          if (opera4 == codH4) {

            cantidadCod4ResOp4 = canCod4 - unidadesElaboradaop;
          }

          if (opera4 == codH5) {

            cantidadCod5ResOp4 = canCod5 - unidadesElaboradaop;
          }

          if (opera4 == codH6) {

            cantidadCod6ResOp4 = canCod6 - unidadesElaboradaop;
          }







          if (opera4 == codH7) {

            cantidadCod7ResOp4 = canCod7 - unidadesElaboradaop;
          }

          if (opera4 == codH8) {

            cantidadCod8ResOp4 = canCod8 - unidadesElaboradaop;
          }

          if (opera4 == codH9) {

            cantidadCod9ResOp4 = canCod9 - unidadesElaboradaop;
          }


          if (opera4 == codH10) {

            cantidadCod10ResOp4 = canCod10 - unidadesElaboradaop;
          }

          if (opera4 == codH11) {

            cantidadCod11ResOp4 = canCod11 - unidadesElaboradaop;
          }

          if (opera4 == codH12) {

            cantidadCod12ResOp4 = canCod12 - unidadesElaboradaop;
          }



          if (opera4 == codH13) {

            cantidadCod13ResOp4 = canCod13 - unidadesElaboradaop;
          }

          if (opera4 == codH14) {

            cantidadCod14ResOp4 = canCod14 - unidadesElaboradaop;
          }

          if (opera4 == codH15) {

            cantidadCod15ResOp4 = canCod15 - unidadesElaboradaop;
          }




          if (opera4 == codH16) {

            cantidadCod16ResOp4 = canCod16 - unidadesElaboradaop;
          }

          if (opera4 == codH17) {

            cantidadCod17ResOp4 = canCod17 - unidadesElaboradaop;
          }

          if (opera4 == codH18) {

            cantidadCod18ResOp4 = canCod18 - unidadesElaboradaop;
            // console.log("op3 cod18: "+cantidadCod18ResOp4);

          }





          if (opera4 == codH19) {

            cantidadCod19ResOp4 = canCod19 - unidadesElaboradaop;
            console.log("opera 4 cod19" + cantidadCod19ResOp4);

          }

          if (opera4 == codH20) {

            cantidadCod20ResOp4 = canCod20 - unidadesElaboradaop;
          }

          if (opera4 == codH21) {

            cantidadCod21ResOp4 = canCod21 - unidadesElaboradaop;
          }


          if (opera4 == codH22) {

            cantidadCod22ResOp4 = canCod22 - unidadesElaboradaop;
          }

          if (opera4 == codH23) {

            cantidadCod23ResOp4 = canCod23 - unidadesElaboradaop;
          }

          if (opera4 == codH24) {

            cantidadCod24ResOp4 = canCod24 - unidadesElaboradaop;
          }


          if (opera4 == codH25) {

            cantidadCod25ResOp4 = canCod25 - unidadesElaboradaop;
          }

          if (opera4 == codH26) {

            cantidadCod26ResOp4 = canCod26 - unidadesElaboradaop;
          }

          if (opera4 == codH27) {

            cantidadCod27ResOp4 = canCod27 - unidadesElaboradaop;
          }



          if (opera4 == codH28) {

            cantidadCod28ResOp4 = canCod28 - unidadesElaboradaop;
          }

          if (opera4 == codH29) {

            cantidadCod29ResOp4 = canCod29 - unidadesElaboradaop;
          }

          if (opera4 == codH30) {

            cantidadCod30ResOp4 = canCod30 - unidadesElaboradaop;
          }


          if (opera4 == codH31) {

            cantidadCod31ResOp4 = canCod31 - unidadesElaboradaop;
          }

          if (opera4 == codH32) {

            cantidadCod32ResOp4 = canCod32 - unidadesElaboradaop;
          }

          if (opera4 == codH33) {

            cantidadCod33ResOp4 = canCod33 - unidadesElaboradaop;
          }



          if (opera4 == codH34) {

            cantidadCod34ResOp4 = canCod34 - unidadesElaboradaop;
          }

          if (opera4 == codH35) {

            cantidadCod35ResOp4 = canCod35 - unidadesElaboradaop;
          }

          if (opera4 == codH36) {

            cantidadCod36ResOp4 = canCod36 - unidadesElaboradaop;
          }



          if (opera4 == codH37) {

            cantidadCod37ResOp4 = canCod37 - unidadesElaboradaop;
          }

          if (opera4 == codH38) {

            cantidadCod38ResOp4 = canCod38 - unidadesElaboradaop;
          }

          if (opera4 == codH39) {

            cantidadCod39ResOp4 = canCod39 - unidadesElaboradaop;
          }


          if (opera4 == codH40) {

            cantidadCod40ResOp4 = canCod40 - unidadesElaboradaop;
          }

          if (opera4 == codH41) {

            cantidadCod41ResOp4 = canCod41 - unidadesElaboradaop;
          }

          if (opera4 == codH42) {

            cantidadCod42ResOp4 = canCod42 - unidadesElaboradaop;
          }


          if (opera4 == codH43) {

            cantidadCod43ResOp4 = canCod43 - unidadesElaboradaop;
          }

          if (opera4 == codH44) {

            cantidadCod44ResOp4 = canCod44 - unidadesElaboradaop;
          }

          if (opera4 == codH45) {

            cantidadCod45ResOp4 = canCod45 - unidadesElaboradaop;
          }




          if (opera4 == codH46) {

            cantidadCod46ResOp4 = canCod46 - unidadesElaboradaop;
          }

          if (opera4 == codH47) {

            cantidadCod47ResOp4 = canCod47 - unidadesElaboradaop;
          }

          if (opera4 == codH48) {

            cantidadCod48ResOp4 = canCod48 - unidadesElaboradaop;
          }



          if (opera4 == codH49) {

            cantidadCod49ResOp4 = canCod49 - unidadesElaboradaop;
          }

          if (opera4 == codH50) {

            cantidadCod50ResOp4 = canCod50 - unidadesElaboradaop;
          }

          //------------------------------------ espacio 5-------------------------------------------------



          if (opera5 == codH1) {

            cantidadCod1ResOp5 = canCod1 - unidadesElaboradaop;
          }

          if (opera5 == codH2) {

            cantidadCod2ResOp5 = canCod2 - unidadesElaboradaop;
          }

          if (opera5 == codH3) {

            cantidadCod3ResOp5 = canCod3 - unidadesElaboradaop;
          }



          if (opera5 == codH4) {

            cantidadCod4ResOp5 = canCod4 - unidadesElaboradaop;
          }

          if (opera5 == codH5) {

            cantidadCod5ResOp5 = canCod5 - unidadesElaboradaop;
          }

          if (opera5 == codH6) {

            cantidadCod6ResOp5 = canCod6 - unidadesElaboradaop;
          }







          if (opera5 == codH7) {

            cantidadCod7ResOp5 = canCod7 - unidadesElaboradaop;
          }

          if (opera5 == codH8) {

            cantidadCod8ResOp5 = canCod8 - unidadesElaboradaop;
          }

          if (opera5 == codH9) {

            cantidadCod9ResOp5 = canCod9 - unidadesElaboradaop;
          }


          if (opera5 == codH10) {

            cantidadCod10ResOp5 = canCod10 - unidadesElaboradaop;
          }

          if (opera5 == codH11) {

            cantidadCod11ResOp5 = canCod11 - unidadesElaboradaop;
          }

          if (opera5 == codH12) {

            cantidadCod12ResOp5 = canCod12 - unidadesElaboradaop;
          }



          if (opera5 == codH13) {

            cantidadCod13ResOp5 = canCod13 - unidadesElaboradaop;
          }

          if (opera5 == codH14) {

            cantidadCod14ResOp5 = canCod14 - unidadesElaboradaop;
          }

          if (opera5 == codH15) {

            cantidadCod15ResOp5 = canCod15 - unidadesElaboradaop;
          }




          if (opera5 == codH16) {

            cantidadCod16ResOp5 = canCod16 - unidadesElaboradaop;
          }

          if (opera5 == codH17) {

            cantidadCod17ResOp5 = canCod17 - unidadesElaboradaop;
          }

          if (opera5 == codH18) {

            cantidadCod18ResOp5 = canCod18 - unidadesElaboradaop;
            //  console.log("op3 cod18: "+cantidadCod18ResOp5);

          }





          if (opera5 == codH19) {

            cantidadCod19ResOp5 = canCod19 - unidadesElaboradaop;
            console.log("opera 5 cod19" + cantidadCod19ResOp5);

          }

          if (opera5 == codH20) {

            cantidadCod20ResOp5 = canCod20 - unidadesElaboradaop;
          }

          if (opera5 == codH21) {

            cantidadCod21ResOp5 = canCod21 - unidadesElaboradaop;
          }


          if (opera5 == codH22) {

            cantidadCod22ResOp5 = canCod22 - unidadesElaboradaop;
          }

          if (opera5 == codH23) {

            cantidadCod23ResOp5 = canCod23 - unidadesElaboradaop;
          }

          if (opera5 == codH24) {

            cantidadCod24ResOp5 = canCod24 - unidadesElaboradaop;
          }


          if (opera5 == codH25) {

            cantidadCod25ResOp5 = canCod25 - unidadesElaboradaop;
          }

          if (opera5 == codH26) {

            cantidadCod26ResOp5 = canCod26 - unidadesElaboradaop;
          }

          if (opera5 == codH27) {

            cantidadCod27ResOp5 = canCod27 - unidadesElaboradaop;
          }



          if (opera5 == codH28) {

            cantidadCod28ResOp5 = canCod28 - unidadesElaboradaop;
          }

          if (opera5 == codH29) {

            cantidadCod29ResOp5 = canCod29 - unidadesElaboradaop;
          }

          if (opera5 == codH30) {

            cantidadCod30ResOp5 = canCod30 - unidadesElaboradaop;
          }


          if (opera5 == codH31) {

            cantidadCod31ResOp5 = canCod31 - unidadesElaboradaop;
          }

          if (opera5 == codH32) {

            cantidadCod32ResOp5 = canCod32 - unidadesElaboradaop;
          }

          if (opera5 == codH33) {

            cantidadCod33ResOp5 = canCod33 - unidadesElaboradaop;
          }



          if (opera5 == codH34) {

            cantidadCod34ResOp5 = canCod34 - unidadesElaboradaop;
          }

          if (opera5 == codH35) {

            cantidadCod35ResOp5 = canCod35 - unidadesElaboradaop;
          }

          if (opera5 == codH36) {

            cantidadCod36ResOp5 = canCod36 - unidadesElaboradaop;
          }



          if (opera5 == codH37) {

            cantidadCod37ResOp5 = canCod37 - unidadesElaboradaop;
          }

          if (opera5 == codH38) {

            cantidadCod38ResOp5 = canCod38 - unidadesElaboradaop;
          }

          if (opera5 == codH39) {

            cantidadCod39ResOp5 = canCod39 - unidadesElaboradaop;
          }


          if (opera5 == codH40) {

            cantidadCod40ResOp5 = canCod40 - unidadesElaboradaop;
          }

          if (opera5 == codH41) {

            cantidadCod41ResOp5 = canCod41 - unidadesElaboradaop;
          }

          if (opera5 == codH42) {

            cantidadCod42ResOp5 = canCod42 - unidadesElaboradaop;
          }


          if (opera5 == codH43) {

            cantidadCod43ResOp5 = canCod43 - unidadesElaboradaop;
          }

          if (opera5 == codH44) {

            cantidadCod44ResOp5 = canCod44 - unidadesElaboradaop;
          }

          if (opera5 == codH45) {

            cantidadCod45ResOp5 = canCod45 - unidadesElaboradaop;
          }




          if (opera5 == codH46) {

            cantidadCod46ResOp5 = canCod46 - unidadesElaboradaop;
          }

          if (opera5 == codH47) {

            cantidadCod47ResOp5 = canCod47 - unidadesElaboradaop;
          }

          if (opera5 == codH48) {

            cantidadCod48ResOp5 = canCod48 - unidadesElaboradaop;
          }



          if (opera5 == codH49) {

            cantidadCod49ResOp5 = canCod49 - unidadesElaboradaop;
          }

          if (opera5 == codH50) {

            cantidadCod50ResOp5 = canCod50 - unidadesElaboradaop;
          }

          //------------------------------------ espacio 6-------------------------------------------------



          if (opera6 == codH1) {

            cantidadCod1ResOp6 = canCod1 - unidadesElaboradaop;
          }

          if (opera6 == codH2) {

            cantidadCod2ResOp6 = canCod2 - unidadesElaboradaop;
          }

          if (opera6 == codH3) {

            cantidadCod3ResOp6 = canCod3 - unidadesElaboradaop;
          }



          if (opera6 == codH4) {

            cantidadCod4ResOp6 = canCod4 - unidadesElaboradaop;
          }

          if (opera6 == codH5) {

            cantidadCod5ResOp6 = canCod5 - unidadesElaboradaop;
          }

          if (opera6 == codH6) {

            cantidadCod6ResOp6 = canCod6 - unidadesElaboradaop;
          }







          if (opera6 == codH7) {

            cantidadCod7ResOp6 = canCod7 - unidadesElaboradaop;
          }

          if (opera6 == codH8) {

            cantidadCod8ResOp6 = canCod8 - unidadesElaboradaop;
          }

          if (opera6 == codH9) {

            cantidadCod9ResOp6 = canCod9 - unidadesElaboradaop;
          }


          if (opera6 == codH10) {

            cantidadCod10ResOp6 = canCod10 - unidadesElaboradaop;
          }

          if (opera6 == codH11) {

            cantidadCod11ResOp6 = canCod11 - unidadesElaboradaop;
          }

          if (opera6 == codH12) {

            cantidadCod12ResOp6 = canCod12 - unidadesElaboradaop;
          }



          if (opera6 == codH13) {

            cantidadCod13ResOp6 = canCod13 - unidadesElaboradaop;
          }

          if (opera6 == codH14) {

            cantidadCod14ResOp6 = canCod14 - unidadesElaboradaop;
          }

          if (opera6 == codH15) {

            cantidadCod15ResOp6 = canCod15 - unidadesElaboradaop;
          }




          if (opera6 == codH16) {

            cantidadCod16ResOp6 = canCod16 - unidadesElaboradaop;
          }

          if (opera6 == codH17) {

            cantidadCod17ResOp6 = canCod17 - unidadesElaboradaop;
          }

          if (opera6 == codH18) {

            cantidadCod18ResOp6 = canCod18 - unidadesElaboradaop;
            //  console.log("op6 cod18: "+cantidadCod18ResOp6);

          }





          if (opera6 == codH19) {

            cantidadCod19ResOp6 = canCod19 - unidadesElaboradaop;
            console.log("opera 6 cod19" + cantidadCod19ResOp6);

          }

          if (opera6 == codH20) {

            cantidadCod20ResOp6 = canCod20 - unidadesElaboradaop;
          }

          if (opera6 == codH21) {

            cantidadCod21ResOp6 = canCod21 - unidadesElaboradaop;
          }


          if (opera6 == codH22) {

            cantidadCod22ResOp6 = canCod22 - unidadesElaboradaop;
          }

          if (opera6 == codH23) {

            cantidadCod23ResOp6 = canCod23 - unidadesElaboradaop;
          }

          if (opera6 == codH24) {

            cantidadCod24ResOp6 = canCod24 - unidadesElaboradaop;
          }


          if (opera6 == codH25) {

            cantidadCod25ResOp6 = canCod25 - unidadesElaboradaop;
          }

          if (opera6 == codH26) {

            cantidadCod26ResOp6 = canCod26 - unidadesElaboradaop;
          }

          if (opera6 == codH27) {

            cantidadCod27ResOp6 = canCod27 - unidadesElaboradaop;
          }



          if (opera6 == codH28) {

            cantidadCod28ResOp6 = canCod28 - unidadesElaboradaop;
          }

          if (opera6 == codH29) {

            cantidadCod29ResOp6 = canCod29 - unidadesElaboradaop;
          }

          if (opera6 == codH30) {

            cantidadCod30ResOp6 = canCod30 - unidadesElaboradaop;
          }


          if (opera6 == codH31) {

            cantidadCod31ResOp6 = canCod31 - unidadesElaboradaop;
          }

          if (opera6 == codH32) {

            cantidadCod32ResOp6 = canCod32 - unidadesElaboradaop;
          }

          if (opera6 == codH33) {

            cantidadCod33ResOp6 = canCod33 - unidadesElaboradaop;
          }



          if (opera6 == codH34) {

            cantidadCod34ResOp6 = canCod34 - unidadesElaboradaop;
          }

          if (opera6 == codH35) {

            cantidadCod35ResOp6 = canCod35 - unidadesElaboradaop;
          }

          if (opera6 == codH36) {

            cantidadCod36ResOp6 = canCod36 - unidadesElaboradaop;
          }



          if (opera6 == codH37) {

            cantidadCod37ResOp6 = canCod37 - unidadesElaboradaop;
          }

          if (opera6 == codH38) {

            cantidadCod38ResOp6 = canCod38 - unidadesElaboradaop;
          }

          if (opera6 == codH39) {

            cantidadCod39ResOp6 = canCod39 - unidadesElaboradaop;
          }


          if (opera6 == codH40) {

            cantidadCod40ResOp6 = canCod40 - unidadesElaboradaop;
          }

          if (opera6 == codH41) {

            cantidadCod41ResOp6 = canCod41 - unidadesElaboradaop;
          }

          if (opera6 == codH42) {

            cantidadCod42ResOp6 = canCod42 - unidadesElaboradaop;
          }


          if (opera6 == codH43) {

            cantidadCod43ResOp6 = canCod43 - unidadesElaboradaop;
          }

          if (opera6 == codH44) {

            cantidadCod44ResOp6 = canCod44 - unidadesElaboradaop;
          }

          if (opera6 == codH45) {

            cantidadCod45ResOp6 = canCod45 - unidadesElaboradaop;
          }




          if (opera6 == codH46) {

            cantidadCod46ResOp6 = canCod46 - unidadesElaboradaop;
          }

          if (opera6 == codH47) {

            cantidadCod47ResOp6 = canCod47 - unidadesElaboradaop;
          }

          if (opera6 == codH48) {

            cantidadCod48ResOp6 = canCod48 - unidadesElaboradaop;
          }



          if (opera6 == codH49) {

            cantidadCod49ResOp6 = canCod49 - unidadesElaboradaop;
          }

          if (opera6 == codH50) {

            cantidadCod50ResOp6 = canCod50 - unidadesElaboradaop;
          }

          //-------------------------------------espacio 7---------------------------------
          if (opera7 == codH1) {

            cantidadCod1ResOp7 = canCod1 - unidadesElaboradaop;
          }

          if (opera7 == codH2) {

            cantidadCod2ResOp7 = canCod2 - unidadesElaboradaop;
          }

          if (opera7 == codH3) {

            cantidadCod3ResOp7 = canCod3 - unidadesElaboradaop;
          }
          if (opera7 == codH4) {

            cantidadCod4ResOp7 = canCod4 - unidadesElaboradaop;
          }

          if (opera7 == codH5) {

            cantidadCod5ResOp7 = canCod5 - unidadesElaboradaop;
          }

          if (opera7 == codH6) {

            cantidadCod6ResOp7 = canCod6 - unidadesElaboradaop;
          }
          if (opera7 == codH7) {

            cantidadCod7ResOp7 = canCod7 - unidadesElaboradaop;
          }

          if (opera7 == codH8) {

            cantidadCod8ResOp7 = canCod8 - unidadesElaboradaop;
          }

          if (opera7 == codH9) {

            cantidadCod9ResOp7 = canCod9 - unidadesElaboradaop;
          }
          if (opera7 == codH10) {

            cantidadCod10ResOp7 = canCod10 - unidadesElaboradaop;
          }



          if (opera7 == codH11) {

            cantidadCod11ResOp7 = canCod11 - unidadesElaboradaop;
          }

          if (opera7 == codH12) {

            cantidadCod12ResOp7 = canCod12 - unidadesElaboradaop;
          }

          if (opera7 == codH13) {

            cantidadCod13ResOp7 = canCod13 - unidadesElaboradaop;
          }
          if (opera7 == codH14) {

            cantidadCod14ResOp7 = canCod14 - unidadesElaboradaop;
          }

          if (opera7 == codH15) {

            cantidadCod15ResOp7 = canCod15 - unidadesElaboradaop;
          }

          if (opera7 == codH16) {

            cantidadCod16ResOp7 = canCod16 - unidadesElaboradaop;
          }
          if (opera7 == codH17) {

            cantidadCod17ResOp7 = canCod17 - unidadesElaboradaop;
          }

          if (opera7 == codH18) {

            cantidadCod18ResOp7 = canCod18 - unidadesElaboradaop;
            // console.log("op7 cod18: "+cantidadCod18ResOp7);

          }

          if (opera7 == codH19) {

            cantidadCod19ResOp7 = canCod19 - unidadesElaboradaop;
            console.log("opera 7 cod19" + cantidadCod19ResOp7);

          }
          if (opera7 == codH20) {

            cantidadCod20ResOp7 = canCod20 - unidadesElaboradaop;
          }


          if (opera7 == codH21) {

            cantidadCod21ResOp7 = canCod21 - unidadesElaboradaop;
          }

          if (opera7 == codH22) {

            cantidadCod22ResOp7 = canCod22 - unidadesElaboradaop;
          }

          if (opera7 == codH23) {

            cantidadCod23ResOp7 = canCod23 - unidadesElaboradaop;
          }
          if (opera7 == codH24) {

            cantidadCod24ResOp7 = canCod24 - unidadesElaboradaop;
          }

          if (opera7 == codH25) {

            cantidadCod25ResOp7 = canCod25 - unidadesElaboradaop;
          }

          if (opera7 == codH26) {

            cantidadCod26ResOp7 = canCod26 - unidadesElaboradaop;
          }
          if (opera7 == codH27) {

            cantidadCod27ResOp7 = canCod27 - unidadesElaboradaop;
          }

          if (opera7 == codH28) {

            cantidadCod28ResOp7 = canCod28 - unidadesElaboradaop;
          }

          if (opera7 == codH29) {

            cantidadCod29ResOp7 = canCod29 - unidadesElaboradaop;
          }
          if (opera7 == codH30) {

            cantidadCod30ResOp7 = canCod30 - unidadesElaboradaop;
          }


          if (opera7 == codH31) {

            cantidadCod31ResOp7 = canCod31 - unidadesElaboradaop;
          }

          if (opera7 == codH32) {

            cantidadCod32ResOp7 = canCod32 - unidadesElaboradaop;
          }

          if (opera7 == codH33) {

            cantidadCod33ResOp7 = canCod33 - unidadesElaboradaop;
          }
          if (opera7 == codH34) {

            cantidadCod34ResOp7 = canCod34 - unidadesElaboradaop;
          }

          if (opera7 == codH35) {

            cantidadCod35ResOp7 = canCod35 - unidadesElaboradaop;
          }

          if (opera7 == codH36) {

            cantidadCod36ResOp7 = canCod36 - unidadesElaboradaop;
          }
          if (opera7 == codH37) {

            cantidadCod37ResOp8 = canCod37 - unidadesElaboradaop;
          }

          if (opera7 == codH38) {

            cantidadCod38ResOp7 = canCod38 - unidadesElaboradaop;
          }

          if (opera7 == codH39) {

            cantidadCod39ResOp7 = canCod39 - unidadesElaboradaop;
          }
          if (opera7 == codH40) {

            cantidadCod40ResOp7 = canCod40 - unidadesElaboradaop;
          }


          if (opera7 == codH41) {

            cantidadCod41ResOp7 = canCod41 - unidadesElaboradaop;
          }

          if (opera7 == codH42) {

            cantidadCod42ResOp7 = canCod42 - unidadesElaboradaop;
          }

          if (opera7 == codH43) {

            cantidadCod43ResOp7 = canCod43 - unidadesElaboradaop;
          }
          if (opera7 == codH44) {

            cantidadCod44ResOp7 = canCod44 - unidadesElaboradaop;
          }

          if (opera7 == codH45) {

            cantidadCod45ResOp7 = canCod45 - unidadesElaboradaop;
          }

          if (opera7 == codH46) {

            cantidadCod46ResOp7 = canCod46 - unidadesElaboradaop;
          }
          if (opera7 == codH47) {

            cantidadCod47ResOp7 = canCod47 - unidadesElaboradaop;
          }

          if (opera7 == codH48) {

            cantidadCod48ResOp7 = canCod48 - unidadesElaboradaop;
          }

          if (opera7 == codH49) {

            cantidadCod49ResOp7 = canCod49 - unidadesElaboradaop;
          }
          if (opera7 == codH50) {

            cantidadCod50ResOp7 = canCod50 - unidadesElaboradaop;
          }

          //---------------------------------espacio 8----------------------------------
          if (opera8 == codH1) {

            cantidadCod1ResOp8 = canCod1 - unidadesElaboradaop;
          }

          if (opera8 == codH2) {

            cantidadCod2ResOp8 = canCod2 - unidadesElaboradaop;
          }

          if (opera8 == codH3) {

            cantidadCod3ResOp8 = canCod3 - unidadesElaboradaop;
          }
          if (opera8 == codH4) {

            cantidadCod4ResOp8 = canCod4 - unidadesElaboradaop;
          }

          if (opera8 == codH5) {

            cantidadCod5ResOp8 = canCod5 - unidadesElaboradaop;
          }

          if (opera8 == codH6) {

            cantidadCod6ResOp8 = canCod6 - unidadesElaboradaop;
          }
          if (opera8 == codH7) {

            cantidadCod7ResOp8 = canCod7 - unidadesElaboradaop;
          }

          if (opera8 == codH8) {

            cantidadCod8ResOp8 = canCod8 - unidadesElaboradaop;
          }

          if (opera8 == codH9) {

            cantidadCod9ResOp8 = canCod9 - unidadesElaboradaop;
          }
          if (opera8 == codH10) {

            cantidadCod10ResOp8 = canCod10 - unidadesElaboradaop;
          }



          if (opera8 == codH11) {

            cantidadCod11ResOp8 = canCod11 - unidadesElaboradaop;
          }

          if (opera8 == codH12) {

            cantidadCod12ResOp8 = canCod12 - unidadesElaboradaop;
          }

          if (opera8 == codH13) {

            cantidadCod13ResOp8 = canCod13 - unidadesElaboradaop;
          }
          if (opera8 == codH14) {

            cantidadCod14ResOp8 = canCod14 - unidadesElaboradaop;
          }

          if (opera8 == codH15) {

            cantidadCod15ResOp8 = canCod15 - unidadesElaboradaop;
          }

          if (opera8 == codH16) {

            cantidadCod16ResOp8 = canCod16 - unidadesElaboradaop;
          }
          if (opera8 == codH17) {

            cantidadCod17ResOp8 = canCod17 - unidadesElaboradaop;
          }

          if (opera8 == codH18) {

            cantidadCod18ResOp8 = canCod18 - unidadesElaboradaop;
            //  console.log("op8 cod18: "+cantidadCod18ResOp8);

          }

          if (opera8 == codH19) {

            cantidadCod19ResOp8 = canCod19 - unidadesElaboradaop;
            console.log("opera 8 cod19" + cantidadCod19ResOp8);

          }
          if (opera8 == codH20) {

            cantidadCod20ResOp8 = canCod20 - unidadesElaboradaop;
          }


          if (opera8 == codH21) {

            cantidadCod21ResOp8 = canCod21 - unidadesElaboradaop;
          }

          if (opera8 == codH22) {

            cantidadCod22ResOp8 = canCod22 - unidadesElaboradaop;
          }

          if (opera8 == codH23) {

            cantidadCod23ResOp8 = canCod23 - unidadesElaboradaop;
          }
          if (opera8 == codH24) {

            cantidadCod24ResOp8 = canCod24 - unidadesElaboradaop;
          }

          if (opera8 == codH25) {

            cantidadCod25ResOp8 = canCod25 - unidadesElaboradaop;
          }

          if (opera8 == codH26) {

            cantidadCod26ResOp8 = canCod26 - unidadesElaboradaop;
          }
          if (opera8 == codH27) {

            cantidadCod27ResOp8 = canCod27 - unidadesElaboradaop;
          }

          if (opera8 == codH28) {

            cantidadCod28ResOp8 = canCod28 - unidadesElaboradaop;
          }

          if (opera8 == codH29) {

            cantidadCod29ResOp8 = canCod29 - unidadesElaboradaop;
          }
          if (opera8 == codH30) {

            cantidadCod30ResOp8 = canCod30 - unidadesElaboradaop;
          }


          if (opera8 == codH31) {

            cantidadCod31ResOp8 = canCod31 - unidadesElaboradaop;
          }

          if (opera8 == codH32) {

            cantidadCod32ResOp8 = canCod32 - unidadesElaboradaop;
          }

          if (opera8 == codH33) {

            cantidadCod33ResOp8 = canCod33 - unidadesElaboradaop;
          }
          if (opera8 == codH34) {

            cantidadCod34ResOp8 = canCod34 - unidadesElaboradaop;
          }

          if (opera8 == codH35) {

            cantidadCod35ResOp8 = canCod35 - unidadesElaboradaop;
          }

          if (opera8 == codH36) {

            cantidadCod36ResOp8 = canCod36 - unidadesElaboradaop;
          }
          if (opera8 == codH37) {

            cantidadCod37ResOp8 = canCod37 - unidadesElaboradaop;
          }

          if (opera8 == codH38) {

            cantidadCod38ResOp8 = canCod38 - unidadesElaboradaop;
          }

          if (opera8 == codH39) {

            cantidadCod39ResOp8 = canCod39 - unidadesElaboradaop;
          }
          if (opera8 == codH40) {

            cantidadCod40ResOp8 = canCod40 - unidadesElaboradaop;
          }


          if (opera8 == codH41) {

            cantidadCod41ResOp8 = canCod41 - unidadesElaboradaop;
          }

          if (opera8 == codH42) {

            cantidadCod42ResOp8 = canCod42 - unidadesElaboradaop;
          }

          if (opera8 == codH43) {

            cantidadCod43ResOp8 = canCod43 - unidadesElaboradaop;
          }
          if (opera8 == codH44) {

            cantidadCod44ResOp8 = canCod44 - unidadesElaboradaop;
          }

          if (opera8 == codH45) {

            cantidadCod45ResOp8 = canCod45 - unidadesElaboradaop;
          }

          if (opera8 == codH46) {

            cantidadCod46ResOp8 = canCod46 - unidadesElaboradaop;
          }
          if (opera8 == codH47) {

            cantidadCod47ResOp8 = canCod47 - unidadesElaboradaop;
          }

          if (opera8 == codH48) {

            cantidadCod48ResOp8 = canCod48 - unidadesElaboradaop;
          }

          if (opera8 == codH49) {

            cantidadCod49ResOp8 = canCod49 - unidadesElaboradaop;
          }
          if (opera8 == codH50) {

            cantidadCod50ResOp8 = canCod50 - unidadesElaboradaop;
          }







          //------------------------------------espacio 9-----------------------------

          if (opera9 == codH1) {

            cantidadCod1ResOp9 = canCod1 - unidadesElaboradaop;
          }

          if (opera9 == codH2) {

            cantidadCod2ResOp9 = canCod2 - unidadesElaboradaop;
          }

          if (opera9 == codH3) {

            cantidadCod3ResOp9 = canCod3 - unidadesElaboradaop;
          }
          if (opera9 == codH4) {

            cantidadCod4ResOp9 = canCod4 - unidadesElaboradaop;
          }

          if (opera9 == codH5) {

            cantidadCod5ResOp9 = canCod5 - unidadesElaboradaop;
          }

          if (opera9 == codH6) {

            cantidadCod6ResOp9 = canCod6 - unidadesElaboradaop;
          }
          if (opera9 == codH7) {

            cantidadCod7ResOp9 = canCod7 - unidadesElaboradaop;
          }

          if (opera9 == codH8) {

            cantidadCod8ResOp9 = canCod8 - unidadesElaboradaop;
          }

          if (opera9 == codH9) {

            cantidadCod9ResOp9 = canCod9 - unidadesElaboradaop;
          }
          if (opera9 == codH10) {

            cantidadCod10ResOp9 = canCod10 - unidadesElaboradaop;
          }



          if (opera9 == codH11) {

            cantidadCod11ResOp9 = canCod11 - unidadesElaboradaop;
          }

          if (opera9 == codH12) {

            cantidadCod12ResOp9 = canCod12 - unidadesElaboradaop;
          }

          if (opera9 == codH13) {

            cantidadCod13ResOp9 = canCod13 - unidadesElaboradaop;
          }
          if (opera9 == codH14) {

            cantidadCod14ResOp9 = canCod14 - unidadesElaboradaop;
          }

          if (opera9 == codH15) {

            cantidadCod15ResOp9 = canCod15 - unidadesElaboradaop;
          }

          if (opera9 == codH16) {

            cantidadCod16ResOp9 = canCod16 - unidadesElaboradaop;
          }
          if (opera9 == codH17) {

            cantidadCod17ResOp9 = canCod17 - unidadesElaboradaop;
          }

          if (opera9 == codH18) {

            cantidadCod18ResOp9 = canCod18 - unidadesElaboradaop;
            //console.log("op9 cod18: "+cantidadCod18ResOp9);

          }

          if (opera9 == codH19) {

            cantidadCod19ResOp9 = canCod19 - unidadesElaboradaop;
            console.log("opera 9 cod19" + cantidadCod19ResOp9);

          }
          if (opera9 == codH20) {

            cantidadCod20ResOp9 = canCod20 - unidadesElaboradaop;
          }


          if (opera9 == codH21) {

            cantidadCod21ResOp9 = canCod21 - unidadesElaboradaop;
          }

          if (opera9 == codH22) {

            cantidadCod22ResOp9 = canCod22 - unidadesElaboradaop;
          }

          if (opera9 == codH23) {

            cantidadCod23ResOp9 = canCod23 - unidadesElaboradaop;
          }
          if (opera9 == codH24) {

            cantidadCod24ResOp9 = canCod24 - unidadesElaboradaop;
          }

          if (opera9 == codH25) {

            cantidadCod25ResOp9 = canCod25 - unidadesElaboradaop;
          }

          if (opera9 == codH26) {

            cantidadCod26ResOp9 = canCod26 - unidadesElaboradaop;
          }
          if (opera9 == codH27) {

            cantidadCod27ResOp9 = canCod27 - unidadesElaboradaop;
          }

          if (opera9 == codH28) {

            cantidadCod28ResOp9 = canCod28 - unidadesElaboradaop;
          }

          if (opera9 == codH29) {

            cantidadCod29ResOp9 = canCod29 - unidadesElaboradaop;
          }
          if (opera9 == codH30) {

            cantidadCod30ResOp9 = canCod30 - unidadesElaboradaop;
          }


          if (opera9 == codH31) {

            cantidadCod31ResOp9 = canCod31 - unidadesElaboradaop;
          }

          if (opera9 == codH32) {

            cantidadCod32ResOp9 = canCod32 - unidadesElaboradaop;
          }

          if (opera9 == codH33) {

            cantidadCod33ResOp9 = canCod33 - unidadesElaboradaop;
          }
          if (opera9 == codH34) {

            cantidadCod34ResOp9 = canCod34 - unidadesElaboradaop;
          }

          if (opera9 == codH35) {

            cantidadCod35ResOp9 = canCod35 - unidadesElaboradaop;
          }

          if (opera9 == codH36) {

            cantidadCod36ResOp9 = canCod36 - unidadesElaboradaop;
          }
          if (opera9 == codH37) {

            cantidadCod37ResOp9 = canCod37 - unidadesElaboradaop;
          }

          if (opera9 == codH38) {

            cantidadCod38ResOp9 = canCod38 - unidadesElaboradaop;
          }

          if (opera9 == codH39) {

            cantidadCod39ResOp9 = canCod39 - unidadesElaboradaop;
          }
          if (opera9 == codH40) {

            cantidadCod40ResOp9 = canCod40 - unidadesElaboradaop;
          }


          if (opera9 == codH41) {

            cantidadCod41ResOp9 = canCod41 - unidadesElaboradaop;
          }

          if (opera9 == codH42) {

            cantidadCod42ResOp9 = canCod42 - unidadesElaboradaop;
          }

          if (opera9 == codH43) {

            cantidadCod43ResOp9 = canCod43 - unidadesElaboradaop;
          }
          if (opera9 == codH44) {

            cantidadCod44ResOp9 = canCod44 - unidadesElaboradaop;
          }

          if (opera9 == codH45) {

            cantidadCod45ResOp9 = canCod45 - unidadesElaboradaop;
          }

          if (opera9 == codH46) {

            cantidadCod46ResOp9 = canCod46 - unidadesElaboradaop;
          }
          if (opera9 == codH47) {

            cantidadCod47ResOp9 = canCod47 - unidadesElaboradaop;
          }

          if (opera9 == codH48) {

            cantidadCod48ResOp9 = canCod48 - unidadesElaboradaop;
          }

          if (opera9 == codH49) {

            cantidadCod49ResOp9 = canCod49 - unidadesElaboradaop;
          }
          if (opera9 == codH50) {

            cantidadCod50ResOp9 = canCod50 - unidadesElaboradaop;
          }



          //----------------------------------espacio 2---------------------------------------

          //------------------------------------ espacio 4-------------------------------------------------






          console.log("cantidad1:" + cantidadCod1ResOp1 + "cantidad2" + cantidadCod1ResOp2 + "cantidad3" + cantidadCod1ResOp3);

          restaGlobalCod1 = Number(cantidadCod1ResOp1 + cantidadCod1ResOp2 + cantidadCod1ResOp3 + cantidadCod1ResOp4 + cantidadCod1ResOp5 + cantidadCod1ResOp6 + cantidadCod1ResOp7 + cantidadCod1ResOp8 + cantidadCod1ResOp9);
          console.log("la suma es 1:" + restaGlobalCod1);
          /*  restaGlobalCod2 = Number(cantidadCod2ResOp1 + cantidadCod2ResOp2 + cantidadCod2ResOp3 +cantidadCod2ResOp4 +cantidadCod2ResOp5 +cantidadCod2ResOp6 +cantidadCod2ResOp7 +cantidadCod2ResOp8 +cantidadCod2ResOp9);
            console.log("la suma es 2:" + restaGlobalCod2);
  
            restaGlobalCod3 = Number(cantidadCod3ResOp1 + cantidadCod3ResOp2 + cantidadCod3ResOp3+ cantidadCod3ResOp4 +cantidadCod3ResOp5+cantidadCod3ResOp6 +cantidadCod3ResOp7 +cantidadCod3ResOp8 +cantidadCod3ResOp9);
            console.log("la suma es 3:" + restaGlobalCod3);
  
            restaGlobalCod4 = Number(cantidadCod4ResOp1 + cantidadCod4ResOp2 + cantidadCod4ResOp3+ cantidadCod4ResOp4 +cantidadCod4ResOp5+cantidadCod4ResOp6 +cantidadCod4ResOp7 +cantidadCod4ResOp8 +cantidadCod4ResOp9);
            console.log("la suma es 4:" + restaGlobalCod4);
  
  
            restaGlobalCod5 = Number(cantidadCod5ResOp1 + cantidadCod5ResOp2 + cantidadCod5ResOp3+ cantidadCod5ResOp4 +cantidadCod5ResOp5+cantidadCod5ResOp6 +cantidadCod5ResOp7 +cantidadCod5ResOp8 +cantidadCod5ResOp9);
            console.log("la suma es 5:" + restaGlobalCod5);
  
  
            restaGlobalCod6 = Number(cantidadCod6ResOp1 + cantidadCod6ResOp2 + cantidadCod6ResOp3+ cantidadCod6ResOp4 +cantidadCod6ResOp5+cantidadCod6ResOp6 +cantidadCod6ResOp7 +cantidadCod6ResOp8 +cantidadCod6ResOp9);
            console.log("la suma es 6:" + restaGlobalCod6);
  
  
            restaGlobalCod7 = Number(cantidadCod7ResOp1 + cantidadCod7ResOp2 + cantidadCod7ResOp3+ cantidadCod7ResOp4 +cantidadCod7ResOp5+cantidadCod7ResOp6 +cantidadCod7ResOp7 +cantidadCod7ResOp8 +cantidadCod7ResOp9);
            console.log("la suma es 7:" + restaGlobalCod7);
  
  
            restaGlobalCod8 = Number(cantidadCod8ResOp1 + cantidadCod8ResOp2 + cantidadCod8ResOp3+ cantidadCod8ResOp4 +cantidadCod8ResOp5+cantidadCod8ResOp6 +cantidadCod8ResOp7 +cantidadCod8ResOp8 +cantidadCod8ResOp9);
            console.log("la suma es 8:" + restaGlobalCod8);
  
  
            restaGlobalCod9 = Number(cantidadCod9ResOp1 + cantidadCod9ResOp2 + cantidadCod9ResOp3+ cantidadCod9ResOp4 +cantidadCod9ResOp5+cantidadCod9ResOp6 +cantidadCod9ResOp7 +cantidadCod9ResOp8 +cantidadCod9ResOp9);
            console.log("la suma es 9:" + restaGlobalCod9);
  
  
            restaGlobalCod10 = Number(cantidadCod10ResOp1 + cantidadCod10ResOp2 + cantidadCod10ResOp3+ cantidadCod10ResOp4 +cantidadCod10ResOp5+cantidadCod10ResOp6 +cantidadCod10ResOp7 +cantidadCod10ResOp8 +cantidadCod10ResOp9);
            console.log("la suma es 10:" + restaGlobalCod10);
  
  
            restaGlobalCod11 = Number(cantidadCod11ResOp1 + cantidadCod11ResOp2 + cantidadCod11ResOp3+ cantidadCod11ResOp4 +cantidadCod11ResOp5+cantidadCod11ResOp6 +cantidadCod11ResOp7 +cantidadCod11ResOp8 +cantidadCod11ResOp9);
            console.log("la suma es 11:" + restaGlobalCod11);
  
  
            restaGlobalCod12 = Number(cantidadCod12ResOp1 + cantidadCod12ResOp2 + cantidadCod12ResOp3+ cantidadCod12ResOp4 +cantidadCod12ResOp5+cantidadCod12ResOp6 +cantidadCod12ResOp7 +cantidadCod12ResOp8 +cantidadCod12ResOp9);
            console.log("la suma es 12:" + restaGlobalCod12);
  
  
            restaGlobalCod13 = Number(cantidadCod13ResOp1 + cantidadCod13ResOp2 + cantidadCod13ResOp3+ cantidadCod13ResOp4 +cantidadCod13ResOp5+cantidadCod13ResOp6 +cantidadCod13ResOp7 +cantidadCod13ResOp8 +cantidadCod13ResOp9);
            console.log("la suma es 13:" + restaGlobalCod13);
  
  
            restaGlobalCod14 = Number(cantidadCod14ResOp1 + cantidadCod14ResOp2 + cantidadCod14ResOp3+ cantidadCod14ResOp4 +cantidadCod14ResOp5+cantidadCod14ResOp6 +cantidadCod14ResOp7 +cantidadCod14ResOp8 +cantidadCod14ResOp9);
            console.log("la suma es 14:" + restaGlobalCod14);
  
  
            restaGlobalCod15 = Number(cantidadCod15ResOp1 + cantidadCod15ResOp2 + cantidadCod15ResOp3+ cantidadCod15ResOp4 +cantidadCod15ResOp5+cantidadCod15ResOp6 +cantidadCod15ResOp7 +cantidadCod15ResOp8 +cantidadCod15ResOp9);
            console.log("la suma es 15:" + restaGlobalCod15);
  
  
            restaGlobalCod16 = Number(cantidadCod16ResOp1 + cantidadCod16ResOp2 + cantidadCod16ResOp3+ cantidadCod16ResOp4 +cantidadCod16ResOp5+cantidadCod16ResOp6 +cantidadCod16ResOp7 +cantidadCod16ResOp8 +cantidadCod16ResOp9);
            console.log("la suma es 16:" + restaGlobalCod16);
  
  
            restaGlobalCod17 = Number(cantidadCod17ResOp1 + cantidadCod17ResOp2 + cantidadCod17ResOp3+ cantidadCod17ResOp4 +cantidadCod17ResOp5+cantidadCod17ResOp6 +cantidadCod17ResOp7 +cantidadCod17ResOp8 +cantidadCod17ResOp9);
            console.log("la suma es 17:" + restaGlobalCod17);
  
  
           restaGlobalCod18 = Number(cantidadCod18ResOp1 + cantidadCod18ResOp2 + cantidadCod18ResOp3+ cantidadCod18ResOp4 +cantidadCod18ResOp5+cantidadCod18ResOp6 +cantidadCod18ResOp7 +cantidadCod18ResOp8 +cantidadCod18ResOp9);
            console.log("la suma es 18:" + restaGlobalCod18);
  
  
            restaGlobalCod19 = Number(cantidadCod19ResOp1 + cantidadCod19ResOp2 + cantidadCod19ResOp3+ cantidadCod19ResOp4 +cantidadCod19ResOp5+cantidadCod19ResOp6 +cantidadCod19ResOp7 +cantidadCod19ResOp8 +cantidadCod19ResOp9);
            console.log("la suma es 19:" + restaGlobalCod19);
  
  
            restaGlobalCod20 = Number(cantidadCod20ResOp1 + cantidadCod20ResOp2 + cantidadCod20ResOp3+ cantidadCod20ResOp4 +cantidadCod20ResOp5+cantidadCod20ResOp6 +cantidadCod20ResOp7 +cantidadCod20ResOp8 +cantidadCod20ResOp9);
            console.log("la suma es 20:" + restaGlobalCod20);
  
  
            restaGlobalCod21 = Number(cantidadCod21ResOp1 + cantidadCod21ResOp2 + cantidadCod21ResOp3+ cantidadCod21ResOp4 +cantidadCod21ResOp5+cantidadCod21ResOp6 +cantidadCod21ResOp7 +cantidadCod21ResOp8 +cantidadCod21ResOp9);
            console.log("la suma es 21:" + restaGlobalCod21);
  
  
            restaGlobalCod22 = Number(cantidadCod22ResOp1 + cantidadCod22ResOp2 + cantidadCod22ResOp3+ cantidadCod22ResOp4 +cantidadCod22ResOp5+cantidadCod22ResOp6 +cantidadCod22ResOp7 +cantidadCod22ResOp8 +cantidadCod22ResOp9);
            console.log("la suma es 22:" + restaGlobalCod22);
  
  
            restaGlobalCod23 = Number(cantidadCod23ResOp1 + cantidadCod23ResOp2 + cantidadCod23ResOp3+ cantidadCod23ResOp4 +cantidadCod23ResOp5+cantidadCod23ResOp6 +cantidadCod23ResOp7 +cantidadCod23ResOp8 +cantidadCod23ResOp9);
            console.log("la suma es 23:" + restaGlobalCod23);
  
  
            restaGlobalCod24 = Number(cantidadCod24ResOp1 + cantidadCod24ResOp2 + cantidadCod24ResOp3+ cantidadCod24ResOp4 +cantidadCod24ResOp5+cantidadCod24ResOp6 +cantidadCod24ResOp7 +cantidadCod24ResOp8 +cantidadCod24ResOp9);
            console.log("la suma es 24:" + restaGlobalCod24);
  
  
            restaGlobalCod25 = Number(cantidadCod25ResOp1 + cantidadCod25ResOp2 + cantidadCod25ResOp3+ cantidadCod25ResOp4 +cantidadCod25ResOp5+cantidadCod25ResOp6 +cantidadCod25ResOp7 +cantidadCod25ResOp8 +cantidadCod25ResOp9);
            console.log("la suma es 25:" + restaGlobalCod25);
  
  
            restaGlobalCod26 = Number(cantidadCod26ResOp1 + cantidadCod26ResOp2 + cantidadCod26ResOp3+ cantidadCod26ResOp4 +cantidadCod26ResOp5+cantidadCod26ResOp6 +cantidadCod26ResOp7 +cantidadCod26ResOp8 +cantidadCod26ResOp9);
            console.log("la suma es 26:" + restaGlobalCod26);
  
  
            restaGlobalCod27 = Number(cantidadCod27ResOp1 + cantidadCod27ResOp2 + cantidadCod27ResOp3+ cantidadCod27ResOp4 +cantidadCod27ResOp5+cantidadCod27ResOp6 +cantidadCod27ResOp7 +cantidadCod27ResOp8 +cantidadCod27ResOp9);
            console.log("la suma es 27:" + restaGlobalCod27);
  
  
            restaGlobalCod28 = Number(cantidadCod28ResOp1 + cantidadCod28ResOp2 + cantidadCod28ResOp3+ cantidadCod28ResOp4 +cantidadCod28ResOp5+cantidadCod28ResOp6 +cantidadCod28ResOp7 +cantidadCod28ResOp8 +cantidadCod28ResOp9);
            console.log("la suma es 28:" + restaGlobalCod28);
  
  
            restaGlobalCod29 = Number(cantidadCod29ResOp1 + cantidadCod29ResOp2 + cantidadCod29ResOp3+ cantidadCod29ResOp4 +cantidadCod29ResOp5+cantidadCod29ResOp6 +cantidadCod29ResOp7 +cantidadCod29ResOp8 +cantidadCod29ResOp9);
            console.log("la suma es 29:" + restaGlobalCod29);
  
  
            restaGlobalCod30 = Number(cantidadCod30ResOp1 + cantidadCod30ResOp2 + cantidadCod30ResOp3+ cantidadCod30ResOp4 +cantidadCod30ResOp5+cantidadCod30ResOp6 +cantidadCod30ResOp7 +cantidadCod30ResOp8 +cantidadCod30ResOp9);
            console.log("la suma es 30:" + restaGlobalCod30);
  
  
            restaGlobalCod31 = Number(cantidadCod31ResOp1 + cantidadCod31ResOp2 + cantidadCod31ResOp3+ cantidadCod31ResOp4 +cantidadCod31ResOp5+cantidadCod31ResOp6 +cantidadCod31ResOp7 +cantidadCod31ResOp8 +cantidadCod31ResOp9);
            console.log("la suma es 31:" + restaGlobalCod31);
  
  
            restaGlobalCod32 = Number(cantidadCod32ResOp1 + cantidadCod32ResOp2 + cantidadCod32ResOp3+ cantidadCod32ResOp4 +cantidadCod32ResOp5+cantidadCod32ResOp6 +cantidadCod32ResOp7 +cantidadCod32ResOp8 +cantidadCod32ResOp9);
            console.log("la suma es 32:" + restaGlobalCod32);
  
  
            restaGlobalCod33 = Number(cantidadCod33ResOp1 + cantidadCod33ResOp2 + cantidadCod33ResOp3+ cantidadCod33ResOp4 +cantidadCod33ResOp5+cantidadCod33ResOp6 +cantidadCod33ResOp7 +cantidadCod33ResOp8 +cantidadCod33ResOp9);
            console.log("la suma es 33:" + restaGlobalCod33);
  
  
            restaGlobalCod34 = Number(cantidadCod34ResOp1 + cantidadCod34ResOp2 + cantidadCod34ResOp3+ cantidadCod34ResOp4 +cantidadCod34ResOp5+cantidadCod34ResOp6 +cantidadCod34ResOp7 +cantidadCod34ResOp8 +cantidadCod34ResOp9);
            console.log("la suma es 34:" + restaGlobalCod34);
  
  
            restaGlobalCod35 = Number(cantidadCod35ResOp1 + cantidadCod35ResOp2 + cantidadCod35ResOp3+ cantidadCod35ResOp4 +cantidadCod35ResOp5+cantidadCod35ResOp6 +cantidadCod35ResOp7 +cantidadCod35ResOp8 +cantidadCod35ResOp9);
            console.log("la suma es 35:" + restaGlobalCod35);
  
  
            restaGlobalCod36 = Number(cantidadCod36ResOp1 + cantidadCod36ResOp2 + cantidadCod36ResOp3+ cantidadCod36ResOp4 +cantidadCod36ResOp5+cantidadCod36ResOp6 +cantidadCod36ResOp7 +cantidadCod36ResOp8 +cantidadCod36ResOp9);
            console.log("la suma es 36:" + restaGlobalCod36);
  
  
            restaGlobalCod37 = Number(cantidadCod37ResOp1 + cantidadCod37ResOp2 + cantidadCod37ResOp3+ cantidadCod37ResOp4 +cantidadCod37ResOp5+cantidadCod37ResOp6 +cantidadCod37ResOp7 +cantidadCod37ResOp8 +cantidadCod37ResOp9);
            console.log("la suma es 37:" + restaGlobalCod37);
  
  
            restaGlobalCod38 = Number(cantidadCod38ResOp1 + cantidadCod38ResOp2 + cantidadCod38ResOp3+ cantidadCod38ResOp4 +cantidadCod38ResOp5+cantidadCod38ResOp6 +cantidadCod38ResOp7 +cantidadCod38ResOp8 +cantidadCod38ResOp9);
            console.log("la suma es 38:" + restaGlobalCod38);
  
  
            restaGlobalCod39 = Number(cantidadCod39ResOp1 + cantidadCod39ResOp2 + cantidadCod39ResOp3+ cantidadCod39ResOp4 +cantidadCod39ResOp5+cantidadCod39ResOp6 +cantidadCod39ResOp7 +cantidadCod39ResOp8 +cantidadCod39ResOp9);
            console.log("la suma es 39:" + restaGlobalCod39);
  
  
            restaGlobalCod40 = Number(cantidadCod40ResOp1 + cantidadCod40ResOp2 + cantidadCod40ResOp3+ cantidadCod40ResOp4 +cantidadCod40ResOp5+cantidadCod40ResOp6 +cantidadCod40ResOp7 +cantidadCod40ResOp8 +cantidadCod40ResOp9);
            console.log("la suma es 40:" + restaGlobalCod40);
  
  
            restaGlobalCod41 = Number(cantidadCod41ResOp1 + cantidadCod41ResOp2 + cantidadCod41ResOp3+ cantidadCod41ResOp4 +cantidadCod41ResOp5+cantidadCod41ResOp6 +cantidadCod41ResOp7 +cantidadCod41ResOp8 +cantidadCod41ResOp9);
            console.log("la suma es 41:" + restaGlobalCod41);
  
  
            restaGlobalCod42 = Number(cantidadCod42ResOp1 + cantidadCod42ResOp2 + cantidadCod42ResOp3+ cantidadCod42ResOp4 +cantidadCod42ResOp5+cantidadCod42ResOp6 +cantidadCod42ResOp7 +cantidadCod42ResOp8 +cantidadCod42ResOp9);
            console.log("la suma es 42:" + restaGlobalCod42);
  
  
            restaGlobalCod43 = Number(cantidadCod43ResOp1 + cantidadCod43ResOp2 + cantidadCod43ResOp3+ cantidadCod43ResOp4 +cantidadCod43ResOp5+cantidadCod43ResOp6 +cantidadCod43ResOp7 +cantidadCod43ResOp8 +cantidadCod43ResOp9);
            console.log("la suma es 43:" + restaGlobalCod43);
  
  
            restaGlobalCod44 = Number(cantidadCod44ResOp1 + cantidadCod44ResOp2 + cantidadCod44ResOp3+ cantidadCod44ResOp4 +cantidadCod44ResOp5+cantidadCod44ResOp6 +cantidadCod44ResOp7 +cantidadCod44ResOp8 +cantidadCod44ResOp9);
            console.log("la suma es 44:" + restaGlobalCod44);
  
  
            restaGlobalCod45 = Number(cantidadCod45ResOp1 + cantidadCod45ResOp2 + cantidadCod45ResOp3+ cantidadCod45ResOp4 +cantidadCod45ResOp5+cantidadCod45ResOp6 +cantidadCod45ResOp7 +cantidadCod45ResOp8 +cantidadCod45ResOp9);
            console.log("la suma es 45:" + restaGlobalCod45);
  
  
            restaGlobalCod46 = Number(cantidadCod46ResOp1 + cantidadCod46ResOp2 + cantidadCod46ResOp3+ cantidadCod46ResOp4 +cantidadCod46ResOp5+cantidadCod46ResOp6 +cantidadCod46ResOp7 +cantidadCod46ResOp8 +cantidadCod46ResOp9);
            console.log("la suma es 46:" + restaGlobalCod46);
  
  
            restaGlobalCod47 = Number(cantidadCod47ResOp1 + cantidadCod47ResOp2 + cantidadCod47ResOp3+ cantidadCod47ResOp4 +cantidadCod47ResOp5+cantidadCod47ResOp6 +cantidadCod47ResOp7 +cantidadCod47ResOp8 +cantidadCod47ResOp9);
            console.log("la suma es 47:" + restaGlobalCod47);
  
  
            restaGlobalCod48 = Number(cantidadCod48ResOp1 + cantidadCod48ResOp2 + cantidadCod48ResOp3+ cantidadCod48ResOp4 +cantidadCod48ResOp5+cantidadCod48ResOp6 +cantidadCod48ResOp7 +cantidadCod48ResOp8 +cantidadCod48ResOp9);
            console.log("la suma es 48:" + restaGlobalCod48);
  
  
            restaGlobalCod49 = Number(cantidadCod49ResOp1 + cantidadCod49ResOp2 + cantidadCod49ResOp3+ cantidadCod49ResOp4 +cantidadCod49ResOp5+cantidadCod49ResOp6 +cantidadCod49ResOp7 +cantidadCod49ResOp8 +cantidadCod49ResOp9);
            console.log("la suma es 49:" + restaGlobalCod49);
  
  
            restaGlobalCod50 = Number(cantidadCod50ResOp1 + cantidadCod50ResOp2 + cantidadCod50ResOp3+ cantidadCod50ResOp4 +cantidadCod50ResOp5+cantidadCod50ResOp6 +cantidadCod50ResOp7 +cantidadCod50ResOp8 +cantidadCod50ResOp9);
            console.log("la suma es 50:" + restaGlobalCod50);
  
  
           /* if (restaGlobalCod2 == 0 && restaGlobalCod3 == 0 ) {
              restaGlobalCod3 = Number(canCod3);
              restaGlobalCod2 = Number(canCod2);
  
            }
            if (restaGlobalCod1 == 0 && restaGlobalCod3 == 0) {
              restaGlobalCod1 = Number(canCod1);
              restaGlobalCod3 = Number(canCod3);
  
            }
            if (restaGlobalCod1 == 0 && restaGlobalCod2 == 0) {
              restaGlobalCod1 = Number(canCod1);
              restaGlobalCod2 = Number(canCod2);
  
            }*/

          //------------------------prueba------------------
          //console.log("antes de la verificacion"+canCod2);
          if (restaGlobalCod1 == 0) { restaGlobalCod1 = Number(canCod1); }

          if (restaGlobalCod2 == 0) { restaGlobalCod2 = Number(canCod2); }
          if (restaGlobalCod3 == 0) { restaGlobalCod3 = Number(canCod3); }
          if (restaGlobalCod4 == 0) { restaGlobalCod4 = Number(canCod4); }
          if (restaGlobalCod5 == 0) { restaGlobalCod5 = Number(canCod5); }
          if (restaGlobalCod6 == 0) { restaGlobalCod6 = Number(canCod6); }
          if (restaGlobalCod7 == 0) { restaGlobalCod7 = Number(canCod7); }
          if (restaGlobalCod8 == 0) { restaGlobalCod8 = Number(canCod8); }
          if (restaGlobalCod9 == 0) { restaGlobalCod9 = Number(canCod9); }
          if (restaGlobalCod10 == 0) { restaGlobalCod10 = Number(canCod10); }
          if (restaGlobalCod11 == 0) { restaGlobalCod11 = Number(canCod11); }
          if (restaGlobalCod12 == 0) { restaGlobalCod12 = Number(canCod12); }
          if (restaGlobalCod13 == 0) { restaGlobalCod13 = Number(canCod13); }
          if (restaGlobalCod14 == 0) { restaGlobalCod14 = Number(canCod14); }
          if (restaGlobalCod15 == 0) { restaGlobalCod15 = Number(canCod15); }
          if (restaGlobalCod16 == 0) { restaGlobalCod16 = Number(canCod16); }
          if (restaGlobalCod17 == 0) { restaGlobalCod17 = Number(canCod17); }
          if (restaGlobalCod18 == 0) { restaGlobalCod18 = Number(canCod18); }
          if (restaGlobalCod19 == 0) { restaGlobalCod19 = Number(canCod19); }
          if (restaGlobalCod20 == 0) { restaGlobalCod20 = Number(canCod20); }
          if (restaGlobalCod21 == 0) { restaGlobalCod21 = Number(canCod21); }
          if (restaGlobalCod22 == 0) { restaGlobalCod22 = Number(canCod22); }
          if (restaGlobalCod23 == 0) { restaGlobalCod23 = Number(canCod23); }
          if (restaGlobalCod24 == 0) { restaGlobalCod24 = Number(canCod24); }
          if (restaGlobalCod25 == 0) { restaGlobalCod25 = Number(canCod25); }


          if (restaGlobalCod26 == 0) { restaGlobalCod26 = Number(canCod26); }

          if (restaGlobalCod27 == 0) { restaGlobalCod27 = Number(canCod27); }
          if (restaGlobalCod28 == 0) { restaGlobalCod28 = Number(canCod28); }
          if (restaGlobalCod29 == 0) { restaGlobalCod29 = Number(canCod29); }
          if (restaGlobalCod30 == 0) { restaGlobalCod30 = Number(canCod30); }
          if (restaGlobalCod31 == 0) { restaGlobalCod31 = Number(canCod31); }
          if (restaGlobalCod32 == 0) { restaGlobalCod32 = Number(canCod32); }
          if (restaGlobalCod33 == 0) { restaGlobalCod33 = Number(canCod33); }
          if (restaGlobalCod34 == 0) { restaGlobalCod34 = Number(canCod34); }
          if (restaGlobalCod35 == 0) { restaGlobalCod35 = Number(canCod35); }
          if (restaGlobalCod36 == 0) { restaGlobalCod36 = Number(canCod36); }
          if (restaGlobalCod37 == 0) { restaGlobalCod37 = Number(canCod37); }
          if (restaGlobalCod38 == 0) { restaGlobalCod38 = Number(canCod38); }
          if (restaGlobalCod39 == 0) { restaGlobalCod39 = Number(canCod39); }
          if (restaGlobalCod40 == 0) { restaGlobalCod40 = Number(canCod40); }
          if (restaGlobalCod41 == 0) { restaGlobalCod41 = Number(canCod41); }
          if (restaGlobalCod42 == 0) { restaGlobalCod42 = Number(canCod42); }
          if (restaGlobalCod43 == 0) { restaGlobalCod43 = Number(canCod43); }
          if (restaGlobalCod44 == 0) { restaGlobalCod44 = Number(canCod44); }
          if (restaGlobalCod45 == 0) { restaGlobalCod45 = Number(canCod45); }
          if (restaGlobalCod46 == 0) { restaGlobalCod46 = Number(canCod46); }
          if (restaGlobalCod47 == 0) { restaGlobalCod47 = Number(canCod47); }
          if (restaGlobalCod48 == 0) { restaGlobalCod48 = Number(canCod48); }
          if (restaGlobalCod49 == 0) { restaGlobalCod49 = Number(canCod49); }
          if (restaGlobalCod50 == 0) { restaGlobalCod50 = Number(canCod50); }



          // console.log("justo antes de actualizar..."+restaGlobalCod2);
          //------------------------------------------------


          var washingtonRef = db.collection("CantidadesDisponibles").doc(doc.id);

          // Set the "capital" field of the city 'DC'
          return washingtonRef.update({
            cantiCod1: restaGlobalCod1,
            cantiCod2: restaGlobalCod2,
            cantiCod3: restaGlobalCod3,
            cantiCod4: restaGlobalCod4,
            cantiCod5: restaGlobalCod5,
            cantiCod6: restaGlobalCod6,
            cantiCod7: restaGlobalCod7,
            cantiCod8: restaGlobalCod8,
            cantiCod9: restaGlobalCod9,
            cantiCod10: restaGlobalCod10,
            cantiCod11: restaGlobalCod11,
            cantiCod12: restaGlobalCod12,
            cantiCod13: restaGlobalCod13,
            cantiCod14: restaGlobalCod14,
            cantiCod15: restaGlobalCod15,
            cantiCod16: restaGlobalCod16,
            cantiCod17: restaGlobalCod17,
            cantiCod18: restaGlobalCod18,
            cantiCod19: restaGlobalCod19,
            cantiCod20: restaGlobalCod20,
            cantiCod21: restaGlobalCod21,
            cantiCod22: restaGlobalCod22,
            cantiCod23: restaGlobalCod23,
            cantiCod24: restaGlobalCod24,
            cantiCod25: restaGlobalCod25,
            cantiCod26: restaGlobalCod26,
            cantiCod27: restaGlobalCod27,
            cantiCod28: restaGlobalCod28,
            cantiCod29: restaGlobalCod29,
            cantiCod30: restaGlobalCod30,
            cantiCod31: restaGlobalCod31,
            cantiCod32: restaGlobalCod32,
            cantiCod33: restaGlobalCod33,
            cantiCod34: restaGlobalCod34,
            cantiCod35: restaGlobalCod35,
            cantiCod36: restaGlobalCod36,
            cantiCod37: restaGlobalCod37,
            cantiCod38: restaGlobalCod38,
            cantiCod39: restaGlobalCod39,
            cantiCod40: restaGlobalCod40,
            cantiCod41: restaGlobalCod41,
            cantiCod42: restaGlobalCod42,
            cantiCod43: restaGlobalCod43,
            cantiCod44: restaGlobalCod44,
            cantiCod45: restaGlobalCod45,
            cantiCod46: restaGlobalCod46,
            cantiCod47: restaGlobalCod47,
            cantiCod48: restaGlobalCod48,
            cantiCod49: restaGlobalCod49,
            cantiCod50: restaGlobalCod50,










          })

            .then(function () {

              console.log("SE ACTUALIZO LOS CAMPOS");
              alert("se pudo realizar el registro");
            })
            .catch(function (error) {

              console.error("Error updating document: ", error);
            });





        }


        //alert("canti1="+restaGlobalCod1+" "+"canti2="+restaGlobalCod2+" "+"canti3="+restaGlobalCod3);


      });
    })


}

disponibleOp1 = function () {

  var nombreref = document.getElementById("op").value;

  unidadesElaboradaop = 0;
  /*opera1=""; 
   opera2="";
  opera3="";
  opera4="";
  opera5="";
  opera6="";
  opera7="";
  opera8="";
  opera9="";*/



  var opera1 = document.getElementById("operaci").value;
  var opera2 = document.getElementById("operaci2").value;
  var opera3 = document.getElementById("operaci3").value;
  var opera4 = document.getElementById("operaci4").value;
  var opera5 = document.getElementById("operaci5").value;
  var opera6 = document.getElementById("operaci6").value;
  var opera7 = document.getElementById("operaci7").value;
  var opera8 = document.getElementById("operaci8").value;
  var opera9 = document.getElementById("operaci9").value;


  var unidadesElaboradaop = document.getElementById("canti").value;




  db.collection("CantidadesDisponibles")
    .where("OP", "==", nombreref).get()
    .then(function (querySnapshot) {

      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        var codH1 = `${doc.data().Codigo}`;
        var canCod1 = `${doc.data().cantiCod1}`;

        var codH2 = `${doc.data().Codigo2}`;
        var canCod2 = `${doc.data().cantiCod2}`;

        var codH3 = `${doc.data().Codigo3}`;
        var canCod3 = `${doc.data().cantiCod3}`;

        var codH4 = `${doc.data().Codigo4}`;
        var canCod4 = `${doc.data().cantiCod4}`;

        var codH5 = `${doc.data().Codigo5}`;
        var canCod5 = `${doc.data().cantiCod5}`;

        var codH6 = `${doc.data().Codigo6}`;
        var canCod6 = `${doc.data().cantiCod6}`;

        var codH7 = `${doc.data().Codigo7}`;
        var canCod7 = `${doc.data().cantiCod7}`;

        var codH8 = `${doc.data().Codigo8}`;
        var canCod8 = `${doc.data().cantiCod8}`;

        var codH9 = `${doc.data().Codigo9}`;
        var canCod9 = `${doc.data().cantiCod9}`;

        var codH10 = `${doc.data().Codigo10}`;
        var canCod10 = `${doc.data().cantiCod10}`;

        var codH11 = `${doc.data().Codigo11}`;
        var canCod11 = `${doc.data().cantiCod11}`;

        var codH12 = `${doc.data().Codigo12}`;
        var canCod12 = `${doc.data().cantiCod12}`;

        var codH13 = `${doc.data().Codigo13}`;
        var canCod13 = `${doc.data().cantiCod13}`;

        var codH14 = `${doc.data().Codigo14}`;
        var canCod14 = `${doc.data().cantiCod14}`;

        var codH15 = `${doc.data().Codigo15}`;
        var canCod15 = `${doc.data().cantiCod15}`;

        var codH16 = `${doc.data().Codigo16}`;
        var canCod16 = `${doc.data().cantiCod16}`;

        var codH17 = `${doc.data().Codigo17}`;
        var canCod17 = `${doc.data().cantiCod17}`;

        var codH18 = `${doc.data().Codigo18}`;
        var canCod18 = `${doc.data().cantiCod18}`;

        var codH19 = `${doc.data().Codigo19}`;
        var canCod19 = `${doc.data().cantiCod19}`;

        var codH20 = `${doc.data().Codigo20}`;
        var canCod20 = `${doc.data().cantiCod20}`;

        var codH21 = `${doc.data().Codigo21}`;
        var canCod21 = `${doc.data().cantiCod21}`;

        var codH22 = `${doc.data().Codigo22}`;
        var canCod22 = `${doc.data().cantiCod22}`;

        var codH23 = `${doc.data().Codigo23}`;
        var canCod23 = `${doc.data().cantiCod23}`;

        var codH24 = `${doc.data().Codigo24}`;
        var canCod24 = `${doc.data().cantiCod24}`;

        var codH25 = `${doc.data().Codigo25}`;
        var canCod25 = `${doc.data().cantiCod25}`;

        var codH26 = `${doc.data().Codigo26}`;
        var canCod26 = `${doc.data().cantiCod26}`;

        var codH27 = `${doc.data().Codigo27}`;
        var canCod27 = `${doc.data().cantiCod27}`;

        var codH28 = `${doc.data().Codigo28}`;
        var canCod28 = `${doc.data().cantiCod28}`;

        var codH29 = `${doc.data().Codigo29}`;
        var canCod29 = `${doc.data().cantiCod29}`;

        var codH30 = `${doc.data().Codigo30}`;
        var canCod30 = `${doc.data().cantiCod30}`;

        var codH31 = `${doc.data().Codigo31}`;
        var canCod31 = `${doc.data().cantiCod31}`;

        var codH32 = `${doc.data().Codigo32}`;
        var canCod32 = `${doc.data().cantiCod32}`;

        var codH33 = `${doc.data().Codigo33}`;
        var canCod33 = `${doc.data().cantiCod33}`;

        var codH34 = `${doc.data().Codigo34}`;
        var canCod34 = `${doc.data().cantiCod34}`;

        var codH35 = `${doc.data().Codigo35}`;
        var canCod35 = `${doc.data().cantiCod35}`;

        var codH36 = `${doc.data().Codigo36}`;
        var canCod36 = `${doc.data().cantiCod36}`;

        var codH37 = `${doc.data().Codigo37}`;
        var canCod37 = `${doc.data().cantiCod37}`;

        var codH38 = `${doc.data().Codigo38}`;
        var canCod38 = `${doc.data().cantiCod38}`;

        var codH39 = `${doc.data().Codigo39}`;
        var canCod39 = `${doc.data().cantiCod39}`;

        var codH40 = `${doc.data().Codigo40}`;
        var canCod40 = `${doc.data().cantiCod40}`;

        var codH41 = `${doc.data().Codigo41}`;
        var canCod41 = `${doc.data().cantiCod41}`;

        var codH42 = `${doc.data().Codigo42}`;
        var canCod42 = `${doc.data().cantiCod42}`;

        var codH43 = `${doc.data().Codigo43}`;
        var canCod43 = `${doc.data().cantiCod43}`;

        var codH44 = `${doc.data().Codigo44}`;
        var canCod44 = `${doc.data().cantiCod44}`;

        var codH45 = `${doc.data().Codigo45}`;
        var canCod45 = `${doc.data().cantiCod45}`;

        var codH46 = `${doc.data().Codigo46}`;
        var canCod46 = `${doc.data().cantiCod46}`;

        var codH47 = `${doc.data().Codigo47}`;
        var canCod47 = `${doc.data().cantiCod47}`;

        var codH48 = `${doc.data().Codigo48}`;
        var canCod48 = `${doc.data().cantiCod48}`;

        var codH49 = `${doc.data().Codigo49}`;
        var canCod49 = `${doc.data().cantiCod49}`;

        var codH50 = `${doc.data().Codigo50}`;
        var canCod50 = `${doc.data().cantiCod50}`;




        if (opera1 == codH1 && canCod1 >= unidadesElaboradaop) {
          cantidadCod1Res = canCod1 - unidadesElaboradaop;
          var washingtonRef = db.collection("CantidadesDisponibles").doc(doc.id);

          // Set the "capital" field of the city 'DC'
          return washingtonRef.update({
            cantiCod1: cantidadCod1Res,



          })

            .then(function () {

              console.log("SE ACTUALIZO EL CAMPO 1");
            })
            .catch(function (error) {

              console.error("Error updating document: ", error);
            });

        }

        if (opera1 == codH2 && canCod2 >= unidadesElaboradaop) {

          cantidadCod2Res = canCod2 - unidadesElaboradaop;

          var washingtonRef = db.collection("CantidadesDisponibles").doc(doc.id);

          // Set the "capital" field of the city 'DC'
          return washingtonRef.update({
            cantiCod2: cantidadCod2Res,



          })

            .then(function () {

              console.log("SE ACTUALIZO EL CAMPO 2");
            })
            .catch(function (error) {

              console.error("Error updating document: ", error);
            });



        }
        if (opera1 == codH3 && canCod3 >= unidadesElaboradaop) {

          cantidadCod3Res = canCod3 - unidadesElaboradaop;
          var washingtonRef = db.collection("CantidadesDisponibles").doc(doc.id);

          // Set the "capital" field of the city 'DC'
          return washingtonRef.update({
            cantiCod3: cantidadCod3Res,



          })

            .then(function () {

              console.log("SE ACTUALIZO EL CAMPO 3");
            })
            .catch(function (error) {

              console.error("Error updating document: ", error);
            });

        }

        if (opera1 == codH4) {

          cantidadCod4Res = canCod4 - unidadesElaboradaop;
        }
        if (opera1 == codH5) {

          cantidadCod5Res = canCod5 - unidadesElaboradaop;
        }
        if (opera1 == codH6) {

          cantidadCod6Res = canCod6 - unidadesElaboradaop;
        }
        if (opera1 == codH7) {

          cantidadCod7Res = canCod7 - unidadesElaboradaop;
        }
        if (opera1 == codH8) {

          cantidadCod8Res = canCod8 - unidadesElaboradaop;
        }
        if (opera1 == codH9) {

          cantidadCod9Res = canCod9 - unidadesElaboradaop;
        }
        if (opera1 == codH10) {

          cantidadCod10Res = canCod10 - unidadesElaboradaop;
        }
        if (opera1 == codH11) {

          cantidadCod11Res = canCod11 - unidadesElaboradaop;
        }
        if (opera1 == codH12) {

          cantidadCod12Res = canCod12 - unidadesElaboradaop;
        }
        if (opera1 == codH13) {

          cantidadCod13Res = canCod13 - unidadesElaboradaop;
        }
        if (opera1 == codH14) {

          cantidadCod14Res = canCod14 - unidadesElaboradaop;
        }
        if (opera1 == codH15) {

          cantidadCod15Res = canCod15 - unidadesElaboradaop;
        }
        if (opera1 == codH16) {

          cantidadCod16Res = canCod16 - unidadesElaboradaop;
        }
        if (opera1 == codH17) {

          cantidadCod17Res = canCod17 - unidadesElaboradaop;
        }
        if (opera1 == codH18) {

          cantidadCod18Res = canCod18 - unidadesElaboradaop;
        }
        if (opera1 == codH19) {

          cantidadCod19Res = canCod19 - unidadesElaboradaop;
        }
        if (opera1 == codH20) {

          cantidadCod20Res = canCod20 - unidadesElaboradaop;
        }
        if (opera1 == codH21) {

          cantidadCod21Res = canCod21 - unidadesElaboradaop;
        }
        if (opera1 == codH22) {

          cantidadCod22Res = canCod22 - unidadesElaboradaop;
        }
        if (opera1 == codH23) {

          cantidadCod23Res = canCod23 - unidadesElaboradaop;
        }
        if (opera1 == codH24) {

          cantidadCod24Res = canCod24 - unidadesElaboradaop;
        }
        if (opera1 == codH25) {

          cantidadCod25Res = canCod25 - unidadesElaboradaop;
        }
        if (opera1 == codH26) {

          cantidadCod26Res = canCod26 - unidadesElaboradaop;
        }
        if (opera1 == codH27) {

          cantidadCod27Res = canCod27 - unidadesElaboradaop;
        }
        if (opera1 == codH28) {

          cantidadCod28Res = canCod28 - unidadesElaboradaop;
        }
        if (opera1 == codH29) {

          cantidadCod29Res = canCod29 - unidadesElaboradaop;
        }
        if (opera1 == codH30) {

          cantidadCod30Res = canCod30 - unidadesElaboradaop;
        }
        if (opera1 == codH31) {

          cantidadCod31Res = canCod31 - unidadesElaboradaop;
        }
        if (opera1 == codH32) {

          cantidadCod32Res = canCod32 - unidadesElaboradaop;
        }
        if (opera1 == codH33) {

          cantidadCod33Res = canCod33 - unidadesElaboradaop;
        }
        if (opera1 == codH34) {

          cantidadCod34Res = canCod34 - unidadesElaboradaop;
        }
        if (opera1 == codH35) {

          cantidadCod35Res = canCod35 - unidadesElaboradaop;
        }
        if (opera1 == codH36) {

          cantidadCod36Res = canCod36 - unidadesElaboradaop;
        }
        if (opera1 == codH37) {

          cantidadCod37Res = canCod37 - unidadesElaboradaop;
        }
        if (opera1 == codH38) {

          cantidadCod38Res = canCod38 - unidadesElaboradaop;
        }
        if (opera1 == codH39) {

          cantidadCod39Res = canCod39 - unidadesElaboradaop;
        }
        if (opera1 == codH40) {

          cantidadCod40Res = canCod40 - unidadesElaboradaop;
        }
        if (opera1 == codH41) {

          cantidadCod41Res = canCod41 - unidadesElaboradaop;
        }
        if (opera1 == codH42) {

          cantidadCod42Res = canCod42 - unidadesElaboradaop;
        }
        if (opera1 == codH43) {

          cantidadCod43Res = canCod43 - unidadesElaboradaop;
        }
        if (opera1 == codH44) {

          cantidadCod44Res = canCod44 - unidadesElaboradaop;
        }
        if (opera1 == codH45) {

          cantidadCod45Res = canCod45 - unidadesElaboradaop;
        }
        if (opera1 == codH46) {

          cantidadCod46Res = canCod46 - unidadesElaboradaop;
        }
        if (opera1 == codH47) {

          cantidadCod47Res = canCod47 - unidadesElaboradaop;
        }
        if (opera1 == codH48) {

          cantidadCod48Res = canCod48 - unidadesElaboradaop;
        }
        if (opera1 == codH49) {

          cantidadCod49Res = canCod49 - unidadesElaboradaop;
        }
        if (opera1 == codH50) {

          cantidadCod50Res = canCod50 - unidadesElaboradaop;
        }




      });
    })
}


contadorUnidades = function () {

  var nombreref = document.getElementById("op").value;

  unidadesElaboradaop = 0;
  /*opera1=""; 
   opera2="";
  opera3="";
  opera4="";
  opera5="";
  opera6="";
  opera7="";
  opera8="";
  opera9="";*/



  var opera1 = document.getElementById("operaci").value;
  var opera2 = document.getElementById("operaci2").value;
  var opera3 = document.getElementById("operaci3").value;
  var opera4 = document.getElementById("operaci4").value;
  var opera5 = document.getElementById("operaci5").value;
  var opera6 = document.getElementById("operaci6").value;
  var opera7 = document.getElementById("operaci7").value;
  var opera8 = document.getElementById("operaci8").value;
  var opera9 = document.getElementById("operaci9").value;


  var unidadesElaboradaop = document.getElementById("canti").value;




  db.collection("CantidadesDisponibles").where("OP", "==", nombreref).get()
    .then(function (querySnapshot) {

      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        var codH1 = `${doc.data().Codigo}`;
        var canCod1 = `${doc.data().cantiCod1}`;

        var codH2 = `${doc.data().Codigo2}`;
        var canCod2 = `${doc.data().cantiCod2}`;

        var codH3 = `${doc.data().Codigo3}`;
        var canCod3 = `${doc.data().cantiCod3}`;

        var codH4 = `${doc.data().Codigo4}`;
        var canCod4 = `${doc.data().cantiCod4}`;

        var codH5 = `${doc.data().Codigo5}`;
        var canCod5 = `${doc.data().cantiCod5}`;

        var codH6 = `${doc.data().Codigo6}`;
        var canCod6 = `${doc.data().cantiCod6}`;

        var codH7 = `${doc.data().Codigo7}`;
        var canCod7 = `${doc.data().cantiCod7}`;

        var codH8 = `${doc.data().Codigo8}`;
        var canCod8 = `${doc.data().cantiCod8}`;

        var codH9 = `${doc.data().Codigo9}`;
        var canCod9 = `${doc.data().cantiCod9}`;

        var codH10 = `${doc.data().Codigo10}`;
        var canCod10 = `${doc.data().cantiCod10}`;

        var codH11 = `${doc.data().Codigo11}`;
        var canCod11 = `${doc.data().cantiCod11}`;

        var codH12 = `${doc.data().Codigo12}`;
        var canCod12 = `${doc.data().cantiCod12}`;

        var codH13 = `${doc.data().Codigo13}`;
        var canCod13 = `${doc.data().cantiCod13}`;

        var codH14 = `${doc.data().Codigo14}`;
        var canCod14 = `${doc.data().cantiCod14}`;

        var codH15 = `${doc.data().Codigo15}`;
        var canCod15 = `${doc.data().cantiCod15}`;

        var codH16 = `${doc.data().Codigo16}`;
        var canCod16 = `${doc.data().cantiCod16}`;

        var codH17 = `${doc.data().Codigo17}`;
        var canCod17 = `${doc.data().cantiCod17}`;

        var codH18 = `${doc.data().Codigo18}`;
        var canCod18 = `${doc.data().cantiCod18}`;

        var codH19 = `${doc.data().Codigo19}`;
        var canCod19 = `${doc.data().cantiCod19}`;

        var codH20 = `${doc.data().Codigo20}`;
        var canCod20 = `${doc.data().cantiCod20}`;

        var codH21 = `${doc.data().Codigo21}`;
        var canCod21 = `${doc.data().cantiCod21}`;

        var codH22 = `${doc.data().Codigo22}`;
        var canCod22 = `${doc.data().cantiCod22}`;

        var codH23 = `${doc.data().Codigo23}`;
        var canCod23 = `${doc.data().cantiCod23}`;

        var codH24 = `${doc.data().Codigo24}`;
        var canCod24 = `${doc.data().cantiCod24}`;

        var codH25 = `${doc.data().Codigo25}`;
        var canCod25 = `${doc.data().cantiCod25}`;

        var codH26 = `${doc.data().Codigo26}`;
        var canCod26 = `${doc.data().cantiCod26}`;

        var codH27 = `${doc.data().Codigo27}`;
        var canCod27 = `${doc.data().cantiCod27}`;

        var codH28 = `${doc.data().Codigo28}`;
        var canCod28 = `${doc.data().cantiCod28}`;

        var codH29 = `${doc.data().Codigo29}`;
        var canCod29 = `${doc.data().cantiCod29}`;

        var codH30 = `${doc.data().Codigo30}`;
        var canCod30 = `${doc.data().cantiCod30}`;

        var codH31 = `${doc.data().Codigo31}`;
        var canCod31 = `${doc.data().cantiCod31}`;

        var codH32 = `${doc.data().Codigo32}`;
        var canCod32 = `${doc.data().cantiCod32}`;

        var codH33 = `${doc.data().Codigo33}`;
        var canCod33 = `${doc.data().cantiCod33}`;

        var codH34 = `${doc.data().Codigo34}`;
        var canCod34 = `${doc.data().cantiCod34}`;

        var codH35 = `${doc.data().Codigo35}`;
        var canCod35 = `${doc.data().cantiCod35}`;

        var codH36 = `${doc.data().Codigo36}`;
        var canCod36 = `${doc.data().cantiCod36}`;

        var codH37 = `${doc.data().Codigo37}`;
        var canCod37 = `${doc.data().cantiCod37}`;

        var codH38 = `${doc.data().Codigo38}`;
        var canCod38 = `${doc.data().cantiCod38}`;

        var codH39 = `${doc.data().Codigo39}`;
        var canCod39 = `${doc.data().cantiCod39}`;

        var codH40 = `${doc.data().Codigo40}`;
        var canCod40 = `${doc.data().cantiCod40}`;

        var codH41 = `${doc.data().Codigo41}`;
        var canCod41 = `${doc.data().cantiCod41}`;

        var codH42 = `${doc.data().Codigo42}`;
        var canCod42 = `${doc.data().cantiCod42}`;

        var codH43 = `${doc.data().Codigo43}`;
        var canCod43 = `${doc.data().cantiCod43}`;

        var codH44 = `${doc.data().Codigo44}`;
        var canCod44 = `${doc.data().cantiCod44}`;

        var codH45 = `${doc.data().Codigo45}`;
        var canCod45 = `${doc.data().cantiCod45}`;

        var codH46 = `${doc.data().Codigo46}`;
        var canCod46 = `${doc.data().cantiCod46}`;

        var codH47 = `${doc.data().Codigo47}`;
        var canCod47 = `${doc.data().cantiCod47}`;

        var codH48 = `${doc.data().Codigo48}`;
        var canCod48 = `${doc.data().cantiCod48}`;

        var codH49 = `${doc.data().Codigo49}`;
        var canCod49 = `${doc.data().cantiCod49}`;

        var codH50 = `${doc.data().Codigo50}`;
        var canCod50 = `${doc.data().cantiCod50}`;
        /*    if (isNaN(codH50)) {
              codH50 = "";
            }
            if (isNaN(canCod50)) {
              canCod50 = 0;
            }
            if (isNaN(codH49)) {
              codH49 = "";
            }
            if (isNaN(canCod49)) {
              canCod49 = 0;
            }
            if (isNaN(codH48)) {
              codH48 = "";
            }
            if (isNaN(canCod48)) {
              canCod48 = 0;
            }
            if (isNaN(codH47)) {
              codH47 = "";
            }
            if (isNaN(canCod47)) {
              canCod47 = 0;
            }
            if (isNaN(codH46)) {
              codH46 = "";
            }
            if (isNaN(canCod46)) {
              canCod46 = 0;
            }
            if (isNaN(codH45)) {
              codH45 = "";
            }
            if (isNaN(canCod45)) {
              canCod45 = 0;
            }
            if (isNaN(codH44)) {
              codH44 = "";
            }
            if (isNaN(canCod44)) {
              canCod44 = 0;
            }
            if (isNaN(codH43)) {
              codH43 = "";
            }
            if (isNaN(canCod43)) {
              canCod43 = 0;
            }
            if (isNaN(codH42)) {
              codH42 = "";
            }
            if (isNaN(canCod42)) {
              canCod42 = 0;
            }
            if (isNaN(codH41)) {
              codH41 = "";
            }
            if (isNaN(canCod41)) {
              canCod41 = 0;
            }
            if (isNaN(codH40)) {
              codH40 = "";
            }
            if (isNaN(canCod40)) {
              canCod40 = 0;
            }
            if (isNaN(codH39)) {
              codH39 = "";
            }
            if (isNaN(canCod39)) {
              canCod39 = 0;
            }
            if (isNaN(codH38)) {
              codH38 = "";
            }
            if (isNaN(canCod38)) {
              canCod38 = 0;
            }
            if (isNaN(codH37)) {
              codH37 = "";
            }
            if (isNaN(canCod37)) {
              canCod37 = 0;
            }
            if (isNaN(codH36)) {
              codH36 = "";
            }
            if (isNaN(canCod36)) {
              canCod36 = 0;
            }
            if (isNaN(codH35)) {
              codH35 = "";
            }
            if (isNaN(canCod35)) {
              canCod35 = 0;
            }
            if (isNaN(codH34)) {
              codH34 = "";
            }
            if (isNaN(canCod34)) {
              canCod34 = 0;
            }
            if (isNaN(codH33)) {
              codH33 = "";
            }
            if (isNaN(canCod33)) {
              canCod33 = 0;
            }
            if (isNaN(codH32)) {
              codH32 = "";
            }
            if (isNaN(canCod32)) {
              canCod32 = 0;
            }
            if (isNaN(codH31)) {
              codH31 = "";
            }
            if (isNaN(canCod31)) {
              canCod31 = 0;
            }
            if (isNaN(codH30)) {
              codH30 = "";
            }
            if (isNaN(canCod30)) {
              canCod30 = 0;
            }
            if (isNaN(codH29)) {
              codH29 = "";
            }
            if (isNaN(canCod29)) {
              canCod29 = 0;
            }
            if (isNaN(codH28)) {
              codH28 = "";
            }
            if (isNaN(canCod28)) {
              canCod28 = 0;
            }
            if (isNaN(codH27)) {
              codH27 = "";
            }
            if (isNaN(canCod27)) {
              canCod27 = 0;
            }
            if (isNaN(codH26)) {
              codH26 = "";
            }
            if (isNaN(canCod26)) {
              canCod26 = 0;
            }
            if (isNaN(codH25)) {
              codH25 = "";
            }
            if (isNaN(canCod25)) {
              canCod25 = 0;
            }
            if (isNaN(codH24)) {
              codH24 = "";
            }
            if (isNaN(canCod24)) {
              canCod24 = 0;
            }
            if (isNaN(codH23)) {
              codH23 = "";
            }
            if (isNaN(canCod23)) {
              canCod23 = 0;
            }
            if (isNaN(codH22)) {
              codH22 = "";
            }
            if (isNaN(canCod22)) {
              canCod22 = 0;
            }
            if (isNaN(codH21)) {
              codH21 = "";
            }
            if (isNaN(canCod21)) {
              canCod21 = 0;
            }
            if (isNaN(codH20)) {
              codH20 = "";
            }
            if (isNaN(canCod20)) {
              canCod20 = 0;
            }
            if (isNaN(codH19)) {
              codH19 = "";
            }
            if (isNaN(canCod19)) {
              canCod16 = 0;
            }
            if (isNaN(codH18)) {
              codH18 = "";
            }
            if (isNaN(canCod18)) {
              canCod18 = 0;
            }
            if (isNaN(codH17)) {
              codH17 = "";
            }
            if (isNaN(canCod17)) {
              canCod17 = 0;
            }
            if (isNaN(codH16)) {
              codH16 = "";
            }
            if (isNaN(canCod16)) {
              canCod16 = 0;
            }
            if (isNaN(codH15)) {
              codH15 = "";
            }
            if (isNaN(canCod15)) {
              canCod15 = 0;
            }
            if (isNaN(codH14)) {
              codH14 = "";
            }
            if (isNaN(canCod14)) {
              canCod14 = 0;
            }
            if (isNaN(codH13)) {
              codH13 = "";
            }
            if (isNaN(canCod13)) {
              canCod13 = 0;
            }
            if (isNaN(codH12)) {
              codH12 = "";
            }
            if (isNaN(canCod12)) {
              canCod12 = 0;
            }
            if (isNaN(codH11)) {
              codH11 = "";
            }
            if (isNaN(canCod11)) {
              canCod11 = 0;
            }
            if (isNaN(codH10)) {
              codH10 = "";
            }
            if (isNaN(canCod10)) {
              canCod10 = 0;
            }
            if (isNaN(codH9)) {
              codH9 = "";
            }
            if (isNaN(canCod9)) {
              canCod9 = 0;
            }
            if (isNaN(codH8)) {
              codH8 = "";
            }
            if (isNaN(canCod8)) {
              canCod8 = 0;
            }
            if (isNaN(codH7)) {
              codH7 = "";
            }
            if (isNaN(canCod7)) {
              canCod7 = 0;
            }
            if (isNaN(codH6)) {
              codH6 = "";
            }
            if (isNaN(canCod6)) {
              canCod6 = 0;
            }
            if (isNaN(codH5)) {
              codH5 = "";
            }
            if (isNaN(canCod5)) {
              canCod5 = 0;
            }
            if (isNaN(codH4)) {
              codH4 = "";
            }
            if (isNaN(canCod4)) {
              canCod4 = 0;
            }
            if (isNaN(codH3)) {
              codH3 = "";
            }
            if (isNaN(canCod3)) {
              canCod3 = 0;
            }
            if (isNaN(codH2)) {
              codH2 = "";
            }
            if (isNaN(canCod2)) {
              canCod2 = 0;
            }
            if (isNaN(codH1)) {
              codH1 = "";
            }
            if (isNaN(canCod1)) {
              canCod1 = 0;
            }*/


        if (document.getElementById("").value != "operaci") {

          if (opera1 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;

          }
          if (opera1 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;

          }
          if (opera1 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera1 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera1 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera1 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera1 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera1 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera1 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera1 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera1 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera1 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera1 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera1 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera1 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera1 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera1 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera1 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera1 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera1 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera1 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera1 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera1 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera1 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera1 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera1 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera1 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera1 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera1 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera1 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera1 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera1 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera1 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera1 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera1 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera1 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera1 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera1 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera1 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera1 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera1 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera1 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera1 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera1 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera1 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera1 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera1 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera1 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera1 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera1 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }




        }




        //-----------------------------------------2----------------------------------

        if (document.getElementById("operaci2").value != "") {

          if (opera2 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;
          }
          if (opera2 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;
          }
          if (opera2 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera2 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera2 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera2 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera2 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera2 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera2 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera2 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera2 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera2 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera2 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera2 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera2 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera2 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera2 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera2 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera2 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera2 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera2 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera2 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera2 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera2 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera2 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera2 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera2 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera2 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera2 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera2 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera2 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera2 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera2 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera2 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera2 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera2 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera2 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera2 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera2 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera2 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera2 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera2 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera2 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera2 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera2 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera2 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera2 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera2 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera2 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera2 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }

        }


        //-----------------------------------3-----------------------------------------

        if (document.getElementById("").value != "operaci3") {

          if (opera3 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;
          }
          if (opera3 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;
          }
          if (opera3 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera3 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera3 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera3 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera3 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera3 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera3 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera3 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera3 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera3 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera3 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera3 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera3 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera3 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera3 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera3 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera3 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera3 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera3 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera3 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera3 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera3 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera3 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera3 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera3 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera3 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera3 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera3 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera3 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera3 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera3 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera3 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera3 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera3 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera3 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera3 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera3 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera3 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera3 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera3 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera3 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera3 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera3 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera3 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera3 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera3 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera3 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera3 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }
        }


        //--------------------------------4---------------------------------------------

        if (document.getElementById("operaci4").value != "") {


          if (opera4 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;
          }
          if (opera4 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;
          }
          if (opera4 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera4 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera4 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera4 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera4 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera4 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera4 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera4 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera4 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera4 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera4 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera4 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera4 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera4 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera4 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera4 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera4 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera4 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera4 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera4 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera4 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera4 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera4 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera4 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera4 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera4 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera4 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera4 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera4 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera4 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera4 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera4 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera4 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera4 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera4 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera4 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera4 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera4 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera4 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera4 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera4 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera4 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera4 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera4 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera4 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera4 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera4 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera4 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }

        }

        //--------------------------------------5---------------------------------------

        if (document.getElementById("operaci5").value != "") {

          if (opera5 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;
          }
          if (opera5 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;
          }
          if (opera5 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera5 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera5 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera5 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera5 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera5 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera5 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera5 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera5 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera5 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera5 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera5 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera5 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera5 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera5 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera5 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera5 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera5 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera5 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera5 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera5 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera5 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera5 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera5 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera5 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera5 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera5 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera5 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera5 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera5 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera5 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera5 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera5 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera5 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera5 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera5 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera5 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera5 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera5 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera5 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera5 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera5 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera5 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera5 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera5 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera5 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera5 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera5 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }


        }


        //-----------------------------------------6-------------------------------------

        if (document.getElementById("operaci6").value != "") {

          if (opera6 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;
          }
          if (opera6 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;
          }
          if (opera6 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera6 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera6 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera6 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera6 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera6 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera6 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera6 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera6 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera6 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera6 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera6 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera6 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera6 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera6 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera6 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera6 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera6 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera6 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera6 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera6 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera6 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera6 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera6 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera6 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera6 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera6 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera6 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera6 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera6 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera6 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera6 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera6 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera6 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera6 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera6 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera6 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera6 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera6 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera6 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera6 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera6 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera6 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera6 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera6 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera6 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera6 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera6 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }



        }


        //----------------------------------------------7---------------------------------

        if (document.getElementById("operaci7").value != "") {


          if (opera7 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;
          }
          if (opera7 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;
          }
          if (opera7 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera7 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera7 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera7 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera7 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera7 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera7 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera7 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera7 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera7 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera7 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera7 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera7 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera7 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera7 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera7 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera7 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera7 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera7 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera7 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera7 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera7 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera7 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera7 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera7 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera7 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera7 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera7 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera7 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera7 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera7 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera7 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera7 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera7 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera7 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera7 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera7 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera7 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera7 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera7 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera7 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera7 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera7 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera7 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera7 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera7 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera7 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera7 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }


        }


        //------------------------------------8-------------------------------------------

        if (document.getElementById("operaci8").value != "") {


          if (opera8 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;
          }
          if (opera8 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;
          }
          if (opera8 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera8 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera8 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera8 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera8 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera8 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera8 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera8 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera8 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera8 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera8 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera8 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera8 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera8 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera8 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera8 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera8 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera8 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera8 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera8 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera8 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera8 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera8 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera8 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera8 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera8 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera8 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera8 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera8 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera8 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera8 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera8 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera8 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera8 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera8 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera8 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera8 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera8 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera8 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera8 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera8 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera8 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera8 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera8 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera8 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera8 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera8 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera8 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }


        }


        //------------------------------------------9--------------------------------------

        if (document.getElementById("operaci9").value != "") {

          if (opera9 == codH1) {

            cantidadCod1Res = canCod1 - unidadesElaboradaop;
          }
          if (opera9 == codH2) {

            cantidadCod2Res = canCod2 - unidadesElaboradaop;
          }
          if (opera9 == codH3) {

            cantidadCod3Res = canCod3 - unidadesElaboradaop;
          }
          if (opera9 == codH4) {

            cantidadCod4Res = canCod4 - unidadesElaboradaop;
          }
          if (opera9 == codH5) {

            cantidadCod5Res = canCod5 - unidadesElaboradaop;
          }
          if (opera9 == codH6) {

            cantidadCod6Res = canCod6 - unidadesElaboradaop;
          }
          if (opera9 == codH7) {

            cantidadCod7Res = canCod7 - unidadesElaboradaop;
          }
          if (opera9 == codH8) {

            cantidadCod8Res = canCod8 - unidadesElaboradaop;
          }
          if (opera9 == codH9) {

            cantidadCod9Res = canCod9 - unidadesElaboradaop;
          }
          if (opera9 == codH10) {

            cantidadCod10Res = canCod10 - unidadesElaboradaop;
          }
          if (opera9 == codH11) {

            cantidadCod11Res = canCod11 - unidadesElaboradaop;
          }
          if (opera9 == codH12) {

            cantidadCod12Res = canCod12 - unidadesElaboradaop;
          }
          if (opera9 == codH13) {

            cantidadCod13Res = canCod13 - unidadesElaboradaop;
          }
          if (opera9 == codH14) {

            cantidadCod14Res = canCod14 - unidadesElaboradaop;
          }
          if (opera9 == codH15) {

            cantidadCod15Res = canCod15 - unidadesElaboradaop;
          }
          if (opera9 == codH16) {

            cantidadCod16Res = canCod16 - unidadesElaboradaop;
          }
          if (opera9 == codH17) {

            cantidadCod17Res = canCod17 - unidadesElaboradaop;
          }
          if (opera9 == codH18) {

            cantidadCod18Res = canCod18 - unidadesElaboradaop;
          }
          if (opera9 == codH19) {

            cantidadCod19Res = canCod19 - unidadesElaboradaop;
          }
          if (opera9 == codH20) {

            cantidadCod20Res = canCod20 - unidadesElaboradaop;
          }
          if (opera9 == codH21) {

            cantidadCod21Res = canCod21 - unidadesElaboradaop;
          }
          if (opera9 == codH22) {

            cantidadCod22Res = canCod22 - unidadesElaboradaop;
          }
          if (opera9 == codH23) {

            cantidadCod23Res = canCod23 - unidadesElaboradaop;
          }
          if (opera9 == codH24) {

            cantidadCod24Res = canCod24 - unidadesElaboradaop;
          }
          if (opera9 == codH25) {

            cantidadCod25Res = canCod25 - unidadesElaboradaop;
          }
          if (opera9 == codH26) {

            cantidadCod26Res = canCod26 - unidadesElaboradaop;
          }
          if (opera9 == codH27) {

            cantidadCod27Res = canCod27 - unidadesElaboradaop;
          }
          if (opera9 == codH28) {

            cantidadCod28Res = canCod28 - unidadesElaboradaop;
          }
          if (opera9 == codH29) {

            cantidadCod29Res = canCod29 - unidadesElaboradaop;
          }
          if (opera9 == codH30) {

            cantidadCod30Res = canCod30 - unidadesElaboradaop;
          }
          if (opera9 == codH31) {

            cantidadCod31Res = canCod31 - unidadesElaboradaop;
          }
          if (opera9 == codH32) {

            cantidadCod32Res = canCod32 - unidadesElaboradaop;
          }
          if (opera9 == codH33) {

            cantidadCod33Res = canCod33 - unidadesElaboradaop;
          }
          if (opera9 == codH34) {

            cantidadCod34Res = canCod34 - unidadesElaboradaop;
          }
          if (opera9 == codH35) {

            cantidadCod35Res = canCod35 - unidadesElaboradaop;
          }
          if (opera9 == codH36) {

            cantidadCod36Res = canCod36 - unidadesElaboradaop;
          }
          if (opera9 == codH37) {

            cantidadCod37Res = canCod37 - unidadesElaboradaop;
          }
          if (opera9 == codH38) {

            cantidadCod38Res = canCod38 - unidadesElaboradaop;
          }
          if (opera9 == codH39) {

            cantidadCod39Res = canCod39 - unidadesElaboradaop;
          }
          if (opera9 == codH40) {

            cantidadCod40Res = canCod40 - unidadesElaboradaop;
          }
          if (opera9 == codH41) {

            cantidadCod41Res = canCod41 - unidadesElaboradaop;
          }
          if (opera9 == codH42) {

            cantidadCod42Res = canCod42 - unidadesElaboradaop;
          }
          if (opera9 == codH43) {

            cantidadCod43Res = canCod43 - unidadesElaboradaop;
          }
          if (opera9 == codH44) {

            cantidadCod44Res = canCod44 - unidadesElaboradaop;
          }
          if (opera9 == codH45) {

            cantidadCod45Res = canCod45 - unidadesElaboradaop;
          }
          if (opera9 == codH46) {

            cantidadCod46Res = canCod46 - unidadesElaboradaop;
          }
          if (opera9 == codH47) {

            cantidadCod47Res = canCod47 - unidadesElaboradaop;
          }
          if (opera9 == codH48) {

            cantidadCod48Res = canCod48 - unidadesElaboradaop;
          }
          if (opera9 == codH49) {

            cantidadCod49Res = canCod49 - unidadesElaboradaop;
          }
          if (opera9 == codH50) {

            cantidadCod50Res = canCod50 - unidadesElaboradaop;
          }


        }


        /*   if(cantidadCod1Res<0){
   alert("el numero es negativo");
           }*/
        //---------------------------------------------------------------------------------

        var washingtonRef = db.collection("CantidadesDisponibles").doc(doc.id);

        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
          cantiCod1: cantidadCod1Res,
          cantiCod2: cantidadCod2Res,
          cantiCod3: cantidadCod3Res,
          cantiCod4: cantidadCod4Res,
          cantiCod5: cantidadCod5Res,
          cantiCod6: cantidadCod6Res,
          cantiCod7: cantidadCod7Res,
          cantiCod8: cantidadCod8Res,
          cantiCod9: cantidadCod9Res,

          cantiCod10: cantidadCod10Res,
          cantiCod11: cantidadCod11Res,
          cantiCod12: cantidadCod12Res,
          cantiCod13: cantidadCod13Res,
          cantiCod14: cantidadCod14Res,
          cantiCod15: cantidadCod15Res,
          cantiCod16: cantidadCod16Res,
          cantiCod17: cantidadCod17Res,
          cantiCod18: cantidadCod18Res,

          cantiCod19: cantidadCod19Res,
          cantiCod20: cantidadCod20Res,
          cantiCod21: cantidadCod21Res,
          cantiCod22: cantidadCod22Res,
          cantiCod23: cantidadCod23Res,
          cantiCod24: cantidadCod24Res,
          cantiCod25: cantidadCod25Res,
          cantiCod26: cantidadCod26Res,
          cantiCod27: cantidadCod27Res,

          cantiCod28: cantidadCod28Res,
          cantiCod29: cantidadCod29Res,
          cantiCod30: cantidadCod30Res,
          cantiCod31: cantidadCod31Res,
          cantiCod32: cantidadCod32Res,
          cantiCod33: cantidadCod33Res,
          cantiCod34: cantidadCod34Res,
          cantiCod35: cantidadCod35Res,
          cantiCod36: cantidadCod36Res,

          cantiCod37: cantidadCod37Res,
          cantiCod38: cantidadCod38Res,
          cantiCod39: cantidadCod39Res,
          cantiCod40: cantidadCod40Res,
          cantiCod41: cantidadCod41Res,
          cantiCod42: cantidadCod42Res,
          cantiCod43: cantidadCod43Res,
          cantiCod44: cantidadCod44Res,
          cantiCod45: cantidadCod45Res,

          cantiCod46: cantidadCod46Res,
          cantiCod47: cantidadCod47Res,
          cantiCod48: cantidadCod48Res,
          cantiCod49: cantidadCod49Res,
          cantiCod50: cantidadCod50Res,






        })

          .then(function () {

            console.log("Document successfully updated!");
          })
          .catch(function (error) {

            console.error("Error updating document: ", error);
          });



      })
    });
  document.getElementById("canti").value = "";

}

//--------------------------------------actualizar fecha trabajado---------------------------

fechi = function fech() {

  var fechota = document.getElementById("fechaMovil").value;
  //console.log("la fechita es:"+fechota);
}


//---------------------------------contar nombres---------------------------------------
/*function contar_palabras(){
 //Obtenemos el texto del campo
 var texto = document.getElementById("Comentarios").value;
 //Reemplazamos los saltos de linea por espacios
 texto = texto.replace (/\r?\n/g," ");
 //Reemplazamos los espacios seguidos por uno solo
 texto = texto.replace (/[ ]+/g," ");
 //Quitarmos los espacios del principio y del final
 texto = texto.replace (/^ /,"");
 texto = texto.replace (/ $/,"");
 //Troceamos el texto por los espacios
 var textoTroceado = texto.split (" ");
 //Contamos todos los trozos de cadenas que existen
  numeroPalabras = textoTroceado.length;
 //Mostramos el número de palabras
 //alert(numeroPalabras);
}*/

//---------------------------------------------consulta porcentaje historial----------------------------------

porcenSin = function () {



  var consultaOP = document.getElementById("op").value;
  RendimientoOp = 0;
  unidadesSeg = 0;
  relaTiemp = 0;
  //  tiempEstan=0;
  // TiempoStdTotal=0;




  Operacion = "";
  Operacion2 = "";
  Operacion3 = "";
  Operacion4 = "";
  Operacion5 = "";
  Operacion6 = "";
  Operacion7 = "";
  Operacion8 = "";
  Operacion9 = "";

  cantidadElabo = 0;
  tiemTrabajado = 0;
  tiempEstan1 = 0;
  tiempEstan2 = 0;
  tiempEstan3 = 0;
  tiempEstan4 = 0;
  tiempEstan5 = 0;
  tiempEstan6 = 0;
  tiempEstan7 = 0;
  tiempEstan8 = 0;
  tiempEstan9 = 0;

  Unidad1 = 0;
  Unidad2 = 0;
  Unidad3 = 0;
  Unidad4 = 0;
  Unidad5 = 0;
  Unidad6 = 0;
  Unidad7 = 0;
  Unidad8 = 0;
  Unidad9 = 0;

  TiempoTrabajaSin = 0;
  tin2 = 0;


  Rendi = 0;
  unidadSTD = 0;

  db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        canti = `${doc.data().Cantidad}`;
        consultaref = `${doc.data().Referenc}`;

        //  document.getElementById("cantiOp").value=canti;
        //   document.getElementById("RefOp").value=consultaref;





        //---------------------------------------------------------------------------

        db.collection("FichaTecniGlobal").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              OpFic1 = `${doc.data().Codigo}`;
              UniFich1 = parseInt(`${doc.data().Unidad}`);
              estan1 = parseInt(`${doc.data().Estandar}`);

              OpFic2 = `${doc.data().Codigo2}`;
              UniFich2 = parseInt(`${doc.data().Unidad2}`);
              estan2 = parseInt(`${doc.data().Estandar2}`);

              OpFic3 = `${doc.data().Codigo3}`;
              UniFich3 = parseInt(`${doc.data().Unidad3}`);
              estan3 = parseInt(`${doc.data().Estandar3}`);

              OpFic4 = `${doc.data().Codigo4}`;
              UniFich4 = parseInt(`${doc.data().Unidad4}`);
              console.log(UniFich4);
              estan4 = parseInt(`${doc.data().Estandar4}`);

              OpFic5 = `${doc.data().Codigo5}`;
              UniFich5 = parseInt(`${doc.data().Unidad5}`);
              estan5 = parseInt(`${doc.data().Estandar5}`);

              OpFic6 = `${doc.data().Codigo6}`;
              UniFich6 = parseInt(`${doc.data().Unidad6}`);
              estan6 = parseInt(`${doc.data().Estandar6}`);

              OpFic7 = `${doc.data().Codigo7}`;
              UniFich7 = parseInt(`${doc.data().Unidad7}`);
              estan7 = parseInt(`${doc.data().Estandar7}`);

              OpFic8 = `${doc.data().Codigo8}`;
              UniFich8 = parseInt(`${doc.data().Unidad8}`);
              estan8 = parseInt(`${doc.data().Estandar8}`);

              OpFic9 = `${doc.data().Codigo9}`;
              UniFich9 = parseInt(`${doc.data().Unidad9}`);
              estan9 = parseInt(`${doc.data().Estandar9}`);

              OpFic10 = `${doc.data().Codigo10}`;
              UniFich10 = parseInt(`${doc.data().Unidad10}`);
              estan10 = parseInt(`${doc.data().Estandar10}`);

              OpFic11 = `${doc.data().Codigo11}`;
              UniFich11 = parseInt(`${doc.data().Unidad11}`);
              estan11 = parseInt(`${doc.data().Estandar11}`);

              OpFic12 = `${doc.data().Codigo12}`;
              UniFich12 = parseInt(`${doc.data().Unidad12}`);
              estan12 = parseInt(`${doc.data().Estandar12}`);

              OpFic13 = `${doc.data().Codigo13}`;
              UniFich13 = parseInt(`${doc.data().Unidad13}`);
              estan13 = parseInt(`${doc.data().Estandar13}`);

              OpFic14 = `${doc.data().Codigo14}`;
              UniFich14 = parseInt(`${doc.data().Unidad14}`);
              estan14 = parseInt(`${doc.data().Estandar14}`);

              OpFic15 = `${doc.data().Codigo15}`;
              UniFich15 = parseInt(`${doc.data().Unidad15}`);
              estan15 = parseInt(`${doc.data().Estandar15}`);

              OpFic16 = `${doc.data().Codigo16}`;
              UniFich16 = parseInt(`${doc.data().Unidad16}`);
              estan16 = parseInt(`${doc.data().Estandar16}`);

              OpFic17 = `${doc.data().Codigo17}`;
              UniFich17 = parseInt(`${doc.data().Unidad17}`);
              estan17 = parseInt(`${doc.data().Estandar17}`);

              OpFic18 = `${doc.data().Codigo18}`;
              UniFich18 = parseInt(`${doc.data().Unidad18}`);
              estan18 = parseInt(`${doc.data().Estandar18}`);

              OpFic19 = `${doc.data().Codigo19}`;
              UniFich19 = parseInt(`${doc.data().Unidad19}`);
              estan19 = parseInt(`${doc.data().Estandar19}`);

              OpFic20 = `${doc.data().Codigo20}`;
              UniFich20 = parseInt(`${doc.data().Unidad20}`);
              estan20 = parseInt(`${doc.data().Estandar20}`);

              OpFic21 = `${doc.data().Codigo21}`;
              UniFich21 = parseInt(`${doc.data().Unidad21}`);
              estan21 = parseInt(`${doc.data().Estandar21}`);

              OpFic22 = `${doc.data().Codigo22}`;
              UniFich22 = parseInt(`${doc.data().Unidad22}`);
              estan22 = parseInt(`${doc.data().Estandar22}`);

              OpFic23 = `${doc.data().Codigo23}`;
              UniFich23 = parseInt(`${doc.data().Unidad23}`);
              estan23 = parseInt(`${doc.data().Estandar23}`);

              OpFic24 = `${doc.data().Codigo24}`;
              UniFich24 = parseInt(`${doc.data().Unidad24}`);
              estan24 = parseInt(`${doc.data().Estandar24}`);

              OpFic25 = `${doc.data().Codigo25}`;
              UniFich25 = parseInt(`${doc.data().Unidad25}`);
              estan25 = parseInt(`${doc.data().Estandar25}`);

              OpFic26 = `${doc.data().Codigo26}`;
              UniFich26 = parseInt(`${doc.data().Unidad26}`);
              estan26 = parseInt(`${doc.data().Estandar26}`);

              OpFic27 = `${doc.data().Codigo27}`;
              UniFich27 = parseInt(`${doc.data().Unidad27}`);
              estan27 = parseInt(`${doc.data().Estandar27}`);

              OpFic28 = `${doc.data().Codigo28}`;
              UniFich28 = parseInt(`${doc.data().Unidad28}`);
              estan28 = parseInt(`${doc.data().Estandar28}`);

              OpFic29 = `${doc.data().Codigo29}`;
              UniFich29 = parseInt(`${doc.data().Unidad29}`);
              estan29 = parseInt(`${doc.data().Estandar29}`);

              OpFic30 = `${doc.data().Codigo30}`;
              UniFich30 = parseInt(`${doc.data().Unidad30}`);
              estan30 = parseInt(`${doc.data().Estandar30}`);

              OpFic31 = `${doc.data().Codigo31}`;
              UniFich31 = parseInt(`${doc.data().Unidad31}`);
              estan31 = parseInt(`${doc.data().Estandar31}`);

              OpFic32 = `${doc.data().Codigo32}`;
              UniFich32 = parseInt(`${doc.data().Unidad32}`);
              estan32 = parseInt(`${doc.data().Estandar32}`);

              OpFic33 = `${doc.data().Codigo33}`;
              UniFich33 = parseInt(`${doc.data().Unidad33}`);
              estan33 = parseInt(`${doc.data().Estandar33}`);

              OpFic34 = `${doc.data().Codigo34}`;
              UniFich34 = parseInt(`${doc.data().Unidad34}`);
              estan34 = parseInt(`${doc.data().Estandar34}`);

              OpFic35 = `${doc.data().Codigo35}`;
              UniFich35 = parseInt(`${doc.data().Unidad35}`);
              estan35 = parseInt(`${doc.data().Estandar35}`);

              OpFic36 = `${doc.data().Codigo36}`;
              UniFich36 = parseInt(`${doc.data().Unidad36}`);
              estan36 = parseInt(`${doc.data().Estandar36}`);

              OpFic37 = `${doc.data().Codigo37}`;
              UniFich37 = parseInt(`${doc.data().Unidad37}`);
              estan37 = parseInt(`${doc.data().Estandar37}`);

              OpFic38 = `${doc.data().Codigo38}`;
              UniFich38 = parseInt(`${doc.data().Unidad38}`);
              estan38 = parseInt(`${doc.data().Estandar38}`);

              OpFic39 = `${doc.data().Codigo39}`;
              UniFich39 = parseInt(`${doc.data().Unidad39}`);
              estan39 = parseInt(`${doc.data().Estandar39}`);

              OpFic40 = `${doc.data().Codigo40}`;
              UniFich40 = parseInt(`${doc.data().Unidad40}`);
              estan40 = parseInt(`${doc.data().Estandar40}`);

              OpFic41 = `${doc.data().Codigo41}`;
              UniFich41 = parseInt(`${doc.data().Unidad41}`);
              estan41 = parseInt(`${doc.data().Estandar41}`);

              OpFic42 = `${doc.data().Codigo42}`;
              UniFich42 = parseInt(`${doc.data().Unidad42}`);
              estan42 = parseInt(`${doc.data().Estandar42}`);

              OpFic43 = `${doc.data().Codigo43}`;
              UniFich43 = parseInt(`${doc.data().Unidad43}`);
              estan43 = parseInt(`${doc.data().Estandar43}`);

              OpFic44 = `${doc.data().Codigo44}`;
              UniFich44 = parseInt(`${doc.data().Unidad44}`);
              estan44 = parseInt(`${doc.data().Estandar44}`);

              OpFic45 = `${doc.data().Codigo45}`;
              UniFich45 = parseInt(`${doc.data().Unidad45}`);
              estan45 = parseInt(`${doc.data().Estandar45}`);

              OpFic46 = `${doc.data().Codigo46}`;
              UniFich46 = parseInt(`${doc.data().Unidad46}`);
              estan46 = parseInt(`${doc.data().Estandar46}`);

              OpFic47 = `${doc.data().Codigo47}`;
              UniFich47 = parseInt(`${doc.data().Unidad47}`);
              estan47 = parseInt(`${doc.data().Estandar47}`);

              OpFic48 = `${doc.data().Codigo48}`;
              UniFich48 = parseInt(`${doc.data().Unidad48}`);
              estan48 = parseInt(`${doc.data().Estandar48}`);

              OpFic49 = `${doc.data().Codigo49}`;
              UniFich49 = parseInt(`${doc.data().Unidad49}`);
              estan49 = parseInt(`${doc.data().Estandar49}`);

              OpFic50 = `${doc.data().Codigo50}`;
              UniFich50 = parseInt(`${doc.data().Unidad50}`);
              estan50 = parseInt(`${doc.data().Estandar50}`);




              //---------------------------------variables operaciones vs tiempo fichas--------




              comi = `${doc.data().Comida}`;
              tin = `${doc.data().Tinto}`;

              tin2 = `${doc.data().Tinto2}`;






              Operacion = document.getElementById("operaci").value;
              Operacion2 = document.getElementById("operaci2").value;
              Operacion3 = document.getElementById("operaci3").value;
              Operacion4 = document.getElementById("operaci4").value;
              Operacion5 = document.getElementById("operaci5").value;
              Operacion6 = document.getElementById("operaci6").value;
              Operacion7 = document.getElementById("operaci7").value;
              Operacion8 = document.getElementById("operaci8").value;
              Operacion9 = document.getElementById("operaci9").value;


              var comentarios = document.getElementById("Comentarios").value;

              //  var texto = document.getElementById("Comentarios").value;
              //Reemplazamos los saltos de linea por espacios
              comentarios = comentarios.replace(/\r?\n/g, " ");
              //Reemplazamos los espacios seguidos por uno solo
              comentarios = comentarios.replace(/[ ]+/g, " ");
              //Quitarmos los espacios del principio y del final
              comentarios = comentarios.replace(/^ /, "");
              comentarios = comentarios.replace(/ $/, "");
              //Troceamos el texto por los espacios
              var textoTroceado = comentarios.split(" ");
              //Contamos todos los trozos de cadenas que existen
              numeroPalabras = textoTroceado.length;
              //console.log("el numero de palabras en la actu es:" +numeroPalabras);


              //  integrantes = `${doc.data().Comen}`;


              cantidadElabo = document.getElementById("canti").value;
              tiemTrabajado = document.getElementById("resta").value;


              if (Operacion == OpFic1) {
                tiempEstan1 = estan1 * cantidadElabo;
                Unidad1 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion == OpFic2) {
                tiempEstan1 = estan2 * cantidadElabo;

                Unidad1 = UniFich2;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion == OpFic3) {
                tiempEstan1 = estan3 * cantidadElabo;

                Unidad1 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion == OpFic4) {
                tiempEstan1 = estan4 * cantidadElabo;

                Unidad1 = UniFich4;


              }
              if (Operacion == OpFic5) {
                tiempEstan1 = estan5 * cantidadElabo;

                Unidad1 = UniFich5;


              }
              if (Operacion == OpFic6) {
                tiempEstan1 = estan6 * cantidadElabo;

                Unidad1 = UniFich6;


              }
              if (Operacion == OpFic7) {
                tiempEstan1 = estan7 * cantidadElabo;

                Unidad1 = UniFich7;

              }
              if (Operacion == OpFic8) {
                tiempEstan1 = estan8 * cantidadElabo;

                Unidad1 = UniFich8;


              }
              if (Operacion == OpFic9) {
                tiempEstan1 = estan9 * cantidadElabo;

                Unidad1 = UniFich9;


              }
              if (Operacion == OpFic10) {
                tiempEstan1 = estan10 * cantidadElabo;

                Unidad1 = UniFich10;

              }
              if (Operacion == OpFic11) {
                tiempEstan1 = estan11 * cantidadElabo;

                Unidad1 = UniFich11;


              }
              if (Operacion == OpFic12) {
                tiempEstan1 = estan12 * cantidadElabo;

                Unidad1 = UniFich12;


              }
              if (Operacion == OpFic13) {
                tiempEstan1 = estan13 * cantidadElabo;

                Unidad1 = UniFich13;


              }
              if (Operacion == OpFic14) {
                tiempEstan1 = estan14 * cantidadElabo;

                Unidad1 = UniFich14;


              }
              if (Operacion == OpFic15) {
                tiempEstan1 = estan15 * cantidadElabo;

                Unidad1 = UniFich15;

              }
              if (Operacion == OpFic16) {
                tiempEstan1 = estan16 * cantidadElabo;

                Unidad1 = UniFich16;


              }
              if (Operacion == OpFic17) {
                tiempEstan1 = estan17 * cantidadElabo;

                Unidad1 = UniFich17;


              }
              if (Operacion == OpFic18) {
                tiempEstan1 = estan18 * cantidadElabo;

                Unidad1 = UniFich18;

              }
              if (Operacion == OpFic19) {
                tiempEstan1 = estan19 * cantidadElabo;

                Unidad1 = UniFich19;


              }
              if (Operacion == OpFic20) {
                tiempEstan1 = estan20 * cantidadElabo;

                Unidad1 = UniFich20;


              }
              if (Operacion == OpFic21) {
                tiempEstan1 = estan21 * cantidadElabo;

                Unidad1 = UniFich21;


              }
              if (Operacion == OpFic22) {
                tiempEstan1 = estan22 * cantidadElabo;

                Unidad1 = UniFich22;


              }
              if (Operacion == OpFic23) {
                tiempEstan1 = estan23 * cantidadElabo;

                Unidad1 = UniFich23;


              }
              if (Operacion == OpFic24) {
                tiempEstan1 = estan24 * cantidadElabo;

                Unidad1 = UniFich24;

              }
              if (Operacion == OpFic25) {
                tiempEstan1 = estan25 * cantidadElabo;

                Unidad1 = UniFich25;


              }
              if (Operacion == OpFic26) {
                tiempEstan1 = estan26 * cantidadElabo;

                Unidad1 = UniFich26;


              }
              if (Operacion == OpFic27) {
                tiempEstan1 = estan27 * cantidadElabo;

                Unidad1 = UniFich27;


              }
              if (Operacion == OpFic28) {
                tiempEstan1 = estan28 * cantidadElabo;

                Unidad1 = UniFich28;


              }
              if (Operacion == OpFic29) {
                tiempEstan1 = estan29 * cantidadElabo;

                Unidad1 = UniFich29;


              }
              if (Operacion == OpFic30) {
                tiempEstan1 = estan30 * cantidadElabo;

                Unidad1 = UniFich30;


              }

              if (Operacion == OpFic31) {
                tiempEstan1 = estan31 * cantidadElabo;

                Unidad1 = UniFich31;


              }
              if (Operacion == OpFic32) {
                tiempEstan1 = estan32 * cantidadElabo;

                Unidad1 = UniFich32;

              }
              if (Operacion == OpFic33) {
                tiempEstan1 = estan33 * cantidadElabo;

                Unidad1 = UniFich33;

              }
              if (Operacion == OpFic34) {
                tiempEstan1 = estan34 * cantidadElabo;

                Unidad1 = UniFich34;

              }
              if (Operacion == OpFic35) {
                tiempEstan1 = estan35 * cantidadElabo;

                Unidad1 = UniFich35;


              }
              if (Operacion == OpFic36) {
                tiempEstan1 = estan36 * cantidadElabo;

                Unidad1 = UniFich36;


              }
              if (Operacion == OpFic37) {
                tiempEstan1 = estan37 * cantidadElabo;

                Unidad1 = UniFich37;

              }
              if (Operacion == OpFic38) {
                tiempEstan1 = estan38 * cantidadElabo;

                Unidad1 = UniFich38;

              }
              if (Operacion == OpFic39) {
                tiempEstan1 = estan39 * cantidadElabo;

                Unidad1 = UniFich39;


              }
              if (Operacion == OpFic40) {
                tiempEstan1 = estan40 * cantidadElabo;

                Unidad1 = UniFich40;


              }
              if (Operacion == OpFic41) {
                tiempEstan1 = estan41 * cantidadElabo;

                Unidad1 = UniFich41;


              }
              if (Operacion == OpFic42) {
                tiempEstan1 = estan42 * cantidadElabo;

                Unidad1 = UniFich42;


              }
              if (Operacion == OpFic43) {
                tiempEstan1 = estan43 * cantidadElabo;

                Unidad1 = UniFich43;


              }
              if (Operacion == OpFic44) {
                tiempEstan1 = estan44 * cantidadElabo;

                Unidad1 = UniFich44;


              }
              if (Operacion == OpFic45) {
                tiempEstan1 = estan45 * cantidadElabo;

                Unidad1 = UniFich45;

              }
              if (Operacion == OpFic46) {
                tiempEstan1 = estan46 * cantidadElabo;

                Unidad1 = UniFich46;

              }
              if (Operacion == OpFic47) {
                tiempEstan1 = estan47 * cantidadElabo;

                Unidad1 = UniFich47;


              }
              if (Operacion == OpFic48) {
                tiempEstan1 = estan48 * cantidadElabo;

                Unidad1 = UniFich48;


              }
              if (Operacion == OpFic49) {
                tiempEstan1 = estan49 * cantidadElabo;

                Unidad1 = UniFich49;


              }
              if (Operacion == OpFic50) {
                tiempEstan1 = estan50 * cantidadElabo;

                Unidad1 = UniFich50;


              }

              //---------------------------------------condicion 2---------------------

              if (Operacion2 == OpFic1) {
                tiempEstan2 = estan1 * cantidadElabo;
                Unidad2 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion2 == OpFic2) {
                tiempEstan2 = estan2 * cantidadElabo;

                Unidad2 = UniFich2;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion2 == OpFic3) {
                tiempEstan2 = estan3 * cantidadElabo;

                Unidad2 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion2 == OpFic4) {
                tiempEstan2 = estan4 * cantidadElabo;

                Unidad2 = UniFich4;


              }
              if (Operacion2 == OpFic5) {
                tiempEstan2 = estan5 * cantidadElabo;

                Unidad2 = UniFich5;


              }
              if (Operacion2 == OpFic6) {
                tiempEstan2 = estan6 * cantidadElabo;

                Unidad2 = UniFich6;


              }
              if (Operacion2 == OpFic7) {
                tiempEstan2 = estan7 * cantidadElabo;

                Unidad2 = UniFich7;

              }
              if (Operacion2 == OpFic8) {
                tiempEstan2 = estan8 * cantidadElabo;

                Unidad2 = UniFich8;


              }
              if (Operacion2 == OpFic9) {
                tiempEstan2 = estan9 * cantidadElabo;

                Unidad2 = UniFich9;


              }
              if (Operacion2 == OpFic10) {
                tiempEstan2 = estan10 * cantidadElabo;

                Unidad2 = UniFich10;

              }
              if (Operacion2 == OpFic11) {
                tiempEstan2 = estan11 * cantidadElabo;

                Unidad2 = UniFich11;


              }
              if (Operacion2 == OpFic12) {
                tiempEstan2 = estan12 * cantidadElabo;

                Unidad2 = UniFich12;


              }
              if (Operacion2 == OpFic13) {
                tiempEstan2 = estan13 * cantidadElabo;

                Unidad2 = UniFich13;


              }
              if (Operacion2 == OpFic14) {
                tiempEstan2 = estan14 * cantidadElabo;

                Unidad2 = UniFich14;


              }
              if (Operacion2 == OpFic15) {
                tiempEstan2 = estan15 * cantidadElabo;

                Unidad2 = UniFich15;

              }
              if (Operacion2 == OpFic16) {
                tiempEstan2 = estan16 * cantidadElabo;

                Unidad2 = UniFich16;


              }
              if (Operacion2 == OpFic17) {
                tiempEstan2 = estan17 * cantidadElabo;

                Unidad2 = UniFich17;


              }
              if (Operacion2 == OpFic18) {
                tiempEstan2 = estan18 * cantidadElabo;

                Unidad2 = UniFich18;

              }
              if (Operacion2 == OpFic19) {
                tiempEstan2 = estan19 * cantidadElabo;

                Unidad2 = UniFich19;


              }
              if (Operacion2 == OpFic20) {
                tiempEstan2 = estan20 * cantidadElabo;

                Unidad2 = UniFich20;


              }
              if (Operacion2 == OpFic21) {
                tiempEstan2 = estan21 * cantidadElabo;

                Unidad2 = UniFich21;


              }
              if (Operacion2 == OpFic22) {
                tiempEstan2 = estan22 * cantidadElabo;

                Unidad2 = UniFich22;


              }
              if (Operacion2 == OpFic23) {
                tiempEstan2 = estan23 * cantidadElabo;

                Unidad2 = UniFich23;


              }
              if (Operacion2 == OpFic24) {
                tiempEstan2 = estan24 * cantidadElabo;

                Unidad2 = UniFich24;

              }
              if (Operacion2 == OpFic25) {
                tiempEstan2 = estan25 * cantidadElabo;

                Unidad2 = UniFich25;


              }
              if (Operacion2 == OpFic26) {
                tiempEstan2 = estan26 * cantidadElabo;

                Unidad2 = UniFich26;


              }
              if (Operacion2 == OpFic27) {
                tiempEstan2 = estan27 * cantidadElabo;

                Unidad2 = UniFich27;


              }
              if (Operacion2 == OpFic28) {
                tiempEstan2 = estan28 * cantidadElabo;

                Unidad2 = UniFich28;


              }
              if (Operacion2 == OpFic29) {
                tiempEstan2 = estan29 * cantidadElabo;

                Unidad2 = UniFich29;


              }
              if (Operacion2 == OpFic30) {
                tiempEstan2 = estan30 * cantidadElabo;

                Unidad2 = UniFich30;


              }

              if (Operacion2 == OpFic31) {
                tiempEstan2 = estan31 * cantidadElabo;

                Unidad2 = UniFich31;


              }
              if (Operacion2 == OpFic32) {
                tiempEstan2 = estan32 * cantidadElabo;

                Unidad2 = UniFich32;

              }
              if (Operacion2 == OpFic33) {
                tiempEstan2 = estan33 * cantidadElabo;

                Unidad2 = UniFich33;

              }
              if (Operacion2 == OpFic34) {
                tiempEstan2 = estan34 * cantidadElabo;

                Unidad2 = UniFich34;

              }
              if (Operacion2 == OpFic35) {
                tiempEstan2 = estan35 * cantidadElabo;

                Unidad2 = UniFich35;


              }
              if (Operacion2 == OpFic36) {
                tiempEstan2 = estan36 * cantidadElabo;

                Unidad2 = UniFich36;


              }
              if (Operacion2 == OpFic37) {
                tiempEstan2 = estan37 * cantidadElabo;

                Unidad2 = UniFich37;

              }
              if (Operacion2 == OpFic38) {
                tiempEstan2 = estan38 * cantidadElabo;

                Unidad2 = UniFich38;

              }
              if (Operacion2 == OpFic39) {
                tiempEstan2 = estan39 * cantidadElabo;

                Unidad2 = UniFich39;


              }
              if (Operacion2 == OpFic40) {
                tiempEstan2 = estan40 * cantidadElabo;

                Unidad2 = UniFich40;


              }
              if (Operacion2 == OpFic41) {
                tiempEstan2 = estan41 * cantidadElabo;

                Unidad2 = UniFich41;


              }
              if (Operacion2 == OpFic42) {
                tiempEstan2 = estan42 * cantidadElabo;

                Unidad2 = UniFich42;


              }
              if (Operacion2 == OpFic43) {
                tiempEstan2 = estan43 * cantidadElabo;

                Unidad2 = UniFich43;


              }
              if (Operacion2 == OpFic44) {
                tiempEstan2 = estan44 * cantidadElabo;

                Unidad2 = UniFich44;


              }
              if (Operacion2 == OpFic45) {
                tiempEstan2 = estan45 * cantidadElabo;

                Unidad2 = UniFich45;

              }
              if (Operacion2 == OpFic46) {
                tiempEstan2 = estan46 * cantidadElabo;

                Unidad2 = UniFich46;

              }
              if (Operacion2 == OpFic47) {
                tiempEstan2 = estan47 * cantidadElabo;

                Unidad2 = UniFich47;


              }
              if (Operacion2 == OpFic48) {
                tiempEstan2 = estan48 * cantidadElabo;

                Unidad2 = UniFich48;


              }
              if (Operacion2 == OpFic49) {
                tiempEstan2 = estan49 * cantidadElabo;

                Unidad2 = UniFich49;


              }
              if (Operacion2 == OpFic50) {
                tiempEstan2 = estan50 * cantidadElabo;

                Unidad2 = UniFich50;


              }
              //-----------------------------------3---------------------------------------
              if (Operacion3 == OpFic1) {
                tiempEstan3 = estan1 * cantidadElabo;
                Unidad3 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion3 == OpFic2) {
                tiempEstan3 = estan2 * cantidadElabo;

                Unidad3 = UniFich2;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion3 == OpFic3) {
                tiempEstan3 = estan3 * cantidadElabo;

                Unidad3 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion3 == OpFic4) {
                tiempEstan3 = estan4 * cantidadElabo;

                Unidad3 = UniFich4;


              }
              if (Operacion3 == OpFic5) {
                tiempEstan3 = estan5 * cantidadElabo;

                Unidad3 = UniFich5;


              }
              if (Operacion3 == OpFic6) {
                tiempEstan3 = estan6 * cantidadElabo;

                Unidad3 = UniFich6;


              }
              if (Operacion3 == OpFic7) {
                tiempEstan3 = estan7 * cantidadElabo;

                Unidad3 = UniFich7;

              }
              if (Operacion3 == OpFic8) {
                tiempEstan3 = estan8 * cantidadElabo;

                Unidad3 = UniFich8;


              }
              if (Operacion3 == OpFic9) {
                tiempEstan3 = estan9 * cantidadElabo;

                Unidad3 = UniFich9;


              }
              if (Operacion3 == OpFic10) {
                tiempEstan3 = estan10 * cantidadElabo;

                Unidad3 = UniFich10;

              }
              if (Operacion3 == OpFic11) {
                tiempEstan3 = estan11 * cantidadElabo;

                Unidad3 = UniFich11;


              }
              if (Operacion3 == OpFic12) {
                tiempEstan3 = estan12 * cantidadElabo;

                Unidad3 = UniFich12;


              }
              if (Operacion3 == OpFic13) {
                tiempEstan3 = estan13 * cantidadElabo;

                Unidad3 = UniFich13;


              }
              if (Operacion3 == OpFic14) {
                tiempEstan3 = estan14 * cantidadElabo;

                Unidad3 = UniFich14;


              }
              if (Operacion3 == OpFic15) {
                tiempEstan3 = estan15 * cantidadElabo;

                Unidad3 = UniFich15;

              }
              if (Operacion3 == OpFic16) {
                tiempEstan3 = estan16 * cantidadElabo;

                Unidad3 = UniFich16;


              }
              if (Operacion3 == OpFic17) {
                tiempEstan3 = estan17 * cantidadElabo;

                Unidad3 = UniFich17;


              }
              if (Operacion3 == OpFic18) {
                tiempEstan3 = estan18 * cantidadElabo;

                Unidad3 = UniFich18;

              }
              if (Operacion3 == OpFic19) {
                tiempEstan3 = estan19 * cantidadElabo;

                Unidad3 = UniFich19;


              }
              if (Operacion3 == OpFic20) {
                tiempEstan3 = estan20 * cantidadElabo;

                Unidad3 = UniFich20;


              }
              if (Operacion3 == OpFic21) {
                tiempEstan3 = estan21 * cantidadElabo;

                Unidad3 = UniFich21;


              }
              if (Operacion3 == OpFic22) {
                tiempEstan3 = estan22 * cantidadElabo;

                Unidad3 = UniFich22;


              }
              if (Operacion3 == OpFic23) {
                tiempEstan3 = estan23 * cantidadElabo;

                Unidad3 = UniFich23;


              }
              if (Operacion3 == OpFic24) {
                tiempEstan3 = estan24 * cantidadElabo;

                Unidad3 = UniFich24;

              }
              if (Operacion3 == OpFic25) {
                tiempEstan3 = estan25 * cantidadElabo;

                Unidad3 = UniFich25;


              }
              if (Operacion3 == OpFic26) {
                tiempEstan3 = estan26 * cantidadElabo;

                Unidad3 = UniFich26;


              }
              if (Operacion3 == OpFic27) {
                tiempEstan3 = estan27 * cantidadElabo;

                Unidad3 = UniFich27;


              }
              if (Operacion3 == OpFic28) {
                tiempEstan3 = estan28 * cantidadElabo;

                Unidad3 = UniFich28;


              }
              if (Operacion3 == OpFic29) {
                tiempEstan3 = estan29 * cantidadElabo;

                Unidad3 = UniFich29;


              }
              if (Operacion3 == OpFic30) {
                tiempEstan3 = estan30 * cantidadElabo;

                Unidad3 = UniFich30;


              }

              if (Operacion3 == OpFic31) {
                tiempEstan3 = estan31 * cantidadElabo;

                Unidad3 = UniFich31;


              }
              if (Operacion3 == OpFic32) {
                tiempEstan3 = estan32 * cantidadElabo;

                Unidad3 = UniFich32;

              }
              if (Operacion3 == OpFic33) {
                tiempEstan3 = estan33 * cantidadElabo;

                Unidad3 = UniFich33;

              }
              if (Operacion3 == OpFic34) {
                tiempEstan3 = estan34 * cantidadElabo;

                Unidad3 = UniFich34;

              }
              if (Operacion3 == OpFic35) {
                tiempEstan3 = estan35 * cantidadElabo;

                Unidad3 = UniFich35;


              }
              if (Operacion3 == OpFic36) {
                tiempEstan3 = estan36 * cantidadElabo;

                Unidad3 = UniFich36;


              }
              if (Operacion3 == OpFic37) {
                tiempEstan3 = estan37 * cantidadElabo;

                Unidad3 = UniFich37;

              }
              if (Operacion3 == OpFic38) {
                tiempEstan3 = estan38 * cantidadElabo;

                Unidad3 = UniFich38;

              }
              if (Operacion3 == OpFic39) {
                tiempEstan3 = estan39 * cantidadElabo;

                Unidad3 = UniFich39;


              }
              if (Operacion3 == OpFic40) {
                tiempEstan3 = estan40 * cantidadElabo;

                Unidad3 = UniFich40;


              }
              if (Operacion3 == OpFic41) {
                tiempEstan3 = estan41 * cantidadElabo;

                Unidad3 = UniFich41;


              }
              if (Operacion3 == OpFic42) {
                tiempEstan3 = estan42 * cantidadElabo;

                Unidad3 = UniFich42;


              }
              if (Operacion3 == OpFic43) {
                tiempEstan3 = estan43 * cantidadElabo;

                Unidad3 = UniFich43;


              }
              if (Operacion3 == OpFic44) {
                tiempEstan3 = estan44 * cantidadElabo;

                Unidad3 = UniFich44;


              }
              if (Operacion3 == OpFic45) {
                tiempEstan3 = estan45 * cantidadElabo;

                Unidad3 = UniFich45;

              }
              if (Operacion3 == OpFic46) {
                tiempEstan3 = estan46 * cantidadElabo;

                Unidad3 = UniFich46;

              }
              if (Operacion3 == OpFic47) {
                tiempEstan3 = estan47 * cantidadElabo;

                Unidad3 = UniFich47;


              }
              if (Operacion3 == OpFic48) {
                tiempEstan3 = estan48 * cantidadElabo;

                Unidad3 = UniFich48;


              }
              if (Operacion3 == OpFic49) {
                tiempEstan3 = estan49 * cantidadElabo;

                Unidad3 = UniFich49;


              }
              if (Operacion3 == OpFic50) {
                tiempEstan3 = estan50 * cantidadElabo;

                Unidad3 = UniFich50;


              }

              //----------------------------------------------4-----------------------------------------

              if (Operacion4 == OpFic1) {
                tiempEstan4 = estan1 * cantidadElabo;
                Unidad4 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion4 == OpFic2) {
                tiempEstan4 = estan2 * cantidadElabo;

                Unidad4 = UniFich2;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion4 == OpFic3) {
                tiempEstan4 = estan3 * cantidadElabo;

                Unidad4 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion4 == OpFic4) {
                tiempEstan4 = estan4 * cantidadElabo;

                Unidad4 = UniFich4;


              }
              if (Operacion4 == OpFic5) {
                tiempEstan4 = estan5 * cantidadElabo;

                Unidad4 = UniFich5;


              }
              if (Operacion4 == OpFic6) {
                tiempEstan4 = estan6 * cantidadElabo;

                Unidad4 = UniFich6;


              }
              if (Operacion4 == OpFic7) {
                tiempEstan4 = estan7 * cantidadElabo;

                Unidad4 = UniFich7;

              }
              if (Operacion4 == OpFic8) {
                tiempEstan4 = estan8 * cantidadElabo;

                Unidad4 = UniFich8;


              }
              if (Operacion4 == OpFic9) {
                tiempEstan4 = estan9 * cantidadElabo;

                Unidad4 = UniFich9;


              }
              if (Operacion4 == OpFic10) {
                tiempEstan4 = estan10 * cantidadElabo;

                Unidad4 = UniFich10;

              }
              if (Operacion4 == OpFic11) {
                tiempEstan4 = estan11 * cantidadElabo;

                Unidad4 = UniFich11;


              }
              if (Operacion4 == OpFic12) {
                tiempEstan4 = estan12 * cantidadElabo;

                Unidad4 = UniFich12;


              }
              if (Operacion4 == OpFic13) {
                tiempEstan4 = estan13 * cantidadElabo;

                Unidad4 = UniFich13;


              }
              if (Operacion4 == OpFic14) {
                tiempEstan4 = estan14 * cantidadElabo;

                Unidad4 = UniFich14;


              }
              if (Operacion4 == OpFic15) {
                tiempEstan4 = estan15 * cantidadElabo;

                Unidad4 = UniFich15;

              }
              if (Operacion4 == OpFic16) {
                tiempEstan4 = estan16 * cantidadElabo;

                Unidad4 = UniFich16;


              }
              if (Operacion4 == OpFic17) {
                tiempEstan4 = estan17 * cantidadElabo;

                Unidad4 = UniFich17;


              }
              if (Operacion4 == OpFic18) {
                tiempEstan4 = estan18 * cantidadElabo;

                Unidad4 = UniFich18;

              }
              if (Operacion4 == OpFic19) {
                tiempEstan4 = estan19 * cantidadElabo;

                Unidad4 = UniFich19;


              }
              if (Operacion4 == OpFic20) {
                tiempEstan4 = estan20 * cantidadElabo;

                Unidad4 = UniFich20;


              }
              if (Operacion4 == OpFic21) {
                tiempEstan4 = estan21 * cantidadElabo;

                Unidad4 = UniFich21;


              }
              if (Operacion4 == OpFic22) {
                tiempEstan4 = estan22 * cantidadElabo;

                Unidad4 = UniFich22;


              }
              if (Operacion4 == OpFic23) {
                tiempEstan4 = estan23 * cantidadElabo;

                Unidad4 = UniFich23;


              }
              if (Operacion4 == OpFic24) {
                tiempEstan4 = estan24 * cantidadElabo;

                Unidad4 = UniFich24;

              }
              if (Operacion4 == OpFic25) {
                tiempEstan4 = estan25 * cantidadElabo;

                Unidad4 = UniFich25;


              }
              if (Operacion4 == OpFic26) {
                tiempEstan4 = estan26 * cantidadElabo;

                Unidad4 = UniFich26;


              }
              if (Operacion4 == OpFic27) {
                tiempEstan4 = estan27 * cantidadElabo;

                Unidad4 = UniFich27;


              }
              if (Operacion4 == OpFic28) {
                tiempEstan4 = estan28 * cantidadElabo;

                Unidad4 = UniFich28;


              }
              if (Operacion4 == OpFic29) {
                tiempEstan4 = estan29 * cantidadElabo;

                Unidad4 = UniFich29;


              }
              if (Operacion4 == OpFic30) {
                tiempEstan4 = estan30 * cantidadElabo;

                Unidad4 = UniFich30;


              }

              if (Operacion4 == OpFic31) {
                tiempEstan4 = estan31 * cantidadElabo;

                Unidad4 = UniFich31;


              }
              if (Operacion4 == OpFic32) {
                tiempEstan4 = estan32 * cantidadElabo;

                Unidad4 = UniFich32;

              }
              if (Operacion4 == OpFic33) {
                tiempEstan4 = estan33 * cantidadElabo;

                Unidad4 = UniFich33;

              }
              if (Operacion4 == OpFic34) {
                tiempEstan4 = estan34 * cantidadElabo;

                Unidad4 = UniFich34;

              }
              if (Operacion4 == OpFic35) {
                tiempEstan4 = estan35 * cantidadElabo;

                Unidad4 = UniFich35;


              }
              if (Operacion4 == OpFic36) {
                tiempEstan4 = estan36 * cantidadElabo;

                Unidad4 = UniFich36;


              }
              if (Operacion4 == OpFic37) {
                tiempEstan4 = estan37 * cantidadElabo;

                Unidad4 = UniFich37;

              }
              if (Operacion4 == OpFic38) {
                tiempEstan4 = estan38 * cantidadElabo;

                Unidad4 = UniFich38;

              }
              if (Operacion4 == OpFic39) {
                tiempEstan4 = estan39 * cantidadElabo;

                Unidad4 = UniFich39;


              }
              if (Operacion4 == OpFic40) {
                tiempEstan4 = estan40 * cantidadElabo;

                Unidad4 = UniFich40;


              }
              if (Operacion4 == OpFic41) {
                tiempEstan4 = estan41 * cantidadElabo;

                Unidad4 = UniFich41;


              }
              if (Operacion4 == OpFic42) {
                tiempEstan4 = estan42 * cantidadElabo;

                Unidad4 = UniFich42;


              }
              if (Operacion4 == OpFic43) {
                tiempEstan4 = estan43 * cantidadElabo;

                Unidad4 = UniFich43;


              }
              if (Operacion4 == OpFic44) {
                tiempEstan4 = estan44 * cantidadElabo;

                Unidad4 = UniFich44;


              }
              if (Operacion4 == OpFic45) {
                tiempEstan4 = estan45 * cantidadElabo;

                Unidad4 = UniFich45;

              }
              if (Operacion4 == OpFic46) {
                tiempEstan4 = estan46 * cantidadElabo;

                Unidad4 = UniFich46;

              }
              if (Operacion4 == OpFic47) {
                tiempEstan4 = estan47 * cantidadElabo;

                Unidad4 = UniFich47;


              }
              if (Operacion4 == OpFic48) {
                tiempEstan4 = estan48 * cantidadElabo;

                Unidad4 = UniFich48;


              }
              if (Operacion4 == OpFic49) {
                tiempEstan4 = estan49 * cantidadElabo;

                Unidad4 = UniFich49;


              }
              if (Operacion4 == OpFic50) {
                tiempEstan4 = estan50 * cantidadElabo;

                Unidad4 = UniFich50;


              }

              //-------------------------------------------------5---------------------------------
              if (Operacion5 == OpFic1) {
                tiempEstan5 = estan1 * cantidadElabo;
                Unidad5 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion5 == OpFic2) {
                tiempEstan5 = estan2 * cantidadElabo;

                Unidad5 = UniFich2 * cantidadElabo;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion5 == OpFic3) {
                tiempEstan5 = estan3 * cantidadElabo;

                Unidad5 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion5 == OpFic4) {
                tiempEstan5 = estan4 * cantidadElabo;

                Unidad5 = UniFich4;


              }
              if (Operacion5 == OpFic5) {
                tiempEstan5 = estan5 * cantidadElabo;

                Unidad5 = UniFich5;


              }
              if (Operacion5 == OpFic6) {
                tiempEstan5 = estan6 * cantidadElabo;

                Unidad5 = UniFich6;


              }
              if (Operacion5 == OpFic7) {
                tiempEstan5 = estan7 * cantidadElabo;

                Unidad5 = UniFich7;

              }
              if (Operacion5 == OpFic8) {
                tiempEstan5 = estan8 * cantidadElabo;

                Unidad5 = UniFich8;


              }
              if (Operacion5 == OpFic9) {
                tiempEstan5 = estan9 * cantidadElabo;

                Unidad5 = UniFich9;


              }
              if (Operacion5 == OpFic10) {
                tiempEstan5 = estan10 * cantidadElabo;

                Unidad5 = UniFich10;

              }
              if (Operacion5 == OpFic11) {
                tiempEstan5 = estan11 * cantidadElabo;

                Unidad5 = UniFich11;


              }
              if (Operacion5 == OpFic12) {
                tiempEstan5 = estan12 * cantidadElabo;

                Unidad5 = UniFich12;


              }
              if (Operacion5 == OpFic13) {
                tiempEstan5 = estan13 * cantidadElabo;

                Unidad5 = UniFich13;


              }
              if (Operacion5 == OpFic14) {
                tiempEstan5 = estan14 * cantidadElabo;

                Unidad5 = UniFich14;


              }
              if (Operacion5 == OpFic15) {
                tiempEstan5 = estan15 * cantidadElabo;

                Unidad5 = UniFich15;

              }
              if (Operacion5 == OpFic16) {
                tiempEstan5 = estan16 * cantidadElabo;

                Unidad5 = UniFich16;


              }
              if (Operacion5 == OpFic17) {
                tiempEstan5 = estan17 * cantidadElabo;

                Unidad5 = UniFich17;


              }
              if (Operacion5 == OpFic18) {
                tiempEstan5 = estan18 * cantidadElabo;

                Unidad5 = UniFich18;

              }
              if (Operacion5 == OpFic19) {
                tiempEstan5 = estan19 * cantidadElabo;

                Unidad5 = UniFich19;


              }
              if (Operacion5 == OpFic20) {
                tiempEstan5 = estan20 * cantidadElabo;

                Unidad5 = UniFich20;


              }
              if (Operacion5 == OpFic21) {
                tiempEstan5 = estan21 * cantidadElabo;

                Unidad5 = UniFich21;


              }
              if (Operacion5 == OpFic22) {
                tiempEstan5 = estan22 * cantidadElabo;

                Unidad5 = UniFich22;


              }
              if (Operacion5 == OpFic23) {
                tiempEstan5 = estan23 * cantidadElabo;

                Unidad5 = UniFich23;


              }
              if (Operacion5 == OpFic24) {
                tiempEstan5 = estan24 * cantidadElabo;

                Unidad5 = UniFich24;

              }
              if (Operacion5 == OpFic25) {
                tiempEstan5 = estan25 * cantidadElabo;

                Unidad5 = UniFich25;


              }
              if (Operacion5 == OpFic26) {
                tiempEstan5 = estan26 * cantidadElabo;

                Unidad5 = UniFich26;


              }
              if (Operacion5 == OpFic27) {
                tiempEstan5 = estan27 * cantidadElabo;

                Unidad5 = UniFich27;


              }
              if (Operacion5 == OpFic28) {
                tiempEstan5 = estan28 * cantidadElabo;

                Unidad5 = UniFich28;


              }
              if (Operacion5 == OpFic29) {
                tiempEstan5 = estan29 * cantidadElabo;

                Unidad5 = UniFich29;


              }
              if (Operacion5 == OpFic30) {
                tiempEstan5 = estan30 * cantidadElabo;

                Unidad5 = UniFich30;


              }

              if (Operacion5 == OpFic31) {
                tiempEstan5 = estan31 * cantidadElabo;

                Unidad5 = UniFich31;


              }
              if (Operacion5 == OpFic32) {
                tiempEstan5 = estan32 * cantidadElabo;

                Unidad5 = UniFich32;

              }
              if (Operacion5 == OpFic33) {
                tiempEstan5 = estan33 * cantidadElabo;

                Unidad5 = UniFich33;

              }
              if (Operacion5 == OpFic34) {
                tiempEstan5 = estan34 * cantidadElabo;

                Unidad5 = UniFich34;

              }
              if (Operacion5 == OpFic35) {
                tiempEstan5 = estan35 * cantidadElabo;

                Unidad5 = UniFich35;


              }
              if (Operacion5 == OpFic36) {
                tiempEstan5 = estan36 * cantidadElabo;

                Unidad5 = UniFich36;


              }
              if (Operacion5 == OpFic37) {
                tiempEstan5 = estan37 * cantidadElabo;

                Unidad5 = UniFich37;

              }
              if (Operacion5 == OpFic38) {
                tiempEstan5 = estan38 * cantidadElabo;

                Unidad5 = UniFich38;

              }
              if (Operacion5 == OpFic39) {
                tiempEstan5 = estan39 * cantidadElabo;

                Unidad5 = UniFich39;


              }
              if (Operacion5 == OpFic40) {
                tiempEstan5 = estan40 * cantidadElabo;

                Unidad5 = UniFich40;


              }
              if (Operacion5 == OpFic41) {
                tiempEstan5 = estan41 * cantidadElabo;

                Unidad5 = UniFich41;


              }
              if (Operacion5 == OpFic42) {
                tiempEstan5 = estan42 * cantidadElabo;

                Unidad5 = UniFich42;


              }
              if (Operacion5 == OpFic43) {
                tiempEstan5 = estan43 * cantidadElabo;

                Unidad5 = UniFich43;


              }
              if (Operacion5 == OpFic44) {
                tiempEstan5 = estan44 * cantidadElabo;

                Unidad5 = UniFich44;


              }
              if (Operacion5 == OpFic45) {
                tiempEstan5 = estan45 * cantidadElabo;

                Unidad5 = UniFich45;

              }
              if (Operacion5 == OpFic46) {
                tiempEstan5 = estan46 * cantidadElabo;

                Unidad5 = UniFich46;

              }
              if (Operacion5 == OpFic47) {
                tiempEstan5 = estan47 * cantidadElabo;

                Unidad5 = UniFich47;


              }
              if (Operacion5 == OpFic48) {
                tiempEstan5 = estan48 * cantidadElabo;

                Unidad5 = UniFich48;


              }
              if (Operacion5 == OpFic49) {
                tiempEstan5 = estan49 * cantidadElabo;

                Unidad5 = UniFich49;


              }
              if (Operacion5 == OpFic50) {
                tiempEstan5 = estan50 * cantidadElabo;

                Unidad5 = UniFich50;


              }
              //---------------------------------------condicion 6---------------------

              if (Operacion6 == OpFic1) {
                tiempEstan6 = estan1;
                Unidad6 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion6 == OpFic2) {
                tiempEstan6 = estan2;

                Unidad6 = UniFich2;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion6 == OpFic3) {
                tiempEstan6 = estan3;

                Unidad6 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion6 == OpFic4) {
                tiempEstan6 = estan4;

                Unidad6 = UniFich4;


              }
              if (Operacion6 == OpFic5) {
                tiempEstan6 = estan5;

                Unidad6 = UniFich5;


              }
              if (Operacion6 == OpFic6) {
                tiempEstan6 = estan6;

                Unidad6 = UniFich6;


              }
              if (Operacion6 == OpFic7) {
                tiempEstan6 = estan7;

                Unidad6 = UniFich7;

              }
              if (Operacion6 == OpFic8) {
                tiempEstan6 = estan8;

                Unidad6 = UniFich8;


              }
              if (Operacion6 == OpFic9) {
                tiempEstan6 = estan9;

                Unidad6 = UniFich9;


              }
              if (Operacion6 == OpFic10) {
                tiempEstan6 = estan10;

                Unidad6 = UniFich10;

              }
              if (Operacion6 == OpFic11) {
                tiempEstan6 = estan11;

                Unidad6 = UniFich11;


              }
              if (Operacion6 == OpFic12) {
                tiempEstan6 = estan12;

                Unidad6 = UniFich12;


              }
              if (Operacion6 == OpFic13) {
                tiempEstan6 = estan13;

                Unidad6 = UniFich13;


              }
              if (Operacion6 == OpFic14) {
                tiempEstan6 = estan14;

                Unidad6 = UniFich14;



              }
              if (Operacion6 == OpFic15) {
                tiempEstan6 = estan15;

                Unidad6 = UniFich15;

              }
              if (Operacion6 == OpFic16) {
                tiempEstan6 = estan16;

                Unidad6 = UniFich16;


              }
              if (Operacion6 == OpFic17) {
                tiempEstan6 = estan17;

                Unidad6 = UniFich17;


              }
              if (Operacion6 == OpFic18) {
                tiempEstan6 = estan18;

                Unidad6 = UniFich18;

              }
              if (Operacion6 == OpFic19) {
                tiempEstan6 = estan19;

                Unidad6 = UniFich19;


              }
              if (Operacion6 == OpFic20) {
                tiempEstan6 = estan20;

                Unidad6 = UniFich20;


              }
              if (Operacion6 == OpFic21) {
                tiempEstan6 = estan21;

                Unidad6 = UniFich21;


              }
              if (Operacion6 == OpFic22) {
                tiempEstan6 = estan22;

                Unidad6 = UniFich22;


              }
              if (Operacion6 == OpFic23) {
                tiempEstan6 = estan23;

                Unidad6 = UniFich23;


              }
              if (Operacion6 == OpFic24) {
                tiempEstan6 = estan24;

                Unidad6 = UniFich24;

              }
              if (Operacion6 == OpFic25) {
                tiempEstan6 = estan25;

                Unidad6 = UniFich25;


              }
              if (Operacion6 == OpFic26) {
                tiempEstan6 = estan26;

                Unidad6 = UniFich26;



              }
              if (Operacion6 == OpFic27) {
                tiempEstan6 = estan27;

                Unidad6 = UniFich27;


              }
              if (Operacion6 == OpFic28) {
                tiempEstan6 = estan28;

                Unidad6 = UniFich28;


              }
              if (Operacion6 == OpFic29) {
                tiempEstan6 = estan29;

                Unidad6 = UniFich29;


              }
              if (Operacion6 == OpFic30) {
                tiempEstan6 = estan30;

                Unidad6 = UniFich30;


              }

              if (Operacion6 == OpFic31) {
                tiempEstan6 = estan31;

                Unidad6 = UniFich31;


              }
              if (Operacion6 == OpFic32) {
                tiempEstan6 = estan32;

                Unidad6 = UniFich32;

              }
              if (Operacion6 == OpFic33) {
                tiempEstan6 = estan33;

                Unidad6 = UniFich33;

              }
              if (Operacion6 == OpFic34) {
                tiempEstan6 = estan34;

                Unidad6 = UniFich34;

              }
              if (Operacion6 == OpFic35) {
                tiempEstan6 = estan35;

                Unidad6 = UniFich35;


              }
              if (Operacion6 == OpFic36) {
                tiempEstan6 = estan36;

                Unidad6 = UniFich36;


              }
              if (Operacion6 == OpFic37) {
                tiempEstan6 = estan37;

                Unidad6 = UniFich37;

              }
              if (Operacion6 == OpFic38) {
                tiempEstan6 = estan38;

                Unidad6 = UniFich38;

              }
              if (Operacion6 == OpFic39) {
                tiempEstan6 = estan39;

                Unidad6 = UniFich39;


              }
              if (Operacion6 == OpFic40) {
                tiempEstan6 = estan40;

                Unidad6 = UniFich40;


              }
              if (Operacion6 == OpFic41) {
                tiempEstan6 = estan41;

                Unidad6 = UniFich41;


              }
              if (Operacion6 == OpFic42) {
                tiempEstan6 = estan42;

                Unidad6 = UniFich42;


              }
              if (Operacion6 == OpFic43) {
                tiempEstan6 = estan43;

                Unidad6 = UniFich43;


              }
              if (Operacion6 == OpFic44) {
                tiempEstan6 = estan44;

                Unidad6 = UniFich44;


              }
              if (Operacion6 == OpFic45) {
                tiempEstan6 = estan45;

                Unidad6 = UniFich45;

              }
              if (Operacion6 == OpFic46) {
                tiempEstan6 = estan46;

                Unidad6 = UniFich46;

              }
              if (Operacion6 == OpFic47) {
                tiempEstan6 = estan47;

                Unidad6 = UniFich47;


              }
              if (Operacion6 == OpFic48) {
                tiempEstan6 = estan48;

                Unidad6 = UniFich48;


              }
              if (Operacion6 == OpFic49) {
                tiempEstan6 = estan49;

                Unidad6 = UniFich49;


              }
              if (Operacion6 == OpFic50) {
                tiempEstan6 = estan50;

                Unidad6 = UniFich50;


              }
              //---------------------------------------condicion 7---------------------

              if (Operacion7 == OpFic1) {
                tiempEstan7 = estan1;
                Unidad7 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion7 == OpFic2) {
                tiempEstan7 = estan2;

                Unidad7 = UniFich2;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion7 == OpFic3) {
                tiempEstan7 = estan3;

                Unidad7 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion7 == OpFic4) {
                tiempEstan7 = estan4;

                Unidad7 = UniFich4;


              }
              if (Operacion7 == OpFic5) {
                tiempEstan7 = estan5;

                Unidad7 = UniFich5;


              }
              if (Operacion7 == OpFic6) {
                tiempEstan7 = estan6;

                Unidad7 = UniFich6;


              }
              if (Operacion7 == OpFic7) {
                tiempEstan7 = estan7;

                Unidad7 = UniFich7;

              }
              if (Operacion7 == OpFic8) {
                tiempEstan7 = estan8;

                Unidad7 = UniFich8;


              }
              if (Operacion7 == OpFic9) {
                tiempEstan7 = estan9;

                Unidad7 = UniFich9;


              }
              if (Operacion7 == OpFic10) {
                tiempEstan7 = estan10;

                Unidad7 = UniFich10;

              }
              if (Operacion7 == OpFic11) {
                tiempEstan7 = estan11;

                Unidad7 = UniFich11;


              }
              if (Operacion7 == OpFic12) {
                tiempEstan7 = estan12;

                Unidad7 = UniFich12;


              }
              if (Operacion7 == OpFic13) {
                tiempEstan7 = estan13;

                Unidad7 = UniFich13;


              }
              if (Operacion7 == OpFic14) {
                tiempEstan7 = estan14;

                Unidad7 = UniFich14;


              }
              if (Operacion7 == OpFic15) {
                tiempEstan7 = estan15;

                Unidad7 = UniFich15;

              }
              if (Operacion7 == OpFic16) {
                tiempEstan7 = estan16;

                Unidad7 = UniFich16;



              }
              if (Operacion7 == OpFic17) {
                tiempEstan7 = estan17;

                Unidad7 = UniFich17;


              }
              if (Operacion7 == OpFic18) {
                tiempEstan7 = estan18;

                Unidad7 = UniFich18;

              }
              if (Operacion7 == OpFic19) {
                tiempEstan7 = estan19;

                Unidad7 = UniFich19;


              }
              if (Operacion7 == OpFic20) {
                tiempEstan7 = estan20;

                Unidad7 = UniFich20;


              }
              if (Operacion7 == OpFic21) {
                tiempEstan7 = estan21;

                Unidad7 = UniFich21;


              }
              if (Operacion7 == OpFic22) {
                tiempEstan7 = estan22;

                Unidad7 = UniFich22;


              }
              if (Operacion7 == OpFic23) {
                tiempEstan7 = estan23;

                Unidad7 = UniFich23;


              }
              if (Operacion7 == OpFic24) {
                tiempEstan7 = estan24;

                Unidad7 = UniFich24;

              }
              if (Operacion7 == OpFic25) {
                tiempEstan7 = estan25;

                Unidad7 = UniFich25;



              }
              if (Operacion7 == OpFic26) {
                tiempEstan7 = estan26;

                Unidad7 = UniFich26;


              }
              if (Operacion7 == OpFic27) {
                tiempEstan7 = estan27;

                Unidad7 = UniFich27;


              }
              if (Operacion7 == OpFic28) {
                tiempEstan7 = estan28;

                Unidad7 = UniFich28;


              }
              if (Operacion7 == OpFic29) {
                tiempEstan7 = estan29;

                Unidad7 = UniFich29;


              }
              if (Operacion7 == OpFic30) {
                tiempEstan7 = estan30;

                Unidad7 = UniFich30;


              }

              if (Operacion7 == OpFic31) {
                tiempEstan7 = estan31;

                Unidad7 = UniFich31;


              }
              if (Operacion7 == OpFic32) {
                tiempEstan7 = estan32;

                Unidad7 = UniFich32;

              }
              if (Operacion7 == OpFic33) {
                tiempEstan7 = estan33;

                Unidad7 = UniFich33;

              }
              if (Operacion7 == OpFic34) {
                tiempEstan7 = estan34;

                Unidad7 = UniFich34;

              }
              if (Operacion7 == OpFic35) {
                tiempEstan7 = estan35;

                Unidad7 = UniFich35;


              }
              if (Operacion7 == OpFic36) {
                tiempEstan7 = estan36;

                Unidad7 = UniFich36;


              }
              if (Operacion7 == OpFic37) {
                tiempEstan7 = estan37;

                Unidad7 = UniFich37;

              }
              if (Operacion7 == OpFic38) {
                tiempEstan7 = estan38;

                Unidad7 = UniFich38;

              }
              if (Operacion7 == OpFic39) {
                tiempEstan7 = estan39;

                Unidad7 = UniFich39;


              }
              if (Operacion7 == OpFic40) {
                tiempEstan7 = estan40;

                Unidad7 = UniFich40;


              }
              if (Operacion7 == OpFic41) {
                tiempEstan7 = estan41;

                Unidad7 = UniFich41;


              }
              if (Operacion7 == OpFic42) {
                tiempEstan7 = estan42;

                Unidad7 = UniFich42;


              }
              if (Operacion7 == OpFic43) {
                tiempEstan7 = estan43;

                Unidad7 = UniFich43;


              }
              if (Operacion7 == OpFic44) {
                tiempEstan7 = estan44;

                Unidad7 = UniFich44;


              }
              if (Operacion7 == OpFic45) {
                tiempEstan7 = estan45;

                Unidad7 = UniFich45;

              }
              if (Operacion7 == OpFic46) {
                tiempEstan7 = estan46;

                Unidad7 = UniFich46;

              }
              if (Operacion7 == OpFic47) {
                tiempEstan7 = estan47;

                Unidad7 = UniFich47;


              }
              if (Operacion7 == OpFic48) {
                tiempEstan7 = estan48;

                Unidad7 = UniFich48;


              }
              if (Operacion7 == OpFic49) {
                tiempEstan7 = estan49;

                Unidad7 = UniFich49;


              }
              if (Operacion7 == OpFic50) {
                tiempEstan7 = estan50;

                Unidad7 = UniFich50;


              }

              //---------------------------------------condicion 8---------------------

              if (Operacion8 == OpFic1) {
                tiempEstan8 = estan1;
                Unidad8 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion8 == OpFic2) {
                tiempEstan8 = estan2;

                Unidad8 = UniFich2;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion8 == OpFic3) {
                tiempEstan8 = estan3;

                Unidad8 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion8 == OpFic4) {
                tiempEstan8 = estan4;

                Unidad8 = UniFich4;


              }
              if (Operacion8 == OpFic5) {
                tiempEstan8 = estan5;

                Unidad8 = UniFich5;


              }
              if (Operacion8 == OpFic6) {
                tiempEstan8 = estan6;

                Unidad8 = UniFich6;


              }
              if (Operacion8 == OpFic7) {
                tiempEstan8 = estan7;

                Unidad8 = UniFich7;

              }
              if (Operacion8 == OpFic8) {
                tiempEstan8 = estan8;

                Unidad8 = UniFich8;


              }
              if (Operacion8 == OpFic9) {
                tiempEstan8 = estan9;

                Unidad8 = UniFich9;


              }
              if (Operacion8 == OpFic10) {
                tiempEstan8 = estan10;

                Unidad8 = UniFich10;


              }
              if (Operacion8 == OpFic11) {
                tiempEstan8 = estan11;

                Unidad8 = UniFich11;


              }
              if (Operacion8 == OpFic12) {
                tiempEstan8 = estan12;

                Unidad8 = UniFich12;


              }
              if (Operacion8 == OpFic13) {
                tiempEstan8 = estan13;

                Unidad8 = UniFich13;


              }
              if (Operacion8 == OpFic14) {
                tiempEstan8 = estan14;

                Unidad8 = UniFich14;


              }
              if (Operacion8 == OpFic15) {
                tiempEstan8 = estan15;

                Unidad8 = UniFich15;

              }
              if (Operacion8 == OpFic16) {
                tiempEstan8 = estan16;

                Unidad8 = UniFich16;


              }
              if (Operacion8 == OpFic17) {
                tiempEstan8 = estan17;

                Unidad8 = UniFich17;


              }
              if (Operacion8 == OpFic18) {
                tiempEstan8 = estan18;

                Unidad8 = UniFich18;

              }
              if (Operacion8 == OpFic19) {
                tiempEstan8 = estan19;

                Unidad8 = UniFich19;


              }
              if (Operacion8 == OpFic20) {
                tiempEstan8 = estan20;

                Unidad8 = UniFich20;


              }
              if (Operacion8 == OpFic21) {
                tiempEstan8 = estan21;

                Unidad8 = UniFich21;


              }
              if (Operacion8 == OpFic22) {
                tiempEstan8 = estan22;

                Unidad8 = UniFich22;


              }
              if (Operacion8 == OpFic23) {
                tiempEstan8 = estan23;

                Unidad8 = UniFich23;


              }
              if (Operacion8 == OpFic24) {
                tiempEstan8 = estan24;

                Unidad8 = UniFich24;

              }
              if (Operacion8 == OpFic25) {
                tiempEstan8 = estan25;

                Unidad8 = UniFich25;



              }
              if (Operacion8 == OpFic26) {
                tiempEstan8 = estan26;

                Unidad8 = UniFich26;


              }
              if (Operacion8 == OpFic27) {
                tiempEstan8 = estan27;

                Unidad8 = UniFich27;


              }
              if (Operacion8 == OpFic28) {
                tiempEstan8 = estan28;

                Unidad8 = UniFich28;


              }
              if (Operacion8 == OpFic29) {
                tiempEstan8 = estan29;

                Unidad8 = UniFich29;


              }
              if (Operacion8 == OpFic30) {
                tiempEstan8 = estan30;

                Unidad8 = UniFich30;


              }

              if (Operacion8 == OpFic31) {
                tiempEstan8 = estan31;

                Unidad8 = UniFich31;


              }
              if (Operacion8 == OpFic32) {
                tiempEstan8 = estan32;

                Unidad8 = UniFich32;

              }
              if (Operacion8 == OpFic33) {
                tiempEstan8 = estan33;

                Unidad8 = UniFich33;

              }
              if (Operacion8 == OpFic34) {
                tiempEstan8 = estan34;

                Unidad8 = UniFich34;

              }
              if (Operacion8 == OpFic35) {
                tiempEstan8 = estan35;

                Unidad8 = UniFich35;


              }
              if (Operacion8 == OpFic36) {
                tiempEstan8 = estan36;

                Unidad8 = UniFich36;


              }
              if (Operacion8 == OpFic37) {
                tiempEstan8 = estan37;

                Unidad8 = UniFich37;

              }
              if (Operacion8 == OpFic38) {
                tiempEstan8 = estan38;

                Unidad8 = UniFich38;

              }
              if (Operacion8 == OpFic39) {
                tiempEstan8 = estan39;

                Unidad8 = UniFich39;


              }
              if (Operacion8 == OpFic40) {
                tiempEstan8 = estan40;

                Unidad8 = UniFich40;


              }
              if (Operacion8 == OpFic41) {
                tiempEstan8 = estan41;

                Unidad8 = UniFich41;


              }
              if (Operacion8 == OpFic42) {
                tiempEstan8 = estan42;

                Unidad8 = UniFich42;


              }
              if (Operacion8 == OpFic43) {
                tiempEstan8 = estan43;

                Unidad8 = UniFich43;


              }
              if (Operacion8 == OpFic44) {
                tiempEstan8 = estan44;

                Unidad8 = UniFich44;


              }
              if (Operacion8 == OpFic45) {
                tiempEstan8 = estan45;

                Unidad8 = UniFich45;

              }
              if (Operacion8 == OpFic46) {
                tiempEstan8 = estan46;

                Unidad8 = UniFich46;

              }
              if (Operacion8 == OpFic47) {
                tiempEstan8 = estan47;

                Unidad8 = UniFich47;


              }
              if (Operacion8 == OpFic48) {
                tiempEstan8 = estan48;

                Unidad8 = UniFich48;


              }
              if (Operacion8 == OpFic49) {
                tiempEstan8 = estan49;

                Unidad8 = UniFich49;


              }
              if (Operacion8 == OpFic50) {
                tiempEstan8 = estan50;

                Unidad8 = UniFich50;


              }

              //---------------------------------------condicion 9---------------------

              if (Operacion9 == OpFic1) {
                tiempEstan9 = estan1;
                Unidad9 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion9 == OpFic2) {
                tiempEstan9 = estan2;

                Unidad9 = UniFich2;

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion9 == OpFic3) {
                tiempEstan9 = estan3;

                Unidad9 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion9 == OpFic4) {
                tiempEstan9 = estan4;

                Unidad9 = UniFich4;


              }
              if (Operacion9 == OpFic5) {
                tiempEstan9 = estan5;

                Unidad9 = UniFich5;


              }
              if (Operacion9 == OpFic6) {
                tiempEstan9 = estan6;

                Unidad9 = UniFich6;


              }
              if (Operacion9 == OpFic7) {
                tiempEstan9 = estan7;

                Unidad9 = UniFich7;

              }
              if (Operacion9 == OpFic8) {
                tiempEstan9 = estan8;

                Unidad9 = UniFich8;


              }
              if (Operacion9 == OpFic9) {
                tiempEstan9 = estan9;

                Unidad9 = UniFich9;


              }
              if (Operacion9 == OpFic10) {
                tiempEstan9 = estan10;

                Unidad9 = UniFich10;

              }
              if (Operacion9 == OpFic11) {
                tiempEstan9 = estan11;

                Unidad9 = UniFich11;



              }
              if (Operacion9 == OpFic12) {
                tiempEstan9 = estan12;

                Unidad9 = UniFich12;


              }
              if (Operacion9 == OpFic13) {
                tiempEstan9 = estan13;

                Unidad9 = UniFich13;


              }
              if (Operacion9 == OpFic14) {
                tiempEstan9 = estan14;

                Unidad9 = UniFich14;


              }
              if (Operacion9 == OpFic15) {
                tiempEstan9 = estan15;

                Unidad9 = UniFich15;

              }
              if (Operacion9 == OpFic16) {
                tiempEstan9 = estan16;

                Unidad9 = UniFich16;


              }
              if (Operacion9 == OpFic17) {
                tiempEstan9 = estan17;

                Unidad9 = UniFich17;


              }
              if (Operacion9 == OpFic18) {
                tiempEstan9 = estan18;

                Unidad9 = UniFich18;

              }
              if (Operacion9 == OpFic19) {
                tiempEstan9 = estan19;

                Unidad9 = UniFich19;


              }
              if (Operacion9 == OpFic20) {
                tiempEstan9 = estan20;

                Unidad9 = UniFich20;


              }
              if (Operacion9 == OpFic21) {
                tiempEstan9 = estan21;

                Unidad9 = UniFich21;


              }
              if (Operacion9 == OpFic22) {
                tiempEstan9 = estan22;

                Unidad9 = UniFich22;


              }
              if (Operacion9 == OpFic23) {
                tiempEstan9 = estan23;

                Unidad9 = UniFich23;


              }
              if (Operacion9 == OpFic24) {
                tiempEstan9 = estan24;

                Unidad9 = UniFich24;

              }
              if (Operacion9 == OpFic25) {
                tiempEstan9 = estan25;

                Unidad9 = UniFich25;


              }
              if (Operacion9 == OpFic26) {
                tiempEstan9 = estan26;

                Unidad9 = UniFich26;



              }
              if (Operacion9 == OpFic27) {
                tiempEstan9 = estan27;

                Unidad9 = UniFich27;


              }
              if (Operacion9 == OpFic28) {
                tiempEstan9 = estan28;

                Unidad9 = UniFich28;


              }
              if (Operacion9 == OpFic29) {
                tiempEstan9 = estan29;

                Unidad9 = UniFich29;


              }
              if (Operacion9 == OpFic30) {
                tiempEstan9 = estan30;

                Unidad9 = UniFich30;


              }

              if (Operacion9 == OpFic31) {
                tiempEstan9 = estan31;

                Unidad9 = UniFich31;


              }
              if (Operacion9 == OpFic32) {
                tiempEstan9 = estan32;

                Unidad9 = UniFich32;

              }
              if (Operacion9 == OpFic33) {
                tiempEstan9 = estan33;

                Unidad9 = UniFich33;

              }
              if (Operacion9 == OpFic34) {
                tiempEstan9 = estan34;

                Unidad9 = UniFich34;

              }
              if (Operacion9 == OpFic35) {
                tiempEstan9 = estan35;

                Unidad9 = UniFich35;


              }
              if (Operacion9 == OpFic36) {
                tiempEstan9 = estan36;

                Unidad9 = UniFich36;


              }
              if (Operacion9 == OpFic37) {
                tiempEstan9 = estan37;

                Unidad9 = UniFich37;

              }
              if (Operacion9 == OpFic38) {
                tiempEstan9 = estan38;

                Unidad9 = UniFich38;

              }
              if (Operacion9 == OpFic39) {
                tiempEstan9 = estan39;

                Unidad9 = UniFich39;


              }
              if (Operacion9 == OpFic40) {
                tiempEstan9 = estan40;

                Unidad9 = UniFich40;


              }
              if (Operacion9 == OpFic41) {
                tiempEstan9 = estan41;

                Unidad9 = UniFich41;


              }
              if (Operacion9 == OpFic42) {
                tiempEstan9 = estan42;

                Unidad9 = UniFich42;


              }
              if (Operacion9 == OpFic43) {
                tiempEstan9 = estan43;

                Unidad9 = UniFich43;


              }
              if (Operacion9 == OpFic44) {
                tiempEstan9 = estan44;

                Unidad9 = UniFich44;


              }
              if (Operacion9 == OpFic45) {
                tiempEstan9 = estan45;

                Unidad9 = UniFich45;

              }
              if (Operacion9 == OpFic46) {
                tiempEstan9 = estan46;

                Unidad9 = UniFich46;

              }
              if (Operacion9 == OpFic47) {
                tiempEstan9 = estan47;

                Unidad9 = UniFich47;


              }
              if (Operacion9 == OpFic48) {
                tiempEstan9 = estan48;

                Unidad9 = UniFich48;


              }
              if (Operacion9 == OpFic49) {
                tiempEstan9 = estan49;

                Unidad9 = UniFich49;


              }
              if (Operacion9 == OpFic50) {
                tiempEstan9 = estan50;

                Unidad9 = UniFich50;


              }

              //---------------------------------------------vacios-------------------------
              if (Operacion == "") {
                tiempEstan1 = 0;

                Unidad1 = 0;
              }
              if (Operacion2 == "") {
                tiempEstan2 = 0;

                Unidad2 = 0;
              }
              if (Operacion3 == "") {
                tiempEstan3 = 0;

                Unidad3 = 0;
              }
              if (Operacion4 == "") {
                tiempEstan4 = 0;

                Unidad4 = 0;
              }
              if (Operacion5 == "") {
                tiempEstan5 = 0;

                Unidad5 = 0;
              }
              if (Operacion6 == "") {
                tiempEstan6 = 0;

                Unidad6 = 0;
              }
              if (Operacion7 == "") {
                tiempEstan7 = 0;

                Unidad7 = 0;
              }
              if (Operacion8 == "") {
                tiempEstan8 = 0;

                Unidad8 = 0;
              }
              if (Operacion9 == "") {
                tiempEstan9 = 0;

                Unidad9 = 0;
              }


              //..................................................PAUSAS..........................
              var isChecked = document.getElementById('cbComida').checked;
              if (isChecked) {
                comida = 900;
              }
              var isChecked2 = document.getElementById('cbTinto').checked;
              if (isChecked2) {
                tinto = 480;
              }
              var isChecked3 = document.getElementById('cbTinto2').checked;
              if (isChecked3) {
                tinto2 = 180;
              }





              //---------------------------calculo porcentaje-----------------------------
              TiempoStdTotal = ((tiempEstan1 / cantidadElabo) + (tiempEstan2 / cantidadElabo) + (tiempEstan3 / cantidadElabo)
                + (tiempEstan4 / cantidadElabo) + (tiempEstan5 / cantidadElabo) + tiempEstan6 + tiempEstan7 + tiempEstan8 + tiempEstan9);
              unidadSTD = parseInt(Unidad1 + Unidad2 + Unidad3 + Unidad4 + Unidad5);

              rela = TiempoStdTotal * cantidadElabo;

              //Rendi=(TiempoStdTotal*100)/(tiemTrabajado-comi-tin);
              Rendi = ((rela * 100) / (tiemTrabajado - comida - tinto - tinto2)) / numeroPalabras;

              TiempoTrabajaSin = tiemTrabajado - comida - tinto - tinto2;



              alert("el resultado es_" + TiempoTrabajaSin);


            });


          });//aquiiiiiii

      })
    });




  // alert("Consulta exitosa!!!");
  Swal.fire(
    'Consulta exitoso!!!',
    'Haz Consultado exitosamente la información',
    'success'
  )

}

//---------------------------subir foto----------------------------------------------------

foto = function () {

  var consulta = document.getElementById("op").value;

  db.collection("OrdenProduccion").where("OrdenP", "==", consulta).onSnapshot((querySnapshot) => {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      numeOpCamisa = `${doc.data().OrdenP}`;
      clienCamisa = `${doc.data().Cliente}`;
      refCamisa = `${doc.data().Referenc}`;



      db.collection("FotosCamisas").where("Referencia", "==", refCamisa).where("Cliente", "==", clienCamisa)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            urlCamisa = `${doc.data().UrlFrente}`;

            grande = document.getElementById("imagenFrente");

            grande.src = urlCamisa;







          });
        })



    });
  })



}

//------------------------------------sumar cantidades------------------------------------

sumaCanti = function () {
  var canti = document.getElementById("canti").value;
  Sumatoria = 0;


}
//------------------------------------------tabla--------------------------------------------
window.onload = function () {


  // consultaref="";
  var tabl = document.getElementById("tabla");

  db.collection("OrdenProduccion").where("Estado", "==", "En Proceso").orderBy("OrdenP", "desc").onSnapshot((querySnapshot) => {
    tabl.innerHTML = "";
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      consultaref = `${doc.data().Referenc}`;
      consulEstado = `${doc.data().Estado}`;



      tabl.innerHTML += `
                   <tr>
               <th scope="row">${doc.data().OrdenP}</th>
               <td>${doc.data().Referenc}</td>
               <td>${doc.data().Tipo2}</td>



              
               </tr>

          
          
          `




    });
  })



  Codigo2 = "";
  Codigo3 = "";
  Codigo4 = "";
  Codigo5 = "";
  Codigo6 = "";
  Codigo7 = "";
  Codigo8 = "";
  Codigo9 = "";
  Codigo10 = "";
  Codigo11 = "";
  Codigo12 = "";
  Codigo13 = "";
  Codigo14 = "";
  Codigo15 = "";
  Codigo16 = "";
  Codigo17 = "";
  Codigo18 = "";
  Codigo19 = "";
  Codigo20 = "";
  Codigo21 = "";
  Codigo22 = "";
  Codigo23 = "";
  Codigo24 = "";
  Codigo25 = "";
  Codigo26 = "";
  Codigo27 = "";
  Codigo28 = "";
  Codigo29 = "";
  Codigo30 = "";
  Codigo31 = "";
  Codigo32 = "";
  Codigo33 = "";
  Codigo34 = "";
  Codigo35 = "";
  Codigo36 = "";
  Codigo37 = "";
  Codigo38 = "";
  Codigo39 = "";
  Codigo40 = "";
  Codigo41 = "";
  Codigo42 = "";
  Codigo43 = "";
  Codigo44 = "";
  Codigo45 = "";
  Codigo46 = "";
  Codigo47 = "";
  Codigo48 = "";
  Codigo49 = "";
  Codigo50 = "";





  var tabl2 = document.getElementById("tablaOperaciones");

  db.collection("FichaTecniGlobal").where("Estado", "==", "En Proceso").orderBy("Referencia", "asc").onSnapshot((querySnapshot) => {
    tabl2.innerHTML = "";
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      codi = `${doc.data().Codigo}`;


      codi2 = `${doc.data().Codigo2}`;
      codi3 = `${doc.data().Codigo3}`;
      codi4 = `${doc.data().Codigo4}`;
      codi5 = `${doc.data().Codigo5}`;
      codi6 = `${doc.data().Codigo6}`;
      codi7 = `${doc.data().Codigo7}`;
      codi8 = `${doc.data().Codigo8}`;
      codi9 = `${doc.data().Codigo9}`;
      codi10 = `${doc.data().Codigo10}`;
      codi11 = `${doc.data().Codigo11}`;
      codi12 = `${doc.data().Codigo12}`;
      codi13 = `${doc.data().Codigo13}`;
      codi14 = `${doc.data().Codigo14}`;
      codi15 = `${doc.data().Codigo15}`;
      codi16 = `${doc.data().Codigo16}`;
      codi17 = `${doc.data().Codigo17}`;
      codi18 = `${doc.data().Codigo18}`;
      codi19 = `${doc.data().Codigo19}`;
      codi20 = `${doc.data().Codigo20}`;
      codi21 = `${doc.data().Codigo21}`;
      codi22 = `${doc.data().Codigo22}`;
      codi23 = `${doc.data().Codigo23}`;
      codi24 = `${doc.data().Codigo24}`;
      codi25 = `${doc.data().Codigo25}`;
      codi26 = `${doc.data().Codigo26}`;
      codi27 = `${doc.data().Codigo27}`;
      codi28 = `${doc.data().Codigo28}`;
      codi29 = `${doc.data().Codigo29}`;
      codi30 = `${doc.data().Codigo30}`;
      codi31 = `${doc.data().Codigo31}`;
      codi32 = `${doc.data().Codigo32}`;
      codi33 = `${doc.data().Codigo33}`;
      codi34 = `${doc.data().Codigo34}`;
      codi35 = `${doc.data().Codigo35}`;
      codi36 = `${doc.data().Codigo36}`;
      codi37 = `${doc.data().Codigo37}`;
      codi38 = `${doc.data().Codigo38}`;
      codi39 = `${doc.data().Codigo39}`;
      codi40 = `${doc.data().Codigo40}`;
      codi41 = `${doc.data().Codigo41}`;
      codi42 = `${doc.data().Codigo42}`;
      codi43 = `${doc.data().Codigo43}`;
      codi44 = `${doc.data().Codigo44}`;
      codi45 = `${doc.data().Codigo45}`;
      codi46 = `${doc.data().Codigo46}`;
      codi47 = `${doc.data().Codigo47}`;
      codi48 = `${doc.data().Codigo48}`;
      codi49 = `${doc.data().Codigo49}`;
      codi50 = `${doc.data().Codigo50}`;







      tabl2.innerHTML += `
                 <tr>
             <th scope="row">${doc.data().Referencia}</th>
             <td>${codi + ", " + codi2 + ", " + codi3 + ", " + codi4 + ", " + codi5 + ", " + codi6 + ", " + codi7 + ", " + codi8 + ", " + codi9 + ", " + codi10 + ", " + codi11 + ", " + codi12 + ", " + codi13 + ", " + codi14 + ", " + codi15 + ", "
        + codi16 + ", " + codi17 + ", " + codi18 + ", " + codi19 + ", " + codi20 + ", " + codi21 + ", " + codi22 + ", "
        + codi23 + ", " + codi24 + ", " + codi25 + ", " + codi26 + ", " + codi27 + ", " + codi28 + ", " + codi29 + ", " +
        codi30 + ", " + codi31 + ", " + codi32 + ", " + codi33 + ", " + codi34 + ", " + codi35 + ", " + codi36 + ","
        + codi37 + ", " + codi38 + ", " + codi39 + ", " + codi40 + ", " + codi41 + ", " + codi42 + ", " + codi43 + ", " +
        codi44 + ", " + codi45 + ", " + codi46 + ", " + codi47 + ", " + codi48 + ", " + codi49 + ", " + codi50}</td>


            
             </tr>

        
        
        `


    });
  })










}

//------------------------------------------progress bar--------------------------------------

/*progres=function cargar(){
    var barra= document.getElementById("barra");
    barra.value +=10;

}*/

//--------------------------------------------consultar produ------------------------------------------
function ConsulProd() {


  consulOp = document.getElementById("op").value;
  var consulUsu = document.getElementById("nombre").value;
  unidadesDisponibles();


  db.collection("OrdenProduccion").where("OrdenP", "==", consulOp)/*.where("referencia", "==", consulOp)*/

    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        referenciaUnica = `${doc.data().Referenc}`;

        document.getElementById("mostrarRef").value = referenciaUnica;

      });
    })


  db.collection("controladministradores").where("usuariooperario", "==", consulUsu)/*.where("referencia", "==", consulOp)*/
    .where("tiempo", "==", "")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var tIni = Date.parse(`${doc.data().TiempoIni}`);
        // var maq=`${doc.data().color}`; 
        var opera = `${doc.data().operacionElaborada}`;
        var opera2 = `${doc.data().operacionElaborada2}`;
        var opera3 = `${doc.data().operacionElaborada3}`;
        var opera4 = `${doc.data().operacionElaborada4}`;
        var opera5 = `${doc.data().operacionElaborada5}`;
        var opera6 = `${doc.data().operacionElaborada6}`;
        var opera7 = `${doc.data().operacionElaborada7}`;
        var opera8 = `${doc.data().operacionElaborada8}`;
        var opera9 = `${doc.data().operacionElaborada9}`;
        var comenUsu = `${doc.data().Comen}`;

        var primer = `${doc.data().Primer}`;
        var ultimo = `${doc.data().Ultimo}`;
        var color = `${doc.data().Color}`;



        var lo = `${doc.data().lote}`;
        var tall = `${doc.data().talla}`;
        ca = `${doc.data().cantidadElaborada}`;
        var REF = `${doc.data().referencia}`;

        var tIni2 = `${doc.data().TiempoIni}`;

        comi = `${doc.data().Comida}`;
        tint = `${doc.data().Tinto}`;
        tint2 = `${doc.data().Tinto2}`;




        document.getElementById("mostrarFechaI").value = tIni2;


        document.getElementById("Comentarios").value = comenUsu;

        document.getElementById("op").value = REF;
        document.getElementById("TieIniProdu").value = tIni;
        // document.getElementById("mq").value=maq;
        document.getElementById("operaci").value = opera;
        document.getElementById("operaci2").value = opera2;
        document.getElementById("operaci3").value = opera3;
        document.getElementById("operaci4").value = opera4;
        document.getElementById("operaci5").value = opera5;
        document.getElementById("operaci6").value = opera6;
        document.getElementById("operaci7").value = opera7;
        document.getElementById("operaci8").value = opera8;
        document.getElementById("operaci9").value = opera9;



        document.getElementById("lote").value = lo;
        document.getElementById("tall").value = tall;
        document.getElementById("canti").value = ca;

        document.getElementById("primer").value = primer;
        document.getElementById("ultimo").value = ultimo;
        document.getElementById("color").value = color;


        funTqt();

        if (document.getElementById("mostrarFechaI").value != "") {
          document.getElementById("acc").style.display = "none";
          document.getElementById("sp1").style.display = "none";


        }




        // var resa=document.getElementById("resta").value;
        //  alert("Consulta exitosa!!!");
        Swal.fire(
          'Consulta Exitosa!!!',
          'La consulta efectuada ha sido completada...',
          'success'
        )
        document.getElementById("spTres").style.display = "block";
        document.getElementById("fin").style.display = "block";
        //  document.getElementById("consul").style.display="none";
        foto();

        //--------------------------------actualiza solo-------------------------------------------
        Actu = function () {
          comida = 0;
          tinto = 0;
          tinto2 = 0;


          var isChecked = document.getElementById('cbComida').checked;
          if (isChecked) {
            comida = 900;
          }
          var isChecked2 = document.getElementById('cbTinto').checked;
          if (isChecked2) {
            tinto = 480;
          }
          var isChecked3 = document.getElementById('cbTinto2').checked;
          if (isChecked3) {
            tinto2 = 180;
          }
          //   var tInicial=document.getElementById("TieIniProdu").value;
          // var tFinal=document.getElementById("TieFinProdu").value;
          var nom = document.getElementById("nombre").value;
          var orden = document.getElementById("op").value;
          // var maqui=document.getElementById("mq").value;
          var opera = document.getElementById("operaci").value;
          var opera2 = document.getElementById("operaci2").value;
          var opera3 = document.getElementById("operaci3").value;
          var opera4 = document.getElementById("operaci4").value;
          var opera5 = document.getElementById("operaci5").value;
          var opera6 = document.getElementById("operaci6").value;
          var opera7 = document.getElementById("operaci7").value;
          var opera8 = document.getElementById("operaci8").value;
          var opera9 = document.getElementById("operaci9").value;
          var refVinculada = document.getElementById("mostrarRef").value;

          // fechaDelDiaActu = document.getElementById("fechaMovil").value;

          var hoy = new Date();
          var dia = hoy.getDate();
          //console.log("el dia es"+dia);
          var mes = hoy.getMonth() + 1;
          // console.log("el mes es"+mes);

          var ano = hoy.getFullYear();
          //console.log("el año es"+ano);



          if (dia < 10) {
            //alert(ano+"-0"+mes+"-"+dia);
            fechaDelDiaActu = (ano + "-" + mes + "-0" + dia);
          }
          if (mes < 10) {
            //alert(ano+"-0"+mes+"-"+dia);
            fechaDelDiaActu = (ano + "-0" + mes + "-" + dia);
          }
          if (mes < 10 && dia < 10) {
            //alert(ano+"-0"+mes+"-"+dia);
            fechaDelDiaActu = (ano + "-0" + mes + "-0" + dia);
          }
          else {
            //alert(ano+"-"+mes+"-"+dia);
            fechaDelDiaActu = (ano + "-" + mes + "-" + dia);

          }
          //console.log("la fecha completa es"+fechaDelDiaActu);


          //-------------------------------convertir fecha a timestamp-------------------------
          /*   const dateTime = new Date(fechaDelDiaActu).getTime();
  timestamp = Math.floor(dateTime / 1000);*/
          //-------------------------------------------------------------------------------------------------

          var comentarios = document.getElementById("Comentarios").value;
          SumatoriaCanti = 0;
          cantid = 0;

          var lot = document.getElementById("lote").value;
          var tal = document.getElementById("tall").value;
          var cantid = document.getElementById("canti").value;

          var primer = document.getElementById("primer").value;
          var ultimo = document.getElementById("ultimo").value;
          var color = document.getElementById("color").value;

          var culmi = document.getElementById("TieFinProdu").value;

          //cantid2=cantid;
          //console.log("la cantidades son: "+cantid);

          // document.getElementById("sumaC").value=cantid;


          //------------------------------------------------------------------------------------


          //  var texto = document.getElementById("Comentarios").value;
          //Reemplazamos los saltos de linea por espacios
          comentarios = comentarios.replace(/\r?\n/g, " ");
          //Reemplazamos los espacios seguidos por uno solo
          comentarios = comentarios.replace(/[ ]+/g, " ");
          //Quitarmos los espacios del principio y del final
          comentarios = comentarios.replace(/^ /, "");
          comentarios = comentarios.replace(/ $/, "");
          //Troceamos el texto por los espacios
          var textoTroceado = comentarios.split(" ");
          //Contamos todos los trozos de cadenas que existen
          numeroPalabras = textoTroceado.length;
          //console.log("el numero de palabras en la actu es:" +numeroPalabras);

          //--------------------------------------------------------------------------------------


          if (/*document.getElementById("mq").value!="" && */document.getElementById("op").value && document.getElementById("operaci").value != ""
            && document.getElementById("lote").value != "" && document.getElementById("color").value != "" && document.getElementById("tall").value != "" &&
            document.getElementById("primer").value != "" &&
            document.getElementById("ultimo").value != "") {

            document.getElementById("resta").value = Math.round(resulTiemPro);
            resa = document.getElementById("resta").value;


            var washingtonRef = db.collection("controladministradores").doc(doc.id);

            // Set the "capital" field of the city 'DC'
            return washingtonRef.update({
              cantidadElaborada: cantid,
              //  color:maqui,
              //OrdenOperacion:OPE,
              Color: color,
              Primer: primer,
              Ultimo: ultimo,
              lote: lot,
              culminacion: culmi,
              Comida: comida,
              Tinto: tinto,
              Tinto2: tinto2,
              nombreRef: refVinculada,
              NumeroOpera: numeroPalabras,
              operacionElaborada: opera,
              operacionElaborada2: opera2,
              operacionElaborada3: opera3,
              operacionElaborada4: opera4,
              operacionElaborada5: opera5,
              operacionElaborada6: opera6,
              operacionElaborada7: opera7,
              operacionElaborada8: opera8,
              operacionElaborada9: opera9,
              Comen: comentarios,
              //  fecha: fechaDelDiaActu,

              referencia: orden,
              talla: tal,
              tiempo: resa,
              // TiempoIni:tInicial,

              usuariooperario: nom

            })




              .then(function () {
                // alert("Registro Completo!!!"+"Tiempo: "+resa+"Rendimiento: "+RendimientoOp+"%");


                document.getElementById("TieFinProdu").value = "";
                document.getElementById("cbComida").checked = false;
                document.getElementById("cbTinto").checked = false;
                document.getElementById("cbTinto2").checked = false;


                /* document.getElementById("nombre").value="";
                 document.getElementById("op").value="";
                 document.getElementById("mq").value="";
                 document.getElementById("operaci").value="";
                 document.getElementById("lote").value="";
                 document.getElementById("tall").value="";
                 document.getElementById("canti").value="";  */
                document.getElementById("resta").value = "";
                document.getElementById("TieIniProdu").value = "";
                document.getElementById("fin").style.display = "none";
                document.getElementById("spTres").style.display = "none";

                document.getElementById("sp1").style.display = "block";
                document.getElementById("acc").style.display = "block";


                console.log("px hace la actualizacion");


                // document.getElementById("TieIniProdu").value=""; // LIMPIAR EL CAMPO DE HORA INICIAL PARA EVITAR DOBLE FINALIZACION DEL PROCESO 

                console.log("Document successfully updated!");

              })
              .catch(function (error) {
                // The document probably doesn't exist.
                alert("Llene todos los campos para finalizar...");

                console.error("Error updating document: ", error);
              });

          } else {
            alert("Complete Todos los campos antes de Finalizar...");



          }



        }

        //-------------------------------------------------------------------------------------------------------




        //  mensaje.innerHTML ="";

      });
    })




}



//----------------------------------------tabla produccion---------------------------------------
TablaPro = function () {
  tiemTrabajado1 = 0;
  comida = 0;
  tinto = 0;
  tinto2 = 0;

  Operacion = document.getElementById("operaci").value;
  Operacion2 = document.getElementById("operaci2").value;
  Operacion3 = document.getElementById("operaci3").value;
  Operacion4 = document.getElementById("operaci4").value;
  Operacion5 = document.getElementById("operaci5").value;
  Operacion6 = document.getElementById("operaci6").value;
  Operacion7 = document.getElementById("operaci7").value;
  Operacion8 = document.getElementById("operaci8").value;
  Operacion9 = document.getElementById("operaci9").value;

  var isChecked = document.getElementById('cbComida').checked;
  if (isChecked) {
    comida = 900;
    tinto = 0;
    tinto2 = 0;
  }
  var isChecked2 = document.getElementById('cbTinto').checked;
  if (isChecked2) {
    tinto = 480;
    comida = 0;
    tinto2 = 0;

  }
  var isChecked3 = document.getElementById('cbTinto2').checked;
  if (isChecked3) {
    tinto2 = 180;
    comida = 0;
    tinto = 0;
  }

  if (isChecked && isChecked2) {
    comida = 900;
    tinto = 480;
    tinto2 = 0;

  }
  if (isChecked2 && isChecked3) {
    tinto = 480;
    tinto2 = 180;
    comida = 0;

  }


  // Maqui=document.getElementById("mq").value;

  Operario = document.getElementById("nombre").value;
  cantidadElabo = document.getElementById("canti").value;
  tiemTrabajado1 = document.getElementById("resta").value;

  tiemTrabajado = parseFloat(tiemTrabajado1) - parseFloat(comida) - parseFloat(tinto) - parseFloat(tinto2);

  // var tabl=document.getElementById("tabla");
  var consultaOP = document.getElementById("op").value;
  RendimientoOp = 0;
  unidadesSeg = 0;
  relaTiemp = 0;
  tiempEstan = 0;
  TiempoStdTotal = 0;
  tiempEstan1 = 0;
  tiempEstan2 = 0;
  tiempEstan3 = 0;
  tiempEstan4 = 0;
  tiempEstan5 = 0;
  tiempEstan6 = 0;
  tiempEstan7 = 0;
  tiempEstan8 = 0;
  tiempEstan9 = 0;


  unidadSTD = 0
  Unidad1 = 0;
  Unidad2 = 0;
  Unidad3 = 0;
  Unidad4 = 0;
  Unidad5 = 0;
  Unidad6 = 0;
  Unidad7 = 0;
  Unidad8 = 0;
  Unidad9 = 0;




  db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        canti = `${doc.data().Cantidad}`;
        consultaref = `${doc.data().Referenc}`;


        //document.getElementById("cantiOp").value=canti;
        // document.getElementById("RefOp").value=consultaref;




        //--------------------------------------consulta global-------------------------------------
        db.collection("FichaTecniGlobal").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
          .get()
          .then(function (querySnapshot) {
            //  tabl.innerHTML ="";
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());


              OpFic1 = `${doc.data().Codigo}`;
              UniFich1 = parseInt(`${doc.data().Unidad}`);
              estan1 = parseInt(`${doc.data().Estandar}`);

              OpFic2 = `${doc.data().Codigo2}`;
              UniFich2 = parseInt(`${doc.data().Unidad2}`);
              estan2 = parseInt(`${doc.data().Estandar2}`);

              OpFic3 = `${doc.data().Codigo3}`;
              UniFich3 = parseInt(`${doc.data().Unidad3}`);
              estan3 = parseInt(`${doc.data().Estandar3}`);

              OpFic4 = `${doc.data().Codigo4}`;
              UniFich4 = parseInt(`${doc.data().Unidad4}`);
              console.log(UniFich4);
              estan4 = parseInt(`${doc.data().Estandar4}`);

              OpFic5 = `${doc.data().Codigo5}`;
              UniFich5 = parseInt(`${doc.data().Unidad5}`);
              estan5 = parseInt(`${doc.data().Estandar5}`);

              OpFic6 = `${doc.data().Codigo6}`;
              UniFich6 = parseInt(`${doc.data().Unidad6}`);
              estan6 = parseInt(`${doc.data().Estandar6}`);

              OpFic7 = `${doc.data().Codigo7}`;
              UniFich7 = parseInt(`${doc.data().Unidad7}`);
              estan7 = parseInt(`${doc.data().Estandar7}`);

              OpFic8 = `${doc.data().Codigo8}`;
              UniFich8 = parseInt(`${doc.data().Unidad8}`);
              estan8 = parseInt(`${doc.data().Estandar8}`);

              OpFic9 = `${doc.data().Codigo9}`;
              UniFich9 = parseInt(`${doc.data().Unidad9}`);
              estan9 = parseInt(`${doc.data().Estandar9}`);

              OpFic10 = `${doc.data().Codigo10}`;
              UniFich10 = parseInt(`${doc.data().Unidad10}`);
              estan10 = parseInt(`${doc.data().Estandar10}`);

              OpFic11 = `${doc.data().Codigo11}`;
              UniFich11 = parseInt(`${doc.data().Unidad11}`);
              estan11 = parseInt(`${doc.data().Estandar11}`);

              OpFic12 = `${doc.data().Codigo12}`;
              UniFich12 = parseInt(`${doc.data().Unidad12}`);
              estan12 = parseInt(`${doc.data().Estandar12}`);

              OpFic13 = `${doc.data().Codigo13}`;
              UniFich13 = parseInt(`${doc.data().Unidad13}`);
              estan13 = parseInt(`${doc.data().Estandar13}`);

              OpFic14 = `${doc.data().Codigo14}`;
              UniFich14 = parseInt(`${doc.data().Unidad14}`);
              estan14 = parseInt(`${doc.data().Estandar14}`);

              OpFic15 = `${doc.data().Codigo15}`;
              UniFich15 = parseInt(`${doc.data().Unidad15}`);
              estan15 = parseInt(`${doc.data().Estandar15}`);

              OpFic16 = `${doc.data().Codigo16}`;
              UniFich16 = parseInt(`${doc.data().Unidad16}`);
              estan16 = parseInt(`${doc.data().Estandar16}`);

              OpFic17 = `${doc.data().Codigo17}`;
              UniFich17 = parseInt(`${doc.data().Unidad17}`);
              estan17 = parseInt(`${doc.data().Estandar17}`);

              OpFic18 = `${doc.data().Codigo18}`;
              UniFich18 = parseInt(`${doc.data().Unidad18}`);
              estan18 = parseInt(`${doc.data().Estandar18}`);

              OpFic19 = `${doc.data().Codigo19}`;
              UniFich19 = parseInt(`${doc.data().Unidad19}`);
              estan19 = parseInt(`${doc.data().Estandar19}`);

              OpFic20 = `${doc.data().Codigo20}`;
              UniFich20 = parseInt(`${doc.data().Unidad20}`);
              estan20 = parseInt(`${doc.data().Estandar20}`);

              OpFic21 = `${doc.data().Codigo21}`;
              UniFich21 = parseInt(`${doc.data().Unidad21}`);
              estan21 = parseInt(`${doc.data().Estandar21}`);

              OpFic22 = `${doc.data().Codigo22}`;
              UniFich22 = parseInt(`${doc.data().Unidad22}`);
              estan22 = parseInt(`${doc.data().Estandar22}`);

              OpFic23 = `${doc.data().Codigo23}`;
              UniFich23 = parseInt(`${doc.data().Unidad23}`);
              estan23 = parseInt(`${doc.data().Estandar23}`);

              OpFic24 = `${doc.data().Codigo24}`;
              UniFich24 = parseInt(`${doc.data().Unidad24}`);
              estan24 = parseInt(`${doc.data().Estandar24}`);

              OpFic25 = `${doc.data().Codigo25}`;
              UniFich25 = parseInt(`${doc.data().Unidad25}`);
              estan25 = parseInt(`${doc.data().Estandar25}`);

              OpFic26 = `${doc.data().Codigo26}`;
              UniFich26 = parseInt(`${doc.data().Unidad26}`);
              estan26 = parseInt(`${doc.data().Estandar26}`);

              OpFic27 = `${doc.data().Codigo27}`;
              UniFich27 = parseInt(`${doc.data().Unidad27}`);
              estan27 = parseInt(`${doc.data().Estandar27}`);

              OpFic28 = `${doc.data().Codigo28}`;
              UniFich28 = parseInt(`${doc.data().Unidad28}`);
              estan28 = parseInt(`${doc.data().Estandar28}`);

              OpFic29 = `${doc.data().Codigo29}`;
              UniFich29 = parseInt(`${doc.data().Unidad29}`);
              estan29 = parseInt(`${doc.data().Estandar29}`);

              OpFic30 = `${doc.data().Codigo30}`;
              UniFich30 = parseInt(`${doc.data().Unidad30}`);
              estan30 = parseInt(`${doc.data().Estandar30}`);

              OpFic31 = `${doc.data().Codigo31}`;
              UniFich31 = parseInt(`${doc.data().Unidad31}`);
              estan31 = parseInt(`${doc.data().Estandar31}`);

              OpFic32 = `${doc.data().Codigo32}`;
              UniFich32 = parseInt(`${doc.data().Unidad32}`);
              estan32 = parseInt(`${doc.data().Estandar32}`);

              OpFic33 = `${doc.data().Codigo33}`;
              UniFich33 = parseInt(`${doc.data().Unidad33}`);
              estan33 = parseInt(`${doc.data().Estandar33}`);

              OpFic34 = `${doc.data().Codigo34}`;
              UniFich34 = parseInt(`${doc.data().Unidad34}`);
              estan34 = parseInt(`${doc.data().Estandar34}`);

              OpFic35 = `${doc.data().Codigo35}`;
              UniFich35 = parseInt(`${doc.data().Unidad35}`);
              estan35 = parseInt(`${doc.data().Estandar35}`);

              OpFic36 = `${doc.data().Codigo36}`;
              UniFich36 = parseInt(`${doc.data().Unidad36}`);
              estan36 = parseInt(`${doc.data().Estandar36}`);

              OpFic37 = `${doc.data().Codigo37}`;
              UniFich37 = parseInt(`${doc.data().Unidad37}`);
              estan37 = parseInt(`${doc.data().Estandar37}`);

              OpFic38 = `${doc.data().Codigo38}`;
              UniFich38 = parseInt(`${doc.data().Unidad38}`);
              estan38 = parseInt(`${doc.data().Estandar38}`);

              OpFic39 = `${doc.data().Codigo39}`;
              UniFich39 = parseInt(`${doc.data().Unidad39}`);
              estan39 = parseInt(`${doc.data().Estandar39}`);

              OpFic40 = `${doc.data().Codigo40}`;
              UniFich40 = parseInt(`${doc.data().Unidad40}`);
              estan40 = parseInt(`${doc.data().Estandar40}`);

              OpFic41 = `${doc.data().Codigo41}`;
              UniFich41 = parseInt(`${doc.data().Unidad41}`);
              estan41 = parseInt(`${doc.data().Estandar41}`);

              OpFic42 = `${doc.data().Codigo42}`;
              UniFich42 = parseInt(`${doc.data().Unidad42}`);
              estan42 = parseInt(`${doc.data().Estandar42}`);

              OpFic43 = `${doc.data().Codigo43}`;
              UniFich43 = parseInt(`${doc.data().Unidad43}`);
              estan43 = parseInt(`${doc.data().Estandar43}`);

              OpFic44 = `${doc.data().Codigo44}`;
              UniFich44 = parseInt(`${doc.data().Unidad44}`);
              estan44 = parseInt(`${doc.data().Estandar44}`);

              OpFic45 = `${doc.data().Codigo45}`;
              UniFich45 = parseInt(`${doc.data().Unidad45}`);
              estan45 = parseInt(`${doc.data().Estandar45}`);

              OpFic46 = `${doc.data().Codigo46}`;
              UniFich46 = parseInt(`${doc.data().Unidad46}`);
              estan46 = parseInt(`${doc.data().Estandar46}`);

              OpFic47 = `${doc.data().Codigo47}`;
              UniFich47 = parseInt(`${doc.data().Unidad47}`);
              estan47 = parseInt(`${doc.data().Estandar47}`);

              OpFic48 = `${doc.data().Codigo48}`;
              UniFich48 = parseInt(`${doc.data().Unidad48}`);
              estan48 = parseInt(`${doc.data().Estandar48}`);

              OpFic49 = `${doc.data().Codigo49}`;
              UniFich49 = parseInt(`${doc.data().Unidad49}`);
              estan49 = parseInt(`${doc.data().Estandar49}`);

              OpFic50 = `${doc.data().Codigo50}`;
              UniFich50 = parseInt(`${doc.data().Unidad50}`);
              estan50 = parseInt(`${doc.data().Estandar50}`);





              if (Operacion == OpFic1) {
                tiempEstan1 = estan1;
                Unidad1 = UniFich1;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion == OpFic2) {
                tiempEstan1 = estan2;

                Unidad1 = UniFich2;
                //console.log("el tiempo en la posicion 1: "+tiempEstan1);

                //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;


              }
              if (Operacion == OpFic3) {
                tiempEstan1 = estan3;

                Unidad1 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion == OpFic4) {
                tiempEstan1 = estan4;

                Unidad1 = UniFich4;


              }
              if (Operacion == OpFic5) {
                tiempEstan1 = estan5;

                Unidad1 = UniFich5;


              }
              if (Operacion == OpFic6) {
                tiempEstan1 = estan6;

                Unidad1 = UniFich6;


              }
              if (Operacion == OpFic7) {
                tiempEstan1 = estan7;

                Unidad1 = UniFich7;

              }
              if (Operacion == OpFic8) {
                tiempEstan1 = estan8;

                Unidad1 = UniFich8;


              }
              if (Operacion == OpFic9) {
                tiempEstan1 = estan9;

                Unidad1 = UniFich9;


              }
              if (Operacion == OpFic10) {
                tiempEstan1 = estan10;

                Unidad1 = UniFich10;

              }
              if (Operacion == OpFic11) {
                tiempEstan1 = estan11;

                Unidad1 = UniFich11;


              }
              if (Operacion == OpFic12) {
                tiempEstan1 = estan12;

                Unidad1 = UniFich12;


              }
              if (Operacion == OpFic13) {
                tiempEstan1 = estan13;

                Unidad1 = UniFich13;


              }
              if (Operacion == OpFic14) {
                tiempEstan1 = estan14;

                Unidad1 = UniFich14;


              }
              if (Operacion == OpFic15) {
                tiempEstan1 = estan15;

                Unidad1 = UniFich15;

              }
              if (Operacion == OpFic16) {
                tiempEstan1 = estan16;

                Unidad1 = UniFich16;


              }
              if (Operacion == OpFic17) {
                tiempEstan1 = estan17;

                Unidad1 = UniFich17;


              }
              if (Operacion == OpFic18) {
                tiempEstan1 = estan18;

                Unidad1 = UniFich18;

              }
              if (Operacion == OpFic19) {
                tiempEstan1 = estan19;

                Unidad1 = UniFich19;


              }
              if (Operacion == OpFic20) {
                tiempEstan1 = estan20;

                Unidad1 = UniFich20;


              }
              if (Operacion == OpFic21) {
                tiempEstan1 = estan21;

                Unidad1 = UniFich21;


              }
              if (Operacion == OpFic22) {
                tiempEstan1 = estan22;

                Unidad1 = UniFich22;


              }
              if (Operacion == OpFic23) {
                tiempEstan1 = estan23;

                Unidad1 = UniFich23;


              }
              if (Operacion == OpFic24) {
                tiempEstan1 = estan24;

                Unidad1 = UniFich24;

              }
              if (Operacion == OpFic25) {
                tiempEstan1 = estan25;

                Unidad1 = UniFich25;


              }
              if (Operacion == OpFic26) {
                tiempEstan1 = estan26;

                Unidad1 = UniFich26;


              }
              if (Operacion == OpFic27) {
                tiempEstan1 = estan27;

                Unidad1 = UniFich27;


              }
              if (Operacion == OpFic28) {
                tiempEstan1 = estan28;

                Unidad1 = UniFich28;


              }
              if (Operacion == OpFic29) {
                tiempEstan1 = estan29;

                Unidad1 = UniFich29;


              }
              if (Operacion == OpFic30) {
                tiempEstan1 = estan30;

                Unidad1 = UniFich30;


              }

              if (Operacion == OpFic31) {
                tiempEstan1 = estan31;

                Unidad1 = UniFich31;


              }
              if (Operacion == OpFic32) {
                tiempEstan1 = estan32;

                Unidad1 = UniFich32;

              }
              if (Operacion == OpFic33) {
                tiempEstan1 = estan33;

                Unidad1 = UniFich33;

              }
              if (Operacion == OpFic34) {
                tiempEstan1 = estan34;

                Unidad1 = UniFich34;

              }
              if (Operacion == OpFic35) {
                tiempEstan1 = estan35;

                Unidad1 = UniFich35;


              }
              if (Operacion == OpFic36) {
                tiempEstan1 = estan36;

                Unidad1 = UniFich36;


              }
              if (Operacion == OpFic37) {
                tiempEstan1 = estan37;

                Unidad1 = UniFich37;

              }
              if (Operacion == OpFic38) {
                tiempEstan1 = estan38;

                Unidad1 = UniFich38;

              }
              if (Operacion == OpFic39) {
                tiempEstan1 = estan39;

                Unidad1 = UniFich39;


              }
              if (Operacion == OpFic40) {
                tiempEstan1 = estan40;

                Unidad1 = UniFich40;


              }
              if (Operacion == OpFic41) {
                tiempEstan1 = estan41;

                Unidad1 = UniFich41;


              }
              if (Operacion == OpFic42) {
                tiempEstan1 = estan42;

                Unidad1 = UniFich42;


              }
              if (Operacion == OpFic43) {
                tiempEstan1 = estan43;

                Unidad1 = UniFich43;


              }
              if (Operacion == OpFic44) {
                tiempEstan1 = estan44;

                Unidad1 = UniFich44;


              }
              if (Operacion == OpFic45) {
                tiempEstan1 = estan45;

                Unidad1 = UniFich45;

              }
              if (Operacion == OpFic46) {
                tiempEstan1 = estan46;

                Unidad1 = UniFich46;

              }
              if (Operacion == OpFic47) {
                tiempEstan1 = estan47;

                Unidad1 = UniFich47;


              }
              if (Operacion == OpFic48) {
                tiempEstan1 = estan48;

                Unidad1 = UniFich48;


              }
              if (Operacion == OpFic49) {
                tiempEstan1 = estan49;

                Unidad1 = UniFich49;


              }
              if (Operacion == OpFic50) {
                tiempEstan1 = estan50;

                Unidad1 = UniFich50;


              }

              //---------------------------------------condicion 2---------------------

              if (Operacion2 == OpFic1) {
                tiempEstan2 = estan1;
                Unidad2 = UniFich1;



              }
              if (Operacion2 == OpFic2) {
                tiempEstan2 = estan2;

                Unidad2 = UniFich2;




              }
              if (Operacion2 == OpFic3) {
                tiempEstan2 = estan3;

                Unidad2 = UniFich3;

                // RendimientoOp=(relaTiemp*100)/tiemTrabajado;

              }
              if (Operacion2 == OpFic4) {
                tiempEstan2 = estan4;

                Unidad2 = UniFich4;


              }
              if (Operacion2 == OpFic5) {
                tiempEstan2 = estan5;

                Unidad2 = UniFich5;


              }
              if (Operacion2 == OpFic6) {
                tiempEstan2 = estan6;

                Unidad2 = UniFich6;


              }
              if (Operacion2 == OpFic7) {
                tiempEstan2 = estan7;

                Unidad2 = UniFich7;

              }
              if (Operacion2 == OpFic8) {
                tiempEstan2 = estan8;

                Unidad2 = UniFich8;


              }
              if (Operacion2 == OpFic9) {
                tiempEstan2 = estan9;

                Unidad2 = UniFich9;


              }
              if (Operacion2 == OpFic10) {
                tiempEstan2 = estan10;

                Unidad2 = UniFich10;

              }
              if (Operacion2 == OpFic11) {
                tiempEstan2 = estan11;

                Unidad2 = UniFich11;


              }
              if (Operacion2 == OpFic12) {
                tiempEstan2 = estan12;

                Unidad2 = UniFich12;


              }
              if (Operacion2 == OpFic13) {
                tiempEstan2 = estan13;

                Unidad2 = UniFich13;


              }
              if (Operacion2 == OpFic14) {
                tiempEstan2 = estan14;

                Unidad2 = UniFich14;


              }
              if (Operacion2 == OpFic15) {
                tiempEstan2 = estan15;

                Unidad2 = UniFich15;

              }
              if (Operacion2 == OpFic16) {
                tiempEstan2 = estan16;

                Unidad2 = UniFich16;


              }
              if (Operacion2 == OpFic17) {
                tiempEstan2 = estan17;

                Unidad2 = UniFich17;


              }
              if (Operacion2 == OpFic18) {
                tiempEstan2 = estan18;

                Unidad2 = UniFich18;

              }
              if (Operacion2 == OpFic19) {
                tiempEstan2 = estan19;

                Unidad2 = UniFich19;


              }
              if (Operacion2 == OpFic20) {
                tiempEstan2 = estan20;

                Unidad2 = UniFich20;


              }
              if (Operacion2 == OpFic21) {
                tiempEstan2 = estan21;

                Unidad2 = UniFich21;


              }
              if (Operacion2 == OpFic22) {
                tiempEstan2 = estan22;

                Unidad2 = UniFich22;


              }
              if (Operacion2 == OpFic23) {
                tiempEstan2 = estan23;

                Unidad2 = UniFich23;


              }
              if (Operacion2 == OpFic24) {
                tiempEstan2 = estan24;

                Unidad2 = UniFich24;

              }
              if (Operacion2 == OpFic25) {
                tiempEstan2 = estan25;

                Unidad2 = UniFich25;


              }
              if (Operacion2 == OpFic26) {
                tiempEstan2 = estan26;

                Unidad2 = UniFich26;


              }
              if (Operacion2 == OpFic27) {
                tiempEstan2 = estan27;

                Unidad2 = UniFich27;


              }
              if (Operacion2 == OpFic28) {
                tiempEstan2 = estan28;

                Unidad2 = UniFich28;


              }
              if (Operacion2 == OpFic29) {
                tiempEstan2 = estan29;

                Unidad2 = UniFich29;


              }
              if (Operacion2 == OpFic30) {
                tiempEstan2 = estan30;

                Unidad2 = UniFich30;


              }

              if (Operacion2 == OpFic31) {
                tiempEstan2 = estan31;

                Unidad2 = UniFich31;


              }
              if (Operacion2 == OpFic32) {
                tiempEstan2 = estan32;

                Unidad2 = UniFich32;

              }
              if (Operacion2 == OpFic33) {
                tiempEstan2 = estan33;

                Unidad2 = UniFich33;

              }
              if (Operacion2 == OpFic34) {
                tiempEstan2 = estan34;

                Unidad2 = UniFich34;

              }
              if (Operacion2 == OpFic35) {
                tiempEstan2 = estan35;

                Unidad2 = UniFich35;


              }
              if (Operacion2 == OpFic36) {
                tiempEstan2 = estan36;

                Unidad2 = UniFich36;


              }
              if (Operacion2 == OpFic37) {
                tiempEstan2 = estan37;

                Unidad2 = UniFich37;

              }
              if (Operacion2 == OpFic38) {
                tiempEstan2 = estan38;

                Unidad2 = UniFich38;

              }
              if (Operacion2 == OpFic39) {
                tiempEstan2 = estan39;

                Unidad2 = UniFich39;


              }
              if (Operacion2 == OpFic40) {
                tiempEstan2 = estan40;

                Unidad2 = UniFich40;


              }
              if (Operacion2 == OpFic41) {
                tiempEstan2 = estan41;

                Unidad2 = UniFich41;


              }
              if (Operacion2 == OpFic42) {
                tiempEstan2 = estan42;

                Unidad2 = UniFich42;


              }
              if (Operacion2 == OpFic43) {
                tiempEstan2 = estan43;

                Unidad2 = UniFich43;


              }
              if (Operacion2 == OpFic44) {
                tiempEstan2 = estan44;

                Unidad2 = UniFich44;


              }
              if (Operacion2 == OpFic45) {
                tiempEstan2 = estan45;

                Unidad2 = UniFich45;

              }
              if (Operacion2 == OpFic46) {
                tiempEstan2 = estan46;

                Unidad2 = UniFich46;

              }
              if (Operacion2 == OpFic47) {
                tiempEstan2 = estan47;

                Unidad2 = UniFich47;


              }
              if (Operacion2 == OpFic48) {
                tiempEstan2 = estan48;

                Unidad2 = UniFich48;


              }
              if (Operacion2 == OpFic49) {
                tiempEstan2 = estan49;

                Unidad2 = UniFich49;


              }
              if (Operacion2 == OpFic50) {
                tiempEstan2 = estan50;

                Unidad2 = UniFich50;


              }
              //-----------------------------------3---------------------------------------
              if (Operacion3 == OpFic1) {
                tiempEstan3 = estan1;
                Unidad3 = UniFich1;



              }
              if (Operacion3 == OpFic2) {
                tiempEstan3 = estan2;

                Unidad3 = UniFich2;



              }
              if (Operacion3 == OpFic3) {
                tiempEstan3 = estan3;

                Unidad3 = UniFich3;



              }
              if (Operacion3 == OpFic4) {
                tiempEstan3 = estan4;

                Unidad3 = UniFich4;


              }
              if (Operacion3 == OpFic5) {
                tiempEstan3 = estan5;

                Unidad3 = UniFich5;




              }
              if (Operacion3 == OpFic6) {
                tiempEstan3 = estan6;

                Unidad3 = UniFich6;


              }
              if (Operacion3 == OpFic7) {
                tiempEstan3 = estan7;

                Unidad3 = UniFich7;

              }
              if (Operacion3 == OpFic8) {
                tiempEstan3 = estan8;

                Unidad3 = UniFich8;


              }
              if (Operacion3 == OpFic9) {
                tiempEstan3 = estan9;

                Unidad3 = UniFich9;


              }
              if (Operacion3 == OpFic10) {
                tiempEstan3 = estan10;

                Unidad3 = UniFich10;

              }
              if (Operacion3 == OpFic11) {
                tiempEstan3 = estan11;

                Unidad3 = UniFich11;


              }
              if (Operacion3 == OpFic12) {
                tiempEstan3 = estan12;

                Unidad3 = UniFich12;


              }
              if (Operacion3 == OpFic13) {
                tiempEstan3 = estan13;

                Unidad3 = UniFich13;


              }
              if (Operacion3 == OpFic14) {
                tiempEstan3 = estan14;

                Unidad3 = UniFich14;


              }
              if (Operacion3 == OpFic15) {
                tiempEstan3 = estan15;

                Unidad3 = UniFich15;

              }
              if (Operacion3 == OpFic16) {
                tiempEstan3 = estan16;

                Unidad3 = UniFich16;


              }
              if (Operacion3 == OpFic17) {
                tiempEstan3 = estan17;

                Unidad3 = UniFich17;


              }
              if (Operacion3 == OpFic18) {
                tiempEstan3 = estan18;

                Unidad3 = UniFich18;

              }
              if (Operacion3 == OpFic19) {
                tiempEstan3 = estan19;

                Unidad3 = UniFich19;


              }
              if (Operacion3 == OpFic20) {
                tiempEstan3 = estan20;

                Unidad3 = UniFich20;


              }
              if (Operacion3 == OpFic21) {
                tiempEstan3 = estan21;

                Unidad3 = UniFich21;


              }
              if (Operacion3 == OpFic22) {
                tiempEstan3 = estan22;

                Unidad3 = UniFich22;


              }
              if (Operacion3 == OpFic23) {
                tiempEstan3 = estan23;

                Unidad3 = UniFich23;


              }
              if (Operacion3 == OpFic24) {
                tiempEstan3 = estan24;

                Unidad3 = UniFich24;

              }
              if (Operacion3 == OpFic25) {
                tiempEstan3 = estan25;

                Unidad3 = UniFich25;


              }
              if (Operacion3 == OpFic26) {
                tiempEstan3 = estan26;

                Unidad3 = UniFich26;


              }
              if (Operacion3 == OpFic27) {
                tiempEstan3 = estan27;

                Unidad3 = UniFich27;


              }
              if (Operacion3 == OpFic28) {
                tiempEstan3 = estan28;

                Unidad3 = UniFich28;


              }
              if (Operacion3 == OpFic29) {
                tiempEstan3 = estan29;

                Unidad3 = UniFich29;


              }
              if (Operacion3 == OpFic30) {
                tiempEstan3 = estan30;

                Unidad3 = UniFich30;


              }

              if (Operacion3 == OpFic31) {
                tiempEstan3 = estan31;

                Unidad3 = UniFich31;


              }
              if (Operacion3 == OpFic32) {
                tiempEstan3 = estan32;

                Unidad3 = UniFich32;

              }
              if (Operacion3 == OpFic33) {
                tiempEstan3 = estan33;

                Unidad3 = UniFich33;

              }
              if (Operacion3 == OpFic34) {
                tiempEstan3 = estan34;

                Unidad3 = UniFich34;

              }
              if (Operacion3 == OpFic35) {
                tiempEstan3 = estan35;

                Unidad3 = UniFich35;


              }
              if (Operacion3 == OpFic36) {
                tiempEstan3 = estan36;

                Unidad3 = UniFich36;


              }
              if (Operacion3 == OpFic37) {
                tiempEstan3 = estan37;

                Unidad3 = UniFich37;

              }
              if (Operacion3 == OpFic38) {
                tiempEstan3 = estan38;

                Unidad3 = UniFich38;

              }
              if (Operacion3 == OpFic39) {
                tiempEstan3 = estan39;

                Unidad3 = UniFich39;


              }
              if (Operacion3 == OpFic40) {
                tiempEstan3 = estan40;

                Unidad3 = UniFich40;


              }
              if (Operacion3 == OpFic41) {
                tiempEstan3 = estan41;

                Unidad3 = UniFich41;


              }
              if (Operacion3 == OpFic42) {
                tiempEstan3 = estan42;

                Unidad3 = UniFich42;


              }
              if (Operacion3 == OpFic43) {
                tiempEstan3 = estan43;

                Unidad3 = UniFich43;


              }
              if (Operacion3 == OpFic44) {
                tiempEstan3 = estan44;

                Unidad3 = UniFich44;


              }
              if (Operacion3 == OpFic45) {
                tiempEstan3 = estan45;

                Unidad3 = UniFich45;

              }
              if (Operacion3 == OpFic46) {
                tiempEstan3 = estan46;

                Unidad3 = UniFich46;

              }
              if (Operacion3 == OpFic47) {
                tiempEstan3 = estan47;

                Unidad3 = UniFich47;


              }
              if (Operacion3 == OpFic48) {
                tiempEstan3 = estan48;

                Unidad3 = UniFich48;


              }
              if (Operacion3 == OpFic49) {
                tiempEstan3 = estan49;

                Unidad3 = UniFich49;


              }
              if (Operacion3 == OpFic50) {
                tiempEstan3 = estan50;

                Unidad3 = UniFich50;


              }

              //----------------------------------------------4-----------------------------------------

              if (Operacion4 == OpFic1) {
                tiempEstan4 = estan1;
                Unidad4 = UniFich1;



              }
              if (Operacion4 == OpFic2) {
                tiempEstan4 = estan2;

                Unidad4 = UniFich2;



              }
              if (Operacion4 == OpFic3) {
                tiempEstan4 = estan3;

                Unidad4 = UniFich3;


              }
              if (Operacion4 == OpFic4) {
                tiempEstan4 = estan4;

                Unidad4 = UniFich4;


              }
              if (Operacion4 == OpFic5) {
                tiempEstan4 = estan5;

                Unidad4 = UniFich5;


              }
              if (Operacion4 == OpFic6) {
                tiempEstan4 = estan6;

                Unidad4 = UniFich6;


              }
              if (Operacion4 == OpFic7) {
                tiempEstan4 = estan7;

                Unidad4 = UniFich7;

              }
              if (Operacion4 == OpFic8) {
                tiempEstan4 = estan8;

                Unidad4 = UniFich8;


              }
              if (Operacion4 == OpFic9) {
                tiempEstan4 = estan9;

                Unidad4 = UniFich9;


              }
              if (Operacion4 == OpFic10) {
                tiempEstan4 = estan10;

                Unidad4 = UniFich10;


              }
              if (Operacion4 == OpFic11) {
                tiempEstan4 = estan11;

                Unidad4 = UniFich11;


              }
              if (Operacion4 == OpFic12) {
                tiempEstan4 = estan12;

                Unidad4 = UniFich12;


              }
              if (Operacion4 == OpFic13) {
                tiempEstan4 = estan13;

                Unidad4 = UniFich13;


              }
              if (Operacion4 == OpFic14) {
                tiempEstan4 = estan14;

                Unidad4 = UniFich14;



              }
              if (Operacion4 == OpFic15) {
                tiempEstan4 = estan15;

                Unidad4 = UniFich15;

              }
              if (Operacion4 == OpFic16) {
                tiempEstan4 = estan16;

                Unidad4 = UniFich16;


              }
              if (Operacion4 == OpFic17) {
                tiempEstan4 = estan17;

                Unidad4 = UniFich17;


              }
              if (Operacion4 == OpFic18) {
                tiempEstan4 = estan18;

                Unidad4 = UniFich18;

              }
              if (Operacion4 == OpFic19) {
                tiempEstan4 = estan19;

                Unidad4 = UniFich19;


              }
              if (Operacion4 == OpFic20) {
                tiempEstan4 = estan20;

                Unidad4 = UniFich20;


              }
              if (Operacion4 == OpFic21) {
                tiempEstan4 = estan21;

                Unidad4 = UniFich21;


              }
              if (Operacion4 == OpFic22) {
                tiempEstan4 = estan22;

                Unidad4 = UniFich22;


              }
              if (Operacion4 == OpFic23) {
                tiempEstan4 = estan23;

                Unidad4 = UniFich23;


              }
              if (Operacion4 == OpFic24) {
                tiempEstan4 = estan24;

                Unidad4 = UniFich24;

              }
              if (Operacion4 == OpFic25) {
                tiempEstan4 = estan25;

                Unidad4 = UniFich25;


              }
              if (Operacion4 == OpFic26) {
                tiempEstan4 = estan26;

                Unidad4 = UniFich26;


              }
              if (Operacion4 == OpFic27) {
                tiempEstan4 = estan27;

                Unidad4 = UniFich27;


              }
              if (Operacion4 == OpFic28) {
                tiempEstan4 = estan28;

                Unidad4 = UniFich28;


              }
              if (Operacion4 == OpFic29) {
                tiempEstan4 = estan29;

                Unidad4 = UniFich29;


              }
              if (Operacion4 == OpFic30) {
                tiempEstan4 = estan30;

                Unidad4 = UniFich30;


              }

              if (Operacion4 == OpFic31) {
                tiempEstan4 = estan31;

                Unidad4 = UniFich31;


              }
              if (Operacion4 == OpFic32) {
                tiempEstan4 = estan32;

                Unidad4 = UniFich32;

              }
              if (Operacion4 == OpFic33) {
                tiempEstan4 = estan33;

                Unidad4 = UniFich33;

              }
              if (Operacion4 == OpFic34) {
                tiempEstan4 = estan34;

                Unidad4 = UniFich34;

              }
              if (Operacion4 == OpFic35) {
                tiempEstan4 = estan35;

                Unidad4 = UniFich35;


              }
              if (Operacion4 == OpFic36) {
                tiempEstan4 = estan36;

                Unidad4 = UniFich36;


              }
              if (Operacion4 == OpFic37) {
                tiempEstan4 = estan37;

                Unidad4 = UniFich37;

              }
              if (Operacion4 == OpFic38) {
                tiempEstan4 = estan38;

                Unidad4 = UniFich38;

              }
              if (Operacion4 == OpFic39) {
                tiempEstan4 = estan39;

                Unidad4 = UniFich39;


              }
              if (Operacion4 == OpFic40) {
                tiempEstan4 = estan40;

                Unidad4 = UniFich40;


              }
              if (Operacion4 == OpFic41) {
                tiempEstan4 = estan41;

                Unidad4 = UniFich41;


              }
              if (Operacion4 == OpFic42) {
                tiempEstan4 = estan42;

                Unidad4 = UniFich42;


              }
              if (Operacion4 == OpFic43) {
                tiempEstan4 = estan43;

                Unidad4 = UniFich43;


              }
              if (Operacion4 == OpFic44) {
                tiempEstan4 = estan44;

                Unidad4 = UniFich44;


              }
              if (Operacion4 == OpFic45) {
                tiempEstan4 = estan45;

                Unidad4 = UniFich45;

              }
              if (Operacion4 == OpFic46) {
                tiempEstan4 = estan46;

                Unidad4 = UniFich46;

              }
              if (Operacion4 == OpFic47) {
                tiempEstan4 = estan47;

                Unidad4 = UniFich47;


              }
              if (Operacion4 == OpFic48) {
                tiempEstan4 = estan48;

                Unidad4 = UniFich48;


              }
              if (Operacion4 == OpFic49) {
                tiempEstan4 = estan49;

                Unidad4 = UniFich49;


              }
              if (Operacion4 == OpFic50) {
                tiempEstan4 = estan50;

                Unidad4 = UniFich50;


              }

              //-------------------------------------------------5---------------------------------
              if (Operacion5 == OpFic1) {
                tiempEstan5 = estan1;
                Unidad5 = UniFich1;



              }
              if (Operacion5 == OpFic2) {
                tiempEstan5 = estan2;

                Unidad5 = UniFich2;



              }
              if (Operacion5 == OpFic3) {
                tiempEstan5 = estan3;

                Unidad5 = UniFich3;


              }
              if (Operacion5 == OpFic4) {
                tiempEstan5 = estan4;

                Unidad5 = UniFich4;


              }
              if (Operacion5 == OpFic5) {
                tiempEstan5 = estan5;

                Unidad5 = UniFich5;



              }
              if (Operacion5 == OpFic6) {
                tiempEstan5 = estan6;

                Unidad5 = UniFich6;


              }
              if (Operacion5 == OpFic7) {
                tiempEstan5 = estan7;

                Unidad5 = UniFich7;

              }
              if (Operacion5 == OpFic8) {
                tiempEstan5 = estan8;

                Unidad5 = UniFich8;


              }
              if (Operacion5 == OpFic9) {
                tiempEstan5 = estan9;

                Unidad5 = UniFich9;


              }
              if (Operacion5 == OpFic10) {
                tiempEstan5 = estan10;

                Unidad5 = UniFich10;

              }
              if (Operacion5 == OpFic11) {
                tiempEstan5 = estan11;

                Unidad5 = UniFich11;



              }
              if (Operacion5 == OpFic12) {
                tiempEstan5 = estan12;

                Unidad5 = UniFich12;


              }
              if (Operacion5 == OpFic13) {
                tiempEstan5 = estan13;

                Unidad5 = UniFich13;


              }
              if (Operacion5 == OpFic14) {
                tiempEstan5 = estan14;

                Unidad5 = UniFich14;


              }
              if (Operacion5 == OpFic15) {
                tiempEstan5 = estan15;

                Unidad5 = UniFich15;

              }
              if (Operacion5 == OpFic16) {
                tiempEstan5 = estan16;

                Unidad5 = UniFich16;



              }
              if (Operacion5 == OpFic17) {
                tiempEstan5 = estan17;

                Unidad5 = UniFich17;


              }
              if (Operacion5 == OpFic18) {
                tiempEstan5 = estan18;

                Unidad5 = UniFich18;

              }
              if (Operacion5 == OpFic19) {
                tiempEstan5 = estan19;

                Unidad5 = UniFich19;


              }
              if (Operacion5 == OpFic20) {
                tiempEstan5 = estan20;

                Unidad5 = UniFich20;


              }
              if (Operacion5 == OpFic21) {
                tiempEstan5 = estan21;

                Unidad5 = UniFich21;


              }
              if (Operacion5 == OpFic22) {
                tiempEstan5 = estan22;

                Unidad5 = UniFich22;


              }
              if (Operacion5 == OpFic23) {
                tiempEstan5 = estan23;

                Unidad5 = UniFich23;


              }
              if (Operacion5 == OpFic24) {
                tiempEstan5 = estan24;

                Unidad5 = UniFich24;

              }
              if (Operacion5 == OpFic25) {
                tiempEstan5 = estan25;

                Unidad5 = UniFich25;


              }
              if (Operacion5 == OpFic26) {
                tiempEstan5 = estan26;

                Unidad5 = UniFich26;


              }
              if (Operacion5 == OpFic27) {
                tiempEstan5 = estan27;

                Unidad5 = UniFich27;


              }
              if (Operacion5 == OpFic28) {
                tiempEstan5 = estan28;

                Unidad5 = UniFich28;


              }
              if (Operacion5 == OpFic29) {
                tiempEstan5 = estan29;

                Unidad5 = UniFich29;


              }
              if (Operacion5 == OpFic30) {
                tiempEstan5 = estan30;

                Unidad5 = UniFich30;


              }

              if (Operacion5 == OpFic31) {
                tiempEstan5 = estan31;

                Unidad5 = UniFich31;


              }
              if (Operacion5 == OpFic32) {
                tiempEstan5 = estan32;

                Unidad5 = UniFich32;

              }
              if (Operacion5 == OpFic33) {
                tiempEstan5 = estan33;

                Unidad5 = UniFich33;

              }
              if (Operacion5 == OpFic34) {
                tiempEstan5 = estan34;

                Unidad5 = UniFich34;

              }
              if (Operacion5 == OpFic35) {
                tiempEstan5 = estan35;

                Unidad5 = UniFich35;


              }
              if (Operacion5 == OpFic36) {
                tiempEstan5 = estan36;

                Unidad5 = UniFich36;


              }
              if (Operacion5 == OpFic37) {
                tiempEstan5 = estan37;

                Unidad5 = UniFich37;

              }
              if (Operacion5 == OpFic38) {
                tiempEstan5 = estan38;

                Unidad5 = UniFich38;

              }
              if (Operacion5 == OpFic39) {
                tiempEstan5 = estan39;

                Unidad5 = UniFich39;


              }
              if (Operacion5 == OpFic40) {
                tiempEstan5 = estan40;

                Unidad5 = UniFich40;


              }
              if (Operacion5 == OpFic41) {
                tiempEstan5 = estan41;

                Unidad5 = UniFich41;


              }
              if (Operacion5 == OpFic42) {
                tiempEstan5 = estan42;

                Unidad5 = UniFich42;


              }
              if (Operacion5 == OpFic43) {
                tiempEstan5 = estan43;

                Unidad5 = UniFich43;


              }
              if (Operacion5 == OpFic44) {
                tiempEstan5 = estan44;

                Unidad5 = UniFich44;


              }
              if (Operacion5 == OpFic45) {
                tiempEstan5 = estan45;

                Unidad5 = UniFich45;

              }
              if (Operacion5 == OpFic46) {
                tiempEstan5 = estan46;

                Unidad5 = UniFich46;

              }
              if (Operacion5 == OpFic47) {
                tiempEstan5 = estan47;

                Unidad5 = UniFich47;


              }
              if (Operacion5 == OpFic48) {
                tiempEstan5 = estan48;

                Unidad5 = UniFich48;


              }
              if (Operacion5 == OpFic49) {
                tiempEstan5 = estan49;

                Unidad5 = UniFich49;


              }
              if (Operacion5 == OpFic50) {
                tiempEstan5 = estan50;

                Unidad5 = UniFich50;


              }
              //---------------------------------------condicion 6---------------------

              if (Operacion6 == OpFic1) {
                tiempEstan6 = estan1;
                Unidad6 = UniFich1;



              }
              if (Operacion6 == OpFic2) {
                tiempEstan6 = estan2;

                Unidad6 = UniFich2;



              }
              if (Operacion6 == OpFic3) {
                tiempEstan6 = estan3;

                Unidad6 = UniFich3;


              }
              if (Operacion6 == OpFic4) {
                tiempEstan6 = estan4;

                Unidad6 = UniFich4;


              }
              if (Operacion6 == OpFic5) {
                tiempEstan6 = estan5;

                Unidad6 = UniFich5;


              }
              if (Operacion6 == OpFic6) {
                tiempEstan6 = estan6;

                Unidad6 = UniFich6;


              }
              if (Operacion6 == OpFic7) {
                tiempEstan6 = estan7;

                Unidad6 = UniFich7;

              }
              if (Operacion6 == OpFic8) {
                tiempEstan6 = estan8;

                Unidad6 = UniFich8;


              }
              if (Operacion6 == OpFic9) {
                tiempEstan6 = estan9;

                Unidad6 = UniFich9;


              }
              if (Operacion6 == OpFic10) {
                tiempEstan6 = estan10;

                Unidad6 = UniFich10;

              }
              if (Operacion6 == OpFic11) {
                tiempEstan6 = estan11;

                Unidad6 = UniFich11;


              }
              if (Operacion6 == OpFic12) {
                tiempEstan6 = estan12;

                Unidad6 = UniFich12;


              }
              if (Operacion6 == OpFic13) {
                tiempEstan6 = estan13;

                Unidad6 = UniFich13;


              }
              if (Operacion6 == OpFic14) {
                tiempEstan6 = estan14;

                Unidad6 = UniFich14;



              }
              if (Operacion6 == OpFic15) {
                tiempEstan6 = estan15;

                Unidad6 = UniFich15;

              }
              if (Operacion6 == OpFic16) {
                tiempEstan6 = estan16;

                Unidad6 = UniFich16;


              }
              if (Operacion6 == OpFic17) {
                tiempEstan6 = estan17;

                Unidad6 = UniFich17;


              }
              if (Operacion6 == OpFic18) {
                tiempEstan6 = estan18;

                Unidad6 = UniFich18;

              }
              if (Operacion6 == OpFic19) {
                tiempEstan6 = estan19;

                Unidad6 = UniFich19;


              }
              if (Operacion6 == OpFic20) {
                tiempEstan6 = estan20;

                Unidad6 = UniFich20;


              }
              if (Operacion6 == OpFic21) {
                tiempEstan6 = estan21;

                Unidad6 = UniFich21;


              }
              if (Operacion6 == OpFic22) {
                tiempEstan6 = estan22;

                Unidad6 = UniFich22;


              }
              if (Operacion6 == OpFic23) {
                tiempEstan6 = estan23;

                Unidad6 = UniFich23;


              }
              if (Operacion6 == OpFic24) {
                tiempEstan6 = estan24;

                Unidad6 = UniFich24;

              }
              if (Operacion6 == OpFic25) {
                tiempEstan6 = estan25;

                Unidad6 = UniFich25;


              }
              if (Operacion6 == OpFic26) {
                tiempEstan6 = estan26;

                Unidad6 = UniFich26;



              }
              if (Operacion6 == OpFic27) {
                tiempEstan6 = estan27;

                Unidad6 = UniFich27;


              }
              if (Operacion6 == OpFic28) {
                tiempEstan6 = estan28;

                Unidad6 = UniFich28;


              }
              if (Operacion6 == OpFic29) {
                tiempEstan6 = estan29;

                Unidad6 = UniFich29;


              }
              if (Operacion6 == OpFic30) {
                tiempEstan6 = estan30;

                Unidad6 = UniFich30;


              }

              if (Operacion6 == OpFic31) {
                tiempEstan6 = estan31;

                Unidad6 = UniFich31;


              }
              if (Operacion6 == OpFic32) {
                tiempEstan6 = estan32;

                Unidad6 = UniFich32;

              }
              if (Operacion6 == OpFic33) {
                tiempEstan6 = estan33;

                Unidad6 = UniFich33;

              }
              if (Operacion6 == OpFic34) {
                tiempEstan6 = estan34;

                Unidad6 = UniFich34;

              }
              if (Operacion6 == OpFic35) {
                tiempEstan6 = estan35;

                Unidad6 = UniFich35;


              }
              if (Operacion6 == OpFic36) {
                tiempEstan6 = estan36;

                Unidad6 = UniFich36;


              }
              if (Operacion6 == OpFic37) {
                tiempEstan6 = estan37;

                Unidad6 = UniFich37;

              }
              if (Operacion6 == OpFic38) {
                tiempEstan6 = estan38;

                Unidad6 = UniFich38;

              }
              if (Operacion6 == OpFic39) {
                tiempEstan6 = estan39;

                Unidad6 = UniFich39;


              }
              if (Operacion6 == OpFic40) {
                tiempEstan6 = estan40;

                Unidad6 = UniFich40;


              }
              if (Operacion6 == OpFic41) {
                tiempEstan6 = estan41;

                Unidad6 = UniFich41;


              }
              if (Operacion6 == OpFic42) {
                tiempEstan6 = estan42;

                Unidad6 = UniFich42;


              }
              if (Operacion6 == OpFic43) {
                tiempEstan6 = estan43;

                Unidad6 = UniFich43;


              }
              if (Operacion6 == OpFic44) {
                tiempEstan6 = estan44;

                Unidad6 = UniFich44;


              }
              if (Operacion6 == OpFic45) {
                tiempEstan6 = estan45;

                Unidad6 = UniFich45;

              }
              if (Operacion6 == OpFic46) {
                tiempEstan6 = estan46;

                Unidad6 = UniFich46;

              }
              if (Operacion6 == OpFic47) {
                tiempEstan6 = estan47;

                Unidad6 = UniFich47;


              }
              if (Operacion6 == OpFic48) {
                tiempEstan6 = estan48;

                Unidad6 = UniFich48;


              }
              if (Operacion6 == OpFic49) {
                tiempEstan6 = estan49;

                Unidad6 = UniFich49;


              }
              if (Operacion6 == OpFic50) {
                tiempEstan6 = estan50;

                Unidad6 = UniFich50;


              }
              //---------------------------------------condicion 7---------------------

              if (Operacion7 == OpFic1) {
                tiempEstan7 = estan1;
                Unidad7 = UniFich1;



              }
              if (Operacion7 == OpFic2) {
                tiempEstan7 = estan2;

                Unidad7 = UniFich2;



              }
              if (Operacion7 == OpFic3) {
                tiempEstan7 = estan3;

                Unidad7 = UniFich3;


              }
              if (Operacion7 == OpFic4) {
                tiempEstan7 = estan4;

                Unidad7 = UniFich4;


              }
              if (Operacion7 == OpFic5) {
                tiempEstan7 = estan5;

                Unidad7 = UniFich5;


              }
              if (Operacion7 == OpFic6) {
                tiempEstan7 = estan6;

                Unidad7 = UniFich6;


              }
              if (Operacion7 == OpFic7) {
                tiempEstan7 = estan7;

                Unidad7 = UniFich7;

              }
              if (Operacion7 == OpFic8) {
                tiempEstan7 = estan8;

                Unidad7 = UniFich8;


              }
              if (Operacion7 == OpFic9) {
                tiempEstan7 = estan9;

                Unidad7 = UniFich9;


              }
              if (Operacion7 == OpFic10) {
                tiempEstan7 = estan10;

                Unidad7 = UniFich10;

              }
              if (Operacion7 == OpFic11) {
                tiempEstan7 = estan11;

                Unidad7 = UniFich11;


              }
              if (Operacion7 == OpFic12) {
                tiempEstan7 = estan12;

                Unidad7 = UniFich12;


              }
              if (Operacion7 == OpFic13) {
                tiempEstan7 = estan13;

                Unidad7 = UniFich13;


              }
              if (Operacion7 == OpFic14) {
                tiempEstan7 = estan14;

                Unidad7 = UniFich14;


              }
              if (Operacion7 == OpFic15) {
                tiempEstan7 = estan15;

                Unidad7 = UniFich15;

              }
              if (Operacion7 == OpFic16) {
                tiempEstan7 = estan16;

                Unidad7 = UniFich16;



              }
              if (Operacion7 == OpFic17) {
                tiempEstan7 = estan17;

                Unidad7 = UniFich17;


              }
              if (Operacion7 == OpFic18) {
                tiempEstan7 = estan18;

                Unidad7 = UniFich18;

              }
              if (Operacion7 == OpFic19) {
                tiempEstan7 = estan19;

                Unidad7 = UniFich19;


              }
              if (Operacion7 == OpFic20) {
                tiempEstan7 = estan20;

                Unidad7 = UniFich20;


              }
              if (Operacion7 == OpFic21) {
                tiempEstan7 = estan21;

                Unidad7 = UniFich21;


              }
              if (Operacion7 == OpFic22) {
                tiempEstan7 = estan22;

                Unidad7 = UniFich22;


              }
              if (Operacion7 == OpFic23) {
                tiempEstan7 = estan23;

                Unidad7 = UniFich23;


              }
              if (Operacion7 == OpFic24) {
                tiempEstan7 = estan24;

                Unidad7 = UniFich24;

              }
              if (Operacion7 == OpFic25) {
                tiempEstan7 = estan25;

                Unidad7 = UniFich25;



              }
              if (Operacion7 == OpFic26) {
                tiempEstan7 = estan26;

                Unidad7 = UniFich26;


              }
              if (Operacion7 == OpFic27) {
                tiempEstan7 = estan27;

                Unidad7 = UniFich27;


              }
              if (Operacion7 == OpFic28) {
                tiempEstan7 = estan28;

                Unidad7 = UniFich28;


              }
              if (Operacion7 == OpFic29) {
                tiempEstan7 = estan29;

                Unidad7 = UniFich29;


              }
              if (Operacion7 == OpFic30) {
                tiempEstan7 = estan30;

                Unidad7 = UniFich30;


              }

              if (Operacion7 == OpFic31) {
                tiempEstan7 = estan31;

                Unidad7 = UniFich31;


              }
              if (Operacion7 == OpFic32) {
                tiempEstan7 = estan32;

                Unidad7 = UniFich32;

              }
              if (Operacion7 == OpFic33) {
                tiempEstan7 = estan33;

                Unidad7 = UniFich33;

              }
              if (Operacion7 == OpFic34) {
                tiempEstan7 = estan34;

                Unidad7 = UniFich34;

              }
              if (Operacion7 == OpFic35) {
                tiempEstan7 = estan35;

                Unidad7 = UniFich35;


              }
              if (Operacion7 == OpFic36) {
                tiempEstan7 = estan36;

                Unidad7 = UniFich36;


              }
              if (Operacion7 == OpFic37) {
                tiempEstan7 = estan37;

                Unidad7 = UniFich37;

              }
              if (Operacion7 == OpFic38) {
                tiempEstan7 = estan38;

                Unidad7 = UniFich38;

              }
              if (Operacion7 == OpFic39) {
                tiempEstan7 = estan39;

                Unidad7 = UniFich39;


              }
              if (Operacion7 == OpFic40) {
                tiempEstan7 = estan40;

                Unidad7 = UniFich40;


              }
              if (Operacion7 == OpFic41) {
                tiempEstan7 = estan41;

                Unidad7 = UniFich41;


              }
              if (Operacion7 == OpFic42) {
                tiempEstan7 = estan42;

                Unidad7 = UniFich42;


              }
              if (Operacion7 == OpFic43) {
                tiempEstan7 = estan43;

                Unidad7 = UniFich43;


              }
              if (Operacion7 == OpFic44) {
                tiempEstan7 = estan44;

                Unidad7 = UniFich44;


              }
              if (Operacion7 == OpFic45) {
                tiempEstan7 = estan45;

                Unidad7 = UniFich45;

              }
              if (Operacion7 == OpFic46) {
                tiempEstan7 = estan46;

                Unidad7 = UniFich46;

              }
              if (Operacion7 == OpFic47) {
                tiempEstan7 = estan47;

                Unidad7 = UniFich47;


              }
              if (Operacion7 == OpFic48) {
                tiempEstan7 = estan48;

                Unidad7 = UniFich48;


              }
              if (Operacion7 == OpFic49) {
                tiempEstan7 = estan49;

                Unidad7 = UniFich49;


              }
              if (Operacion7 == OpFic50) {
                tiempEstan7 = estan50;

                Unidad7 = UniFich50;


              }

              //---------------------------------------condicion 8---------------------

              if (Operacion8 == OpFic1) {
                tiempEstan8 = estan1;
                Unidad8 = UniFich1;



              }
              if (Operacion8 == OpFic2) {
                tiempEstan8 = estan2;

                Unidad8 = UniFich2;



              }
              if (Operacion8 == OpFic3) {
                tiempEstan8 = estan3;

                Unidad8 = UniFich3;


              }
              if (Operacion8 == OpFic4) {
                tiempEstan8 = estan4;

                Unidad8 = UniFich4;


              }
              if (Operacion8 == OpFic5) {
                tiempEstan8 = estan5;

                Unidad8 = UniFich5;


              }
              if (Operacion8 == OpFic6) {
                tiempEstan8 = estan6;

                Unidad8 = UniFich6;


              }
              if (Operacion8 == OpFic7) {
                tiempEstan8 = estan7;

                Unidad8 = UniFich7;

              }
              if (Operacion8 == OpFic8) {
                tiempEstan8 = estan8;

                Unidad8 = UniFich8;


              }
              if (Operacion8 == OpFic9) {
                tiempEstan8 = estan9;

                Unidad8 = UniFich9;


              }
              if (Operacion8 == OpFic10) {
                tiempEstan8 = estan10;

                Unidad8 = UniFich10;


              }
              if (Operacion8 == OpFic11) {
                tiempEstan8 = estan11;

                Unidad8 = UniFich11;


              }
              if (Operacion8 == OpFic12) {
                tiempEstan8 = estan12;

                Unidad8 = UniFich12;


              }
              if (Operacion8 == OpFic13) {
                tiempEstan8 = estan13;

                Unidad8 = UniFich13;


              }
              if (Operacion8 == OpFic14) {
                tiempEstan8 = estan14;

                Unidad8 = UniFich14;


              }
              if (Operacion8 == OpFic15) {
                tiempEstan8 = estan15;

                Unidad8 = UniFich15;

              }
              if (Operacion8 == OpFic16) {
                tiempEstan8 = estan16;

                Unidad8 = UniFich16;


              }
              if (Operacion8 == OpFic17) {
                tiempEstan8 = estan17;

                Unidad8 = UniFich17;


              }
              if (Operacion8 == OpFic18) {
                tiempEstan8 = estan18;

                Unidad8 = UniFich18;

              }
              if (Operacion8 == OpFic19) {
                tiempEstan8 = estan19;

                Unidad8 = UniFich19;


              }
              if (Operacion8 == OpFic20) {
                tiempEstan8 = estan20;

                Unidad8 = UniFich20;


              }
              if (Operacion8 == OpFic21) {
                tiempEstan8 = estan21;

                Unidad8 = UniFich21;


              }
              if (Operacion8 == OpFic22) {
                tiempEstan8 = estan22;

                Unidad8 = UniFich22;


              }
              if (Operacion8 == OpFic23) {
                tiempEstan8 = estan23;

                Unidad8 = UniFich23;


              }
              if (Operacion8 == OpFic24) {
                tiempEstan8 = estan24;

                Unidad8 = UniFich24;

              }
              if (Operacion8 == OpFic25) {
                tiempEstan8 = estan25;

                Unidad8 = UniFich25;



              }
              if (Operacion8 == OpFic26) {
                tiempEstan8 = estan26;

                Unidad8 = UniFich26;


              }
              if (Operacion8 == OpFic27) {
                tiempEstan8 = estan27;

                Unidad8 = UniFich27;


              }
              if (Operacion8 == OpFic28) {
                tiempEstan8 = estan28;

                Unidad8 = UniFich28;


              }
              if (Operacion8 == OpFic29) {
                tiempEstan8 = estan29;

                Unidad8 = UniFich29;


              }
              if (Operacion8 == OpFic30) {
                tiempEstan8 = estan30;

                Unidad8 = UniFich30;


              }

              if (Operacion8 == OpFic31) {
                tiempEstan8 = estan31;

                Unidad8 = UniFich31;


              }
              if (Operacion8 == OpFic32) {
                tiempEstan8 = estan32;

                Unidad8 = UniFich32;

              }
              if (Operacion8 == OpFic33) {
                tiempEstan8 = estan33;

                Unidad8 = UniFich33;

              }
              if (Operacion8 == OpFic34) {
                tiempEstan8 = estan34;

                Unidad8 = UniFich34;

              }
              if (Operacion8 == OpFic35) {
                tiempEstan8 = estan35;

                Unidad8 = UniFich35;


              }
              if (Operacion8 == OpFic36) {
                tiempEstan8 = estan36;

                Unidad8 = UniFich36;


              }
              if (Operacion8 == OpFic37) {
                tiempEstan8 = estan37;

                Unidad8 = UniFich37;

              }
              if (Operacion8 == OpFic38) {
                tiempEstan8 = estan38;

                Unidad8 = UniFich38;

              }
              if (Operacion8 == OpFic39) {
                tiempEstan8 = estan39;

                Unidad8 = UniFich39;


              }
              if (Operacion8 == OpFic40) {
                tiempEstan8 = estan40;

                Unidad8 = UniFich40;


              }
              if (Operacion8 == OpFic41) {
                tiempEstan8 = estan41;

                Unidad8 = UniFich41;


              }
              if (Operacion8 == OpFic42) {
                tiempEstan8 = estan42;

                Unidad8 = UniFich42;


              }
              if (Operacion8 == OpFic43) {
                tiempEstan8 = estan43;

                Unidad8 = UniFich43;


              }
              if (Operacion8 == OpFic44) {
                tiempEstan8 = estan44;

                Unidad8 = UniFich44;


              }
              if (Operacion8 == OpFic45) {
                tiempEstan8 = estan45;

                Unidad8 = UniFich45;

              }
              if (Operacion8 == OpFic46) {
                tiempEstan8 = estan46;

                Unidad8 = UniFich46;

              }
              if (Operacion8 == OpFic47) {
                tiempEstan8 = estan47;

                Unidad8 = UniFich47;


              }
              if (Operacion8 == OpFic48) {
                tiempEstan8 = estan48;

                Unidad8 = UniFich48;


              }
              if (Operacion8 == OpFic49) {
                tiempEstan8 = estan49;

                Unidad8 = UniFich49;


              }
              if (Operacion8 == OpFic50) {
                tiempEstan8 = estan50;

                Unidad8 = UniFich50;


              }

              //---------------------------------------condicion 9---------------------

              if (Operacion9 == OpFic1) {
                tiempEstan9 = estan1;
                Unidad9 = UniFich1;



              }
              if (Operacion9 == OpFic2) {
                tiempEstan9 = estan2;

                Unidad9 = UniFich2;



              }
              if (Operacion9 == OpFic3) {
                tiempEstan9 = estan3;

                Unidad9 = UniFich3;


              }
              if (Operacion9 == OpFic4) {
                tiempEstan9 = estan4;

                Unidad9 = UniFich4;


              }
              if (Operacion9 == OpFic5) {
                tiempEstan9 = estan5;

                Unidad9 = UniFich5;


              }
              if (Operacion9 == OpFic6) {
                tiempEstan9 = estan6;

                Unidad9 = UniFich6;


              }
              if (Operacion9 == OpFic7) {
                tiempEstan9 = estan7;

                Unidad9 = UniFich7;

              }
              if (Operacion9 == OpFic8) {
                tiempEstan9 = estan8;

                Unidad9 = UniFich8;


              }
              if (Operacion9 == OpFic9) {
                tiempEstan9 = estan9;

                Unidad9 = UniFich9;


              }
              if (Operacion9 == OpFic10) {
                tiempEstan9 = estan10;

                Unidad9 = UniFich10;

              }
              if (Operacion9 == OpFic11) {
                tiempEstan9 = estan11;

                Unidad9 = UniFich11;



              }
              if (Operacion9 == OpFic12) {
                tiempEstan9 = estan12;

                Unidad9 = UniFich12;


              }
              if (Operacion9 == OpFic13) {
                tiempEstan9 = estan13;

                Unidad9 = UniFich13;


              }
              if (Operacion9 == OpFic14) {
                tiempEstan9 = estan14;

                Unidad9 = UniFich14;


              }
              if (Operacion9 == OpFic15) {
                tiempEstan9 = estan15;

                Unidad9 = UniFich15;

              }
              if (Operacion9 == OpFic16) {
                tiempEstan9 = estan16;

                Unidad9 = UniFich16;


              }
              if (Operacion9 == OpFic17) {
                tiempEstan9 = estan17;

                Unidad9 = UniFich17;


              }
              if (Operacion9 == OpFic18) {
                tiempEstan9 = estan18;

                Unidad9 = UniFich18;

              }
              if (Operacion9 == OpFic19) {
                tiempEstan9 = estan19;

                Unidad9 = UniFich19;


              }
              if (Operacion9 == OpFic20) {
                tiempEstan9 = estan20;

                Unidad9 = UniFich20;


              }
              if (Operacion9 == OpFic21) {
                tiempEstan9 = estan21;

                Unidad9 = UniFich21;


              }
              if (Operacion9 == OpFic22) {
                tiempEstan9 = estan22;

                Unidad9 = UniFich22;


              }
              if (Operacion9 == OpFic23) {
                tiempEstan9 = estan23;

                Unidad9 = UniFich23;


              }
              if (Operacion9 == OpFic24) {
                tiempEstan9 = estan24;

                Unidad9 = UniFich24;

              }
              if (Operacion9 == OpFic25) {
                tiempEstan9 = estan25;

                Unidad9 = UniFich25;


              }
              if (Operacion9 == OpFic26) {
                tiempEstan9 = estan26;

                Unidad9 = UniFich26;



              }
              if (Operacion9 == OpFic27) {
                tiempEstan9 = estan27;

                Unidad9 = UniFich27;


              }
              if (Operacion9 == OpFic28) {
                tiempEstan9 = estan28;

                Unidad9 = UniFich28;


              }
              if (Operacion9 == OpFic29) {
                tiempEstan9 = estan29;

                Unidad9 = UniFich29;


              }
              if (Operacion9 == OpFic30) {
                tiempEstan9 = estan30;

                Unidad9 = UniFich30;


              }

              if (Operacion9 == OpFic31) {
                tiempEstan9 = estan31;

                Unidad9 = UniFich31;


              }
              if (Operacion9 == OpFic32) {
                tiempEstan9 = estan32;

                Unidad9 = UniFich32;

              }
              if (Operacion9 == OpFic33) {
                tiempEstan9 = estan33;

                Unidad9 = UniFich33;

              }
              if (Operacion9 == OpFic34) {
                tiempEstan9 = estan34;

                Unidad9 = UniFich34;

              }
              if (Operacion9 == OpFic35) {
                tiempEstan9 = estan35;

                Unidad9 = UniFich35;


              }
              if (Operacion9 == OpFic36) {
                tiempEstan9 = estan36;

                Unidad9 = UniFich36;


              }
              if (Operacion9 == OpFic37) {
                tiempEstan9 = estan37;

                Unidad9 = UniFich37;

              }
              if (Operacion9 == OpFic38) {
                tiempEstan9 = estan38;

                Unidad9 = UniFich38;

              }
              if (Operacion9 == OpFic39) {
                tiempEstan9 = estan39;

                Unidad9 = UniFich39;


              }
              if (Operacion9 == OpFic40) {
                tiempEstan9 = estan40;

                Unidad9 = UniFich40;


              }
              if (Operacion9 == OpFic41) {
                tiempEstan9 = estan41;

                Unidad9 = UniFich41;


              }
              if (Operacion9 == OpFic42) {
                tiempEstan9 = estan42;

                Unidad9 = UniFich42;


              }
              if (Operacion9 == OpFic43) {
                tiempEstan9 = estan43;

                Unidad9 = UniFich43;


              }
              if (Operacion9 == OpFic44) {
                tiempEstan9 = estan44;

                Unidad9 = UniFich44;


              }
              if (Operacion9 == OpFic45) {
                tiempEstan9 = estan45;

                Unidad9 = UniFich45;

              }
              if (Operacion9 == OpFic46) {
                tiempEstan9 = estan46;

                Unidad9 = UniFich46;

              }
              if (Operacion9 == OpFic47) {
                tiempEstan9 = estan47;

                Unidad9 = UniFich47;


              }
              if (Operacion9 == OpFic48) {
                tiempEstan9 = estan48;

                Unidad9 = UniFich48;


              }
              if (Operacion9 == OpFic49) {
                tiempEstan9 = estan49;

                Unidad9 = UniFich49;


              }
              if (Operacion9 == OpFic50) {
                tiempEstan9 = estan50;

                Unidad9 = UniFich50;


              }

              //---------------------------------------------vacios-------------------------
              if (Operacion == "") {
                tiempEstan1 = 0;

                Unidad1 = 0;
              }
              if (Operacion2 == "") {
                tiempEstan2 = 0;

                Unidad2 = 0;
              }
              if (Operacion3 == "") {
                tiempEstan3 = 0;

                Unidad3 = 0;
              }
              if (Operacion4 == "") {
                tiempEstan4 = 0;

                Unidad4 = 0;
              }
              if (Operacion5 == "") {
                tiempEstan5 = 0;

                Unidad5 = 0;
              }
              if (Operacion6 == "") {
                tiempEstan6 = 0;

                Unidad6 = 0;
              }
              if (Operacion7 == "") {
                tiempEstan7 = 0;

                Unidad7 = 0;
              }
              if (Operacion8 == "") {
                tiempEstan8 = 0;

                Unidad8 = 0;
              }
              if (Operacion9 == "") {
                tiempEstan9 = 0;

                Unidad9 = 0;
              }

              //-----------------------------validacion check box--------------------
              comis = 0;
              pau11 = 0;
              dos = 0;
              tiempoSin = 0;
              var comida = document.getElementById("cbComida").value;
              var tinto = document.getElementById("cbTinto").value;
              var dosPM = document.getElementById("cbTinto2").value;

              if (comida) {
                comis = 900;
              }
              if (tinto) {
                pau11 = 480;
              }
              if (dosPM) {
                dos = 180;
              }







              //---------------------------calculo porcentaje-----------------------------
              //-------------------------------------------------------------------------
              var texto = document.getElementById("Comentarios").value;
              //Reemplazamos los saltos de linea por espacios
              texto = texto.replace(/\r?\n/g, " ");
              //Reemplazamos los espacios seguidos por uno solo
              texto = texto.replace(/[ ]+/g, " ");
              //Quitarmos los espacios del principio y del final
              texto = texto.replace(/^ /, "");
              texto = texto.replace(/ $/, "");
              //Troceamos el texto por los espacios
              var textoTroceado = texto.split(" ");
              //Contamos todos los trozos de cadenas que existen
              numeroPalabras = textoTroceado.length;

              //  tiempoSin=tiemTrabajado - comis - pau11 - dos;
              //----------------------------------------------------------------------
              TiempoStdTotal = tiempEstan1 + tiempEstan2 + tiempEstan3 + tiempEstan4 + tiempEstan5 + tiempEstan6 + tiempEstan7
                + tiempEstan8 + tiempEstan9;
              //console.log("el tiempo total STD es de:  " + TiempoStdTotal);
              unidadSTD = parseInt(Unidad1 + Unidad2 + Unidad3 + Unidad4 + Unidad5 + Unidad6 + Unidad7 + Unidad8 + Unidad9);
              //console.log("Las undiades Std son :" + unidadSTD);

              /*rela=(cantidadElabo*3600)/unidadSTD;
              Rendi=(rela*100)/tiemTrabajado;*/
              rela = TiempoStdTotal * cantidadElabo;
              Rendi = ((rela * 100) / (tiemTrabajado)) / numeroPalabras;
              // Rendi = ((rela * 100) / (tiempoSin)) / numeroPalabras;
              // console.log(numeroPalabras);

              console.log("px se calcula el %");

              //console.log("El rendimiento de las unidades realizadas es de: " + Rendi);

              /*  alert("Tu tiempo fue de: " +(tiemTrabajado/60).toFixed(2) + "minutos" + " " + 
                " El Rendimiento ha sido: " +Math.round(Rendi)+ "%");*/

              Swal.fire("Tiempo: " + (tiemTrabajado / 60).toFixed(2) + "minutos" + " " +
                " El Rendimiento ha sido: " + Math.round(Rendi) + "%");

              //--------------------------------------------------------------------------

              /*alert("Tu tiempo fue de:"+(tiemTrabajado/60).toFixed(2)+" minutos"+"  "+
              "EL Rendimiento obtenido fue del: " +Math.round(RendimientoOp)+"%");*/

              //   alert("El rendimiento fue: "+RendimientoOp);

              /* tabl.innerHTML +=`
               <tr>
           <th scope="row">${Operario}</th>
           <th scope="row">${Maqui}</th>
       
           <td>${Operacion}</td>
           <td>${tiempEstan}seg</td>
       
           <td>${cantidadElabo}</td>
           <td>${tiemTrabajado}seg</td>
       
           <td>${Math.round(RendimientoOp)}%</td>
           </tr>
       
       
       
       `*/


              //  console.log(consultaref);


              // console.log("rendimiento .................................#30"+RendimientoOp);




            });
          })

      });
    })

  /*   });
  })

       });
  })

      });
  })

       });
  })

      });
  })

       });
  })

      });
  })

       });
  })

      });
  })
       });
  })

      });
  })

       });
  })

      });
  })

       });
  })

      });
  })

       });
  })

      });
  })

       });
  })

      });
  })

       });
  })

      });
  })


               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })

               });
           })
    
                        });
                    })

               });
           })
                       });
})
           });
})*/




  // console.log("totalilizimooooooooooooooooooooooo"+tiempoTotalizimo);
  //   console.log("el totaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal:"+tiempoTotal);



  //-------------------------------verificacion maq---------------------





}

//------------------------------------redireccionar---------------------------------------------
redi = function redireccionar() {
  setTimeout("location.href='https://pruebarepresentaciones.web.app'", 5000);
}

//---------------------------------------iniciar solo------------------------------------------------
var doc = document.getElementById("acc");
var color = ["green", "#F5F50A"];
var i = 0; function change() {
  doc.style.backgroundColor = color[i];
  i++;
  if (i > color.length - 1) { i = 0; }
}
setInterval(change, 1000);


//actualizar = function () { location.reload(true); }

ifes = function () {
  var valda = document.getElementById("Idverificacion").value;

  if (valda == 1) {
    alert("NO SE PUEDE OK");
  } if (valda != 1) {
    alert("SI SE PUEDE");
  }

  //document.getElementById("Idverificacion").value=0;


}

function Acceder() {


  if (confirm("Seguro que desea Iniciar el Tiempo?")) {
    var consulHora = document.getElementById("TieIniProdu").value;
    if (consulHora != "") {
      // alert("Ya ha iniciado el Cronometro...");
      Swal.fire(
        'Error',
        'Ya ha iniciado el cronometro previamente...',
        'info'
      )

    } else {

      //-------------------------------verificacion de registro---------------------------------
      /*  var consulUsu=document.getElementById("nombre").value;
        var consulOp=document.getElementById("op").value;
       // var consulUsu=document.getElementById("").value;
  
  
        db.collection("controladministradores").where("usuariooperario", "==", consulUsu).where("referencia", "==", consulOp)
        .where("tiempo", "==", "")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                 var tIni=Date.parse(`${doc.data().TiempoIni}`);
                var usu=`${doc.data().usuariooperario}`;
  
                if(tIni!=""){
                    alert("el usuario ya existe!!!");
                }
                 if(tIni=="" ){
                    alert("se puede realizar el registro...");
                }
                
               
                   
  
        
                })
                
                });*/


      //-----------------------------------------------------------------------------------------


      regis();

    }


  } else {

  }
}

validarIgualdad = function () {

  var consulUsu = document.getElementById("nombre").value;
  //usuarioIniciado=true;
  document.getElementById("Idverificacion").value = 0;


  db.collection("controladministradores").where("tiempo", "==", "")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        usuario = `${doc.data().usuariooperario}`;


        /* usuarioArr= new Array();
         var i=1;
         usuarioArr.push([usuario]);
         i = i + 1;
         console.log(usuarioArr);*/

        var arreglo = [usuario];
        //arreglo.push(usuario);
        console.log(arreglo);


        for (cont = 0; cont < arreglo.length; cont++) {

          //  console.log(arreglo);
          if (consulUsu == arreglo) {

            // console.log("se encontro coincidencia"+arreglo);
            alert("se encontro coincidencia" + arreglo);
            document.getElementById("Idverificacion").value = 1;

            // cont++;


          }

        }



      })

    });

  evaluacion();


}

evaluacion = function (valda) {



  if (valda == 1) {
    alert("NO SE PUEDE OK");
    //console.log("NO SE PUEDE");
  } if (valda == 0) {
    alert("SI SE PUEDE");
    //console.log("SI SE PUEDE");
  }
  document.getElementById("Idverificacion").value = 0;


}

validarDiferencia = function () {

  var consulUsu = document.getElementById("nombre").value;
  //usuarioIniciado=true;

  db.collection("controladministradores").where("tiempo", "==", "")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        usuario = `${doc.data().usuariooperario}`;


        /* usuarioArr= new Array();
         var i=1;
         usuarioArr.push([usuario]);
         i = i + 1;
         console.log(usuarioArr);*/

        var arreglo = [];
        arreglo.push(usuario);
        // console.log(arreglo);


        for (val = 0; val < arreglo.length; val++) {

          //  console.log(arreglo);
          if (consulUsu != arreglo) {
            console.log("NO se encontro coincidencia" + arreglo);
            //alert("NO se encontro coincidencia"+arreglo);
            // validaNO=true;
            val++;

          }



        }






      })

    });



}

//---------------------------------------------------finalizar solo--------------------------------------------
function Final() {
  /* if (document.getElementById("lote").value == "") {
     Swal.fire(
       'Error',
       'Complete el campo LOTE...',
       'info'
     )
 
   }
   if (document.getElementById("tall").value == "") {
     Swal.fire(
       'Error',
       'Complete el campo TALLA...',
       'info'
     )
 
   }
   if (document.getElementById("canti").value == "") {
     Swal.fire(
       'Error',
       'Complete el campo CANTIDAD...',
       'info'
     )
 
   } else {
     cantid = 0;
     cantid = document.getElementById("canti").value;
     sumaSubtotal = 0;
     subtotal = 0;
 
 
 
   }*/
  /*  if(document.getElementById("canti").value!=""){
      cantid=0;
       cantid=document.getElementById("canti").value;
         
        sumaSubtotal=0;
        subtotal=0;

       


        

    }*//*else{
alert("Complete los campos para continuar...");
 
}*/


  /*if (confirm("Seguro que desea Finalizar el Tiempo?")) {
    consulHora = document.getElementById("TieIniProdu").value;
    if (consulHora != "") {
      var horaFinProd = new Date();
      document.getElementById("TieFinProdu").value = horaFinProd;
      document.getElementById("TieFinProdu").style.background = "rgb(32, 226, 32)";
      resulTiemPro = ((horaFinProd - consulHora) / 1000);
     
          document.getElementById("sumatoriaCantidades").value=sumaSubtotal;
  
     var subtotal = document.getElementById("sumatoriaCantidades").value;
  
      sumaSubtotal = parseInt(cantid) + parseInt(subtotal);
  
      document.getElementById("sumatoriaCantidades").value = sumaSubtotal;
  
  
      Actu();
    
  
      TablaPro();
      
      document.getElementById("canti").value = "";
  
  
  
  
  
    } else {
      Swal.fire(
        'Error',
        'Debe Inicar el cronometro antes de finalizarlo...',
        'info'
      )
  
    }
  
  }*/

  if (document.getElementById("lote").value == "" || document.getElementById("tall").value == "" || document.getElementById("color").value == "" || document.getElementById("primer").value == "" || document.getElementById("ultimo").value == "" || document.getElementById("operaci").value == "" || document.getElementById("op").value == "" || document.getElementById("Comentarios").value == "") {
    Swal.fire(
      'Error',
      'Complete todos los campos antes de Finalizar...',
      'info'
    )

  } else {
    if (confirm("Seguro que desea Finalizar el Tiempo?")) {
      consulHora = document.getElementById("TieIniProdu").value;
      if (consulHora != "") {
        var horaFinProd = new Date();
        document.getElementById("TieFinProdu").value = horaFinProd;
        document.getElementById("TieFinProdu").style.background = "rgb(32, 226, 32)";
        resulTiemPro = ((horaFinProd - consulHora) / 1000);

        funTqt();
        tv();


        validacionCantidades2();

        /* cantid=0;
         var cantid=document.getElementById("canti").value;
            
           // var culmi=document.getElementById("TieFinProdu").value;
           sumaSubtotal=0;
           subtotal=0;

    
            //cantid2=cantid;
            console.log("la cantidades son: "+cantid);
    
    
            var subtotal=document.getElementById("sumatoriaCantidades").value;
            
            sumaSubtotal=parseInt(cantid)+parseInt(subtotal);
            console.log("la sumatoria en esta vaina da: "+sumaSubtotal);
    
            document.getElementById("sumatoriaCantidades").value=sumaSubtotal;*/
        // sumaSubtotal=0;
        // subtotal=0;
        // cantid=0;
        var cantid = document.getElementById("canti").value;

        var subtotal = document.getElementById("sumatoriaCantidades").value;

        sumaSubtotal = parseInt(cantid) + parseInt(subtotal);
        // console.log("la sumatoria en esta vaina da: "+sumaSubtotal);

        document.getElementById("sumatoriaCantidades").value = sumaSubtotal;


        Actu();
        //--------------------------------------------------actualizar-----------------------
        //porcenSin();

        //---------------------------------------------------------------------------------

        TablaPro();
        Play();
        msjPush();
        // contadorUnidades();
        // disponibleOp1();

        // validacionCantidades();

        document.getElementById("canti").value = "";
        document.getElementById("primer").value = "";
        document.getElementById("ultimo").value = "";

        document.getElementById("regAnt").value = resta;







      } else {
        Swal.fire(
          'Error',
          'Debe Inicar el cronometro antes de finalizarlo...',
          'info'
        )

      }

    }

  }




}

//---------------------------------------------------------Registrar solo------------------------------------
regis = function Registar() {
  comida = 0;
  tinto = 0;
  tinto2 = 0;


  var isChecked = document.getElementById('cbComida').checked;
  if (isChecked) {
    comida = 900;
  }
  console.log("comida" + comida);
  var isChecked2 = document.getElementById('cbTinto').checked;
  if (isChecked2) {
    tinto = 480;
  }
  console.log("tinto:" + tinto);
  var isChecked3 = document.getElementById('cbTinto2').checked;
  if (isChecked3) {
    tinto2 = 180;
  }
  console.log("tinto2:" + tinto2);
  console.log("comida" + comida + "tinto:" + tinto + "tinto2:" + tinto2);

  var tFinal = document.getElementById("TieFinProdu").value;
  console.log("la hora final es:" + tFinal);
  var nom = document.getElementById("nombre").value;
  var orden = document.getElementById("op").value;
  var opera = document.getElementById("operaci").value;
  var opera2 = document.getElementById("operaci2").value;
  var opera3 = document.getElementById("operaci3").value;
  var opera4 = document.getElementById("operaci4").value;
  var opera5 = document.getElementById("operaci5").value;
  var opera6 = document.getElementById("operaci6").value;
  var opera7 = document.getElementById("operaci7").value;
  var opera8 = document.getElementById("operaci8").value;
  var opera9 = document.getElementById("operaci9").value;

  // fechaDelDia = document.getElementById("fechaMovil").value;

  var hoy = new Date();
  var dia = Number(hoy.getDate());
  var mes = Number(hoy.getMonth() + 1);
  var ano = Number(hoy.getFullYear());
  console.log('el mes es' + mes);//jesus

  if (dia < 10) {
    dia = '0' + dia;
  }
  if (mes < 10) {
    mes = '0' + mes;
  }

  fechaDelDia = (ano + "-" + mes + "-" + dia);

  /*if (dia < 10 && mes < 10) {

    fechaDelDia = (ano + "-0" + mes + "-0" + dia);

  }
  else if (dia > 10 && mes < 10 ) {
    // alert(ano+"-0"+mes+"-"+dia);
    fechaDelDia = (ano + "-0" + mes + "-" + dia);
  }
  else if (dia < 10 && mes > 10) {

    fechaDelDia = (ano + "-" + mes + "-0" + dia);

  }
  
  else {
    // alert(ano+"-"+mes+"-"+dia);
    fechaDelDia = (ano + "-" + mes + "-" + dia);
  }*/
  console.log("FECHA DEL DIA" + fechaDelDia);

  var comentarios = document.getElementById("Comentarios").value;

  // var texto = document.getElementById("Comentarios").value;
  //Reemplazamos los saltos de linea por espacios
  comentarios = comentarios.replace(/\r?\n/g, " ");
  //Reemplazamos los espacios seguidos por uno solo
  comentarios = comentarios.replace(/[ ]+/g, " ");
  //Quitarmos los espacios del principio y del final
  comentarios = comentarios.replace(/^ /, "");
  comentarios = comentarios.replace(/ $/, "");
  //Troceamos el texto por los espacios
  var textoTroceado = comentarios.split(" ");
  //Contamos todos los trozos de cadenas que existen
  numeroPalabras = textoTroceado.length;
  console.log("el numero de palabras en el registr: " + numeroPalabras);




  var lot = document.getElementById("lote").value;
  var tal = document.getElementById("tall").value;
  var cantid = document.getElementById("canti").value;
  var resa = document.getElementById("resta").value;

  var primer = document.getElementById("primer").value;
  var ulti = document.getElementById("ultimo").value;
  var color = document.getElementById("color").value;


  if (document.getElementById("nombre").value != "" && document.getElementById("op").value != "") {

    horaInProdu = new Date();
    document.getElementById("TieIniProdu").value = horaInProdu;
    document.getElementById("TieIniProdu").style.background = "rgb(32, 226, 32)";
    var tInicial = document.getElementById("TieIniProdu").value;

    console.log('la fecha de consulta es' + fechaDelDia);//jesus

    db.collection("controladministradores").add({

      Primer: primer,
      Ultimo: ulti,
      Color: color,
      cantidadElaborada: cantid,
      // color:maqui,
      //OrdenOperacion:OPE,
      lote: lot,
      operacionElaborada: opera,
      operacionElaborada2: opera2,
      operacionElaborada3: opera3,
      operacionElaborada4: opera4,
      operacionElaborada5: opera5,
      operacionElaborada6: opera6,
      operacionElaborada7: opera7,
      operacionElaborada8: opera8,
      operacionElaborada9: opera9,
      Comen: comentarios,
      NumeroOpera: numeroPalabras,

      fecha: fechaDelDia,

      culminacion: tFinal,
      Comida: comida,
      Tinto: tinto,
      Tinto2: tinto2,


      referencia: orden,
      talla: tal,
      tiempo: resa,
      TiempoIni: tInicial,

      usuariooperario: nom


    })
    // alert("Ha iniciado el proceso correctamente");
    Swal.fire(
      'Registro exitoso!!!',
      'Haz registrado exitosamente la información',
      'success'
    )
    // document.getElementById("acc").style.display="none";
    // document.getElementById("sp1").style.display="none";


    document.getElementById("TieFinProdu").value = "";
    /* document.getElementById("nombre").value="";
     document.getElementById("op").value="";
     document.getElementById("mq").value="";
     document.getElementById("operaci").value="";
     document.getElementById("lote").value="";
     document.getElementById("tall").value="";
     document.getElementById("canti").value="";*/
    document.getElementById("resta").value = "";
    document.getElementById("TieIniProdu").value = "";
    document.getElementById("acc").style.display = "none";

    document.getElementById("sp1").style.display = "none";
    detener();



    then(function () {
      // alert("Ha iniciado el proceso correctamente");
      Swal.fire(
        'Inicio exitoso!!!',
        'Ha iniciado el proceso correctamente...',
        'success'
      )
      document.getElementById("canti2").value = "";
      // location.reload(true);
      // document.getElementById("campo2").style.display="none";



      console.log("Document successfully written!");
    })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });


  } else {
    // alert("ERROR: inicie el tiempo, ingrese su nombre y #OP....");
    Swal.fire(
      'Error',
      'inicie el tiempo, ingrese su nombre y #OP...',
      'info'
    )
  }

}


//------------------------------Mecanico-------------------------------------------------------------------------
function enviarIniciMeca() {

  tip = document.getElementById("tipo").value;

  //   var res=document.getElementById("restaMeca").value;

  OpMa = document.getElementById("opMq").value;
  nomMa = document.getElementById("nombreMeca").value;

  mqMa = document.getElementById("mqMeca").value;
  tiempp = document.getElementById("restaMeca").value;

  //var tiIniMa= document.getElementById("TieIniMeca").value;


  if (document.getElementById("contraMeca").value != "" && document.getElementById("opMq").value != ""
    && document.getElementById("nombreMeca").value != "") {
    if (confirm("Desea Iniciar el tiempo de mantenimiento de maquina?")) {


      contra = document.getElementById("contraMeca").value;

      db.collection("Mantenimientos").where("contrasena", "==", contra)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            verifiContra = `${doc.data().contrasena}`;

            if (verifiContra == contra) {
              horaInMe = new Date();

              document.getElementById("TieIniMeca").value = horaInMe;
              document.getElementById("TieIniMeca").style.background = "rgb(32, 226, 32)";

              //-------------------------registro mecani--------------------------------------

              db.collection("MaquinasManteni").add({

                Maquina: mqMa,
                //OrdenOperacion:OPE,
                OrdenOperacion: OpMa,
                TiempoMan: tiempp,
                TiempoInicio: horaInMe,
                NombreUsu: nomMa,
                Tipo: tip



              })
              //----------------------------------------------------------------------

              alert("Se ha iniciado el tiempo correctamente...");

              document.getElementById("tipo").value = "";

              document.getElementById("restaMeca").value = "";

              document.getElementById("opMq").value = "";
              document.getElementById("nombreMeca").value = "";

              document.getElementById("mqMeca").value = "";
              document.getElementById("TieIniMeca").value = "";
              document.getElementById("contraMeca").value = "";

              // alert("Si se pudo...");
            } else {
              alert("Contraseña Incorrecta...");

            }

            // var hoy = new Date();





          });


        })

        .catch(function (error) {
          alert("Contraseña Incorrecta...");
          console.log("Error getting documents: ", error);
        });
    }
  }
  else {
    alert("Ingrese la contraseña, usuario y OP para iniciar el tiempo...");

  }



}

//---------------------------------------consulta mecanico----------------------------------------
function ConsultaMeca() {

  var usuMant = document.getElementById("nombreMeca").value;
  var numOP = document.getElementById("opMq").value;



  db.collection("MaquinasManteni").where("NombreUsu", "==", usuMant).where("OrdenOperacion", "==", numOP)
    .where("TiempoMan", "==", "")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        mqMante = `${doc.data().Maquina}`;
        tIni = Date.parse(`${doc.data().TiempoInicio}`);
        tip = `${doc.data().Tipo}`;

        document.getElementById("mqMeca").value = mqMante;
        document.getElementById("TieIniMeca").value = tIni;
        document.getElementById("tipo").value = tip;

        alert("Consulta exitosa!!!");


        //-------------------------actualizar mecanico-----------------------------------
        actuMeca = function () {
          var mqAct = document.getElementById("mqMeca").value;
          var tipAct = document.getElementById("tipo").value;

          document.getElementById("restaMeca").value = Math.round(resulTiemMeca);
          //  resa=document.getElementById("resta").value;
          tiemRest = document.getElementById("restaMeca").value;



          var washingtonRef = db.collection("MaquinasManteni").doc(doc.id);

          // Set the "capital" field of the city 'DC'
          return washingtonRef.update({
            Maquina: mqAct,
            // NombreUsu:maqui,
            //OrdenOperacion:OPE,
            //  OrdenOperacion:lot,
            Tipo: tipAct,
            TiempoMan: tiemRest,


          })

        }


        //----------------------------------

      });
    })



  // mqMante=`${doc.data().Maquina}`;



}
//------------------------------Finalizar mantenimiento---------------------------

function enviarFinaMeca() {

  if (confirm("Seguro que desea Finalizar el Tiempo?")) {
    consulHoraMeca = document.getElementById("TieIniMeca").value;
    if (consulHoraMeca != "") {
      var horaFinMeca = new Date();
      document.getElementById("TieFinalMeca").value = horaFinMeca;
      document.getElementById("TieFinalMeca").style.background = "rgb(32, 226, 32)";
      resulTiemMeca = (horaFinMeca - consulHoraMeca) / 1000;

      actuMeca();

      // TablaPro();

      //progres();
      alert("Registro exitoso...!!!");

      document.getElementById("tipo").value = "";

      document.getElementById("restaMeca").value = "";

      document.getElementById("opMq").value = "";
      document.getElementById("nombreMeca").value = "";

      document.getElementById("mqMeca").value = "";
      document.getElementById("TieIniMeca").value = "";
      document.getElementById("contraMeca").value = "";




    } else {
      alert("Debe Inicar el cronometro antes de finalizarlo...");
    }

  }




}



 //-------------------------------------usuario2---------------------------------------
/* function enviarInici2(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni2").value=horaIn;
document.getElementById("TieIni2").style.background="#45F536";
document.getElementById("TieFinal2").style.background="#EDFA2A";



//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/* function enviarFina2(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti2").value;
var maqui=document.getElementById("mq2").value;

var Lote=document.getElementById("lote2").value;
var operacion=document.getElementById("operaci2").value;
var ref=document.getElementById("op2").value;
var tall=document.getElementById("talla2").value;
var tiempp=document.getElementById("resta2").value;
var usuario=document.getElementById("nombre2").value;

var tiemIni=document.getElementById("TieIni2").value;



if(document.getElementById("canti2").value!="" && document.getElementById("mq2").value!="" &&
document.getElementById("lote2").value!="" && document.getElementById("operaci2").value!="" &&
document.getElementById("op2").value!="" && document.getElementById("talla2").value!="" &&
document.getElementById("nombre2").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal2").value=horaFin;
          document.getElementById("TieFinal2").style.background="#45F536";
          document.getElementById("TieIni2").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta2").value=Math.round(resul);


          var tiempp=document.getElementById("resta2").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso")
          document.getElementById("canti2").value="";
         // document.getElementById("campo2").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}*/








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}
//------------------------------------------usuario3----------------------------------------------
/*function enviarInici3(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni3").value=horaIn;
document.getElementById("TieIni3").style.background="#45F536";
document.getElementById("TieFinal3").style.background="#EDFA2A";



//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/* function enviarFina3(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti3").value;
var maqui=document.getElementById("mq3").value;

var Lote=document.getElementById("lote3").value;
var operacion=document.getElementById("operaci3").value;
var ref=document.getElementById("op3").value;
var tall=document.getElementById("talla3").value;
var tiempp=document.getElementById("resta3").value;
var usuario=document.getElementById("nombre3").value;

var tiemIni=document.getElementById("TieIni3").value;



if(document.getElementById("canti3").value!="" && document.getElementById("mq3").value!="" &&
document.getElementById("lote3").value!="" && document.getElementById("operaci3").value!="" &&
document.getElementById("op3").value!="" && document.getElementById("talla3").value!="" &&
document.getElementById("nombre3").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal3").value=horaFin;
          document.getElementById("TieFinal3").style.background="#45F536";
          document.getElementById("TieIni3").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta3").value=Math.round(resul);


          var tiempp=document.getElementById("resta3").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso")
          document.getElementById("canti3").value="";

         // document.getElementById("campo3").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}*/



  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}

//------------------------------------------usuario4------------------------------------------------
/*function enviarInici4(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni4").value=horaIn;
document.getElementById("TieIni4").style.background="#45F536";
document.getElementById("TieFinal4").style.background="#EDFA2A";



//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/* function enviarFina4(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti4").value;
var maqui=document.getElementById("mq4").value;

var Lote=document.getElementById("lote4").value;
var operacion=document.getElementById("operaci4").value;
var ref=document.getElementById("op4").value;
var tall=document.getElementById("talla4").value;
var tiempp=document.getElementById("resta4").value;
var usuario=document.getElementById("nombre4").value;

var tiemIni=document.getElementById("TieIni4").value;



if(document.getElementById("canti4").value!="" && document.getElementById("mq4").value!="" &&
document.getElementById("lote4").value!="" && document.getElementById("operaci4").value!="" &&
document.getElementById("op4").value!="" && document.getElementById("talla4").value!="" &&
document.getElementById("nombre4").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal4").value=horaFin;
          document.getElementById("TieFinal4").style.background="#45F536";
          document.getElementById("TieIni4").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta4").value=Math.round(resul);


          var tiempp=document.getElementById("resta4").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso");
          document.getElementById("canti4").value="";

         // document.getElementById("campo4").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}

//-------------------------------------------usuario5----------------------------------------------
/*function enviarInici5(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni5").value=horaIn;
document.getElementById("TieIni5").style.background="#45F536";
document.getElementById("TieFinal5").style.background="#EDFA2A";



//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/*function enviarFina5(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti5").value;
var maqui=document.getElementById("mq5").value;

var Lote=document.getElementById("lote5").value;
var operacion=document.getElementById("operaci5").value;
var ref=document.getElementById("op5").value;
var tall=document.getElementById("talla5").value;
var tiempp=document.getElementById("resta5").value;
var usuario=document.getElementById("nombre5").value;

var tiemIni=document.getElementById("TieIni5").value;



if(document.getElementById("canti5").value!="" && document.getElementById("mq5").value!="" &&
document.getElementById("lote5").value!="" && document.getElementById("operaci5").value!="" &&
document.getElementById("op5").value!="" && document.getElementById("talla5").value!="" &&
document.getElementById("nombre5").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal5").value=horaFin;
          document.getElementById("TieFinal5").style.background="#45F536";
          document.getElementById("TieIni5").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta5").value=Math.round(resul);


          var tiempp=document.getElementById("resta5").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso");
          document.getElementById("canti5").value="";

        //  document.getElementById("campo5").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}*/
//------------------------------------------usuario6---------------------------------------------------
/*function enviarInici6(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni6").value=horaIn;
document.getElementById("TieIni6").style.background="#45F536";
document.getElementById("TieFinal6").style.background="#EDFA2A";



//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/*function enviarFina6(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti6").value;
var maqui=document.getElementById("mq6").value;

var Lote=document.getElementById("lote6").value;
var operacion=document.getElementById("operaci6").value;
var ref=document.getElementById("op6").value;
var tall=document.getElementById("talla6").value;
var tiempp=document.getElementById("resta6").value;
var usuario=document.getElementById("nombre6").value;

var tiemIni=document.getElementById("TieIni6").value;



if(document.getElementById("canti6").value!="" && document.getElementById("mq6").value!="" &&
document.getElementById("lote6").value!="" && document.getElementById("operaci6").value!="" &&
document.getElementById("op6").value!="" && document.getElementById("talla6").value!="" &&
document.getElementById("nombre6").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal6").value=horaFin;
          document.getElementById("TieFinal6").style.background="#45F536";
          document.getElementById("TieIni6").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta6").value=Math.round(resul);


          var tiempp=document.getElementById("resta6").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso");
          document.getElementById("canti6").value="";

         // document.getElementById("campo6").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}*/

//------------------------------------------usuario7-----------------------------------------------------
/*function enviarInici7(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni7").value=horaIn;
document.getElementById("TieIni7").style.background="#45F536";
document.getElementById("TieFinal7").style.background="#EDFA2A";


//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/* function enviarFina7(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti7").value;
var maqui=document.getElementById("mq7").value;

var Lote=document.getElementById("lote7").value;
var operacion=document.getElementById("operaci7").value;
var ref=document.getElementById("op7").value;
var tall=document.getElementById("talla7").value;
var tiempp=document.getElementById("resta7").value;
var usuario=document.getElementById("nombre7").value;

var tiemIni=document.getElementById("TieIni7").value;



if(document.getElementById("canti7").value!="" && document.getElementById("mq7").value!="" &&
document.getElementById("lote7").value!="" && document.getElementById("operaci7").value!="" &&
document.getElementById("op7").value!="" && document.getElementById("talla7").value!="" &&
document.getElementById("nombre7").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal7").value=horaFin;
          document.getElementById("TieFinal7").style.background="#45F536";
          document.getElementById("TieIni7").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta7").value=Math.round(resul);


          var tiempp=document.getElementById("resta7").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso");
          document.getElementById("canti7").value="";

         // document.getElementById("campo6").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}*/

//-------------------------------------------usuario8-------------------------------------------------------
/*function enviarInici8(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni8").value=horaIn;
document.getElementById("TieIni8").style.background="#45F536";
document.getElementById("TieFinal8").style.background="#EDFA2A";



//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/*function enviarFina8(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti8").value;
var maqui=document.getElementById("mq8").value;

var Lote=document.getElementById("lote8").value;
var operacion=document.getElementById("operaci8").value;
var ref=document.getElementById("op8").value;
var tall=document.getElementById("talla8").value;
var tiempp=document.getElementById("resta8").value;
var usuario=document.getElementById("nombre8").value;

var tiemIni=document.getElementById("TieIni8").value;



if(document.getElementById("canti8").value!="" && document.getElementById("mq8").value!="" &&
document.getElementById("lote8").value!="" && document.getElementById("operaci8").value!="" &&
document.getElementById("op8").value!="" && document.getElementById("talla8").value!="" &&
document.getElementById("nombre8").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal8").value=horaFin;
          document.getElementById("TieFinal8").style.background="#45F536";
          document.getElementById("TieIni8").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta8").value=Math.round(resul);


          var tiempp=document.getElementById("resta8").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso");
          document.getElementById("canti8").value="";

         // document.getElementById("campo6").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}*/

//------------------------------------------------usuario9-------------------------------------------------
/*function enviarInici9(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni9").value=horaIn;
document.getElementById("TieIni9").style.background="#45F536";
document.getElementById("TieFinal9").style.background="#EDFA2A";


//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/*function enviarFina9(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti9").value;
var maqui=document.getElementById("mq9").value;

var Lote=document.getElementById("lote9").value;
var operacion=document.getElementById("operaci9").value;
var ref=document.getElementById("op9").value;
var tall=document.getElementById("talla9").value;
var tiempp=document.getElementById("resta9").value;
var usuario=document.getElementById("nombre9").value;

var tiemIni=document.getElementById("TieIni9").value;



if(document.getElementById("canti9").value!="" && document.getElementById("mq9").value!="" &&
document.getElementById("lote9").value!="" && document.getElementById("operaci9").value!="" &&
document.getElementById("op9").value!="" && document.getElementById("talla9").value!="" &&
document.getElementById("nombre9").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal9").value=horaFin;
          document.getElementById("TieFinal9").style.background="#45F536";
          document.getElementById("TieIni9").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta9").value=Math.round(resul);


          var tiempp=document.getElementById("resta9").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso");
          document.getElementById("canti9").value="";

         // document.getElementById("campo6").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}*/

//----------------------------------------------------usuario10------------------------------------------------
/*function enviarInici10(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni10").value=horaIn;
document.getElementById("TieIni10").style.background="#45F536";
document.getElementById("TieFinal10").style.background="#EDFA2A";


//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/*function enviarFina10(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti10").value;
var maqui=document.getElementById("mq10").value;

var Lote=document.getElementById("lote10").value;
var operacion=document.getElementById("operaci10").value;
var ref=document.getElementById("op10").value;
var tall=document.getElementById("talla10").value;
var tiempp=document.getElementById("resta10").value;
var usuario=document.getElementById("nombre10").value;

var tiemIni=document.getElementById("TieIni10").value;



if(document.getElementById("canti10").value!="" && document.getElementById("mq10").value!="" &&
document.getElementById("lote10").value!="" && document.getElementById("operaci10").value!="" &&
document.getElementById("op10").value!="" && document.getElementById("talla10").value!="" &&
document.getElementById("nombre10").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal10").value=horaFin;
          document.getElementById("TieFinal10").style.background="#45F536";
          document.getElementById("TieIni10").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta10").value=Math.round(resul);


          var tiempp=document.getElementById("resta10").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso");
          document.getElementById("canti10").value="";

         // document.getElementById("campo6").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}*/

//-------------------------------------------------------usuario11-------------------------------------------
/*function enviarInici11(){
  // var hoy = new Date();
  if(confirm("Seguro que desea Iniciar el tiempo?")){


    horaIn=  new Date();

document.getElementById("TieIni11").value=horaIn;
document.getElementById("TieIni11").style.background="#45F536";
document.getElementById("TieFinal11").style.background="#EDFA2A";


//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/*function enviarFina11(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti11").value;
var maqui=document.getElementById("mq11").value;

var Lote=document.getElementById("lote11").value;
var operacion=document.getElementById("operaci11").value;
var ref=document.getElementById("op11").value;
var tall=document.getElementById("talla11").value;
var tiempp=document.getElementById("resta11").value;
var usuario=document.getElementById("nombre11").value;

var tiemIni=document.getElementById("TieIni11").value;



if(document.getElementById("canti11").value!="" && document.getElementById("mq11").value!="" &&
document.getElementById("lote11").value!="" && document.getElementById("operaci11").value!="" &&
document.getElementById("op11").value!="" && document.getElementById("talla11").value!="" &&
document.getElementById("nombre11").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal11").value=horaFin;
          document.getElementById("TieFinal11").style.background="#45F536";
          document.getElementById("TieIni11").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta11").value=Math.round(resul);


          var tiempp=document.getElementById("resta11").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso");
          document.getElementById("canti11").value="";

         // document.getElementById("campo6").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}*/
 //----------------------------------------------------------------------------------------------
/*function enviarInici(){
 // var hoy = new Date();
 if(confirm("Seguro que desea Iniciar el tiempo?")){


   horaIn=  new Date();

document.getElementById("TieIni").value=horaIn;
document.getElementById("TieIni").style.background="#45F536";
document.getElementById("TieFinal").style.background="#EDFA2A";



//document.getElementById("ini").style.display="none";

//document.getElementById("campo").style.display="block";
}else{

}




}*/
/*function enviarFina(){
  //var hoy = new Date();

  //----------------------------------Registro----------------------------------------
var cantiEla=document.getElementById("canti").value;
var maqui=document.getElementById("mq").value;

var Lote=document.getElementById("lote").value;
var operacion=document.getElementById("operaci").value;
var ref=document.getElementById("op").value;
var tall=document.getElementById("talla").value;
var tiempp=document.getElementById("resta").value;
var usuario=document.getElementById("nombre").value;

var tiemIni=document.getElementById("TieIni").value;



if(document.getElementById("canti").value!="" && document.getElementById("mq").value!="" &&
document.getElementById("lote").value!="" && document.getElementById("operaci").value!="" &&
document.getElementById("op").value!="" && document.getElementById("talla").value!="" &&
document.getElementById("nombre").value!="") {
 // document.getElementById("ini").style.display="block";
  var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;
          document.getElementById("TieFinal").style.background="#45F536";
          document.getElementById("TieIni").style.background="#EDFA2A";



           resul=(horaFin-horaIn)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;


  db.collection("controladministradores").add({


      cantidadElaborada:cantiEla,
      color:maqui,
      //OrdenOperacion:OPE,
      lote:Lote,
      operacionElaborada:operacion,
      referencia:ref,
      talla:tall,
      tiempo:tiempp,
      TiempoIni:tiemIni,
      usuariooperario:usuario


      })

      .then(function() {
          alert("Registro Exitoso")
          document.getElementById("canti").value="";

         // document.getElementById("campo").style.display="none";

          console.log("Document successfully written!");
      })
      .catch(function(error) {
          //alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });


}else{
  alert("Complete todos los campos...");
}








  //-------------------------------------------------Actualizar---------------------------------
/*  var ref=document.getElementById("op").value;
  var usuario=document.getElementById("nombre").value;




  db.collection("controladministradores").where("referencia", "==", ref).where("usuariooperario", "==", usuario)
  .where("tiempo", "==", "")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var tiInicial=Date.parse(`${doc.data().TiempoIni}`);
          document.getElementById("TieIni").value=tiInicial;


          var horaFin=new Date();
          document.getElementById("TieFinal").value=horaFin;

           resul=(horaFin-tiInicial)/1000;
              document.getElementById("resta").value=Math.round(resul);


          var tiempp=document.getElementById("resta").value;

  var washingtonRef = db.collection("controladministradores").doc(doc.id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      //OrdenOperacion:OPE,
      tiempo:tiempp,

            })
  .then(function() {
      alert("Actualizacion exitosa!!!");
      document.getElementById("canti").value="";

      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

        });
  })*/


  //----------------------------------------------------------------------------------------------


//}*/
//---------------------------------------------------------------------


/*function enviarFinaMeca(){
  var horaFin=new Date();
  document.getElementById("TieFinalMeca").value=horaFin;

   resul=(horaFin-horaIn)/1000;
      document.getElementById("restaMeca").value=Math.round(resul);


  var tiempp=document.getElementById("restaMeca").value;
  var tiemIni=document.getElementById("TieIni").value;


}*/










