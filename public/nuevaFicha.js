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

   actuFichaGlobalNueva=function(){

       //--------------------------------------------actualizar ficha global--------------------------------------------------


    var nombreRef=document.getElementById("Referencia").value;
var nombreCliente=document.getElementById("cliente").value;
var fecha=document.getElementById("fecha").value;
var descripcionPrenda=document.getElementById("txtTarea").value;
var tiempoTotal=document.getElementById("tiempoIncremento").value;
var tiempoReal=document.getElementById("totaltiempo2").value;

                      //------------------------------card 01----------------------------
                      var cod1=document.getElementById("op1").value;
                      var descri1=document.getElementById("descrip1").value;
                      var mq1=document.getElementById("mq1").value;
                      var to1=document.getElementById("to1").value;
                      var s1=document.getElementById("s1").value;
                      var std1=document.getElementById("estan1").value;
                      var uds1=document.getElementById("tiem").value;
                      var comen1=document.getElementById("comen1").value;
                      //---------------------------------------------------------------
                        //------------------------------card 2----------------------------
                      var cod2=document.getElementById("op2").value;
                      var descri2=document.getElementById("descrip2").value;
                      var mq2=document.getElementById("mq2").value;
                      var to2=document.getElementById("to2").value;
                      var s2=document.getElementById("s2").value;
                      var std2=document.getElementById("estan2").value;
                      var uds2=document.getElementById("tiem2").value;
                      var comen2=document.getElementById("comen2").value;
                      //---------------------------------------------------------------
                        //------------------------------card 3----------------------------
                      var cod3=document.getElementById("op3").value;
                      var descri3=document.getElementById("descrip3").value;
                      var mq3=document.getElementById("mq3").value;
                      var to3=document.getElementById("to3").value;
                      var s3=document.getElementById("s3").value;
                      var std3=document.getElementById("estan3").value;
                      var uds3=document.getElementById("tiem3").value;
                      var comen3=document.getElementById("comen3").value;
                      //---------------------------------------------------------------
                        //------------------------------card 4----------------------------
                      var cod4=document.getElementById("op4").value;
                      var descri4=document.getElementById("descrip4").value;
                      var mq4=document.getElementById("mq4").value;
                      var to4=document.getElementById("to4").value;
                      var s4=document.getElementById("s4").value;
                      var std4=document.getElementById("estan4").value;
                      var uds4=document.getElementById("tiem4").value;
                      var comen4=document.getElementById("comen4").value;
                      //---------------------------------------------------------------
                        //------------------------------card 5----------------------------
                      var cod5=document.getElementById("op5").value;
                      var descri5=document.getElementById("descrip5").value;
                      var mq5=document.getElementById("mq5").value;
                      var to5=document.getElementById("to5").value;
                      var s5=document.getElementById("s5").value;
                      var std5=document.getElementById("estan5").value;
                      var uds5=document.getElementById("tiem5").value;
                      var comen5=document.getElementById("comen5").value;
                      //---------------------------------------------------------------
                        //------------------------------card 6----------------------------
                      var cod6=document.getElementById("op6").value;
                      var descri6=document.getElementById("descrip1").value;
                      var mq6=document.getElementById("mq6").value;
                      var to6=document.getElementById("to6").value;
                      var s6=document.getElementById("s6").value;
                      var std6=document.getElementById("estan6").value;
                      var uds6=document.getElementById("tiem6").value;
                      var comen6=document.getElementById("comen6").value;
                      //---------------------------------------------------------------
                        //------------------------------card 7----------------------------
                      var cod7=document.getElementById("op7").value;
                      var descri7=document.getElementById("descrip7").value;
                      var mq7=document.getElementById("mq7").value;
                      var to7=document.getElementById("to7").value;
                      var s7=document.getElementById("s7").value;
                      var std7=document.getElementById("estan7").value;
                      var uds7=document.getElementById("tiem7").value;
                      var comen7=document.getElementById("comen7").value;
                      //---------------------------------------------------------------
                        //------------------------------card 8----------------------------
                      var cod8=document.getElementById("op8").value;
                      var descri8=document.getElementById("descrip8").value;
                      var mq8=document.getElementById("mq8").value;
                      var to8=document.getElementById("to8").value;
                      var s8=document.getElementById("s8").value;
                      var std8=document.getElementById("estan8").value;
                      var uds8=document.getElementById("tiem8").value;
                      var comen8=document.getElementById("comen8").value;
                      //---------------------------------------------------------------
                        //------------------------------card 9----------------------------
                      var cod9=document.getElementById("op9").value;
                      var descri9=document.getElementById("descrip9").value;
                      var mq9=document.getElementById("mq9").value;
                      var to9=document.getElementById("to9").value;
                      var s9=document.getElementById("s9").value;
                      var std9=document.getElementById("estan9").value;
                      var uds9=document.getElementById("tiem9").value;
                      var comen9=document.getElementById("comen9").value;
                      //---------------------------------------------------------------
                       //------------------------------card 10----------------------------
                       var cod10=document.getElementById("op10").value;
                       var descri10=document.getElementById("descrip10").value;
                       var mq10=document.getElementById("mq10").value;
                       var to10=document.getElementById("to10").value;
                       var s10=document.getElementById("s10").value;
                       var std10=document.getElementById("estan10").value;
                       var uds10=document.getElementById("tiem10").value;
                       var comen10=document.getElementById("comen10").value;
                       //---------------------------------------------------------------
                        //------------------------------card 11----------------------------
                      var cod11=document.getElementById("op11").value;
                      var descri11=document.getElementById("descrip11").value;
                      var mq11=document.getElementById("mq11").value;
                      var to11=document.getElementById("to11").value;
                      var s11=document.getElementById("s11").value;
                      var std11=document.getElementById("estan11").value;
                      var uds11=document.getElementById("tiem11").value;
                      var comen11=document.getElementById("comen11").value;
                      //---------------------------------------------------------------
                       //------------------------------card 12----------------------------
                       var cod12=document.getElementById("op12").value;
                       var descri12=document.getElementById("descrip12").value;
                       var mq12=document.getElementById("mq12").value;
                       var to12=document.getElementById("to12").value;
                       var s12=document.getElementById("s12").value;
                       var std12=document.getElementById("estan12").value;
                       var uds12=document.getElementById("tiem12").value;
                       var comen12=document.getElementById("comen12").value;
                       //---------------------------------------------------------------
                        //------------------------------card 13----------------------------
                      var cod13=document.getElementById("op13").value;
                      var descri13=document.getElementById("descrip13").value;
                      var mq13=document.getElementById("mq13").value;
                      var to13=document.getElementById("to13").value;
                      var s13=document.getElementById("s13").value;
                      var std13=document.getElementById("estan13").value;
                      var uds13=document.getElementById("tiem13").value;
                      var comen13=document.getElementById("comen13").value;
                      //---------------------------------------------------------------
                       //------------------------------card 14----------------------------
                       var cod14=document.getElementById("op14").value;
                       var descri14=document.getElementById("descrip14").value;
                       var mq14=document.getElementById("mq14").value;
                       var to14=document.getElementById("to14").value;
                       var s14=document.getElementById("s14").value;
                       var std14=document.getElementById("estan14").value;
                       var uds14=document.getElementById("tiem14").value;
                       var comen14=document.getElementById("comen14").value;
                       //---------------------------------------------------------------
                        //------------------------------card 15----------------------------
                      var cod15=document.getElementById("op15").value;
                      var descri15=document.getElementById("descrip15").value;
                      var mq15=document.getElementById("mq15").value;
                      var to15=document.getElementById("to15").value;
                      var s15=document.getElementById("s15").value;
                      var std15=document.getElementById("estan15").value;
                      var uds15=document.getElementById("tiem15").value;
                      var comen15=document.getElementById("comen15").value;
                      //---------------------------------------------------------------
                       //------------------------------card 16----------------------------
                       var cod16=document.getElementById("op16").value;
                       var descri16=document.getElementById("descrip16").value;
                       var mq16=document.getElementById("mq16").value;
                       var to16=document.getElementById("to16").value;
                       var s16=document.getElementById("s16").value;
                       var std16=document.getElementById("estan16").value;
                       var uds16=document.getElementById("tiem16").value;
                       var comen16=document.getElementById("comen16").value;
                       //---------------------------------------------------------------
                        //------------------------------card 17----------------------------
                      var cod17=document.getElementById("op17").value;
                      var descri17=document.getElementById("descrip17").value;
                      var mq17=document.getElementById("mq17").value;
                      var to17=document.getElementById("to17").value;
                      var s17=document.getElementById("s17").value;
                      var std17=document.getElementById("estan17").value;
                      var uds17=document.getElementById("tiem17").value;
                      var comen17=document.getElementById("comen17").value;
                      //---------------------------------------------------------------
                       //------------------------------card 18----------------------------
                       var cod18=document.getElementById("op18").value;
                       var descri18=document.getElementById("descrip18").value;
                       var mq18=document.getElementById("mq18").value;
                       var to18=document.getElementById("to18").value;
                       var s18=document.getElementById("s18").value;
                       var std18=document.getElementById("estan18").value;
                       var uds18=document.getElementById("tiem18").value;
                       var comen18=document.getElementById("comen18").value;
                       //---------------------------------------------------------------
                        //------------------------------card 19----------------------------
                      var cod19=document.getElementById("op19").value;
                      var descri19=document.getElementById("descrip19").value;
                      var mq19=document.getElementById("mq19").value;
                      var to19=document.getElementById("to19").value;
                      var s19=document.getElementById("s19").value;
                      var std19=document.getElementById("estan19").value;
                      var uds19=document.getElementById("tiem19").value;
                      var comen19=document.getElementById("comen19").value;
                      //---------------------------------------------------------------
                       //------------------------------card 20----------------------------
                       var cod20=document.getElementById("op20").value;
                       var descri20=document.getElementById("descrip20").value;
                       var mq20=document.getElementById("mq20").value;
                       var to20=document.getElementById("to20").value;
                       var s20=document.getElementById("s20").value;
                       var std20=document.getElementById("estan20").value;
                       var uds20=document.getElementById("tiem20").value;
                       var comen20=document.getElementById("comen20").value;
                       //---------------------------------------------------------------
                        //------------------------------card 21----------------------------
                      var cod21=document.getElementById("op21").value;
                      var descri21=document.getElementById("descrip21").value;
                      var mq21=document.getElementById("mq21").value;
                      var to21=document.getElementById("to21").value;
                      var s21=document.getElementById("s21").value;
                      var std21=document.getElementById("estan21").value;
                      var uds21=document.getElementById("tiem21").value;
                      var comen21=document.getElementById("comen21").value;
                      //---------------------------------------------------------------
                       //------------------------------card 22----------------------------
                       var cod22=document.getElementById("op22").value;
                       var descri22=document.getElementById("descrip22").value;
                       var mq22=document.getElementById("mq22").value;
                       var to22=document.getElementById("to22").value;
                       var s22=document.getElementById("s22").value;
                       var std22=document.getElementById("estan22").value;
                       var uds22=document.getElementById("tiem22").value;
                       var comen22=document.getElementById("comen22").value;
                       //---------------------------------------------------------------
                        //------------------------------card 23----------------------------
                      var cod23=document.getElementById("op23").value;
                      var descri23=document.getElementById("descrip23").value;
                      var mq23=document.getElementById("mq23").value;
                      var to23=document.getElementById("to23").value;
                      var s23=document.getElementById("s23").value;
                      var std23=document.getElementById("estan23").value;
                      var uds23=document.getElementById("tiem23").value;
                      var comen23=document.getElementById("comen23").value;
                      //---------------------------------------------------------------
                       //------------------------------card 24----------------------------
                       var cod24=document.getElementById("op24").value;
                       var descri24=document.getElementById("descrip24").value;
                       var mq24=document.getElementById("mq24").value;
                       var to24=document.getElementById("to24").value;
                       var s24=document.getElementById("s24").value;
                       var std24=document.getElementById("estan24").value;
                       var uds24=document.getElementById("tiem24").value;
                       var comen24=document.getElementById("comen24").value;
                       //---------------------------------------------------------------
                         //------------------------------card 25----------------------------
                         var cod25=document.getElementById("op25").value;
                         var descri25=document.getElementById("descrip25").value;
                         var mq25=document.getElementById("mq25").value;
                         var to25=document.getElementById("to25").value;
                         var s25=document.getElementById("s25").value;
                         var std25=document.getElementById("estan25").value;
                         var uds25=document.getElementById("tiem25").value;
                         var comen25=document.getElementById("comen25").value;
                         //---------------------------------------------------------------
                           //------------------------------card 26----------------------------
                       var cod26=document.getElementById("op26").value;
                       var descri26=document.getElementById("descrip26").value;
                       var mq26=document.getElementById("mq26").value;
                       var to26=document.getElementById("to26").value;
                       var s26=document.getElementById("s26").value;
                       var std26=document.getElementById("estan26").value;
                       var uds26=document.getElementById("tiem26").value;
                       var comen26=document.getElementById("comen26").value;
                       //---------------------------------------------------------------
                         //------------------------------card 27----------------------------
                         var cod27=document.getElementById("op27").value;
                         var descri27=document.getElementById("descrip27").value;
                         var mq27=document.getElementById("mq27").value;
                         var to27=document.getElementById("to27").value;
                         var s27=document.getElementById("s27").value;
                         var std27=document.getElementById("estan27").value;
                         var uds27=document.getElementById("tiem27").value;
                         var comen27=document.getElementById("comen27").value;
                         //---------------------------------------------------------------
                          //------------------------------card 28----------------------------
                          var cod28=document.getElementById("op28").value;
                          var descri28=document.getElementById("descrip28").value;
                          var mq28=document.getElementById("mq28").value;
                          var to28=document.getElementById("to28").value;
                          var s28=document.getElementById("s28").value;
                          var std28=document.getElementById("estan28").value;
                          var uds28=document.getElementById("tiem28").value;
                          var comen28=document.getElementById("comen28").value;
                          //---------------------------------------------------------------
                           //------------------------------card 29----------------------------
                         var cod29=document.getElementById("op29").value;
                         var descri29=document.getElementById("descrip29").value;
                         var mq29=document.getElementById("mq29").value;
                         var to29=document.getElementById("to29").value;
                         var s29=document.getElementById("s29").value;
                         var std29=document.getElementById("estan29").value;
                         var uds29=document.getElementById("tiem29").value;
                         var comen29=document.getElementById("comen29").value;
                         //---------------------------------------------------------------
                          //------------------------------card 30----------------------------
                          var cod30=document.getElementById("op30").value;
                          var descri30=document.getElementById("descrip30").value;
                          var mq30=document.getElementById("mq30").value;
                          var to30=document.getElementById("to30").value;
                          var s30=document.getElementById("s30").value;
                          var std30=document.getElementById("estan30").value;
                          var uds30=document.getElementById("tiem30").value;
                          var comen30=document.getElementById("comen30").value;
                          //---------------------------------------------------------------
                           //------------------------------card 31----------------------------
                         var cod31 =document.getElementById("op31").value;
                         var descri31=document.getElementById("descrip31").value;
                         var mq31=document.getElementById("mq31").value;
                         var to31=document.getElementById("to31").value;
                         var s31=document.getElementById("s31").value;
                         var std31=document.getElementById("estan31").value;
                         var uds31=document.getElementById("tiem31").value;
                         var comen31=document.getElementById("comen31").value;
                         //---------------------------------------------------------------
                         //------------------------------card 32----------------------------
                         var cod32=document.getElementById("op32").value;
                         var descri32=document.getElementById("descrip32").value;
                         var mq32=document.getElementById("mq32").value;
                         var to32=document.getElementById("to32").value;
                         var s32=document.getElementById("s32").value;
                         var std32=document.getElementById("estan32").value;
                         var uds32=document.getElementById("tiem32").value;
                         var comen32=document.getElementById("comen32").value;
                         //---------------------------------------------------------------
                           //------------------------------card 33----------------------------
                         var cod33 =document.getElementById("op33").value;
                         var descri33=document.getElementById("descrip33").value;
                         var mq33=document.getElementById("mq33").value;
                         var to33=document.getElementById("to33").value;
                         var s33=document.getElementById("s33").value;
                         var std33=document.getElementById("estan33").value;
                         var uds33=document.getElementById("tiem33").value;
                         var comen33=document.getElementById("comen33").value;
                         //---------------------------------------------------------------
                           //------------------------------card 34----------------------------
                         var cod34 =document.getElementById("op34").value;
                         var descri34=document.getElementById("descrip34").value;
                         var mq34=document.getElementById("mq34").value;
                         var to34=document.getElementById("to34").value;
                         var s34=document.getElementById("s34").value;
                         var std34=document.getElementById("estan34").value;
                         var uds34=document.getElementById("tiem34").value;
                         var comen34=document.getElementById("comen34").value;
                         //---------------------------------------------------------------
                           //------------------------------card 35----------------------------
                         var cod35 =document.getElementById("op35").value;
                         var descri35=document.getElementById("descrip35").value;
                         var mq35=document.getElementById("mq35").value;
                         var to35=document.getElementById("to35").value;
                         var s35=document.getElementById("s35").value;
                         var std35=document.getElementById("estan35").value;
                         var uds35=document.getElementById("tiem35").value;
                         var comen35=document.getElementById("comen35").value;
                         //---------------------------------------------------------------
                           //------------------------------card 36----------------------------
                         var cod36 =document.getElementById("op36").value;
                         var descri36=document.getElementById("descrip36").value;
                         var mq36=document.getElementById("mq36").value;
                         var to36=document.getElementById("to36").value;
                         var s36=document.getElementById("s36").value;
                         var std36=document.getElementById("estan36").value;
                         var uds36=document.getElementById("tiem36").value;
                         var comen36=document.getElementById("comen36").value;
                         //---------------------------------------------------------------
                           //------------------------------card 37----------------------------
                         var cod37 =document.getElementById("op37").value;
                         var descri37=document.getElementById("descrip37").value;
                         var mq37=document.getElementById("mq37").value;
                         var to37=document.getElementById("to37").value;
                         var s37=document.getElementById("s37").value;
                         var std37=document.getElementById("estan37").value;
                         var uds37=document.getElementById("tiem37").value;
                         var comen37=document.getElementById("comen37").value;
                         //---------------------------------------------------------------
                           //------------------------------card 38----------------------------
                         var cod38 =document.getElementById("op38").value;
                         var descri38=document.getElementById("descrip38").value;
                         var mq38=document.getElementById("mq38").value;
                         var to38=document.getElementById("to38").value;
                         var s38=document.getElementById("s38").value;
                         var std38=document.getElementById("estan38").value;
                         var uds38=document.getElementById("tiem38").value;
                         var comen38=document.getElementById("comen38").value;
                         //---------------------------------------------------------------
                           //------------------------------card 39----------------------------
                         var cod39 =document.getElementById("op39").value;
                         var descri39=document.getElementById("descrip39").value;
                         var mq39=document.getElementById("mq39").value;
                         var to39=document.getElementById("to39").value;
                         var s39=document.getElementById("s39").value;
                         var std39=document.getElementById("estan39").value;
                         var uds39=document.getElementById("tiem39").value;
                         var comen39=document.getElementById("comen39").value;
                         //---------------------------------------------------------------
                           //------------------------------card 40----------------------------
                         var cod40 =document.getElementById("op40").value;
                         var descri40=document.getElementById("descrip40").value;
                         var mq40=document.getElementById("mq40").value;
                         var to40=document.getElementById("to40").value;
                         var s40=document.getElementById("s40").value;
                         var std40=document.getElementById("estan40").value;
                         var uds40=document.getElementById("tiem40").value;
                         var comen40=document.getElementById("comen40").value;
                         //---------------------------------------------------------------
                           //------------------------------card 41----------------------------
                         var cod41 =document.getElementById("op41").value;
                         var descri41=document.getElementById("descrip41").value;
                         var mq41=document.getElementById("mq41").value;
                         var to41=document.getElementById("to41").value;
                         var s41=document.getElementById("s41").value;
                         var std41=document.getElementById("estan41").value;
                         var uds41=document.getElementById("tiem41").value;
                         var comen41=document.getElementById("comen41").value;
                         //---------------------------------------------------------------
                           //------------------------------card 42----------------------------
                         var cod42 =document.getElementById("op42").value;
                         var descri42=document.getElementById("descrip42").value;
                         var mq42=document.getElementById("mq42").value;
                         var to42=document.getElementById("to42").value;
                         var s42=document.getElementById("s42").value;
                         var std42=document.getElementById("estan42").value;
                         var uds42=document.getElementById("tiem42").value;
                         var comen42=document.getElementById("comen42").value;
                         //---------------------------------------------------------------
                           //------------------------------card 43----------------------------
                         var cod43 =document.getElementById("op43").value;
                         var descri43=document.getElementById("descrip43").value;
                         var mq43=document.getElementById("mq43").value;
                         var to43=document.getElementById("to43").value;
                         var s43=document.getElementById("s43").value;
                         var std43=document.getElementById("estan43").value;
                         var uds43=document.getElementById("tiem43").value;
                         var comen43=document.getElementById("comen43").value;
                         //---------------------------------------------------------------
                           //------------------------------card 44----------------------------
                           var cod44 =document.getElementById("op44").value;
                           var descri44=document.getElementById("descrip44").value;
                           var mq44=document.getElementById("mq44").value;
                           var to44=document.getElementById("to44").value;
                           var s44=document.getElementById("s44").value;
                           var std44=document.getElementById("estan44").value;
                           var uds44=document.getElementById("tiem44").value;
                           var comen44=document.getElementById("comen44").value;
                           //---------------------------------------------------------------
                             //------------------------------card 45----------------------------
                         var cod45 =document.getElementById("op45").value;
                         var descri45=document.getElementById("descrip45").value;
                         var mq45=document.getElementById("mq45").value;
                         var to45=document.getElementById("to45").value;
                         var s45=document.getElementById("s31").value;
                         var std45=document.getElementById("estan45").value;
                         var uds45=document.getElementById("tiem45").value;
                         var comen45=document.getElementById("comen45").value;
                         //---------------------------------------------------------------
                           //------------------------------card 46----------------------------
                         var cod46 =document.getElementById("op46").value;
                         var descri46=document.getElementById("descrip46").value;
                         var mq46=document.getElementById("mq46").value;
                         var to46=document.getElementById("to46").value;
                         var s46=document.getElementById("s46").value;
                         var std46=document.getElementById("estan46").value;
                         var uds46=document.getElementById("tiem46").value;
                         var comen46=document.getElementById("comen46").value;
                         //---------------------------------------------------------------
                           //------------------------------card 47----------------------------
                         var cod47 =document.getElementById("op47").value;
                         var descri47=document.getElementById("descrip47").value;
                         var mq47=document.getElementById("mq47").value;
                         var to47=document.getElementById("to47").value;
                         var s47=document.getElementById("s47").value;
                         var std47=document.getElementById("estan47").value;
                         var uds47=document.getElementById("tiem47").value;
                         var comen47=document.getElementById("comen47").value;
                         //---------------------------------------------------------------
                           //------------------------------card 48----------------------------
                         var cod48 =document.getElementById("op48").value;
                         var descri48=document.getElementById("descrip48").value;
                         var mq48=document.getElementById("mq48").value;
                         var to48=document.getElementById("to48").value;
                         var s48=document.getElementById("s48").value;
                         var std48=document.getElementById("estan48").value;
                         var uds48=document.getElementById("tiem48").value;
                         var comen48=document.getElementById("comen48").value;
                         //---------------------------------------------------------------
                           //------------------------------card 49----------------------------
                         var cod49 =document.getElementById("op49").value;
                         var descri49=document.getElementById("descrip49").value;
                         var mq49=document.getElementById("mq49").value;
                         var to49=document.getElementById("to49").value;
                         var s49=document.getElementById("s49").value;
                         var std49=document.getElementById("estan49").value;
                         var uds49=document.getElementById("tiem49").value;
                         var comen49=document.getElementById("comen49").value;
                         //---------------------------------------------------------------
                           //------------------------------card 50----------------------------
                         var cod50 =document.getElementById("op50").value;
                         var descri50=document.getElementById("descrip50").value;
                         var mq50=document.getElementById("mq50").value;
                         var to50=document.getElementById("to50").value;
                         var s50=document.getElementById("s50").value;
                         var std50=document.getElementById("estan50").value;
                         var uds50=document.getElementById("tiem50").value;
                         var comen50=document.getElementById("comen50").value;
                         //---------------------------------------------------------------
                        var datoRef=document.getElementById("Referencia").value;
                        var enviarCliente=document.getElementById("cliente").value;

                         db.collection("FichaTecniGlobal").where("Referencia", "==", datoRef).where("Cliente", "==", enviarCliente)
                         .get()
                         .then(function(querySnapshot) {
                             querySnapshot.forEach(function(doc) {
                                 // doc.data() is never undefined for query doc snapshots
                                 console.log(doc.id, " => ", doc.data());
                                 var refe=`${doc.data().Referencia}`;
                                 var cli1=`${doc.data().Cliente}`;

                                 elimi=function(){
                                    db.collection("FichaTecniGlobal").doc(doc.id).delete().then(function() {
                                        alert("Ha eliminado...");
                                        console.log("Document successfully deleted!");
                        
                                    }).catch(function(error) {
                                        alert("No se ha podido eliminar el documento");
                                        console.error("Error removing document: ", error);
                                    });
                    
                                }
                   
                       
                

                         var washingtonRef = db.collection("FichaTecniGlobal").doc(doc.id);

                         // Set the "capital" field of the city 'DC'
                         return washingtonRef.update({

                            IncrementoTiemp:tiempoTotal,
                            TiempTotal:tiempoReal,

                            //-----------------------card 01--------------------
                            Codigo:cod1,
                            Descripcion:descri1,
                            Maquina:mq1,
                           //Referencia:datoRef,
                            Observado:to1,
                            Suplementario:s1,
                            Estandar:std1,
                            Unidad:uds1,
                            Comentarios:comen1,

                            //-----------------------card 02--------------------------------
                            Codigo2:cod2,
                            Descripcion2:descri2,
                            Maquina2:mq2,
                           //Referencia:datoRef,
                            Observado2:to2,
                            Suplementario2:s2,
                            Estandar2:std2,
                            Unidad2:uds2,
                            Comentarios2:comen2,
                             //-----------------------card 03--------------------------------
                             Codigo3:cod3,
                             Descripcion3:descri3,
                             Maquina3:mq3,
                            //Referencia:datoRef,
                             Observado3:to3,
                             Suplementario3:s3,
                             Estandar3:std3,
                             Unidad3:uds3,
                             Comentarios3:comen3,
                              //-----------------------card 04--------------------------------
                              Codigo4:cod4,
                              Descripcion4:descri4,
                              Maquina4:mq4,
                             //Referencia:datoRef,
                              Observado4:to4,
                              Suplementario4:s4,
                              Estandar4:std4,
                              Unidad4:uds4,
                              Comentarios4:comen4,
                              //-----------------------card 05--------------------------------
                              Codigo5:cod5,
                              Descripcion5:descri5,
                              Maquina5:mq5,
                             //Referencia:datoRef,
                              Observado5:to5,
                              Suplementario5:s5,
                              Estandar5:std5,
                              Unidad5:uds5,
                              Comentarios5:comen5,
                           //-----------------------card 06--------------------------------
                              Codigo6:cod6,
                              Descripcion6:descri6,
                              Maquina6:mq6,
                             //Referencia:datoRef,
                              Observado6:to6,
                              Suplementario6:s6,
                              Estandar6:std6,
                              Unidad6:uds6,
                              Comentarios6:comen6,
                              //-----------------------card 07--------------------------------
                              Codigo7:cod7,
                              Descripcion7:descri7,
                              Maquina7:mq7,
                             //Referencia:datoRef,
                              Observado7:to7,
                              Suplementario7:s7,
                              Estandar7:std7,
                              Unidad7:uds7,
                              Comentarios7:comen7,
                              //-----------------------card 08--------------------------------
                              Codigo8:cod8,
                              Descripcion8:descri8,
                              Maquina8:mq8,
                             //Referencia:datoRef,
                              Observado8:to8,
                              Suplementario8:s8,
                              Estandar8:std8,
                              Unidad8:uds8,
                              Comentarios8:comen8,
                              //-----------------------card 09--------------------------------
                              Codigo9:cod9,
                              Descripcion9:descri9,
                              Maquina9:mq9,
                             //Referencia:datoRef,
                              Observado9:to9,
                              Suplementario9:s9,
                              Estandar9:std9,
                              Unidad9:uds9,
                              Comentarios9:comen9,
                            //-----------------------card 10--------------------------------
                              Codigo10:cod10,
                              Descripcion10:descri10,
                              Maquina10:mq10,
                             //Referencia:datoRef,
                              Observado10:to10,
                              Suplementario10:s10,
                              Estandar10:std10,
                              Unidad10:uds10,
                              Comentarios10:comen10,
                              //-----------------------card 11--------------------------------
                              Codigo11:cod11,
                              Descripcion11:descri11,
                              Maquina11:mq11,
                             //Referencia:datoRef,
                              Observado11:to11,
                              Suplementario11:s11,
                              Estandar11:std11,
                              Unidad11:uds11,
                              Comentarios11:comen11,
                              //-----------------------card 12--------------------------------
                              Codigo12:cod12,
                              Descripcion12:descri12,
                              Maquina12:mq12,
                             //Referencia:datoRef,
                              Observado12:to12,
                              Suplementario12:s12,
                              Estandar12:std12,
                              Unidad12:uds12,
                              Comentarios12:comen12,
                              //-----------------------card 13--------------------------------
                              Codigo13:cod13,
                              Descripcion13:descri13,
                              Maquina13:mq13,
                             //Referencia:datoRef,
                              Observado13:to13,
                              Suplementario13:s13,
                              Estandar13:std13,
                              Unidad13:uds13,
                              Comentarios13:comen13,
                              //-----------------------card 14--------------------------------
                              Codigo14:cod14,
                              Descripcion14:descri14,
                              Maquina14:mq14,
                             //Referencia:datoRef,
                              Observado14:to14,
                              Suplementario14:s14,
                              Estandar14:std14,
                              Unidad14:uds14,
                              Comentarios14:comen14,
                              //-----------------------card 15--------------------------------
                              Codigo15:cod15,
                              Descripcion15:descri15,
                              Maquina15:mq15,
                             //Referencia:datoRef,
                              Observado15:to15,
                              Suplementario15:s15,
                              Estandar15:std15,
                              Unidad15:uds15,
                              Comentarios15:comen15,
                             //-----------------------card 16--------------------------------
                             Codigo16:cod16,
                             Descripcion16:descri16,
                             Maquina16:mq16,
                            //Referencia:datoRef,
                             Observado16:to16,
                             Suplementario16:s16,
                             Estandar16:std16,
                             Unidad16:uds16,
                             Comentarios16:comen16,
                             //-----------------------card 17--------------------------------
                             Codigo17:cod17,
                             Descripcion17:descri17,
                             Maquina17:mq17,
                            //Referencia:datoRef,
                             Observado17:to17,
                             Suplementario17:s17,
                             Estandar17:std17,
                             Unidad17:uds17,
                             Comentarios17:comen17,
                             //-----------------------card 18--------------------------------
                             Codigo18:cod18,
                             Descripcion18:descri18,
                             Maquina18:mq18,
                            //Referencia:datoRef,
                             Observado18:to18,
                             Suplementario18:s18,
                             Estandar18:std18,
                             Unidad18:uds18,
                             Comentarios18:comen18,
                             //-----------------------card 19--------------------------------
                             Codigo19:cod19,
                             Descripcion19:descri19,
                             Maquina19:mq19,
                            //Referencia:datoRef,
                             Observado19:to19,
                             Suplementario19:s19,
                             Estandar19:std19,
                             Unidad19:uds19,
                             Comentarios19:comen19,
                             //-----------------------card 20--------------------------------
                             Codigo20:cod20,
                             Descripcion20:descri20,
                             Maquina20:mq20,
                            //Referencia:datoRef,
                             Observado20:to20,
                             Suplementario20:s20,
                             Estandar20:std20,
                             Unidad20:uds20,
                             Comentarios20:comen20,
                             //-----------------------card 21--------------------------------
                             Codigo21:cod21,
                             Descripcion21:descri21,
                             Maquina21:mq21,
                            //Referencia:datoRef,
                             Observado21:to21,
                             Suplementario21:s21,
                             Estandar21:std21,
                             Unidad21:uds21,
                             Comentarios21:comen21,
                             //-----------------------card 22--------------------------------
                             Codigo22:cod22,
                             Descripcion22:descri22,
                             Maquina22:mq22,
                            //Referencia:datoRef,
                             Observado22:to22,
                             Suplementario22:s22,
                             Estandar22:std22,
                             Unidad22:uds22,
                             Comentarios22:comen22,
                             //-----------------------card 23--------------------------------
                             Codigo23:cod23,
                             Descripcion23:descri23,
                             Maquina23:mq23,
                            //Referencia:datoRef,
                             Observado23:to23,
                             Suplementario23:s23,
                             Estandar23:std23,
                             Unidad23:uds23,
                             Comentarios23:comen23,
                             //-----------------------card 24--------------------------------
                             Codigo24:cod24,
                             Descripcion24:descri24,
                             Maquina24:mq24,
                            //Referencia:datoRef,
                             Observado24:to24,
                             Suplementario24:s24,
                             Estandar24:std24,
                             Unidad24:uds24,
                             Comentarios24:comen24,
                             //-----------------------card 25--------------------------------
                             Codigo25:cod25,
                             Descripcion25:descri25,
                             Maquina25:mq25,
                            //Referencia:datoRef,
                             Observado25:to25,
                             Suplementario25:s25,
                             Estandar25:std25,
                             Unidad25:uds25,
                             Comentarios25:comen25,
                             //-----------------------card 26--------------------------------
                             Codigo26:cod26,
                             Descripcion26:descri26,
                             Maquina26:mq26,
                            //Referencia:datoRef,
                             Observado26:to26,
                             Suplementario26:s26,
                             Estandar26:std26,
                             Unidad26:uds26,
                             Comentarios26:comen26,
                             //-----------------------card 27--------------------------------
                             Codigo27:cod27, 
                             Descripcion27:descri27,
                             Maquina27:mq27,
                            //Referencia:datoRef,
                             Observado27:to27,
                             Suplementario27:s27,
                             Estandar27:std27,
                             Unidad27:uds27,
                             Comentarios27:comen27,
                            //-----------------------card 28--------------------------------
                            Codigo28:cod28, 
                            Descripcion28:descri28,
                            Maquina28:mq28,
                           //Referencia:datoRef,
                            Observado28:to28,
                            Suplementario28:s28,
                            Estandar28:std28,
                            Unidad28:uds28,
                            Comentarios28:comen28,
                        //-----------------------card 29--------------------------------
                        Codigo29:cod29, 
                        Descripcion29:descri29,
                        Maquina29:mq29,
                       //Referencia:datoRef,
                        Observado29:to29,
                        Suplementario29:s29,
                        Estandar29:std29,
                        Unidad29:uds29,
                        Comentarios29:comen29,
                    //-----------------------card 30--------------------------------
                    Codigo30:cod30, 
                    Descripcion30:descri30,
                    Maquina30:mq30,
                   //Referencia:datoRef,
                    Observado30:to30,
                    Suplementario30:s30,
                    Estandar30:std30,
                    Unidad30:uds30,
                    Comentarios30:comen30,
                      //-----------------------card 31--------------------------------
                      Codigo31:cod31, 
                      Descripcion31:descri31,
                      Maquina31:mq31,
                     //Referencia:datoRef,
                      Observado31:to31,
                      Suplementario31:s31,
                      Estandar31:std31,
                      Unidad31:uds31,
                      Comentarios31:comen31,
                        //-----------------------card 32--------------------------------
                        Codigo32:cod32, 
                        Descripcion32:descri32,
                        Maquina32:mq32,
                       //Referencia:datoRef,
                        Observado32:to32,
                        Suplementario32:s32,
                        Estandar32:std32,
                        Unidad32:uds32,
                        Comentarios32:comen32,
                          //-----------------------card 33--------------------------------
                      Codigo33:cod33, 
                      Descripcion33:descri33,
                      Maquina33:mq33,
                     //Referencia:datoRef,
                      Observado33:to33,
                      Suplementario33:s33,
                      Estandar33:std33,
                      Unidad33:uds33,
                      Comentarios33:comen33,
                           //-----------------------card 34--------------------------------
                      Codigo34:cod34, 
                      Descripcion34:descri34,
                      Maquina34:mq34,
                     //Referencia:datoRef,
                      Observado34:to34,
                      Suplementario34:s34,
                      Estandar34:std34,
                      Unidad34:uds34,
                      Comentarios34:comen34,
                         //-----------------------card 35--------------------------------
                         Codigo35:cod35, 
                         Descripcion35:descri35,
                         Maquina35:mq35,
                        //Referencia:datoRef,
                         Observado35:to35,
                         Suplementario35:s35,
                         Estandar35:std35,
                         Unidad35:uds35,
                         Comentarios35:comen35,
                             //-----------------------card 36--------------------------------
                      Codigo36:cod36, 
                      Descripcion36:descri36,
                      Maquina36:mq36,
                     //Referencia:datoRef,
                      Observado36:to36,
                      Suplementario36:s36,
                      Estandar36:std36,
                      Unidad36:uds36,
                      Comentarios36:comen36,
                         //-----------------------card 37--------------------------------
                         Codigo37:cod37, 
                         Descripcion37:descri37,
                         Maquina37:mq37,
                        //Referencia:datoRef,
                         Observado37:to37,
                         Suplementario37:s37,
                         Estandar37:std37,
                         Unidad37:uds37,
                         Comentarios37:comen37,
                             //-----------------------card 38--------------------------------
                      Codigo38:cod38, 
                      Descripcion38:descri38,
                      Maquina38:mq38,
                     //Referencia:datoRef,
                      Observado38:to38,
                      Suplementario38:s38,
                      Estandar38:std38,
                      Unidad38:uds38,
                      Comentarios38:comen38,
                         //-----------------------card 39--------------------------------
                         Codigo39:cod39, 
                         Descripcion39:descri39,
                         Maquina39:mq39,
                        //Referencia:datoRef,
                         Observado39:to39,
                         Suplementario39:s39,
                         Estandar39:std39,
                         Unidad39:uds39,
                         Comentarios39:comen39,
                             //-----------------------card 40--------------------------------
                      Codigo40:cod40, 
                      Descripcion40:descri40,
                      Maquina40:mq40,
                     //Referencia:datoRef,
                      Observado40:to40,
                      Suplementario40:s40,
                      Estandar40:std40,
                      Unidad40:uds40,
                      Comentarios40:comen40,
                      //-----------------------card 41--------------------------------
                      Codigo41:cod41, 
                      Descripcion41:descri41,
                      Maquina41:mq41,
                     //Referencia:datoRef,
                      Observado41:to41,
                      Suplementario41:s41,
                      Estandar41:std41,
                      Unidad41:uds41,
                      Comentarios41:comen41,
                      //-----------------------card 42--------------------------------
                      Codigo42:cod42, 
                      Descripcion42:descri42,
                      Maquina42:mq42,
                     //Referencia:datoRef,
                      Observado42:to42,
                      Suplementario42:s42,
                      Estandar42:std42,
                      Unidad42:uds42,
                      Comentarios42:comen42,
                      //-----------------------card 43--------------------------------
                      Codigo43:cod43, 
                      Descripcion43:descri43,
                      Maquina43:mq43,
                     //Referencia:datoRef,
                      Observado43:to43,
                      Suplementario43:s43,
                      Estandar43:std43,
                      Unidad43:uds43,
                      Comentarios43:comen43,
                      //-----------------------card 44--------------------------------
                      Codigo44:cod44, 
                      Descripcion44:descri44,
                      Maquina44:mq44,
                     //Referencia:datoRef,
                      Observado44:to44,
                      Suplementario44:s44,
                      Estandar44:std44,
                      Unidad44:uds44,
                      Comentarios44:comen44,
                      //-----------------------card 45--------------------------------
                      Codigo45:cod45, 
                      Descripcion45:descri45,
                      Maquina45:mq45,
                     //Referencia:datoRef,
                      Observado45:to45,
                      Suplementario45:s45,
                      Estandar45:std45,
                      Unidad45:uds45,
                      Comentarios45:comen45,
                      //-----------------------card 46--------------------------------
                      Codigo46:cod46, 
                      Descripcion46:descri46,
                      Maquina46:mq46,
                     //Referencia:datoRef,
                      Observado46:to46,
                      Suplementario46:s46,
                      Estandar46:std46,
                      Unidad46:uds46,
                      Comentarios46:comen46,
                      //-----------------------card 47--------------------------------
                      Codigo47:cod47, 
                      Descripcion47:descri47,
                      Maquina47:mq47,
                     //Referencia:datoRef,
                      Observado47:to47,
                      Suplementario47:s47,
                      Estandar47:std47,
                      Unidad47:uds47,
                      Comentarios47:comen47,
                        //-----------------------card 48--------------------------------
                        Codigo48:cod48, 
                        Descripcion48:descri48,
                        Maquina48:mq48,
                       //Referencia:datoRef,
                        Observado48:to48,
                        Suplementario48:s48,
                        Estandar48:std48,
                        Unidad48:uds48,
                        Comentarios48:comen48,
                      //-----------------------card 49--------------------------------
                      Codigo49:cod49, 
                      Descripcion49:descri49,
                      Maquina49:mq49,
                     //Referencia:datoRef,
                      Observado49:to49,
                      Suplementario49:s49,
                      Estandar49:std49,
                      Unidad49:uds49,
                      Comentarios49:comen49,
                      //-----------------------card 50--------------------------------
                      Codigo50:cod50, 
                      Descripcion50:descri50,
                      Maquina50:mq50,
                     //Referencia:datoRef,
                      Observado50:to50,
                      Suplementario50:s50,
                      Estandar50:std50,
                      Unidad50:uds50,
                      Comentarios50:comen50,
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
                


   //------------------------------------------------------------------------------------------------------
   }
