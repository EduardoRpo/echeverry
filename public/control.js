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
//-----------------------------------consultar----------------------------------

function Consultar(){
  //  console.log("funciona");

  TablaPro();
  tablaAdmi();

  uniPE=0;
  uniS3A=0;
  uniS2A=0;
  uniO=0;
  uniFSPS=0;
  uniFCPS=0;
  uniRR3A=0;
  uniRR2A=0;
  uniP=0;
  uniMT=0;
  uniB=0;
  uniR=0;

  totaUniPlanaMq=0;
  totalUniRecuMq=0;
  totalUniRR2AMq=0;
  totalUniRR3AMq=0;
  totalUniFCPSMq=0;
  totalUniFSPSMq=0;
  totalUniBMq=0;
  totalUniOMq=0;
  totalUniMTMq=0;
  totalUniS2AMq=0;
  totalUniS3AMq=0;
  totalUniPEMq=0;


   //---------------------------------------plana-----------------------
      
   tiemP1=0;
   tiemP2=0;
   tiemP3=0;
   uhP1=0;
   uhP2=0;
   uhP3=0;
 
   tiemP4=0;
   tiemP5=0;
   tiemP6=0;
   uhP4=0;
   uhP5=0;
   uhP6=0;
 
   tiemP7=0;
   tiemP8=0;
   tiemP9=0;
   uhP7=0;
   uhP8=0;
   uhP9=0;
 
   tiemP10=0;
   tiemP11=0;
   tiemP12=0;
   uhP10=0;
   uhP11=0;
   uhP12=0;
 
   tiemP13=0;
   tiemP14=0;
   tiemP15=0;
   uhP13=0;
   uhP14=0;
   uhP15=0;
 
   tiemP16=0;
   tiemP17=0;
   tiemP18=0;
   uhP16=0;
   uhP17=0;
   uhP18=0;
 
   tiemP19=0;
   tiemP20=0;
   tiemP21=0;
   uhP19=0;
   uhP20=0;
   uhP21=0;
 
   tiemP22=0;
   tiemP23=0;
   tiemP24=0;
   uhP22=0;
   uhP23=0;
   uhP24=0;
 
   tiemP25=0;
   tiemP26=0;
   tiemP27=0;
   uhP25=0;
   uhP26=0;
   uhP27=0;
 
   tiemP28=0;
   tiemP29=0;
   tiemP30=0;
   uhP28=0;
   uhP29=0;
   uhP30=0;
 
   tiemP31=0;
   tiemP32=0;
   tiemP33=0;
   uhP31=0;
   uhP32=0;
   uhP33=0;
 
   tiemP34=0;
   tiemP35=0;
   tiemP36=0;
   uhP34=0;
   uhP35=0;
   uhP36=0;
 
   tiemP37=0;
   tiemP38=0;
   tiemP39=0;
   uhP37=0;
   uhP38=0;
   uhP39=0;
 
   tiemP40=0;
   tiemP41=0;
   tiemP42=0;
   uhP40=0;
   uhP41=0;
   uhP42=0;
 
   tiemP43=0;
   tiemP44=0;
   tiemP45=0;
   uhP43=0;
   uhP44=0;
   uhP45=0;
 
   tiemP46=0;
   tiemP47=0;
   tiemP48=0;
   uhP46=0;
   uhP47=0;
   uhP48=0;
 
   tiemP49=0;
   tiemP50=0;
   tiemP51=0;
   uhP49=0;
   uhP50=0;
   uhP51=0;
 
 
 
 
 
 
 
 
 
 
 
   TOTALtiempo=0;
   TOTALunidades=0;
 
   tiempPlana=0;
   tiempRecu=0;
   tiempFSPS=0;
   tiempB=0;
   tiempMT=0;
   tiempO=0;
   tiempRR2A=0;
   tiempRR3A=0;
   tiempFCPS=0;
   tiempS2A=0;
   tiempS3A=0;
   tiempPE=0;
 
   unidadesPlana=0;
   unidadesRecu=0;
   unidadesFSPS=0;
   unidadesB=0;
   unidadesMT=0;
   unidadesO=0;
   unidadesRR2A=0;
   unidadesRR3A=0;
   unidadesFCPS=0;
   unidadesS2A=0;
   unidadesS3A=0;
   unidadesPE=0;
   
 
   porcenPlana=0;
   porcenRecubri=0;
   porcefsps=0;
   porcenB=0;
   porcenMT=0;
   porcenO=0;
 
   porcenUniPla=0;
   porcenUniRecu=0;
   porcenUniFsPs=0;
   porcenUniB=0;
   porcenUniMT=0;
   porcenUniO=0;
 
   //----------------------------------RR2A----------------------------------
     tiemRR1=0;
     tiemRR2=0;
     tiemRR3=0;
     uhRR1=0;
     uhRR2=0;
     uhRR3=0;
 
     tiemRR4=0;
     tiemRR5=0;
     tiemRR6=0;
     uhRR4=0;
     uhRR5=0;
     uhRR6=0;
 
     tiemRR7=0;
     tiemRR8=0;
     tiemRR9=0;
     uhRR7=0;
     uhRR8=0;
     uhRR9=0;
 
     tiemRR10=0;
     tiemRR11=0;
     tiemRR12=0;
     uhRR10=0;
     uhRR11=0;
     uhRR12=0;
 
     tiemRR13=0;
     tiemRR14=0;
     tiemRR15=0;
     uhRR13=0;
     uhRR14=0;
     uhRR15=0;
 
     tiemRR16=0;
     tiemRR17=0;
     tiemRR18=0;
     uhRR16=0;
     uhRR17=0;
     uhRR18=0;
 
     tiemRR19=0;
     tiemRR20=0;
     tiemRR21=0;
     uhRR19=0;
     uhRR20=0;
     uhRR21=0;
 
     tiemRR22=0;
     tiemRR23=0;
     tiemRR24=0;
     uhRR22=0;
     uhRR23=0;
     uhRR24=0;
 
     tiemRR25=0;
     tiemRR26=0;
     tiemRR27=0;
     uhRR25=0;
     uhRR26=0;
     uhRR27=0;
 
     tiemRR28=0;
     tiemRR29=0;
     tiemRR30=0;
     uhRR28=0;
     uhRR29=0;
     uhRR30=0;
 
     tiemRR31=0;
     tiemRR32=0;
     tiemRR33=0;
     uhRR31=0;
     uhRR32=0;
     uhRR33=0;
 
     tiemRR34=0;
     tiemRR35=0;
     tiemRR36=0;
     uhRR34=0;
     uhRR35=0;
     uhRR36=0;
 
     tiemRR37=0;
     tiemRR38=0;
     tiemRR39=0;
     uhRR37=0;
     uhRR38=0;
     uhRR39=0;
 
     tiemRR40=0;
     tiemRR41=0;
     tiemRR42=0;
     uhRR40=0;
     uhRR41=0;
     uhRR42=0;
 
     tiemRR43=0;
     tiemRR44=0;
     tiemRR45=0;
     uhRR43=0;
     uhRR44=0;
     uhRR45=0;
 
     tiemRR46=0;
     tiemRR47=0;
     tiemRR48=0;
     uhRR46=0;
     uhRR47=0;
     uhRR48=0;
 
     tiemRR49=0;
     tiemRR50=0;
     tiemRR51=0;
     uhRR49=0;
     uhRR50=0;
     uhRR51=0;
 
 
     //------------------------RR3A--------------------------------
 
     tiemRRR1=0;
     tiemRRR2=0;
     tiemRRR3=0;
     uhRRR1=0;
     uhRRR2=0;
     uhRRR3=0;
 
     tiemRRR4=0;
     tiemRRR5=0;
     tiemRRR6=0;
     uhRRR4=0;
     uhRRR5=0;
     uhRRR6=0;
 
     tiemRRR7=0;
     tiemRRR8=0;
     tiemRRR9=0;
     uhRRR7=0;
     uhRRR8=0;
     uhRRR9=0;
 
     tiemRRR10=0;
     tiemRRR11=0;
     tiemRRR12=0;
     uhRRR10=0;
     uhRRR11=0;
     uhRRR12=0;
 
     tiemRRR13=0;
     tiemRRR14=0;
     tiemRRR15=0;
     uhRRR13=0;
     uhRRR14=0;
     uhRRR15=0;
 
     tiemRRR16=0;
     tiemRRR17=0;
     tiemRRR18=0;
     uhRRR16=0;
     uhRRR17=0;
     uhRRR18=0;
 
     tiemRRR19=0;
     tiemRRR20=0;
     tiemRRR21=0;
     uhRRR19=0;
     uhRRR20=0;
     uhRRR21=0;
 
     tiemRRR22=0;
     tiemRRR23=0;
     tiemRRR24=0;
     uhRRR22=0;
     uhRRR23=0;
     uhRRR24=0;
 
     tiemRRR25=0;
     tiemRRR26=0;
     tiemRRR27=0;
     uhRRR25=0;
     uhRRR26=0;
     uhRRR27=0;
 
     tiemRRR28=0;
     tiemRRR29=0;
     tiemRRR30=0;
     uhRRR28=0;
     uhRRR29=0;
     uhRRR30=0;
 
     tiemRRR31=0;
     tiemRRR32=0;
     tiemRRR33=0;
     uhRRR31=0;
     uhRRR32=0;
     uhRRR33=0;
 
     tiemRRR34=0;
     tiemRRR35=0;
     tiemRRR36=0;
     uhRRR34=0;
     uhRRR35=0;
     uhRRR36=0;
 
     tiemRRR37=0;
     tiemRRR38=0;
     tiemRRR39=0;
     uhRRR37=0;
     uhRRR38=0;
     uhRRR39=0;
 
     tiemRRR40=0;
     tiemRRR41=0;
     tiemRRR42=0;
     uhRRR40=0;
     uhRRR41=0;
     uhRRR42=0;
 
     tiemRRR43=0;
     tiemRRR44=0;
     tiemRRR45=0;
     uhRRR43=0;
     uhRRR44=0;
     uhRRR45=0;
 
     tiemRRR46=0;
     tiemRRR47=0;
     tiemRRR48=0;
     uhRRR46=0;
     uhRRR47=0;
     uhRRR48=0;
 
     tiemRRR49=0;
     tiemRRR50=0;
     tiemRRR51=0;
     uhRRR49=0;
     uhRRR50=0;
     uhRRR51=0;
 
 
 //-------------------------FCPS---------------------------
 
 
 tiemFCPS1=0;
 tiemFCPS2=0;
 tiemFCPS3=0;
 uhFCPS1=0;
 uhFCPS2=0;
 uhFCPS3=0;
 
 tiemFCPS4=0;
 tiemFCPS5=0;
 tiemFCPS6=0;
 uhFCPS4=0;
 uhFCPS5=0;
 uhFCPS6=0;
 
 tiemFCPS7=0;
 tiemFCPS8=0;
 tiemFCPS9=0;
 uhFCPS7=0;
 uhFCPS8=0;
 uhFCPS9=0;
 
 tiemFCPS10=0;
 tiemFCPS11=0;
 tiemFCPS12=0;
 uhFCPS10=0;
 uhFCPS11=0;
 uhFCPS12=0;
 
 tiemFCPS13=0;
 tiemFCPS14=0;
 tiemFCPS15=0;
 uhFCPS13=0;
 uhFCPS14=0;
 uhFCPS15=0;
 
 tiemFCPS16=0;
 tiemFCPS17=0;
 tiemFCPS18=0;
 uhFCPS16=0;
 uhFCPS17=0;
 uhFCPS18=0;
 
 tiemFCPS16=0;
 tiemFCPS17=0;
 tiemFCPS18=0;
 uhFCPS16=0;
 uhFCPS17=0;
 uhFCPS18=0;
 
 tiemFCPS19=0;
 tiemFCPS20=0;
 tiemFCPS21=0;
 uhFCPS19=0;
 uhFCPS20=0;
 uhFCPS21=0;
 
 tiemFCPS22=0;
 tiemFCPS23=0;
 tiemFCPS24=0;
 uhFCPS22=0;
 uhFCPS23=0;
 uhFCPS24=0;
 
 tiemFCPS25=0;
 tiemFCPS26=0;
 tiemFCPS27=0;
 uhFCPS25=0;
 uhFCPS26=0;
 uhFCPS27=0;
 
 tiemFCPS28=0;
 tiemFCPS29=0;
 tiemFCPS30=0;
 uhFCPS28=0;
 uhFCPS29=0;
 uhFCPS30=0;
 
 tiemFCPS31=0;
 tiemFCPS32=0;
 tiemFCPS33=0;
 uhFCPS31=0;
 uhFCPS32=0;
 uhFCPS33=0;
 
 tiemFCPS34=0;
 tiemFCPS35=0;
 tiemFCPS36=0;
 uhFCPS34=0;
 uhFCPS35=0;
 uhFCPS36=0;
 
 tiemFCPS37=0;
 tiemFCPS38=0;
 tiemFCPS39=0;
 uhFCPS37=0;
 uhFCPS38=0;
 uhFCPS39=0;
 
 tiemFCPS40=0;
 tiemFCPS41=0;
 tiemFCPS42=0;
 uhFCPS40=0;
 uhFCPS41=0;
 uhFCPS42=0;
 
 tiemFCPS43=0;
 tiemFCPS44=0;
 tiemFCPS45=0;
 uhFCPS43=0;
 uhFCPS44=0;
 uhFCPS45=0;
 
 tiemFCPS46=0;
 tiemFCPS47=0;
 tiemFCPS48=0;
 uhFCPS46=0;
 uhFCPS47=0;
 uhFCPS48=0;
 
 tiemFCPS49=0;
 tiemFCPS50=0;
 tiemFCPS51=0;
 uhFCPS49=0;
 uhFCPS50=0;
 uhFCPS51=0;
 
 
 
 //--------------------------------------S2A------------------------
 tiemS1=0;
 tiemS2=0;
 tiemS3=0;
 uhS1=0;
 uhS2=0;
 uhS3=0;
 
 tiemS4=0;
 tiemS5=0;
 tiemS6=0;
 uhS4=0;
 uhS5=0;
 uhS6=0;
 
 tiemS7=0;
 tiemS8=0;
 tiemS9=0;
 uhS7=0;
 uhS8=0;
 uhS9=0;
 
 tiemS10=0;
 tiemS11=0;
 tiemS12=0;
 uhS10=0;
 uhS11=0;
 uhS12=0;
 
 tiemS13=0;
 tiemS14=0;
 tiemS15=0;
 uhS13=0;
 uhS14=0;
 uhS15=0;
 
 tiemS16=0;
 tiemS17=0;
 tiemS18=0;
 uhS16=0;
 uhS17=0;
 uhS18=0;
 
 tiemS19=0;
 tiemS20=0;
 tiemS21=0;
 uhS19=0;
 uhS20=0;
 uhS21=0;
 
 tiemS22=0;
 tiemS23=0;
 tiemS24=0;
 uhS22=0;
 uhS23=0;
 uhS24=0;
 
 tiemS25=0;
 tiemS26=0;
 tiemS27=0;
 uhS25=0;
 uhS26=0;
 uhS27=0;
 
 tiemS28=0;
 tiemS29=0;
 tiemS30=0;
 uhS28=0;
 uhS29=0;
 uhS30=0;
 
 tiemS31=0;
 tiemS32=0;
 tiemS33=0;
 uhS31=0;
 uhS32=0;
 uhS33=0;
 
 tiemS34=0;
 tiemS35=0;
 tiemS36=0;
 uhS34=0;
 uhS35=0;
 uhS36=0;
 
 tiemS37=0;
 tiemS38=0;
 tiemS39=0;
 uhS37=0;
 uhS38=0;
 uhS39=0;
 
 tiemS40=0;
 tiemS41=0;
 tiemS42=0;
 uhS40=0;
 uhS41=0;
 uhS42=0;
 
 tiemS43=0;
 tiemS44=0;
 tiemS45=0;
 uhS43=0;
 uhS44=0;
 uhS45=0;
 
 tiemS46=0;
 tiemS47=0;
 tiemS48=0;
 uhS46=0;
 uhS47=0;
 uhS48=0;
 
 tiemS49=0;
 tiemS50=0;
 tiemS51=0;
 uhS49=0;
 uhS50=0;
 uhS51=0;
 
 //--------------------------S3A-----------------------------
 
 tiemSS1=0;
 tiemSS2=0;
 tiemSS3=0;
 uhSS1=0;
 uhSS2=0;
 uhSS3=0;
 
 
 tiemSS4=0;
 tiemSS5=0;
 tiemSS6=0;
 uhSS4=0;
 uhSS5=0;
 uhSS6=0;
 
 
 tiemSS7=0;
 tiemSS8=0;
 tiemSS9=0;
 uhSS7=0;
 uhSS8=0;
 uhSS9=0;
 
 
 tiemSS10=0;
 tiemSS11=0;
 tiemSS12=0;
 uhSS10=0;
 uhSS11=0;
 uhSS12=0;
 
 
 tiemSS13=0;
 tiemSS14=0;
 tiemSS15=0;
 uhSS13=0;
 uhSS14=0;
 uhSS15=0;
 
 
 tiemSS16=0;
 tiemSS17=0;
 tiemSS18=0;
 uhSS16=0;
 uhSS17=0;
 uhSS18=0;
 
 
 tiemSS19=0;
 tiemSS20=0;
 tiemSS21=0;
 uhSS19=0;
 uhSS20=0;
 uhSS21=0;
 
 
 tiemSS22=0;
 tiemSS23=0;
 tiemSS24=0;
 uhSS22=0;
 uhSS23=0;
 uhSS24=0;
 
 
 tiemSS25=0;
 tiemSS26=0;
 tiemSS27=0;
 uhSS25=0;
 uhSS26=0;
 uhSS27=0;
 
 
 tiemSS28=0;
 tiemSS29=0;
 tiemSS30=0;
 uhSS28=0;
 uhSS29=0;
 uhSS30=0;
 
 tiemSS31=0;
 tiemSS32=0;
 tiemSS33=0;
 uhSS31=0;
 uhSS32=0;
 uhSS33=0;
 
 tiemSS34=0;
 tiemSS35=0;
 tiemSS36=0;
 uhSS34=0;
 uhSS35=0;
 uhSS36=0;
 
 tiemSS37=0;
 tiemSS38=0;
 tiemSS39=0;
 uhSS37=0;
 uhSS38=0;
 uhSS39=0;
 
 tiemSS40=0;
 tiemSS41=0;
 tiemSS42=0;
 uhSS40=0;
 uhSS41=0;
 uhSS42=0;
 
 tiemSS43=0;
 tiemSS44=0;
 tiemSS45=0;
 uhSS43=0;
 uhSS44=0;
 uhSS45=0;
 
 tiemSS46=0;
 tiemSS47=0;
 tiemSS48=0;
 uhSS46=0;
 uhSS47=0;
 uhSS48=0;
 
 tiemSS49=0;
 tiemSS50=0;
 tiemSS51=0;
 uhSS49=0;
 uhSS50=0;
 uhSS51=0;
 
 
 
 //----------------------PE--------------------------------
 
 tiemPE1=0;
 tiemPE2=0;
 tiemPE3=0;
 uhPE1=0;
 uhPE2=0;
 uhPE3=0;
 
 
 tiemPE4=0;
 tiemPE5=0;
 tiemPE6=0;
 uhPE4=0;
 uhPE5=0;
 uhPE6=0;
 
 
 tiemPE7=0;
 tiemPE8=0;
 tiemPE9=0;
 uhPE7=0;
 uhPE8=0;
 uhPE9=0;
 
 
 tiemPE10=0;
 tiemPE11=0;
 tiemPE12=0;
 uhPE10=0;
 uhPE11=0;
 uhPE12=0;
 
 
 tiemPE13=0;
 tiemPE14=0;
 tiemPE15=0;
 uhPE13=0;
 uhPE14=0;
 uhPE15=0;
 
 
 tiemPE16=0;
 tiemPE17=0;
 tiemPE18=0;
 uhPE16=0;
 uhPE17=0;
 uhPE18=0;
 
 
 tiemPE19=0;
 tiemPE20=0;
 tiemPE21=0;
 uhPE19=0;
 uhPE20=0;
 uhPE21=0;
 
 
 tiemPE22=0;
 tiemPE23=0;
 tiemPE24=0;
 uhPE22=0;
 uhPE23=0;
 uhPE24=0;
 
 
 tiemPE25=0;
 tiemPE26=0;
 tiemPE27=0;
 uhPE25=0;
 uhPE26=0;
 uhPE27=0;
 
 
 tiemPE28=0;
 tiemPE29=0;
 tiemPE30=0;
 uhPE28=0;
 uhPE29=0;
 uhPE30=0;
 
 tiemPE31=0;
 tiemPE32=0;
 tiemPE33=0;
 uhPE31=0;
 uhPE32=0;
 uhPE33=0;
 
 tiemPE34=0;
 tiemPE35=0;
 tiemPE36=0;
 uhPE34=0;
 uhPE35=0;
 uhPE36=0;
 
 tiemPE37=0;
 tiemPE38=0;
 tiemPE39=0;
 uhPE37=0;
 uhPE38=0;
 uhPE39=0;
 
 tiemPE40=0;
 tiemPE41=0;
 tiemPE42=0;
 uhPE40=0;
 uhPE41=0;
 uhPE42=0;
 
 tiemPE43=0;
 tiemPE44=0;
 tiemPE45=0;
 uhPE43=0;
 uhPE44=0;
 uhPE45=0;
 
 tiemPE46=0;
 tiemPE47=0;
 tiemPE48=0;
 uhPE46=0;
 uhPE47=0;
 uhPE48=0;
 
 tiemPE49=0;
 tiemPE50=0;
 tiemPE51=0;
 uhPE49=0;
 uhPE50=0;
 uhPE51=0;
 
   //------------------------------------recubridora-------------------------
 
   tiemR1=0;
   tiemR2=0;
   tiemR3=0;
   uhR1=0;
   uhR2=0;
   uhR3=0;
 
   tiemR4=0;
   tiemR5=0;
   tiemR6=0;
   uhR4=0;
   uhR5=0;
   uhR6=0;
 
   tiemR7=0;
   tiemR8=0;
   tiemR9=0;
   uhR7=0;
   uhR8=0;
   uhR9=0;
 
   tiemR10=0;
   tiemR11=0;
   tiemR12=0;
   uhR10=0;
   uhR11=0;
   uhR12=0;
 
   tiemR13=0;
   tiemR14=0;
   tiemR15=0;
   uhR13=0;
   uhR14=0;
   uhR15=0;
 
   tiemR16=0;
   tiemR17=0;
   tiemR18=0;
   uhR16=0;
   uhR17=0;
   uhR18=0;
 
   tiemR19=0;
   tiemR20=0;
   tiemR21=0;
   uhR19=0;
   uhR20=0;
   uhR21=0;
 
   tiemR22=0;
   tiemR23=0;
   tiemR24=0;
   uhR22=0;
   uhR23=0;
   uhR24=0;
 
   tiemR25=0;
   tiemR26=0;
   tiemR27=0;
   uhR25=0;
   uhR26=0;
   uhR27=0;
 
   tiemR28=0;
   tiemR29=0;
   tiemR30=0;
   uhR28=0;
   uhR29=0;
   uhR30=0;
 
   tiemR31=0;
   tiemR32=0;
   tiemR33=0;
   uhR31=0;
   uhR32=0;
   uhR33=0;
 
   tiemR34=0;
   tiemR35=0;
   tiemR36=0;
   uhR34=0;
   uhR35=0;
   uhR36=0;
 
   tiemR37=0;
   tiemR38=0;
   tiemR39=0;
   uhR37=0;
   uhR38=0;
   uhR39=0;
 
   tiemR40=0;
   tiemR41=0;
   tiemR42=0;
   uhR40=0;
   uhR41=0;
   uhR42=0;
 
   tiemR43=0;
   tiemR44=0;
   tiemR45=0;
   uhR43=0;
   uhR44=0;
   uhR45=0;
 
   tiemR46=0;
   tiemR47=0;
   tiemR48=0;
   uhR46=0;
   uhR47=0;
   uhR48=0;
 
   tiemR49=0;
   tiemR50=0;
   tiemR51=0;
   uhR49=0;
   uhR50=0;
   uhR51=0;
 
   //--------fsps----------
   tiemFSPS1=0;
   tiemFSPS2=0;
   tiemFSPS3=0;
   uhFSPS1=0;
   uhFSPS2=0;
   uhFSPS3=0;
 
   tiemFSPS4=0;
   tiemFSPS5=0;
   tiemFSPS6=0;
   uhFSPS4=0;
   uhFSPS5=0;
   uhFSPS6=0;
 
   tiemFSPS7=0;
   tiemFSPS8=0;
   tiemFSPS9=0;
   uhFSPS7=0;
   uhFSPS8=0;
   uhFSPS9=0;
 
   tiemFSPS10=0;
   tiemFSPS11=0;
   tiemFSPS12=0;
   uhFSPS10=0;
   uhFSPS11=0;
   uhFSPS12=0;
 
   tiemFSPS13=0;
   tiemFSPS14=0;
   tiemFSPS15=0;
   uhFSPS13=0;
   uhFSPS14=0;
   uhFSPS15=0;
 
   tiemFSPS16=0;
   tiemFSPS17=0;
   tiemFSPS18=0;
   uhFSPS16=0;
   uhFSPS17=0;
   uhFSPS18=0;
 
   tiemFSPS19=0;
   tiemFSPS20=0;
   tiemFSPS21=0;
   uhFSPS19=0;
   uhFSPS20=0;
   uhFSPS21=0;
 
   tiemFSPS22=0;
   tiemFSPS23=0;
   tiemFSPS24=0;
   uhFSPS22=0;
   uhFSPS23=0;
   uhFSPS24=0;
 
   tiemFSPS25=0;
   tiemFSPS26=0;
   tiemFSPS27=0;
   uhFSPS25=0;
   uhFSPS26=0;
   uhFSPS27=0;
 
   tiemFSPS28=0;
   tiemFSPS29=0;
   tiemFSPS30=0;
   uhFSPS28=0;
   uhFSPS29=0;
   uhFSPS30=0;
 
   tiemFSPS31=0;
   tiemFSPS32=0;
   tiemFSPS33=0;
   uhFSPS31=0;
   uhFSPS32=0;
   uhFSPS33=0;
 
   tiemFSPS34=0;
   tiemFSPS35=0;
   tiemFSPS36=0;
   uhFSPS34=0;
   uhFSPS35=0;
   uhFSPS36=0;
 
   tiemFSPS37=0;
   tiemFSPS38=0;
   tiemFSPS39=0;
   uhFSPS37=0;
   uhFSPS38=0;
   uhFSPS39=0;
 
   tiemFSPS40=0;
   tiemFSPS41=0;
   tiemFSPS42=0;
   uhFSPS40=0;
   uhFSPS41=0;
   uhFSPS42=0;
 
   tiemFSPS43=0;
   tiemFSPS44=0;
   tiemFSPS45=0;
   uhFSPS43=0;
   uhFSPS44=0;
   uhFSPS45=0;
 
   tiemFSPS46=0;
   tiemFSPS47=0;
   tiemFSPS48=0;
   uhFSPS46=0;
   uhFSPS47=0;
   uhFSPS48=0;
 
   tiemFSPS49=0;
   tiemFSPS50=0;
   tiemFSPS51=0;
   uhFSPS49=0;
   uhFSPS50=0;
   uhFSPS51=0;
 
   //-----------B--------------
   tiemB1=0;
   tiemB2=0;
   tiemB3=0;
   uhB1=0;
   uhB2=0;
   uhB3=0;
 
   tiemB4=0;
   tiemB5=0;
   tiemB6=0;
   uhB4=0;
   uhB5=0;
   uhB6=0;
 
   tiemB7=0;
   tiemB8=0;
   tiemB9=0;
   uhB7=0;
   uhB8=0;
   uhB9=0;
 
   tiemB10=0;
   tiemB11=0;
   tiemB12=0;
   uhB10=0;
   uhB11=0;
   uhB12=0;
 
   tiemB13=0;
   tiemB14=0;
   tiemB15=0;
   uhB13=0;
   uhB14=0;
   uhB15=0;
 
   tiemB16=0;
   tiemB17=0;
   tiemB18=0;
   uhB16=0;
   uhB17=0;
   uhB18=0;
 
   tiemB19=0;
   tiemB20=0;
   tiemB21=0;
   uhB19=0;
   uhB20=0;
   uhB21=0;
 
   tiemB22=0;
   tiemB23=0;
   tiemB24=0;
   uhB22=0;
   uhB23=0;
   uhB24=0;
 
   tiemB25=0;
   tiemB26=0;
   tiemB27=0;
   uhB25=0;
   uhB26=0;
   uhB27=0;
 
   tiemB28=0;
   tiemB29=0;
   tiemB30=0;
   uhB28=0;
   uhB29=0;
   uhB30=0;
 
   tiemB31=0;
   tiemB32=0;
   tiemB33=0;
   uhB31=0;
   uhB32=0;
   uhB33=0;
 
   tiemB34=0;
   tiemB35=0;
   tiemB36=0;
   uhB34=0;
   uhB35=0;
   uhB36=0;
 
   tiemB37=0;
   tiemB38=0;
   tiemB39=0;
   uhB37=0;
   uhB38=0;
   uhB39=0;
 
   tiemB40=0;
   tiemB41=0;
   tiemB42=0;
   uhB40=0;
   uhB41=0;
   uhB42=0;
 
   tiemB43=0;
   tiemB44=0;
   tiemB45=0;
   uhB43=0;
   uhB44=0;
   uhB45=0;
 
   tiemB46=0;
   tiemB47=0;
   tiemB48=0;
   uhB46=0;
   uhB47=0;
   uhB48=0;
 
   tiemB49=0;
   tiemB50=0;
   tiemB51=0;
   uhB49=0;
   uhB50=0;
   uhB51=0;
 
   //------------MT--------------
   tiemMT1=0;
   tiemMT2=0;
   tiemMT3=0;
   uhMT1=0;
   uhMT2=0;
   uhMT3=0;
 
   tiemMT4=0;
   tiemMT5=0;
   tiemMT6=0;
   uhMT4=0;
   uhMT5=0;
   uhMT6=0;
 
   tiemMT7=0;
   tiemMT8=0;
   tiemMT9=0;
   uhMT7=0;
   uhMT8=0;
   uhMT9=0;
 
   tiemMT10=0;
   tiemMT11=0;
   tiemMT12=0;
   uhMT10=0;
   uhMT11=0;
   uhMT12=0;
 
   tiemMT13=0;
   tiemMT14=0;
   tiemMT15=0;
   uhMT13=0;
   uhMT14=0;
   uhMT15=0;
 
   tiemMT16=0;
   tiemMT17=0;
   tiemMT18=0;
   uhMT16=0;
   uhMT17=0;
   uhMT18=0;
 
   tiemMT19=0;
   tiemMT20=0;
   tiemMT21=0;
   uhMT19=0;
   uhMT20=0;
   uhMT21=0;
 
   tiemMT22=0;
   tiemMT23=0;
   tiemMT24=0;
   uhMT22=0;
   uhMT23=0;
   uhMT24=0;
 
   tiemMT25=0;
   tiemMT26=0;
   tiemMT27=0;
   uhMT25=0;
   uhMT26=0;
   uhMT27=0;
 
   tiemMT28=0;
   tiemMT29=0;
   tiemMT30=0;
   uhMT28=0;
   uhMT29=0;
   uhMT30=0;
 
   tiemMT31=0;
   tiemMT32=0;
   tiemMT33=0;
   uhMT31=0;
   uhMT32=0;
   uhMT33=0;
 
   tiemMT34=0;
   tiemMT35=0;
   tiemMT36=0;
   uhMT34=0;
   uhMT35=0;
   uhMT36=0;
 
   tiemMT37=0;
   tiemMT38=0;
   tiemMT39=0;
   uhMT37=0;
   uhMT38=0;
   uhMT39=0;
 
   tiemMT40=0;
   tiemMT41=0;
   tiemMT42=0;
   uhMT40=0;
   uhMT41=0;
   uhMT42=0;
 
   tiemMT43=0;
   tiemMT44=0;
   tiemMT45=0;
   uhMT43=0;
   uhMT44=0;
   uhMT45=0;
 
   tiemMT46=0;
   tiemMT47=0;
   tiemMT48=0;
   uhMT46=0;
   uhMT47=0;
   uhMT48=0;
 
   tiemMT49=0;
   tiemMT50=0;
   tiemMT51=0;
   uhMT49=0;
   uhMT50=0;
   uhMT51=0;
 
   //-----------O------------------
 
   tiemO1=0;
   tiemO2=0;
   tiemO3=0;
   uhO1=0;
   uhO2=0;
   uhO3=0;
 
   tiemO4=0;
   tiemO5=0;
   tiemO6=0;
   uhO4=0;
   uhO5=0;
   uhO6=0;
 
   tiemO7=0;
   tiemO8=0;
   tiemO9=0;
   uhO7=0;
   uhO8=0;
   uhO9=0;
 
   tiemO10=0;
   tiemO11=0;
   tiemO12=0;
   uhO10=0;
   uhO11=0;
   uhO12=0;
 
   tiemO13=0;
   tiemO14=0;
   tiemO15=0;
   uhO13=0;
   uhO14=0;
   uhO15=0;
 
   tiemO16=0;
   tiemO17=0;
   tiemO18=0;
   uhO16=0;
   uhO17=0;
   uhO18=0;
 
   tiemO19=0;
   tiemO20=0;
   tiemO21=0;
   uhO19=0;
   uhO20=0;
   uhO21=0;
 
   tiemO22=0;
   tiemO23=0;
   tiemO24=0;
   uhO22=0;
   uhO23=0;
   uhO24=0;
 
   tiemO25=0;
   tiemO26=0;
   tiemO27=0;
   uhO25=0;
   uhO26=0;
   uhO27=0;
 
   tiemO28=0;
   tiemO29=0;
   tiemO30=0;
   uhO28=0;
   uhO29=0;
   uhO30=0;
 
   tiemO31=0;
   tiemO32=0;
   tiemO33=0;
   uhO31=0;
   uhO32=0;
   uhO33=0;
 
   tiemO34=0;
   tiemO35=0;
   tiemO36=0;
   uhO34=0;
   uhO35=0;
   uhO36=0;
 
   tiemO37=0;
   tiemO38=0;
   tiemO39=0;
   uhO37=0;
   uhO38=0;
   uhO39=0;
 
   tiemO40=0;
   tiemO41=0;
   tiemO42=0;
   uhO40=0;
   uhO41=0;
   uhO42=0;
 
   tiemO43=0;
   tiemO44=0;
   tiemO45=0;
   uhO43=0;
   uhO44=0;
   uhO45=0;
 
   tiemO46=0;
   tiemO47=0;
   tiemO48=0;
   uhO46=0;
   uhO47=0;
   uhO48=0;
 
   tiemO49=0;
   tiemO50=0;
   tiemO51=0;
   uhO49=0;
   uhO50=0;
   uhO51=0;

   calculoPorcenBoto=0;
   calculoPorcenFCps=0;
   calculoPorcenFSPS=0;
   calculoPorcenManu=0;
   calculoPorcenO=0;
   calculoPorcenPE=0;
   calculoPorcenPla=0;
   calculoPorcenRR2A=0;
   calculoPorcenRR3A=0;
   calculoPorcenRecubri=0;
   calculoPorcenS2A=0;
   calculoPorcenS3A=0;

   loteBoto=0;
   loteFcps=0;
   loteFsps=0;
   loteMt=0;
   loteO=0;
   lotePE=0;
   lotePlana=0;
   loteR=0;
   loteRR2A=0;
   loteRR3A=0;
   loteS2A=0;
   loteS3A=0;

   uniR=0;
   uniB=0;
   uniMT=0;
   uniP=0;
   uniRR2A=0;
   uniRR3A=0;
   uniFCPS=0;
   uniFSPS=0;
   uniO=0;
   uniS2A=0;
   uniS3A=0;
   uniPE=0;

   canti=0;
   UniBoto=0;
   UniFcps=0;
   UniFsps=0;
   UniMt=0;
   UniO=0;
   UniPlanita=0;
   UniPE=0;
   UniRecu=0;
   UniRR2A=0;
   UniRR3A=0;
   Unis2a=0;
   Unis3a=0;
   uni=0;
   tiempoTotalizimo=0;

   porcentajeTiempo=0;

   porcparciaPe=0;
   porcparciaS3a=0;
   porcparciaS2A=0;
   porcparciaO=0;
   porcparciaFsps=0;
   porcparciaFcps=0;
   porcparciaRR3=0;
   porcparciaRR2=0;
   porcparciaR=0;
   porcparciaB=0;
   porcparciaMT=0;
   porcparciaP=0;
 
 
   tiemB=0;
  tiemR=0;
  tiemMT=0;
  tiempoTotal=0; tiemP=0; tiemRR2A=0; tiemRR3A=0; tiemFCPS=0; tiemFSPS=0; tiemO=0; tiemS2A=0; tiemS3A=0; 
  tiemPE=0;
    var tabl=document.getElementById("tabla");
    sumaTiem=0;
      var consultaOP=document.getElementById("buscaCedu").value;

    db.collection("controladministradores").where("referencia", "==", consultaOP)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           // var ur=`${doc.data().UrlFrente}`;
         var mq=`${doc.data().color}`;
          var tiem=Number(`${doc.data().tiempo}`);
          // console.log(maqu);
          if(mq=="R"){
              tiemR=tiem+tiemR;
          }
          if(mq=="B"){
            tiemB=tiem+tiemB;
        }
        if(mq=="M.T"){
            tiemMT=tiem+tiemMT;
        }

        if(mq=="P1A"){
            tiemP=tiem+tiemP;
        }
        if(mq=="RR2A"){
          tiemRR2A=tiem+tiemRR2A;
      }
      if(mq=="RR3A"){
          tiemRR3A=tiem+tiemRR3A;
      }
       if(mq=="F.C.P.S"){
              tiemFCPS=tiem+tiemFCPS;
          }
          if(mq=="F.S.P.S"){
            tiemFSPS=tiem+tiemFSPS;
        }
        if(mq=="O"){
            tiemO=tiem+tiemO;
        }
        if(mq=="S2A"){
              tiemS2A=tiem+tiemS2A;
          }
          if(mq=="S3A"){
            tiemS3A=tiem+tiemS3A;
        }
        if(mq=="P.E"){
            tiemPE=tiem+tiemPE;
        }
       
        tiempoTotal=tiemR+tiemB+tiemMT+tiemP+tiemRR2A+tiemRR3A+tiemFCPS+tiemFSPS+tiemO+tiemS2A+tiemS3A+tiemPE;

        //porcparciaR=(tiemR/60)/tiempoTotal;


      // console.log("TIEMPO TOTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL: "+tiempoTotal);
       
      document.getElementById("inR").value=(tiemR/60).toFixed(2)+"min";
      document.getElementById("inB").value=(tiemB/60).toFixed(2)+"min";
      document.getElementById("inMT").value=(tiemMT/60).toFixed(2)+"min";

      document.getElementById("inP").value=(tiemP/60).toFixed(2)+"min";
      document.getElementById("inRR2").value=(tiemRR2A/60).toFixed(2)+"min";
      document.getElementById("inRR3").value=(tiemRR3A/60).toFixed(2)+"min";

      document.getElementById("inFCPS").value=(tiemFCPS/60).toFixed(2)+"min";
      document.getElementById("inFSPS").value=(tiemFSPS/60).toFixed(2)+"min";
      document.getElementById("inO").value=(tiemO/60).toFixed(2)+"min";

      document.getElementById("inS2A").value=(tiemS2A/60).toFixed(2)+"min";
      document.getElementById("inS3A").value=(tiemS3A/60).toFixed(2)+"min";
      document.getElementById("inPE").value=(tiemPE/60).toFixed(2)+"min";
      
      document.getElementById("inTTP").value=(tiempoTotal/60).toFixed(2)+"min";

     





      db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
               canti=`${doc.data().Cantidad}`;
               consultaref=`${doc.data().Referenc}`;

              Xcamisa=(tiempoTotal/60)/canti;

              document.getElementById("inPromedio").value=Xcamisa.toFixed(2);

              //------------------------------------------------------------------------

              db.collection("FichaTecni").where("Referencia", "==", consultaref)
              .get()
              .then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {
                      // doc.data() is never undefined for query doc snapshots
                      console.log(doc.id, " => ", doc.data());
                      var operacionesxCami=`${doc.data().TotalOperaxCamisa}`;
                      consultaClient=`${doc.data().Cliente}`;
                      var Incremen=Number(`${doc.data().TiempoTotal}`);

                      tiempoTotalizimo=Incremen*canti;
                 
                    

                     // console.log("totalilizimooooooooooooooooooooooo"+tiempoTotalizimo);
                  //   console.log("el totaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal:"+tiempoTotal);


                     porcparciaR=(tiemR*100)/tiempoTotal;
                     document.getElementById("porcenRecubri").value=porcparciaR.toFixed(2)+"%";

                     porcparciaB=(tiemB*100)/tiempoTotal;
                     document.getElementById("porcenBotonadora").value=porcparciaB.toFixed(2)+"%";

                     porcparciaMT=(tiemMT*100)/tiempoTotal;
                     document.getElementById("porcenManuali").value=porcparciaMT.toFixed(2)+"%";

                     porcparciaP=(tiemP*100)/tiempoTotal;
                     document.getElementById("porcenP1A").value=porcparciaP.toFixed(2)+"%";

                     //-----------------------------------------------------------------
                     porcparciaRR2=(tiemRR2A*100)/tiempoTotal;
                     document.getElementById("porcenRR2A").value=porcparciaRR2.toFixed(2)+"%";

                     porcparciaRR3=(tiemRR3A*100)/tiempoTotal;
                     document.getElementById("porcenRR3A").value=porcparciaRR3.toFixed(2)+"%";

                     porcparciaFcps=(tiemFCPS*100)/tiempoTotal;
                     document.getElementById("porcenFCPS").value=porcparciaFcps.toFixed(2)+"%";

                     porcparciaFsps=(tiemFSPS*100)/tiempoTotal;
                     document.getElementById("porcenFSPS").value=porcparciaFsps.toFixed(2)+"%";

                     //-----------------------------------------------------------------
                     porcparciaO=(tiemO*100)/tiempoTotal;
                     document.getElementById("porcenO").value=porcparciaO.toFixed(2)+"%";

                     porcparciaS2A=(tiemS2A*100)/tiempoTotal;
                     document.getElementById("porcenS2A").value=porcparciaS2A.toFixed(2)+"%";

                     porcparciaS3a=(tiemS3A*100)/tiempoTotal;
                     document.getElementById("porcenS3A").value=porcparciaS3a.toFixed(2)+"%";

                     porcparciaPe=(tiemPE*100)/tiempoTotal;
                     document.getElementById("porcenPE").value=porcparciaPe.toFixed(2)+"%";






                     porcentajeTiempo=((tiempoTotal/60)*100)/tiempoTotalizimo;

                     
                     document.getElementById("porcenTiempo").value=porcentajeTiempo.toFixed(2)+"%";

                      

                   //   console.log("operaciones:"+operacionesxCami);

                   TotalOpXRealizar=operacionesxCami*canti;
                  // console.log("siiiiii"+TotalOpXRealizar);

                   //-------------------------------verificacion maq---------------------
                   db.collection("FichaTecni").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
      
                   .get()
                   .then(function(querySnapshot) {
                       querySnapshot.forEach(function(doc) {
                           // doc.data() is never undefined for query doc snapshots
                           console.log(doc.id, " => ", doc.data());
                           //var ur=`${doc.data().UrlFrente}`;
                           //var tiem1=parseInt(`${doc.data().Estandar}`);
                           //var uh1=parseInt(`${doc.data().Unidad}`);
                          // var mq1=`${doc.data().Maquina}`;

                           UniBoto=`${doc.data().UnidadesB}`;
                           UniFcps=`${doc.data().UnidadesFCPS}`;
                           UniFsps=`${doc.data().UnidadesFSPS}`;
                           UniMt=`${doc.data().UnidadesMT}`;
                           UniO=`${doc.data().UnidadesO}`;
                           UniPlanita=`${doc.data().UnidadesP}`;
                           UniPE=`${doc.data().UnidadesPE}`;
                           UniRecu=`${doc.data().UnidadesR}`;
                           UniRR2A=`${doc.data().UnidadesRR2A}`;
                           UniRR3A=`${doc.data().UnidadesRR3A}`;
                           Unis2a=`${doc.data().UnidadesS2A}`;
                           Unis3a=`${doc.data().UnidadesS3A}`;


                         loteBoto=UniBoto*canti;
                         loteFcps=UniFcps*canti;
                         loteFsps=UniFsps*canti;
                         loteMt=UniMt*canti;
                         loteO=UniO*canti;
                         lotePlana=UniPlanita*canti;
                         lotePE=UniPE*canti;
                         loteR=UniRecu*canti;
                         loteRR2A=UniRR2A*canti;
                         loteRR3A=UniRR3A*canti;
                         loteS2A=Unis2a*canti;
                         loteS3A=Unis3a*canti;








                         


                         //console.log("el lote de botonadora es de:"+loteBoto);
                        // console.log(" loteeeeeeeeeeeeeeeeeeeeeeeeeeeeeee:"+UniBoto);
               
                



                        /*   db.collection("FichaTecni2").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
      
                           .get()
                           .then(function(querySnapshot) {
                               querySnapshot.forEach(function(doc) {
                                   // doc.data() is never undefined for query doc snapshots
                                   console.log(doc.id, " => ", doc.data());
                                   //var ur=`${doc.data().UrlFrente}`;
                                   var tiem2=parseInt(`${doc.data().Estandar}`);
                                   var uh2=parseInt(`${doc.data().Unidad}`);
                                   var mq2=`${doc.data().Maquina}`;
                       
                        
                                   if("P1A"==mq2){
                        
                                     mqP2=mq2;
                                     uhP2=uh2;
                                     tiemP2=tiem2;
                                   }
                        
                                   if("R"==mq2){
                        
                                     mqR2=mq2;
                                     uhR2=uh2;
                                     tiemR2=tiem2;
                                   }
                        
                                   if("RR2A"==mq2){
                        
                                     mqRR2=mq2;
                                     uhRR2=uh2;
                                     tiemRR2=tiem2;
                                   }
                                   if("RR3A"==mq2){
                        
                                     mqRRR2=mq2;
                                     uhRRR2=uh2;
                                     tiemRRR2=tiem2;
                                   }
                        
                                   if("F.C.P.S"==mq2){
                        
                                     mqFCPS2=mq2;
                                     uhFCPS2=uh2;
                                     tiemFCPS2=tiem2;
                                   }
                                   if("F.S.P.S"==mq2){
                        
                                     mqFSPS2=mq2;
                                     uhFSPS2=uh2;
                                     tiemFSPS2=tiem2;
                                   }
                                   if("B"==mq2){
                        
                                     mqB2=mq2;
                                     uhB2=uh2;
                                     tiemB2=tiem2;
                                   }
                                   if("O"==mq2){
                        
                                     mqO2=mq2;
                                     uhO2=uh2;
                                     tiemO2=tiem2;
                                   }
                                   if("M.T"==mq2){
                        
                                     mqMT2=mq2;
                                     uhMT2=uh2;
                                     tiemMT2=tiem2;
                                   }
                                   if("S2A"==mq2){
                        
                                     mqS2=mq2;
                                     uhS2=uh2;
                                     tiemS2=tiem2;
                                   }
                        
                                   if("S3A"==mq2){
                        
                                     mqSS2=mq2;
                                     uhSS2=uh2;
                                     tiemSS2=tiem2;
                                   }
                        
                                   if("P.E"==mq2){
                        
                                     mqPE2=mq2;
                                     uhPE2=uh2;
                                     tiemPE2=tiem2;
                                   }
                                   db.collection("FichaTecni3").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
    //.where("Maquina", "==", "P1A")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //var ur=`${doc.data().UrlFrente}`;
            var tiem3=parseInt(`${doc.data().Estandar}`);
            var uh3=parseInt(`${doc.data().Unidad}`);
            var mq3=`${doc.data().Maquina}`;
    
    
    
            if("P1A"==mq3){
    
              mqP3=mq3;
              uhP3=uh3;
              tiemP3=tiem3;
            }
    
            if("R"==mq3){
    
              mqR3=mq3;
              uhR3=uh3;
              tiemR3=tiem3;
            }
    
            if("RR2A"==mq3){
    
              mqRR3=mq3;
              uhRR3=uh3;
              tiemRR3=tiem3;
            }
            if("RR3A"==mq3){
    
              mqRRR3=mq3;
              uhRRR3=uh3;
              tiemRRR3=tiem3;
            }
    
            if("F.C.P.S"==mq3){
    
              mqFCPS3=mq3;
              uhFCPS3=uh3;
              tiemFCPS3=tiem3;
            }
            if("F.S.P.S"==mq3){
    
              mqFSPS3=mq3;
              uhFSPS3=uh3;
              tiemFSPS3=tiem3;
            }
            if("B"==mq3){
    
              mqB3=mq3;
              uhB3=uh3;
              tiemB3=tiem3;
            }
            if("O"==mq3){
    
              mqO3=mq3;
              uhO3=uh3;
              tiemO3=tiem3;
            }
            if("M.T"==mq3){
    
              mqMT3=mq3;
              uhMT3=uh3;
              tiemMT3=tiem3;
            }
            if("S2A"==mq3){
    
              mqS3=mq3;
              uhS3=uh3;
              tiemS3=tiem3;
            }
    
            if("S3A"==mq3){
    
              mqSS3=mq3;
              uhSS3=uh3;
              tiemSS3=tiem3;
            }
    
            if("P.E"==mq3){
    
              mqPE3=mq3;
              uhPE3=uh3;
              tiemPE3=tiem3;
            }
    
    
            
          
          
    
            db.collection("FichaTecni4").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
    //.where("Maquina", "==", "P1A")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //var ur=`${doc.data().UrlFrente}`;
            var tiem4=parseInt(`${doc.data().Estandar}`);
            var uh4=parseInt(`${doc.data().Unidad}`);
            var mq4=`${doc.data().Maquina}`;
    
    
    
            if("P1A"==mq4){
    
              mqP4=mq4;
              uhP4=uh4;
              tiemP4=tiem4;
            }
    
            if("R"==mq4){
    
              mqR4=mq4;
              uhR4=uh4;
              tiemR4=tiem4;
            }
    
            if("RR2A"==mq4){
    
              mqRR4=mq4;
              uhRR4=uh4;
              tiemRR4=tiem4;
            }
            if("RR3A"==mq4){
    
              mqRRR4=mq4;
              uhRRR4=uh4;
              tiemRRR4=tiem4;
            }
    
            if("F.C.P.S"==mq4){
    
              mqFCPS4=mq4;
              uhFCPS4=uh4;
              tiemFCPS4=tiem4;
            }
            if("F.S.P.S"==mq4){
    
              mqFSPS4=mq4;
              uhFSPS4=uh4;
              tiemFSPS4=tiem4;
            }
            if("B"==mq4){
    
              mqB4=mq4;
              uhB4=uh4;
              tiemB4=tiem4;
            }
            if("O"==mq4){
    
              mqO4=mq4;
              uhO4=uh4;
              tiemO4=tiem4;
            }
            if("M.T"==mq4){
    
              mqMT4=mq4;
              uhMT4=uh4;
              tiemMT4=tiem4;
            }
            if("S2A"==mq4){
    
              mqS4=mq4;
              uhS4=uh4;
              tiemS4=tiem4;
            }
    
            if("S3A"==mq4){
    
              mqSS4=mq4;
              uhSS4=uh4;
              tiemSS4=tiem4;
            }
    
            if("P.E"==mq4){
    
              mqPE4=mq4;
              uhPE4=uh4;
              tiemPE4=tiem4;
            }
    
    
          
    
            db.collection("FichaTecni5").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
    //.where("Maquina", "==", "P1A")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //var ur=`${doc.data().UrlFrente}`;
            var tiem5=parseInt(`${doc.data().Estandar}`);
            var uh5=parseInt(`${doc.data().Unidad}`);
            var mq5=`${doc.data().Maquina}`;
    
            
    
    
            if("P1A"==mq5){
    
              mqP5=mq5;
              uhP5=uh5;
              tiemP5=tiem5;
            }
    
            if("R"==mq5){
    
              mqR5=mq5;
              uhR5=uh5;
              tiemR5=tiem5;
            }
    
            if("RR2A"==mq5){
    
              mqRR5=mq5;
              uhRR5=uh5;
              tiemRR5=tiem5;
            }
            if("RR3A"==mq5){
    
              mqRRR5=mq5;
              uhRRR5=uh5;
              tiemRRR5=tiem5;
            }
    
            if("F.C.P.S"==mq5){
    
              mqFCPS5=mq5;
              uhFCPS5=uh5;
              tiemFCPS5=tiem5;
            }
            if("F.S.P.S"==mq5){
    
              mqFSPS5=mq5;
              uhFSPS5=uh5;
              tiemFSPS5=tiem5;
            }
            if("B"==mq5){
    
              mqB5=mq5;
              uhB5=uh5;
              tiemB5=tiem5;
            }
            if("O"==mq5){
    
              mqO5=mq5;
              uhO5=uh5;
              tiemO5=tiem5;
            }
            if("M.T"==mq5){
    
              mqMT5=mq5;
              uhMT5=uh5;
              tiemMT5=tiem5;
            }
            if("S2A"==mq5){
    
              mqS5=mq5;
              uhS5=uh5;
              tiemS5=tiem5;
            }
    
            if("S3A"==mq5){
    
              mqSS5=mq5;
              uhSS5=uh5;
              tiemSS5=tiem5;
            }
    
            if("P.E"==mq5){
    
              mqPE5=mq5;
              uhPE5=uh5;
              tiemPE5=tiem5;
            }
    
                    
    
    
            
    
    
            
                  
            db.collection("FichaTecni6").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
            //.where("Maquina", "==", "P1A")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  //var ur=`${doc.data().UrlFrente}`;
                  var tiem6=parseInt(`${doc.data().Estandar}`);
                  var uh6=parseInt(`${doc.data().Unidad}`);
                  var mq6=`${doc.data().Maquina}`;
      
                  if("P1A"==mq6){
      
                    uhP6=uh6;
                    tiemP6=tiem6;
                  }
      
                  if("R"==mq6){
      
                    uhR6=uh6;
                    tiemR6=tiem6;
                  }
      
                  if("RR2A"==mq6){
      
                    uhRR6=uh6;
                    tiemRR6=tiem6;
                  }
                  if("RR3A"==mq6){
      
                    uhRRR6=uh6;
                    tiemRRR6=tiem6;
                  }
      
                  if("F.C.P.S"==mq6){
      
                    uhFCPS6=uh6;
                    tiemFCPS6=tiem6;
                  }
                  if("F.S.P.S"==mq6){
      
                    uhFSPS6=uh6;
                    tiemFSPS6=tiem6;
                  }
                  if("B"==mq6){
      
                    uhB6=uh6;
                    tiemB6=tiem6;
                  }
                  if("O"==mq6){
      
                    uhO6=uh6;
                    tiemO6=tiem6;
                  }
                  if("M.T"==mq6){
      
                    uhMT6=uh6;
                    tiemMT6=tiem6;
                  }
                  if("S2A"==mq6){
      
                    uhS6=uh6;
                    tiemS6=tiem6;
                  }
      
                  if("S3A"==mq6){
      
                    uhSS6=uh6;
                    tiemSS6=tiem6;
                  }
      
                  if("P.E"==mq6){
      
                    uhPE6=uh6;
                    tiemPE6=tiem6;
                  }
    
    
                 
    
                  
            db.collection("FichaTecni7").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
            //.where("Maquina", "==", "P1A")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  //var ur=`${doc.data().UrlFrente}`;
                  var tiem7=parseInt(`${doc.data().Estandar}`);
                  var uh7=parseInt(`${doc.data().Unidad}`);
                  var mq7=`${doc.data().Maquina}`;
      
                  if("P1A"==mq7){
      
                    uhP7=uh7;
                    tiemP7=tiem7;
                  }
      
                  if("R"==mq7){
      
                    uhR7=uh7;
                    tiemR7=tiem7;
                  }
      
                  if("RR2A"==mq7){
      
                    uhRR7=uh7;
                    tiemRR7=tiem7;
                  }
                  if("RR3A"==mq7){
      
                    uhRRR7=uh7;
                    tiemRRR7=tiem7;
                  }
      
                  if("F.C.P.S"==mq7){
      
                    uhFCPS7=uh7;
                    tiemFCPS7=tiem7;
                  }
                  if("F.S.P.S"==mq7){
      
                    uhFSPS7=uh7;
                    tiemFSPS7=tiem7;
                  }
                  if("B"==mq7){
      
                    uhB7=uh7;
                    tiemB7=tiem7;
                  }
                  if("O"==mq7){
      
                    uhO7=uh7;
                    tiemO7=tiem7;
                  }
                  if("M.T"==mq7){
      
                    uhMT7=uh7;
                    tiemMT7=tiem7;
                  }
                  if("S2A"==mq7){
      
                    uhS7=uh7;
                    tiemS7=tiem7;
                  }
      
                  if("S3A"==mq7){
      
                    uhSS7=uh7;
                    tiemSS7=tiem7;
                  }
      
                  if("P.E"==mq7){
      
                    uhPE7=uh7;
                    tiemPE7=tiem7;
                  }
                  
                  
    
                    db.collection("FichaTecni8").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
            //.where("Maquina", "==", "P1A")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  //var ur=`${doc.data().UrlFrente}`;
                  var tiem8=parseInt(`${doc.data().Estandar}`);
                  var uh8=parseInt(`${doc.data().Unidad}`);
                  var mq8=`${doc.data().Maquina}`;
      
                  if("P1A"==mq8){
      
                    uhP8=uh8;
                    tiemP8=tiem8;
                  }
      
                  if("R"==mq8){
      
                    uhR8=uh8;
                    tiemR8=tiem8;
                  }
      
                  if("RR2A"==mq8){
      
                    uhRR8=uh8;
                    tiemRR8=tiem8;
                  }
                  if("RR3A"==mq8){
      
                    uhRRR8=uh8;
                    tiemRRR8=tiem8;
                  }
      
                  if("F.C.P.S"==mq8){
      
                    uhFCPS8=uh8;
                    tiemFCPS8=tiem8;
                  }
                  if("F.S.P.S"==mq8){
      
                    uhFSPS8=uh8;
                    tiemFSPS8=tiem8;
                  }
                  if("B"==mq8){
      
                    uhB8=uh8;
                    tiemB8=tiem8;
                  }
                  if("O"==mq8){
      
                    uhO8=uh8;
                    tiemO8=tiem8;
                  }
                  if("M.T"==mq8){
      
                    uhMT8=uh8;
                    tiemMT8=tiem8;
                  }
                  if("S2A"==mq8){
      
                    uhS8=uh8;
                    tiemS8=tiem8;
                  }
      
                  if("S3A"==mq8){
      
                    uhSS8=uh8;
                    tiemSS8=tiem8;
                  }
      
                  if("P.E"==mq8){
      
                    uhPE8=uh8;
                    tiemPE8=tiem8;
                  }
    
                   db.collection("FichaTecni9").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
            //.where("Maquina", "==", "P1A")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  //var ur=`${doc.data().UrlFrente}`;
                  var tiem9=parseInt(`${doc.data().Estandar}`);
                  var uh9=parseInt(`${doc.data().Unidad}`);
                  var mq9=`${doc.data().Maquina}`;
      
                  if("P1A"==mq9){
      
                    uhP9=uh9;
                    tiemP9=tiem9;
                  }
      
                  if("R"==mq9){
      
                    uhR9=uh9;
                    tiemR9=tiem9;
                  }
      
                  if("RR2A"==mq9){
      
                    uhRR9=uh9;
                    tiemRR9=tiem9;
                  }
                  if("RR3A"==mq9){
      
                    uhRRR9=uh9;
                    tiemRRR9=tiem9;
                  }
      
                  if("F.C.P.S"==mq9){
      
                    uhFCPS9=uh9;
                    tiemFCPS9=tiem9;
                  }
                  if("F.S.P.S"==mq9){
      
                    uhFSPS9=uh9;
                    tiemFSPS9=tiem9;
                  }
                  if("B"==mq9){
      
                    uhB9=uh9;
                    tiemB9=tiem9;
                  }
                  if("O"==mq9){
      
                    uhO9=uh9;
                    tiemO9=tiem9;
                  }
                  if("M.T"==mq9){
      
                    uhMT9=uh9;
                    tiemMT9=tiem9;
                  }
                  if("S2A"==mq9){
      
                    uhS9=uh9;
                    tiemS9=tiem9;
                  }
      
                  if("S3A"==mq9){
      
                    uhSS9=uh9;
                    tiemSS9=tiem9;
                  }
      
                  if("P.E"==mq9){
      
                    uhPE9=uh9;
                    tiemPE9=tiem9;
                  }
    
                   db.collection("FichaTecni10").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
            //.where("Maquina", "==", "P1A")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  //var ur=`${doc.data().UrlFrente}`;
                  var tiem10=parseInt(`${doc.data().Estandar}`);
                  var uh10=parseInt(`${doc.data().Unidad}`);
                  var mq10=`${doc.data().Maquina}`;
      
                  if("P1A"==mq10){
      
                    uhP10=uh10;
                    tiemP10=tiem10;
                  }
      
                  if("R"==mq10){
      
                    uhR10=uh10;
                    tiemR10=tiem10;
                  }
      
                  if("RR2A"==mq10){
      
                    uhRR10=uh10;
                    tiemRR10=tiem10;
                  }
                  if("RR3A"==mq10){
      
                    uhRRR10=uh10;
                    tiemRRR10=tiem10;
                  }
      
                  if("F.C.P.S"==mq10){
      
                    uhFCPS10=uh10;
                    tiemFCPS10=tiem10;
                  }
                  if("F.S.P.S"==mq10){
      
                    uhFSPS10=uh10;
                    tiemFSPS10=tiem10;
                  }
                  if("B"==mq10){
      
                    uhB10=uh10;
                    tiemB10=tiem10;
                  }
                  if("O"==mq10){
      
                    uhO10=uh10;
                    tiemO10=tiem10;
                  }
                  if("M.T"==mq10){
      
                    uhMT10=uh10;
                    tiemMT10=tiem10;
                  }
                  if("S2A"==mq10){
      
                    uhS10=uh10;
                    tiemS10=tiem10;
                  }
      
                  if("S3A"==mq10){
      
                    uhSS10=uh10;
                    tiemSS10=tiem10;
                  }
      
                  if("P.E"==mq10){
      
                    uhPE10=uh10;
                    tiemPE10=tiem10;
                  }
    
                  db.collection("FichaTecni11").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                  //.where("Maquina", "==", "P1A")
                  .get()
                  .then(function(querySnapshot) {
                      querySnapshot.forEach(function(doc) {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc.id, " => ", doc.data());
                          //var ur=`${doc.data().UrlFrente}`;
                          var tiem11=parseInt(`${doc.data().Estandar}`);
                          var uh11=parseInt(`${doc.data().Unidad}`);
                          var mq11=`${doc.data().Maquina}`;
               
                          if("P1A"==mq11){
               
                            mqP11=mq11;
                            uhP11=uh11;
                            tiemP11=tiem11;
                          }
               
                          if("R"==mq11){
               
                            mqR11=mq11;
                            uhR11=uh11;
                            tiemR11=tiem11;
                          }
               
                          if("RR2A"==mq11){
               
                            mqRR11=mq11;
                            uhRR11=uh11;
                            tiemRR11=tiem11;
                          }
                          if("RR3A"==mq11){
               
                            mqRRR11=mq11;
                            uhRRR11=uh11;
                            tiemRRR11=tiem11;
                          }
               
                          if("F.C.P.S"==mq11){
               
                            mqFCPS11=mq11;
                            uhFCPS11=uh11;
                            tiemFCPS11=tiem11;
                          }
                          if("F.S.P.S"==mq11){
               
                            mqFSPS11=mq11;
                            uhFSPS11=uh11;
                            tiemFSPS11=tiem11;
                          }
                          if("B"==mq11){
               
                            mqB11=mq11;
                            uhB11=uh11;
                            tiemB11=tiem11;
                          }
                          if("O"==mq11){
               
                            mqO11=mq11;
                            uhO11=uh11;
                            tiemO11=tiem11;
                          }
                          if("M.T"==mq11){
               
                            mqMT11=mq11;
                            uhMT11=uh11;
                            tiemMT11=tiem11;
                          }
                          if("S2A"==mq11){
               
                            mqS11=mq11;
                            uhS11=uh11;
                            tiemS11=tiem11;
                          }
               
                          if("S3A"==mq11){
               
                            mqSS11=mq11;
                            uhSS11=uh11;
                            tiemSS11=tiem11;
                          }
               
                          if("P.E"==mq11){
               
                            mqPE11=mq11;
                            uhPE11=uh11;
                            tiemPE11=tiem11;
                          }
    
                          db.collection("FichaTecni12").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                  //.where("Maquina", "==", "P1A")
                .get()
                .then(function(querySnapshot) {
                  
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        //var ur=`${doc.data().UrlFrente}`;
                        var tiem12=parseInt(`${doc.data().Estandar}`);
                        var uh12=parseInt(`${doc.data().Unidad}`);
                        var mq12=`${doc.data().Maquina}`;
            
                        if("P1A"==mq12){
            
                          uhP12=uh12;
                          tiemP12=tiem12;
                        }
            
                        if("R"==mq12){
            
                          uhR12=uh12;
                          tiemR12=tiem12;
                        }
            
                        if("RR2A"==mq12){
            
                          uhRR12=uh12;
                          tiemRR12=tiem12;
                        }
                        if("RR3A"==mq12){
            
                          uhRRR12=uh12;
                          tiemRRR12=tiem12;
                        }
            
                        if("F.C.P.S"==mq12){
            
                          uhFCPS12=uh12;
                          tiemFCPS12=tiem12;
                        }
                        if("F.S.P.S"==mq12){
            
                          uhFSPS12=uh12;
                          tiemFSPS12=tiem12;
                        }
                        if("B"==mq12){
            
                          uhB12=uh12;
                          tiemB12=tiem12;
                        }
                        if("O"==mq12){
            
                          uhO12=uh12;
                          tiemO12=tiem12;
                        }
                        if("M.T"==mq12){
            
                          uhMT12=uh12;
                          tiemMT12=tiem12;
                        }
                        if("S2A"==mq12){
            
                          uhS12=uh12;
                          tiemS12=tiem12;
                        }
            
                        if("S3A"==mq12){
            
                          uhSS12=uh12;
                          tiemSS12=tiem12;
                        }
            
                        if("P.E"==mq12){
            
                          uhPE12=uh12;
                          tiemPE12=tiem12;
                        }
                        db.collection("FichaTecni13").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                        //.where("Maquina", "==", "P1A")
                      .get()
                      .then(function(querySnapshot) {
    
                      
                          querySnapshot.forEach(function(doc) {
                              // doc.data() is never undefined for query doc snapshots
                              console.log(doc.id, " => ", doc.data());
                              //var ur=`${doc.data().UrlFrente}`;
                              var tiem13=parseInt(`${doc.data().Estandar}`);
                              var uh13=parseInt(`${doc.data().Unidad}`);
                              var mq13=`${doc.data().Maquina}`;
                  
                              if("P1A"==mq13){
                  
                                uhP13=uh13;
                                tiemP13=tiem13;
                              }
                  
                              if("R"==mq13){
                  
                                uhR13=uh13;
                                tiemR13=tiem13;
                              }
                  
                              if("RR2A"==mq13){
                  
                                uhRR13=uh13;
                                tiemRR13=tiem13;
                              }
                              if("RR3A"==mq13){
                  
                                uhRRR13=uh13;
                                tiemRRR13=tiem13;
                              }
                  
                              if("F.C.P.S"==mq13){
                  
                                uhFCPS13=uh13;
                                tiemFCPS13=tiem13;
                              }
                              if("F.S.P.S"==mq13){
                  
                                uhFSPS13=uh13;
                                tiemFSPS13=tiem13;
                              }
                              if("B"==mq13){
                  
                                uhB13=uh13;
                                tiemB13=tiem13;
                              }
                              if("O"==mq13){
                  
                                uhO13=uh13;
                                tiemO13=tiem13;
                              }
                              if("M.T"==mq13){
                  
                                uhMT13=uh13;
                                tiemMT13=tiem13;
                              }
                              if("S2A"==mq13){
                  
                                uhS13=uh13;
                                tiemS13=tiem13;
                              }
                  
                              if("S3A"==mq13){
                  
                                uhSS13=uh13;
                                tiemSS13=tiem13;
                              }
                  
                              if("P.E"==mq13){
                  
                                uhPE13=uh13;
                                tiemPE13=tiem13;
                              }
    
                              db.collection("FichaTecni14").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                    //.where("Maquina", "==", "P1A")
                  .get()
                  .then(function(querySnapshot) {
                    
                      querySnapshot.forEach(function(doc) {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc.id, " => ", doc.data());
                          //var ur=`${doc.data().UrlFrente}`;
                          var tiem14=parseInt(`${doc.data().Estandar}`);
                          var uh14=parseInt(`${doc.data().Unidad}`);
                          var mq14=`${doc.data().Maquina}`;
              
                          if("P1A"==mq14){
              
                            uhP14=uh14;
                            tiemP14=tiem14;
                          }
              
                          if("R"==mq14){
              
                            uhR14=uh14;
                            tiemR14=tiem14;
                          }
              
                          if("RR2A"==mq14){
              
                            uhRR14=uh14;
                            tiemRR14=tiem14;
                          }
                          if("RR3A"==mq14){
              
                            uhRRR14=uh14;
                            tiemRRR14=tiem14;
                          }
              
                          if("F.C.P.S"==mq14){
              
                            uhFCPS14=uh14;
                            tiemFCPS14=tiem14;
                          }
                          if("F.S.P.S"==mq14){
              
                            uhFSPS14=uh14;
                            tiemFSPS14=tiem14;
                          }
                          if("B"==mq14){
              
                            uhB14=uh14;
                            tiemB14=tiem14;
                          }
                          if("O"==mq14){
              
                            uhO14=uh14;
                            tiemO14=tiem14;
                          }
                          if("M.T"==mq14){
              
                            uhMT14=uh14;
                            tiemMT14=tiem14;
                          }
                          if("S2A"==mq14){
              
                            uhS14=uh14;
                            tiemS14=tiem14;
                          }
              
                          if("S3A"==mq14){
              
                            uhSS14=uh14;
                            tiemSS14=tiem14;
                          }
              
                          if("P.E"==mq14){
              
                            uhPE14=uh14;
                            tiemPE14=tiem14;
                          }
    
                          db.collection("FichaTecni15").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                    //.where("Maquina", "==", "P1A")
                  .get()
                  .then(function(querySnapshot) {
                                    querySnapshot.forEach(function(doc) {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc.id, " => ", doc.data());
                          //var ur=`${doc.data().UrlFrente}`;
                          var tiem15=parseInt(`${doc.data().Estandar}`);
                          var uh15=parseInt(`${doc.data().Unidad}`);
                          var mq15=`${doc.data().Maquina}`;
              
                          if("P1A"==mq15){
              
                            uhP15=uh15;
                            tiemP15=tiem15;
                          }
              
                          if("R"==mq15){
              
                            uhR15=uh15;
                            tiemR15=tiem15;
                          }
              
                          if("RR2A"==mq15){
              
                            uhRR15=uh15;
                            tiemRR15=tiem15;
                          }
                          if("RR3A"==mq15){
              
                            uhRRR15=uh15;
                            tiemRRR15=tiem15;
                          }
              
                          if("F.C.P.S"==mq15){
              
                            uhFCPS15=uh15;
                            tiemFCPS15=tiem15;
                          }
                          if("F.S.P.S"==mq15){
              
                            uhFSPS15=uh15;
                            tiemFSPS15=tiem15;
                          }
                          if("B"==mq15){
              
                            uhB15=uh15;
                            tiemB15=tiem15;
                          }
                          if("O"==mq15){
              
                            uhO15=uh15;
                            tiemO15=tiem15;
                          }
                          if("M.T"==mq15){
              
                            uhMT15=uh15;
                            tiemMT15=tiem15;
                          }
                          if("S2A"==mq15){
              
                            uhS15=uh15;
                            tiemS15=tiem15;
                          }
              
                          if("S3A"==mq15){
              
                            uhSS15=uh15;
                            tiemSS15=tiem15;
                          }
              
                          if("P.E"==mq15){
              
                            uhPE15=uh15;
                            tiemPE15=tiem15;
                          }
    
                          db.collection("FichaTecni16").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                          //.where("Maquina", "==", "P1A")
                        .get()
                        .then(function(querySnapshot) {
                         
          
                            querySnapshot.forEach(function(doc) {
                                // doc.data() is never undefined for query doc snapshots
                                console.log(doc.id, " => ", doc.data());
                                //var ur=`${doc.data().UrlFrente}`;
                                var tiem16=parseInt(`${doc.data().Estandar}`);
                                var uh16=parseInt(`${doc.data().Unidad}`);
                                var mq16=`${doc.data().Maquina}`;
                    
                                if("P1A"==mq16){
                    
                                  uhP16=uh16;
                                  tiemP16=tiem16;
                                }
                    
                                if("R"==mq16){
                    
                                  uhR16=uh16;
                                  tiemR16=tiem16;
                                }
                    
                                if("RR2A"==mq16){
                    
                                  uhRR16=uh16;
                                  tiemRR16=tiem16;
                                }
                                if("RR3A"==mq16){
                    
                                  uhRRR16=uh16;
                                  tiemRRR16=tiem16;
                                }
                    
                                if("F.C.P.S"==mq16){
                    
                                  uhFCPS16=uh16;
                                  tiemFCPS16=tiem16;
                                }
                                if("F.S.P.S"==mq16){
                    
                                  uhFSPS16=uh16;
                                  tiemFSPS16=tiem16;
                                }
                                if("B"==mq16){
                    
                                  uhB16=uh16;
                                  tiemB16=tiem16;
                                }
                                if("O"==mq16){
                    
                                  uhO16=uh16;
                                  tiemO16=tiem16;
                                }
                                if("M.T"==mq16){
                    
                                  uhMT16=uh16;
                                  tiemMT16=tiem16;
                                }
                                if("S2A"==mq16){
                    
                                  uhS16=uh16;
                                  tiemS16=tiem16;
                                }
                    
                                if("S3A"==mq16){
                    
                                  uhSS16=uh16;
                                  tiemSS16=tiem16;
                                }
                    
                                if("P.E"==mq16){
                    
                                  uhPE16=uh16;
                                  tiemPE16=tiem16;
                                }
    
                                db.collection("FichaTecni17").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                                //.where("Maquina", "==", "P1A")
                              .get()
                              .then(function(querySnapshot) {
    
                                
                                  querySnapshot.forEach(function(doc) {
                                      // doc.data() is never undefined for query doc snapshots
                                      console.log(doc.id, " => ", doc.data());
                                      //var ur=`${doc.data().UrlFrente}`;
                                      var tiem17=parseInt(`${doc.data().Estandar}`);
                                      var uh17=parseInt(`${doc.data().Unidad}`);
                                      var mq17=`${doc.data().Maquina}`;
                          
                                      if("P1A"==mq17){
                          
                                        uhP17=uh17;
                                        tiemP17=tiem17;
                                      }
                          
                                      if("R"==mq17){
                          
                                        uhR17=uh17;
                                        tiemR17=tiem17;
                                      }
                          
                                      if("RR2A"==mq17){
                          
                                        uhRR17=uh17;
                                        tiemRR17=tiem17;
                                      }
                                      if("RR3A"==mq17){
                          
                                        uhRRR17=uh17;
                                        tiemRRR17=tiem17;
                                      }
                          
                                      if("F.C.P.S"==mq17){
                          
                                        uhFCPS17=uh17;
                                        tiemFCPS17=tiem17;
                                      }
                                      if("F.S.P.S"==mq17){
                          
                                        uhFSPS17=uh17;
                                        tiemFSPS17=tiem17;
                                      }
                                      if("B"==mq17){
                          
                                        uhB17=uh17;
                                        tiemB17=tiem17;
                                      }
                                      if("O"==mq17){
                          
                                        uhO17=uh17;
                                        tiemO17=tiem17;
                                      }
                                      if("M.T"==mq17){
                          
                                        uhMT17=uh17;
                                        tiemMT17=tiem17;
                                      }
                                      if("S2A"==mq17){
                          
                                        uhS17=uh17;
                                        tiemS17=tiem17;
                                      }
                          
                                      if("S3A"==mq17){
                          
                                        uhSS17=uh17;
                                        tiemSS17=tiem17;
                                      }
                          
                                      if("P.E"==mq17){
                          
                                        uhPE17=uh17;
                                        tiemPE17=tiem17;
                                      }
    
                                      db.collection("FichaTecni18").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
    
                               
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem18=parseInt(`${doc.data().Estandar}`);
                                            var uh18=parseInt(`${doc.data().Unidad}`);
                                            var mq18=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq18){
                                
                                              uhP18=uh18;
                                              tiemP18=tiem18;
                                            }
                                
                                            if("R"==mq18){
                                
                                              uhR18=uh18;
                                              tiemR18=tiem18;
                                            }
                                
                                            if("RR2A"==mq18){
                                
                                              uhRR18=uh18;
                                              tiemRR18=tiem18;
                                            }
                                            if("RR3A"==mq18){
                                
                                              uhRRR18=uh18;
                                              tiemRRR18=tiem18;
                                            }
                                
                                            if("F.C.P.S"==mq18){
                                
                                              uhFCPS18=uh18;
                                              tiemFCPS18=tiem18;
                                            }
                                            if("F.S.P.S"==mq18){
                                
                                              uhFSPS18=uh18;
                                              tiemFSPS18=tiem18;
                                            }
                                            if("B"==mq18){
                                
                                              uhB18=uh18;
                                              tiemB18=tiem18;
                                            }
                                            if("O"==mq18){
                                
                                              uhO18=uh18;
                                              tiemO18=tiem18;
                                            }
                                            if("M.T"==mq18){
                                
                                              uhMT18=uh18;
                                              tiemMT18=tiem18;
                                            }
                                            if("S2A"==mq18){
                                
                                              uhS18=uh18;
                                              tiemS18=tiem18;
                                            }
                                
                                            if("S3A"==mq18){
                                
                                              uhSS18=uh18;
                                              tiemSS18=tiem18;
                                            }
                                
                                            if("P.E"==mq18){
                                
                                              uhPE18=uh18;
                                              tiemPE18=tiem18;
                                            }
                                            db.collection("FichaTecni19").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                                            //.where("Maquina", "==", "P1A")
                                          .get()
                                          .then(function(querySnapshot) {
    
                                         
                                              querySnapshot.forEach(function(doc) {
                                                  // doc.data() is never undefined for query doc snapshots
                                                  console.log(doc.id, " => ", doc.data());
                                                  //var ur=`${doc.data().UrlFrente}`;
                                                  var tiem19=parseInt(`${doc.data().Estandar}`);
                                                  var uh19=parseInt(`${doc.data().Unidad}`);
                                                  var mq19=`${doc.data().Maquina}`;
                                      
                                                  if("P1A"==mq19){
                                      
                                                    uhP19=uh19;
                                                    tiemP19=tiem19;
                                                  }
                                      
                                                  if("R"==mq19){
                                      
                                                    uhR19=uh19;
                                                    tiemR19=tiem19;
                                                  }
                                      
                                                  if("RR2A"==mq19){
                                      
                                                    uhRR19=uh19;
                                                    tiemRR19=tiem19;
                                                  }
                                                  if("RR3A"==mq19){
                                      
                                                    uhRRR19=uh19;
                                                    tiemRRR19=tiem19;
                                                  }
                                      
                                                  if("F.C.P.S"==mq19){
                                      
                                                    uhFCPS19=uh19;
                                                    tiemFCPS19=tiem19;
                                                  }
                                                  if("F.S.P.S"==mq19){
                                      
                                                    uhFSPS19=uh19;
                                                    tiemFSPS19=tiem19;
                                                  }
                                                  if("B"==mq19){
                                      
                                                    uhB19=uh19;
                                                    tiemB19=tiem19;
                                                  }
                                                  if("O"==mq19){
                                      
                                                    uhO19=uh19;
                                                    tiemO19=tiem19;
                                                  }
                                                  if("M.T"==mq19){
                                      
                                                    uhMT19=uh19;
                                                    tiemMT19=tiem19;
                                                  }
                                                  if("S2A"==mq19){
                                      
                                                    uhS19=uh19;
                                                    tiemS19=tiem19;
                                                  }
                                      
                                                  if("S3A"==mq19){
                                      
                                                    uhSS19=uh19;
                                                    tiemSS19=tiem19;
                                                  }
                                      
                                                  if("P.E"==mq19){
                                      
                                                    uhPE19=uh19;
                                                    tiemPE19=tiem19;
                                                  }
    
                             db.collection("FichaTecni20").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                    //.where("Maquina", "==", "P1A")
                  .get()
                  .then(function(querySnapshot) {
    
                  
                      querySnapshot.forEach(function(doc) {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc.id, " => ", doc.data());
                          //var ur=`${doc.data().UrlFrente}`;
                          var tiem20=parseInt(`${doc.data().Estandar}`);
                          var uh20=parseInt(`${doc.data().Unidad}`);
                          var mq20=`${doc.data().Maquina}`;
              
                          if("P1A"==mq20){
              
                            uhP20=uh20;
                            tiemP20=tiem20;
                          }
              
                          if("R"==mq20){
              
                            uhR20=uh20;
                            tiemR20=tiem20;
                          }
              
                          if("RR2A"==mq20){
              
                            uhRR20=uh20;
                            tiemRR20=tiem20;
                          }
                          if("RR3A"==mq20){
              
                            uhRRR20=uh20;
                            tiemRRR20=tiem20;
                          }
              
                          if("F.C.P.S"==mq20){
              
                            uhFCPS20=uh20;
                            tiemFCPS20=tiem20;
                          }
                          if("F.S.P.S"==mq20){
              
                            uhFSPS20=uh20;
                            tiemFSPS20=tiem20;
                          }
                          if("B"==mq20){
              
                            uhB20=uh20;
                            tiemB20=tiem20;
                          }
                          if("O"==mq20){
              
                            uhO20=uh20;
                            tiemO20=tiem20;
                          }
                          if("M.T"==mq20){
              
                            uhMT20=uh20;
                            tiemMT20=tiem20;
                          }
                          if("S2A"==mq20){
              
                            uhS20=uh20;
                            tiemS20=tiem20;
                          }
              
                          if("S3A"==mq20){
              
                            uhSS20=uh20;
                            tiemSS20=tiem20;
                          }
              
                          if("P.E"==mq20){
              
                            uhPE20=uh20;
                            tiemPE20=tiem20;
                          }
    
                          db.collection("FichaTecni21").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                          //.where("Maquina", "==", "P1A")
                        .get()
                        .then(function(querySnapshot) {
    
                            querySnapshot.forEach(function(doc) {
                                // doc.data() is never undefined for query doc snapshots
                                console.log(doc.id, " => ", doc.data());
                                //var ur=`${doc.data().UrlFrente}`;
                                var tiem21=parseInt(`${doc.data().Estandar}`);
                                var uh21=parseInt(`${doc.data().Unidad}`);
                                var mq21=`${doc.data().Maquina}`;
                    
                                if("P1A"==mq21){
                    
                                  uhP21=uh21;
                                  tiemP21=tiem21;
                                }
                    
                                if("R"==mq21){
                    
                                  uhR21=uh21;
                                  tiemR21=tiem21;
                                }
                    
                                if("RR2A"==mq21){
                    
                                  uhRR21=uh21;
                                  tiemRR21=tiem21;
                                }
                                if("RR3A"==mq21){
                    
                                  uhRRR21=uh21;
                                  tiemRRR21=tiem21;
                                }
                    
                                if("F.C.P.S"==mq21){
                    
                                  uhFCPS21=uh21;
                                  tiemFCPS21=tiem21;
                                }
                                if("F.S.P.S"==mq21){
                    
                                  uhFSPS21=uh21;
                                  tiemFSPS21=tiem21;
                                }
                                if("B"==mq21){
                    
                                  uhB21=uh21;
                                  tiemB21=tiem21;
                                }
                                if("O"==mq21){
                    
                                  uhO21=uh21;
                                  tiemO21=tiem21;
                                }
                                if("M.T"==mq21){
                    
                                  uhMT21=uh21;
                                  tiemMT21=tiem21;
                                }
                                if("S2A"==mq21){
                    
                                  uhS21=uh21;
                                  tiemS21=tiem21;
                                }
                    
                                if("S3A"==mq21){
                    
                                  uhSS21=uh21;
                                  tiemSS21=tiem21;
                                }
                    
                                if("P.E"==mq21){
                    
                                  uhPE21=uh21;
                                  tiemPE21=tiem21;
                                }
    
                                db.collection("FichaTecni22").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                                //.where("Maquina", "==", "P1A")
                              .get()
                              .then(function(querySnapshot) {
    
                                        querySnapshot.forEach(function(doc) {
                                      // doc.data() is never undefined for query doc snapshots
                                      console.log(doc.id, " => ", doc.data());
                                      //var ur=`${doc.data().UrlFrente}`;
                                      var tiem22=parseInt(`${doc.data().Estandar}`);
                                      var uh22=parseInt(`${doc.data().Unidad}`);
                                      var mq22=`${doc.data().Maquina}`;
                          
                                      if("P1A"==mq22){
                          
                                        uhP22=uh22;
                                        tiemP22=tiem22;
                                      }
                          
                                      if("R"==mq22){
                          
                                        uhR22=uh22;
                                        tiemR22=tiem22;
                                      }
                          
                                      if("RR2A"==mq22){
                          
                                        uhRR22=uh22;
                                        tiemRR22=tiem22;
                                      }
                                      if("RR3A"==mq22){
                          
                                        uhRRR22=uh22;
                                        tiemRRR22=tiem22;
                                      }
                          
                                      if("F.C.P.S"==mq22){
                          
                                        uhFCPS22=uh22;
                                        tiemFCPS22=tiem22;
                                      }
                                      if("F.S.P.S"==mq22){
                          
                                        uhFSPS22=uh22;
                                        tiemFSPS22=tiem22;
                                      }
                                      if("B"==mq22){
                          
                                        uhB22=uh22;
                                        tiemB22=tiem22;
                                      }
                                      if("O"==mq22){
                          
                                        uhO22=uh22;
                                        tiemO22=tiem22;
                                      }
                                      if("M.T"==mq22){
                          
                                        uhMT22=uh22;
                                        tiemMT22=tiem22;
                                      }
                                      if("S2A"==mq22){
                          
                                        uhS22=uh22;
                                        tiemS22=tiem22;
                                      }
                          
                                      if("S3A"==mq22){
                          
                                        uhSS22=uh22;
                                        tiemSS22=tiem22;
                                      }
                          
                                      if("P.E"==mq22){
                          
                                        uhPE22=uh22;
                                        tiemPE22=tiem22;
                                      }
    
                                      db.collection("FichaTecni23").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem23=parseInt(`${doc.data().Estandar}`);
                                            var uh23=parseInt(`${doc.data().Unidad}`);
                                            var mq23=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq23){
                                
                                              uhP23=uh23;
                                              tiemP23=tiem23;
                                            }
                                
                                            if("R"==mq23){
                                
                                              uhR23=uh23;
                                              tiemR23=tiem23;
                                            }
                                
                                            if("RR2A"==mq23){
                                
                                              uhRR23=uh23;
                                              tiemRR23=tiem23;
                                            }
                                            if("RR3A"==mq23){
                                
                                              uhRRR23=uh23;
                                              tiemRRR23=tiem23;
                                            }
                                
                                            if("F.C.P.S"==mq23){
                                
                                              uhFCPS23=uh23;
                                              tiemFCPS23=tiem23;
                                            }
                                            if("F.S.P.S"==mq23){
                                
                                              uhFSPS23=uh23;
                                              tiemFSPS23=tiem23;
                                            }
                                            if("B"==mq23){
                                
                                              uhB23=uh23;
                                              tiemB23=tiem23;
                                            }
                                            if("O"==mq23){
                                
                                              uhO23=uh23;
                                              tiemO23=tiem23;
                                            }
                                            if("M.T"==mq23){
                                
                                              uhMT23=uh23;
                                              tiemMT23=tiem23;
                                            }
                                            if("S2A"==mq23){
                                
                                              uhS23=uh23;
                                              tiemS23=tiem23;
                                            }
                                
                                            if("S3A"==mq23){
                                
                                              uhSS23=uh23;
                                              tiemSS23=tiem23;
                                            }
                                
                                            if("P.E"==mq23){
                                
                                              uhPE23=uh23;
                                              tiemPE23=tiem23;
                                            }
    
                                            db.collection("FichaTecni24").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                                            //.where("Maquina", "==", "P1A")
                                          .get()
                                          .then(function(querySnapshot) {
                                              querySnapshot.forEach(function(doc) {
                                                  // doc.data() is never undefined for query doc snapshots
                                                  console.log(doc.id, " => ", doc.data());
                                                  //var ur=`${doc.data().UrlFrente}`;
                                                  var tiem24=parseInt(`${doc.data().Estandar}`);
                                                  var uh24=parseInt(`${doc.data().Unidad}`);
                                                  var mq24=`${doc.data().Maquina}`;
                                      
                                                  if("P1A"==mq24){
                                      
                                                    uhP24=uh24;
                                                    tiemP24=tiem24;
                                                  }
                                      
                                                  if("R"==mq24){
                                      
                                                    uhR24=uh24;
                                                    tiemR24=tiem24;
                                                  }
                                      
                                                  if("RR2A"==mq24){
                                      
                                                    uhRR24=uh24;
                                                    tiemRR24=tiem24;
                                                  }
                                                  if("RR3A"==mq24){
                                      
                                                    uhRRR24=uh24;
                                                    tiemRRR24=tiem24;
                                                  }
                                      
                                                  if("F.C.P.S"==mq24){
                                      
                                                    uhFCPS24=uh24;
                                                    tiemFCPS24=tiem24;
                                                  }
                                                  if("F.S.P.S"==mq24){
                                      
                                                    uhFSPS24=uh24;
                                                    tiemFSPS24=tiem24;
                                                  }
                                                  if("B"==mq24){
                                      
                                                    uhB24=uh24;
                                                    tiemB24=tiem24;
                                                  }
                                                  if("O"==mq24){
                                      
                                                    uhO24=uh24;
                                                    tiemO24=tiem24;
                                                  }
                                                  if("M.T"==mq24){
                                      
                                                    uhMT24=uh24;
                                                    tiemMT24=tiem24;
                                                  }
                                                  if("S2A"==mq24){
                                      
                                                    uhS24=uh24;
                                                    tiemS24=tiem24;
                                                  }
                                      
                                                  if("S3A"==mq24){
                                      
                                                    uhSS24=uh24;
                                                    tiemSS24=tiem24;
                                                  }
                                      
                                                  if("P.E"==mq24){
                                      
                                                    uhPE24=uh24;
                                                    tiemPE24=tiem24;
                                                  }
    
                                                  db.collection("FichaTecni25").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                                                  //.where("Maquina", "==", "P1A")
                                                .get()
                                                .then(function(querySnapshot) {
                                                    querySnapshot.forEach(function(doc) {
                                                        // doc.data() is never undefined for query doc snapshots
                                                        console.log(doc.id, " => ", doc.data());
                                                        //var ur=`${doc.data().UrlFrente}`;
                                                        var tiem25=parseInt(`${doc.data().Estandar}`);
                                                        var uh25=parseInt(`${doc.data().Unidad}`);
                                                        var mq25=`${doc.data().Maquina}`;
                                            
                                                        if("P1A"==mq25){
                                            
                                                          uhP25=uh25;
                                                          tiemP25=tiem25;
                                                        }
                                            
                                                        if("R"==mq25){
                                            
                                                          uhR25=uh25;
                                                          tiemR25=tiem25;
                                                        }
                                            
                                                        if("RR2A"==mq25){
                                            
                                                          uhRR25=uh25;
                                                          tiemRR25=tiem25;
                                                        }
                                                        if("RR3A"==mq25){
                                            
                                                          uhRRR25=uh25;
                                                          tiemRRR25=tiem25;
                                                        }
                                            
                                                        if("F.C.P.S"==mq25){
                                            
                                                          uhFCPS25=uh25;
                                                          tiemFCPS25=tiem25;
                                                        }
                                                        if("F.S.P.S"==mq25){
                                            
                                                          uhFSPS25=uh25;
                                                          tiemFSPS25=tiem25;
                                                        }
                                                        if("B"==mq25){
                                            
                                                          uhB25=uh25;
                                                          tiemB25=tiem25;
                                                        }
                                                        if("O"==mq25){
                                            
                                                          uhO25=uh25;
                                                          tiemO25=tiem25;
                                                        }
                                                        if("M.T"==mq25){
                                            
                                                          uhMT25=uh25;
                                                          tiemMT25=tiem25;
                                                        }
                                                        if("S2A"==mq25){
                                            
                                                          uhS25=uh25;
                                                          tiemS25=tiem25;
                                                        }
                                            
                                                        if("S3A"==mq25){
                                            
                                                          uhSS25=uh25;
                                                          tiemSS25=tiem25;
                                                        }
                                            
                                                        if("P.E"==mq25){
                                            
                                                          uhPE25=uh25;
                                                          tiemPE25=tiem25;
                                                        }
    
                                                          db.collection("FichaTecni26").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                    //.where("Maquina", "==", "P1A")
                  .get()
                  .then(function(querySnapshot) {
                      querySnapshot.forEach(function(doc) {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc.id, " => ", doc.data());
                          //var ur=`${doc.data().UrlFrente}`;
                          var tiem26=parseInt(`${doc.data().Estandar}`);
                          var uh26=parseInt(`${doc.data().Unidad}`);
                          var mq26=`${doc.data().Maquina}`;
              
                          if("P1A"==mq26){
              
                            uhP26=uh26;
                            tiemP26=tiem26;
                          }
              
                          if("R"==mq26){
              
                            uhR26=uh26;
                            tiemR26=tiem26;
                          }
              
                          if("RR2A"==mq26){
              
                            uhRR26=uh26;
                            tiemRR26=tiem26;
                          }
                          if("RR3A"==mq26){
              
                            uhRRR26=uh26;
                            tiemRRR26=tiem26;
                          }
              
                          if("F.C.P.S"==mq26){
              
                            uhFCPS26=uh26;
                            tiemFCPS26=tiem26;
                          }
                          if("F.S.P.S"==mq26){
              
                            uhFSPS26=uh26;
                            tiemFSPS26=tiem26;
                          }
                          if("B"==mq26){
              
                            uhB26=uh26;
                            tiemB26=tiem26;
                          }
                          if("O"==mq26){
              
                            uhO26=uh26;
                            tiemO26=tiem26;
                          }
                          if("M.T"==mq26){
              
                            uhMT26=uh26;
                            tiemMT26=tiem26;
                          }
                          if("S2A"==mq26){
              
                            uhS26=uh26;
                            tiemS26=tiem26;
                          }
              
                          if("S3A"==mq26){
              
                            uhSS26=uh26;
                            tiemSS26=tiem26;
                          }
              
                          if("P.E"==mq26){
              
                            uhPE26=uh26;
                            tiemPE26=tiem26;
                          }
    
                            db.collection("FichaTecni27").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                    //.where("Maquina", "==", "P1A")
                  .get()
                  .then(function(querySnapshot) {
    
                      querySnapshot.forEach(function(doc) {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc.id, " => ", doc.data());
                          //var ur=`${doc.data().UrlFrente}`;
                          var tiem27=parseInt(`${doc.data().Estandar}`);
                          var uh27=parseInt(`${doc.data().Unidad}`);
                          var mq27=`${doc.data().Maquina}`;
              
                          if("P1A"==mq27){
              
                            uhP27=uh27;
                            tiemP27=tiem27;
                          }
              
                          if("R"==mq27){
              
                            uhR27=uh27;
                            tiemR27=tiem27;
                          }
              
                          if("RR2A"==mq27){
              
                            uhRR27=uh27;
                            tiemRR27=tiem27;
                          }
                          if("RR3A"==mq27){
              
                            uhRRR27=uh27;
                            tiemRRR27=tiem27;
                          }
              
                          if("F.C.P.S"==mq27){
              
                            uhFCPS27=uh27;
                            tiemFCPS27=tiem27;
                          }
                          if("F.S.P.S"==mq27){
              
                            uhFSPS27=uh27;
                            tiemFSPS27=tiem27;
                          }
                          if("B"==mq27){
              
                            uhB27=uh27;
                            tiemB27=tiem27;
                          }
                          if("O"==mq27){
              
                            uhO27=uh27;
                            tiemO27=tiem27;
                          }
                          if("M.T"==mq27){
              
                            uhMT27=uh27;
                            tiemMT27=tiem27;
                          }
                          if("S2A"==mq27){
              
                            uhS27=uh27;
                            tiemS27=tiem27;
                          }
              
                          if("S3A"==mq27){
              
                            uhSS27=uh27;
                            tiemSS27=tiem27;
                          }
              
                          if("P.E"==mq27){
              
                            uhPE27=uh27;
                            tiemPE27=tiem27;
                          }
    
                           db.collection("FichaTecni28").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                    //.where("Maquina", "==", "P1A")
                  .get()
                  .then(function(querySnapshot) {
    
                      querySnapshot.forEach(function(doc) {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc.id, " => ", doc.data());
                          //var ur=`${doc.data().UrlFrente}`;
                          var tiem28=parseInt(`${doc.data().Estandar}`);
                          var uh28=parseInt(`${doc.data().Unidad}`);
                          var mq28=`${doc.data().Maquina}`;
              
                          if("P1A"==mq28){
              
                            uhP28=uh28;
                            tiemP28=tiem28;
                          }
              
                          if("R"==mq28){
              
                            uhR28=uh28;
                            tiemR28=tiem28;
                          }
              
                          if("RR2A"==mq28){
              
                            uhRR28=uh28;
                            tiemRR28=tiem28;
                          }
                          if("RR3A"==mq28){
              
                            uhRRR28=uh28;
                            tiemRRR28=tiem28;
                          }
              
                          if("F.C.P.S"==mq28){
              
                            uhFCPS28=uh28;
                            tiemFCPS28=tiem28;
                          }
                          if("F.S.P.S"==mq28){
              
                            uhFSPS28=uh28;
                            tiemFSPS28=tiem28;
                          }
                          if("B"==mq28){
              
                            uhB28=uh28;
                            tiemB28=tiem28;
                          }
                          if("O"==mq28){
              
                            uhO28=uh28;
                            tiemO28=tiem28;
                          }
                          if("M.T"==mq28){
              
                            uhMT28=uh28;
                            tiemMT28=tiem28;
                          }
                          if("S2A"==mq28){
              
                            uhS28=uh28;
                            tiemS28=tiem28;
                          }
              
                          if("S3A"==mq28){
              
                            uhSS28=uh28;
                            tiemSS28=tiem28;
                          }
              
                          if("P.E"==mq28){
              
                            uhPE28=uh28;
                            tiemPE28=tiem28;
                          }
    
                            db.collection("FichaTecni29").where("Referencia", "==", consultaref)//.where("Cliente", "==", consultaClient)
                    //.where("Maquina", "==", "P1A")
                  .get()
                  .then(function(querySnapshot) {
                      querySnapshot.forEach(function(doc) {
                          // doc.data() is never undefined for query doc snapshots
                          console.log(doc.id, " => ", doc.data());
                          //var ur=`${doc.data().UrlFrente}`;
                          var tiem29=parseInt(`${doc.data().Estandar}`);
                          var uh29=parseInt(`${doc.data().Unidad}`);
                          var mq29=`${doc.data().Maquina}`;
              
                          if("P1A"==mq29){
              
                            uhP29=uh29;
                            tiemP29=tiem29;
                          }
              
                          if("R"==mq29){
              
                            uhR29=uh29;
                            tiemR29=tiem29;
                          }
              
                          if("RR2A"==mq29){
              
                            uhRR29=uh29;
                            tiemRR29=tiem29;
                          }
                          if("RR3A"==mq29){
              
                            uhRRR29=uh29;
                            tiemRRR29=tiem29;
                          }
              
                          if("F.C.P.S"==mq29){
              
                            uhFCPS29=uh29;
                            tiemFCPS29=tiem29;
                          }
                          if("F.S.P.S"==mq29){
              
                            uhFSPS29=uh29;
                            tiemFSPS29=tiem29;
                          }
                          if("B"==mq29){
              
                            uhB29=uh29;
                            tiemB29=tiem29;
                          }
                          if("O"==mq29){
              
                            uhO29=uh29;
                            tiemO29=tiem29;
                          }
                          if("M.T"==mq29){
              
                            uhMT29=uh29;
                            tiemMT29=tiem29;
                          }
                          if("S2A"==mq29){
              
                            uhS29=uh29;
                            tiemS29=tiem29;
                          }
              
                          if("S3A"==mq29){
              
                            uhSS29=uh29;
                            tiemSS29=tiem29;
                          }
              
                          if("P.E"==mq29){
              
                            uhPE29=uh29;
                            tiemPE29=tiem29;
                          }
    
                          db.collection("FichaTecni30").where("Referencia", "==", consultaref)
                          //.where("Cliente", "==", consultaClient)
                          //.where("Maquina", "==", "P1A")
                        .get()
                        .then(function(querySnapshot) {
             
          
                            querySnapshot.forEach(function(doc) {
                                // doc.data() is never undefined for query doc snapshots
                                console.log(doc.id, " => ", doc.data());
                                //var ur=`${doc.data().UrlFrente}`;
                                var tiem30=parseInt(`${doc.data().Estandar}`);
                                var uh30=parseInt(`${doc.data().Unidad}`);
                                var mq30=`${doc.data().Maquina}`;
                    
                                if("P1A"==mq30){
                    
                                  uhP30=uh30;
                                  tiemP30=tiem30;
                                }
                    
                                if("R"==mq30){
                    
                                  uhR30=uh30;
                                  tiemR30=tiem30;
                                }
                    
                                if("RR2A"==mq30){
                    
                                  uhRR30=uh30;
                                  tiemRR30=tiem30;
                                }
                                if("RR3A"==mq30){
                    
                                  uhRRR30=uh30;
                                  tiemRRR30=tiem30;
                                }
                    
                                if("F.C.P.S"==mq30){
                    
                                  uhFCPS30=uh30;
                                  tiemFCPS30=tiem30;
                                }
                                if("F.S.P.S"==mq30){
                    
                                  uhFSPS30=uh30;
                                  tiemFSPS30=tiem30;
                                }
                                if("B"==mq30){
                    
                                  uhB30=uh30;
                                  tiemB30=tiem30;
                                }
                                if("O"==mq30){
                    
                                  uhO30=uh30;
                                  tiemO30=tiem30;
                                }
                                if("M.T"==mq30){
                    
                                  uhMT30=uh30;
                                  tiemMT30=tiem30;
                                }
                                if("S2A"==mq30){
                    
                                  uhS30=uh30;
                                  tiemS30=tiem30;
                                }
                    
                                if("S3A"==mq30){
                    
                                  uhSS30=uh30;
                                  tiemSS30=tiem30;
                                }
                    
                                if("P.E"==mq30){
                    
                                  uhPE30=uh30;
                                  tiemPE30=tiem30;
                                }
    
                                db.collection("FichaTecni31").where("Referencia", "==", consultaref)
                         // .where("Cliente", "==", consultaClient)
                          //.where("Maquina", "==", "P1A")
                        .get()
                        .then(function(querySnapshot) {
             
          
                            querySnapshot.forEach(function(doc) {
                                // doc.data() is never undefined for query doc snapshots
                                console.log(doc.id, " => ", doc.data());
                                //var ur=`${doc.data().UrlFrente}`;
                                var tiem31=parseInt(`${doc.data().Estandar}`);
                                var uh31=parseInt(`${doc.data().Unidad}`);
                                var mq31=`${doc.data().Maquina}`;
                    
                                if("P1A"==mq31){
                    
                                  uhP31=uh31;
                                  tiemP31=tiem31;
                                }
                    
                                if("R"==mq31){
                    
                                  uhR31=uh31;
                                  tiemR31=tiem31;
                                }
                    
                                if("RR2A"==mq31){
                    
                                  uhRR31=uh31;
                                  tiemRR31=tiem31;
                                }
                                if("RR3A"==mq31){
                    
                                  uhRRR31=uh31;
                                  tiemRRR31=tiem31;
                                }
                    
                                if("F.C.P.S"==mq31){
                    
                                  uhFCPS31=uh31;
                                  tiemFCPS31=tiem31;
                                }
                                if("F.S.P.S"==mq31){
                    
                                  uhFSPS31=uh31;
                                  tiemFSPS31=tiem31;
                                }
                                if("B"==mq31){
                    
                                  uhB31=uh31;
                                  tiemB31=tiem31;
                                }
                                if("O"==mq31){
                    
                                  uhO31=uh31;
                                  tiemO31=tiem31;
                                }
                                if("M.T"==mq31){
                    
                                  uhMT31=uh31;
                                  tiemMT31=tiem31;
                                }
                                if("S2A"==mq31){
                    
                                  uhS31=uh31;
                                  tiemS31=tiem31;
                                }
                    
                                if("S3A"==mq31){
                    
                                  uhSS31=uh31;
                                  tiemSS31=tiem31;
                                }
                    
                                if("P.E"==mq31){
                    
                                  uhPE31=uh31;
                                  tiemPE31=tiem31;
                                }
    
                                db.collection("FichaTecni32").where("Referencia", "==", consultaref)
                                //.where("Cliente", "==", consultaClient)
                                //.where("Maquina", "==", "P1A")
                              .get()
                              .then(function(querySnapshot) {
                   
                
                                  querySnapshot.forEach(function(doc) {
                                      // doc.data() is never undefined for query doc snapshots
                                      console.log(doc.id, " => ", doc.data());
                                      //var ur=`${doc.data().UrlFrente}`;
                                      var tiem32=parseInt(`${doc.data().Estandar}`);
                                      var uh32=parseInt(`${doc.data().Unidad}`);
                                      var mq32=`${doc.data().Maquina}`;
                          
                                      if("P1A"==mq32){
                          
                                        uhP32=uh32;
                                        tiemP32=tiem32;
                                      }
                          
                                      if("R"==mq32){
                          
                                        uhR32=uh32;
                                        tiemR32=tiem32;
                                      }
                          
                                      if("RR2A"==mq32){
                          
                                        uhRR32=uh32;
                                        tiemRR32=tiem32;
                                      }
                                      if("RR3A"==mq32){
                          
                                        uhRRR32=uh32;
                                        tiemRRR32=tiem32;
                                      }
                          
                                      if("F.C.P.S"==mq32){
                          
                                        uhFCPS32=uh32;
                                        tiemFCPS32=tiem32;
                                      }
                                      if("F.S.P.S"==mq32){
                          
                                        uhFSPS32=uh32;
                                        tiemFSPS32=tiem32;
                                      }
                                      if("B"==mq32){
                          
                                        uhB32=uh32;
                                        tiemB32=tiem32;
                                      }
                                      if("O"==mq32){
                          
                                        uhO32=uh32;
                                        tiemO32=tiem32;
                                      }
                                      if("M.T"==mq32){
                          
                                        uhMT32=uh32;
                                        tiemMT32=tiem32;
                                      }
                                      if("S2A"==mq32){
                          
                                        uhS32=uh32;
                                        tiemS32=tiem32;
                                      }
                          
                                      if("S3A"==mq32){
                          
                                        uhSS32=uh32;
                                        tiemSS32=tiem32;
                                      }
                          
                                      if("P.E"==mq32){
                          
                                        uhPE32=uh32;
                                        tiemPE32=tiem32;
                                      }

                                      db.collection("FichaTecni33").where("Referencia", "==", consultaref)
                                //.where("Cliente", "==", consultaClient)
                                //.where("Maquina", "==", "P1A")
                              .get()
                              .then(function(querySnapshot) {
                   
                
                                  querySnapshot.forEach(function(doc) {
                                      // doc.data() is never undefined for query doc snapshots
                                      console.log(doc.id, " => ", doc.data());
                                      //var ur=`${doc.data().UrlFrente}`;
                                      var tiem33=parseInt(`${doc.data().Estandar}`);
                                      var uh33=parseInt(`${doc.data().Unidad}`);
                                      var mq33=`${doc.data().Maquina}`;
                          
                                      if("P1A"==mq33){
                          
                                        uhP33=uh33;
                                        tiemP33=tiem33;
                                      }
                          
                                      if("R"==mq33){
                          
                                        uhR33=uh33;
                                        tiemR33=tiem33;
                                      }
                          
                                      if("RR2A"==mq33){
                          
                                        uhRR33=uh33;
                                        tiemRR33=tiem33;
                                      }
                                      if("RR3A"==mq33){
                          
                                        uhRRR33=uh33;
                                        tiemRRR33=tiem33;
                                      }
                          
                                      if("F.C.P.S"==mq33){
                          
                                        uhFCPS33=uh33;
                                        tiemFCPS33=tiem33;
                                      }
                                      if("F.S.P.S"==mq33){
                          
                                        uhFSPS33=uh33;
                                        tiemFSPS33=tiem33;
                                      }
                                      if("B"==mq33){
                          
                                        uhB33=uh33;
                                        tiemB33=tiem33;
                                      }
                                      if("O"==mq33){
                          
                                        uhO33=uh33;
                                        tiemO33=tiem33;
                                      }
                                      if("M.T"==mq33){
                          
                                        uhMT33=uh33;
                                        tiemMT33=tiem33;
                                      }
                                      if("S2A"==mq33){
                          
                                        uhS33=uh33;
                                        tiemS33=tiem33;
                                      }
                          
                                      if("S3A"==mq33){
                          
                                        uhSS33=uh33;
                                        tiemSS33=tiem33;
                                      }
                          
                                      if("P.E"==mq33){
                          
                                        uhPE33=uh33;
                                        tiemPE33=tiem33;
                                      }

                                      db.collection("FichaTecni34").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem34=parseInt(`${doc.data().Estandar}`);
                                            var uh34=parseInt(`${doc.data().Unidad}`);
                                            var mq34=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq34){
                                
                                              uhP34=uh34;
                                              tiemP34=tiem34;
                                            }
                                
                                            if("R"==mq34){
                                
                                              uhR34=uh34;
                                              tiemR34=tiem34;
                                            }
                                
                                            if("RR2A"==mq34){
                                
                                              uhRR34=uh34;
                                              tiemRR34=tiem34;
                                            }
                                            if("RR3A"==mq34){
                                
                                              uhRRR34=uh34;
                                              tiemRRR34=tiem34;
                                            }
                                
                                            if("F.C.P.S"==mq34){
                                
                                              uhFCPS34=uh34;
                                              tiemFCPS34=tiem34;
                                            }
                                            if("F.S.P.S"==mq34){
                                
                                              uhFSPS34=uh34;
                                              tiemFSPS34=tiem34;
                                            }
                                            if("B"==mq34){
                                
                                              uhB34=uh34;
                                              tiemB34=tiem34;
                                            }
                                            if("O"==mq34){
                                
                                              uhO34=uh34;
                                              tiemO34=tiem34;
                                            }
                                            if("M.T"==mq34){
                                
                                              uhMT34=uh34;
                                              tiemMT34=tiem34;
                                            }
                                            if("S2A"==mq34){
                                
                                              uhS34=uh34;
                                              tiemS34=tiem34;
                                            }
                                
                                            if("S3A"==mq34){
                                
                                              uhSS34=uh34;
                                              tiemSS34=tiem34;
                                            }
                                
                                            if("P.E"==mq34){
                                
                                              uhPE34=uh34;
                                              tiemPE34=tiem34;
                                            }

                                             db.collection("FichaTecni35").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem35=parseInt(`${doc.data().Estandar}`);
                                            var uh35=parseInt(`${doc.data().Unidad}`);
                                            var mq35=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq35){
                                
                                              uhP35=uh35;
                                              tiemP35=tiem35;
                                            }
                                
                                            if("R"==mq35){
                                
                                              uhR35=uh35;
                                              tiemR35=tiem35;
                                            }
                                
                                            if("RR2A"==mq35){
                                
                                              uhRR35=uh35;
                                              tiemRR35=tiem35;
                                            }
                                            if("RR3A"==mq35){
                                
                                              uhRRR35=uh35;
                                              tiemRRR35=tiem35;
                                            }
                                
                                            if("F.C.P.S"==mq35){
                                
                                              uhFCPS35=uh35;
                                              tiemFCPS35=tiem35;
                                            }
                                            if("F.S.P.S"==mq35){
                                
                                              uhFSPS35=uh35;
                                              tiemFSPS35=tiem35;
                                            }
                                            if("B"==mq35){
                                
                                              uhB35=uh35;
                                              tiemB35=tiem35;
                                            }
                                            if("O"==mq35){
                                
                                              uhO35=uh35;
                                              tiemO35=tiem35;
                                            }
                                            if("M.T"==mq35){
                                
                                              uhMT35=uh35;
                                              tiemMT35=tiem35;
                                            }
                                            if("S2A"==mq35){
                                
                                              uhS35=uh35;
                                              tiemS35=tiem35;
                                            }
                                
                                            if("S3A"==mq35){
                                
                                              uhSS35=uh35;
                                              tiemSS35=tiem35;
                                            }
                                
                                            if("P.E"==mq35){
                                
                                              uhPE35=uh35;
                                              tiemPE35=tiem35;
                                            }

                                             db.collection("FichaTecni36").where("Referencia", "==", consultaref)
                                      //.where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem36=parseInt(`${doc.data().Estandar}`);
                                            var uh36=parseInt(`${doc.data().Unidad}`);
                                            var mq36=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq36){
                                
                                              uhP36=uh36;
                                              tiemP36=tiem36;
                                            }
                                
                                            if("R"==mq36){
                                
                                              uhR36=uh36;
                                              tiemR36=tiem36;
                                            }
                                
                                            if("RR2A"==mq36){
                                
                                              uhRR36=uh36;
                                              tiemRR36=tiem36;
                                            }
                                            if("RR3A"==mq36){
                                
                                              uhRRR36=uh36;
                                              tiemRRR36=tiem36;
                                            }
                                
                                            if("F.C.P.S"==mq36){
                                
                                              uhFCPS36=uh36;
                                              tiemFCPS36=tiem36;
                                            }
                                            if("F.S.P.S"==mq36){
                                
                                              uhFSPS36=uh36;
                                              tiemFSPS36=tiem36;
                                            }
                                            if("B"==mq36){
                                
                                              uhB36=uh36;
                                              tiemB36=tiem36;
                                            }
                                            if("O"==mq36){
                                
                                              uhO36=uh36;
                                              tiemO36=tiem36;
                                            }
                                            if("M.T"==mq36){
                                
                                              uhMT36=uh36;
                                              tiemMT36=tiem36;
                                            }
                                            if("S2A"==mq36){
                                
                                              uhS36=uh36;
                                              tiemS36=tiem36;
                                            }
                                
                                            if("S3A"==mq36){
                                
                                              uhSS36=uh36;
                                              tiemSS36=tiem36;
                                            }
                                
                                            if("P.E"==mq36){
                                
                                              uhPE36=uh36;
                                              tiemPE36=tiem36;
                                            }

                                              db.collection("FichaTecni37").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem37=parseInt(`${doc.data().Estandar}`);
                                            var uh37=parseInt(`${doc.data().Unidad}`);
                                            var mq37=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq37){
                                
                                              uhP37=uh37;
                                              tiemP37=tiem37;
                                            }
                                
                                            if("R"==mq37){
                                
                                              uhR37=uh37;
                                              tiemR37=tiem37;
                                            }
                                
                                            if("RR2A"==mq37){
                                
                                              uhRR37=uh37;
                                              tiemRR37=tiem37;
                                            }
                                            if("RR3A"==mq37){
                                
                                              uhRRR37=uh37;
                                              tiemRRR37=tiem37;
                                            }
                                
                                            if("F.C.P.S"==mq37){
                                
                                              uhFCPS37=uh37;
                                              tiemFCPS37=tiem37;
                                            }
                                            if("F.S.P.S"==mq37){
                                
                                              uhFSPS37=uh37;
                                              tiemFSPS37=tiem37;
                                            }
                                            if("B"==mq37){
                                
                                              uhB37=uh37;
                                              tiemB37=tiem37;
                                            }
                                            if("O"==mq37){
                                
                                              uhO37=uh37;
                                              tiemO37=tiem37;
                                            }
                                            if("M.T"==mq37){
                                
                                              uhMT37=uh37;
                                              tiemMT37=tiem37;
                                            }
                                            if("S2A"==mq37){
                                
                                              uhS37=uh37;
                                              tiemS37=tiem37;
                                            }
                                
                                            if("S3A"==mq37){
                                
                                              uhSS37=uh37;
                                              tiemSS37=tiem37;
                                            }
                                
                                            if("P.E"==mq37){
                                
                                              uhPE37=uh37;
                                              tiemPE37=tiem37;
                                            }

                                               db.collection("FichaTecni38").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem38=parseInt(`${doc.data().Estandar}`);
                                            var uh38=parseInt(`${doc.data().Unidad}`);
                                            var mq38=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq38){
                                
                                              uhP38=uh38;
                                              tiemP38=tiem38;
                                            }
                                
                                            if("R"==mq38){
                                
                                              uhR38=uh38;
                                              tiemR38=tiem38;
                                            }
                                
                                            if("RR2A"==mq38){
                                
                                              uhRR38=uh38;
                                              tiemRR38=tiem38;
                                            }
                                            if("RR3A"==mq38){
                                
                                              uhRRR38=uh38;
                                              tiemRRR38=tiem38;
                                            }
                                
                                            if("F.C.P.S"==mq38){
                                
                                              uhFCPS38=uh38;
                                              tiemFCPS38=tiem38;
                                            }
                                            if("F.S.P.S"==mq38){
                                
                                              uhFSPS38=uh38;
                                              tiemFSPS38=tiem38;
                                            }
                                            if("B"==mq38){
                                
                                              uhB38=uh38;
                                              tiemB38=tiem38;
                                            }
                                            if("O"==mq38){
                                
                                              uhO38=uh38;
                                              tiemO38=tiem38;
                                            }
                                            if("M.T"==mq38){
                                
                                              uhMT38=uh38;
                                              tiemMT38=tiem38;
                                            }
                                            if("S2A"==mq38){
                                
                                              uhS38=uh38;
                                              tiemS38=tiem38;
                                            }
                                
                                            if("S3A"==mq38){
                                
                                              uhSS38=uh38;
                                              tiemSS38=tiem38;
                                            }
                                
                                            if("P.E"==mq38){
                                
                                              uhPE38=uh38;
                                              tiemPE38=tiem38;
                                            }

                                              db.collection("FichaTecni39").where("Referencia", "==", consultaref)
                                      //.where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem39=parseInt(`${doc.data().Estandar}`);
                                            var uh39=parseInt(`${doc.data().Unidad}`);
                                            var mq39=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq39){
                                
                                              uhP39=uh39;
                                              tiemP39=tiem39;
                                            }
                                
                                            if("R"==mq39){
                                
                                              uhR39=uh39;
                                              tiemR39=tiem39;
                                            }
                                
                                            if("RR2A"==mq39){
                                
                                              uhRR39=uh39;
                                              tiemRR39=tiem39;
                                            }
                                            if("RR3A"==mq39){
                                
                                              uhRRR39=uh39;
                                              tiemRRR39=tiem39;
                                            }
                                
                                            if("F.C.P.S"==mq39){
                                
                                              uhFCPS39=uh39;
                                              tiemFCPS39=tiem39;
                                            }
                                            if("F.S.P.S"==mq39){
                                
                                              uhFSPS39=uh39;
                                              tiemFSPS39=tiem39;
                                            }
                                            if("B"==mq39){
                                
                                              uhB39=uh39;
                                              tiemB39=tiem39;
                                            }
                                            if("O"==mq39){
                                
                                              uhO39=uh39;
                                              tiemO39=tiem39;
                                            }
                                            if("M.T"==mq39){
                                
                                              uhMT39=uh39;
                                              tiemMT39=tiem39;
                                            }
                                            if("S2A"==mq39){
                                
                                              uhS39=uh39;
                                              tiemS39=tiem39;
                                            }
                                
                                            if("S3A"==mq39){
                                
                                              uhSS39=uh39;
                                              tiemSS39=tiem39;
                                            }
                                
                                            if("P.E"==mq39){
                                
                                              uhPE39=uh39;
                                              tiemPE39=tiem39;
                                            }
                       db.collection("FichaTecni40").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem40=parseInt(`${doc.data().Estandar}`);
                                            var uh40=parseInt(`${doc.data().Unidad}`);
                                            var mq40=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq40){
                                
                                              uhP40=uh40;
                                              tiemP40=tiem40;
                                            }
                                
                                            if("R"==mq40){
                                
                                              uhR40=uh40;
                                              tiemR40=tiem40;
                                            }
                                
                                            if("RR2A"==mq40){
                                
                                              uhRR40=uh40;
                                              tiemRR40=tiem40;
                                            }
                                            if("RR3A"==mq40){
                                
                                              uhRRR40=uh40;
                                              tiemRRR40=tiem40;
                                            }
                                
                                            if("F.C.P.S"==mq40){
                                
                                              uhFCPS40=uh40;
                                              tiemFCPS40=tiem40;
                                            }
                                            if("F.S.P.S"==mq40){
                                
                                              uhFSPS40=uh40;
                                              tiemFSPS40=tiem40;
                                            }
                                            if("B"==mq40){
                                
                                              uhB40=uh40;
                                              tiemB40=tiem40;
                                            }
                                            if("O"==mq40){
                                
                                              uhO40=uh40;
                                              tiemO40=tiem40;
                                            }
                                            if("M.T"==mq40){
                                
                                              uhMT40=uh40;
                                              tiemMT40=tiem40;
                                            }
                                            if("S2A"==mq40){
                                
                                              uhS40=uh40;
                                              tiemS40=tiem40;
                                            }
                                
                                            if("S3A"==mq40){
                                
                                              uhSS40=uh40;
                                              tiemSS40=tiem40;
                                            }
                                
                                            if("P.E"==mq40){
                                
                                              uhPE40=uh40;
                                              tiemPE40=tiem40;
                                            }

                                              db.collection("FichaTecni41").where("Referencia", "==", consultaref)
                                    //  .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem41=parseInt(`${doc.data().Estandar}`);
                                            var uh41=parseInt(`${doc.data().Unidad}`);
                                            var mq41=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq41){
                                
                                              uhP41=uh41;
                                              tiemP41=tiem41;
                                            }
                                
                                            if("R"==mq41){
                                
                                              uhR41=uh41;
                                              tiemR41=tiem41;
                                            }
                                
                                            if("RR2A"==mq41){
                                
                                              uhRR41=uh41;
                                              tiemRR41=tiem41;
                                            }
                                            if("RR3A"==mq41){
                                
                                              uhRRR41=uh41;
                                              tiemRRR41=tiem41;
                                            }
                                
                                            if("F.C.P.S"==mq41){
                                
                                              uhFCPS41=uh41;
                                              tiemFCPS41=tiem41;
                                            }
                                            if("F.S.P.S"==mq41){
                                
                                              uhFSPS41=uh41;
                                              tiemFSPS41=tiem41;
                                            }
                                            if("B"==mq41){
                                
                                              uhB41=uh41;
                                              tiemB41=tiem41;
                                            }
                                            if("O"==mq41){
                                
                                              uhO41=uh41;
                                              tiemO41=tiem41;
                                            }
                                            if("M.T"==mq41){
                                
                                              uhMT41=uh41;
                                              tiemMT41=tiem41;
                                            }
                                            if("S2A"==mq41){
                                
                                              uhS41=uh41;
                                              tiemS41=tiem41;
                                            }
                                
                                            if("S3A"==mq41){
                                
                                              uhSS41=uh41;
                                              tiemSS41=tiem41;
                                            }
                                
                                            if("P.E"==mq41){
                                
                                              uhPE41=uh41;
                                              tiemPE41=tiem41;
                                            }

                                               db.collection("FichaTecni42").where("Referencia", "==", consultaref)
                                      //.where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem42=parseInt(`${doc.data().Estandar}`);
                                            var uh42=parseInt(`${doc.data().Unidad}`);
                                            var mq42=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq42){
                                
                                              uhP42=uh42;
                                              tiemP42=tiem42;
                                            }
                                
                                            if("R"==mq42){
                                
                                              uhR42=uh42;
                                              tiemR42=tiem42;
                                            }
                                
                                            if("RR2A"==mq42){
                                
                                              uhRR42=uh42;
                                              tiemRR42=tiem42;
                                            }
                                            if("RR3A"==mq42){
                                
                                              uhRRR42=uh42;
                                              tiemRRR42=tiem42;
                                            }
                                
                                            if("F.C.P.S"==mq42){
                                
                                              uhFCPS42=uh42;
                                              tiemFCPS42=tiem42;
                                            }
                                            if("F.S.P.S"==mq42){
                                
                                              uhFSPS42=uh42;
                                              tiemFSPS42=tiem42;
                                            }
                                            if("B"==mq42){
                                
                                              uhB42=uh42;
                                              tiemB42=tiem42;
                                            }
                                            if("O"==mq42){
                                
                                              uhO42=uh42;
                                              tiemO42=tiem42;
                                            }
                                            if("M.T"==mq42){
                                
                                              uhMT42=uh42;
                                              tiemMT42=tiem42;
                                            }
                                            if("S2A"==mq42){
                                
                                              uhS42=uh42;
                                              tiemS42=tiem42;
                                            }
                                
                                            if("S3A"==mq42){
                                
                                              uhSS42=uh42;
                                              tiemSS42=tiem42;
                                            }
                                
                                            if("P.E"==mq42){
                                
                                              uhPE42=uh42;
                                              tiemPE42=tiem42;
                                            }

                                             db.collection("FichaTecni43").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem43=parseInt(`${doc.data().Estandar}`);
                                            var uh43=parseInt(`${doc.data().Unidad}`);
                                            var mq43=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq43){
                                
                                              uhP43=uh43;
                                              tiemP43=tiem43;
                                            }
                                
                                            if("R"==mq43){
                                
                                              uhR43=uh43;
                                              tiemR43=tiem43;
                                            }
                                
                                            if("RR2A"==mq43){
                                
                                              uhRR43=uh43;
                                              tiemRR43=tiem43;
                                            }
                                            if("RR3A"==mq43){
                                
                                              uhRRR43=uh43;
                                              tiemRRR43=tiem43;
                                            }
                                
                                            if("F.C.P.S"==mq43){
                                
                                              uhFCPS43=uh43;
                                              tiemFCPS43=tiem43;
                                            }
                                            if("F.S.P.S"==mq43){
                                
                                              uhFSPS43=uh43;
                                              tiemFSPS43=tiem43;
                                            }
                                            if("B"==mq43){
                                
                                              uhB43=uh43;
                                              tiemB43=tiem43;
                                            }
                                            if("O"==mq43){
                                
                                              uhO43=uh43;
                                              tiemO43=tiem43;
                                            }
                                            if("M.T"==mq43){
                                
                                              uhMT43=uh43;
                                              tiemMT43=tiem43;
                                            }
                                            if("S2A"==mq43){
                                
                                              uhS43=uh43;
                                              tiemS43=tiem43;
                                            }
                                
                                            if("S3A"==mq43){
                                
                                              uhSS43=uh43;
                                              tiemSS43=tiem43;
                                            }
                                
                                            if("P.E"==mq43){
                                
                                              uhPE43=uh43;
                                              tiemPE43=tiem43;
                                            }

                                             db.collection("FichaTecni44").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem44=parseInt(`${doc.data().Estandar}`);
                                            var uh44=parseInt(`${doc.data().Unidad}`);
                                            var mq44=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq44){
                                
                                              uhP44=uh44;
                                              tiemP44=tiem44;
                                            }
                                
                                            if("R"==mq44){
                                
                                              uhR44=uh44;
                                              tiemR44=tiem44;
                                            }
                                
                                            if("RR2A"==mq44){
                                
                                              uhRR44=uh44;
                                              tiemRR44=tiem44;
                                            }
                                            if("RR3A"==mq44){
                                
                                              uhRRR44=uh44;
                                              tiemRRR44=tiem44;
                                            }
                                
                                            if("F.C.P.S"==mq44){
                                
                                              uhFCPS44=uh44;
                                              tiemFCPS44=tiem44;
                                            }
                                            if("F.S.P.S"==mq44){
                                
                                              uhFSPS44=uh44;
                                              tiemFSPS44=tiem44;
                                            }
                                            if("B"==mq44){
                                
                                              uhB44=uh44;
                                              tiemB44=tiem44;
                                            }
                                            if("O"==mq44){
                                
                                              uhO44=uh44;
                                              tiemO44=tiem44;
                                            }
                                            if("M.T"==mq44){
                                
                                              uhMT44=uh44;
                                              tiemMT44=tiem44;
                                            }
                                            if("S2A"==mq44){
                                
                                              uhS44=uh44;
                                              tiemS44=tiem44;
                                            }
                                
                                            if("S3A"==mq44){
                                
                                              uhSS44=uh44;
                                              tiemSS44=tiem44;
                                            }
                                
                                            if("P.E"==mq44){
                                
                                              uhPE44=uh44;
                                              tiemPE44=tiem44;
                                            }

                                              db.collection("FichaTecni45").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem45=parseInt(`${doc.data().Estandar}`);
                                            var uh45=parseInt(`${doc.data().Unidad}`);
                                            var mq45=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq45){
                                
                                              uhP45=uhR45;
                                              tiemP45=tiem45;
                                            }
                                
                                            if("R"==mq45){
                                
                                              uhR45=uh45;
                                              tiemR45=tiem45;
                                            }
                                
                                            if("RR2A"==mq45){
                                
                                              uhRR45=uh45;
                                              tiemRR45=tiem45;
                                            }
                                            if("RR3A"==mq45){
                                
                                              uhRRR45=uh45;
                                              tiemRRR45=tiem45;
                                            }
                                
                                            if("F.C.P.S"==mq45){
                                
                                              uhFCPS45=uh45;
                                              tiemFCPS45=tiem45;
                                            }
                                            if("F.S.P.S"==mq45){
                                
                                              uhFSPS45=uh45;
                                              tiemFSPS45=tiemB45;
                                            }
                                            if("B"==mq45){
                                
                                              uhB45=uh45;
                                              tiemB45=tiem45;
                                            }
                                            if("O"==mq45){
                                
                                              uhO45=uh45;
                                              tiemO45=tiem45;
                                            }
                                            if("M.T"==mq45){
                                
                                              uhMT45=uh45;
                                              tiemMT45=tiem45;
                                            }
                                            if("S2A"==mq45){
                                
                                              uhS45=uh45;
                                              tiemS45=tiem45;
                                            }
                                
                                            if("S3A"==mq45){
                                
                                              uhSS45=uh45;
                                              tiemSS45=tiem45;
                                            }
                                
                                            if("P.E"==mq45){
                                
                                              uhPE45=uh45;
                                              tiemPE45=tiem45;
                                            }

                                              db.collection("FichaTecni46").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem46=parseInt(`${doc.data().Estandar}`);
                                            var uh46=parseInt(`${doc.data().Unidad}`);
                                            var mq46=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq46){
                                
                                              uhP46=uhR46;
                                              tiemP46=tiem46;
                                            }
                                
                                            if("R"==mq46){
                                
                                              uhR46=uh46;
                                              tiemR46=tiem46;
                                            }
                                
                                            if("RR2A"==mq46){
                                
                                              uhRR46=uh46;
                                              tiemRR46=tiem46;
                                            }
                                            if("RR3A"==mq46){
                                
                                              uhRRR46=uh46;
                                              tiemRRR46=tiem46;
                                            }
                                
                                            if("F.C.P.S"==mq46){
                                
                                              uhFCPS46=uh46;
                                              tiemFCPS46=tiem46;
                                            }
                                            if("F.S.P.S"==mq46){
                                
                                              uhFSPS46=uh46;
                                              tiemFSPS46=tiemB46;
                                            }
                                            if("B"==mq46){
                                
                                              uhB46=uh46;
                                              tiemB46=tiem46;
                                            }
                                            if("O"==mq46){
                                
                                              uhO46=uh46;
                                              tiemO46=tiem46;
                                            }
                                            if("M.T"==mq46){
                                
                                              uhMT46=uh46;
                                              tiemMT46=tiem46;
                                            }
                                            if("S2A"==mq46){
                                
                                              uhS46=uh46;
                                              tiemS46=tiem46;
                                            }
                                
                                            if("S3A"==mq46){
                                
                                              uhSS46=uh46;
                                              tiemSS46=tiem46;
                                            }
                                
                                            if("P.E"==mq46){
                                
                                              uhPE46=uh46;
                                              tiemPE46=tiem46;
                                            }

                                               db.collection("FichaTecni47").where("Referencia", "==", consultaref)
                                      //.where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem47=parseInt(`${doc.data().Estandar}`);
                                            var uh47=parseInt(`${doc.data().Unidad}`);
                                            var mq47=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq47){
                                
                                              uhP47=uhR47;
                                              tiemP47=tiem47;
                                            }
                                
                                            if("R"==mq47){
                                
                                              uhR47=uh47;
                                              tiemR47=tiem47;
                                            }
                                
                                            if("RR2A"==mq47){
                                
                                              uhRR47=uh47;
                                              tiemRR47=tiem47;
                                            }
                                            if("RR3A"==mq47){
                                
                                              uhRRR47=uh47;
                                              tiemRRR47=tiem47;
                                            }
                                
                                            if("F.C.P.S"==mq47){
                                
                                              uhFCPS47=uh47;
                                              tiemFCPS47=tiem47;
                                            }
                                            if("F.S.P.S"==mq47){
                                
                                              uhFSPS47=uh47;
                                              tiemFSPS47=tiemB47;
                                            }
                                            if("B"==mq47){
                                
                                              uhB47=uh47;
                                              tiemB47=tiem47;
                                            }
                                            if("O"==mq47){
                                
                                              uhO47=uh47;
                                              tiemO47=tiem47;
                                            }
                                            if("M.T"==mq47){
                                
                                              uhMT47=uh47;
                                              tiemMT47=tiem47;
                                            }
                                            if("S2A"==mq47){
                                
                                              uhS47=uh47;
                                              tiemS47=tiem47;
                                            }
                                
                                            if("S3A"==mq47){
                                
                                              uhSS47=uh47;
                                              tiemSS47=tiem47;
                                            }
                                
                                            if("P.E"==mq47){
                                
                                              uhPE47=uh47;
                                              tiemPE47=tiem47;
                                            }

                                               db.collection("FichaTecni48").where("Referencia", "==", consultaref)
                                      //.where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem48=parseInt(`${doc.data().Estandar}`);
                                            var uh48=parseInt(`${doc.data().Unidad}`);
                                            var mq48=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq48){
                                
                                              uhP48=uhR48;
                                              tiemP48=tiem48;
                                            }
                                
                                            if("R"==mq48){
                                
                                              uhR48=uh48;
                                              tiemR48=tiem48;
                                            }
                                
                                            if("RR2A"==mq48){
                                
                                              uhRR48=uh48;
                                              tiemRR48=tiem48;
                                            }
                                            if("RR3A"==mq48){
                                
                                              uhRRR48=uh48;
                                              tiemRRR48=tiem48;
                                            }
                                
                                            if("F.C.P.S"==mq48){
                                
                                              uhFCPS48=uh48;
                                              tiemFCPS48=tiem48;
                                            }
                                            if("F.S.P.S"==mq48){
                                
                                              uhFSPS48=uh48;
                                              tiemFSPS48=tiemB48;
                                            }
                                            if("B"==mq48){
                                
                                              uhB48=uh48;
                                              tiemB48=tiem48;
                                            }
                                            if("O"==mq48){
                                
                                              uhO48=uh48;
                                              tiemO48=tiem48;
                                            }
                                            if("M.T"==mq48){
                                
                                              uhMT48=uh48;
                                              tiemMT48=tiem48;
                                            }
                                            if("S2A"==mq48){
                                
                                              uhS48=uh48;
                                              tiemS48=tiem48;
                                            }
                                
                                            if("S3A"==mq48){
                                
                                              uhSS48=uh48;
                                              tiemSS48=tiem48;
                                            }
                                
                                            if("P.E"==mq48){
                                
                                              uhPE48=uh48;
                                              tiemPE48=tiem48;
                                            }

                                                    db.collection("FichaTecni49").where("Referencia", "==", consultaref)
                                     // .where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem49=parseInt(`${doc.data().Estandar}`);
                                            var uh49=parseInt(`${doc.data().Unidad}`);
                                            var mq49=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq49){
                                
                                              uhP49=uhR49;
                                              tiemP49=tiem49;
                                            }
                                
                                            if("R"==mq49){
                                
                                              uhR49=uh49;
                                              tiemR49=tiem49;
                                            }
                                
                                            if("RR2A"==mq49){
                                
                                              uhRR49=uh49;
                                              tiemRR49=tiem49;
                                            }
                                            if("RR3A"==mq49){
                                
                                              uhRRR49=uh49;
                                              tiemRRR49=tiem49;
                                            }
                                
                                            if("F.C.P.S"==mq49){
                                
                                              uhFCPS49=uh49;
                                              tiemFCPS49=tiem49;
                                            }
                                            if("F.S.P.S"==mq49){
                                
                                              uhFSPS49=uh49;
                                              tiemFSPS49=tiemB49;
                                            }
                                            if("B"==mq49){
                                
                                              uhB49=uh49;
                                              tiemB49=tiem49;
                                            }
                                            if("O"==mq49){
                                
                                              uhO49=uh49;
                                              tiemO49=tiem49;
                                            }
                                            if("M.T"==mq49){
                                
                                              uhMT49=uh49;
                                              tiemMT49=tiem49;
                                            }
                                            if("S2A"==mq49){
                                
                                              uhS49=uh49;
                                              tiemS49=tiem49;
                                            }
                                
                                            if("S3A"==mq49){
                                
                                              uhSS49=uh49;
                                              tiemSS49=tiem49;
                                            }
                                
                                            if("P.E"==mq49){
                                
                                              uhPE49=uh49;
                                              tiemPE49=tiem49;
                                            }

                                               db.collection("FichaTecni50").where("Referencia", "==", consultaref)
                                      //.where("Cliente", "==", consultaClient)
                                      //.where("Maquina", "==", "P1A")
                                    .get()
                                    .then(function(querySnapshot) {
                         
                      
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                            //var ur=`${doc.data().UrlFrente}`;
                                            var tiem50=parseInt(`${doc.data().Estandar}`);
                                            var uh50=parseInt(`${doc.data().Unidad}`);
                                            var mq50=`${doc.data().Maquina}`;
                                
                                            if("P1A"==mq50){
                                
                                              uhP50=uhR50;
                                              tiemP50=tiem50;
                                            }
                                
                                            if("R"==mq50){
                                
                                              uhR50=uh50;
                                              tiemR50=tiem50;
                                            }
                                
                                            if("RR2A"==mq50){
                                
                                              uhRR50=uh50;
                                              tiemRR50=tiem50;
                                            }
                                            if("RR3A"==mq50){
                                
                                              uhRRR50=uh50;
                                              tiemRRR50=tiem50;
                                            }
                                
                                            if("F.C.P.S"==mq50){
                                
                                              uhFCPS50=uh50;
                                              tiemFCPS50=tiem50;
                                            }
                                            if("F.S.P.S"==mq50){
                                
                                              uhFSPS50=uh50;
                                              tiemFSPS50=tiemB50;
                                            }
                                            if("B"==mq50){
                                
                                              uhB50=uh50;
                                              tiemB50=tiem50;
                                            }
                                            if("O"==mq50){
                                
                                              uhO50=uh50;
                                              tiemO50=tiem50;
                                            }
                                            if("M.T"==mq50){
                                
                                              uhMT50=uh50;
                                              tiemMT50=tiem50;
                                            }
                                            if("S2A"==mq50){
                                
                                              uhS50=uh50;
                                              tiemS50=tiem50;
                                            }
                                
                                            if("S3A"==mq50){
                                
                                              uhSS50=uh50;
                                              tiemSS50=tiem50;
                                            }
                                
                                            if("P.E"==mq50){
                                
                                              uhPE50=uh50;
                                              tiemPE50=tiem50;
                                            }

                                             unidadesRecu=uhR1+uhR2+uhR3+uhR4+uhR5+uhR6+uhR7+uhR8+uhR9+uhR10+uhR11+uhR12+uhR13+uhR14
                             +uhR15+uhR16+uhR17+uhR18+uhR19+uhR20+uhR21+uhR22+uhR23+uhR24+uhR25+uhR26+uhR27+uhR28+uhR29
                             +uhR30+uhR31+uhR32+uhR33+uhR34+uhR35+uhR36+uhR37+uhR38+uhR39+uhR40+uhR41+uhR42+uhR43+uhR44+uhR45+uhR46
                             +uhR47+uhR48+uhR49+uhR50


                             ;*/

                            /* UniBoto=`${doc.data().UnidadesB}`;
                             UniFcps=`${doc.data().UnidadesFCPS}`;
                             UniFsps=`${doc.data().UnidadesFSPS}`;
                             UniMt=`${doc.data().UnidadesMT}`;
                             UniO=`${doc.data().UnidadesO}`;
                             UniPlanita=`${doc.data().UnidadesP}`;
                             UniPE=`${doc.data().UnidadesPE}`;
                             UniRecu=`${doc.data().UnidadesR}`;
                             UniRR2A=`${doc.data().UnidadesRR2A}`;
                             UniRR3A=`${doc.data().UnidadesRR3A}`;
                             Unis2a=`${doc.data().UnidadesS2A}`;
                             Unis3a=`${doc.data().UnidadesS3A}`;*/


                             //-------------------------------------porcentaje unidades---------------------------------------
                          /*   db.collection("controladministradores").where("referencia", "==", consultaOP)
                            // .where("color", "==", "R")
                                              .get()
                                              .then(function(querySnapshot) {
                                                  querySnapshot.forEach(function(doc) {
                                                      // doc.data() is never undefined for query doc snapshots
                                                      console.log(doc.id, " => ", doc.data());
                                                     // var ur=`${doc.data().UrlFrente}`;
                                                  var mq=`${doc.data().color}`;
                                                   var uni=Number(`${doc.data().cantidadElaborada}`);

                                                   if(mq=="R"){

                                                    uniR=uni+uniR;

                                                    calculoPorcenRecubri=((uniR*100)/loteR);

                                                   // console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:" +uniR);
  
                                                  document.getElementById("porcenRecu").value=calculoPorcenRecubri;
                                      //  }
                                                   }
                                                   if(mq=="B"){
                                                    uniB=uni+uniB;
                                                    calculoPorcenBoto=((uniB*100)/loteBoto);

                                                 //   console.log("PRUEBA NUMERO DOS HOLAAAAAAAAAAAAAAA"+uniB);

                                                    document.getElementById("porcenBoto").value=calculoPorcenBoto;



                                                }*/


                                                   
  
  


                            

                                            //-------------------------------------------------

                          /* db.collection("controladministradores").where("referencia", "==", consultaOP)
                           .where("color", "==", "R")
                                            .get()
                                            .then(function(querySnapshot) {
                                                querySnapshot.forEach(function(doc) {
                                                    // doc.data() is never undefined for query doc snapshots
                                                    console.log(doc.id, " => ", doc.data());
                                                   // var ur=`${doc.data().UrlFrente}`;
                                                // var mq=`${doc.data().color}`;
                                                 var uni=`${doc.data().cantidadElaborada}`;

                                                  //var tiem=Number(`${doc.data().tiempo}`);
                                                  // console.log(maqu);
                                                 // if(mq==="R"){
                                                  //  uniR=uni+uniR;
                                                  uniR=uni++;
                                                    
                                                  calculoPorcenRecubri=((uniR*100)/loteR);

                                                  console.log("las unidades PORCENTUALES !!!!de R son:" +uniR);

                                                document.getElementById("porcenRecu").value=calculoPorcenRecubri;*/
                                    //  }

                                   /* db.collection("controladministradores").where("referencia", "==", consultaOP)
                                    .where("color", "==", "B")
                                    .get()
                                    .then(function(querySnapshot) {
                                        querySnapshot.forEach(function(doc) {
                                            // doc.data() is never undefined for query doc snapshots
                                            console.log(doc.id, " => ", doc.data());
                                           // var ur=`${doc.data().UrlFrente}`;
                                        // var mq=`${doc.data().color}`;
                                         var unib=Number(`${doc.data().cantidadElaborada}`);

                                                  //if(mq==="B"){
                                                    uniB=unib+uniB;
                                                   // console.log("las unidades de B son:" +uniB);

                                                    calculoPorcenBoto=((uniB*100)/loteBoto);

                                                    document.getElementById("porcenBoto").value=calculoPorcenBoto;*/





                                             //   }
                                             /*  db.collection("controladministradores")
                                               .where("referencia", "==", consultaOP).where("color", "==", "M.T")
                                            .get()
                                            .then(function(querySnapshot) {
                                                querySnapshot.forEach(function(doc) {
                                                    // doc.data() is never undefined for query doc snapshots
                                                    console.log(doc.id, " => ", doc.data());
                                                   // var ur=`${doc.data().UrlFrente}`;
                                                // var mq=`${doc.data().color}`;
                                                 var unimt=Number(`${doc.data().cantidadElaborada}`);


                                              //  if(mq==="M.T"){
                                                uniMT=unimt+uniMT;
                                                console.log("las  PORCENTUALES unidades de MT son:" +uniMT);

                                                calculoPorcenManu=((uniMT*100)/loteMt);
                                                document.getElementById("porcenManu").value=calculoPorcenManu;



                                                //}
                                                 db.collection("controladministradores")
                                                 .where("referencia", "==", consultaOP).where("color", "==", "P1A")
                                            .get()
                                            .then(function(querySnapshot) {
                                                querySnapshot.forEach(function(doc) {
                                                    // doc.data() is never undefined for query doc snapshots
                                                    console.log(doc.id, " => ", doc.data());
                                                   // var ur=`${doc.data().UrlFrente}`;
                                                // var mq=`${doc.data().color}`;
                                                 var unip1a=Number(`${doc.data().cantidadElaborada}`);

                                                
                                        
                                                //if(mq==="P1A"){
                                                    uniP=unip1a+uniP;
                                                    //console.log("las unidades de P son:" +uniP);

                                                    calculoPorcenPla=((uniP*100)/lotePlana);

                                                    document.getElementById("porcenPlana").value=calculoPorcenPla;



                                                     db.collection("controladministradores").where
                                                     ("referencia", "==", consultaOP).where("color", "==", "RR2A")
                                            .get()
                                            .then(function(querySnapshot) {
                                                querySnapshot.forEach(function(doc) {
                                                    // doc.data() is never undefined for query doc snapshots
                                                    console.log(doc.id, " => ", doc.data());
                                                   // var ur=`${doc.data().UrlFrente}`;
                                                // var mq=`${doc.data().color}`;
                                                 var unirr2a=Number(`${doc.data().cantidadElaborada}`);

                                               // }
                                              //  if(mq==="RR2A"){
                                                    uniRR2A=unirr2a+uniRR2A;

                                                    calculoPorcenRR2A=((uniRR2A*100)/loteRR2A);

                                                    document.getElementById("porcenRR2A").value=calculoPorcenRR2A;


                                           //   }
                                           db.collection("controladministradores").where
                                           ("referencia", "==", consultaOP).where("color", "==", "RR3A")
                                           .get()
                                           .then(function(querySnapshot) {
                                               querySnapshot.forEach(function(doc) {
                                                   // doc.data() is never undefined for query doc snapshots
                                                   console.log(doc.id, " => ", doc.data());
                                                  // var ur=`${doc.data().UrlFrente}`;
                                               // var mq=`${doc.data().color}`;
                                                var unirr3a=Number(`${doc.data().cantidadElaborada}`);

                                            //  if(mq==="RR3A"){
                                                uniRR3A=unirr3a+uniRR3A;
                                                calculoPorcenRR3A=((uniRR3A*100)/loteRR3A);

                                                document.getElementById("porcenRR3A").value=calculoPorcenRR3A;


                                            //  }
                                              db.collection("controladministradores").where
                                              ("referencia", "==", consultaOP).where("color", "==", "F.C.P.S")
                                           .get()
                                           .then(function(querySnapshot) {
                                               querySnapshot.forEach(function(doc) {
                                                   // doc.data() is never undefined for query doc snapshots
                                                   console.log(doc.id, " => ", doc.data());
                                                  // var ur=`${doc.data().UrlFrente}`;
                                               // var mq=`${doc.data().color}`;
                                                var unifcps=Number(`${doc.data().cantidadElaborada}`);

                                               //if(mq==="F.C.P.S"){
                                                uniFCPS=unifcps+uniFCPS;
                                              //  console.log("las unidades de FCPS son:" +uniFCPS);
                                                calculoPorcenFCps=((uniFCPS*100)/loteFcps);

                                                document.getElementById("porcenFcps").value=calculoPorcenFCps;



                                                //  }
                                                 db.collection("controladministradores").where
                                                 ("referencia", "==", consultaOP).where("color", "==", "F.S.P.S")
                                           .get()
                                           .then(function(querySnapshot) {
                                               querySnapshot.forEach(function(doc) {
                                                   // doc.data() is never undefined for query doc snapshots
                                                   console.log(doc.id, " => ", doc.data());
                                                  // var ur=`${doc.data().UrlFrente}`;
                                               // var mq=`${doc.data().color}`;
                                                var unifsps=Number(`${doc.data().cantidadElaborada}`);

                                                 // if(mq==="F.S.P.S"){
                                                    uniFSPS=unifsps+uniFSPS;
                                                    calculoPorcenFSPS=((uniFSPS*100)/loteFsps);

                                                    document.getElementById("porcenFsps").value=calculoPorcenFSPS;


                                                //}
                                                db.collection("controladministradores").where
                                                ("referencia", "==", consultaOP).where("color", "==", "O")
                                           .get()
                                           .then(function(querySnapshot) {
                                               querySnapshot.forEach(function(doc) {
                                                   // doc.data() is never undefined for query doc snapshots
                                                   console.log(doc.id, " => ", doc.data());
                                                  // var ur=`${doc.data().UrlFrente}`;
                                               // var mq=`${doc.data().color}`;
                                                var unio=Number(`${doc.data().cantidadElaborada}`);

                                                //if(mq==="O"){
                                                    uniO=unio+uniO;
                                                 //   console.log("las unidades de O son:" +uniO);

                                                    calculoPorcenO=((uniO*100)/loteO);

                                                    document.getElementById("porcenOjala").value=calculoPorcenO;



                                               // }
                                               db.collection("controladministradores").where
                                               ("referencia", "==", consultaOP).where("color", "==", "S2A")
                                           .get()
                                           .then(function(querySnapshot) {
                                               querySnapshot.forEach(function(doc) {
                                                   // doc.data() is never undefined for query doc snapshots
                                                   console.log(doc.id, " => ", doc.data());
                                                  // var ur=`${doc.data().UrlFrente}`;
                                               // var mq=`${doc.data().color}`;
                                                var unis2a=Number(`${doc.data().cantidadElaborada}`);

                                                //if(mq==="S2A"){
                                                    //uniS2A=unis2a++;
                                                    uniS2A=unis2a+uniS2A;

                                                    calculoPorcenS2A=((uniS2A*100)/loteS2A);

                                                    document.getElementById("porcenS2A").value=calculoPorcenS2A;


                                                 // }
                                                 db.collection("controladministradores").where
                                                 ("referencia", "==", consultaOP).where("color", "==", "S3A")
                                                 .get()
                                                 .then(function(querySnapshot) {
                                                     querySnapshot.forEach(function(doc) {
                                                         // doc.data() is never undefined for query doc snapshots
                                                         console.log(doc.id, " => ", doc.data());
                                                        // var ur=`${doc.data().UrlFrente}`;
                                                     // var mq=`${doc.data().color}`;
                                                      var unis3a=Number(`${doc.data().cantidadElaborada}`);
      
                                                  //if(mq==="S3A"){
                                                    uniS3A=unis3a+uniS3A;
                                                    calculoPorcenS3A=((uniS3A*100)/loteS3A);
                                                    document.getElementById("porcenS3A").value=calculoPorcenS3A;


                                               // }
                                               db.collection("controladministradores").where
                                               ("referencia", "==", consultaOP).where("color", "==", "P.E")
                                                 .get()
                                                 .then(function(querySnapshot) {
                                                     querySnapshot.forEach(function(doc) {
                                                         // doc.data() is never undefined for query doc snapshots
                                                         console.log(doc.id, " => ", doc.data());
                                                        // var ur=`${doc.data().UrlFrente}`;
                                                     // var mq=`${doc.data().color}`;
                                                      var unipe=Number(`${doc.data().cantidadElaborada}`);
      
                                               // if(mq==="P.E"){
                                                    uniPE=unipe+uniPE;
                                                    calculoPorcenPE=((uniPE*100)/lotePE);

                                                    document.getElementById("porcenPE").value=calculoPorcenPE;


                                             //   }
                                                            */






                                          


                                            //----------------------------------------------



       
       
                              /*  tiempRR2A=tiemRR1+tiemRR2+tiemRR3+tiemRR4+tiemRR5+tiemRR6+tiemRR7+tiemRR8+tiemRR9+tiemRR10+tiemRR11+tiemRR12
                                +tiemRR13+tiemRR14+tiemRR15+tiemRR16+tiemRR17+tiemRR18+tiemRR19+tiemRR20+tiemRR21+tiemRR22+tiemRR23+tiemRR24
                                +tiemRR25+tiemRR26+tiemRR27+tiemRR28+tiemRR29+tiemRR30+tiemRR31+tiemRR32+tiemRR33+tiemRR34+
                                tiemRR35+tiemRR36+tiemRR37+tiemRR38+tiemRR39+tiemRR40+tiemRR41+tiemRR42+tiemRR43+tiemRR44+
                                tiemRR45+tiemRR46+tiemRR47+tiemRR48+tiemRR49+tiemRR50;*/
                             
                              /*  unidadesRR2A=uhRR1+uhRR2+uhRR3+uhRR4+uhRR5+uhRR6+uhRR7+uhRR8+uhRR9+uhRR10+uhRR11+uhRR12+uhRR13+uhRR14+
                                uhRR15+uhRR16+uhRR17+uhRR18+uhRR19+uhRR20+uhRR21+uhRR22+uhRR23+uhRR24+uhRR25+uhRR26+uhRR27+uhRR28+uhRR29
                                +uhRR30+uhRR31+uhRR32+uhRR33+uhRR34+uhRR35+uhRR36+uhRR37+uhRR38+uhRR39+uhRR40+uhRR41+uhRR42+uhRR43+uhRR44
                                +uhRR45+uhRR46+uhRR47+uhRR48+uhRR49+uhRR50;*/
                             
                                //--------------------------------RR3A---------------------------------------------
                             
                               /* tiempRR3A=tiemRRR1+tiemRRR2+tiemRRR3+tiemRRR4+tiemRRR5+tiemRRR6+tiemRRR7+tiemRRR8+tiemRRR9+tiemRRR10+tiemRRR11+
                                tiemRRR12+tiemRRR13+tiemRRR14+tiemRRR15+tiemRRR16+tiemRRR17+tiemRRR18+tiemRRR19+tiemRRR20+tiemRRR21+tiemRRR22+
                                tiemRRR23+tiemRRR24+tiemRRR25+tiemRRR26+tiemRRR27+tiemRRR28+tiemRRR29+tiemRRR30+tiemRRR31+tiemRRR32+tiemRRR33+
                                tiemRRR34+tiemRRR35+tiemRRR36+tiemRRR37+tiemRRR38+tiemRRR39+tiemRRR40+tiemRRR41+tiemRRR42+tiemRRR43+tiemRRR44
                                +tiemRRR45+tiemRRR46+tiemRRR47+tiemRRR48+tiemRRR49+tiemRRR50;*/
                             
                            /*    unidadesRR3A=uhRRR1+uhRRR2+uhRRR3+uhRRR4+uhRRR5+uhRRR6+uhRRR7+uhRRR8+uhRRR9+uhRRR10+uhRRR11+uhRRR12+uhRRR13+
                                uhRRR14+uhRRR15+uhRRR16+uhRRR17+uhRRR18+uhRRR19+uhRRR20+uhRRR21+uhRRR22+uhRRR23+uhRRR24+uhRRR25+uhRRR26+uhRRR27
                                +uhRRR28+uhRRR29+uhRRR30+uhRRR31+uhRRR32+uhRRR33+uhRRR34+uhRRR35+uhRRR36+uhRRR37+uhRRR38+uhRRR39+uhRRR40
                                +uhRRR41+uhRRR42+uhRRR43+uhRRR44+uhRRR45+uhRRR46+uhRRR47+uhRRR48+uhRRR49+uhRRR50;
                             */
                                //--------------------------------FCPS------------------------------------------
                             
                               /* tiempFCPS=tiemFCPS1+tiemFCPS2+tiemFCPS3+tiemFCPS4+tiemFCPS5+tiemFCPS6+tiemFCPS7+tiemFCPS8+tiemFCPS9+tiemFCPS10
                                +tiemFCPS11+tiemFCPS12+tiemFCPS13+tiemFCPS14+tiemFCPS15+tiemFCPS16+tiemFCPS17+tiemFCPS18+tiemFCPS19+tiemFCPS20+
                                tiemFCPS21+tiemFCPS22+tiemFCPS23+tiemFCPS24+tiemFCPS25+tiemFCPS26+tiemFCPS27+tiemFCPS28+tiemFCPS29+tiemFCPS30
                                +tiemFCPS31+tiemFCPS32+tiemFCPS33+tiemFCPS34+tiemFCPS35+tiemFCPS36+tiemFCPS37+tiemFCPS38+tiemFCPS39+tiemFCPS40
                                +tiemFCPS41+tiemFCPS42+tiemFCPS43+tiemFCPS44+tiemFCPS45+tiemFCPS46+tiemFCPS47+tiemFCPS48+tiemFCPS49+tiemFCPS50;*/
                             
                             /*  unidadesFCPS=uhFCPS1+uhFCPS2+uhFCPS3+uhFCPS4+uhFCPS5+uhFCPS6+uhFCPS7+uhFCPS8+uhFCPS9+uhFCPS10+uhFCPS11+uhFCPS12+
                               uhFCPS13+uhFCPS14+uhFCPS15+uhFCPS16+uhFCPS17+uhFCPS18+uhFCPS19+uhFCPS20+uhFCPS21+uhFCPS22+uhFCPS23+uhFCPS24+
                               uhFCPS25+uhFCPS26+uhFCPS27+uhFCPS28+uhFCPS29+uhFCPS30+uhFCPS31+uhFCPS32+uhFCPS33+uhFCPS34+uhFCPS35+uhFCPS36+
                               uhFCPS37+uhFCPS38+uhFCPS39+uhFCPS40+uhFCPS41+uhFCPS42+uhFCPS43+uhFCPS44+uhFCPS45+uhFCPS46+uhFCPS47+uhFCPS48+
                               uhFCPS49+uhFCPS50;*/
                             
                               //-----------------------------------S2A------------------------------
                             
                               /*tiempS2A=tiemS1+tiemS2+tiemS3+tiemS4+tiemS5+tiemS6+tiemS7+tiemS8+tiemS9+tiemS10+tiemS11+tiemS12+tiemS13+tiemS14
                               +tiemS15+tiemS16+tiemS17+tiemS18+tiemS19+tiemS20+tiemS21+tiemS22+tiemS23+tiemS24+tiemS25+tiemS26+tiemS27+tiemS28
                               +tiemS29+tiemS30+tiemS31+tiemS32+tiemS33+tiemS34+tiemS35+tiemS36+tiemS37+tiemS38+tiemS39+tiemS40+tiemS41+tiemS42+
                               tiemS43+tiemS44+tiemS45+tiemS46+tiemS47+tiemS48+tiemS49+tiemS50;*/
                             
                             /*  unidadesS2A=uhS1+uhS2+uhS3+uhS4+uhS5+uhS6+uhS7+uhS8+uhS9+uhS10+uhS11+uhS12+uhS13+uhS14+uhS15+uhS16+uhS17+uhS18
                               +uhS19+uhS20+uhS21+uhS22+uhS23+uhS24+uhS25+uhS26+uhS27+uhS28+uhS29+uhS30+uhS31+uhS32+uhS33+uhS34+uhS35+uhS36+uhS37
                               +uhS38+uhS39+uhS40+uhS41+uhS42+uhS43+uhS44+uhS45+uhS46+uhS47+uhS48+uhS49+uhS50;
                             */
                               //-----------------------------S3A--------------------------------------------
                             
                             /*  tiempS3A=tiemSS1+tiemSS2+tiemSS3+tiemSS4+tiemSS5+tiemSS6+tiemSS7+tiemSS8+tiemSS9+tiemSS10+tiemSS11+tiemSS12
                               +tiemSS13+tiemSS14+tiemSS15+tiemSS16+tiemSS17+tiemSS18+tiemSS19+tiemSS20+tiemSS21+tiemSS22+tiemSS23+tiemSS24
                               +tiemSS25+tiemSS26+tiemSS27+tiemSS28+tiemSS29+tiemSS30+tiemSS31+tiemSS32+tiemSS33+tiemSS34+tiemSS35+tiemSS36
                               +tiemSS37+tiemSS38+tiemSS39+tiemSS40+tiemSS41+tiemSS42+tiemSS43+tiemSS44+tiemSS45+tiemSS46+tiemSS47+tiemSS48
                               +tiemSS49+tiemSS50;*/
                             
                               /*unidadesS3A=uhSS1+uhSS2+uhSS3+uhSS4+uhSS5+uhSS6+uhSS7+uhSS8+uhSS9+uhSS10+uhSS11+uhSS12+uhSS13+uhSS14+uhSS15+
                               uhSS16+uhSS17+uhSS18+uhSS19+uhSS20+uhSS21+uhSS22+uhSS23+uhSS24+uhSS25+uhSS26+uhSS27+uhSS28+uhSS29+uhSS30+uhSS31+
                               uhSS32+uhSS33+uhSS34+uhSS35+uhSS36+uhSS37+uhSS38+uhSS39+uhSS40+uhSS41+uhSS42+uhSS43+uhSS44+uhSS45+uhSS46+uhSS47
                               +uhSS48+uhSS49+uhSS50;*/
                             
                               //-----------------------------------PE----------------------------------------
                             
                            /*   tiempPE=tiemPE1+tiemPE2+tiemPE3+tiemPE4+tiemPE5+tiemPE6+tiemPE7+tiemPE8+tiemPE9+tiemPE10+tiemPE11+tiemPE12
                               +tiemPE13+tiemPE14+tiemPE15+tiemPE16+tiemPE17+tiemPE18+tiemPE19+tiemPE20+tiemPE21+tiemPE22+tiemPE23+tiemPE24+
                               tiemPE25+tiemPE26+tiemPE27+tiemPE28+tiemPE29+tiemPE30+tiemPE31+tiemPE32+tiemPE33+tiemPE34+tiemPE35+tiemPE36+
                               tiemPE37+tiemPE38+tiemPE39+tiemPE40+tiemPE41+tiemPE42+tiemPE43+tiemPE44+tiemPE45+tiemPE46+tiemPE47+tiemPE48+
                               tiemPE49+tiemPE50;*/
                             
                             
                              /* unidadesPE=uhPE1+uhPE2+uhPE3+uhPE4+uhPE5+uhPE6+uhPE7+uhPE8+uhPE9+uhPE10+uhPE11+uhPE12+uhPE13+uhPE14+uhPE15+uhPE16
                               uhPE17+uhPE18+uhPE19+uhPE20+uhPE21+uhPE22+uhPE23+uhPE24+uhPE25+uhPE26+uhPE27+uhPE28+uhPE29+uhPE30+uhPE31+uhPE32+
                               uhPE33+uhPE34+uhPE35+uhPE36+uhPE37+uhPE38+uhPE39+uhPE40+uhPE41+uhPE42+uhPE43+uhPE44+uhPE45+uhPE46+uhPE47+uhPE48+
                               uhPE49+uhPE50;*/

                               
                             
                             
                                                   
                                              //-------------plana---------------------------
                           /*  tiempPlana=tiemP1+tiemP2+tiemP3+tiemP4+tiemP5+tiemP6+tiemP7+tiemP8+tiemP9+tiemP10+
                             tiemP11+tiemP12+tiemP13+tiemP14+tiemP15+tiemP16+tiemP17+tiemP18+tiemP19+tiemP20
                             +tiemP21+tiemP22+tiemP23+tiemP24+tiemP25+tiemP26+tiemP27+tiemP28+tiemP29+tiemP30+tiemP31+tiemP32+tiemP33+tiemP34
                             +tiemP35+tiemP36+tiemP37+tiemP38+tiemP39+tiemP40+tiemP41+tiemP42+tiemP43+tiemP44+tiemP45+tiemP46+tiemP47+tiemP48
                             +tiemP49+tiemP50
                             ;*/
                             
                            /* unidadesPlana=uhP1+uhP2+uhP3+uhP4+uhP5+uhP6+uhP7+uhP8+uhP9+uhP10+uhP11+uhP12+
                             uhP13+uhP14+uhP15+uhP16+uhP17+uhP18+uhP19+uhP20+uhP21+uhP22+uhP23+uhP24+uhP25+uhP26
                             +uhP27+uhP28+uhP29+uhP30+uhP31+uhP32+uhP33+uhP34+uhP35+uhP36+uhP37+uhP38+uhP39+uhP40+uhP41+uhP42+uhP43+uhP44+
                             uhP45+uhP46+uhP47+uhP48+uhP49+uhP50
                             ;*/
                             //----------------------------recubridora--------------------------------
                           /*  tiempRecu=tiemR1+tiemR2+tiemR3+tiemR4+tiemR5+tiemR6+tiemR7+tiemR8+tiemR9+tiemR10+
                             tiemR11+tiemR12+tiemR13+tiemR14+tiemR15+tiemR16+tiemR17+tiemR18+tiemR19+tiemR20+tiemR21
                             +tiemR22+tiemR23+tiemR24+tiemR25+tiemR26+tiemR27+tiemR28+tiemR29+tiemR30+tiemR31+tiemR32+tiemR33+tiemR34+tiemR35+
                             tiemR36+tiemR37+tiemR38+tiemR39+tiemR40+tiemR41+tiemR42+tiemR43+tiemR44+tiemR45+tiemR46+tiemR47+tiemR48+tiemR49+
                             tiemR50
                             ;*/
                             
                             
                             //----------------------fsps-------------------
                           /*  tiempFSPS=tiemFSPS1+tiemFSPS2+tiemFSPS3+tiemFSPS4+tiemFSPS5+tiemFSPS6+tiemFSPS7+
                             tiemFSPS8+tiemFSPS9+tiemFSPS10+tiemFSPS11+tiemFSPS12+tiemFSPS13+tiemFSPS14+tiemFSPS15
                             +tiemFSPS16+tiemFSPS17+tiemFSPS18+tiemFSPS19+tiemFSPS20+tiemFSPS21+tiemFSPS22+tiemFSPS23
                             +tiemFSPS24+tiemFSPS25+tiemFSPS26+tiemFSPS27+tiemFSPS28+tiemFSPS29+tiemFSPS30+tiemFSPS31+tiemFSPS32+tiemFSPS33
                             +tiemFSPS34+tiemFSPS35+tiemFSPS36+tiemFSPS37+tiemFSPS38+tiemFSPS39+tiemFSPS40+tiemFSPS41+tiemFSPS42+tiemFSPS43+
                             tiemFSPS44
                             +tiemFSPS45+tiemFSPS46+tiemFSPS47+tiemFSPS48+tiemFSPS49+tiemFSPS50
                             ;*/
                             
                           /*  unidadesFSPS=uhFSPS1+uhFSPS2+uhFSPS3+uhFSPS4+uhFSPS5+uhFSPS6+uhFSPS7+uhFSPS8+uhFSPS9+
                             uhFSPS10+uhFSPS11+uhFSPS12+uhFSPS13+uhFSPS14+uhFSPS15+uhFSPS16+uhFSPS17+uhFSPS18+uhFSPS19
                             +uhFSPS20+uhFSPS21+uhFSPS22+uhFSPS23+uhFSPS24+uhFSPS25+uhFSPS26+uhFSPS27+uhFSPS28
                             +uhFSPS29+uhFSPS30+uhFSPS31+uhFSPS32+uhFSPS33+uhFSPS34+uhFSPS35+uhFSPS36+uhFSPS37+uhFSPS38+uhFSPS39
                             +uhFSPS40+uhFSPS41+uhFSPS42+uhFSPS43+uhFSPS44+uhFSPS45+uhFSPS46+uhFSPS47+uhFSPS48+uhFSPS49+uhFSPS50
                             ;
                             */
                             //--------------------------B-------------------
                             
                           /*  tiempB=tiemB1+tiemB2+tiemB3+tiemB4+tiemB5+tiemB6+tiemB7+tiemB8+tiemB9+tiemB10+tiemB11+
                             tiemB12+tiemB13+tiemB14+tiemB15+tiemB16+tiemB17+tiemB18+tiemB19+tiemB20+tiemB21+tiemB22
                             +tiemB23+tiemB24+tiemB25+tiemB26+tiemB27+tiemB28+tiemB29+tiemB30+tiemB31+tiemB32+tiemB33+tiemB34+tiemB35+
                             tiemB36+tiemB37+tiemB38+tiemB39+tiemB40+tiemB41+tiemB42+tiemB43+tiemB44+tiemB45+tiemB46+tiemB47+tiemB48+tiemB49
                             +tiemB50
                             ;*/
                             
                             /*unidadesB=uhB1+uhB2+uhB3+uhB4+uhB5+uhB6+uhB7+uhB8+uhB9+uhB10+uhB11+uhB12+uhB13+uhB14+uhB15
                             +uhB16+uhB17+uhB18+uhB19+uhB20+uhB21+uhB22+uhB23+uhB24+uhB25+uhB26+uhB27+uhB28+uhB29+uhB30+uhB31+uhB32+uhB33
                             +uhB34+uhB35+uhB36+uhB37+uhB38+uhB39+uhB40+uhB41+uhB42+uhB43+uhB44+uhB45+uhB46+uhB47+uhB48+uhB49+uhB50
                             ;*/
                             
                             //---------------------------MT------------------
                             
                            /* tiempMT=tiemMT1+tiemMT2+tiemMT3+tiemMT4+tiemMT5+tiemMT6+tiemMT7+tiemMT8+tiemMT9+tiemMT10+
                             tiemMT11+tiemMT12+tiemMT13+tiemMT14+tiemMT15+tiemMT16+tiemMT17+tiemMT18+tiemMT19+tiemMT20
                             +tiemMT21+tiemMT22+tiemMT23+tiemMT24+tiemMT25+tiemMT26+tiemMT27+tiemMT28+tiemMT29+tiemMT30+tiemMT31+tiemMT32
                             +tiemMT33+tiemMT34+tiemMT35+tiemMT36+tiemMT37+tiemMT38+tiemMT39+tiemMT40+tiemMT41+tiemMT42+tiemMT43+tiemMT44
                             +tiemMT45+tiemMT46+tiemMT47+tiemMT48+tiemMT49+tiemMT50
                             ;*/
                             
                            /* unidadesMT=uhMT1+uhMT2+uhMT3+uhMT4+uhMT5+uhMT6+uhMT7+uhMT8+uhMT9+uhMT10+uhMT11+uhMT12+uhMT13+
                             uhMT14+uhMT15+uhMT16+uhMT17+uhMT18+uhMT19+uhMT20+uhMT21+uhMT22+uhMT23+uhMT24+uhMT25+uhMT26
                             +uhMT27+uhMT28+uhMT29+uhMT30+uhMT31+uhMT32+uhMT33+uhMT34+uhMT35+uhMT36+uhMT37+uhMT38+uhMT39+uhMT40+uhMT41+
                             uhMT42+uhMT43+uhMT44+uhMT45+uhMT46+uhMT47+uhMT48+uhMT49+uhMT50
                             ;*/
                             
                             //------------------------O---------------------------------------------------
                             
                             
                          /*   tiempO=tiemO1+tiemO2+tiemO3+tiemO4+tiemO5+tiemO6+tiemO7+tiemO8+tiemO9+tiemO10+tiemO11+
                             tiemO12+tiemO13+tiemO14+tiemO15+tiemO16+tiemO17+tiemO18+tiemO19+tiemO20+tiemO21+tiemO22
                             +tiemO23+tiemO24+tiemO25+tiemO26+tiemO27+tiemO28+tiemO29+tiemO30+tiemO31+tiemO32+tiemO33+tiemO34+tiemO35+
                             tiemO36+tiemO37+tiemO38+tiemO39+tiemO40+tiemO41+tiemO42+tiemO43+tiemO44+tiemO45+tiemO46+tiemO47+tiemO48+
                             tiemO49+tiemO50
                             ;*/
                             
                            /* unidadesO=uhO1+uhO2+uhO3+uhO4+uhO5+uhO6+uhO7+uhO8+uhO9+uhO10+uhO11+uhO12+uhO13+uhO14+uhO15
                             +uhO16+uhO17+uhO18+uhO19+uhO20+uhO21+uhO22+uhO23+uhO24+uhO25+uhO26+uhO27+uhO28+uhO29+uhO30+uhO31+uhO32+uhO33
                             +uhO34+uhO35+uhO36+uhO37+uhO38+uhO39+uhO40+uhO41+uhO42+uhO43+uhO44+uhO45+uhO46+uhO47+uhO48+uhO49+uhO50
                             ;*/
                             
                           /*  TOTALtiempo=tiempPlana+tiempRecu+tiempFSPS+tiempB+tiempMT+tiempO+tiempRR2A+tiempRR3A+tiempFCPS+tiempS2A
                             +tiempS3A+tiempPE;
                             
                             TOTALunidades=unidadesPlana+unidadesRecu+unidadesFSPS+unidadesB+unidadesMT+unidadesO+unidadesRR2A+unidadesRR3A+
                             unidadesFCPS+unidadesS2A+unidadesS3A+unidadesPE;*/
                             
                             /*console.log("vamos a ver si da re:"+unidadesRecu);
                             console.log("vamos a ver si da v:"+unidadesB);
                             console.log("vamos a ver si da mt:"+unidadesMT);*/


                             
                             
                             
                             
                             
                                });
                            })

                            });
                            })
                           
                            });
                            })

                           });
                            })

                          /* });
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
                            
                              //  });    ESTEEEEEEEEEEEEEEEEEEEEEEE
                      //      })              ESTEEEEEEEEEEEEEEEEEEEEEEEEE
                            
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
                            })*/
                         
                         
                         
                         
                         
                         
                         
                         
                         
                  

                   //--------------------------------------------------------------------

        






         
        /*  tabl.innerHTML +=`
          <tr>
      <th scope="row">${mq}</th>
      <td>${doc.data().tiempo}</td>
      </tr>

 
 
 `*/
                   

           // var maqu=`${doc.data().color}`;
           // var tiem=`${doc.data().tiempo}`;

           
           /*   });
    })


           
              });
    })


            

  
        });
    })

    
              });
    })*/

}

