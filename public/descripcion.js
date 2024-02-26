
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

  //------------------------------------consulta unidades malas-----------------------

  
function consulFech() {

    var tabl23 = document.getElementById("tablaFechasMalas");
  
   var  consultaFecha = document.getElementById("fechaConsultar").value;
    dataSet = new Array();
    var i = 1;
  
    cantidadElabo=0;
    buenas=0;
    malas=0;
    ano="";
  
   
    db.collection("controladministradores").where("fecha", "==", consultaFecha).orderBy("TiempoIni","asc")
      .get()
      .then(function (querySnapshot) {
        tabl23.innerHTML = "";
  
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          // var ur=`${doc.data().UrlFrente}`;
          OperarioFec = `${doc.data().usuariooperario}`;
          // Maqui=`${doc.data().color}`;
          // horaFin=`${doc.data().usuariooperario}`;
          //tFinal = `${doc.data().culminacion}`;
          comi = `${doc.data().Comida}`;
          tin = `${doc.data().Tinto}`;
  
          tin2 = `${doc.data().Tinto2}`;
  
          numeOp = `${doc.data().referencia}`;
  
  
  
  
  
  
  
          inicio = `${doc.data().TiempoIni}`;
          fianl = `${doc.data().culminacion}`;
  
  
  
  
  
          integrantes = `${doc.data().Comen}`;
  
          nombreReferencia = `${doc.data().nombreRef}`;
  
  
  
  
  
          pla = parseInt(`${doc.data().ReproPlana}`);
          fi =parseInt( `${doc.data().ReproFile}`);
          re = parseInt(`${doc.data().ReproRecub}`);
          bo = parseInt(`${doc.data().ReproOB}`);
          manu = parseInt(`${doc.data().ReproMT}`);
  
          if(isNaN(pla)){
            pla=0;
          }
          if(isNaN(fi)){
            fi=0;
          }
          if(isNaN(re)){
            re=0;
          }
          if(isNaN(bo)){
            bo=0;
          }
          if(isNaN(manu)){
            manu=0;
          }
  
  
  
          
  
  
          
    if (isNaN(pla)) {
      pla="";
    }
    if (isNaN(fi)) {
      fi="";
    }
    if (isNaN(re)) {
      re="";
    }
    if (isNaN(bo)) {
      bo="";
    }
    if (isNaN(manu)) {
      manu="";
    }
   
  
         
  
  
  
        
  
  
  
          dataSet.push([OperarioFec, integrantes, inicio, fianl, numeOp,nombreReferencia ,pla,fi, re,bo,manu]);
  
          i = i + 1;
  
  
  
  
  
  $(document).ready(function () {
    var tablaSuma = $('#regTable').DataTable({
  
  
      data: dataSet,
      "bDestroy": true,
      columns: [
        { title: "Modulo" },
        { title: "Usuarios" },
        { title: "Tiempo Inicial" },
        { title: "Tiempo Final" },
        { title: "#OP" },
        { title: "Referencia" },
  
        { title: "Plana" },
        { title: "Fileteadora" },
        { title: "Recubridora" },
        { title: "B-O" },
        { title: "M.T" },
  
  
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
  
  
  
  });//aquiiiiiii
  
  
          
  
  
        });
  
  
        Swal.fire(
          'Consulta exitosa!!!',
          'Haz Consultado exitosamente la información',
          'success'
        )
      
  
  
   
    })
  
    
  
  }

  //------------------------------------calcular indicadores--------------------
  function sumarFech(){

    malasPlanas();
    malasFile();
    malasRecu();
    malasBo();
    malasMT();
  }

  //----------------------------------------------indicadores---------------------------------------------
  malasPlanas = function () {
    resultadito=0;
    cantiEla=0;
  
    var tabl4 = document.getElementById("regTable"), sumValCan = 0;
  
    for (var i = 1; i < tabl4.rows.length; i++) {
  
      if (isNaN(sumValCan)) {
        sumValCan = 0;
      }
  
      sumValCan = sumValCan + parseInt(tabl4.rows[i].cells[6].innerHTML);
    }
  
    
    document.getElementById("malitaPlana").value = sumValCan;
  
  
  
  }
  malasFile = function () {
    resultadito=0;
    cantiEla=0;
  
    var tabl4 = document.getElementById("regTable"), sumValCan = 0;
  
    for (var i = 1; i < tabl4.rows.length; i++) {
  
      if (isNaN(sumValCan)) {
        sumValCan = 0;
      }
  
      sumValCan = sumValCan + parseInt(tabl4.rows[i].cells[7].innerHTML);
    }
  
    
    document.getElementById("malitaFile").value = sumValCan;
  
  
  
  }
  malasRecu = function () {
    resultadito=0;
    cantiEla=0;
  
    var tabl4 = document.getElementById("regTable"), sumValCan = 0;
  
    for (var i = 1; i < tabl4.rows.length; i++) {
  
      if (isNaN(sumValCan)) {
        sumValCan = 0;
      }
  
      sumValCan = sumValCan + parseInt(tabl4.rows[i].cells[8].innerHTML);
    }
  
    
    document.getElementById("malitaRec").value = sumValCan;
  
  
  
  }
  malasBo = function () {
    resultadito=0;
    cantiEla=0;
  
    var tabl4 = document.getElementById("regTable"), sumValCan = 0;
  
    for (var i = 1; i < tabl4.rows.length; i++) {
  
      if (isNaN(sumValCan)) {
        sumValCan = 0;
      }
  
      sumValCan = sumValCan + parseInt(tabl4.rows[i].cells[9].innerHTML);
    }
  
    
    document.getElementById("malitaBO").value = sumValCan;
  
  
  
  }
  malasMT = function () {
    resultadito=0;
    cantiEla=0;
  
    var tabl4 = document.getElementById("regTable"), sumValCan = 0;
  
    for (var i = 1; i < tabl4.rows.length; i++) {
  
      if (isNaN(sumValCan)) {
        sumValCan = 0;
      }
  
      sumValCan = sumValCan + parseInt(tabl4.rows[i].cells[10].innerHTML);
    }
  
    
    document.getElementById("malitaMT").value = sumValCan;
  
  
  
  }