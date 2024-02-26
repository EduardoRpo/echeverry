
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

//setTimeout('document.location.reload()', 21600000);
/*function divImagenes(){
 setTimeout('document.location.reload()',600000);

}*/



verificarColor = function btnColor() {

  document.getElementById('estado').style.backgroundColor = '#21DF28';

}



ultimaOp = function () {


  db.collection("OrdenProduccion").where("Estado", "==", "En Proceso").orderBy("OrdenP", "desc").limit(1).onSnapshot((querySnapshot) => {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      var numeOpCamisa = `${doc.data().OrdenP}`;
      // console.log("la ultima op en proceso es:"+numeOpCamisa);
      document.getElementById('op1').value = numeOpCamisa;




    });
  })
}
ultimaOp2 = function () {


  db.collection("OrdenProduccion").where("Estado", "==", "En Proceso").orderBy("OrdenP", "desc").limit(2).onSnapshot((querySnapshot) => {
    querySnapshot.forEach(function (doc) {

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      var numeOpCamisa = `${doc.data().OrdenP}`;
      // console.log("la ultima op en proceso es:"+numeOpCamisa);
      document.getElementById('op2').value = numeOpCamisa;




    });
  })
}

ultimaOp3 = function () {


  db.collection("OrdenProduccion").where("Estado", "==", "En Proceso").orderBy("OrdenP", "desc").limit(3).onSnapshot((querySnapshot) => {
    querySnapshot.forEach(function (doc) {

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      var numeOpCamisa = `${doc.data().OrdenP}`;
      // console.log("la ultima op en proceso es:"+numeOpCamisa);
      document.getElementById('op3').value = numeOpCamisa;




    });
  })
}

ultimaOp4 = function () {


  db.collection("OrdenProduccion").where("Estado", "==", "En Proceso").orderBy("OrdenP", "desc").limit(4).onSnapshot((querySnapshot) => {
    querySnapshot.forEach(function (doc) {

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      var numeOpCamisa = `${doc.data().OrdenP}`;
      // console.log("la ultima op en proceso es:"+numeOpCamisa);
      document.getElementById('op4').value = numeOpCamisa;




    });
  })
}
ultimaOp5 = function () {


  db.collection("OrdenProduccion").where("Estado", "==", "En Proceso").orderBy("OrdenP", "desc").limit(5).onSnapshot((querySnapshot) => {
    querySnapshot.forEach(function (doc) {

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      var numeOpCamisa = `${doc.data().OrdenP}`;
      // console.log("la ultima op en proceso es:"+numeOpCamisa);
      document.getElementById('op5').value = numeOpCamisa;




    });
  })
}


foto = function () {
  ultimaOp();

  var consulta = document.getElementById("op1").value;

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
            urlCamisa1 = `${doc.data().UrlFrente}`;
            console.log(urlCamisa1);

            grande = document.getElementById("imagenFrente1");

            grande.src = urlCamisa1;





          });
        })



    });
  })



}
foto2 = function () {
  ultimaOp2()


  var consulta = document.getElementById("op2").value;

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
            urlCamisa2 = `${doc.data().UrlFrente}`;
            console.log(urlCamisa2);

            grande = document.getElementById("imagenFrente2");

            grande.src = urlCamisa2;





          });
        })



    });
  })



}
foto3 = function () {
  ultimaOp3();
  var consulta = document.getElementById("op3").value;

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
            urlCamisa3 = `${doc.data().UrlFrente}`;
            console.log(urlCamisa3);

            grande = document.getElementById("imagenFrente3");

            grande.src = urlCamisa3;



          });
        })



    });
  })



}
foto4 = function () {
  ultimaOp4();
  var consulta = document.getElementById("op4").value;

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
            urlCamisa4 = `${doc.data().UrlFrente}`;

            console.log(urlCamisa4);

            grande = document.getElementById("imagenFrente4");

            grande.src = urlCamisa4;




          });
        })



    });
  })



}
foto5 = function () {
  ultimaOp5();
  var consulta = document.getElementById("op5").value;

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
            urlCamisa5 = `${doc.data().UrlFrente}`;

            console.log(urlCamisa5);

            grande = document.getElementById("imagenFrente5");

            grande.src = urlCamisa5;





          });
        })



    });
  })



}


