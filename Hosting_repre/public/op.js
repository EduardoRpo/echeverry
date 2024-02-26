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

 function despacho(){
  if(confirm("Seguro que desea Ir a despacho de produccion?")){
      window.location.href='despachoPro.html';
      

    }else{

     }
 }


 //---------------------------------------------limpiar vista-------------------------------

 limpiarV=function(){

  document.getElementById('orden').value="";
  document.getElementById('ref').value="";
  document.getElementById('cliente').value="";
  document.getElementById('fi').value="";
  document.getElementById('lote').value="";
  document.getElementById('tallas').value="";
  document.getElementById('tipo').value="";
  
  document.getElementById('canti').value="";

  document.getElementById('salida').value="";
  document.getElementById('tipo2').value="";
  document.getElementById('talla1').value="";
  document.getElementById('cantiTa1').value="";
  document.getElementById('talla2').value="";
  document.getElementById('cantiTa2').value="";
  document.getElementById('talla3').value="";
  document.getElementById('cantiTa3').value="";
  document.getElementById('talla4').value="";
  document.getElementById('cantiTa4').value="";
  document.getElementById('talla5').value="";
  document.getElementById('cantiTa5').value="";
  document.getElementById('talla6').value="";
  document.getElementById('cantiTa6').value="";
  document.getElementById('talla7').value="";
  document.getElementById('cantiTa7').value="";
  document.getElementById('talla8').value="";
  document.getElementById('cantiTa8').value="";
  document.getElementById('talla9').value="";
  document.getElementById('cantiTa9').value="";
  document.getElementById('talla10').value="";
  document.getElementById('cantiTa10').value="";
  document.getElementById('semana').value='';


 }

 //--------------------------------------------registro unidades---------------------------
 
 RegistroValidacion= function(){

  var refParaVal=document.getElementById("ref").value;//Referencia 
  //var cliene=document.getElementById("").value;
   var orde=document.getElementById("orden").value;

    var totalOp=Number(document.getElementById("canti").value);

  db.collection("FichaTecniGlobal").where("Referencia", "==", refParaVal)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());

          var codigo1=`${doc.data().Codigo}`;
          var codigo2=`${doc.data().Codigo2}`;
          var codigo3=`${doc.data().Codigo3}`;
          var codigo4=`${doc.data().Codigo4}`;
          var codigo5=`${doc.data().Codigo5}`;
          var codigo6=`${doc.data().Codigo6}`;
          var codigo7=`${doc.data().Codigo7}`;
          var codigo8=`${doc.data().Codigo8}`;
          var codigo9=`${doc.data().Codigo9}`;
          var codigo10=`${doc.data().Codigo10}`;
          var codigo11=`${doc.data().Codigo11}`;
          var codigo12=`${doc.data().Codigo12}`;
          var codigo13=`${doc.data().Codigo13}`;
          var codigo14=`${doc.data().Codigo14}`;
          var codigo15=`${doc.data().Codigo15}`;
          var codigo16=`${doc.data().Codigo16}`;
          var codigo17=`${doc.data().Codigo17}`;
          var codigo18=`${doc.data().Codigo18}`;
          var codigo19=`${doc.data().Codigo19}`;
          var codigo20=`${doc.data().Codigo20}`;
          var codigo21=`${doc.data().Codigo21}`;
          var codigo22=`${doc.data().Codigo22}`;
          var codigo23=`${doc.data().Codigo23}`;
          var codigo24=`${doc.data().Codigo24}`;
          var codigo25=`${doc.data().Codigo25}`;
          var codigo26=`${doc.data().Codigo26}`;
          var codigo27=`${doc.data().Codigo27}`;
          var codigo28=`${doc.data().Codigo28}`;
          var codigo29=`${doc.data().Codigo29}`;
          var codigo30=`${doc.data().Codigo30}`;
          var codigo31=`${doc.data().Codigo31}`;
          var codigo32=`${doc.data().Codigo32}`;
          var codigo33=`${doc.data().Codigo33}`;
          var codigo34=`${doc.data().Codigo34}`;
          var codigo35=`${doc.data().Codigo35}`;
          var codigo36=`${doc.data().Codigo36}`;
          var codigo37=`${doc.data().Codigo37}`;
          var codigo38=`${doc.data().Codigo38}`;
          var codigo39=`${doc.data().Codigo39}`;
          var codigo40=`${doc.data().Codigo40}`;
          var codigo41=`${doc.data().Codigo41}`;
          var codigo42=`${doc.data().Codigo42}`;
          var codigo43=`${doc.data().Codigo43}`;
          var codigo44=`${doc.data().Codigo44}`;
          var codigo45=`${doc.data().Codigo45}`;
          var codigo46=`${doc.data().Codigo46}`;
          var codigo47=`${doc.data().Codigo47}`;
          var codigo48=`${doc.data().Codigo48}`;
          var codigo49=`${doc.data().Codigo49}`;
          var codigo50=`${doc.data().Codigo50}`;

          console.log("variable antes de nan"+codigo2);


        /*  if (isNaN(codigo1)) {
            codigo1 = "";
          }
          if (isNaN(codigo2)) {
            codigo2 = "";
          }
          if (isNaN(codigo3)) {
            codigo3 = "";
          }
          if (isNaN(codigo4)) {
            codigo4 = "";
          }
          if (isNaN(codigo5)) {
            codigo5 = "";
          }
          if (isNaN(codigo6)) {
            codigo6 = "";
          }
          if (isNaN(codigo7)) {
            codigo7 = "";
          }
          if (isNaN(codigo8)) {
            codigo8 = "";
          }
          if (isNaN(codigo9)) {
            codigo9 = "";
          }
          if (isNaN(codigo10)) {
            codigo10 = "";
          }
          if (isNaN(codigo11)) {
            codigo11 = "";
          }
          if (isNaN(codigo12)) {
            codigo12 = "";
          }
          if (isNaN(codigo13)) {
            codigo13 = "";
          }
          if (isNaN(codigo14)) {
            codigo14 = "";
          }
          if (isNaN(codigo15)) {
            codigo15 = "";
          }
          if (isNaN(codigo16)) {
            codigo16 = "";
          }
          if (isNaN(codigo17)) {
            codigo17 = "";
          }
          if (isNaN(codigo18)) {
            codigo18 = "";
          }
          if (isNaN(codigo19)) {
            codigo19 = "";
          }
          if (isNaN(codigo20)) {
            codigo20 = "";
          }
          if (isNaN(codigo21)) {
            codigo21 = "";
          }
          if (isNaN(codigo22)) {
            codigo22 = "";
          }
          if (isNaN(codigo23)) {
            codigo23 = "";
          }
          if (isNaN(codigo24)) {
            codigo24 = "";
          }
          if (isNaN(codigo25)) {
            codigo25 = "";
          }
          if (isNaN(codigo26)) {
            codigo26 = "";
          }
          if (isNaN(codigo27)) {
            codigo27 = "";
          }
          if (isNaN(codigo28)) {
            codigo28 = "";
          }
          if (isNaN(codigo29)) {
            codigo29 = "";
          }
          if (isNaN(codigo30)) {
            codigo30 = "";
          }
          if (isNaN(codigo31)) {
            codigo31 = "";
          }
          if (isNaN(codigo32)) {
            codigo32 = "";
          }
          if (isNaN(codigo33)) {
            codigo33 = "";
          }
          if (isNaN(codigo34)) {
            codigo34 = "";
          }
          if (isNaN(codigo35)) {
            codigo35 = "";
          }
          if (isNaN(codigo36)) {
            codigo36 = "";
          }
          if (isNaN(codigo37)) {
            codigo37 = "";
          }
          if (isNaN(codigo38)) {
            codigo38 = "";
          }
          if (isNaN(codigo39)) {
            codigo39 = "";
          }
          if (isNaN(codigo40)) {
            codigo40 = "";
          }
          if (isNaN(codigo41)) {
            codigo41 = "";
          }
          if (isNaN(codigo42)) {
            codigo42 = "";
          }
          if (isNaN(codigo43)) {
            codigo43 = "";
          }
          if (isNaN(codigo44)) {
            codigo44 = "";
          }
          if (isNaN(codigo45)) {
            codigo45 = "";
          }
          if (isNaN(codigo46)) {
            codigo46 = "";
          }
          if (isNaN(codigo47)) {
            codigo47 = "";
          }
          if (isNaN(codigo48)) {
            codigo48 = "";
          }
          if (isNaN(codigo49)) {
            codigo49 = "";
          }
          if (isNaN(codigo50)) {
            codigo50 = "";
          }*/

         
          

            db.collection("CantidadesDisponibles").add({
  
  
              OP:orde,
              Referenc:refParaVal,
              //OrdenOperacion:OPE,
              Codigo:codigo1,
              Codigo2:codigo2,
              Codigo3:codigo3,
              Codigo4:codigo4,
              Codigo5:codigo5,
              Codigo6:codigo6,
              Codigo7:codigo7,
              Codigo8:codigo8,
              Codigo9:codigo9,
              Codigo10:codigo10,
              Codigo11:codigo11,
              Codigo12:codigo12,
              Codigo13:codigo13,
              Codigo14:codigo14,
              Codigo15:codigo15,
              Codigo16:codigo16,
              Codigo17:codigo17,
              Codigo18:codigo18,
              Codigo19:codigo19,
              Codigo20:codigo20,
              Codigo21:codigo21,
              Codigo22:codigo22,
              Codigo23:codigo23,
              Codigo24:codigo24,
              Codigo25:codigo25,
              Codigo26:codigo26,
              Codigo27:codigo27,
              Codigo28:codigo28,
              Codigo29:codigo29,
              Codigo30:codigo30,
              Codigo31:codigo31,
              Codigo32:codigo32,
              Codigo33:codigo33,
              Codigo34:codigo34,
              Codigo35:codigo35,
              Codigo36:codigo36,
              Codigo37:codigo37,
              Codigo38:codigo38,
              Codigo39:codigo39,
              Codigo40:codigo40,
              Codigo41:codigo41,
              Codigo42:codigo42,
              Codigo43:codigo43,
              Codigo44:codigo44,
              Codigo45:codigo45,
              Codigo46:codigo46,
              Codigo47:codigo47,
              Codigo48:codigo48,
              Codigo49:codigo49,
              Codigo50:codigo50,
  
              cantiCod1:totalOp,
              cantiCod2:totalOp,
              cantiCod3:totalOp,
              cantiCod4:totalOp,
              cantiCod5:totalOp,
              cantiCod6:totalOp,
              cantiCod7:totalOp,
              cantiCod8:totalOp,
              cantiCod9:totalOp,
              cantiCod10:totalOp,
              cantiCod11:totalOp,
              cantiCod12:totalOp,
              cantiCod13:totalOp,
              cantiCod14:totalOp,
              cantiCod15:totalOp,
              cantiCod16:totalOp,
              cantiCod17:totalOp,
              cantiCod18:totalOp,
              cantiCod19:totalOp,
              cantiCod20:totalOp,
              cantiCod21:totalOp,
              cantiCod22:totalOp,
              cantiCod23:totalOp,
              cantiCod24:totalOp,
              cantiCod25:totalOp,
              cantiCod26:totalOp,
              cantiCod27:totalOp,
              cantiCod28:totalOp,
              cantiCod29:totalOp,
              cantiCod30:totalOp,
              cantiCod31:totalOp,
              cantiCod32:totalOp,
              cantiCod33:totalOp,
              cantiCod34:totalOp,
              cantiCod35:totalOp,
              cantiCod36:totalOp,
              cantiCod37:totalOp,
              cantiCod38:totalOp,
              cantiCod39:totalOp,
              cantiCod40:totalOp,
              cantiCod41:totalOp,
              cantiCod42:totalOp,
              cantiCod43:totalOp,
              cantiCod44:totalOp,
              cantiCod45:totalOp,
              cantiCod46:totalOp,
              cantiCod47:totalOp,
              cantiCod48:totalOp,
              cantiCod49:totalOp,
              cantiCod50:totalOp,
              
  
  
  
  
              
              })
      
              .then(function() {
                  alert("Registro Exitoso")
                  console.log("Document successfully written!");
              })
              .catch(function(error) {
                  alert("No se pudo completar el registro");
                  console.error("Error writing document: ", error);
              });
      
  

          

         
         
    
      });
  })



 }

 //--------------------------------------------ir a control-----------------
 function Seguimiento(){
  if(confirm("Seguro que desea CAMBIAR de pagina?")){
      window.location.href='controlSeguimiento.html';

    }else{

     }
 }

 //---------------------------------imprimir--------------------------

 function imprimirOP(){
  var btnre=document.getElementById("registrarOP");
  btnre.style.display='none';

  var btnco=document.getElementById("consultarOP");
  btnco.style.display='none';

  var btnact=document.getElementById("actualizarOP");
  btnact.style.display='none';

  var btnBorr=document.getElementById("EliminarOP");
  btnBorr.style.display='none';

  var btnImpr=document.getElementById("imprimirOP");
  btnImpr.style.display='none';

  if(document.getElementById("talla1").value==""){
      var comen2=document.getElementById("talla1");
      comen2.style.display='none';
    }
     if(document.getElementById("talla2").value==""){
      var comen2=document.getElementById("talla2");
      comen2.style.display='none';
    }
    if(document.getElementById("talla3").value==""){
      var comen2=document.getElementById("talla3");
      comen2.style.display='none';
    }
    if(document.getElementById("talla4").value==""){
      var comen2=document.getElementById("talla4");
      comen2.style.display='none';
    }
    if(document.getElementById("talla5").value==""){
      var comen2=document.getElementById("talla5");
      comen2.style.display='none';
    }
    if(document.getElementById("talla6").value==""){
      var comen2=document.getElementById("talla6");
      comen2.style.display='none';
    }
    if(document.getElementById("talla7").value==""){
      var comen2=document.getElementById("talla7");
      comen2.style.display='none';
    }
    if(document.getElementById("talla8").value==""){
      var comen2=document.getElementById("talla8");
      comen2.style.display='none';
    }
    if(document.getElementById("talla9").value==""){
      var comen2=document.getElementById("talla9");
      comen2.style.display='none';
    }
    if(document.getElementById("talla10").value==""){
      var comen2=document.getElementById("talla10");
      comen2.style.display='none';
    }

    if(document.getElementById("cantiTa1").value==""){
      var comen2=document.getElementById("cantiTa1");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa2").value==""){
      var comen2=document.getElementById("cantiTa2");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa3").value==""){
      var comen2=document.getElementById("cantiTa3");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa4").value==""){
      var comen2=document.getElementById("cantiTa4");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa5").value==""){
      var comen2=document.getElementById("cantiTa5");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa6").value==""){
      var comen2=document.getElementById("cantiTa6");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa7").value==""){
      var comen2=document.getElementById("cantiTa7");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa8").value==""){
      var comen2=document.getElementById("cantiTa8");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa9").value==""){
      var comen2=document.getElementById("cantiTa9");
      comen2.style.display='none';
    }
    if(document.getElementById("cantiTa10").value==""){
      var comen2=document.getElementById("cantiTa10");
      comen2.style.display='none';
    }









  if(window.print) window.print()

  else alert("Puede utilizar ctrl+P")


 }

 //--------------------------------search-------------------------



 //------------------------llenar tabla------------------------------------------

 window.onload = function(){
 
 // btnBuscar();
  document.getElementById('actualizarOP').style.display='none';
  document.getElementById('EliminarOP').style.display='none';
  document.getElementById('imprimirOP').style.display='none';


   tabl=document.getElementById("tabla");

  db.collection("OrdenProduccion").orderBy("OrdenP","desc").limit(2000).onSnapshot((querySnapshot) =>{
      tabl.innerHTML="";
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());

           op=`${doc.data().OrdenP}`;
           ref=`${doc.data().Referenc}`;
           cli=`${doc.data().Cliente}`;
           canti=`${doc.data().Cantidad}`;
           fecha=`${doc.data().FechaIngreso}`;
           estado=`${doc.data().Estado}`;


          tabl.innerHTML += `
                   <tr>
               <th scope="row">${op}</th>
               <td>${ref}</td>
               <td>${cli}</td>
               <td>${canti}</td>
               <td>${fecha}</td>
               <td>${estado}</td>


               </tr>

          
          
          `
        
 const searchInput=document.getElementById('search');
 const rows = document.querySelectorAll('tbody tr');

 searchInput.addEventListener('keyup', function(event){

  const q=event.target.value.toLowerCase();
  rows.forEach(row =>{
    row.querySelector('td').textContent.toLowerCase().startsWith(q)
     ? (row.style.display="table-row") :(row.style.display='none');
  });
 });
           
       });
   })

 }

 
  

 //---------------------------------------------------------------------------------


