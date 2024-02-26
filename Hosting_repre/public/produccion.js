
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
   

//------------------------------------------tabla--------------------------------------------
   window.onload = function(){
    var tabl=document.getElementById("tabla");

    db.collection("OrdenProduccion").orderBy("OrdenP","desc").onSnapshot((querySnapshot) =>{
        tabl.innerHTML="";
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
 
            tabl.innerHTML +=`
                     <tr>
                 <th scope="row">${doc.data().OrdenP}</th>
                 <td>${doc.data().Referenc}</td>
                
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

   //----------------------------------------tabla produccion---------------------------------------
   TablaPro=function() {

    
    Operacion=document.getElementById("operaci").value;
    Maqui=document.getElementById("mq").value;

    Operario=document.getElementById("nombre").value;
    cantidadElabo=document.getElementById("canti").value;
    tiemTrabajado=document.getElementById("resta").value;

   // var tabl=document.getElementById("tabla");
      var consultaOP=document.getElementById("op").value;
      RendimientoOp=0;
      unidadesSeg=0;
      relaTiemp=0;
      tiempEstan=0;


      db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              canti=`${doc.data().Cantidad}`;
               consultaref=`${doc.data().Referenc}`;

               //document.getElementById("cantiOp").value=canti;
              // document.getElementById("RefOp").value=consultaref;




      //---------------------------------------------------------------------------

    /*  db.collection("FichaTecni").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic1=`${doc.data().Codigo}`;
               UniFich1=`${doc.data().Unidad}`;
               estan1=`${doc.data().Estandar}`;

            //   UniFich1=`${doc.data().Unidad}`;


                   // RendimientoOp=(cantidadElabo*100)/(UniFich1/3600);
                

              
               db.collection("FichaTecni2").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
               .get()
               .then(function(querySnapshot) {
                   querySnapshot.forEach(function(doc) {
                       // doc.data() is never undefined for query doc snapshots
                       console.log(doc.id, " => ", doc.data());
                        OpFic2=`${doc.data().Codigo}`;
                        UniFich2=`${doc.data().Unidad}`;
                        estan2=`${doc.data().Estandar}`;


                       // console.log("la OPERACION de la ficha uno sooooooooooooooon:" +Operacion);
                        //console.log("la unidades de la ficha uno sooooooooooooooon:" +OpFic2);



                       // console.log("la unidades de la ficha uno sooooooooooooooon:" +UniFich2);

 

                           // RendimientoOp=(cantidadElabo*100)/(UniFich2/3600);
 
                   
                         db.collection("FichaTecni3").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic3=`${doc.data().Codigo}`;
               UniFich3=`${doc.data().Unidad}`;
               estan3=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich3/3600);

                db.collection("FichaTecni4").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              OpFic4=`${doc.data().Codigo}`;
               UniFich4=`${doc.data().Unidad}`;
               estan4=`${doc.data().Estandar}`;



                   //RendimientoOp=(cantidadElabo*100)/(UniFich4/3600);

                db.collection("FichaTecni5").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic5=`${doc.data().Codigo}`;
               UniFich5=`${doc.data().Unidad}`;
               estan5=`${doc.data().Estandar}`;



                   //RendimientoOp=(cantidadElabo*100)/(UniFich5/3600);

                db.collection("FichaTecni6").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic6=`${doc.data().Codigo}`;
               UniFich6=`${doc.data().Unidad}`;
               estan6=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich6/3600);

                db.collection("FichaTecni7").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic7=`${doc.data().Codigo}`;
               UniFich7=`${doc.data().Unidad}`;
               estan7=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich7/3600);

                db.collection("FichaTecni8").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic8=`${doc.data().Codigo}`;
               UniFich8=`${doc.data().Unidad}`;
               estan8=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich8/3600);

                db.collection("FichaTecni9").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              OpFic9=`${doc.data().Codigo}`;
               UniFich9=`${doc.data().Unidad}`;
               estan9=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich9/3600);

                db.collection("FichaTecni10").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic10=`${doc.data().Codigo}`;
               UniFich10=`${doc.data().Unidad}`;
               estan10=`${doc.data().Estandar}`;



                 // RendimientoOp=(cantidadElabo*100)/(UniFich10/3600);

                db.collection("FichaTecni11").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic11=`${doc.data().Codigo}`;
               UniFich11=`${doc.data().Unidad}`;
               estan11=`${doc.data().Estandar}`;



                   //RendimientoOp=(cantidadElabo*100)/(UniFich11/3600);

                db.collection("FichaTecni12").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              OpFic12=`${doc.data().Codigo}`;
               UniFich12=`${doc.data().Unidad}`;
               estan12=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich12/3600);

                db.collection("FichaTecni13").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              OpFic13=`${doc.data().Codigo}`;
               UniFich13=`${doc.data().Unidad}`;
               estan13=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich13/3600);

                db.collection("FichaTecni14").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic14=`${doc.data().Codigo}`;
               UniFich14=`${doc.data().Unidad}`;
               estan14=`${doc.data().Estandar}`;



                   //RendimientoOp=(cantidadElabo*100)/(UniFich14/3600);

                db.collection("FichaTecni15").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic15=`${doc.data().Codigo}`;
               UniFich15=`${doc.data().Unidad}`;
               estan15=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich15/3600);

                db.collection("FichaTecni16").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic16=`${doc.data().Codigo}`;
               UniFich16=`${doc.data().Unidad}`;
               estan16=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich16/3600);

                db.collection("FichaTecni17").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic17=`${doc.data().Codigo}`;
               UniFich17=`${doc.data().Unidad}`;
               estan17=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich17/3600);

                db.collection("FichaTecni18").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic18=`${doc.data().Codigo}`;
               UniFich18=`${doc.data().Unidad}`;
               estan18=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich18/3600);

                db.collection("FichaTecni19").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic19=`${doc.data().Codigo}`;
               UniFich19=`${doc.data().Unidad}`;
               estan19=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich19/3600);

                db.collection("FichaTecni20").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic20=`${doc.data().Codigo}`;
               UniFich20=`${doc.data().Unidad}`;
               estan20=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich20/3600);

                db.collection("FichaTecni21").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic21=`${doc.data().Codigo}`;
               UniFich21=`${doc.data().Unidad}`;
               estan21=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich21/3600);

                db.collection("FichaTecni22").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic22=`${doc.data().Codigo}`;
               UniFich22=`${doc.data().Unidad}`;
               estan22=`${doc.data().Estandar}`;



                   //RendimientoOp=(cantidadElabo*100)/(UniFich22/3600);

                db.collection("FichaTecni23").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              OpFic23=`${doc.data().Codigo}`;
               UniFich23=`${doc.data().Unidad}`;
               estan23=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich23/3600);

                db.collection("FichaTecni24").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic24=`${doc.data().Codigo}`;
               UniFich24=`${doc.data().Unidad}`;
               estan24=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich24/3600);

                db.collection("FichaTecni25").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic25=`${doc.data().Codigo}`;
               UniFich25=`${doc.data().Unidad}`;
               estan25=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich25/3600);

                db.collection("FichaTecni26").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic26=`${doc.data().Codigo}`;
               UniFich26=`${doc.data().Unidad}`;
               estan26=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich26/3600);

                db.collection("FichaTecni27").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic27=`${doc.data().Codigo}`;
               UniFich27=`${doc.data().Unidad}`;
               estan27=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich27/3600);

                db.collection("FichaTecni28").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              OpFic28=`${doc.data().Codigo}`;
               UniFich28=`${doc.data().Unidad}`;
               estan28=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich28/3600);

                db.collection("FichaTecni29").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              OpFic29=`${doc.data().Codigo}`;
               UniFich29=`${doc.data().Unidad}`;
               estan29=`${doc.data().Estandar}`;



                  // RendimientoOp=(cantidadElabo*100)/(UniFich29/3600);
                   //console.log("rendimiento .................................#29"+RendimientoOp);


                db.collection("FichaTecni30").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
      //  tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic30=`${doc.data().Codigo}`;
               UniFich30=`${doc.data().Unidad}`;
               estan30=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                   db.collection("FichaTecni31").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic31=`${doc.data().Codigo}`;
               UniFich31=`${doc.data().Unidad}`;
               estan31=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                   db.collection("FichaTecni32").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic32=`${doc.data().Codigo}`;
               UniFich32=`${doc.data().Unidad}`;
               estan32=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                   db.collection("FichaTecni33").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic33=`${doc.data().Codigo}`;
               UniFich33=`${doc.data().Unidad}`;
               estan33=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                   db.collection("FichaTecni34").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic34=`${doc.data().Codigo}`;
               UniFich34=`${doc.data().Unidad}`;
               estan34=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                   db.collection("FichaTecni35").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic35=`${doc.data().Codigo}`;
               UniFich35=`${doc.data().Unidad}`;
               estan35=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                   db.collection("FichaTecni36").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic36=`${doc.data().Codigo}`;
               UniFich36=`${doc.data().Unidad}`;
               estan36=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                   db.collection("FichaTecni37").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
        //tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic37=`${doc.data().Codigo}`;
               UniFich37=`${doc.data().Unidad}`;
               estan37=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                   db.collection("FichaTecni38").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic38=`${doc.data().Codigo}`;
               UniFich38=`${doc.data().Unidad}`;
               estan38=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                 
                   db.collection("FichaTecni39").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic39=`${doc.data().Codigo}`;
               UniFich39=`${doc.data().Unidad}`;
               estan39=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                 
                   db.collection("FichaTecni40").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
        //tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic40=`${doc.data().Codigo}`;
               UniFich40=`${doc.data().Unidad}`;
               estan40=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni41").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
      //  tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic41=`${doc.data().Codigo}`;
               UniFich41=`${doc.data().Unidad}`;
               estan41=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni42").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
      //  tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic42=`${doc.data().Codigo}`;
               UniFich42=`${doc.data().Unidad}`;
               estan42=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni43").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
        //tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic43=`${doc.data().Codigo}`;
               UniFich43=`${doc.data().Unidad}`;
               estan43=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni44").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic44=`${doc.data().Codigo}`;
               UniFich44=`${doc.data().Unidad}`;
               estan44=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni45").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
      //  tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic45=`${doc.data().Codigo}`;
               UniFich45=`${doc.data().Unidad}`;
               estan45=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni46").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
       // tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic46=`${doc.data().Codigo}`;
               UniFich46=`${doc.data().Unidad}`;
               estan46=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni47").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
      //  tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic47=`${doc.data().Codigo}`;
               UniFich47=`${doc.data().Unidad}`;
               estan47=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni48").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
        //tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic48=`${doc.data().Codigo}`;
               UniFich48=`${doc.data().Unidad}`;
               estan48=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                  db.collection("FichaTecni49").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
        //tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               OpFic49=`${doc.data().Codigo}`;
               UniFich49=`${doc.data().Unidad}`;
               estan49=`${doc.data().Estandar}`;



                 //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);

                 db.collection("FichaTecni50").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
                 .get()
                 .then(function(querySnapshot) {
                 //  tabl.innerHTML ="";
                     querySnapshot.forEach(function(doc) {
                         // doc.data() is never undefined for query doc snapshots
                         console.log(doc.id, " => ", doc.data());
                          OpFic50=`${doc.data().Codigo}`;
                          UniFich50=`${doc.data().Unidad}`;
                          estan50=`${doc.data().Estandar}`;*/

           
           
                            //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);
           

      //--------------------------------------consulta global-------------------------------------
      db.collection("FichaTecniGlobal").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
      .get()
      .then(function(querySnapshot) {
      //  tabl.innerHTML ="";
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
               

               OpFic1=`${doc.data().Codigo}`;
               UniFich1=`${doc.data().Unidad}`;
               estan1=`${doc.data().Estandar}`;

               OpFic2=`${doc.data().Codigo2}`;
               UniFich2=`${doc.data().Unidad2}`;
               estan2=`${doc.data().Estandar2}`;

               OpFic3=`${doc.data().Codigo3}`;
               UniFich3=`${doc.data().Unidad3}`;
               estan3=`${doc.data().Estandar3}`;

               OpFic4=`${doc.data().Codigo4}`;
               UniFich4=`${doc.data().Unidad4}`;
               console.log(UniFich4);
               estan4=`${doc.data().Estandar4}`;

               OpFic5=`${doc.data().Codigo5}`;
               UniFich5=`${doc.data().Unidad5}`;
               estan5=`${doc.data().Estandar5}`;

               OpFic6=`${doc.data().Codigo6}`;
               UniFich6=`${doc.data().Unidad6}`;
               estan6=`${doc.data().Estandar6}`;

               OpFic7=`${doc.data().Codigo7}`;
               UniFich7=`${doc.data().Unidad7}`;
               estan7=`${doc.data().Estandar7}`;

               OpFic8=`${doc.data().Codigo8}`;
               UniFich8=`${doc.data().Unidad8}`;
               estan8=`${doc.data().Estandar8}`;

               OpFic9=`${doc.data().Codigo9}`;
               UniFich9=`${doc.data().Unidad9}`;
               estan9=`${doc.data().Estandar9}`;

               OpFic10=`${doc.data().Codigo10}`;
               UniFich10=`${doc.data().Unidad10}`;
               estan10=`${doc.data().Estandar10}`;

               OpFic11=`${doc.data().Codigo11}`;
               UniFich11=`${doc.data().Unidad11}`;
               estan11=`${doc.data().Estandar11}`;

               OpFic12=`${doc.data().Codigo12}`;
               UniFich12=`${doc.data().Unidad12}`;
               estan12=`${doc.data().Estandar12}`;

               OpFic13=`${doc.data().Codigo13}`;
               UniFich13=`${doc.data().Unidad13}`;
               estan13=`${doc.data().Estandar13}`;

               OpFic14=`${doc.data().Codigo14}`;
               UniFich14=`${doc.data().Unidad14}`;
               estan14=`${doc.data().Estandar14}`;

               OpFic15=`${doc.data().Codigo15}`;
               UniFich15=`${doc.data().Unidad15}`;
               estan15=`${doc.data().Estandar15}`;

               OpFic16=`${doc.data().Codigo16}`;
               UniFich16=`${doc.data().Unidad16}`;
               estan16=`${doc.data().Estandar16}`;

               OpFic17=`${doc.data().Codigo17}`;
               UniFich17=`${doc.data().Unidad17}`;
               estan17=`${doc.data().Estandar17}`;

               OpFic18=`${doc.data().Codigo18}`;
               UniFich18=`${doc.data().Unidad18}`;
               estan18=`${doc.data().Estandar18}`;

               OpFic19=`${doc.data().Codigo19}`;
               UniFich19=`${doc.data().Unidad19}`;
               estan19=`${doc.data().Estandar19}`;

               OpFic20=`${doc.data().Codigo20}`;
               UniFich20=`${doc.data().Unidad20}`;
               estan20=`${doc.data().Estandar20}`;

               OpFic21=`${doc.data().Codigo21}`;
               UniFich21=`${doc.data().Unidad21}`;
               estan21=`${doc.data().Estandar21}`;

               OpFic22=`${doc.data().Codigo22}`;
               UniFich22=`${doc.data().Unidad22}`;
               estan22=`${doc.data().Estandar22}`;

               OpFic23=`${doc.data().Codigo23}`;
               UniFich23=`${doc.data().Unidad23}`;
               estan23=`${doc.data().Estandar23}`;

               OpFic24=`${doc.data().Codigo24}`;
               UniFich24=`${doc.data().Unidad24}`;
               estan24=`${doc.data().Estandar24}`;

               OpFic25=`${doc.data().Codigo25}`;
               UniFich25=`${doc.data().Unidad25}`;
               estan25=`${doc.data().Estandar25}`;

               OpFic26=`${doc.data().Codigo26}`;
               UniFich26=`${doc.data().Unidad26}`;
               estan26=`${doc.data().Estandar26}`;

               OpFic27=`${doc.data().Codigo27}`;
               UniFich27=`${doc.data().Unidad27}`;
               estan27=`${doc.data().Estandar27}`;

               OpFic28=`${doc.data().Codigo28}`;
               UniFich28=`${doc.data().Unidad28}`;
               estan28=`${doc.data().Estandar28}`;

               OpFic29=`${doc.data().Codigo29}`;
               UniFich29=`${doc.data().Unidad29}`;
               estan29=`${doc.data().Estandar29}`;

               OpFic30=`${doc.data().Codigo30}`;
               UniFich30=`${doc.data().Unidad30}`;
               estan30=`${doc.data().Estandar30}`;

               OpFic31=`${doc.data().Codigo31}`;
               UniFich31=`${doc.data().Unidad31}`;
               estan31=`${doc.data().Estandar31}`;

               OpFic32=`${doc.data().Codigo32}`;
               UniFich32=`${doc.data().Unidad32}`;
               estan32=`${doc.data().Estandar32}`;

               OpFic33=`${doc.data().Codigo33}`;
               UniFich33=`${doc.data().Unidad33}`;
               estan33=`${doc.data().Estandar33}`;

               OpFic34=`${doc.data().Codigo34}`;
               UniFich34=`${doc.data().Unidad34}`;
               estan34=`${doc.data().Estandar34}`;

               OpFic35=`${doc.data().Codigo35}`;
               UniFich35=`${doc.data().Unidad35}`;
               estan35=`${doc.data().Estandar35}`;

               OpFic36=`${doc.data().Codigo36}`;
               UniFich36=`${doc.data().Unidad36}`;
               estan36=`${doc.data().Estandar36}`;

               OpFic37=`${doc.data().Codigo37}`;
               UniFich37=`${doc.data().Unidad37}`;
               estan37=`${doc.data().Estandar37}`;

               OpFic38=`${doc.data().Codigo38}`;
               UniFich38=`${doc.data().Unidad38}`;
               estan38=`${doc.data().Estandar38}`;

               OpFic39=`${doc.data().Codigo39}`;
               UniFich39=`${doc.data().Unidad39}`;
               estan39=`${doc.data().Estandar39}`;

               OpFic40=`${doc.data().Codigo40}`;
               UniFich40=`${doc.data().Unidad40}`;
               estan40=`${doc.data().Estandar40}`;

               OpFic41=`${doc.data().Codigo41}`;
               UniFich41=`${doc.data().Unidad41}`;
               estan41=`${doc.data().Estandar41}`;

               OpFic42=`${doc.data().Codigo42}`;
               UniFich42=`${doc.data().Unidad42}`;
               estan42=`${doc.data().Estandar42}`;

               OpFic43=`${doc.data().Codigo43}`;
               UniFich43=`${doc.data().Unidad43}`;
               estan43=`${doc.data().Estandar43}`;

               OpFic44=`${doc.data().Codigo44}`;
               UniFich44=`${doc.data().Unidad44}`;
               estan44=`${doc.data().Estandar44}`;

               OpFic45=`${doc.data().Codigo45}`;
               UniFich45=`${doc.data().Unidad45}`;
               estan45=`${doc.data().Estandar45}`;

               OpFic46=`${doc.data().Codigo46}`;
               UniFich46=`${doc.data().Unidad46}`;
               estan46=`${doc.data().Estandar46}`;

               OpFic47=`${doc.data().Codigo47}`;
               UniFich47=`${doc.data().Unidad47}`;
               estan47=`${doc.data().Estandar47}`;

               OpFic48=`${doc.data().Codigo48}`;
               UniFich48=`${doc.data().Unidad48}`;
               estan48=`${doc.data().Estandar48}`;

               OpFic49=`${doc.data().Codigo49}`;
               UniFich49=`${doc.data().Unidad49}`;
               estan49=`${doc.data().Estandar49}`;

               OpFic50=`${doc.data().Codigo50}`;
               UniFich50=`${doc.data().Unidad50}`;
               estan50=`${doc.data().Estandar50}`;





          if(Operacion==OpFic1){
            tiempEstan=estan1;
            relaTiemp=(cantidadElabo*3600)/UniFich1;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 1 es:" +RendimientoOp);
            console.log("unidades ficha 1:" +UniFich1);
            console.log("tiempo trabajado 1: "+tiemTrabajado);

          }
          if(Operacion==OpFic2){
            tiempEstan=estan2;

            relaTiemp=(cantidadElabo*3600)/UniFich2;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 2 es:" +RendimientoOp);
            console.log("unidades ficha 2:" +UniFich2);
            console.log("tiempo trabajado 2: "+tiemTrabajado);

          }
          if(Operacion==OpFic3){
            tiempEstan=estan3;

            relaTiemp=(cantidadElabo*3600)/UniFich3;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 3 es:" +RendimientoOp);
            console.log("unidades ficha 3:" +UniFich3);
            console.log("tiempo trabajado 3: "+tiemTrabajado);
          }
          if(Operacion==OpFic4){
            tiempEstan=estan4;

            relaTiemp=(cantidadElabo*3600)/UniFich4;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 4 es:" +RendimientoOp);
            console.log("unidades ficha 4:" +UniFich4);
            console.log("tiempo trabajado 4: "+tiemTrabajado);
          }
          if(Operacion==OpFic5){
            tiempEstan=estan5;

            relaTiemp=(cantidadElabo*3600)/UniFich5;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 5 es:" +RendimientoOp);
            console.log("unidades ficha 5:" +UniFich5);
            console.log("tiempo trabajado 5: "+tiemTrabajado);
          }
          if(Operacion==OpFic6){
            tiempEstan=estan6;

            relaTiemp=(cantidadElabo*3600)/UniFich6;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 6 es:" +RendimientoOp);

          }
          if(Operacion==OpFic7){
            tiempEstan=estan7;

            relaTiemp=(cantidadElabo*3600)/UniFich7;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 7 es:" +RendimientoOp);

          }
          if(Operacion==OpFic8){
            tiempEstan=estan8;

            relaTiemp=(cantidadElabo*3600)/UniFich8;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 8 es:" +RendimientoOp);

          }
          if(Operacion==OpFic9){
            tiempEstan=estan9;

            relaTiemp=(cantidadElabo*3600)/UniFich9;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 9 es:" +RendimientoOp);

          }
          if(Operacion==OpFic10){
            tiempEstan=estan10;

            relaTiemp=(cantidadElabo*3600)/UniFich10;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 10 es:" +RendimientoOp);

          }
          if(Operacion==OpFic11){
            tiempEstan=estan11;

            relaTiemp=(cantidadElabo*3600)/UniFich11;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 11 es:" +RendimientoOp);

          }
          if(Operacion==OpFic12){
            tiempEstan=estan12;

            relaTiemp=(cantidadElabo*3600)/UniFich12;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 12 es:" +RendimientoOp);

          }
          if(Operacion==OpFic13){
            tiempEstan=estan13;

            relaTiemp=(cantidadElabo*3600)/UniFich13;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 13 es:" +RendimientoOp);

          }
          if(Operacion==OpFic14){
            tiempEstan=estan14;

            relaTiemp=(cantidadElabo*3600)/UniFich14;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 14 es:" +RendimientoOp);

          }
          if(Operacion==OpFic15){
            tiempEstan=estan15;

            relaTiemp=(cantidadElabo*3600)/UniFich15;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 15 es:" +RendimientoOp);

          }
          if(Operacion==OpFic16){
            tiempEstan=estan16;

            relaTiemp=(cantidadElabo*3600)/UniFich16;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 16 es:" +RendimientoOp);

          }
          if(Operacion==OpFic17){
            tiempEstan=estan17;

            relaTiemp=(cantidadElabo*3600)/UniFich17;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 17 es:" +RendimientoOp);

          }
          if(Operacion==OpFic18){
            tiempEstan=estan18;

            relaTiemp=(cantidadElabo*3600)/UniFich18;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 18 es:" +RendimientoOp);

          }
          if(Operacion==OpFic19){
            tiempEstan=estan19;

            relaTiemp=(cantidadElabo*3600)/UniFich19;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 19 es:" +RendimientoOp);

          }
          if(Operacion==OpFic20){
            tiempEstan=estan20;

            relaTiemp=(cantidadElabo*3600)/UniFich20;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 20 es:" +RendimientoOp);

          }
          if(Operacion==OpFic21){
            tiempEstan=estan21;

            relaTiemp=(cantidadElabo*3600)/UniFich21;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 21 es:" +RendimientoOp);

          }
          if(Operacion==OpFic22){
            tiempEstan=estan22;

            relaTiemp=(cantidadElabo*3600)/UniFich22;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 22 es:" +RendimientoOp);

          }
          if(Operacion==OpFic23){
            tiempEstan=estan23;

            relaTiemp=(cantidadElabo*3600)/UniFich23;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 23 es:" +RendimientoOp);

          }
          if(Operacion==OpFic24){
            tiempEstan=estan24;

            relaTiemp=(cantidadElabo*3600)/UniFich24;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 24 es:" +RendimientoOp);

          }
          if(Operacion==OpFic25){
            tiempEstan=estan25;

            relaTiemp=(cantidadElabo*3600)/UniFich25;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 25 es:" +RendimientoOp);

          }
          if(Operacion==OpFic26){
            tiempEstan=estan26;

            relaTiemp=(cantidadElabo*3600)/UniFich26;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 26 es:" +RendimientoOp);

          }
          if(Operacion==OpFic27){
            tiempEstan=estan27;

            relaTiemp=(cantidadElabo*3600)/UniFich27;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 27 es:" +RendimientoOp);

          }
          if(Operacion==OpFic28){
            tiempEstan=estan28;

            relaTiemp=(cantidadElabo*3600)/UniFich28;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 28 es:" +RendimientoOp);

          }
          if(Operacion==OpFic29){
            tiempEstan=estan29;

            relaTiemp=(cantidadElabo*3600)/UniFich29;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
            console.log("el rendi 29 es:" +RendimientoOp);

          }
          if(Operacion==OpFic30){
            tiempEstan=estan30;

            relaTiemp=(cantidadElabo*3600)/UniFich30;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 30 es:" +RendimientoOp);

          }

          if(Operacion==OpFic31){
            tiempEstan=estan31;

            relaTiemp=(cantidadElabo*3600)/UniFich31;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 31 es:" +RendimientoOp);

          }
          if(Operacion==OpFic32){
            tiempEstan=estan32;

            relaTiemp=(cantidadElabo*3600)/UniFich32;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 32 es:" +RendimientoOp);

          }
          if(Operacion==OpFic33){
            tiempEstan=estan33;

            relaTiemp=(cantidadElabo*3600)/UniFich33;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 33 es:" +RendimientoOp);

          }
          if(Operacion==OpFic34){
            tiempEstan=estan34;

            relaTiemp=(cantidadElabo*3600)/UniFich34;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 34 es:" +RendimientoOp);

          }
          if(Operacion==OpFic35){
            tiempEstan=estan35;

            relaTiemp=(cantidadElabo*3600)/UniFich35;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 35 es:" +RendimientoOp);

          }
          if(Operacion==OpFic36){
            tiempEstan=estan36;

            relaTiemp=(cantidadElabo*3600)/UniFich36;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 36 es:" +RendimientoOp);

          }
          if(Operacion==OpFic37){
            tiempEstan=estan37;

            relaTiemp=(cantidadElabo*3600)/UniFich37;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 37 es:" +RendimientoOp);

          }
          if(Operacion==OpFic38){
            tiempEstan=estan38;

            relaTiemp=(cantidadElabo*3600)/UniFich38;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 38 es:" +RendimientoOp);

          }
          if(Operacion==OpFic39){
            tiempEstan=estan39;

            relaTiemp=(cantidadElabo*3600)/UniFich39;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 39 es:" +RendimientoOp);

          }
          if(Operacion==OpFic40){
            tiempEstan=estan40;

            relaTiemp=(cantidadElabo*3600)/UniFich40;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 40 es:" +RendimientoOp);

          }
          if(Operacion==OpFic41){
            tiempEstan=estan41;

            relaTiemp=(cantidadElabo*3600)/UniFich41;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 41 es:" +RendimientoOp);

          }
          if(Operacion==OpFic42){
            tiempEstan=estan42;

            relaTiemp=(cantidadElabo*3600)/UniFich42;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 42 es:" +RendimientoOp);

          }
          if(Operacion==OpFic43){
            tiempEstan=estan43;

            relaTiemp=(cantidadElabo*3600)/UniFich43;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 43 es:" +RendimientoOp);

          }
          if(Operacion==OpFic44){
            tiempEstan=estan44;

            relaTiemp=(cantidadElabo*3600)/UniFich44;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 44 es:" +RendimientoOp);

          }
          if(Operacion==OpFic45){
            tiempEstan=estan45;

            relaTiemp=(cantidadElabo*3600)/UniFich45;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 45 es:" +RendimientoOp);

          }
          if(Operacion==OpFic46){
            tiempEstan=estan46;

            relaTiemp=(cantidadElabo*3600)/UniFich46;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 46 es:" +RendimientoOp);

          }
          if(Operacion==OpFic47){
            tiempEstan=estan47;

            relaTiemp=(cantidadElabo*3600)/UniFich47;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 47 es:" +RendimientoOp);

          }
          if(Operacion==OpFic48){
            tiempEstan=estan48;

            relaTiemp=(cantidadElabo*3600)/UniFich48;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 48 es:" +RendimientoOp);

          }
          if(Operacion==OpFic49){
            tiempEstan=estan49;

            relaTiemp=(cantidadElabo*3600)/UniFich49;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 49 es:" +RendimientoOp);

          }
          if(Operacion==OpFic50){
            tiempEstan=estan50;

            relaTiemp=(cantidadElabo*3600)/UniFich50;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
            console.log("el rendi 50 es:" +RendimientoOp);

          }


          alert("Tu tiempo fue de:"+(tiemTrabajado/60).toFixed(2)+" minutos"+"  "+  
          "EL Rendimiento obtenido fue del: " +Math.round(RendimientoOp)+"%");

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
   redi=function redireccionar() {
    setTimeout("location.href='https://pruebarepresentaciones.web.app'", 5000);
  }

  //---------------------------------------iniciar solo------------------------------------------------
function Acceder(){
    if(confirm("Seguro que desea Iniciar el Tiempo?")){
        var consulHora=document.getElementById("TieIniProdu").value;
        if(consulHora!=""){
            alert("Ya ha iniciado el Cronometro...");
        }else{

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
       

      }else{

       }
    }

    //---------------------------------------------------finalizar solo--------------------------------------------
    function Final(){
        if(confirm("Seguro que desea Finalizar el Tiempo?")){
            consulHora=document.getElementById("TieIniProdu").value;
            if(consulHora!=""){
             var horaFinProd=new Date();
             document.getElementById("TieFinProdu").value=horaFinProd;
             document.getElementById("TieFinProdu").style.background="rgb(32, 226, 32)";
             resulTiemPro=(horaFinProd-consulHora)/1000;

             Actu();

             TablaPro();

             //progres();

             
     
            }else{
                alert("Debe Inicar el cronometro antes de finalizarlo...");
            }

        }    
        

       

    

    }

    //---------------------------------------------------------Registrar solo------------------------------------
    regis=function Registar(){

              var tFinal=document.getElementById("TieFinProdu").value;
        var nom=document.getElementById("nombre").value;
        var orden=document.getElementById("op").value;
        var maqui=document.getElementById("mq").value;
        var opera=document.getElementById("operaci").value;
        var lot=document.getElementById("lote").value;
        var tal=document.getElementById("tall").value;
        var cantid=document.getElementById("canti").value;
        var resa=document.getElementById("resta").value;

        if( document.getElementById("nombre").value!="" && document.getElementById("op").value!=""){
           
            horaInProdu=  new Date();
            document.getElementById("TieIniProdu").value=horaInProdu;
            document.getElementById("TieIniProdu").style.background="rgb(32, 226, 32)";
            var tInicial=document.getElementById("TieIniProdu").value;



            db.collection("controladministradores").add({
    
    
                cantidadElaborada:cantid,
                color:maqui,
                //OrdenOperacion:OPE,
                lote:lot,
                operacionElaborada:opera,
                referencia:orden,
                talla:tal,
                tiempo:resa,
                TiempoIni:tInicial,
                
                usuariooperario:nom
               
                
                })
                alert("Ha iniciado el proceso correctamente");

                document.getElementById("TieFinProdu").value="";
                document.getElementById("nombre").value="";
                document.getElementById("op").value="";
                document.getElementById("mq").value="";
                document.getElementById("operaci").value="";
                document.getElementById("lote").value="";
                document.getElementById("tall").value="";
                document.getElementById("canti").value="";
                document.getElementById("resta").value="";
                document.getElementById("TieIniProdu").value="";

            
                then(function() {
                    alert("Ha iniciado el proceso correctamente");
                    document.getElementById("canti2").value="";
                   // location.reload(true);
                     // document.getElementById("campo2").style.display="none";
                   

        
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
    

        }  else{
            alert("ERROR: inicie el tiempo, ingrese su nombre y #OP....");
        }                 

    }

    //--------------------------------------------consultar produ------------------------------------------
    function ConsulProd(){
        var consulOp=document.getElementById("op").value;
        var consulUsu=document.getElementById("nombre").value;


        db.collection("controladministradores").where("usuariooperario", "==", consulUsu)/*.where("referencia", "==", consulOp)*/
        .where("tiempo", "==", "")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                 var tIni=Date.parse(`${doc.data().TiempoIni}`);
                var maq=`${doc.data().color}`;
                var opera=`${doc.data().operacionElaborada}`;
                var lo=`${doc.data().lote}`;
                var tall=`${doc.data().talla}`;
                var ca=`${doc.data().cantidadElaborada}`;
                var REF=`${doc.data().referencia}`;



                document.getElementById("op").value=REF;
                document.getElementById("TieIniProdu").value=tIni;
                document.getElementById("mq").value=maq;
                document.getElementById("operaci").value=opera;
                document.getElementById("lote").value=lo;
                document.getElementById("tall").value=tall;
                document.getElementById("canti").value=ca;
               // var resa=document.getElementById("resta").value;
                alert("Consulta exitosa!!!");
               //--------------------------------actualiza solo-------------------------------------------
              Actu=function(){
                //   var tInicial=document.getElementById("TieIniProdu").value;
               // var tFinal=document.getElementById("TieFinProdu").value;
                var nom=document.getElementById("nombre").value;
                var orden=document.getElementById("op").value;
                var maqui=document.getElementById("mq").value;
                var opera=document.getElementById("operaci").value;
                var lot=document.getElementById("lote").value;
                var tal=document.getElementById("tall").value;
                var cantid=document.getElementById("canti").value;
                var horaFin=document.getElementById("TieFinProdu").value;

                if(document.getElementById("mq").value!="" && document.getElementById("op").value && document.getElementById("operaci").value!="" 
                && document.getElementById("lote").value!="" && document.getElementById("tall").value!="" && 
                document.getElementById("canti").value!=""){

                    document.getElementById("resta").value=Math.round(resulTiemPro);
                     resa=document.getElementById("resta").value;


                var washingtonRef = db.collection("controladministradores").doc(doc.id);
                           
                // Set the "capital" field of the city 'DC'
                return washingtonRef.update({
                 cantidadElaborada:cantid,
                 color:maqui,
                 //culminacion:horaFin,
                 //OrdenOperacion:OPE,
                 lote:lot,
                 operacionElaborada:opera,
                 referencia:orden,
                 talla:tal,
                 tiempo:resa,
                // TiempoIni:tInicial,
                 
                 usuariooperario:nom
                
                          })
                          
                          
                         

                          .then(function() {
                           // alert("Registro Completo!!!"+"Tiempo: "+resa+"Rendimiento: "+RendimientoOp+"%");

                            document.getElementById("TieFinProdu").value="";
               document.getElementById("nombre").value="";
               document.getElementById("op").value="";
               document.getElementById("mq").value="";
               document.getElementById("operaci").value="";
               document.getElementById("lote").value="";
               document.getElementById("tall").value="";
               document.getElementById("canti").value="";
               document.getElementById("resta").value="";
               document.getElementById("TieIniProdu").value="";
                            // document.getElementById("TieIniProdu").value=""; // LIMPIAR EL CAMPO DE HORA INICIAL PARA EVITAR DOBLE FINALIZACION DEL PROCESO 

                             console.log("Document successfully updated!");
                         })
                         .catch(function(error) {
                             // The document probably doesn't exist.
                             alert("Llene todos los campos para finalizar...");
                             console.error("Error updating document: ", error);
                         });

                }else{
                    alert("Complete Todos los campos antes de Finalizar...");
                }
        
                                    
                                   
                                }

               //-------------------------------------------------------------------------------------------------------




              //  mensaje.innerHTML ="";

            });
        })
    }


   //------------------------------Mecanico-------------------------------------------------------------------------
   function enviarIniciMeca(){

     tip= document.getElementById("tipo").value;

 //   var res=document.getElementById("restaMeca").value;

     OpMa=document.getElementById("opMq").value;
    nomMa= document.getElementById("nombreMeca").value;

    mqMa= document.getElementById("mqMeca").value;
    tiempp= document.getElementById("restaMeca").value;

   //var tiIniMa= document.getElementById("TieIniMeca").value;


    if(document.getElementById("contraMeca").value!="" && document.getElementById("opMq").value!="" 
    && document.getElementById("nombreMeca").value!="" ){
        if(confirm("Desea Iniciar el tiempo de mantenimiento de maquina?"))
{
   

    contra=document.getElementById("contraMeca").value;

    db.collection("Mantenimientos").where("contrasena", "==", contra)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
             verifiContra=`${doc.data().contrasena}`;
 
            if(verifiContra==contra)
            {
                horaInMe=  new Date();
 
                document.getElementById("TieIniMeca").value=horaInMe;
                document.getElementById("TieIniMeca").style.background="rgb(32, 226, 32)";

                //-------------------------registro mecani--------------------------------------

                db.collection("MaquinasManteni").add({
    
                    Maquina: mqMa,
                    //OrdenOperacion:OPE,
                    OrdenOperacion: OpMa,
                    TiempoMan: tiempp,
                    TiempoInicio: horaInMe,
                    NombreUsu: nomMa,
                    Tipo:tip

                   
                    
                    })
                //----------------------------------------------------------------------
 
                alert("Se ha iniciado el tiempo correctamente...");

                document.getElementById("tipo").value="";

                document.getElementById("restaMeca").value="";

                document.getElementById("opMq").value="";
                document.getElementById("nombreMeca").value="";

                document.getElementById("mqMeca").value="";
                document.getElementById("TieIniMeca").value="";
                document.getElementById("contraMeca").value="";

               // alert("Si se pudo...");
            }else{
                alert("Contraseña Incorrecta...");

            }
 
    // var hoy = new Date();
 
     
 
 
 
 });

 
 })

 .catch(function(error) {
     alert("Contraseña Incorrecta...");
     console.log("Error getting documents: ", error);
 });
}
    }
else{
    alert("Ingrese la contraseña, usuario y OP para iniciar el tiempo...");

}
   


}

//---------------------------------------consulta mecanico----------------------------------------
function ConsultaMeca(){

    var usuMant=document.getElementById("nombreMeca").value;
    var numOP=document.getElementById("opMq").value;



    db.collection("MaquinasManteni").where("NombreUsu", "==", usuMant).where("OrdenOperacion", "==", numOP)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
             mqMante=`${doc.data().Maquina}`;
             tIni=Date.parse(`${doc.data().TiempoInicio}`);
             tip=`${doc.data().Tipo}`;

             document.getElementById("mqMeca").value=mqMante;
             document.getElementById("TieIniMeca").value=tIni;
             document.getElementById("tipo").value=tip;

             alert("Consulta exitosa!!!");


             //-------------------------actualizar mecanico-----------------------------------
            actuMeca=function(){
                var mqAct=document.getElementById("mqMeca").value;
              var tipAct=document.getElementById("tipo").value;

              document.getElementById("restaMeca").value=Math.round(resulTiemMeca);
            //  resa=document.getElementById("resta").value;
            tiemRest=document.getElementById("restaMeca").value;



             var washingtonRef = db.collection("MaquinasManteni").doc(doc.id);
                           
             // Set the "capital" field of the city 'DC'
             return washingtonRef.update({
              Maquina:mqAct,
             // NombreUsu:maqui,
              //OrdenOperacion:OPE,
            //  OrdenOperacion:lot,
              Tipo:tipAct,
              TiempoMan:tiemRest,
              
             
                       })

            }
             

                       //----------------------------------

            });
        })



            // mqMante=`${doc.data().Maquina}`;

 

}
//------------------------------Finalizar mantenimiento---------------------------

function enviarFinaMeca() {

    if(confirm("Seguro que desea Finalizar el Tiempo?")){
        consulHoraMeca=document.getElementById("TieIniMeca").value;
        if(consulHoraMeca!=""){
         var horaFinMeca=new Date();
         document.getElementById("TieFinalMeca").value=horaFinMeca;
         document.getElementById("TieFinalMeca").style.background="rgb(32, 226, 32)";
         resulTiemMeca=(horaFinMeca-consulHoraMeca)/1000;

         actuMeca();

        // TablaPro();

         //progres();
      alert("Registro exitoso...!!!");

      document.getElementById("tipo").value="";

      document.getElementById("restaMeca").value="";

      document.getElementById("opMq").value="";
      document.getElementById("nombreMeca").value="";

      document.getElementById("mqMeca").value="";
      document.getElementById("TieIniMeca").value="";
      document.getElementById("contraMeca").value=""; 


         
 
        }else{
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