function mostrar() {
  foto();
  foto2();
  foto3();
  foto4();
  foto5();

}





window.onload = function () {

  foto();
  foto2();
  foto3();
  foto4();
  foto5();
  funQuery();

  var tabl3 = document.getElementById("tabla");


  var hora = new Date().getHours();
  var minutos = new Date().getMinutes();
  var seg = new Date().getMinutes();
  var dia = new Date().getDay();
  var mes = new Date().getMonth();

  /* if(hora< 10){
     hora='0'+hora;
   }
   if(minutos< 10){
     minutos='0'+minutos;
   }
   if(seg< 10){
     seg='0'+seg;
   }*/

  var fecha = hora + ':' + minutos + ':' + seg;


  /*dataSet = new Array();
  var i = 1;*/

  //  foto();

  valorPorce = 0;
  resul = 0;
  ColorC = '';
  db.collection("vistasTV2").orderBy("Fecha", "desc").limit(7).onSnapshot((querySnapshot) => {
    tabl3.innerHTML = "";
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      var modulo = `${doc.data().Modulo}`;
      var fechta = `${doc.data().Fecha}`;
      var integrantes = `${doc.data().Integrantes}`;
      var rendi = `${doc.data().Rendimiento}`;

      console.log('formato fecha' + fechta);
      valorPorce = Math.round(rendi);
      resul = document.getElementById('estado');//.style.backgroundColor='#0EEE15';
      var cajaDiv = document.getElementsByTagName('td');

      var tablaVerifity = document.getElementById('dtVerticalScrollExample');

      //console.log("valor tabla"+tablaVerifity[3]);
      //var fechaNueva=Date.parse(fechta)
      ms = Date.parse(fechta);
      fechaNueva = new Date(ms);
      //mes = fechaNueva.getMonth();
      hour = fechaNueva.getHours();
      minute = fechaNueva.getMinutes();
      secun = fechaNueva.getSeconds();
      month = fechaNueva.getMonth() + 1;
      day = fechaNueva.getDate();
      year = fechaNueva.getFullYear();




      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
      if (year < 10) {
        year = '0' + year;
      }

      if (hour < 10) {
        houres = '0' + hour;
      }
      if (minute < 10) {
        minute = '0' + minute;
      }
      if (secun < 10) {
        secun = '0' + secun;
      }
      var fechaYhora = day + '/' + month + '/' + year + '  '+'  ' + hour + ':' + minute + ':' + secun;
      console.log(fechaYhora);







      if (valorPorce < 60) {

        ColorC = 'NO CONFORME';
        //  $('#estado').css({backgroundColor:'black'})
        //   funQuery();


      }
      if (valorPorce >= 60 && valorPorce <= 70) {
        ColorC = 'REGULAR';
        //  $('#estado').css({backgroundColor:'red'})
      }
      if (valorPorce >= 71 && valorPorce <= 79) {
        ColorC = 'BUENO';
        //  $('#estado').css({backgroundColor:'yellow'})

      }
      if (valorPorce >= 80) {
        ColorC = 'EXCELENTE';
        //  $('#estado').css({backgroundColor:'green'})
        // btnColor1();
        // verde();
        //document.getElementById('estado').style.display='none';

      }

      //dataSet.push([fechaYhora, modulo, integrantes, valorPorce + '%', ColorC]);

      //i = i + 1;
      //setTimeout('document.location.reload()',10000);



      tabl3.innerHTML += `
                           <tr>
                       <th scope="row" style="color:#ffff; font-style: oblique; font-weight: bold; font-size: x-large; text-shadow: 1px  0px 0px black,
                       0px  1px 0px black,
                      -1px  0px 0px black,
                       0px -1px 0px black;">${fechaYhora}</th>
                       <td style="color:#ffff; font-style: oblique; font-weight: bold; font-size: x-large; text-shadow: 1px  0px 0px black,
                       0px  1px 0px black,
                      -1px  0px 0px black,
                       0px -1px 0px black;">${modulo}</td>
                       <td style="color:#ffff; font-style: oblique; font-weight: bold; font-size: x-large; text-shadow: 1px  0px 0px black,
                       0px  1px 0px black,
                      -1px  0px 0px black,
                       0px -1px 0px black;">${integrantes}</td>
                       <td style="color:#ffff; font-style: oblique; font-weight: bold; font-size: x-large; text-shadow: 1px  0px 0px black,
                       0px  1px 0px black,
                      -1px  0px 0px black,
                       0px -1px 0px black;">${valorPorce}%</td>
                       <td style="color:#ffff; font-style: oblique; font-weight: bold; font-size: x-large; text-shadow: 1px  0px 0px black,
                       0px  1px 0px black,
                      -1px  0px 0px black,
                       0px -1px 0px black;">${ColorC}</td>


        
                      
                       </tr>
        
                  
                  
                  `
      mostrar();



      /*  $(document).ready(function () {
          var tablaSuma = $('#example').DataTable({
  
  
            data: dataSet,
  
            'createdRow': function (row, data, index) {
  
              if (data[4] == 'EXCELENTE') {
                $('td', row).eq(3).css({
                  'background-color': '#1BCA10',
                  'color': 'white',
                });
                $('td', row).eq(1).css({
  
                  'font-weight': 'bold',
  
                });
              }
              if (data[4] == 'BUENO') {
                $('td', row).eq(3).css({
                  'background-color': '#F9F90F',
                  'color': 'black',
                });
              }
              if (data[4] == 'REGULAR') {
                $('td', row).eq(3).css({
                  'background-color': '#F92B0F',
                  'color': 'white',
                });
              }
              if (data[4] == 'NO CONFORME') {
                $('td', row).eq(3).css({
                  'background-color': '#100E0E',
                  'color': 'white',
                });
              }
            },
  
  
            "bDestroy": true,
            // "pagingType": "simple",
            "iDisplayLength": 10,
            "order": [[0, "desc"]],
            // "bPaginate": false, 
            "bFilter": false,
  
  
            columns: [
              { title: "Fecha" },
              { title: "Modulo" },
              { title: "Integrantes" },
              { title: "Rendimiento" },
              { title: "Estado" },
  
  
  
  
            ],
  
            //para cambiar el lenguaje a español
            "language": {
              "lengthMenu": "Mostrar _MENU_ registros",
              "zeroRecords": "No se encontraron resultados",
              "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
              "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
              "infoFiltered": "(filtrado de un total de _MAX_ registros)",
              "sSearch": "Buscar:",
              "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
              },
  
              "sProcessing": "Procesando...",
  
  
            }
  
          });
  
  
  
  
        }); */ //aquiiiiiii

      /*var refreshedDataFromTheServer = getDataFromServer();

      var myTable = $('#example').DataTable();
      myTable.clear().rows.add(refreshedDataFromTheServer).draw();*/

      $("table td:last-child:contains(EXCELENTE)")
        .parents("tr")
        .css("background-color", "green");

      $("table td:last-child:contains(REGULAR)")
        .parents("tr")
        .css("background-color", "red");

      $("table td:last-child:contains(BUENO)")
        .parents("tr")
        .css("background-color", "yellow");

      $("table td:last-child:contains(NO CONFORME)")
        .parents("tr")
        .css("background-color", "black");







    });

  })



}

const txt = document.getElementById('estado');
const divP = document.getElementById('divPrueba');
const tableColor = document.getElementById('tabla');


function btnColor1() {

  tableColor.classList.toggle('verde');
}

funQuery = function () {

  // $('#tabla').css('color','blue')
  //  $('#tabla').css({backgroundColor:'red'})
}