/*  verifi=function(){
  var orde=document.getElementById("orden").value;

      db.collection("OrdenProduccion").where("OrdenP", "==", orde)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var comprobarOP=`${doc.data().OrdenP}`;

          if(comprobarOP==orde){

              alert("La OP ya existe!!!");
          }
                
      });
  })


 }*/

 function actualizarOP(){

  actuali();
  //agregarValida();
 }

function RegistrarOP(){


  var orde=document.getElementById("orden").value;
  var refe=document.getElementById("ref").value;
  var cli=document.getElementById("cliente").value;
  var fIngre=document.getElementById("fi").value;
  var lot=document.getElementById("lote").value;
  var tip=document.getElementById("tipo").value;
  
  var tip2=document.getElementById("tipo2").value;

  var cantidad=document.getElementById("canti").value;
  var sal=document.getElementById("salida").value;
  var tal1=document.getElementById("talla1").value;
//  var can1=document.getElementById("cantiTa1").value;
  var tal2=document.getElementById("talla2").value;
  //var can2=document.getElementById("cantiTa2").value;
  var tal3=document.getElementById("talla3").value;
  //var can3=document.getElementById("cantiTa3").value;
  var tal4=document.getElementById("talla4").value;
  //var can4=document.getElementById("cantiTa4").value;
  var tal5=document.getElementById("talla5").value;
  //var can5=document.getElementById("cantiTa5").value;

  var tal6=document.getElementById("talla6").value;
  //var can6=document.getElementById("cantiTa6").value;
  var tal7=document.getElementById("talla7").value;
  //var can7=document.getElementById("cantiTa7").value;
  var tal8=document.getElementById("talla8").value;
  //var can8=document.getElementById("cantiTa8").value;
  var tal9=document.getElementById("talla9").value;
  //var can9=document.getElementById("cantiTa9").value;
  var tal10=document.getElementById("talla10").value;
  //var can10=document.getElementById("cantiTa10").value;
  var week=document.getElementById('semana').value;


  //----------------------------------------------------------------------
  

  //------------------------------------------------------------------------

 
 /* can1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;
  can7=0;
  can8=0;
  can9=0;
  can10=0;
*/
//**************************************************llenar tallas**************

var TodasTallas=tal1+" "+tal2+" "+tal3+" "+tal4+" "+tal5+" "+tal6+" "+tal7+" "+tal8+" "+tal9+" "+tal10;
console.log(TodasTallas);

var tall=document.getElementById("tallas").value=TodasTallas;


//*****************************************************************************







/*  db.collection("OrdenProduccion").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var comprobarOP=`${doc.data().OrdenP}`;

          if(comprobarOP==orde){
          
                  alert("La OP ya fue registrada, verique o intente con otra...");

          }else{
              
          }


      });
  })*/

  verificacion=0;
  cantidad=0;
  var Cantidad=Number(document.getElementById("canti").value);


  var canti1=Number(document.getElementById("cantiTa1").value);
  var canti2=Number(document.getElementById("cantiTa2").value);
  var canti3=Number(document.getElementById("cantiTa3").value);
  var canti4=Number(document.getElementById("cantiTa4").value);
  var canti5=Number(document.getElementById("cantiTa5").value);
  var canti6=Number(document.getElementById("cantiTa6").value);
  var canti7=Number(document.getElementById("cantiTa7").value);
  var canti8=Number(document.getElementById("cantiTa8").value);
  var canti9=Number(document.getElementById("cantiTa9").value);
  var canti10=Number(document.getElementById("cantiTa10").value);

  var verificacion=canti1+canti2+canti3+canti4+canti5+canti6+canti7+canti8+canti9+canti10;


  //console.log(Cantidad);

  //-----------------------------------------estado-------------------------------------------
  var estado=document.getElementById("resulEstado").value;


      //----------------------------verificacion cantidades------------------------------------

 if(verificacion>Cantidad) {
      alert("Ha excedido la cantidad maxima, favor revise las cantidades...");
  }
  if(Cantidad>verificacion) {
      alert("Faltan unidades por Registrar...");
  }



  if(Cantidad==verificacion) {

    alertify.confirm("Seguro que desea COMPLETAR el registro?",
  function() {
    alertify.success('Registro exitoso!!!');
    RegistroValidacion();
    db.collection("OrdenProduccion").add({
  
      Semana:week,
      OrdenP:orde,
      Referenc:refe,
      Cliente:cli,
      //OrdenOperacion:OPE,
      FechaIngreso:fIngre,
      Lote:lot,
      Tallas:tall,
      Tipo:tip,
      Tipo2:tip2,
      Cantidad:Cantidad,
      Salida:sal,
      Talla1:tal1,
      Cantidad1:canti1,
      Talla2:tal2,
      Cantidad2:canti2,
      Talla3:tal3,
      Cantidad3:canti3,
      Talla4:tal4,
      Cantidad4:canti4,
      Estado:estado,

      Talla5:tal5,
      Cantidad5:canti5,
      Talla6:tal6,
      Cantidad6:canti6,
      Talla7:tal7,
      Cantidad7:canti7,
      Talla8:tal8,
      Cantidad8:canti8,

      Talla9:tal9,
      Cantidad9:canti9,
      Talla10:tal10,
      Cantidad10:canti10,
     
      
      })

      .then(function() {
          console.log("Document successfully written!");
          limpiarV();
          document.getElementById('actualizarOP').style.display='none';
          document.getElementById('EliminarOP').style.display='none';
          document.getElementById('imprimirOP').style.display='none';
      })
      .catch(function(error) {
          alert("No se pudo completar el registro");
          console.error("Error writing document: ", error);
      });



  },
  function() {
    alertify.error('Registro Cancelado');
  }
);

    /* if( confirm("Seguro que desea COMPLETAR el registro?")){
         // alert("aqui fue...");
         RegistroValidacion();


      db.collection("OrdenProduccion").add({
  
  
          OrdenP:orde,
          Referenc:refe,
          Cliente:cli,
          //OrdenOperacion:OPE,
          FechaIngreso:fIngre,
          Lote:lot,
          Tallas:tall,
          Tipo:tip,
          Tipo2:tip2,
          Cantidad:Cantidad,
          Salida:sal,
          Talla1:tal1,
          Cantidad1:canti1,
          Talla2:tal2,
          Cantidad2:canti2,
          Talla3:tal3,
          Cantidad3:canti3,
          Talla4:tal4,
          Cantidad4:canti4,
          Estado:estado,
  
          Talla5:tal5,
          Cantidad5:canti5,
          Talla6:tal6,
          Cantidad6:canti6,
          Talla7:tal7,
          Cantidad7:canti7,
          Talla8:tal8,
          Cantidad8:canti8,
  
          Talla9:tal9,
          Cantidad9:canti9,
          Talla10:tal10,
          Cantidad10:canti10,
         
          
          })
  
          .then(function() {
              alert("Registro Exitoso")
              console.log("Document successfully written!");
              limpiarV();
          })
          .catch(function(error) {
              alert("No se pudo completar el registro");
              console.error("Error writing document: ", error);
          });
  

     }else{
         alert("Ha cancelado el Registro...");
     }*/

     
  }
   //---------------------------------------------------------------------------------------
 
     
     

      


}

