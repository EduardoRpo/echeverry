
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
//-----------------------cerrar jornada----------------------
function cerrarJornada(){
  
  if (confirm("Seguro que desea terminar la jornada?")) {
    // alert("Ya ha iniciado el Cronometro...");

    document.getElementById('sumatoriaCantidades').value=0;
    document.getElementById('sumatoriaCantidadesReproceso').value=0;

  audio.pause();
  Swal.fire(
    'Nos vemos mañana!!!',
    'Ha reiniciado el conteo de forma exitosa',
    'success'
  )

  } else {
  }
 


}

//-----------------mensaje push terminacion------------------------
function msjPush(){
  var usuario=document.getElementById('nombre').value;

  if(usuario=='Pulida y Revisada 1'){
    db.collection("centroMensajesPyR1").orderBy("Fecha", "asc").limit(1)
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.id, " => ", doc.data());
      mensaje = `${doc.data().Mensaje}`;
      usu = `${doc.data().Usuario}`;
      estado=`${doc.data().Estado}`;
  
  
      console.log('El Mensaje es:'+mensaje);
  
  
      if(estado=='Activado'){
        VanillaToasts.create({
          title:'Representaciones Echeverry',
          text: mensaje,
          type: 'info',
          icon: 'img/info.png',
          timeout: 16000,
       });
  
      }else{
        
      }
  
  });
  })
  }
  if(usuario=='Pulida y Revisada 2'){
    db.collection("centroMensajesPyR2").orderBy("Fecha", "asc").limit(1)
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.id, " => ", doc.data());
      mensaje = `${doc.data().Mensaje}`;
      usu = `${doc.data().Usuario}`;
      estado=`${doc.data().Estado}`;
  
  
      console.log('El Mensaje es:'+mensaje);
  
  
      if(estado=='Activado'){
        VanillaToasts.create({
          title:'Representaciones Echeverry',
          text: mensaje,
          type: 'info',
          icon: 'img/info.png',
          timeout: 16000,
       });
  
      }else{
        
      }
  
  });
  })
  }

}
//--------------funcion boton suena---------------
var audio=document.getElementById('audio');
var btnPlay=document.getElementById('play');
var contador=0;

//----------------temporizador-----------
 var temporizador;

function detenerse(){
  clearInterval(temporizador);
  contador_s=0;
  contador_m=0;
  m.innerHTML=contador_m;
  s.innerHTML=contador_s;
}



function carga(){
  contador_s=0;
  contador_m=0;
  s=document.getElementById('segundos');
  m=document.getElementById('minutos');

  temporizador=setInterval(
     function() {

    if(contador_s==60)
    {
      contador_s=0;
      contador_m++;
      m.innerHTML=contador_m;
  
      if(contador_m==0){
        contador_m=0;
      }
    }

    if(contador_m==59 && contador_s==59){
      audio.play();
    }
  
    s.innerHTML=contador_s;
    contador_s++;
  
  
  },1000);

}



//---------------------------------------

function Play2(){
 
    audio.play();

}
function detener2(){

  audio.pause();
}