//-------------------------------------tablas produccion--------------------------------------
TablaPro=function() {

    var tabl=document.getElementById("tabla");
      var consultaOP=document.getElementById("buscaCedu").value;
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

               document.getElementById("cantiOp").value=canti;
               document.getElementById("RefOp").value=consultaref;




      //---------------------------------------------------------------------------

      db.collection("FichaTecni").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
        tabl.innerHTML ="";
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
                   tabl.innerHTML ="";
                     querySnapshot.forEach(function(doc) {
                         // doc.data() is never undefined for query doc snapshots
                         console.log(doc.id, " => ", doc.data());
                          OpFic50=`${doc.data().Codigo}`;
                          UniFich50=`${doc.data().Unidad}`;
                          estan50=`${doc.data().Estandar}`;

           
           
                            //  RendimientoOp=(cantidadElabo*100)/(UniFich30/3600);
           

      //---------------------------------------------------------------------------

    db.collection("controladministradores").where("referencia", "==", consultaOP).orderBy("TiempoIni", "desc")
    .get()
    .then(function(querySnapshot) {
        tabl.innerHTML ="";

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           // var ur=`${doc.data().UrlFrente}`;
          Operario=`${doc.data().usuariooperario}`;
          Maqui=`${doc.data().color}`;
          
          inicio=`${doc.data().TiempoIni}`;


          Operacion=`${doc.data().operacionElaborada}`;
          cantidadElabo=`${doc.data().cantidadElaborada}`;
          tiemTrabajado=`${doc.data().tiempo}`;


          if(Operacion==OpFic1){
            tiempEstan=estan1;
            relaTiemp=(cantidadElabo*3600)/UniFich1;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;


          }
          if(Operacion==OpFic2){
            tiempEstan=estan2;

            relaTiemp=(cantidadElabo*3600)/UniFich2;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic3){
            tiempEstan=estan3;

            relaTiemp=(cantidadElabo*3600)/UniFich3;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic4){
            tiempEstan=estan4;

            relaTiemp=(cantidadElabo*3600)/UniFich4;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic5){
            tiempEstan=estan5;

            relaTiemp=(cantidadElabo*3600)/UniFich5;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic6){
            tiempEstan=estan6;

            relaTiemp=(cantidadElabo*3600)/UniFich6;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic7){
            tiempEstan=estan7;

            relaTiemp=(cantidadElabo*3600)/UniFich7;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic8){
            tiempEstan=estan8;

            relaTiemp=(cantidadElabo*3600)/UniFich8;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic9){
            tiempEstan=estan9;

            relaTiemp=(cantidadElabo*3600)/UniFich9;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic10){
            tiempEstan=estan10;

            relaTiemp=(cantidadElabo*3600)/UniFich10;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic11){
            tiempEstan=estan11;

            relaTiemp=(cantidadElabo*3600)/UniFich11;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic12){
            tiempEstan=estan12;

            relaTiemp=(cantidadElabo*3600)/UniFich12;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic13){
            tiempEstan=estan13;

            relaTiemp=(cantidadElabo*3600)/UniFich13;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic14){
            tiempEstan=estan14;

            relaTiemp=(cantidadElabo*3600)/UniFich14;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic15){
            tiempEstan=estan15;

            relaTiemp=(cantidadElabo*3600)/UniFich15;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic16){
            tiempEstan=estan16;

            relaTiemp=(cantidadElabo*3600)/UniFich16;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic17){
            tiempEstan=estan17;

            relaTiemp=(cantidadElabo*3600)/UniFich17;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic18){
            tiempEstan=estan18;

            relaTiemp=(cantidadElabo*3600)/UniFich18;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic19){
            tiempEstan=estan19;

            relaTiemp=(cantidadElabo*3600)/UniFich19;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic20){
            tiempEstan=estan20;

            relaTiemp=(cantidadElabo*3600)/UniFich20;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic21){
            tiempEstan=estan21;

            relaTiemp=(cantidadElabo*3600)/UniFich21;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic22){
            tiempEstan=estan22;

            relaTiemp=(cantidadElabo*3600)/UniFich22;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic23){
            tiempEstan=estan23;

            relaTiemp=(cantidadElabo*3600)/UniFich23;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic24){
            tiempEstan=estan24;

            relaTiemp=(cantidadElabo*3600)/UniFich24;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic25){
            tiempEstan=estan25;

            relaTiemp=(cantidadElabo*3600)/UniFich25;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic26){
            tiempEstan=estan26;

            relaTiemp=(cantidadElabo*3600)/UniFich26;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic27){
            tiempEstan=estan27;

            relaTiemp=(cantidadElabo*3600)/UniFich27;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic28){
            tiempEstan=estan28;

            relaTiemp=(cantidadElabo*3600)/UniFich28;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic29){
            tiempEstan=estan29;

            relaTiemp=(cantidadElabo*3600)/UniFich29;

            RendimientoOp=(relaTiemp*100)/tiemTrabajado;
          }
          if(Operacion==OpFic30){
            tiempEstan=estan30;

            relaTiemp=(cantidadElabo*3600)/UniFich30;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }

          if(Operacion==OpFic31){
            tiempEstan=estan31;

            relaTiemp=(cantidadElabo*3600)/UniFich31;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic32){
            tiempEstan=estan32;

            relaTiemp=(cantidadElabo*3600)/UniFich32;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic33){
            tiempEstan=estan33;

            relaTiemp=(cantidadElabo*3600)/UniFich33;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic34){
            tiempEstan=estan34;

            relaTiemp=(cantidadElabo*3600)/UniFich34;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic35){
            tiempEstan=estan35;

            relaTiemp=(cantidadElabo*3600)/UniFich35;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic36){
            tiempEstan=estan36;

            relaTiemp=(cantidadElabo*3600)/UniFich36;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic37){
            tiempEstan=estan37;

            relaTiemp=(cantidadElabo*3600)/UniFich37;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic38){
            tiempEstan=estan38;

            relaTiemp=(cantidadElabo*3600)/UniFich38;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic39){
            tiempEstan=estan39;

            relaTiemp=(cantidadElabo*3600)/UniFich39;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic40){
            tiempEstan=estan40;

            relaTiemp=(cantidadElabo*3600)/UniFich40;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic41){
            tiempEstan=estan41;

            relaTiemp=(cantidadElabo*3600)/UniFich41;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic42){
            tiempEstan=estan42;

            relaTiemp=(cantidadElabo*3600)/UniFich42;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic43){
            tiempEstan=estan43;

            relaTiemp=(cantidadElabo*3600)/UniFich43;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic44){
            tiempEstan=estan44;

            relaTiemp=(cantidadElabo*3600)/UniFich44;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic45){
            tiempEstan=estan45;

            relaTiemp=(cantidadElabo*3600)/UniFich45;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic46){
            tiempEstan=estan46;

            relaTiemp=(cantidadElabo*3600)/UniFich46;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic47){
            tiempEstan=estan47;

            relaTiemp=(cantidadElabo*3600)/UniFich47;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic48){
            tiempEstan=estan48;

            relaTiemp=(cantidadElabo*3600)/UniFich48;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic49){
            tiempEstan=estan49;

            relaTiemp=(cantidadElabo*3600)/UniFich49;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }
          if(Operacion==OpFic50){
            tiempEstan=estan50;

            relaTiemp=(cantidadElabo*3600)/UniFich50;

            RendimientoOp=((relaTiemp*100)/tiemTrabajado);
          }

          tabl.innerHTML +=`
          <tr>
      <th scope="row">${Operario}</th>
      <th scope="row">${inicio}</th>

      <th scope="row">${Maqui}</th>

      <td>${Operacion}</td>
      <td>${tiempEstan}seg</td>

      <td>${cantidadElabo}</td>
      <td>${(tiemTrabajado/60).toFixed(2)} Min</td>

      <td>${Math.round(RendimientoOp)}%</td>
      </tr>

 
 
 `
        
     
             //  console.log(consultaref);

             
                          // console.log("rendimiento .................................#30"+RendimientoOp);

                           

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
                         })

                    });
                })
                            });
    })
                });
    })

                 
                    

                     // console.log("totalilizimooooooooooooooooooooooo"+tiempoTotalizimo);
                  //   console.log("el totaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal:"+tiempoTotal);


                     
                   //-------------------------------verificacion maq---------------------
                  




}
//-------------------------------------------------------------------------------------------
tablaAdmi=function(){
  var tabl=document.getElementById("tablaDos");
  var consultaOP=document.getElementById("buscaCedu").value;

  db.collection("MaquinasManteni").where("OrdenOperacion", "==", consultaOP).orderBy("TiempoInicio", "desc")
  .get()
  .then(function(querySnapshot) {
    tabl.innerHTML ="";
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          nombre=`${doc.data().NombreUsu}`;
           mq=`${doc.data().Maquina}`;
           tipo=`${doc.data().Tipo}`;
           tiemp=`${doc.data().TiempoMan}`;
           Ini=`${doc.data().TiempoInicio}`;


           console.log("EL TIPO DE PROBLEMA ES"+tipo);


           tabl.innerHTML +=`
          <tr>
      <th scope="row">${nombre}</th>
      <th scope="row">${mq}</th>

      <td>${tipo}</td>
      <th>${Ini}</th>

      <td>${(tiemp/60).toFixed(2)}Min</td>

      </tr>

 
 
 `



          });
        })







}