function consultarOP(){
  //RegistroValidacion();

  var orde=document.getElementById("orden").value;
  var refe=document.getElementById("ref");
  var cli=document.getElementById("cliente");
  var fIngre=document.getElementById("fi");
  var lot=document.getElementById("lote");
  var tall=document.getElementById("tallas");
  var tip=document.getElementById("tipo");
  var tip2=document.getElementById("tipo2");

  var cantidad=document.getElementById("canti");
  var sal=document.getElementById("salida");
  var tal1=document.getElementById("talla1");
  var can1=document.getElementById("cantiTa1");
  var tal2=document.getElementById("talla2");
  var can2=document.getElementById("cantiTa2");
  var tal3=document.getElementById("talla3");
  var can3=document.getElementById("cantiTa3");
  var tal4=document.getElementById("talla4");
  var can4=document.getElementById("cantiTa4");
  var tal5=document.getElementById("talla5");
  var can5=document.getElementById("cantiTa5");

  var tal6=document.getElementById("talla6");
  var can6=document.getElementById("cantiTa6");
  var tal7=document.getElementById("talla7");
  var can7=document.getElementById("cantiTa7");
  var tal8=document.getElementById("talla8");
  var can8=document.getElementById("cantiTa8");
  var tal9=document.getElementById("talla9");
  var can9=document.getElementById("cantiTa9");
  var tal10=document.getElementById("talla10");
  var can10=document.getElementById("cantiTa10");

  if(orde!=""){

      db.collection("OrdenProduccion").where("OrdenP", "==", orde)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var comprobarOP=`${doc.data().OrdenP}`;

          var re=`${doc.data().Referenc}`;
          var clie=`${doc.data().Cliente}`;
          var fIngre=`${doc.data().FechaIngreso}`;
          var lote=`${doc.data().Lote}`;
          var tall=`${doc.data().Tallas}`;
          var tip=`${doc.data().Tipo}`;
          var tip2=`${doc.data().Tipo2}`;

          var cantidad=`${doc.data().Cantidad}`;
          var sal=`${doc.data().Salida}`;
          var tal1=`${doc.data().Talla1}`;
          var can1=`${doc.data().Cantidad1}`;
          var tal2=`${doc.data().Talla2}`;
          var can2=`${doc.data().Cantidad2}`;
          var tal3=`${doc.data().Talla3}`;
          var can3=`${doc.data().Cantidad3}`;
          var tal4=`${doc.data().Talla4}`;
          var can4=`${doc.data().Cantidad4}`;

          var tal5=`${doc.data().Talla5}`;
          var can5=`${doc.data().Cantidad5}`;
          var tal6=`${doc.data().Talla6}`;
          var can6=`${doc.data().Cantidad6}`;
          var tal7=`${doc.data().Talla7}`;
          var can7=`${doc.data().Cantidad7}`;

          var tal8=`${doc.data().Talla8}`;
          var can8=`${doc.data().Cantidad8}`;
          var tal9=`${doc.data().Talla9}`;
          var can9=`${doc.data().Cantidad9}`;
          var tal10=`${doc.data().Talla10}`;
          var can10=`${doc.data().Cantidad10}`;
          var consulEstado=`${doc.data().Estado}`;
          var semanaQuery=`${doc.data().Semana}`;


          //---------------------------quitar ceros-------------------------
          if(can1==0){
              document.getElementById("cantiTa1").value="";

          }if(can1!=0){
              document.getElementById("cantiTa1").value=can1;

          }

          if(can2==0){
              document.getElementById("cantiTa2").value="";

          }if(can2!=0){
              document.getElementById("cantiTa2").value=can2;

          }

          if(can3==0){
              document.getElementById("cantiTa3").value="";

          }  if(can3!=0){
              document.getElementById("cantiTa3").value=can3;

          }

          
          if(can4==0){
              document.getElementById("cantiTa4").value="";

          }
          if(can4!=0){
              document.getElementById("cantiTa4").value=can4;

          }

          if(can5==0){
              document.getElementById("cantiTa5").value="";

          }if(can5!=0){
              document.getElementById("cantiTa5").value=can5;

          }

          if(can6==0){
              document.getElementById("cantiTa6").value="";

          }if(can6!=0){
              document.getElementById("cantiTa6").value=can6;

          }

          if(can7==0){
              document.getElementById("cantiTa7").value="";

          }if(can7!=0){
              document.getElementById("cantiTa7").value=can7;

          }

          if(can8==0){
              document.getElementById("cantiTa8").value="";

          }if(can8!=0){
              document.getElementById("cantiTa8").value=can8;

          }

          if(can9==0){
              document.getElementById("cantiTa9").value="";

          }if(can9!=0){
              document.getElementById("cantiTa9").value=can9;

          }

          if(can10==0){
              document.getElementById("cantiTa10").value="";


          }if(can10!=0){
              document.getElementById("cantiTa10").value=can10;

          }



          //------------------------------------------------
          document.getElementById("resulEstado").value=consulEstado;

          document.getElementById("ref").value=re;
          document.getElementById("cliente").value=clie;
          document.getElementById("fi").value=fIngre;
          document.getElementById("lote").value=lote;
          document.getElementById("tallas").value=tall;
          document.getElementById("tipo").value=tip;
          document.getElementById("tipo2").value=tip2;

          document.getElementById("canti").value=cantidad;
          document.getElementById("salida").value=sal;
          document.getElementById("talla1").value=tal1;
         // document.getElementById("cantiTa1").value=can1;
          document.getElementById("talla2").value=tal2;
         // document.getElementById("cantiTa2").value=can2;
          document.getElementById("talla3").value=tal3;
         // document.getElementById("cantiTa3").value=can3;
          document.getElementById("talla4").value=tal4;
          document.getElementById("talla5").value=tal5;
        //  document.getElementById("cantiTa5").value=can5;
      
          document.getElementById("talla6").value=tal6;
          //document.getElementById("cantiTa6").value=can6;
          document.getElementById("talla7").value=tal7;
          //document.getElementById("cantiTa7").value=can7;
          document.getElementById("talla8").value=tal8;
         // document.getElementById("cantiTa8").value=can8;
          document.getElementById("talla9").value=tal9;
         // document.getElementById("cantiTa9").value=can9;
          document.getElementById("talla10").value=tal10;
         // document.getElementById("cantiTa10").value=can10;
          document.getElementById('semana').value=semanaQuery;
          //-------------------------------activar botones---------------------------

          document.getElementById('actualizarOP').style.display='block';
          document.getElementById('EliminarOP').style.display='block';
          document.getElementById('imprimirOP').style.display='block';




          //---------------------------eliminar--------------------------------

              elimi=function(){
                  db.collection("OrdenProduccion").doc(doc.id).delete().then(function() {
                     // alert("Ha eliminado el Registro");
                      limpiarV();
                      document.getElementById('actualizarOP').style.display='none';
                      document.getElementById('EliminarOP').style.display='none';
                      document.getElementById('imprimirOP').style.display='none';
                      console.log("Document successfully deleted!");
      
                  }).catch(function(error) {
                      alert("No se ha podido eliminar el documento");
                      console.error("Error removing document: ", error);
                  });
  
              }
  
         
          

          //----------------------------Actualizar----------------------------

          actuali=function(){

              var orde=document.getElementById("orden").value;
              var refe=document.getElementById("ref").value;
              var cli=document.getElementById("cliente").value;
              var fIngre=document.getElementById("fi").value;
              var lot=document.getElementById("lote").value;
              var tall=document.getElementById("tallas").value;
              var tip=document.getElementById("tipo").value;
              var tip2=document.getElementById("tipo2").value;

              var cantidad=document.getElementById("canti").value;
              var sal=document.getElementById("salida").value;
              var tal1=document.getElementById("talla1").value;
            //  var can1=document.getElementById("cantiTa1").value;
              var tal2=document.getElementById("talla2").value;
            //  var can2=document.getElementById("cantiTa2").value;
              var tal3=document.getElementById("talla3").value;
            //  var can3=document.getElementById("cantiTa3").value;
              var tal4=document.getElementById("talla4").value;
            //  var can4=document.getElementById("cantiTa4").value;
              var tal5=document.getElementById("talla5").value;
            //  var can5=document.getElementById("cantiTa5").value;
          
              var tal6=document.getElementById("talla6").value;
             // var can6=document.getElementById("cantiTa6").value;
              var tal7=document.getElementById("talla7").value;
             // var can7=document.getElementById("cantiTa7").value;
              var tal8=document.getElementById("talla8").value;
            //  var can8=document.getElementById("cantiTa8").value;
              var tal9=document.getElementById("talla9").value;
            //  var can9=document.getElementById("cantiTa9").value;
              var tal10=document.getElementById("talla10").value;
            //  var can10=document.getElementById("cantiTa10").value;
            var weekUpdate=document.getElementById('semana').value;

            var TodasTallas=tal1+" "+tal2+" "+tal3+" "+tal4+" "+tal5+" "+tal6+" "+tal7+" "+tal8+" "+tal9+" "+tal10;
console.log(TodasTallas);

var tall=document.getElementById("tallas").value=TodasTallas;


              verificacion=0;
  cantidad=0;
  var Cantidad=Number(document.getElementById("canti").value);


  var canti1=Number(document.getElementById("cantiTa1").value);
  var canti2=Number(document.getElementById("cantiTa2").value);
  var canti3=Number(document.getElementById("cantiTa3").value);
  var canti4=Number(document.getElementById("cantiTa4").value);
  var canti5=Number(document.getElementById("cantiTa5").value);
  var canti6=Number(document.getElementById("cantiTa6").value);
  var canti7=Number(document.getElementById("cantiTa7").value);
  var canti8=Number(document.getElementById("cantiTa8").value);
  var canti9=Number(document.getElementById("cantiTa9").value);
  var canti10=Number(document.getElementById("cantiTa10").value);

  var verificacion=canti1+canti2+canti3+canti4+canti5+canti6+canti7+canti8+canti9+canti10;


  //console.log(Cantidad);

  //--------------------------------------actualizacion de estado---------------------------
          var estado=document.getElementById("resulEstado").value;
  

      //----------------------------verificacion cantidades------------------------------------

 if(verificacion>Cantidad) {
      alert("Ha excedido la cantidad maxima, favor revise las cantidades...");
  }
  if(Cantidad>verificacion) {
      alert("Faltan unidades por Registrar...");
  }

  if(Cantidad==verificacion) {

    alertify.confirm("Seguro que desea ACTUALIZAR el registro?",
  function() {
    alertify.success('Actualizacion Exitosa!!!');
    var washingtonRef = db.collection("OrdenProduccion").doc(doc.id);
                 
    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
     OrdenP:orde,
     Referenc:refe,
     Cliente:cli,
     //OrdenOperacion:OPE,
     FechaIngreso:fIngre,
     Lote:lot,
     Tallas:tall,
     Tipo:tip,
     Tipo2:tip2,
     Cantidad:Cantidad,
     Salida:sal,
     Talla1:tal1,
     Cantidad1:canti1,
     Talla2:tal2,
     Cantidad2:canti2,
     Talla3:tal3,
     Cantidad3:canti3,
     Talla4:tal4,
     Cantidad4:canti4,
     Estado:estado,

     Talla5:tal5,
     Cantidad5:canti5,
     Talla6:tal6,
     Cantidad6:canti6,
     Talla7:tal7,
     Cantidad7:canti7,
     Talla8:tal8,
     Cantidad8:canti8,

     Talla9:tal9,
     Cantidad9:canti9,
     Talla10:tal10,
     Cantidad10:canti10,
     Semana:weekUpdate,
    
              })
    .then(function() {
        
        estadoFicha();
        limpiarV();
        document.getElementById('actualizarOP').style.display='none';
        document.getElementById('EliminarOP').style.display='none';
        document.getElementById('imprimirOP').style.display='none';
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

  },
  function() {
    alertify.error('Ha Cancelado la Actualización....!');

  }
);

          
            /*  if(confirm("Seguro que desea ACTUALIZAR el registro?")){
          
                  var washingtonRef = db.collection("OrdenProduccion").doc(doc.id);
                 
                         // Set the "capital" field of the city 'DC'
                         return washingtonRef.update({
                          OrdenP:orde,
                          Referenc:refe,
                          Cliente:cli,
                          //OrdenOperacion:OPE,
                          FechaIngreso:fIngre,
                          Lote:lot,
                          Tallas:tall,
                          Tipo:tip,
                          Tipo2:tip2,
                          Cantidad:Cantidad,
                          Salida:sal,
                          Talla1:tal1,
                          Cantidad1:canti1,
                          Talla2:tal2,
                          Cantidad2:canti2,
                          Talla3:tal3,
                          Cantidad3:canti3,
                          Talla4:tal4,
                          Cantidad4:canti4,
                          Estado:estado,
                  
                          Talla5:tal5,
                          Cantidad5:canti5,
                          Talla6:tal6,
                          Cantidad6:canti6,
                          Talla7:tal7,
                          Cantidad7:canti7,
                          Talla8:tal8,
                          Cantidad8:canti8,
                  
                          Talla9:tal9,
                          Cantidad9:canti9,
                          Talla10:tal10,
                          Cantidad10:canti10,
                         
                                   })
                         .then(function() {
                             alert("Actualizacion exitosa!!!");
                             estadoFicha();
                             limpiarV();
                             document.getElementById('actualizarOP').style.display='none';
                             document.getElementById('EliminarOP').style.display='none';
                             document.getElementById('imprimirOP').style.display='none';
                             console.log("Document successfully updated!");
                         })
                         .catch(function(error) {
                             // The document probably doesn't exist.
                             console.error("Error updating document: ", error);
                         });
                 
                      }else{
                          alert("Ha cancelado la Actualizacion...");
                      }*/
          
              }
          


          }
         
          
          //-------------------------------------------------------------------
      


          



          
      });
  })



  }else{
      alert("Ingrese el # de OP a consultar");
  }



  


}
function eliminarOP(){

  alertify.confirm("Seguro que desea ELIMINAR el documento?",
  function() {
    alertify.success('Ha eliminado exitosamente la OP...!');
    elimi();
  },
  function() {
    alertify.error('Ha cancelado el proceso...');
  }
);

 /* if(confirm("Seguro que desea ELIMINAR el documento?")){
      
      elimi();

  }else{
      alert("Ha cancelado el proceso...");
  }*/

 }

estadoFicha=function(){

 estadoFic=document.getElementById("resulEstado").value;

 datoRef=document.getElementById("ref").value;

enviarCliente=document.getElementById("cliente").value;

db.collection("FichaTecniGlobal").where("Referencia", "==", datoRef).where("Cliente", "==", enviarCliente)
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      //  var refe=`${doc.data().Referencia}`;
      //  var cli1=`${doc.data().Cliente}`;
      
      
        var washingtonRef = db.collection("FichaTecniGlobal").doc(doc.id);

        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({

           Estado:estadoFic

          })
          .then(function() {
              console.log("Document successfully updated!");
          })
          .catch(function(error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });

         });
     })
   

}