//------------------------------------------refrescar------------------------------
function refrecar(){
  
  if (confirm("Seguro que desea Actualizar la pagina?")) {
    // alert("Ya ha iniciado el Cronometro...");

    location.reload();

  
  } else {
  }
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

porcenSin=function() {



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
                          Operacion8 =document.getElementById("operaci8").value;
                          Operacion9 = document.getElementById("operaci9").value;


                          var comentarios=document.getElementById("Comentarios").value;

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
          cantiPla=0;
          cantiFile=0;
          cantiRec=0;
          cantiOb=0;
          cantimt=0;
          cantiBuenas=0;
          SumacantidadElabo=0;

                        //  integrantes = `${doc.data().Comen}`;
                        /*var cantiPla=document.getElementById("Rplana").value;
                        var cantiFile=document.getElementById("Rfileteadora").value;
                        var cantiRec=document.getElementById("Rrecubridora").value;
                        var cantiOb=document.getElementById("Rob").value;
                        var cantimt=document.getElementById("Rmt").value;*/

                        cantidadElabo = document.getElementById("canti").value;


                        /*SumacantidadElabo=parseInt(cantiBuenas)+parseInt(cantiPla)+parseInt(cantiFile)+parseInt(cantiRec)+parseInt(cantiOb)+parseInt(cantimt);
                        alert(SumacantidadElabo);

                        cantidadElabo=SumacantidadElabo;*/

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
                          Rendi = ((rela * 100) / (tiemTrabajado - comida - tinto - tinto2)) /*/ numeroPalabras*/;

                          TiempoTrabajaSin = tiemTrabajado - comida - tinto - tinto2;



alert("el resultado es_"+TiempoTrabajaSin);


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



        var lo = `${doc.data().lote}`;
        var tall = `${doc.data().talla}`;
        ca = `${doc.data().cantidadElaborada}`;
        var REF = `${doc.data().referencia}`;

        var tIni2 = `${doc.data().TiempoIni}`;

        comi = `${doc.data().Comida}`;
        tint = `${doc.data().Tinto}`;
        tint2 = `${doc.data().Tinto2}`;



        document.title = comenUsu;
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

        if(document.getElementById("mostrarFechaI").value!=""){
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
        document.getElementById("comentariosPuli").style.display = "block";


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

          //fechaDelDiaActu = document.getElementById("fechaMovil").value;

          var hoy = new Date();
      var dia=hoy.getDate();
      var mes=hoy.getMonth()+1;
      var ano=hoy.getFullYear();

      if(mes<10){
        //alert(ano+"-0"+mes+"-"+dia);
        fechaDelDiaActu=(ano+"-0"+mes+"-0"+dia);
      }
      else{
        //alert(ano+"-"+mes+"-"+dia);
        fechaDelDiaActu=(ano+"-"+mes+"-"+dia);

      }
           comentariosPuli = document.getElementById("comentariosPuli").value;

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

          var culmi = document.getElementById("TieFinProdu").value;
          

        cantiPlana=0;
        cantiFile=0;
        cantiRecu=0;
        cantiOB=0;
        cantiMT=0;
        cantiTotalReproceso=0;

          var cantiPlana=document.getElementById("Rplana").value;
          var cantiFile=document.getElementById("Rfileteadora").value;
          var cantiRecu=document.getElementById("Rrecubridora").value;
          var cantiOB=document.getElementById("Rob").value;
          var cantiMT=document.getElementById("Rmt").value;


          cantiTotalReproceso=parseInt(cantiPlana)+parseInt(cantiFile)+parseInt(cantiRecu)+parseInt(cantiOB)+parseInt(cantiMT);


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
             &&
            document.getElementById("canti").value != "") {

            document.getElementById("resta").value = Math.round(resulTiemPro);
            resa = document.getElementById("resta").value;


            var washingtonRef = db.collection("controladministradores").doc(doc.id);

            // Set the "capital" field of the city 'DC'
            return washingtonRef.update({
              cantidadElaborada: cantid,
              //  color:maqui,
              //OrdenOperacion:OPE,
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
              //fecha: fechaDelDiaActu,
              Anotaciones:comentariosPuli,

              referencia: orden,
              talla: tal,
              tiempo: resa,
              // TiempoIni:tInicial,

              usuariooperario: nom,

              ReproPlana:cantiPlana,
              ReproFile:cantiFile,
              ReproRecub:cantiRecu,
              ReproOB:cantiOB,
              ReproMT:cantiMT

            })




              .then(function () {
                // alert("Registro Completo!!!"+"Tiempo: "+resa+"Rendimiento: "+RendimientoOp+"%");

                document.getElementById("comentariosPuli").value= "";

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
                document.getElementById("comentariosPuli").style.display = "none";
                document.getElementById("sp1").style.display = "block";
                document.getElementById("acc").style.display = "block";
                Play2();
               detenerse();





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
  tiemTrabajado1=0;
  comida=0;
  tinto=0;
  tinto2=0;

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
    tinto=0;
    tinto2=0;
  }
  var isChecked2 = document.getElementById('cbTinto').checked;
  if (isChecked2) {
    tinto = 480;
    comida=0;
    tinto2=0;

  }
  var isChecked3 = document.getElementById('cbTinto2').checked;
  if (isChecked3) {
    tinto2 = 180;
    comida=0;
  tinto=0;
  }

  if( isChecked && isChecked2){
    comida = 900;
    tinto = 480;
    tinto2=0;

  }
  if(isChecked2 && isChecked3){
    tinto = 480;
    tinto2 = 180;
    comida=0;

  }


  // Maqui=document.getElementById("mq").value;

  Operario = document.getElementById("nombre").value;
  cantidadElabo = document.getElementById("canti").value;
  tiemTrabajado1 = document.getElementById("resta").value;

  tiemTrabajado=parseFloat(tiemTrabajado1)-parseFloat(comida)-parseFloat(tinto)-parseFloat(tinto2);

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
              comis=0;
              pau11=0;
              dos=0;
              tiempoSin=0;
              var comida=document.getElementById("cbComida").value;
              var tinto=document.getElementById("cbTinto").value;
              var dosPM=document.getElementById("cbTinto2").value;

              if(comida)
              {
                comis=900;
              }
              if(tinto)
              {
                pau11=480;
              }
              if(dosPM)
              {
                dos=180;
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
              Rendi = ((rela * 100) / (tiemTrabajado)) /*/ numeroPalabras*/ ;
            // Rendi = ((rela * 100) / (tiempoSin)) / numeroPalabras;
             // console.log(numeroPalabras);



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
  i++; if (i > color.length - 1) { i = 0; }
}
setInterval(change, 1000);

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

if( document.getElementById("canti").value == "" || document.getElementById("operaci").value == "" || document.getElementById("op").value == "" || document.getElementById("Comentarios").value == ""){
  Swal.fire(
    'Error',
    'Complete todos los campos antes de Finalizar...',
    'info'
  )

}else{
  if (confirm("Seguro que desea Finalizar el Tiempo?")) {
    consulHora = document.getElementById("TieIniProdu").value;
    if (consulHora != "") {
      var horaFinProd = new Date();
      document.getElementById("TieFinProdu").value = horaFinProd;
      document.getElementById("TieFinProdu").style.background = "rgb(32, 226, 32)";
      resulTiemPro = ((horaFinProd - consulHora) / 1000);
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
         cantidadReproce=0;
         sumaSubtotalRepro=0;
         cantiPl=0;
         cantiFi=0;
         cantiRe=0;
         cantiboto=0;
         cantimanua=0;
      
      // console.log("la sumatoria en esta vaina da: "+sumaSubtotal);
  


      var cantiPl=document.getElementById("Rplana").value;
      var cantiFi=document.getElementById("Rfileteadora").value;
      var cantiRe=document.getElementById("Rrecubridora").value;
      var cantiboto=document.getElementById("Rob").value;
      var cantimanua=document.getElementById("Rmt").value;

      if (isNaN(cantiPl)) {
        cantiPl = 0;
      }
      if (cantiPl == "") {
        cantiPl = 0;
      }
      if (isNaN(cantiFi)) {
        cantiFi = 0;
      }
      if (cantiFi == "") {
        cantiFi = 0;
      }
      if (isNaN(cantiRe)) {
        cantiRe = 0;
      }
      if (cantiRe == "") {
        cantiRe = 0;
      }
      if (isNaN(cantiboto)) {
        cantiboto = 0;
      }
      if (cantiboto == "") {
        cantiboto = 0;
      }
      if (isNaN(cantimanua)) {
        cantimanua = 0;
      }
      if (cantimanua == "") {
        cantimanua = 0;
      }






      var cantidadReproce=parseInt(cantiPl)+parseInt(cantiFi)+parseInt(cantiRe)+parseInt(cantiboto)+parseInt(cantimanua);

      var subtotalRepro = document.getElementById("sumatoriaCantidadesReproceso").value;

      sumaSubtotalRepro = parseInt(cantidadReproce) + parseInt(subtotalRepro);


      document.getElementById("sumatoriaCantidadesReproceso").value = sumaSubtotalRepro;

      var cantid=document.getElementById("canti").value;
          
      var subtotal = document.getElementById("sumatoriaCantidades").value;
   

      sumaSubtotal = parseInt(cantid) + parseInt(subtotal) - parseInt(cantidadReproce);
      document.getElementById("sumatoriaCantidades").value = sumaSubtotal;





  
      msjPush();

      Actu();
      //--------------------------------------------------actualizar-----------------------
      //porcenSin();
  
      //---------------------------------------------------------------------------------
  
      TablaPro();
      
      document.getElementById("canti").value = "";
      document.getElementById("Rplana").value="0";
      document.getElementById("Rfileteadora").value="0";
      document.getElementById("Rrecubridora").value="0";
      document.getElementById("Rob").value="0";
      document.getElementById("Rmt").value="0";


  
  
  
  
  
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
      var dia=hoy.getDate();
      var mes=hoy.getMonth()+1;
      var ano=hoy.getFullYear();

      if(dia<10){
        dia='0'+dia;
      }
      if(mes <10){
        mes='0'+mes;
      }
      
      fechaDelDia = (ano + "-" + mes + "-" + dia);
      

     /* if(dia < 10 && mes < 10){

        fechaDelDia = (ano + "-0" + mes + "-0" + dia);
    
      }
     else if (mes < 10) {
        // alert(ano+"-0"+mes+"-"+dia);
        fechaDelDia = (ano + "-0" + mes + "-" + dia);
      }
     else if(dia < 10 ){
    
        fechaDelDia = (ano + "-0" + mes + "-0" + dia);
    
      }
      else {
          // alert(ano+"-"+mes+"-"+dia);
        fechaDelDia = (ano + "-" + mes + "-" + dia);
      }*/


      console.log("prueba prueba"+fechaDelDia);

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




  var lot = document.getElementById("lote").value;
  var tal = document.getElementById("tall").value;
  var cantid = document.getElementById("canti").value;
  var resa = document.getElementById("resta").value;
//  var comentariosPuli = document.getElementById("rescomentariosPulita").value;



  if (document.getElementById("nombre").value != "" && document.getElementById("op").value != "") {

    horaInProdu = new Date();
    document.getElementById("TieIniProdu").value = horaInProdu;
    document.getElementById("TieIniProdu").style.background = "rgb(32, 226, 32)";
    var tInicial = document.getElementById("TieIniProdu").value;



    db.collection("controladministradores").add({


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
  //    Anotaciones:comentariosPuli,
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
    detener2();
    carga();
    



    then(function () {
      // alert("Ha iniciado el proceso correctamente");
      Swal.fire(
        'Inicio exitoso!!!',
        'Ha iniciado el proceso correctamente...',
        'success'
      )
      document.getElementById("canti2").value = "";
      document.getElementById("rescomentariosPulita").value="";

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










