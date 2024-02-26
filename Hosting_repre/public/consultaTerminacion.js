
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

  

  function buscarFecha(){


     var datoFecha=document.getElementById('fechaConsultar').value;
     var tabl23 = document.getElementById("tablaXref");



     acumFile=0;
     acumMT=0;
     acumOB=0;
     acumRec=0;
     acumPlana=0;
     totalMalas=0;
     buenas=0;
     acumulado=0;
     dataSet = new Array();
     var i = 1;
   


      db.collection("controladministradores").where("usuariooperario", "==", "Pulida y Revisada 1").where("fecha","==",datoFecha).get()
      .then(function (querySnapshot) {
        tabl23.innerHTML = "";

        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var cantidadTotal = Number(`${doc.data().cantidadElaborada}`);
          var fileteadora =Number(`${doc.data().ReproFile}`) ;
          var manualidades =Number (`${doc.data().ReproMT}`) ;
          var ojalaBoto = Number(`${doc.data().ReproOB}`) ;
          var recubridora = Number(`${doc.data().ReproRecub}`);
          var plana =Number(`${doc.data().ReproPlana}`) ;

          var inicio =`${doc.data().TiempoIni}`;
          var fin =`${doc.data().culminacion}` ;
          var anotaciones =`${doc.data().Anotaciones}`;

          /*Swal.fire(
            'Consulta Exitosa!!!',
            '',
            
            'success'
          )*/
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Consulta Exitosa!!!',
            showConfirmButton: false,
            timer: 1500
          })

            acumulado=acumulado+cantidadTotal;

          acumFile = acumFile + fileteadora;
          acumMT = acumMT + manualidades;
          acumOB = acumOB + ojalaBoto;
          acumRec = acumRec + recubridora;
          acumPlana =acumPlana + plana;

          

             totalMalas=acumFile+acumMT+acumOB+acumRec+acumPlana;
             buenas=acumulado-totalMalas;

            document.getElementById('total').value=acumulado;
            document.getElementById('buenas').value=buenas;
            document.getElementById('malas').value=totalMalas;

            
          
            console.log('acumu'+acumulado+''+'malas'+totalMalas+''+'buenas'+buenas);
            dataSet.push([inicio, fin, anotaciones ]);
            i = i + 1;

            $(document).ready(function () {
              var tablaSuma = $('#regTable2').DataTable({
                
      
    
    
                data: dataSet,
                "bDestroy": true,
                "searching": false,
                "bPaginate":false,
                
                columns: [
                  { title: "Hora Inicio" },
                  { title: "Hora Fin" },
                  { title: "Comentarios" },
                  
    
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
    
    
    
            });


            //console.log('total:'+cantidadTotal+' -'+'Buenas'+buenas+' '+'Malas:'+totalMalas);
          



            //calculoRevi();
           // grafica1();
      });
    })
  
  }
 
function grafica1(){

    console.log('acumnuldo antes de porcen'+acumulado);
    porceRevi=Number((acumulado*100)/1140);



    let miCanvas2=document.getElementById("evolucion").getContext("2d");

    var chart= new Chart(miCanvas2, {
        type:'bar',
        data:{
          labels:["Meta"],
          datasets:[
          /*  {
            label:"Unidades",
            backgroundColor:"#63B522",
            borderColor:"rgb(255,255,0)",
            data:[uniPre1, uniPre2,uniPre3,uniPre4,apoyoPr1Uds,apoyoPr2Uds, uniEnsa1, uniEnsa2,apoyoEn1Uds,apoyoEn2IUds,uniTer1,uniTer2,uniTer3,uniTer4,Ruedo1Uds,Ruedo2Uds,pulidadyRevisaUnid]
          },*/
          {
            label:"Porcentaje",
           // data:tiempo.map(item => item.cantidades)
           backgroundColor:"rgb(0, 128, 128) ",
   
           
   
            data:[porceRevi]
          },
         /* {
            label:"% Avance",
           // data:porcentaje.map(item => item.cantidades)
           backgroundColor:"#b80f22  ",
           data:[porcePre1,porcePre2,porcePre3,porcePre4,apoyoPr1Porcen,apoyoPr2Porcen,porceEnsa1,porceEnsa2,apoyoEn1Porcen,apoyoEn2Porcen,porceTer1,porceTer2,porceTer3,porceTer4,Ruedo1Porcen,Ruedo2Porcen,pulidadyRevisaPOrcen]
          }*/
         ] 
          
        },
        options:{
          scales:{
           xAxes:[{
               gridLines:{
                 dispaly: false,
               }
           }]
          },
          title :{
            dispaly: true,
            text:"Indicadores de Produccion por #OP",
          },
          tooltips:{
           backgroundColor: '#0584f6',
           titleFontSize:20,
           xPadding:20,
           yPadding:20,
           bodyFontSize: 15,
           bodySpacing: 10,
           mode: 'x',
         }
        },
       
        
        
       })

  }
