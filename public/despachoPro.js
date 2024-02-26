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
   
   
   function imprimir(){
    var btnre=document.getElementById("btnConsul");
    btnre.style.display='none'; 
    var btnre2=document.getElementById("btnConsul2");
    btnre2.style.display='none';

    var btnImpr=document.getElementById("btnImpr");
    btnImpr.style.display='none';

    if(window.print) window.print()

  else alert("Puede utilizar ctrl+P")
  
   }

   function consultarOP(){
    //RegistroValidacion();
  
    var orde=document.getElementById("numeOp").value;
    var refe=document.getElementById("referencia");
    var cli=document.getElementById("cliente");
    var fIngre=document.getElementById("fechaIngr");
    var lot=document.getElementById("lote");
    var tall=document.getElementById("tallas");
    var tip=document.getElementById("tipo");
    //var tip2=document.getElementById("tipo2");
  
    var cantidad=document.getElementById("cantidad");
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
  
                var year=new Date();
                yearA=year.getFullYear();
                document.getElementById('year').value=yearA;
  
            //------------------------------------------------
          //  document.getElementById("resulEstado").value=consulEstado;
  
            document.getElementById("ref").value=re;
            document.getElementById("cliente").value=clie;
            document.getElementById("fi").value=fIngre;
            document.getElementById("lote").value=lote;
            document.getElementById("tallas").value=tall;
            document.getElementById("tipo").value=tip;
          //  document.getElementById("tipo2").value=tip2;
  
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
  
          //  document.getElementById('actualizarOP').style.display='block';
            //document.getElementById('EliminarOP').style.display='block';
            //document.getElementById('imprimirOP').style.display='block';

            db.collection("FotosCamisas").where("Referencia", "==", re).where("Cliente", "==", clie)
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
  
  
  
    }else{
        alert("Ingrese el # de OP a consultar");
    }
  
  
  
    
  
  
  }
  function consultarOP2(){
    //RegistroValidacion();
  
    var orde=document.getElementById("numeOp2").value;
    var refe=document.getElementById("referencia2");
    var cli=document.getElementById("cliente2");
    var fIngre=document.getElementById("fechaIngr2");
    var lot=document.getElementById("lote2");
    var tall=document.getElementById("tallas2");
    var tip=document.getElementById("tipo2");
    //var tip2=document.getElementById("tipo2");
  
    var cantidad=document.getElementById("cantidad2");
    var sal=document.getElementById("salida2");
    var tal1=document.getElementById("talla12");
    var can1=document.getElementById("cantiTa12");
    var tal2=document.getElementById("talla22");
    var can2=document.getElementById("cantiTa22");
    var tal3=document.getElementById("talla32");
    var can3=document.getElementById("cantiTa32");
    var tal4=document.getElementById("talla42");
    var can4=document.getElementById("cantiTa42");
    var tal5=document.getElementById("talla52");
    var can5=document.getElementById("cantiTa52");
  
    var tal6=document.getElementById("talla62");
    var can6=document.getElementById("cantiTa62");
    var tal7=document.getElementById("talla72");
    var can7=document.getElementById("cantiTa72");
    var tal8=document.getElementById("talla82");
    var can8=document.getElementById("cantiTa82");
    var tal9=document.getElementById("talla92");
    var can9=document.getElementById("cantiTa92");
    var tal10=document.getElementById("talla102");
    var can10=document.getElementById("cantiTa102");
  
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
                document.getElementById("cantiTa12").value="";
  
            }if(can1!=0){
                document.getElementById("cantiTa12").value=can1;
  
            }
  
            if(can2==0){
                document.getElementById("cantiTa22").value="";
  
            }if(can2!=0){
                document.getElementById("cantiTa22").value=can2;
  
            }
  
            if(can3==0){
                document.getElementById("cantiTa32").value="";
  
            }  if(can3!=0){
                document.getElementById("cantiTa32").value=can3;
  
            }
  
            
            if(can4==0){
                document.getElementById("cantiTa42").value="";
  
            }
            if(can4!=0){
                document.getElementById("cantiTa42").value=can4;
  
            }
  
            if(can5==0){
                document.getElementById("cantiTa52").value="";
  
            }if(can5!=0){
                document.getElementById("cantiTa52").value=can5;
  
            }
  
            if(can6==0){
                document.getElementById("cantiTa62").value="";
  
            }if(can6!=0){
                document.getElementById("cantiTa62").value=can6;
  
            }
  
            if(can7==0){
                document.getElementById("cantiTa72").value="";
  
            }if(can7!=0){
                document.getElementById("cantiTa72").value=can7;
  
            }
  
            if(can8==0){
                document.getElementById("cantiTa82").value="";
  
            }if(can8!=0){
                document.getElementById("cantiTa82").value=can8;
  
            }
  
            if(can9==0){
                document.getElementById("cantiTa92").value="";
  
            }if(can9!=0){
                document.getElementById("cantiTa92").value=can9;
  
            }
  
            if(can10==0){
                document.getElementById("cantiTa102").value="";
  
  
            }if(can10!=0){
                document.getElementById("cantiTa102").value=can10;
  
            }
  
                var year=new Date();
                yearA=year.getFullYear();
                document.getElementById('year2').value=yearA;
  
            //------------------------------------------------
          //  document.getElementById("resulEstado").value=consulEstado;
  
            document.getElementById("ref2").value=re;
            document.getElementById("cliente2").value=clie;
            document.getElementById("fi2").value=fIngre;
            document.getElementById("lote2").value=lote;
            document.getElementById("tallas2").value=tall;
            document.getElementById("tipo2").value=tip;
          //  document.getElementById("tipo2").value=tip2;
  
            document.getElementById("canti2").value=cantidad;
            document.getElementById("salida2").value=sal;
            document.getElementById("talla12").value=tal1;
           // document.getElementById("cantiTa1").value=can1;
            document.getElementById("talla22").value=tal2;
           // document.getElementById("cantiTa2").value=can2;
            document.getElementById("talla32").value=tal3;
           // document.getElementById("cantiTa3").value=can3;
            document.getElementById("talla42").value=tal4;
            document.getElementById("talla52").value=tal5;
          //  document.getElementById("cantiTa5").value=can5;
        
            document.getElementById("talla62").value=tal6;
            //document.getElementById("cantiTa6").value=can6;
            document.getElementById("talla72").value=tal7;
            //document.getElementById("cantiTa7").value=can7;
            document.getElementById("talla82").value=tal8;
           // document.getElementById("cantiTa8").value=can8;
            document.getElementById("talla92").value=tal9;
           // document.getElementById("cantiTa9").value=can9;
            document.getElementById("talla102").value=tal10;
           // document.getElementById("cantiTa10").value=can10;
            document.getElementById('semana2').value=semanaQuery;
            //-------------------------------activar botones---------------------------
  
          //  document.getElementById('actualizarOP').style.display='block';
            //document.getElementById('EliminarOP').style.display='block';
            //document.getElementById('imprimirOP').style.display='block';

            db.collection("FotosCamisas").where("Referencia", "==", re).where("Cliente", "==", clie)
            .onSnapshot((querySnapshot) => {
              querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                urlCamisa = `${doc.data().UrlFrente}`;
    
                grande = document.getElementById("imagenFrente2");
    
                grande.src = urlCamisa;
        
              });
            })
  
  
            
        });
    })
  
  
  
    }else{
        alert("Ingrese el # de OP a consultar");
    }
  
  
  
    
  
  
  }