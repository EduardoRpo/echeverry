
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

  function consul(){

    var tiemIni=document.getElementById("horaIni").value;

    db.collection("controladministradores").where("TiempoIni", "==", tiemIni).get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var integrantes = `${doc.data().Comen}`;
        var comi = `${doc.data().Comida}`;
        var numero = `${doc.data().NumeroOpera}`;
        var pausa11 = `${doc.data().Tinto}`;
        var pausa2 = `${doc.data().Tinto2}`;
        var cantiTotal = `${doc.data().cantidadElaborada}`;
        var culmi = `${doc.data().culminacion}`;
        var fech = `${doc.data().fecha}`;
        var lot = `${doc.data().lote}`;
        var nomREF = `${doc.data().nombreRef}`;
        var op1 = `${doc.data().operacionElaborada}`;
        var op2 = `${doc.data().operacionElaborada2}`;
        var op3 = `${doc.data().operacionElaborada3}`;
        var op4 = `${doc.data().operacionElaborada4}`;
        var op5 = `${doc.data().operacionElaborada5}`;
        var op6 = `${doc.data().operacionElaborada6}`;
        var op7 = `${doc.data().operacionElaborada7}`;
        var op8 = `${doc.data().operacionElaborada8}`;
        var op9 = `${doc.data().operacionElaborada9}`;

        var op = `${doc.data().referencia}`;
        var tall = `${doc.data().talla}`;

        var tiem = `${doc.data().tiempo}`;
        var modu = `${doc.data().usuariooperario}`;

        var anota = `${doc.data().Anotaciones}`;
        var rFile = `${doc.data().ReproFile}`;
        var rMt = `${doc.data().ReproMT}`;
        var rob = `${doc.data().ReproOB}`;

        var rPla = `${doc.data().ReproPlana}`;
        var rRec = `${doc.data().ReproRecub}`;

        var color = `${doc.data().Color}`;

        var primer = `${doc.data().Primer}`;
        var ultimo = `${doc.data().Ultimo}`;



        if (isNaN(anota)) {
          anota = "";
        }
        if (isNaN(rFile)) {
          rFile = 0;
        }
        
        if (isNaN(rMt)) {
          rMt = 0;
        }
        if (isNaN(rob)) {
          rob = 0;
        }
        if (isNaN(rPla)) {
          rPla = 0;
        }
        
        if (isNaN(rRec)) {
          rRec = 0;
        }

        if (isNaN(tiem)) {
          tiem = "";
        }
       



       // document.getElementById("horaIni").value=;
        document.getElementById("Comida").value=comi;
        document.getElementById("Tinto").value=pausa11;
        document.getElementById("Tinto2").value=pausa2;
        document.getElementById("tiemTraba").value=tiem;
        document.getElementById("horaCulmi").value=culmi;
        document.getElementById("modulo").value=modu;
        document.getElementById("integrante").value=integrantes;
        document.getElementById("nOperarios").value=numero;
        document.getElementById("op").value=op;
        document.getElementById("ref").value=nomREF;
        document.getElementById("fech").value=fech;
        document.getElementById("operaci").value=op1;
        document.getElementById("operaci2").value=op2;
        document.getElementById("operaci3").value=op3;
        document.getElementById("operaci4").value=op4;
        document.getElementById("operaci5").value=op5;
        document.getElementById("operaci6").value=op6;
        document.getElementById("operaci7").value=op7;
        document.getElementById("operaci8").value=op8;
        document.getElementById("operaci9").value=op9;
        document.getElementById("lote").value=lot;
        document.getElementById("tall").value=tall;
        document.getElementById("canti").value=cantiTotal;

        document.getElementById("anota").value=anota;
        document.getElementById("file").value=rFile;
        document.getElementById("mt").value=rMt;
        document.getElementById("ob").value=rob;
        document.getElementById("plana").value=rPla;
        document.getElementById("recubri").value=rRec;

        document.getElementById("color").value=color;
        document.getElementById("primer").value=primer;
        document.getElementById("ultimo").value=ultimo;

       




        Swal.fire(
            'Consulta Exitosa!!!',
            'Ha Consultado exitosamente el registro...',
            'success'
          )

          elimi=function(){
            db.collection("controladministradores").doc(doc.id).delete().then(function() {
             //   alert("Ha eliminado el registro...");
                console.log("Document successfully deleted!");
                Swal.fire(
                  'Registro Eliminado',
                  'Ha eliminado el registro de forma correcta...',
                  'success'
                )

            }).catch(function(error) {
                alert("No se ha podido eliminar el documento");
                console.error("Error removing document: ", error);
            });

        }


        ActualizarComenT = function () {
          tiempoTrabajadoConsul=0;
          restica=0;


           var ini= document.getElementById("horaIni").value;
           var comi= document.getElementById("Comida").value;
           var paus11= document.getElementById("Tinto").value;
            var paus2=document.getElementById("Tinto2").value;
            var tiemTraba= document.getElementById("tiemTraba").value;
            var culmi=document.getElementById("horaCulmi").value;
            var modu=document.getElementById("modulo").value;
            var inte=document.getElementById("integrante").value;
            var nume=document.getElementById("nOperarios").value;
            var opi=document.getElementById("op").value;
            var refi=document.getElementById("ref").value;
            var fec=document.getElementById("fech").value;
            var opi1=document.getElementById("operaci").value;
            var opi2=document.getElementById("operaci2").value;
            var opi3=  document.getElementById("operaci3").value;
            var opi4= document.getElementById("operaci4").value;
            var opi5= document.getElementById("operaci5").value;
            var opi6= document.getElementById("operaci6").value;
            var opi7=document.getElementById("operaci7").value;
            var opi8= document.getElementById("operaci8").value;
            var opi9= document.getElementById("operaci9").value;
            var lo=   document.getElementById("lote").value;
            var talli=  document.getElementById("tall").value;
            var cantidad= document.getElementById("canti").value;

          var anot=  document.getElementById("anota").value;
          var fil=  document.getElementById("file").value;
          var mt=  document.getElementById("mt").value;
          var ob=  document.getElementById("ob").value;
          var pla=  document.getElementById("plana").value;
          var recu=  document.getElementById("recubri").value;

         
  

         var ActColor =document.getElementById("color").value;
          var ActPrimer =document.getElementById("primer").value;
          var ActUltimo= document.getElementById("ultimo").value;
  

          console.log("la hora de culmi"+culmi);
          console.log("la hora de ini"+ini);
          horarIni=moment(ini);
          horarFina=moment(culmi);

         if(ActPrimer < ActUltimo ){
          var difTiquetes=(ActUltimo-ActPrimer)+1;
         }
         else{
          var difTiquetes=Math.abs((ActPrimer -ActUltimo)+1);

         }
          
          console.log("LA DIFERENCIA DE TIQUETES ES"+difTiquetes);
          document.getElementById("canti").value=difTiquetes;


    tiempoTrabajadoConsul=(moment.duration( horarFina - horarIni))/1000;//-comi-paus11-paus2;

    restica=tiempoTrabajadoConsul/*-comi-paus11-paus2*/;
    
    var tiemTraba= document.getElementById("tiemTraba").value=restica;
   // console.log("xxx"+tiemTraba);
      

   if (isNaN(tiemTraba)) {
    tiemTraba = "";
  }

  var comentarios = document.getElementById("integrante").value;


          
  comentarios = comentarios.replace(/\r?\n/g, " ");
  
  comentarios = comentarios.replace(/[ ]+/g, " ");
 
  comentarios = comentarios.replace(/^ /, "");
  comentarios = comentarios.replace(/ $/, "");
  
  var textoTroceado = comentarios.split(" ");
 
  numeroPalabras = textoTroceado.length;
  document.getElementById('nOperarios').value=numeroPalabras;


   
    
  
            var washingtonRef = db.collection("controladministradores").doc(doc.id);
  
            // Set the "capital" field of the city 'DC'
            return washingtonRef.update({
                cantidadElaborada: difTiquetes,

                Anotaciones:anot,
                Color: ActColor,
                Primer: ActPrimer,
                Ultimo: ActUltimo,
                ReproFile:fil,
                ReproMT:mt,
                ReproOB:ob,
                ReproPlana:pla,
                ReproRecub:recu,
                //  color:maqui,
                //OrdenOperacion:OPE,
                TiempoIni:ini,
                lote: lo,
                culminacion: culmi,
                Comida: comi,
                Tinto: paus11,
                Tinto2: paus2,
                nombreRef: refi,
                NumeroOpera: numeroPalabras,
                operacionElaborada: opi1,
                operacionElaborada2: opi2,
                operacionElaborada3: opi3,
                operacionElaborada4: opi4,
                operacionElaborada5: opi5,
                operacionElaborada6: opi6,
                operacionElaborada7: opi7,
                operacionElaborada8: opi8,
                operacionElaborada9: opi9,
                Comen: inte,
                fecha: fec,
  
                referencia: opi,
                talla: talli,
                tiempo: tiemTraba,
                // TiempoIni:tInicial,
  
                usuariooperario: modu
  
            })
              .then(function () {
                console.log("Document successfully updated!");
                Swal.fire(
                  'Actualización Exitosa!!!',
                  'Ha actualizado el registro...',
                  'success'
                )
              })
              .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
              });
  
          }





    });
})

  }

  function Actualizar(){
    if(confirm("Seguro que desea ACTUALIZAR el registro?")){
    ActualizarComenT();
    }else{

    }


  }

  function borrarRe(){
    if(confirm("Seguro que desea ELIMINAR el registro? No podra recuperarlo")){

    elimi()
    }else{

    }
  }