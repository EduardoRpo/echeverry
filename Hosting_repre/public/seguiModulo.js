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

   //-----------------------------------------tabla unidades faltantes----------------------

   /*uniFaltantes= function(){

    //----------------------------------------------------------------------
    tablaHorizontal=document.getElementById("tabla");
    var numOp = document.getElementById("buscaCedu").value;
    cantiTo=0;
     //cantiTo=document.getElementById("cantiOp").value;

     db.collection("OrdenProduccion").where("OrdenP", "==", numOp).get()
     .then(function (querySnapshot) {
       querySnapshot.forEach(function (doc) {
         tablaHorizontal.innerHTML="";
         // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
         var cantiTo = `${doc.data().Cantidad}`;
    

    db.collection("CantidadesDisponibles").where("OP", "==", numOp).get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        tablaHorizontal.innerHTML="";
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var codH1 = `${doc.data().Codigo}`;
        var canCod1 = `${doc.data().cantiCod1}`;

        var codH2 = `${doc.data().Codigo2}`;
        var canCod2 = `${doc.data().cantiCod2}`;
        //  console.log("la unidades de 2 son:"+canCod2);

        var codH3 = `${doc.data().Codigo3}` ;
        var canCod3 = parseInt(`${doc.data().cantiCod3}`);

        var codH4 = `${doc.data().Codigo4}`;
        var canCod4 = `${doc.data().cantiCod4}`;

        var codH5 = `${doc.data().Codigo5}`;
        var canCod5 = `${doc.data().cantiCod5}`;

        var codH6 = `${doc.data().Codigo6}`;
        var canCod6 = `${doc.data().cantiCod6}`;

        var codH7 = `${doc.data().Codigo7}`;
        var canCod7 = `${doc.data().cantiCod7}`;

        var codH8 = `${doc.data().Codigo8}`;
        var canCod8 = `${doc.data().cantiCod8}`;

        var codH9 = `${doc.data().Codigo9}`;
        var canCod9 = `${doc.data().cantiCod9}`;

        var codH10 = `${doc.data().Codigo10}`;
        var canCod10 = `${doc.data().cantiCod10}`;

        var codH11 = `${doc.data().Codigo11}`;
        var canCod11 = `${doc.data().cantiCod11}`;

        var codH12 = `${doc.data().Codigo12}`;
        var canCod12 = `${doc.data().cantiCod12}`;

        var codH13 = `${doc.data().Codigo13}`;
        var canCod13 = `${doc.data().cantiCod13}`;

        var codH14 = `${doc.data().Codigo14}`;
        var canCod14 = `${doc.data().cantiCod14}`;

        var codH15 = `${doc.data().Codigo15}`;
        var canCod15 = `${doc.data().cantiCod15}`;

        var codH16 = `${doc.data().Codigo16}`;
        var canCod16 = `${doc.data().cantiCod16}`;

        var codH17 = `${doc.data().Codigo17}`;
        var canCod17 = `${doc.data().cantiCod17}`;

        var codH18 = `${doc.data().Codigo18}`;
        var canCod18 = `${doc.data().cantiCod18}`;

        var codH19 = `${doc.data().Codigo19}`;
        var canCod19 = `${doc.data().cantiCod19}`;

        var codH20 = `${doc.data().Codigo20}`;
        var canCod20 = `${doc.data().cantiCod20}`;

        var codH21 = `${doc.data().Codigo21}`;
        var canCod21 = `${doc.data().cantiCod21}`;

        var codH22 = `${doc.data().Codigo22}`;
        var canCod22 = `${doc.data().cantiCod22}`;

        var codH23 = `${doc.data().Codigo23}`;
        var canCod23 = `${doc.data().cantiCod23}`;

        var codH24 = `${doc.data().Codigo24}`;
        var canCod24 = `${doc.data().cantiCod24}`;

        var codH25 = `${doc.data().Codigo25}`;
        var canCod25 = `${doc.data().cantiCod25}`;

        var codH26 = `${doc.data().Codigo26}`;
        var canCod26 = `${doc.data().cantiCod26}`;

        var codH27 = `${doc.data().Codigo27}`;
        var canCod27 = `${doc.data().cantiCod27}`;

        var codH28 = `${doc.data().Codigo28}`;
        var canCod28 = `${doc.data().cantiCod28}`;

        var codH29 = `${doc.data().Codigo29}`;
        var canCod29 = `${doc.data().cantiCod29}`;

        var codH30 = `${doc.data().Codigo30}`;
        var canCod30 = `${doc.data().cantiCod30}`;

        var codH31 = `${doc.data().Codigo31}`;
        var canCod31 = `${doc.data().cantiCod31}`;

        var codH32 = `${doc.data().Codigo32}`;
        var canCod32 = `${doc.data().cantiCod32}`;

        var codH33 = `${doc.data().Codigo33}`;
        var canCod33 = `${doc.data().cantiCod33}`;

        var codH34 = `${doc.data().Codigo34}`;
        var canCod34 = `${doc.data().cantiCod34}`;

        var codH35 = `${doc.data().Codigo35}`;
        var canCod35 = `${doc.data().cantiCod35}`;

        var codH36 = `${doc.data().Codigo36}`;
        var canCod36 = `${doc.data().cantiCod36}`;

        var codH37 = `${doc.data().Codigo37}`;
        var canCod37 = `${doc.data().cantiCod37}`;

        var codH38 = `${doc.data().Codigo38}`;
        var canCod38 = `${doc.data().cantiCod38}`;

        var codH39 = `${doc.data().Codigo39}`;
        var canCod39 = `${doc.data().cantiCod39}`;

        var codH40 = `${doc.data().Codigo40}`;
        var canCod40 = `${doc.data().cantiCod40}`;

        var codH41 = `${doc.data().Codigo41}`;
        var canCod41 = `${doc.data().cantiCod41}`;

        var codH42 = `${doc.data().Codigo42}`;
        var canCod42 = `${doc.data().cantiCod42}`;

        var codH43 = `${doc.data().Codigo43}`;
        var canCod43 = `${doc.data().cantiCod43}`;

        var codH44 = `${doc.data().Codigo44}`;
        var canCod44 = `${doc.data().cantiCod44}`;

        var codH45 = `${doc.data().Codigo45}`;
        var canCod45 = `${doc.data().cantiCod45}`;

        var codH46 = `${doc.data().Codigo46}`;
        var canCod46 = `${doc.data().cantiCod46}`;

        var codH47 = `${doc.data().Codigo47}`;
        var canCod47 = `${doc.data().cantiCod47}`;

        var codH48 = `${doc.data().Codigo48}`;
        var canCod48 = `${doc.data().cantiCod48}`;

        var codH49 = `${doc.data().Codigo49}`;
        var canCod49 = `${doc.data().cantiCod49}`;

        var codH50 = `${doc.data().Codigo50}`;
        var canCod50 = `${doc.data().cantiCod50}`;

       // console.log("el codigo es:"+codH2+" "+"la cantidad dispo es:"+canCod2);

      // console.log("la operacion CONSULTA es:"+codH49+"la cantidad CONSULTA:"+canCod49);

        if (isNaN(canCod1)) {
          canCod1 = 0;
        }
        if (isNaN(canCod2)) {
          canCod2 = 0;
        }
        if (isNaN(canCod3)) {
          canCod3 = 0;
        }
        if (isNaN(canCod4)) {
          canCod4 = 0;
        }
        if (isNaN(canCod5)) {
          canCod22 = 0;
        }
        if (isNaN(canCod6)) {
          canCod6 = 0;
        }
        if (isNaN(canCod7)) {
          canCod7 = 0;
        }
        if (isNaN(canCod8)) {
          canCod8 = 0;
        }
        if (isNaN(canCod9)) {
          canCod9 = 0;
        }
        if (isNaN(canCod10)) {
          canCod10 = 0;
        }
        if (isNaN(canCod11)) {
          canCod11 = 0;
        }
        if (isNaN(canCod12)) {
          canCod12 = 0;
        }
        if (isNaN(canCod13)) {
          canCod13 = 0;
        }

        if (isNaN(canCod14)) {
          canCod14 = 0;
        }

        if (isNaN(canCod15)) {
          canCod15 = 0;
        }
        if (isNaN(canCod16)) {
          canCod16 = 0;
        }
        if (isNaN(canCod17)) {
          canCod17 = 0;
        }
        if (isNaN(canCod18)) {
          canCod18 = 0;
        }
        if (isNaN(canCod19)) {
          canCod19 = 0;
        }
        if (isNaN(canCod20)) {
          canCod20 = 0;
        }
        if (isNaN(canCod21)) {
          canCod21 = 0;
        }
        if (isNaN(canCod22)) {
          canCod22 = 0;
        }
        if (isNaN(canCod23)) {
          canCod23 = 0;
        }
        if (isNaN(canCod24)) {
          canCod24 = 0;
        }
        if (isNaN(canCod25)) {
          canCod25 = 0;
        }
        if (isNaN(canCod26)) {
          canCod26 = 0;
        }
        if (isNaN(canCod27)) {
          canCod27 = 0;
        }
        if (isNaN(canCod28)) {
          canCod28 = 0;
        }

        if (isNaN(canCod29)) {
          canCod29 = 0;
        }

        if (isNaN(canCod30)) {
          canCod30 = 0;
        }
        if (isNaN(canCod31)) {
          canCod31 = 0;
        }
        if (isNaN(canCod32)) {
          canCod32 = 0;
        }
        if (isNaN(canCod33)) {
          canCod33 = 0;
        }
        if (isNaN(canCod34)) {
          canCod34 = 0;
        }
        if (isNaN(canCod35)) {
          canCod35 = 0;
        }
        if (isNaN(canCod36)) {
          canCod36 = 0;
        }
        if (isNaN(canCod37)) {
          canCod37 = 0;
        }
        if (isNaN(canCod38)) {
          canCod38 = 0;
        }
        if (isNaN(canCod39)) {
          canCod39 = 0;
        }
        if (isNaN(canCod40)) {
          canCod40 = 0;
        }
        if (isNaN(canCod41)) {
          canCod41 = 0;
        }
        if (isNaN(canCod42)) {
          canCod42 = 0;
        }
        if (isNaN(canCod43)) {
          canCod43 = 0;
        }
        if (isNaN(canCod44)) {
          canCod44 = 0;
        }
        if (isNaN(canCod45)) {
          canCod45 = 0;
        }
        if (isNaN(canCod46)) {
          canCod46 = 0;
        }
        if (isNaN(canCod47)) {
          canCod47 = 0;
        }
        if (isNaN(canCod48)) {
          canCod48 = 0;
        }
        if (isNaN(canCod49)) {
          canCod49 = 0;
        }
        if (isNaN(canCod50)) {
          canCod50s = 0;
        }
        

        if(codH2==""){
          canCod2=0;
        }
        if(codH3==""){
          canCod3=0;
        }
        if(codH4==""){
          canCod4=0;
        }
        if(codH5==""){
          canCod5=0;
        }
        if(codH6==""){
          canCod6=0;
        }
        if(codH7==""){
          canCod7=0;
        }
        if(codH8==""){
          canCod8=0;
        }
        if(codH9==""){
          canCod9=0;
        }
        if(codH10==""){
          canCod10=0;
        }
        if(codH11==""){
          canCod11=0;
        }
        if(codH12==""){
          canCod12=0;
        }
        if(codH13==""){
          canCod13=0;
        }
        if(codH14==""){
          canCod14=0;
        }
        if(codH15==""){
          canCod15=0;
        }
        if(codH16==""){
          canCod16=0;
        }
        if(codH17==""){
          canCod17=0;
        }
        if(codH18==""){
          canCod18=0;
        }
        if(codH19==""){
          canCod19=0;
        }
        if(codH20==""){
          canCod20=0;
        }
        if(codH21==""){
          canCod21=0;
        }
        if(codH22==""){
          canCod22=0;
        }
        if(codH23==""){
          canCod23=0;
        }
        if(codH24==""){
          canCod24=0;
        }
        if(codH25==""){
          canCod25=0;
        }
        if(codH26==""){
          canCod26=0;
        }
        if(codH27==""){
          canCod27=0;
        }
        if(codH28==""){
          canCod28=0;
        }
        if(codH29==""){
          canCod29=0;
        }
        if(codH30==""){
          canCod30=0;
        }
        if(codH31==""){
          canCod31=0;
        }
        if(codH32==""){
          canCod32=0;
        }
        if(codH33==""){
          canCod33=0;
        }
        if(codH34==""){
          canCod34=0;
        }
        if(codH35==""){
          canCod35=0;
        }
        if(codH36==""){
          canCod36=0;
        }
        if(codH37==""){
          canCod37=0;
        }
        if(codH38==""){
          canCod38=0;
        }
        if(codH39==""){
          canCod39=0;
        }
        if(codH40==""){
          canCod40=0;
        }
        if(codH41==""){
          canCod41=0;
        }
        if(codH42==""){
          canCod42=0;
        }
        if(codH43==""){
          canCod43=0;
        }
        if(codH44==""){
          canCod44=0;
        }
        if(codH45==""){
          canCod45=0;
        }
        if(codH46==""){
          canCod46=0;
        }
        if(codH47==""){
          canCod47=0;
        }
        if(codH48==""){
          canCod48=0;
        }
        if(codH49==""){
          canCod49=0;
        }
        if(codH50==""){
          canCod50=0;
        }
       

        tablaHorizontal.innerHTML+=` 
        <tr>
        <th scope="row">${codH2}</th>
        <td>${canCod2}</td>
        <td>${((canCod2*100)/cantiTo).toFixed(2)}</td>

        
        </tr>
        <tr>
        <th scope="row">${codH3}</th>
        <td>${canCod3}</td>
        <td>${((canCod3*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH4}</th>
        <td>${canCod4}</td>
        <td>${((canCod4*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH5}</th>
        <td>${canCod5}</td>
        <td>${((canCod5*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH6}</th>
        <td>${canCod6}</td>
        <td>${((canCod6*100)/cantiTo).toFixed(2)}</td>

        </tr>

        <tr>
        <th scope="row">${codH7}</th>
        <td>${canCod7}</td>
        <td>${((canCod7*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH8}</th>
        <td>${canCod8}</td>
        <td>${((canCod8*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH9}</th>
        <td>${canCod9}</td>
        <td>${((canCod9*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH10}</th>
        <td>${canCod10}</td>
        <td>${((canCod10*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH11}</th>
        <td>${canCod11}</td>
        <td>${((canCod11*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH12}</th>
        <td>${canCod12}</td>
        <td>${((canCod12*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH13}</th>
        <td>${canCod13}</td>
        <td>${((canCod13*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH14}</th>
        <td>${canCod14}</td>
        <td>${((canCod14*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH15}</th>
        <td>${canCod15}</td>
        <td>${((canCod15*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH16}</th>
        <td>${canCod16}</td>
        <td>${((canCod16*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH17}</th>
        <td>${canCod17}</td>
        <td>${((canCod17*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH18}</th>
        <td>${canCod18}</td>
        <td>${((canCod18*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH19}</th>
        <td>${canCod19}</td>
        <td>${((canCod19*100)/cantiTo).toFixed(2)}</td>

        </tr>
        <tr>
        <th scope="row">${codH20}</th>
        <td>${canCod20}</td>
        <td>${((canCod20*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH21}</th>
        <td>${canCod21}</td>
        <td>${((canCod21*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH22}</th>
        <td>${canCod22}</td>
        <td>${((canCod22*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH23}</th>
        <td>${canCod23}</td>
        <td>${((canCod23*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH24}</th>
        <td>${canCod24}</td>
        <td>${((canCod24*100)/cantiTo).toFixed(2)}</td>

        </tr>
        <tr>
        <th scope="row">${codH25}</th>
        <td>${canCod25}</td>
        <td>${((canCod25*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH26}</th>
        <td>${canCod26}</td>
        <td>${((canCod26*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH27}</th>
        <td>${canCod27}</td>
        <td>${((canCod27*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH28}</th>
        <td>${canCod28}</td>
        <td>${((canCod28*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH29}</th>
        <td>${canCod29}</td>
        <td>${((canCod29*100)/cantiTo).toFixed(2)}</td>

        </tr>
        <tr>
        <th scope="row">${codH30}</th>
        <td>${canCod30}</td>
        <td>${((canCod30*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH31}</th>
        <td>${canCod31}</td>
        <td>${((canCod31*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH32}</th>
        <td>${canCod32}</td>
        <td>${((canCod32*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH33}</th>
        <td>${canCod33}</td>
        <td>${((canCod33*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH34}</th>
        <td>${canCod34}</td>
        <td>${((canCod34*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH35}</th>
        <td>${canCod35}</td>
        <td>${((canCod35*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH36}</th>
        <td>${canCod36}</td>
        <td>${((canCod36*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH37}</th>
        <td>${canCod37}</td>
        <td>${((canCod37*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH38}</th>
        <td>${canCod38}</td>
        <td>${((canCod38*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH39}</th>
        <td>${canCod39}</td>
        <td>${((canCod39*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH40}</th>
        <td>${canCod40}</td>
        <td>${((canCod40*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH41}</th>
        <td>${canCod41}</td>
        <td>${((canCod41*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH42}</th>
        <td>${canCod42}</td>
        <td>${((canCod42*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH43}</th>
        <td>${canCod43}</td>
        <td>${((canCod43*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH44}</th>
        <td>${canCod44}</td>
        <td>${((canCod44*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH45}</th>
        <td>${canCod45}</td>
        <td>${((canCod45*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH46}</th>
        <td>${canCod46}</td>
        <td>${((canCod46*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH47}</th>
        <td>${canCod47}</td>
        <td>${((canCod47*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH48}</th>
        <td>${canCod48}</td>
        <td>${((canCod48*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH49}</th>
        <td>${canCod49}</td>
        <td>${((canCod49*100)/cantiTo).toFixed(2)}</td>

       
        </tr>
        <tr>
        <th scope="row">${codH50}</th>
        <td>${canCod50}</td>
        <td>${((canCod50*100)/cantiTo).toFixed(2)}</td>

       
        </tr>



        `
          

  
      });
    })
  });
})

    //---------------------------------------------------------------------
      }*/

   //-----------------------------------------control unidades----------------------------------------

  /* controlUnidades=function (){

    var numeroOp=document.getElementById("buscaCedu").value;
    dataSet = new Array();
    var i = 1;

    db.collection("OrdenProduccion").where("OrdenP", "==", numeroOp)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            canti=`${doc.data().Cantidad}`;
             consultaref=`${doc.data().Referenc}`;
             clien=`${doc.data().Cliente}`;


             db.collection("FichaTecniGlobal").where("Referencia", "==", consultaref).where("Cliente", "==", clien)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            cod1=`${doc.data().Codigo}`;
            cod2=`${doc.data().Codigo2}`;
            cod3=`${doc.data().Codigo3}`;
            cod4=`${doc.data().Codigo4}`;
            cod5=`${doc.data().Codigo5}`;
            cod6=`${doc.data().Codigo6}`;
            cod7=`${doc.data().Codigo7}`;
            cod8=`${doc.data().Codigo8}`;

            cod9=`${doc.data().Codigo9}`;
            cod10=`${doc.data().Codigo10}`;
            cod11=`${doc.data().Codigo11}`;
            cod12=`${doc.data().Codigo12}`;
            cod13=`${doc.data().Codigo13}`;
            cod14=`${doc.data().Codigo14}`;
            cod15=`${doc.data().Codigo15}`;
            cod16=`${doc.data().Codigo16}`;

            cod17=`${doc.data().Codigo17}`;
            cod18=`${doc.data().Codigo18}`;
            cod19=`${doc.data().Codigo19}`;
            cod20=`${doc.data().Codigo20}`;
            cod21=`${doc.data().Codigo21}`;
            cod22=`${doc.data().Codigo22}`;
            cod23=`${doc.data().Codigo23}`;
            cod24=`${doc.data().Codigo24}`;

            cod25=`${doc.data().Codigo25}`;
            cod26=`${doc.data().Codigo26}`;
            cod27=`${doc.data().Codigo27}`;
            cod28=`${doc.data().Codigo28}`;
            cod29=`${doc.data().Codigo29}`;
            cod30=`${doc.data().Codigo30}`;
            cod31=`${doc.data().Codigo31}`;
            cod32=`${doc.data().Codigo32}`;

            cod33=`${doc.data().Codigo33}`;
            cod34=`${doc.data().Codigo34}`;
            cod35=`${doc.data().Codigo35}`;
            cod36=`${doc.data().Codigo36}`;
            cod37=`${doc.data().Codigo37}`;
            cod38=`${doc.data().Codigo38}`;
            cod39=`${doc.data().Codigo39}`;
            cod40=`${doc.data().Codigo40}`;

            cod41=`${doc.data().Codigo41}`;
            cod42=`${doc.data().Codigo42}`;
            cod43=`${doc.data().Codigo43}`;
            cod44=`${doc.data().Codigo44}`;
            cod45=`${doc.data().Codigo45}`;
            cod46=`${doc.data().Codigo46}`;
            cod47=`${doc.data().Codigo47}`;
            cod48=`${doc.data().Codigo48}`;
            cod49=`${doc.data().Codigo49}`;
            cod50=`${doc.data().Codigo50}`;


            if(cod1){
              codigo=cod1;
            }
            if(cod2){
              codigo=cod2;
            }
            if(cod3){
              codigo=cod3;
            }
            if(cod4){
              codigo=cod4;
            }
            if(cod5){
              codigo=cod5;
            }
            if(cod6){
              codigo=cod6;
            }
            if(cod7){
              codigo=cod7;
            }
            if(cod8){
              codigo=cod8;
            }
            if(cod9){
              codigo=cod9;
            }
            if(cod10){
              codigo=cod10;
            }
            if(cod11){
              codigo=cod11;
            }
            if(cod12){
              codigo=cod12;
            }
            if(cod13){
              codigo=cod13;
            }
            if(cod14){
              codigo=cod14;
            }
            if(cod15){
              codigo=cod15;
            }
            if(cod16){
              codigo=cod16;
            }
            if(cod17){
              codigo=cod17;
            }
            if(cod18){
              codigo=cod18;
            }
            if(cod19){
              codigo=cod19;
            }
            if(cod20){
              codigo=cod20;
            }
            if(cod21){
              codigo=cod21;
            }
            if(cod22){
              codigo=cod22;
            }
            if(cod23){
              codigo=cod23;
            }
            if(cod24){
              codigo=cod24;
            }
            if(cod25){
              codigo=cod25;
            }
            if(cod26){
              codigo=cod26;
            }
            if(cod27){
              codigo=cod27;
            }
            if(cod28){
              codigo=cod28;
            }
            if(cod29){
              codigo=cod29;
            }
            if(cod30){
              codigo=cod30;
            }
            if(cod31){
              codigo=cod31;
            }
            if(cod32){
              codigo=cod32;
            }
            if(cod33){
              codigo=cod33;
            }
            if(cod34){
              codigo=cod34;
            }
            if(cod35){
              codigo=cod35;
            }
            if(cod36){
              codigo=cod36;
            }
            if(cod37){
              codigo=cod37;
            }
            if(cod38){
              codigo=cod38;
            }
            if(cod39){
              codigo=cod39;
            }
            if(cod40){
              codigo=cod40;
            }
            if(cod41){
              codigo=cod41;
            }
            if(cod42){
              codigo=cod42;
            }
            if(cod43){
              codigo=cod43;
            }
            if(cod44){
              codigo=cod44;
            }
            if(cod45){
              codigo=cod45;
            }
            if(cod46){
              codigo=cod46;
            }
            if(cod47){
              codigo=cod47;
            }
            if(cod48){
              codigo=cod48;
            }
            if(cod49){
              codigo=cod49;
            }
            if(cod50){
              codigo=cod50;
            }
            if (isNaN(codigo)) {
              codigo = "";
            }





            dataSet.push([codigo,"prueba","prueba"]);

                          i = i + 1;


                          $(document).ready(function () 
                          {
                            var tablaSuma = $('#example').DataTable({
  
  
                              data: dataSet,
  
                              "bDestroy": true,
  
  
                              columns: [
                                { title: "Codigo" },
                                { title: "Acumulado" },
                                { title: "% Avance" },
  
  
  
  
  
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
          })

   
            });
          })

   }*/

       //-------------------------------------------grafica----------------------------------------------
       
       graficas=function prueba(){

        //import data from './data.js'

        dataSet = new Array();

        uniPre1=0;
        uniPre2=0;
        uniEnsa1=0;
        uniEnsa2=0;
        unidadesPre1=0;
        unidadesPre2=0;
        unidadesEnsa1=0;
        unidadesEnsa2=0;
        unidadesPulidayRevida=0;
        
        uniPre1=document.getElementById("unidadesrealizadas").value;
        uniPre2=document.getElementById("unidadesrealizadas2").value;
        uniPre3=document.getElementById("unidadesrealizadas7").value;
        uniPre4=document.getElementById("unidadesrealizadas8").value;

        trabaPre1=document.getElementById("tiemPrepa1").value;
        trabaPre2=document.getElementById("tiemPrepa2").value;
        trabaPre3=document.getElementById("tiemPrepa7").value;
        trabaPre4=document.getElementById("tiemPrepa8").value;

        porcePre1=document.getElementById("porcePrepa").value;
        porcePre2=document.getElementById("porcePrepa2").value;
        porcePre3=document.getElementById("porcePrepa7").value;
        porcePre4=document.getElementById("porcePrepa8").value;




        uniEnsa1=document.getElementById("unidadesrealizadas3").value;
        uniEnsa2=document.getElementById("unidadesrealizadas4").value;

        trabaEnsa1=document.getElementById("tiemEnsam1").value;
        trabaEnsa2=document.getElementById("tiemEnsam2").value;

        porceEnsa1=document.getElementById("porceEnsam1").value;
        porceEnsa2=document.getElementById("porceEnsam2").value;





        uniTer1=document.getElementById("unidadesrealizadas5").value;
        uniTer2=document.getElementById("unidadesrealizadas6").value;
        uniTer3=document.getElementById("unidadesrealizadas9").value;
        uniTer4=document.getElementById("unidadesrealizadas10").value;

        trabaTer1=document.getElementById("tiemTermi1").value;
        trabaTer2=document.getElementById("tiemTermi2").value;
        trabaTer3=document.getElementById("tiemTermi9").value;
        trabaTer4=document.getElementById("tiemTermi10").value;

        porceTer1=document.getElementById("porceTermi1").value;
        porceTer2=document.getElementById("porceTermi2").value;
        porceTer3=document.getElementById("porceTermi9").value;
        porceTer4=document.getElementById("porceTermi10").value;

//---------------------------------------------Apoyos------------------------------
apoyoPr1Uds=0;
apoyoPr2Uds=0;
apoyoEn1Uds=0;
apoyoEn2IUds=0;
Ruedo1Uds=0;
Ruedo2Uds=0;

apoyoPr1Tiem=0;
apoyoPr2Tiem=0;
apoyoEn1Tiem=0;
apoyoEn2Tiem=0;
Ruedo1Tiem=0;
Ruedo2Tiem=0;

apoyoPr1Porcen=0;
apoyoPr2Porcen=0;
apoyoEn1Porcen=0;
apoyoEn2Porcen=0;
Ruedo1Porcen=0;
Ruedo2Porcen=0;
//---------------------------------

apoyoPr1Uds=document.getElementById("unidadesrealizadasApoyoPr1").value;
apoyoPr2Uds=document.getElementById("unidadesrealizadasApoyoPr2").value;
apoyoEn1Uds=document.getElementById("unidadesrealizadasApoyoEn1").value;
apoyoEn2IUds=document.getElementById("unidadesrealizadasApoyoEn2").value;
Ruedo1Uds=document.getElementById("unidadesrealizadasRuedo1").value;
Ruedo2Uds=document.getElementById("unidadesrealizadasRuedo2").value;

apoyoPr1Tiem=document.getElementById("tiemApoyoPr1").value;
apoyoPr2Tiem=document.getElementById("tiemApoyoPr2").value;
apoyoEn1Tiem=document.getElementById("tiemApoyoEn1").value;
apoyoEn2Tiem=document.getElementById("tiemApoyoEn2").value;
Ruedo1Tiem=document.getElementById("tiemRuedo1").value;
Ruedo2Tiem=document.getElementById("tiemRuedo2").value;


apoyoPr1Porcen=document.getElementById("porceApoyoPr1").value;
apoyoPr2Porcen=document.getElementById("porceApoyoPr2").value;
apoyoEn1Porcen=document.getElementById("porceApoyoEn1").value;
apoyoEn2Porcen=document.getElementById("porceApoyoEn2").value;
Ruedo1Porcen=document.getElementById("porceRuedo1").value;
Ruedo2Porcen=document.getElementById("porceRuedo2").value;
pulidadyRevisaUnid=0;
pulidadyRevisaTiempo=0;
pulidadyRevisaPOrcen=0;
pulidadyRevisaUnid=document.getElementById("unidadesrealizadasPyR1").value;
pulidadyRevisaTiempo=document.getElementById("tiemTermiPyR1").value;
pulidadyRevisaPOrcen=document.getElementById("porceTermiPyR1").value;




//----------------------------------------------------------------------------------
       

       
        
        dataSet.push([uniPre1, uniPre2,uniPre3,uniPre4,apoyoPr1Uds,apoyoPr2Uds, uniEnsa1, uniEnsa2,apoyoEn1Uds,apoyoEn2IUds,uniTer1,uniTer2,uniTer3,uniTer4,Ruedo1Uds,Ruedo2Uds]);
      //  console.log("RESTREPO"+uniPre1+"restrepo2"+uniPre2);
        
        let miCanvas=document.getElementById("MiGrafica").getContext("2d");
        
        
        var chart= new Chart(miCanvas, {
         type:'bar',
         data:{
           labels:["Preparacion 1","Preparacion 2","Preparación 3","Preparación 4","Apoyo Preparacion 1","Apoyo Preparacion 2","Ensamble 1","Ensamble 2","Apoyo Ensamble 1","Apoyo Ensamble 2","Terminación 1", "Terminación 2", "Terminación 3", "Terminación 4","Ruedo 1","Ruedo 2","Pulida y Revisada 1"],
           datasets:[
           /*  {
             label:"Unidades",
             backgroundColor:"#63B522",
             borderColor:"rgb(255,255,0)",
             data:[uniPre1, uniPre2,uniPre3,uniPre4,apoyoPr1Uds,apoyoPr2Uds, uniEnsa1, uniEnsa2,apoyoEn1Uds,apoyoEn2IUds,uniTer1,uniTer2,uniTer3,uniTer4,Ruedo1Uds,Ruedo2Uds,pulidadyRevisaUnid]
           },*/
           {
             label:"Tiempo Trabajado (min)",
            // data:tiempo.map(item => item.cantidades)
            backgroundColor:"	rgb(0, 128, 128) ",

            

             data:[trabaPre1,trabaPre2,trabaPre3,trabaPre4,apoyoPr1Tiem,apoyoPr2Tiem,trabaEnsa1,trabaEnsa2,apoyoEn1Tiem,apoyoEn2Tiem,trabaTer1,trabaTer2,trabaTer3,trabaTer4,Ruedo1Tiem,Ruedo2Tiem,pulidadyRevisaTiempo]
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

        
      /*  let miCanvas2=document.getElementById("MiGraficaAvance").getContext("2d");

        Chart.defaults.scale.ticks.beginAtZero = true;

        let barChart = new  Chart(miCanvas2, {

          type: 'pie',
          data:{
            labels:['Preparación 1', 'Preparación 2', 'Preparación 3', 'Preparación 4'],
            datasets:[
              {
                label:'Points',
                backgroundColor:['#16a085', '#2980b9', '#f1c40f', '#e67e22'],
                data:[porcePre1,porcePre2,porcePre3,porcePre4]
              }
            ]
          },
          options: {
            animation:{
              animateScale: true
            }
          }
        })*/

        //------------------------------------apoyo prepa 1--------------------------------
     /*   let miApoyoPre=document.getElementById("MiGraficaAvanceApoyoPr1").getContext("2d");

        Chart.defaults.scale.ticks.beginAtZero = true;

        let barChartApoPre1 = new  Chart(miApoyoPre, {

          type: 'pie',
          data:{
            labels:['Apoyo Preparacion 1'],
            datasets:[
              {
                label:'Points',
                backgroundColor:['#16a085'],
                data:[apoyoPr1Porcen]
              }
            ]
          },
          options: {
            animation:{
              animateScale: true
            }
          }
        })*/
        //------------------------------------------apoyo prepa2-------------------------
      /*  let miApoyoPre2=document.getElementById("MiGraficaAvanceApoyoPr2").getContext("2d");

        Chart.defaults.scale.ticks.beginAtZero = true;

        let barChartApoPre2 = new  Chart(miApoyoPre2, {

          type: 'pie',
          data:{
            labels:['Apoyo Preparacion 2'],
            datasets:[
              {
                label:'Points',
                backgroundColor:['#e67e22'],
                data:[apoyoPr2Porcen]
              }
            ]
          },
          options: {
            animation:{
              animateScale: true
            }
          }
        })*/
         //------------------------------------------apoyo ensa1-------------------------
         /*let miApoyoEn1=document.getElementById("MiGraficaAvanceApoyoEn1").getContext("2d");

         Chart.defaults.scale.ticks.beginAtZero = true;
 
         let barChartApoEn1 = new  Chart(miApoyoEn1, {
 
           type: 'pie',
           data:{
             labels:['Apoyo Ensamble 1'],
             datasets:[
               {
                 label:'Points',
                 backgroundColor:['#16a085'],
                 data:[apoyoEn1Porcen]
               }
             ]
           },
           options: {
             animation:{
               animateScale: true
             }
           }
         })*/
         //------------------------------------------apoyo ensa2-------------------------
        /* let miApoyoEn2=document.getElementById("MiGraficaAvanceApoyoEn2").getContext("2d");

         Chart.defaults.scale.ticks.beginAtZero = true;
 
         let barChartApoEn2 = new  Chart(miApoyoEn2, {
 
           type: 'pie',
           data:{
             labels:['Apoyo Ensamble 2'],
             datasets:[
               {
                 label:'Points',
                 backgroundColor:['#e67e22'],
                 data:[apoyoEn2Porcen]
               }
             ]
           },
           options: {
             animation:{
               animateScale: true
             }
           }
         })*/
         //------------------------------------------apoyo ruedo1-------------------------
        /* let miApoyoRuedo1=document.getElementById("MiGraficaAvanceRuedo1").getContext("2d");

         Chart.defaults.scale.ticks.beginAtZero = true;
 
         let barChartRuedo1 = new  Chart(miApoyoRuedo1, {
 
           type: 'pie',
           data:{
             labels:['Ruedo 1'],
             datasets:[
               {
                 label:'Points',
                 backgroundColor:['#e67e22'],
                 data:[Ruedo1Porcen]
               }
             ]
           },
           options: {
             animation:{
               animateScale: true
             }
           }
         })*/
         //------------------------------------------apoyo ruedo2-------------------------
        /* let miApoyoRuedo2=document.getElementById("MiGraficaAvanceRuedo2").getContext("2d");

         Chart.defaults.scale.ticks.beginAtZero = true;
 
         let barChartRuedo2 = new  Chart(miApoyoRuedo2, {
 
           type: 'pie',
           data:{
             labels:['Ruedo 2'],
             datasets:[
               {
                 label:'Points',
                 backgroundColor:['#e67e22'],
                 data:[Ruedo2Porcen]
               }
             ]
           },
           options: {
             animation:{
               animateScale: true
             }
           }
         })*/
         
         
        //------------------------------esnamble grafica-----------------------------
        /*let miCanvas3=document.getElementById("MiGraficaAvanceEnsa").getContext("2d");

        Chart.defaults.scale.ticks.beginAtZero = true;

        let barChartEnsa = new  Chart(miCanvas3, {

          type: 'pie',
          data:{
            labels:['Ensamble 1', 'Ensamble 2'],
            datasets:[
              {
                label:'Points',
                backgroundColor:['#16a085', '#2980b9'],
                data:[porceEnsa1,porceEnsa2]
              }
            ]
          },
          options: {
            animation:{
              animateScale: true
            }
          }
        })*/

        //-------------------------------------------terminacion grafica-------------------------------------
        /*let miCanvas4=document.getElementById("MiGraficaAvanceTer").getContext("2d");

        Chart.defaults.scale.ticks.beginAtZero = true;

        let barChartTer = new  Chart(miCanvas4, {

          type: 'pie',
          data:{
            labels:['Terminación 1', 'Terminación 2','Terminación 3','Terminación 4'],
            datasets:[
              {
                label:'Points',
                backgroundColor:['#16a085', '#2980b9', '#f1c40f', '#e67e22'],
                data:[porceTer1,porceTer2,porceTer3,porceTer4]
              }
            ]
          },
          options: {
            animation:{
              animateScale: true
            }
          }
        })*/

        //------------------------------------------------------------------------------------



       }
  
  
   //------------------------------------------tabla--------------------------------------------
   window.onload = function(){
    var tabl=document.getElementById("tabla2");

   db.collection("OrdenProduccion").orderBy("OrdenP","desc").limit(50).onSnapshot((querySnapshot) =>{
        tabl.innerHTML="";
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
 
            tabl.innerHTML +=`
                     <tr>
                 <th scope="row">${doc.data().OrdenP}</th>
                 <td>${doc.data().Referenc}</td>
                 <td>${doc.data().Tipo2}</td>

                
                 </tr>
 
            
            
            `
 
             
         });
     })

   }

   //-----------------------------------------------btn camisa----------------------------------
   valorcami=function valorCamisa(){

    prepara1=0;
    prepara2=0;
    prepara3=0;
    prepara4=0;

    apoyoPr1=0;
    apoyoPr2=0;
    
    ensam1=0;
    ensam2=0;

    Apoyoensam1=0;
    Apoyoensam2=0;
    
    termi1=0;
    termi2=0;
    termi3=0;
    termi4=0;
    ruedo1=0;
    ruedo2=0;

    cantiop=0;
  
    tiempoTotal2=0;

    cantiop=document.getElementById("cantiOp").value;
    
    prepara1=parseFloat(document.getElementById("tiemPrepa1").value);
    prepara2=parseFloat(document.getElementById("tiemPrepa2").value);
    prepara3=parseFloat(document.getElementById("tiemPrepa7").value);
    prepara4=parseFloat(document.getElementById("tiemPrepa8").value);

    apoyoPr1=parseFloat(document.getElementById("tiemApoyoPr1").value);
    apoyoPr2=parseFloat(document.getElementById("tiemApoyoPr2").value);

    ensam1=parseFloat(document.getElementById("tiemEnsam1").value);
    ensam2=parseFloat(document.getElementById("tiemEnsam2").value);

    Apoyoensam1=parseFloat(document.getElementById("tiemApoyoEn1").value);
    Apoyoensam2=parseFloat(document.getElementById("tiemApoyoEn2").value);
  
    
    termi1=parseFloat(document.getElementById("tiemTermi1").value);
    termi2=parseFloat(document.getElementById("tiemTermi2").value);
    termi3=parseFloat(document.getElementById("tiemTermi9").value);
    termi4=parseFloat(document.getElementById("tiemTermi10").value);

    ruedo1=parseFloat(document.getElementById("tiemRuedo1").value);
    ruedo2=parseFloat(document.getElementById("tiemRuedo2").value);

    pulidadyRevisaTiempoCami=parseFloat(document.getElementById("tiemTermiPyR1").value);

    if (isNaN(pulidadyRevisaTiempoCami)) {
      pulidadyRevisaTiempoCami=0;
    } 

    if (isNaN(prepara1)) {
      prepara1=0;
    } 
    if (isNaN(prepara2)) {
      prepara2=0;
    } 
    if (isNaN(prepara3)) {
      prepara3=0;
    } 
    if (isNaN(prepara4)) {
      prepara4=0;
    } 
    if (isNaN(apoyoPr1)) {
      apoyoPr1=0;
    }
    
    if (isNaN(apoyoPr2)) {
      apoyoPr2=0;
    } 
   
   

    if (isNaN(ensam1)) {
      ensam1=0;
    } 
    if (isNaN(ensam2)) {
      ensam2=0;
    }

    if (isNaN(Apoyoensam1)) {
      Apoyoensam1=0;
    } 
    if (isNaN(Apoyoensam2)) {
      Apoyoensam2=0;
    } 

    if (isNaN(termi1)) {
      termi1=0;
    }
    if (isNaN(termi2)) {
      termi2=0;
    }
    if (isNaN(termi3)) {
      termi3=0;
    }
    if (isNaN(termi4)) {
      termi4=0;
    }
    if (isNaN(ruedo1)) {
      ruedo1=0;
    }
    if (isNaN(ruedo2)) {
      ruedo2=0;
    }
    tiempoTotal2=prepara1+prepara2+prepara3+prepara4+apoyoPr1+apoyoPr2+ensam1+ensam2+Apoyoensam1+Apoyoensam2+termi1+termi2+termi3+termi4+ruedo1+ruedo2+pulidadyRevisaTiempoCami;
    //console.log("preparacion1:"+prepara1+"preparacion2:"+prepara2+"preparacion3:"+prepara3+"prepraracion4"+prepara4+"ensam1:"+ensam1+"ensam2:"+ensam2+"termi1:"+termi1+"termi2:"+termi2+"termi3:"+termi3+"termi4:"+termi4);

   // console.log("si se presiono");
    document.getElementById("pxCamisa").value=tiempoTotal2.toFixed(2);

    document.getElementById("camisaUnidad").value=(tiempoTotal2/cantiop).toFixed(2);
   

   }

   //-----------------------------------------consultar--------------------------------------------

function Consultar(){

    var tabl=document.getElementById("tabla");
    indicadores();
    indicadores2();
    indicadores3();
    indicadores4();
    indicadores5();
    indicadores6();
    indicadores2mas1();
indicadores2mas2();
indicadoresTermi3();
indicadoresTermi4();
indicadoresPyR1();
indicadoresPyR2();
indicadoresPyR3();
   // indicadoresResumen();
   //resumenIndica();
   indicadoresResumen();

   //----------------apoyos---------------
   indicadorApoyoPr1();
   indicadorApoyoPr2();
   indicadorApoyoEn1();
   indicadorApoyoEn2();
   indicadorRuedo1();
   indicadorRuedo2();

   //----------------------reprocesos---------------------
   //indicadorReproceso1();
   //indicadorReproceso2();
  // indicadorReprocesoAjeno1();
   //indicadorReprocesoAjeno2();


   //uniFaltantes();
   //---------------------------------


  

    var consultaOP=document.getElementById("buscaCedu").value;
    RendimientoOp=0;
    unidadesSeg=0;
    relaTiemp=0;
  //  tiempEstan=0;
   // TiempoStdTotal=0;
                    
                
         
            
         //  var totalOp= document.getElementById("cantiOp").value;


         //  console.log("porceeeeeeeeeeeeeeeeeeeeent: "+totalOp);





    Operacion="";
    Operacion2="";
    Operacion3="";
    Operacion4="";
    Operacion5="";
    Operacion6="";
    Operacion7="";
    Operacion8="";
    Operacion9="";

    cantidadElabo=0;
    tiemTrabajado=0;
    tiempEstan1=0;
    tiempEstan2=0;
    tiempEstan3=0;
    tiempEstan4=0;
    tiempEstan5=0;
    tiempEstan6=0;
    tiempEstan7=0;
    tiempEstan8=0;
    tiempEstan9=0;

    Unidad1=0;
    Unidad2=0;
    Unidad3=0;
    Unidad4=0;
    Unidad5=0;
    Unidad6=0;
    Unidad7=0;
    Unidad8=0;
    Unidad9=0;
    minutosXficha=0;


    Rendi=0;
    unidadSTD=0;

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

    db.collection("FichaTecniGlobal").where("Referencia", "==", consultaref)//.where("Codigo","==",Operacion)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            OpFic1=`${doc.data().Codigo}`;
               UniFich1=parseInt(`${doc.data().Unidad}`);
               estan1=parseInt(`${doc.data().Estandar}`);

               tiemFch=parseFloat(`${doc.data().IncrementoTiemp}`);


               OpFic2=`${doc.data().Codigo2}`;
               UniFich2=parseInt(`${doc.data().Unidad2}`);
               estan2=parseInt(`${doc.data().Estandar2}`);

               OpFic3=`${doc.data().Codigo3}`;
               UniFich3=parseInt(`${doc.data().Unidad3}`);
               estan3=parseInt(`${doc.data().Estandar3}`);

               OpFic4=`${doc.data().Codigo4}`;
               UniFich4=parseInt(`${doc.data().Unidad4}`);
               console.log(UniFich4);
               estan4=parseInt(`${doc.data().Estandar4}`);

               OpFic5=`${doc.data().Codigo5}`;
               UniFich5=parseInt(`${doc.data().Unidad5}`);
               estan5=parseInt(`${doc.data().Estandar5}`);

               OpFic6=`${doc.data().Codigo6}`;
               UniFich6=parseInt(`${doc.data().Unidad6}`);
               estan6=parseInt(`${doc.data().Estandar6}`);

               OpFic7=`${doc.data().Codigo7}`;
               UniFich7=parseInt(`${doc.data().Unidad7}`);
               estan7=parseInt(`${doc.data().Estandar7}`);

               OpFic8=`${doc.data().Codigo8}`;
               UniFich8=parseInt(`${doc.data().Unidad8}`);
               estan8=parseInt(`${doc.data().Estandar8}`);

               OpFic9=`${doc.data().Codigo9}`;
               UniFich9=parseInt(`${doc.data().Unidad9}`);
               estan9=parseInt(`${doc.data().Estandar9}`);

               OpFic10=`${doc.data().Codigo10}`;
               UniFich10=parseInt(`${doc.data().Unidad10}`);
               estan10=parseInt(`${doc.data().Estandar10}`);

               OpFic11=`${doc.data().Codigo11}`;
               UniFich11=parseInt(`${doc.data().Unidad11}`);
               estan11=parseInt(`${doc.data().Estandar11}`);

               OpFic12=`${doc.data().Codigo12}`;
               UniFich12=parseInt(`${doc.data().Unidad12}`);
               estan12=parseInt(`${doc.data().Estandar12}`);

               OpFic13=`${doc.data().Codigo13}`;
               UniFich13=parseInt(`${doc.data().Unidad13}`);
               estan13=parseInt(`${doc.data().Estandar13}`);

               OpFic14=`${doc.data().Codigo14}`;
               UniFich14=parseInt(`${doc.data().Unidad14}`);
               estan14=parseInt(`${doc.data().Estandar14}`);

               OpFic15=`${doc.data().Codigo15}`;
               UniFich15=parseInt(`${doc.data().Unidad15}`);
               estan15=parseInt(`${doc.data().Estandar15}`);

               OpFic16=`${doc.data().Codigo16}`;
               UniFich16=parseInt(`${doc.data().Unidad16}`);
               estan16=parseInt(`${doc.data().Estandar16}`);

               OpFic17=`${doc.data().Codigo17}`;
               UniFich17=parseInt(`${doc.data().Unidad17}`);
               estan17=parseInt(`${doc.data().Estandar17}`);

               OpFic18=`${doc.data().Codigo18}`;
               UniFich18=parseInt(`${doc.data().Unidad18}`);
               estan18=parseInt(`${doc.data().Estandar18}`);

               OpFic19=`${doc.data().Codigo19}`;
               UniFich19=parseInt(`${doc.data().Unidad19}`);
               estan19=parseInt(`${doc.data().Estandar19}`);

               OpFic20=`${doc.data().Codigo20}`;
               UniFich20=parseInt(`${doc.data().Unidad20}`);
               estan20=parseInt(`${doc.data().Estandar20}`);

               OpFic21=`${doc.data().Codigo21}`;
               UniFich21=parseInt(`${doc.data().Unidad21}`);
               estan21=parseInt(`${doc.data().Estandar21}`);

               OpFic22=`${doc.data().Codigo22}`;
               UniFich22=parseInt(`${doc.data().Unidad22}`);
               estan22=parseInt(`${doc.data().Estandar22}`);

               OpFic23=`${doc.data().Codigo23}`;
               UniFich23=parseInt(`${doc.data().Unidad23}`);
               estan23=parseInt(`${doc.data().Estandar23}`);

               OpFic24=`${doc.data().Codigo24}`;
               UniFich24=parseInt(`${doc.data().Unidad24}`);
               estan24=parseInt(`${doc.data().Estandar24}`);

               OpFic25=`${doc.data().Codigo25}`;
               UniFich25=parseInt(`${doc.data().Unidad25}`);
               estan25=parseInt(`${doc.data().Estandar25}`);

               OpFic26=`${doc.data().Codigo26}`;
               UniFich26=parseInt(`${doc.data().Unidad26}`);
               estan26=parseInt(`${doc.data().Estandar26}`);

               OpFic27=`${doc.data().Codigo27}`;
               UniFich27=parseInt(`${doc.data().Unidad27}`);
               estan27=parseInt(`${doc.data().Estandar27}`);

               OpFic28=`${doc.data().Codigo28}`;
               UniFich28=parseInt(`${doc.data().Unidad28}`);
               estan28=parseInt(`${doc.data().Estandar28}`);

               OpFic29=`${doc.data().Codigo29}`;
               UniFich29=parseInt(`${doc.data().Unidad29}`);
               estan29=parseInt(`${doc.data().Estandar29}`);

               OpFic30=`${doc.data().Codigo30}`;
               UniFich30=parseInt(`${doc.data().Unidad30}`);
               estan30=parseInt(`${doc.data().Estandar30}`);

               OpFic31=`${doc.data().Codigo31}`;
               UniFich31=parseInt(`${doc.data().Unidad31}`);
               estan31=parseInt(`${doc.data().Estandar31}`);

               OpFic32=`${doc.data().Codigo32}`;
               UniFich32=parseInt(`${doc.data().Unidad32}`);
               estan32=parseInt(`${doc.data().Estandar32}`);

               OpFic33=`${doc.data().Codigo33}`;
               UniFich33=parseInt(`${doc.data().Unidad33}`);
               estan33=parseInt(`${doc.data().Estandar33}`);

               OpFic34=`${doc.data().Codigo34}`;
               UniFich34=parseInt(`${doc.data().Unidad34}`);
               estan34=parseInt(`${doc.data().Estandar34}`);

               OpFic35=`${doc.data().Codigo35}`;
               UniFich35=parseInt(`${doc.data().Unidad35}`);
               estan35=parseInt(`${doc.data().Estandar35}`);

               OpFic36=`${doc.data().Codigo36}`;
               UniFich36=parseInt(`${doc.data().Unidad36}`);
               estan36=parseInt(`${doc.data().Estandar36}`);

               OpFic37=`${doc.data().Codigo37}`;
               UniFich37=parseInt(`${doc.data().Unidad37}`);
               estan37=parseInt(`${doc.data().Estandar37}`);

               OpFic38=`${doc.data().Codigo38}`;
               UniFich38=parseInt(`${doc.data().Unidad38}`);
               estan38=parseInt(`${doc.data().Estandar38}`);

               OpFic39=`${doc.data().Codigo39}`;
               UniFich39=parseInt(`${doc.data().Unidad39}`);
               estan39=parseInt(`${doc.data().Estandar39}`);

               OpFic40=`${doc.data().Codigo40}`;
               UniFich40=parseInt(`${doc.data().Unidad40}`);
               estan40=parseInt(`${doc.data().Estandar40}`);

               OpFic41=`${doc.data().Codigo41}`;
               UniFich41=parseInt(`${doc.data().Unidad41}`);
               estan41=parseInt(`${doc.data().Estandar41}`);

               OpFic42=`${doc.data().Codigo42}`;
               UniFich42=parseInt(`${doc.data().Unidad42}`);
               estan42=parseInt(`${doc.data().Estandar42}`);

               OpFic43=`${doc.data().Codigo43}`;
               UniFich43=parseInt(`${doc.data().Unidad43}`);
               estan43=parseInt(`${doc.data().Estandar43}`);

               OpFic44=`${doc.data().Codigo44}`;
               UniFich44=parseInt(`${doc.data().Unidad44}`);
               estan44=parseInt(`${doc.data().Estandar44}`);

               OpFic45=`${doc.data().Codigo45}`;
               UniFich45=parseInt(`${doc.data().Unidad45}`);
               estan45=parseInt(`${doc.data().Estandar45}`);

               OpFic46=`${doc.data().Codigo46}`;
               UniFich46=parseInt(`${doc.data().Unidad46}`);
               estan46=parseInt(`${doc.data().Estandar46}`);

               OpFic47=`${doc.data().Codigo47}`;
               UniFich47=parseInt(`${doc.data().Unidad47}`);
               estan47=parseInt(`${doc.data().Estandar47}`);

               OpFic48=`${doc.data().Codigo48}`;
               UniFich48=parseInt(`${doc.data().Unidad48}`);
               estan48=parseInt(`${doc.data().Estandar48}`);

               OpFic49=`${doc.data().Codigo49}`;
               UniFich49=parseInt(`${doc.data().Unidad49}`);
               estan49=parseInt(`${doc.data().Estandar49}`);

               OpFic50=`${doc.data().Codigo50}`;
               UniFich50=parseInt(`${doc.data().Unidad50}`);
               estan50=parseInt(`${doc.data().Estandar50}`);


        minutosXficha=tiemFch*canti;

        document.getElementById("minTotales").value=minutosXficha.toFixed(2);



          db.collection("controladministradores").where("referencia", "==", consultaOP).orderBy("TiempoIni", "desc")
          .get()
          .then(function(querySnapshot) {
             // tabl.innerHTML ="";
      
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                 // var ur=`${doc.data().UrlFrente}`;
                Operario=`${doc.data().usuariooperario}`;
               // Maqui=`${doc.data().color}`;
              // horaFin=`${doc.data().usuariooperario}`;
              tFinal =`${doc.data().culminacion}`;
              comi=`${doc.data().Comida}`;
              tin=`${doc.data().Tinto}`;


                
                inicio=`${doc.data().TiempoIni}`;
      
      
                Operacion=`${doc.data().operacionElaborada}`;
                Operacion2=`${doc.data().operacionElaborada2}`;
                Operacion3=`${doc.data().operacionElaborada3}`;
                Operacion4=`${doc.data().operacionElaborada4}`;
                Operacion5=`${doc.data().operacionElaborada5}`;
                Operacion6=`${doc.data().operacionElaborada6}`;
                Operacion7=`${doc.data().operacionElaborada7}`;
                Operacion8=`${doc.data().operacionElaborada8}`;
                Operacion9=`${doc.data().operacionElaborada9}`;

                numeroOperarios=`${doc.data().NumeroOpera}`;

                integrantes=`${doc.data().Comen}`;


                cantidadElabo=`${doc.data().cantidadElaborada}`;
                tiemTrabajado=`${doc.data().tiempo}`;

                
          if(Operacion==OpFic1){
            tiempEstan1=estan1*cantidadElabo;
            Unidad1=UniFich1;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion==OpFic2){
            tiempEstan1=estan2*cantidadElabo;

            Unidad1=UniFich2;

          //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion==OpFic3){
            tiempEstan1=estan3*cantidadElabo;

            Unidad1=UniFich3;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           
          }
          if(Operacion==OpFic4){
            tiempEstan1=estan4*cantidadElabo;

            Unidad1=UniFich4;

            
          }
          if(Operacion==OpFic5){
            tiempEstan1=estan5*cantidadElabo;

            Unidad1=UniFich5;

      
          }
          if(Operacion==OpFic6){
            tiempEstan1=estan6*cantidadElabo;

            Unidad1=UniFich6;


          }
          if(Operacion==OpFic7){
            tiempEstan1=estan7*cantidadElabo;

            Unidad1=UniFich7;

          }
          if(Operacion==OpFic8){
            tiempEstan1=estan8*cantidadElabo;

            Unidad1=UniFich8;


          }
          if(Operacion==OpFic9){
            tiempEstan1=estan9*cantidadElabo;

            Unidad1=UniFich9;


          }
          if(Operacion==OpFic10){
            tiempEstan1=estan10*cantidadElabo;

            Unidad1=UniFich10;

          }
          if(Operacion==OpFic11){
            tiempEstan1=estan11*cantidadElabo;

            Unidad1=UniFich11;


          }
          if(Operacion==OpFic12){
            tiempEstan1=estan12*cantidadElabo;

            Unidad1=UniFich12;


          }
          if(Operacion==OpFic13){
            tiempEstan1=estan13*cantidadElabo;

            Unidad1=UniFich13;


          }
          if(Operacion==OpFic14){
            tiempEstan1=estan14*cantidadElabo;

            Unidad1=UniFich14;


          }
          if(Operacion==OpFic15){
            tiempEstan1=estan15*cantidadElabo;

            Unidad1=UniFich15;

          }
          if(Operacion==OpFic16){
            tiempEstan1=estan16*cantidadElabo;

            Unidad1=UniFich16;


          }
          if(Operacion==OpFic17){
            tiempEstan1=estan17*cantidadElabo;

            Unidad1=UniFich17;


          }
          if(Operacion==OpFic18){
            tiempEstan1=estan18*cantidadElabo;

            Unidad1=UniFich18;

          }
          if(Operacion==OpFic19){
            tiempEstan1=estan19*cantidadElabo;

            Unidad1=UniFich19;


          }
          if(Operacion==OpFic20){
            tiempEstan1=estan20*cantidadElabo;

            Unidad1=UniFich20;


          }
          if(Operacion==OpFic21){
            tiempEstan1=estan21*cantidadElabo;

            Unidad1=UniFich21;


          }
          if(Operacion==OpFic22){
            tiempEstan1=estan22*cantidadElabo;

            Unidad1=UniFich22;


          }
          if(Operacion==OpFic23){
            tiempEstan1=estan23*cantidadElabo;

            Unidad1=UniFich23;


          }
          if(Operacion==OpFic24){
            tiempEstan1=estan24*cantidadElabo;

            Unidad1=UniFich24;

          }
          if(Operacion==OpFic25){
            tiempEstan1=estan25*cantidadElabo;

            Unidad1=UniFich25;


          }
          if(Operacion==OpFic26){
            tiempEstan1=estan26*cantidadElabo;

            Unidad1=UniFich26;


          }
          if(Operacion==OpFic27){
            tiempEstan1=estan27*cantidadElabo;

            Unidad1=UniFich27;


          }
          if(Operacion==OpFic28){
            tiempEstan1=estan28*cantidadElabo;

            Unidad1=UniFich28;


          }
          if(Operacion==OpFic29){
            tiempEstan1=estan29*cantidadElabo;

            Unidad1=UniFich29;


          }
          if(Operacion==OpFic30){
            tiempEstan1=estan30*cantidadElabo;

            Unidad1=UniFich30;


          }

          if(Operacion==OpFic31){
            tiempEstan1=estan31*cantidadElabo;

            Unidad1=UniFich31;


          }
          if(Operacion==OpFic32){
            tiempEstan1=estan32*cantidadElabo;

            Unidad1=UniFich32;

          }
          if(Operacion==OpFic33){
            tiempEstan1=estan33*cantidadElabo;

            Unidad1=UniFich33;

          }
          if(Operacion==OpFic34){
            tiempEstan1=estan34*cantidadElabo;

            Unidad1=UniFich34;

          }
          if(Operacion==OpFic35){
            tiempEstan1=estan35*cantidadElabo;

            Unidad1=UniFich35;


          }
          if(Operacion==OpFic36){
            tiempEstan1=estan36*cantidadElabo;

            Unidad1=UniFich36;


          }
          if(Operacion==OpFic37){
            tiempEstan1=estan37*cantidadElabo;

            Unidad1=UniFich37;

          }
          if(Operacion==OpFic38){
            tiempEstan1=estan38*cantidadElabo;

            Unidad1=UniFich38;

          }
          if(Operacion==OpFic39){
            tiempEstan1=estan39*cantidadElabo;

            Unidad1=UniFich39;


          }
          if(Operacion==OpFic40){
            tiempEstan1=estan40*cantidadElabo;

            Unidad1=UniFich40;


          }
          if(Operacion==OpFic41){
            tiempEstan1=estan41*cantidadElabo;

            Unidad1=UniFich41;


          }
          if(Operacion==OpFic42){
            tiempEstan1=estan42*cantidadElabo;

            Unidad1=UniFich42;


          }
          if(Operacion==OpFic43){
            tiempEstan1=estan43*cantidadElabo;

            Unidad1=UniFich43;


          }
          if(Operacion==OpFic44){
            tiempEstan1=estan44*cantidadElabo;

            Unidad1=UniFich44;


          }
          if(Operacion==OpFic45){
            tiempEstan1=estan45*cantidadElabo;

            Unidad1=UniFich45;

          }
          if(Operacion==OpFic46){
            tiempEstan1=estan46*cantidadElabo;

            Unidad1=UniFich46;

          }
          if(Operacion==OpFic47){
            tiempEstan1=estan47*cantidadElabo;

            Unidad1=UniFich47;


          }
          if(Operacion==OpFic48){
            tiempEstan1=estan48*cantidadElabo;

            Unidad1=UniFich48;


          }
          if(Operacion==OpFic49){
            tiempEstan1=estan49*cantidadElabo;

            Unidad1=UniFich49;


          }
          if(Operacion==OpFic50){
            tiempEstan1=estan50*cantidadElabo;

            Unidad1=UniFich50;


          }

          //---------------------------------------condicion 2---------------------

          if(Operacion2==OpFic1){
            tiempEstan2=estan1*cantidadElabo;
            Unidad2=UniFich1;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion2==OpFic2){
            tiempEstan2=estan2*cantidadElabo;

            Unidad2=UniFich2;

          //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion2==OpFic3){
            tiempEstan2=estan3*cantidadElabo;

            Unidad2=UniFich3;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           
          }
          if(Operacion2==OpFic4){
            tiempEstan2=estan4*cantidadElabo;

            Unidad2=UniFich4;

            
          }
          if(Operacion2==OpFic5){
            tiempEstan2=estan5*cantidadElabo;

            Unidad2=UniFich5;

      
          }
          if(Operacion2==OpFic6){
            tiempEstan2=estan6*cantidadElabo;

            Unidad2=UniFich6;


          }
          if(Operacion2==OpFic7){
            tiempEstan2=estan7*cantidadElabo;

            Unidad2=UniFich7;

          }
          if(Operacion2==OpFic8){
            tiempEstan2=estan8*cantidadElabo;

            Unidad2=UniFich8;


          }
          if(Operacion2==OpFic9){
            tiempEstan2=estan9*cantidadElabo;

            Unidad2=UniFich9;


          }
          if(Operacion2==OpFic10){
            tiempEstan2=estan10*cantidadElabo;

            Unidad2=UniFich10;

          }
          if(Operacion2==OpFic11){
            tiempEstan2=estan11*cantidadElabo;

            Unidad2=UniFich11;


          }
          if(Operacion2==OpFic12){
            tiempEstan2=estan12*cantidadElabo;

            Unidad2=UniFich12;


          }
          if(Operacion2==OpFic13){
            tiempEstan2=estan13*cantidadElabo;

            Unidad2=UniFich13;


          }
          if(Operacion2==OpFic14){
            tiempEstan2=estan14*cantidadElabo;

            Unidad2=UniFich14;


          }
          if(Operacion2==OpFic15){
            tiempEstan2=estan15*cantidadElabo;

            Unidad2=UniFich15;

          }
          if(Operacion2==OpFic16){
            tiempEstan2=estan16*cantidadElabo;

            Unidad2=UniFich16;


          }
          if(Operacion2==OpFic17){
            tiempEstan2=estan17*cantidadElabo;

            Unidad2=UniFich17;


          }
          if(Operacion2==OpFic18){
            tiempEstan2=estan18*cantidadElabo;

            Unidad2=UniFich18;

          }
          if(Operacion2==OpFic19){
            tiempEstan2=estan19*cantidadElabo;

            Unidad2=UniFich19;


          }
          if(Operacion2==OpFic20){
            tiempEstan2=estan20*cantidadElabo;

            Unidad2=UniFich20;


          }
          if(Operacion2==OpFic21){
            tiempEstan2=estan21*cantidadElabo;

            Unidad2=UniFich21;


          }
          if(Operacion2==OpFic22){
            tiempEstan2=estan22*cantidadElabo;

            Unidad2=UniFich22;


          }
          if(Operacion2==OpFic23){
            tiempEstan2=estan23*cantidadElabo;

            Unidad2=UniFich23;


          }
          if(Operacion2==OpFic24){
            tiempEstan2=estan24*cantidadElabo;

            Unidad2=UniFich24;

          }
          if(Operacion2==OpFic25){
            tiempEstan2=estan25*cantidadElabo;

            Unidad2=UniFich25;


          }
          if(Operacion2==OpFic26){
            tiempEstan2=estan26*cantidadElabo;

            Unidad2=UniFich26;


          }
          if(Operacion2==OpFic27){
            tiempEstan2=estan27*cantidadElabo;

            Unidad2=UniFich27;


          }
          if(Operacion2==OpFic28){
            tiempEstan2=estan28*cantidadElabo;

            Unidad2=UniFich28;


          }
          if(Operacion2==OpFic29){
            tiempEstan2=estan29*cantidadElabo;

            Unidad2=UniFich29;


          }
          if(Operacion2==OpFic30){
            tiempEstan2=estan30*cantidadElabo;

            Unidad2=UniFich30;


          }

          if(Operacion2==OpFic31){
            tiempEstan2=estan31*cantidadElabo;

            Unidad2=UniFich31;


          }
          if(Operacion2==OpFic32){
            tiempEstan2=estan32*cantidadElabo;

            Unidad2=UniFich32;

          }
          if(Operacion2==OpFic33){
            tiempEstan2=estan33*cantidadElabo;

            Unidad2=UniFich33;

          }
          if(Operacion2==OpFic34){
            tiempEstan2=estan34*cantidadElabo;

            Unidad2=UniFich34;

          }
          if(Operacion2==OpFic35){
            tiempEstan2=estan35*cantidadElabo;

            Unidad2=UniFich35;


          }
          if(Operacion2==OpFic36){
            tiempEstan2=estan36*cantidadElabo;

            Unidad2=UniFich36;


          }
          if(Operacion2==OpFic37){
            tiempEstan2=estan37*cantidadElabo;

            Unidad2=UniFich37;

          }
          if(Operacion2==OpFic38){
            tiempEstan2=estan38*cantidadElabo;

            Unidad2=UniFich38;

          }
          if(Operacion2==OpFic39){
            tiempEstan2=estan39*cantidadElabo;

            Unidad2=UniFich39;


          }
          if(Operacion2==OpFic40){
            tiempEstan2=estan40*cantidadElabo;

            Unidad2=UniFich40;


          }
          if(Operacion2==OpFic41){
            tiempEstan2=estan41*cantidadElabo;

            Unidad2=UniFich41;


          }
          if(Operacion2==OpFic42){
            tiempEstan2=estan42*cantidadElabo;

            Unidad2=UniFich42;


          }
          if(Operacion2==OpFic43){
            tiempEstan2=estan43*cantidadElabo;

            Unidad2=UniFich43;


          }
          if(Operacion2==OpFic44){
            tiempEstan2=estan44*cantidadElabo;

            Unidad2=UniFich44;


          }
          if(Operacion2==OpFic45){
            tiempEstan2=estan45*cantidadElabo;

            Unidad2=UniFich45;

          }
          if(Operacion2==OpFic46){
            tiempEstan2=estan46*cantidadElabo;

            Unidad2=UniFich46;

          }
          if(Operacion2==OpFic47){
            tiempEstan2=estan47*cantidadElabo;

            Unidad2=UniFich47;


          }
          if(Operacion2==OpFic48){
            tiempEstan2=estan48*cantidadElabo;

            Unidad2=UniFich48;


          }
          if(Operacion2==OpFic49){
            tiempEstan2=estan49*cantidadElabo;

            Unidad2=UniFich49;


          }
          if(Operacion2==OpFic50){
            tiempEstan2=estan50*cantidadElabo;

            Unidad2=UniFich50;


          }
          //-----------------------------------3---------------------------------------
          if(Operacion3==OpFic1){
            tiempEstan3=estan1*cantidadElabo;
            Unidad3=UniFich1;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion3==OpFic2){
            tiempEstan3=estan2*cantidadElabo;

            Unidad3=UniFich2;

          //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion3==OpFic3){
            tiempEstan3=estan3*cantidadElabo;

            Unidad3=UniFich3;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           
          }
          if(Operacion3==OpFic4){
            tiempEstan3=estan4*cantidadElabo;

            Unidad3=UniFich4;

            
          }
          if(Operacion3==OpFic5){
            tiempEstan3=estan5*cantidadElabo;

            Unidad3=UniFich5;

      
          }
          if(Operacion3==OpFic6){
            tiempEstan3=estan6*cantidadElabo;

            Unidad3=UniFich6;


          }
          if(Operacion3==OpFic7){
            tiempEstan3=estan7*cantidadElabo;

            Unidad3=UniFich7;

          }
          if(Operacion3==OpFic8){
            tiempEstan3=estan8*cantidadElabo;

            Unidad3=UniFich8;


          }
          if(Operacion3==OpFic9){
            tiempEstan3=estan9*cantidadElabo;

            Unidad3=UniFich9;


          }
          if(Operacion3==OpFic10){
            tiempEstan3=estan10*cantidadElabo;

            Unidad3=UniFich10;

          }
          if(Operacion3==OpFic11){
            tiempEstan3=estan11*cantidadElabo;

            Unidad3=UniFich11;


          }
          if(Operacion3==OpFic12){
            tiempEstan3=estan12*cantidadElabo;

            Unidad3=UniFich12;


          }
          if(Operacion3==OpFic13){
            tiempEstan3=estan13*cantidadElabo;

            Unidad3=UniFich13;


          }
          if(Operacion3==OpFic14){
            tiempEstan3=estan14*cantidadElabo;

            Unidad3=UniFich14;


          }
          if(Operacion3==OpFic15){
            tiempEstan3=estan15*cantidadElabo;

            Unidad3=UniFich15;

          }
          if(Operacion3==OpFic16){
            tiempEstan3=estan16*cantidadElabo;

            Unidad3=UniFich16;


          }
          if(Operacion3==OpFic17){
            tiempEstan3=estan17*cantidadElabo;

            Unidad3=UniFich17;


          }
          if(Operacion3==OpFic18){
            tiempEstan3=estan18*cantidadElabo;

            Unidad3=UniFich18;

          }
          if(Operacion3==OpFic19){
            tiempEstan3=estan19*cantidadElabo;

            Unidad3=UniFich19;


          }
          if(Operacion3==OpFic20){
            tiempEstan3=estan20*cantidadElabo;

            Unidad3=UniFich20;


          }
          if(Operacion3==OpFic21){
            tiempEstan3=estan21*cantidadElabo;

            Unidad3=UniFich21;


          }
          if(Operacion3==OpFic22){
            tiempEstan3=estan22*cantidadElabo;

            Unidad3=UniFich22;


          }
          if(Operacion3==OpFic23){
            tiempEstan3=estan23*cantidadElabo;

            Unidad3=UniFich23;


          }
          if(Operacion3==OpFic24){
            tiempEstan3=estan24*cantidadElabo;

            Unidad3=UniFich24;

          }
          if(Operacion3==OpFic25){
            tiempEstan3=estan25*cantidadElabo;

            Unidad3=UniFich25;


          }
          if(Operacion3==OpFic26){
            tiempEstan3=estan26*cantidadElabo;

            Unidad3=UniFich26;


          }
          if(Operacion3==OpFic27){
            tiempEstan3=estan27*cantidadElabo;

            Unidad3=UniFich27;


          }
          if(Operacion3==OpFic28){
            tiempEstan3=estan28*cantidadElabo;

            Unidad3=UniFich28;


          }
          if(Operacion3==OpFic29){
            tiempEstan3=estan29*cantidadElabo;

            Unidad3=UniFich29;


          }
          if(Operacion3==OpFic30){
            tiempEstan3=estan30*cantidadElabo;

            Unidad3=UniFich30;


          }

          if(Operacion3==OpFic31){
            tiempEstan3=estan31*cantidadElabo;

            Unidad3=UniFich31;


          }
          if(Operacion3==OpFic32){
            tiempEstan3=estan32*cantidadElabo;

            Unidad3=UniFich32;

          }
          if(Operacion3==OpFic33){
            tiempEstan3=estan33*cantidadElabo;

            Unidad3=UniFich33;

          }
          if(Operacion3==OpFic34){
            tiempEstan3=estan34*cantidadElabo;

            Unidad3=UniFich34;

          }
          if(Operacion3==OpFic35){
            tiempEstan3=estan35*cantidadElabo;

            Unidad3=UniFich35;


          }
          if(Operacion3==OpFic36){
            tiempEstan3=estan36*cantidadElabo;

            Unidad3=UniFich36;


          }
          if(Operacion3==OpFic37){
            tiempEstan3=estan37*cantidadElabo;

            Unidad3=UniFich37;

          }
          if(Operacion3==OpFic38){
            tiempEstan3=estan38*cantidadElabo;

            Unidad3=UniFich38;

          }
          if(Operacion3==OpFic39){
            tiempEstan3=estan39*cantidadElabo;

            Unidad3=UniFich39;


          }
          if(Operacion3==OpFic40){
            tiempEstan3=estan40*cantidadElabo;

            Unidad3=UniFich40;


          }
          if(Operacion3==OpFic41){
            tiempEstan3=estan41*cantidadElabo;

            Unidad3=UniFich41;


          }
          if(Operacion3==OpFic42){
            tiempEstan3=estan42*cantidadElabo;

            Unidad3=UniFich42;


          }
          if(Operacion3==OpFic43){
            tiempEstan3=estan43*cantidadElabo;

            Unidad3=UniFich43;


          }
          if(Operacion3==OpFic44){
            tiempEstan3=estan44*cantidadElabo;

            Unidad3=UniFich44;


          }
          if(Operacion3==OpFic45){
            tiempEstan3=estan45*cantidadElabo;

            Unidad3=UniFich45;

          }
          if(Operacion3==OpFic46){
            tiempEstan3=estan46*cantidadElabo;

            Unidad3=UniFich46;

          }
          if(Operacion3==OpFic47){
            tiempEstan3=estan47*cantidadElabo;

            Unidad3=UniFich47;


          }
          if(Operacion3==OpFic48){
            tiempEstan3=estan48*cantidadElabo;

            Unidad3=UniFich48;


          }
          if(Operacion3==OpFic49){
            tiempEstan3=estan49*cantidadElabo;

            Unidad3=UniFich49;


          }
          if(Operacion3==OpFic50){
            tiempEstan3=estan50*cantidadElabo;

            Unidad3=UniFich50;


          }

          //----------------------------------------------4-----------------------------------------

          if(Operacion4==OpFic1){
            tiempEstan4=estan1*cantidadElabo;
            Unidad4=UniFich1;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion4==OpFic2){
            tiempEstan4=estan2*cantidadElabo;

            Unidad4=UniFich2;

          //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion4==OpFic3){
            tiempEstan4=estan3*cantidadElabo;

            Unidad4=UniFich3;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           
          }
          if(Operacion4==OpFic4){
            tiempEstan4=estan4*cantidadElabo;

            Unidad4=UniFich4;

            
          }
          if(Operacion4==OpFic5){
            tiempEstan4=estan5*cantidadElabo;

            Unidad4=UniFich5;

      
          }
          if(Operacion4==OpFic6){
            tiempEstan4=estan6*cantidadElabo;

            Unidad4=UniFich6;


          }
          if(Operacion4==OpFic7){
            tiempEstan4=estan7*cantidadElabo;

            Unidad4=UniFich7;

          }
          if(Operacion4==OpFic8){
            tiempEstan4=estan8*cantidadElabo;

            Unidad4=UniFich8;


          }
          if(Operacion4==OpFic9){
            tiempEstan4=estan9*cantidadElabo;

            Unidad4=UniFich9;


          }
          if(Operacion4==OpFic10){
            tiempEstan4=estan10*cantidadElabo;

            Unidad4=UniFich10;

          }
          if(Operacion4==OpFic11){
            tiempEstan4=estan11*cantidadElabo;

            Unidad4=UniFich11;


          }
          if(Operacion4==OpFic12){
            tiempEstan4=estan12*cantidadElabo;

            Unidad4=UniFich12;


          }
          if(Operacion4==OpFic13){
            tiempEstan4=estan13*cantidadElabo;

            Unidad4=UniFich13;


          }
          if(Operacion4==OpFic14){
            tiempEstan4=estan14*cantidadElabo;

            Unidad4=UniFich14;


          }
          if(Operacion4==OpFic15){
            tiempEstan4=estan15*cantidadElabo;

            Unidad4=UniFich15;

          }
          if(Operacion4==OpFic16){
            tiempEstan4=estan16*cantidadElabo;

            Unidad4=UniFich16;


          }
          if(Operacion4==OpFic17){
            tiempEstan4=estan17*cantidadElabo;

            Unidad4=UniFich17;


          }
          if(Operacion4==OpFic18){
            tiempEstan4=estan18*cantidadElabo;

            Unidad4=UniFich18;

          }
          if(Operacion4==OpFic19){
            tiempEstan4=estan19*cantidadElabo;

            Unidad4=UniFich19;


          }
          if(Operacion4==OpFic20){
            tiempEstan4=estan20*cantidadElabo;

            Unidad4=UniFich20;


          }
          if(Operacion4==OpFic21){
            tiempEstan4=estan21*cantidadElabo;

            Unidad4=UniFich21;


          }
          if(Operacion4==OpFic22){
            tiempEstan4=estan22*cantidadElabo;

            Unidad4=UniFich22;


          }
          if(Operacion4==OpFic23){
            tiempEstan4=estan23*cantidadElabo;

            Unidad4=UniFich23;


          }
          if(Operacion4==OpFic24){
            tiempEstan4=estan24*cantidadElabo;

            Unidad4=UniFich24;

          }
          if(Operacion4==OpFic25){
            tiempEstan4=estan25*cantidadElabo;

            Unidad4=UniFich25;


          }
          if(Operacion4==OpFic26){
            tiempEstan4=estan26*cantidadElabo;

            Unidad4=UniFich26;


          }
          if(Operacion4==OpFic27){
            tiempEstan4=estan27*cantidadElabo;

            Unidad4=UniFich27;


          }
          if(Operacion4==OpFic28){
            tiempEstan4=estan28*cantidadElabo;

            Unidad4=UniFich28;


          }
          if(Operacion4==OpFic29){
            tiempEstan4=estan29*cantidadElabo;

            Unidad4=UniFich29;


          }
          if(Operacion4==OpFic30){
            tiempEstan4=estan30*cantidadElabo;

            Unidad4=UniFich30;


          }

          if(Operacion4==OpFic31){
            tiempEstan4=estan31*cantidadElabo;

            Unidad4=UniFich31;


          }
          if(Operacion4==OpFic32){
            tiempEstan4=estan32*cantidadElabo;

            Unidad4=UniFich32;

          }
          if(Operacion4==OpFic33){
            tiempEstan4=estan33*cantidadElabo;

            Unidad4=UniFich33;

          }
          if(Operacion4==OpFic34){
            tiempEstan4=estan34*cantidadElabo;

            Unidad4=UniFich34;

          }
          if(Operacion4==OpFic35){
            tiempEstan4=estan35*cantidadElabo;

            Unidad4=UniFich35;


          }
          if(Operacion4==OpFic36){
            tiempEstan4=estan36*cantidadElabo;

            Unidad4=UniFich36;


          }
          if(Operacion4==OpFic37){
            tiempEstan4=estan37*cantidadElabo;

            Unidad4=UniFich37;

          }
          if(Operacion4==OpFic38){
            tiempEstan4=estan38*cantidadElabo;

            Unidad4=UniFich38;

          }
          if(Operacion4==OpFic39){
            tiempEstan4=estan39*cantidadElabo;

            Unidad4=UniFich39;


          }
          if(Operacion4==OpFic40){
            tiempEstan4=estan40*cantidadElabo;

            Unidad4=UniFich40;


          }
          if(Operacion4==OpFic41){
            tiempEstan4=estan41*cantidadElabo;

            Unidad4=UniFich41;


          }
          if(Operacion4==OpFic42){
            tiempEstan4=estan42*cantidadElabo;

            Unidad4=UniFich42;


          }
          if(Operacion4==OpFic43){
            tiempEstan4=estan43*cantidadElabo;

            Unidad4=UniFich43;


          }
          if(Operacion4==OpFic44){
            tiempEstan4=estan44*cantidadElabo;

            Unidad4=UniFich44;


          }
          if(Operacion4==OpFic45){
            tiempEstan4=estan45*cantidadElabo;

            Unidad4=UniFich45;

          }
          if(Operacion4==OpFic46){
            tiempEstan4=estan46*cantidadElabo;

            Unidad4=UniFich46;

          }
          if(Operacion4==OpFic47){
            tiempEstan4=estan47*cantidadElabo;

            Unidad4=UniFich47;


          }
          if(Operacion4==OpFic48){
            tiempEstan4=estan48*cantidadElabo;

            Unidad4=UniFich48;


          }
          if(Operacion4==OpFic49){
            tiempEstan4=estan49*cantidadElabo;

            Unidad4=UniFich49;


          }
          if(Operacion4==OpFic50){
            tiempEstan4=estan50*cantidadElabo;

            Unidad4=UniFich50;


          }

          //-------------------------------------------------5---------------------------------
          if(Operacion5==OpFic1){
            tiempEstan5=estan1*cantidadElabo;
            Unidad5=UniFich1;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion5==OpFic2){
            tiempEstan5=estan2*cantidadElabo;

            Unidad5=UniFich2*cantidadElabo;

          //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion5==OpFic3){
            tiempEstan5=estan3*cantidadElabo;

            Unidad5=UniFich3;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           
          }
          if(Operacion5==OpFic4){
            tiempEstan5=estan4*cantidadElabo;

            Unidad5=UniFich4;

            
          }
          if(Operacion5==OpFic5){
            tiempEstan5=estan5*cantidadElabo;

            Unidad5=UniFich5;

      
          }
          if(Operacion5==OpFic6){
            tiempEstan5=estan6*cantidadElabo;

            Unidad5=UniFich6;


          }
          if(Operacion5==OpFic7){
            tiempEstan5=estan7*cantidadElabo;

            Unidad5=UniFich7;

          }
          if(Operacion5==OpFic8){
            tiempEstan5=estan8*cantidadElabo;

            Unidad5=UniFich8;


          }
          if(Operacion5==OpFic9){
            tiempEstan5=estan9*cantidadElabo;

            Unidad5=UniFich9;


          }
          if(Operacion5==OpFic10){
            tiempEstan5=estan10*cantidadElabo;

            Unidad5=UniFich10;

          }
          if(Operacion5==OpFic11){
            tiempEstan5=estan11*cantidadElabo;

            Unidad5=UniFich11;


          }
          if(Operacion5==OpFic12){
            tiempEstan5=estan12*cantidadElabo;

            Unidad5=UniFich12;


          }
          if(Operacion5==OpFic13){
            tiempEstan5=estan13*cantidadElabo;

            Unidad5=UniFich13;


          }
          if(Operacion5==OpFic14){
            tiempEstan5=estan14*cantidadElabo;

            Unidad5=UniFich14;


          }
          if(Operacion5==OpFic15){
            tiempEstan5=estan15*cantidadElabo;

            Unidad5=UniFich15;

          }
          if(Operacion5==OpFic16){
            tiempEstan5=estan16*cantidadElabo;

            Unidad5=UniFich16;


          }
          if(Operacion5==OpFic17){
            tiempEstan5=estan17*cantidadElabo;

            Unidad5=UniFich17;


          }
          if(Operacion5==OpFic18){
            tiempEstan5=estan18*cantidadElabo;

            Unidad5=UniFich18;

          }
          if(Operacion5==OpFic19){
            tiempEstan5=estan19*cantidadElabo;

            Unidad5=UniFich19;


          }
          if(Operacion5==OpFic20){
            tiempEstan5=estan20*cantidadElabo;

            Unidad5=UniFich20;


          }
          if(Operacion5==OpFic21){
            tiempEstan5=estan21*cantidadElabo;

            Unidad5=UniFich21;


          }
          if(Operacion5==OpFic22){
            tiempEstan5=estan22*cantidadElabo;

            Unidad5=UniFich22;


          }
          if(Operacion5==OpFic23){
            tiempEstan5=estan23*cantidadElabo;

            Unidad5=UniFich23;


          }
          if(Operacion5==OpFic24){
            tiempEstan5=estan24*cantidadElabo;

            Unidad5=UniFich24;

          }
          if(Operacion5==OpFic25){
            tiempEstan5=estan25*cantidadElabo;

            Unidad5=UniFich25;


          }
          if(Operacion5==OpFic26){
            tiempEstan5=estan26*cantidadElabo;

            Unidad5=UniFich26;


          }
          if(Operacion5==OpFic27){
            tiempEstan5=estan27*cantidadElabo;

            Unidad5=UniFich27;


          }
          if(Operacion5==OpFic28){
            tiempEstan5=estan28*cantidadElabo;

            Unidad5=UniFich28;


          }
          if(Operacion5==OpFic29){
            tiempEstan5=estan29*cantidadElabo;

            Unidad5=UniFich29;


          }
          if(Operacion5==OpFic30){
            tiempEstan5=estan30*cantidadElabo;

            Unidad5=UniFich30;


          }

          if(Operacion5==OpFic31){
            tiempEstan5=estan31*cantidadElabo;

            Unidad5=UniFich31;


          }
          if(Operacion5==OpFic32){
            tiempEstan5=estan32*cantidadElabo;

            Unidad5=UniFich32;

          }
          if(Operacion5==OpFic33){
            tiempEstan5=estan33*cantidadElabo;

            Unidad5=UniFich33;

          }
          if(Operacion5==OpFic34){
            tiempEstan5=estan34*cantidadElabo;

            Unidad5=UniFich34;

          }
          if(Operacion5==OpFic35){
            tiempEstan5=estan35*cantidadElabo;

            Unidad5=UniFich35;


          }
          if(Operacion5==OpFic36){
            tiempEstan5=estan36*cantidadElabo;

            Unidad5=UniFich36;


          }
          if(Operacion5==OpFic37){
            tiempEstan5=estan37*cantidadElabo;

            Unidad5=UniFich37;

          }
          if(Operacion5==OpFic38){
            tiempEstan5=estan38*cantidadElabo;

            Unidad5=UniFich38;

          }
          if(Operacion5==OpFic39){
            tiempEstan5=estan39*cantidadElabo;

            Unidad5=UniFich39;


          }
          if(Operacion5==OpFic40){
            tiempEstan5=estan40*cantidadElabo;

            Unidad5=UniFich40;


          }
          if(Operacion5==OpFic41){
            tiempEstan5=estan41*cantidadElabo;

            Unidad5=UniFich41;


          }
          if(Operacion5==OpFic42){
            tiempEstan5=estan42*cantidadElabo;

            Unidad5=UniFich42;


          }
          if(Operacion5==OpFic43){
            tiempEstan5=estan43*cantidadElabo;

            Unidad5=UniFich43;


          }
          if(Operacion5==OpFic44){
            tiempEstan5=estan44*cantidadElabo;

            Unidad5=UniFich44;


          }
          if(Operacion5==OpFic45){
            tiempEstan5=estan45*cantidadElabo;

            Unidad5=UniFich45;

          }
          if(Operacion5==OpFic46){
            tiempEstan5=estan46*cantidadElabo;

            Unidad5=UniFich46;

          }
          if(Operacion5==OpFic47){
            tiempEstan5=estan47*cantidadElabo;

            Unidad5=UniFich47;


          }
          if(Operacion5==OpFic48){
            tiempEstan5=estan48*cantidadElabo;

            Unidad5=UniFich48;


          }
          if(Operacion5==OpFic49){
            tiempEstan5=estan49*cantidadElabo;

            Unidad5=UniFich49;


          }
          if(Operacion5==OpFic50){
            tiempEstan5=estan50*cantidadElabo;

            Unidad5=UniFich50;


          }
           //---------------------------------------condicion 6---------------------

           if(Operacion6==OpFic1){
            tiempEstan6=estan1;
            Unidad6=UniFich1;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion6==OpFic2){
            tiempEstan6=estan2;

            Unidad6=UniFich2;

          //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion6==OpFic3){
            tiempEstan6=estan3;

            Unidad6=UniFich3;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           
          }
          if(Operacion6==OpFic4){
            tiempEstan6=estan4;

            Unidad6=UniFich4;

            
          }
          if(Operacion6==OpFic5){
            tiempEstan6=estan5;

            Unidad6=UniFich5;

      
          }
          if(Operacion6==OpFic6){
            tiempEstan6=estan6;

            Unidad6=UniFich6;


          }
          if(Operacion6==OpFic7){
            tiempEstan6=estan7;

            Unidad6=UniFich7;

          }
          if(Operacion6==OpFic8){
            tiempEstan6=estan8;

            Unidad6=UniFich8;


          }
          if(Operacion6==OpFic9){
            tiempEstan6=estan9;

            Unidad6=UniFich9;


          }
          if(Operacion6==OpFic10){
            tiempEstan6=estan10;

            Unidad6=UniFich10;

          }
          if(Operacion6==OpFic11){
            tiempEstan6=estan11;

            Unidad6=UniFich11;


          }
          if(Operacion6==OpFic12){
            tiempEstan6=estan12;

            Unidad6=UniFich12;


          }
          if(Operacion6==OpFic13){
            tiempEstan6=estan13;

            Unidad6=UniFich13;


          }
            if(Operacion6==OpFic14){
            tiempEstan6=estan14;

            Unidad6=UniFich14;



          }
          if(Operacion6==OpFic15){
            tiempEstan6=estan15;

            Unidad6=UniFich15;

          }
          if(Operacion6==OpFic16){
            tiempEstan6=estan16;

            Unidad6=UniFich16;


          }
          if(Operacion6==OpFic17){
            tiempEstan6=estan17;

            Unidad6=UniFich17;


          }
          if(Operacion6==OpFic18){
            tiempEstan6=estan18;

            Unidad6=UniFich18;

          }
          if(Operacion6==OpFic19){
            tiempEstan6=estan19;

            Unidad6=UniFich19;


          }
          if(Operacion6==OpFic20){
            tiempEstan6=estan20;

            Unidad6=UniFich20;


          }
          if(Operacion6==OpFic21){
            tiempEstan6=estan21;

            Unidad6=UniFich21;


          }
          if(Operacion6==OpFic22){
            tiempEstan6=estan22;

            Unidad6=UniFich22;


          }
          if(Operacion6==OpFic23){
            tiempEstan6=estan23;

            Unidad6=UniFich23;


          }
          if(Operacion6==OpFic24){
            tiempEstan6=estan24;

            Unidad6=UniFich24;

          }
          if(Operacion6==OpFic25){
            tiempEstan6=estan25;

            Unidad6=UniFich25;


          }
          if(Operacion6==OpFic26){
            tiempEstan6=estan26;

            Unidad6=UniFich26;



          }
          if(Operacion6==OpFic27){
            tiempEstan6=estan27;

            Unidad6=UniFich27;


          }
          if(Operacion6==OpFic28){
            tiempEstan6=estan28;

            Unidad6=UniFich28;


          }
          if(Operacion6==OpFic29){
            tiempEstan6=estan29;

            Unidad6=UniFich29;


          }
          if(Operacion6==OpFic30){
            tiempEstan6=estan30;

            Unidad6=UniFich30;


          }

          if(Operacion6==OpFic31){
            tiempEstan6=estan31;

            Unidad6=UniFich31;


          }
          if(Operacion6==OpFic32){
            tiempEstan6=estan32;

            Unidad6=UniFich32;

          }
          if(Operacion6==OpFic33){
            tiempEstan6=estan33;

            Unidad6=UniFich33;

          }
          if(Operacion6==OpFic34){
            tiempEstan6=estan34;

            Unidad6=UniFich34;

          }
          if(Operacion6==OpFic35){
            tiempEstan6=estan35;

            Unidad6=UniFich35;


          }
          if(Operacion6==OpFic36){
            tiempEstan6=estan36;

            Unidad6=UniFich36;


          }
          if(Operacion6==OpFic37){
            tiempEstan6=estan37;

            Unidad6=UniFich37;

          }
          if(Operacion6==OpFic38){
            tiempEstan6=estan38;

            Unidad6=UniFich38;

          }
          if(Operacion6==OpFic39){
            tiempEstan6=estan39;

            Unidad6=UniFich39;


          }
          if(Operacion6==OpFic40){
            tiempEstan6=estan40;

            Unidad6=UniFich40;


          }
          if(Operacion6==OpFic41){
            tiempEstan6=estan41;

            Unidad6=UniFich41;


          }
          if(Operacion6==OpFic42){
            tiempEstan6=estan42;

            Unidad6=UniFich42;


          }
          if(Operacion6==OpFic43){
            tiempEstan6=estan43;

            Unidad6=UniFich43;


          }
          if(Operacion6==OpFic44){
            tiempEstan6=estan44;

            Unidad6=UniFich44;


          }
          if(Operacion6==OpFic45){
            tiempEstan6=estan45;

            Unidad6=UniFich45;

          }
          if(Operacion6==OpFic46){
            tiempEstan6=estan46;

            Unidad6=UniFich46;

          }
          if(Operacion6==OpFic47){
            tiempEstan6=estan47;

            Unidad6=UniFich47;


          }
          if(Operacion6==OpFic48){
            tiempEstan6=estan48;

            Unidad6=UniFich48;


          }
          if(Operacion6==OpFic49){
            tiempEstan6=estan49;

            Unidad6=UniFich49;


          }
          if(Operacion6==OpFic50){
            tiempEstan6=estan50;

            Unidad6=UniFich50;


          }
            //---------------------------------------condicion 7---------------------

        if(Operacion7==OpFic1){
          tiempEstan7=estan1;
          Unidad7=UniFich1;

         // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
         

        }
        if(Operacion7==OpFic2){
          tiempEstan7=estan2;

          Unidad7=UniFich2;

        //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
         

        }
        if(Operacion7==OpFic3){
          tiempEstan7=estan3;

          Unidad7=UniFich3;

         // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
         
        }
        if(Operacion7==OpFic4){
          tiempEstan7=estan4;

          Unidad7=UniFich4;

          
        }
        if(Operacion7==OpFic5){
          tiempEstan7=estan5;

          Unidad7=UniFich5;

    
        }
        if(Operacion7==OpFic6){
          tiempEstan7=estan6;

          Unidad7=UniFich6;


        }
        if(Operacion7==OpFic7){
          tiempEstan7=estan7;

          Unidad7=UniFich7;

        }
        if(Operacion7==OpFic8){
          tiempEstan7=estan8;

          Unidad7=UniFich8;


        }
        if(Operacion7==OpFic9){
          tiempEstan7=estan9;

          Unidad7=UniFich9;


        }
        if(Operacion7==OpFic10){
          tiempEstan7=estan10;

          Unidad7=UniFich10;

        }
        if(Operacion7==OpFic11){
          tiempEstan7=estan11;

          Unidad7=UniFich11;


        }
        if(Operacion7==OpFic12){
          tiempEstan7=estan12;

          Unidad7=UniFich12;


        }
        if(Operacion7==OpFic13){
          tiempEstan7=estan13;

          Unidad7=UniFich13;


        }
        if(Operacion7==OpFic14){
          tiempEstan7=estan14;

          Unidad7=UniFich14;


        }
        if(Operacion7==OpFic15){
          tiempEstan7=estan15;

          Unidad7=UniFich15;

        }
        if(Operacion7==OpFic16){
          tiempEstan7=estan16;

          Unidad7=UniFich16;
          console.log("el tiempo en la posicion 7: "+tiempEstan7);



        }
        if(Operacion7==OpFic17){
          tiempEstan7=estan17;

          Unidad7=UniFich17;


        }
        if(Operacion7==OpFic18){
          tiempEstan7=estan18;

          Unidad7=UniFich18;

        }
        if(Operacion7==OpFic19){
          tiempEstan7=estan19;

          Unidad7=UniFich19;


        }
        if(Operacion7==OpFic20){
          tiempEstan7=estan20;

          Unidad7=UniFich20;


        }
        if(Operacion7==OpFic21){
          tiempEstan7=estan21;

          Unidad7=UniFich21;


        }
        if(Operacion7==OpFic22){
          tiempEstan7=estan22;

          Unidad7=UniFich22;


        }
        if(Operacion7==OpFic23){
          tiempEstan7=estan23;

          Unidad7=UniFich23;


        }
        if(Operacion7==OpFic24){
          tiempEstan7=estan24;

          Unidad7=UniFich24;

        }
        if(Operacion7==OpFic25){
          tiempEstan7=estan25;

          Unidad7=UniFich25;



        }
        if(Operacion7==OpFic26){
          tiempEstan7=estan26;

          Unidad7=UniFich26;


        }
        if(Operacion7==OpFic27){
          tiempEstan7=estan27;

          Unidad7=UniFich27;


        }
        if(Operacion7==OpFic28){
          tiempEstan7=estan28;

          Unidad7=UniFich28;


        }
        if(Operacion7==OpFic29){
          tiempEstan7=estan29;

          Unidad7=UniFich29;


        }
        if(Operacion7==OpFic30){
          tiempEstan7=estan30;

          Unidad7=UniFich30;


        }

        if(Operacion7==OpFic31){
          tiempEstan7=estan31;

          Unidad7=UniFich31;


        }
        if(Operacion7==OpFic32){
          tiempEstan7=estan32;

          Unidad7=UniFich32;

        }
        if(Operacion7==OpFic33){
          tiempEstan7=estan33;

          Unidad7=UniFich33;

        }
        if(Operacion7==OpFic34){
          tiempEstan7=estan34;

          Unidad7=UniFich34;

        }
        if(Operacion7==OpFic35){
          tiempEstan7=estan35;

          Unidad7=UniFich35;


        }
        if(Operacion7==OpFic36){
          tiempEstan7=estan36;

          Unidad7=UniFich36;


        }
        if(Operacion7==OpFic37){
          tiempEstan7=estan37;

          Unidad7=UniFich37;

        }
        if(Operacion7==OpFic38){
          tiempEstan7=estan38;

          Unidad7=UniFich38;

        }
        if(Operacion7==OpFic39){
          tiempEstan7=estan39;

          Unidad7=UniFich39;


        }
        if(Operacion7==OpFic40){
          tiempEstan7=estan40;

          Unidad7=UniFich40;


        }
        if(Operacion7==OpFic41){
          tiempEstan7=estan41;

          Unidad7=UniFich41;


        }
        if(Operacion7==OpFic42){
          tiempEstan7=estan42;

          Unidad7=UniFich42;


        }
        if(Operacion7==OpFic43){
          tiempEstan7=estan43;

          Unidad7=UniFich43;


        }
        if(Operacion7==OpFic44){
          tiempEstan7=estan44;

          Unidad7=UniFich44;


        }
        if(Operacion7==OpFic45){
          tiempEstan7=estan45;

          Unidad7=UniFich45;

        }
        if(Operacion7==OpFic46){
          tiempEstan7=estan46;

          Unidad7=UniFich46;

        }
        if(Operacion7==OpFic47){
          tiempEstan7=estan47;

          Unidad7=UniFich47;


        }
        if(Operacion7==OpFic48){
          tiempEstan7=estan48;

          Unidad7=UniFich48;


        }
        if(Operacion7==OpFic49){
          tiempEstan7=estan49;

          Unidad7=UniFich49;


        }
        if(Operacion7==OpFic50){
          tiempEstan7=estan50;

          Unidad7=UniFich50;


        }

          //---------------------------------------condicion 8---------------------

          if(Operacion8==OpFic1){
            tiempEstan8=estan1;
            Unidad8=UniFich1;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion8==OpFic2){
            tiempEstan8=estan2;

            Unidad8=UniFich2;

          //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           

          }
          if(Operacion8==OpFic3){
            tiempEstan8=estan3;

            Unidad8=UniFich3;

           // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
           
          }
          if(Operacion8==OpFic4){
            tiempEstan8=estan4;

            Unidad8=UniFich4;

            
          }
          if(Operacion8==OpFic5){
            tiempEstan8=estan5;

            Unidad8=UniFich5;

      
          }
          if(Operacion8==OpFic6){
            tiempEstan8=estan6;

            Unidad8=UniFich6;


          }
          if(Operacion8==OpFic7){
            tiempEstan8=estan7;

            Unidad8=UniFich7;

          }
          if(Operacion8==OpFic8){
            tiempEstan8=estan8;

            Unidad8=UniFich8;


          }
          if(Operacion8==OpFic9){
            tiempEstan8=estan9;

            Unidad8=UniFich9;


          }
          if(Operacion8==OpFic10){
            tiempEstan8=estan10;

            Unidad8=UniFich10;


          }
          if(Operacion8==OpFic11){
            tiempEstan8=estan11;

            Unidad8=UniFich11;


          }
          if(Operacion8==OpFic12){
            tiempEstan8=estan12;

            Unidad8=UniFich12;


          }
          if(Operacion8==OpFic13){
            tiempEstan8=estan13;

            Unidad8=UniFich13;


          }
          if(Operacion8==OpFic14){
            tiempEstan8=estan14;

            Unidad8=UniFich14;


          }
          if(Operacion8==OpFic15){
            tiempEstan8=estan15;

            Unidad8=UniFich15;

          }
          if(Operacion8==OpFic16){
            tiempEstan8=estan16;

            Unidad8=UniFich16;


          }
          if(Operacion8==OpFic17){
            tiempEstan8=estan17;

            Unidad8=UniFich17;


          }
          if(Operacion8==OpFic18){
            tiempEstan8=estan18;

            Unidad8=UniFich18;

          }
          if(Operacion8==OpFic19){
            tiempEstan8=estan19;

            Unidad8=UniFich19;


          }
          if(Operacion8==OpFic20){
            tiempEstan8=estan20;

            Unidad8=UniFich20;


          }
          if(Operacion8==OpFic21){
            tiempEstan8=estan21;

            Unidad8=UniFich21;


          }
          if(Operacion8==OpFic22){
            tiempEstan8=estan22;

            Unidad8=UniFich22;


          }
          if(Operacion8==OpFic23){
            tiempEstan8=estan23;

            Unidad8=UniFich23;


          }
          if(Operacion8==OpFic24){
            tiempEstan8=estan24;

            Unidad8=UniFich24;

          }
          if(Operacion8==OpFic25){
            tiempEstan8=estan25;

            Unidad8=UniFich25;



          }
          if(Operacion8==OpFic26){
            tiempEstan8=estan26;

            Unidad8=UniFich26;


          }
          if(Operacion8==OpFic27){
            tiempEstan8=estan27;

            Unidad8=UniFich27;


          }
          if(Operacion8==OpFic28){
            tiempEstan8=estan28;

            Unidad8=UniFich28;


          }
          if(Operacion8==OpFic29){
            tiempEstan8=estan29;

            Unidad8=UniFich29;


          }
          if(Operacion8==OpFic30){
            tiempEstan8=estan30;

            Unidad8=UniFich30;


          }

          if(Operacion8==OpFic31){
            tiempEstan8=estan31;

            Unidad8=UniFich31;


          }
          if(Operacion8==OpFic32){
            tiempEstan8=estan32;

            Unidad8=UniFich32;

          }
          if(Operacion8==OpFic33){
            tiempEstan8=estan33;

            Unidad8=UniFich33;

          }
          if(Operacion8==OpFic34){
            tiempEstan8=estan34;

            Unidad8=UniFich34;

          }
          if(Operacion8==OpFic35){
            tiempEstan8=estan35;

            Unidad8=UniFich35;


          }
          if(Operacion8==OpFic36){
            tiempEstan8=estan36;

            Unidad8=UniFich36;


          }
          if(Operacion8==OpFic37){
            tiempEstan8=estan37;

            Unidad8=UniFich37;

          }
          if(Operacion8==OpFic38){
            tiempEstan8=estan38;

            Unidad8=UniFich38;

          }
          if(Operacion8==OpFic39){
            tiempEstan8=estan39;

            Unidad8=UniFich39;


          }
          if(Operacion8==OpFic40){
            tiempEstan8=estan40;

            Unidad8=UniFich40;


          }
          if(Operacion8==OpFic41){
            tiempEstan8=estan41;

            Unidad8=UniFich41;


          }
          if(Operacion8==OpFic42){
            tiempEstan8=estan42;

            Unidad8=UniFich42;


          }
          if(Operacion8==OpFic43){
            tiempEstan8=estan43;

            Unidad8=UniFich43;


          }
          if(Operacion8==OpFic44){
            tiempEstan8=estan44;

            Unidad8=UniFich44;


          }
          if(Operacion8==OpFic45){
            tiempEstan8=estan45;

            Unidad8=UniFich45;

          }
          if(Operacion8==OpFic46){
            tiempEstan8=estan46;

            Unidad8=UniFich46;

          }
          if(Operacion8==OpFic47){
            tiempEstan8=estan47;

            Unidad8=UniFich47;


          }
          if(Operacion8==OpFic48){
            tiempEstan8=estan48;

            Unidad8=UniFich48;


          }
          if(Operacion8==OpFic49){
            tiempEstan8=estan49;

            Unidad8=UniFich49;


          }
          if(Operacion8==OpFic50){
            tiempEstan8=estan50;

            Unidad8=UniFich50;


          }

            //---------------------------------------condicion 9---------------------

        if(Operacion9==OpFic1){
          tiempEstan9=estan1;
          Unidad9=UniFich1;

         // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
         

        }
        if(Operacion9==OpFic2){
          tiempEstan9=estan2;

          Unidad9=UniFich2;

        //  RendimientoOp=(relaTiemp*100)/tiemTrabajado;
         

        }
        if(Operacion9==OpFic3){
          tiempEstan9=estan3;

          Unidad9=UniFich3;

         // RendimientoOp=(relaTiemp*100)/tiemTrabajado;
         
        }
        if(Operacion9==OpFic4){
          tiempEstan9=estan4;

          Unidad9=UniFich4;

          
        }
        if(Operacion9==OpFic5){
          tiempEstan9=estan5;

          Unidad9=UniFich5;

    
        }
        if(Operacion9==OpFic6){
          tiempEstan9=estan6;

          Unidad9=UniFich6;


        }
        if(Operacion9==OpFic7){
          tiempEstan9=estan7;

          Unidad9=UniFich7;

        }
        if(Operacion9==OpFic8){
          tiempEstan9=estan8;

          Unidad9=UniFich8;


        }
        if(Operacion9==OpFic9){
          tiempEstan9=estan9;

          Unidad9=UniFich9;


        }
        if(Operacion9==OpFic10){
          tiempEstan9=estan10;

          Unidad9=UniFich10;

        }
        if(Operacion9==OpFic11){
          tiempEstan9=estan11;

          Unidad9=UniFich11;



        }
        if(Operacion9==OpFic12){
          tiempEstan9=estan12;

          Unidad9=UniFich12;


        }
        if(Operacion9==OpFic13){
          tiempEstan9=estan13;

          Unidad9=UniFich13;


        }
        if(Operacion9==OpFic14){
          tiempEstan9=estan14;

          Unidad9=UniFich14;


        }
        if(Operacion9==OpFic15){
          tiempEstan9=estan15;

          Unidad9=UniFich15;

        }
        if(Operacion9==OpFic16){
          tiempEstan9=estan16;

          Unidad9=UniFich16;


        }
        if(Operacion9==OpFic17){
          tiempEstan9=estan17;

          Unidad9=UniFich17;


        }
        if(Operacion9==OpFic18){
          tiempEstan9=estan18;

          Unidad9=UniFich18;

        }
        if(Operacion9==OpFic19){
          tiempEstan9=estan19;

          Unidad9=UniFich19;


        }
        if(Operacion9==OpFic20){
          tiempEstan9=estan20;

          Unidad9=UniFich20;


        }
        if(Operacion9==OpFic21){
          tiempEstan9=estan21;

          Unidad9=UniFich21;


        }
        if(Operacion9==OpFic22){
          tiempEstan9=estan22;

          Unidad9=UniFich22;


        }
        if(Operacion9==OpFic23){
          tiempEstan9=estan23;

          Unidad9=UniFich23;


        }
        if(Operacion9==OpFic24){
          tiempEstan9=estan24;

          Unidad9=UniFich24;

        }
        if(Operacion9==OpFic25){
          tiempEstan9=estan25;

          Unidad9=UniFich25;


        }
        if(Operacion9==OpFic26){
          tiempEstan9=estan26;

          Unidad9=UniFich26;



        }
        if(Operacion9==OpFic27){
          tiempEstan9=estan27;

          Unidad9=UniFich27;


        }
        if(Operacion9==OpFic28){
          tiempEstan9=estan28;

          Unidad9=UniFich28;


        }
        if(Operacion9==OpFic29){
          tiempEstan9=estan29;

          Unidad9=UniFich29;


        }
        if(Operacion9==OpFic30){
          tiempEstan9=estan30;

          Unidad9=UniFich30;


        }

        if(Operacion9==OpFic31){
          tiempEstan9=estan31;

          Unidad9=UniFich31;


        }
        if(Operacion9==OpFic32){
          tiempEstan9=estan32;

          Unidad9=UniFich32;

        }
        if(Operacion9==OpFic33){
          tiempEstan9=estan33;

          Unidad9=UniFich33;

        }
        if(Operacion9==OpFic34){
          tiempEstan9=estan34;

          Unidad9=UniFich34;

        }
        if(Operacion9==OpFic35){
          tiempEstan9=estan35;

          Unidad9=UniFich35;


        }
        if(Operacion9==OpFic36){
          tiempEstan9=estan36;

          Unidad9=UniFich36;


        }
        if(Operacion9==OpFic37){
          tiempEstan9=estan37;

          Unidad9=UniFich37;

        }
        if(Operacion9==OpFic38){
          tiempEstan9=estan38;

          Unidad9=UniFich38;

        }
        if(Operacion9==OpFic39){
          tiempEstan9=estan39;

          Unidad9=UniFich39;


        }
        if(Operacion9==OpFic40){
          tiempEstan9=estan40;

          Unidad9=UniFich40;


        }
        if(Operacion9==OpFic41){
          tiempEstan9=estan41;

          Unidad9=UniFich41;


        }
        if(Operacion9==OpFic42){
          tiempEstan9=estan42;

          Unidad9=UniFich42;


        }
        if(Operacion9==OpFic43){
          tiempEstan9=estan43;

          Unidad9=UniFich43;


        }
        if(Operacion9==OpFic44){
          tiempEstan9=estan44;

          Unidad9=UniFich44;


        }
        if(Operacion9==OpFic45){
          tiempEstan9=estan45;

          Unidad9=UniFich45;

        }
        if(Operacion9==OpFic46){
          tiempEstan9=estan46;

          Unidad9=UniFich46;

        }
        if(Operacion9==OpFic47){
          tiempEstan9=estan47;

          Unidad9=UniFich47;


        }
        if(Operacion9==OpFic48){
          tiempEstan9=estan48;

          Unidad9=UniFich48;


        }
        if(Operacion9==OpFic49){
          tiempEstan9=estan49;

          Unidad9=UniFich49;


        }
        if(Operacion9==OpFic50){
          tiempEstan9=estan50;

          Unidad9=UniFich50;


        }

          //---------------------------------------------vacios-------------------------
          if(Operacion==""){
            tiempEstan1=0;

            Unidad1=0;
          }
          if(Operacion2==""){
            tiempEstan2=0;

            Unidad2=0;
          }
          if(Operacion3==""){
            tiempEstan3=0;

            Unidad3=0;
          }
          if(Operacion4==""){
            tiempEstan4=0;

            Unidad4=0;
          }
          if(Operacion5==""){
            tiempEstan5=0;

            Unidad5=0;
          }
          if(Operacion6==""){
            tiempEstan6=0;

            Unidad6=0;
          }
          if(Operacion7==""){
            tiempEstan7=0;

            Unidad7=0;
          }
          if(Operacion8==""){
            tiempEstan8=0;

            Unidad8=0;
          }
          if(Operacion9==""){
            tiempEstan9=0;

            Unidad9=0;
          }


          //..................................................PAUSAS..........................
          pausa="";

          if(comi!=0){
            pausa="Pausa Comida";
          }
          if(tin!=0){
            pausa="Pausa Activa";
          }
          if(comi!=0 && tin!=0){
            pausa="Pausa Comida y Activa";
          }
          



          
          //---------------------------calculo porcentaje-----------------------------
          TiempoStdTotal=((tiempEstan1/cantidadElabo)+(tiempEstan2/cantidadElabo)+(tiempEstan3/cantidadElabo)
          +(tiempEstan4/cantidadElabo)+(tiempEstan5/cantidadElabo)+tiempEstan6+tiempEstan7+tiempEstan8+tiempEstan9);
          console.log("el tiempo total STD es de:  "+TiempoStdTotal);
          unidadSTD=parseInt(Unidad1+Unidad2+Unidad3+Unidad4+Unidad5);
          console.log("Las undiades Std son :" +unidadSTD);

          rela= TiempoStdTotal*cantidadElabo;

          //Rendi=(TiempoStdTotal*100)/(tiemTrabajado-comi-tin);
          Rendi=((rela*100)/(tiemTrabajado-comi-tin))/numeroOperarios;


          /*rela=(cantidadElabo*3600)/unidadSTD;
          Rendi=(rela*100)/tiemTrabajado;*/


         // tablaAdmi();
       


         // indicadores();

          

          /*tabl.innerHTML +=`
          <tr>
      <td scope="row">${Operario}</td>
      <td scope="row">${integrantes}</td>

      <td scope="row">${inicio}</td>
      <td scope="row">${tFinal}</td>

      <td scope="row">${Operacion +", "+Operacion2+", "+Operacion3+", "+Operacion4+", "+Operacion5+", "+Operacion6
    +", "+Operacion7+", "+Operacion8+", "+Operacion9}</td>

      <td>${TiempoStdTotal}segundos</td>

      <td>${cantidadElabo} unidades</td>
      <td>${(tiemTrabajado/60).toFixed(2)} min</td>
      <td>${pausa} </td>


      <td>${Math.round(Rendi)}%</td>

      </tr>

      `*/


      graficas();
      sumaTiemposCompletos();
      valorcami();



            });
        })

            });
        })
        
            });
        })
      
  

          
          

}

indicadores=function(){

  resulTermi1=0;
resulTermi2=0;
resulEnsam1=0;
resulEnsam2=0;
resulPre1=0;
resulPre2=0;
  
  document.getElementById("unidadesrealizadas").value="";
  document.getElementById("tiemPrepa1").value="";
  document.getElementById("porcePrepa").value="";
  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  tiempTrabaPrepa2=0;
  totalTiem2=0;
  var consultaOP=document.getElementById("buscaCedu").value;
  tin=0;
  ti=0;
  com=0;
  comi=0;
  resul=0;




  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Preparación 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);


        
    if (isNaN(tiempTrabaPrepa1)) {
      tiempTrabaPrepa1 = 0;
    }
    if(tiempTrabaPrepa1==""){
      tiempTrabaPrepa1=0;
    }
    if (isNaN(canti)) {
      canti = 0;
    }
    if(canti==""){
      canti=0;
    }

        var  comi=parseInt(`${doc.data().Comida}`);
        var  tinto=parseInt(`${doc.data().Tinto}`);
        var  tinto2=parseInt(`${doc.data().Tinto2}`);
        numeroOperarios = `${doc.data().NumeroOpera}`;



      //  tin=tin+tinto;
       //  com=com+comi;



   
          can=can+canti;
          totalTiem1=totalTiem1+(tiempTrabaPrepa1*numeroOperarios);


          resul=totalTiem1-comi-tinto-tinto2;

        /*  if (isNaN(totalTiem1)) {
            totalTiem1=0;
          } */

          

          document.getElementById("unidadesrealizadas").value=can;
         resulPre1=  document.getElementById("tiemPrepa1").value=((totalTiem1/60)).toFixed(2);

        //console.log("VAMOOOOOOOOOOOOOOOOOS"+": "+resulPre1);
      // document.getElementById("tiemTotalTaba").value=resul/60;





         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  cantiOp=`${doc.data().Cantidad}`;
                   consultaref=`${doc.data().Referenc}`;
      
                   porcePre1=(can*100)/cantiOp;
                   document.getElementById("porcePrepa").value=porcePre1.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}

indicadores2=function(){  
  document.getElementById("unidadesrealizadas2").value="";
  document.getElementById("tiemPrepa2").value="";
  document.getElementById("porcePrepa2").value="";
  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  tiempTrabaPrepa2=0;
  totalTiem2=0;
  var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Preparación 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
      var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

      
      if (isNaN(tiempTrabaPrepa1)) {
        tiempTrabaPrepa1 = 0;
      }
      if(tiempTrabaPrepa1==""){
        tiempTrabaPrepa1=0;
      }
      if(canti==""){
        canti=0;
      }
  

          can2=can2+canti;
          totalTiem2=totalTiem2+(tiempTrabaPrepa1*numeroOperarios2);


          document.getElementById("unidadesrealizadas2").value=can2;
         resulPre2= document.getElementById("tiemPrepa2").value=((totalTiem2/60)).toFixed(2);
         //document.getElementById("tiemTotalTaba").value=resulPre2;





         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre2=(can2*100)/cantiOp;
                   document.getElementById("porcePrepa2").value=porcePre2.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}
indicadores2mas1=function(){  
  document.getElementById("unidadesrealizadas7").value="";
  document.getElementById("tiemPrepa7").value="";
  document.getElementById("porcePrepa7").value="";
  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;
  can7=0;
  can8=0;
  can9=0;



 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;
  tiempTrabaPrepa6=0;
  tiempTrabaPrepa7=0;
  tiempTrabaPrepa8=0;
  tiempTrabaPrepa9=0;



 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;
  totalTiem6=0;
  totalTiem7=0;
  totalTiem8=0;
  totalTiem9=0;


  var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Preparación 3")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa3=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

              
    if (isNaN(tiempTrabaPrepa3)) {
      tiempTrabaPrepa3 = 0;
    }
    if(tiempTrabaPrepa3==""){
      tiempTrabaPrepa3=0;
    }
    if(canti==""){
      canti=0;
    }



          can7=can7+canti;
          totalTiem7=totalTiem7+(tiempTrabaPrepa3*numeroOperarios2);


          document.getElementById("unidadesrealizadas7").value=can7;
         resulPre2= document.getElementById("tiemPrepa7").value=((totalTiem7/60)).toFixed(2);
         //document.getElementById("tiemTotalTaba").value=resulPre2;





          /*db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre7=(can7*100)/cantiOp;
                   document.getElementById("porcePrepa7").value=porcePre7.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}
indicadores2mas2=function(){  
  document.getElementById("unidadesrealizadas8").value="";
  document.getElementById("tiemPrepa8").value="";
  document.getElementById("porcePrepa8").value="";
  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;
  can7=0;
  can8=0;
  can9=0;



 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;
  tiempTrabaPrepa6=0;
  tiempTrabaPrepa7=0;
  tiempTrabaPrepa8=0;
  tiempTrabaPrepa9=0;



 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;
  totalTiem6=0;
  totalTiem7=0;
  totalTiem8=0;
  totalTiem9=0;


  var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Preparación 4")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa8=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;
        console.log('tiempo trabajado:'+tiempTrabaPrepa8);

            
        if (isNaN(tiempTrabaPrepa8)) {
          tiempTrabaPrepa8 = 0;
        }
        if(tiempTrabaPrepa8==""){
          tiempTrabaPrepa8=0;
        }
        if(canti==""){
          canti=0;
        }

          can8=can8+canti;
          totalTiem8=(totalTiem8+(tiempTrabaPrepa8*numeroOperarios2));
          console.log('tiempo en el contador'+totalTiem8);


          document.getElementById("unidadesrealizadas8").value=can8;
         resulPre2= document.getElementById("tiemPrepa8").value=((totalTiem8/60)).toFixed(2);
         //document.getElementById("tiemTotalTaba").value=resulPre2;





          /*db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre8=(can8*100)/cantiOp;
                   document.getElementById("porcePrepa8").value=porcePre8.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}
indicadores3=function(){
  document.getElementById("unidadesrealizadas3").value="";
  document.getElementById("tiemEnsam1").value="";
  document.getElementById("porceEnsam1").value="";
  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  totalTiem2=0;
  totalTiem3=0;
  var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Ensamble 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

            
        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if(canti==""){
          canti=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
    

          can3=can3+canti;
          totalTiem3=totalTiem3+(tiempTrabaPrepa1*numeroOperarios2);


          document.getElementById("unidadesrealizadas3").value=can3;
         resulEnsam1= document.getElementById("tiemEnsam1").value=((totalTiem3/60)).toFixed(2);




         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre3=(can3*100)/cantiOp;
                   document.getElementById("porceEnsam1").value=porcePre3.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}
indicadores4=function(){
  document.getElementById("unidadesrealizadas4").value="";
  document.getElementById("tiemEnsam2").value="";
  document.getElementById("porceEnsam2").value="";

  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Ensamble 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesrealizadas4").value=can4;
        resulEnsam2=  document.getElementById("tiemEnsam2").value=((totalTiem4/60)).toFixed(2);




         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceEnsam2").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}
indicadores5=function(){
  document.getElementById("unidadesrealizadas5").value="";
  document.getElementById("tiemTermi1").value="";
  document.getElementById("porceTermi1").value="";

  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;

 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;

 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;

 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Terminación 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa5=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa5)) {
          tiempTrabaPrepa5 = 0;
        }
        if(tiempTrabaPrepa5==""){
          tiempTrabaPrepa5=0;
        }
        if(canti==""){
          canti=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }

          can5=can5+canti;
          totalTiem5=totalTiem5+(tiempTrabaPrepa5*numeroOperarios2);
       //   console.log("TEMINACIOOOOOOOOOOOOOOOOOON"+totalTiem5);


          document.getElementById("unidadesrealizadas5").value=can5;
        resulTermi1= document.getElementById("tiemTermi1").value=((totalTiem5/60)).toFixed(2);
       //  document.getElementById("tiemTermi1").value="min";





         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre5=(can5*100)/cantiOp;
                   document.getElementById("porceTermi1").value=porcePre5.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}
indicadores6=function(){
  document.getElementById("unidadesrealizadas6").value="";
  document.getElementById("tiemTermi2").value="";
  document.getElementById("porceTermi2").value="";

  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;


 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;
  tiempTrabaPrepa6=0;


 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;
  totalTiem6=0;


 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Terminación 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa6=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa6)) {
          tiempTrabaPrepa6 = 0;
        }
        if(tiempTrabaPrepa6==""){
          tiempTrabaPrepa6=0;
        }
        if(canti==""){
          canti=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }


          can6=can6+canti;
          totalTiem6=totalTiem6+(tiempTrabaPrepa6*numeroOperarios2);
        //  console.log("TEMINACIOOOOOOOOOOOOOOOOOON"+totalTiem6);


          document.getElementById("unidadesrealizadas6").value=can6;
        resulTermi2= document.getElementById("tiemTermi2").value=((totalTiem6/60)).toFixed(2);
       //  document.getElementById("tiemTermi1").value="min";





        /*  db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre6=(can6*100)/cantiOp;
                   document.getElementById("porceTermi2").value=porcePre6.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}
indicadoresTermi3=function(){
  document.getElementById("unidadesrealizadas9").value="";
  document.getElementById("tiemTermi9").value="";
  document.getElementById("porceTermi9").value="";

  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;
  can7=0;
  can8=0;
  can9=0;



 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;
  tiempTrabaPrepa6=0;
  tiempTrabaPrepa7=0;
  tiempTrabaPrepa8=0;
  tiempTrabaPrepa9=0;



 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;
  totalTiem6=0;
  totalTiem7=0;
  totalTiem8=0;
  totalTiem9=0;



 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Terminación 3")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa9=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa9)) {
          tiempTrabaPrepa9 = 0;
        }
        if(tiempTrabaPrepa9==""){
          tiempTrabaPrepa9=0;
        }
        if(canti==""){
          canti=0;
        }


          can9=can9+canti;
          totalTiem9=totalTiem9+(tiempTrabaPrepa9*numeroOperarios2);
         // console.log("TEMINACIOOOOOOOOOOOOOOOOOON"+totalTiem6);


          document.getElementById("unidadesrealizadas9").value=can9;
        resulTermi2= document.getElementById("tiemTermi9").value=((totalTiem9/60)).toFixed(2);
       //  document.getElementById("tiemTermi1").value="min";





         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre9=(can9*100)/cantiOp;
                   document.getElementById("porceTermi9").value=porcePre9.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}

indicadoresTermi4=function(){
  document.getElementById("unidadesrealizadas10").value="";
  document.getElementById("tiemTermi10").value="";
  document.getElementById("porceTermi10").value="";

  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;
  can7=0;
  can8=0;
  can9=0;
  can10=0;




 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;
  tiempTrabaPrepa6=0;
  tiempTrabaPrepa7=0;
  tiempTrabaPrepa8=0;
  tiempTrabaPrepa9=0;
  tiempTrabaPrepa10=0;




 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;
  totalTiem6=0;
  totalTiem7=0;
  totalTiem8=0;
  totalTiem9=0;
  totalTiem10=0;




 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Terminación 4")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa10=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa10)) {
          tiempTrabaPrepa10 = 0;
        }
        if(tiempTrabaPrepa10==""){
          tiempTrabaPrepa10=0;
        }
        if(canti==""){
          canti=0;
        }

          can10=can10+canti;
          totalTiem10=totalTiem10+(tiempTrabaPrepa10*numeroOperarios2);
         // console.log("TEMINACIOOOOOOOOOOOOOOOOOON"+totalTiem6);


          document.getElementById("unidadesrealizadas10").value=can10;
        resulTermi2= document.getElementById("tiemTermi10").value=((totalTiem10/60)).toFixed(2);
       //  document.getElementById("tiemTermi1").value="min";





         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre10=(can10*100)/cantiOp;
                   document.getElementById("porceTermi10").value=porcePre10.toFixed(2);


                  });
                })*/
        
                });
                })

                
               



}
indicadoresPyR1=function(){
  document.getElementById("unidadesrealizadasPyR1").value="";
  document.getElementById("tiemTermiPyR1").value="";
  document.getElementById("porceTermiPyR1").value="";

  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;
  can7=0;
  can8=0;
  can9=0;
  can10=0;
  can11=0;
  can12=0;





 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;
  tiempTrabaPrepa6=0;
  tiempTrabaPrepa7=0;
  tiempTrabaPrepa8=0;
  tiempTrabaPrepa9=0;
  tiempTrabaPrepa10=0;
  tiempTrabaPrepa11=0;
  tiempTrabaPrepa12=0;




 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;
  totalTiem6=0;
  totalTiem7=0;
  totalTiem8=0;
  totalTiem9=0;
  totalTiem10=0;
  totalTiem11=0;
  totalTiem12=0;





 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Pulida y Revisada 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa11=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa11)) {
          tiempTrabaPrepa11 = 0;
        }
        if(tiempTrabaPrepa11==""){
          tiempTrabaPrepa11=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }



          can11=can11+canti;
          totalTiem11=totalTiem11+(tiempTrabaPrepa11*numeroOperarios2);
         // console.log("TEMINACIOOOOOOOOOOOOOOOOOON"+totalTiem6);


          document.getElementById("unidadesrealizadasPyR1").value=can11;
        resulTermi2= document.getElementById("tiemTermiPyR1").value=((totalTiem11/60)).toFixed(2);
       //  document.getElementById("tiemTermi1").value="min";





          db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre11=(can11*100)/cantiOp;
                   document.getElementById("porceTermiPyR1").value=porcePre11.toFixed(2);


                  });
                })
        
                });
                })

                
               



}
indicadoresPyR2=function(){
  document.getElementById("unidadesrealizadasPyR2").value="";
  document.getElementById("tiemTermiPyR2").value="";
  document.getElementById("porceTermiPyR2").value="";

  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;
  can7=0;
  can8=0;
  can9=0;
  can10=0;
  can11=0;
  can12=0;





 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;
  tiempTrabaPrepa6=0;
  tiempTrabaPrepa7=0;
  tiempTrabaPrepa8=0;
  tiempTrabaPrepa9=0;
  tiempTrabaPrepa10=0;
  tiempTrabaPrepa11=0;
  tiempTrabaPrepa12=0;




 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;
  totalTiem6=0;
  totalTiem7=0;
  totalTiem8=0;
  totalTiem9=0;
  totalTiem10=0;
  totalTiem11=0;
  totalTiem12=0;





 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Pulida y Revisada 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa12=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;


        if (isNaN(tiempTrabaPrepa12)) {
          tiempTrabaPrepa12 = 0;
        }
        if(tiempTrabaPrepa12==""){
          tiempTrabaPrepa12=0;
        }
        if(canti==""){
          canti=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }


          can12=can12+canti;
          totalTiem12=totalTiem12+(tiempTrabaPrepa12*numeroOperarios2);
         // console.log("TEMINACIOOOOOOOOOOOOOOOOOON"+totalTiem6);


          document.getElementById("unidadesrealizadasPyR2").value=can12;
        resulTermi2= document.getElementById("tiemTermiPyR2").value=((totalTiem12/60)).toFixed(2);
       //  document.getElementById("tiemTermi1").value="min";





         db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre12=(can12*100)/cantiOp;
                   document.getElementById("porceTermiPyR2").value=porcePre12.toFixed(2);


                  });
                })
        
                });
                })

                
               



}
indicadoresPyR3=function(){
  document.getElementById("unidadesrealizadasPyR3").value="";
  document.getElementById("tiemTermiPyR3").value="";
  document.getElementById("porceTermiPyR3").value="";

  canti=0;
  canti2=0;
  can=0;
  tiempTrabaPrepa1=0;
  totalTiem1=0;
  can2=0;
  can3=0;
  can4=0;
  can5=0;
  can6=0;
  can7=0;
  can8=0;
  can9=0;
  can10=0;
  can11=0;
  can12=0;
  can13=0;





 tiempTrabaPrepa2=0;
  tiempTrabaPrepa3=0;
  tiempTrabaPrepa4=0;
  tiempTrabaPrepa5=0;
  tiempTrabaPrepa6=0;
  tiempTrabaPrepa7=0;
  tiempTrabaPrepa8=0;
  tiempTrabaPrepa9=0;
  tiempTrabaPrepa10=0;
  tiempTrabaPrepa11=0;
  tiempTrabaPrepa12=0;
  tiempTrabaPrepa13=0;





 totalTiem2=0;
  totalTiem3=0;
  totalTiem4=0;
  totalTiem5=0;
  totalTiem6=0;
  totalTiem7=0;
  totalTiem8=0;
  totalTiem9=0;
  totalTiem10=0;
  totalTiem11=0;
  totalTiem12=0;
  totalTiem13=0;






 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Pulida y Revisada 3")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa13=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;


        if (isNaN(tiempTrabaPrepa13)) {
          tiempTrabaPrepa13 = 0;
        }
        if(tiempTrabaPrepa13==""){
          tiempTrabaPrepa13=0;
        }
        if(canti==""){
          canti=0;
        }

          can13=can13+canti;
          totalTiem13=totalTiem13+(tiempTrabaPrepa13*numeroOperarios2);
         // console.log("TEMINACIOOOOOOOOOOOOOOOOOON"+totalTiem6);


          document.getElementById("unidadesrealizadasPyR3").value=can13;
        resulTermi2= document.getElementById("tiemTermiPyR3").value=((totalTiem13/60)).toFixed(2);
       //  document.getElementById("tiemTermi1").value="min";





         db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre13=(can13*100)/cantiOp;
                   document.getElementById("porceTermiPyR3").value=porcePre13.toFixed(2);


                  });
                })
        
                });
                })

                
               



}

indicadorApoyoPr1=function(){
  document.getElementById("unidadesrealizadasApoyoPr1").value="";
  document.getElementById("tiemApoyoPr1").value="";
  document.getElementById("porceApoyoPr1").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Apoyo preparacion 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesrealizadasApoyoPr1").value=can4;
        resulEnsam2=  document.getElementById("tiemApoyoPr1").value=((totalTiem4/60)).toFixed(2);




        /*  db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceApoyoPr1").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}
indicadorApoyoPr2=function(){
  document.getElementById("unidadesrealizadasApoyoPr2").value="";
  document.getElementById("tiemApoyoPr2").value="";
  document.getElementById("porceApoyoPr2").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Apoyo preparacion 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesrealizadasApoyoPr2").value=can4;
        resulEnsam2=  document.getElementById("tiemApoyoPr2").value=((totalTiem4/60)).toFixed(2);




       /*   db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceApoyoPr2").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}
indicadorApoyoEn1=function(){
  document.getElementById("unidadesrealizadasApoyoEn1").value="";
  document.getElementById("tiemApoyoEn1").value="";
  document.getElementById("porceApoyoEn1").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Apoyo ensamble 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesrealizadasApoyoEn1").value=can4;
        resulEnsam2=  document.getElementById("tiemApoyoEn1").value=((totalTiem4/60)).toFixed(2);




          /*db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceApoyoEn1").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}
indicadorApoyoEn2=function(){
  document.getElementById("unidadesrealizadasApoyoEn2").value="";
  document.getElementById("tiemApoyoEn2").value="";
  document.getElementById("porceApoyoEn2").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Apoyo ensamble 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesrealizadasApoyoEn2").value=can4;
        resulEnsam2=  document.getElementById("tiemApoyoEn2").value=((totalTiem4/60)).toFixed(2);




         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceApoyoEn2").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}


indicadorRuedo1=function(){
  document.getElementById("unidadesrealizadasRuedo1").value="";
  document.getElementById("tiemRuedo1").value="";
  document.getElementById("porceRuedo1").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Ruedo 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesrealizadasRuedo1").value=can4;
        resulEnsam2=  document.getElementById("tiemRuedo1").value=((totalTiem4/60)).toFixed(2);




         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceRuedo1").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}
indicadorRuedo2=function(){
  document.getElementById("unidadesrealizadasRuedo2").value="";
  document.getElementById("tiemRuedo2").value="";
  document.getElementById("porceRuedo2").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Ruedo 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesrealizadasRuedo2").value=can4;
        resulEnsam2=  document.getElementById("tiemRuedo2").value=((totalTiem4/60)).toFixed(2);




        /*  db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                   porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceRuedo2").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}

indicadorReproceso1=function(){
  document.getElementById("unidadesReprocesos1").value="";
  document.getElementById("tiemTermiReproceso1").value="";
  document.getElementById("porceReproceso1").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Reproceso propio 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesReprocesos1").value=can4;
        resulEnsam2=  document.getElementById("tiemTermiReproceso1").value=((totalTiem4/60)).toFixed(2);




         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                  var porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceReproceso1").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}
indicadorReproceso2=function(){
  document.getElementById("unidadesReprocesos2").value="";
  document.getElementById("tiemTermiReproceso2").value="";
  document.getElementById("porceReproceso2").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Reproceso propio 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesReprocesos2").value=can4;
        resulEnsam2=  document.getElementById("tiemTermiReproceso2").value=((totalTiem4/60)).toFixed(2);




         /* db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                  var porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceReproceso2").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}
indicadorReprocesoAjeno1=function(){
  document.getElementById("unidadesReprocesosAjeno1").value="";
  document.getElementById("tiemTermiReprocesoAjeno1").value="";
  document.getElementById("porceReprocesoAjeno1").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Reproceso ajeno 1")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesReprocesosAjeno1").value=can4;
        resulEnsam2=  document.getElementById("tiemTermiReprocesoAjeno1").value=((totalTiem4/60)).toFixed(2);




        /*  db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                  var porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceReprocesoAjeno1").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}
indicadorReprocesoAjeno2=function(){
  document.getElementById("unidadesReprocesosAjeno2").value="";
  document.getElementById("tiemTermiReprocesoAjeno2").value="";
  document.getElementById("porceReprocesoAjeno2").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Reproceso ajeno 2")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can4=can4+canti;
          totalTiem4=totalTiem4+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesReprocesosAjeno2").value=can4;
        resulEnsam2=  document.getElementById("tiemTermiReprocesoAjeno2").value=((totalTiem4/60)).toFixed(2);




       /*   db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                  var porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceReprocesoAjeno2").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}

indicadorRevisionReproceso=function(){
  document.getElementById("unidadesRevision").value="";
  document.getElementById("tiemTermiRevision").value="";

 var canti=0;
 var canti2=0;
var  can=0;
 var tiempTrabaPrepa1=0;
 var totalTiem1=0;
var  can2=0;
var  can3=0;
 var can4=0;
var tiempTrabaPrepa2=0;
var  tiempTrabaPrepa3=0;
 var tiempTrabaPrepa4=0;
var totalTiem2=0;
 var totalTiem3=0;
 var totalTiem4=0;
 var consultaOP=document.getElementById("buscaCedu").value;


  db.collection("controladministradores").where("referencia", "==", consultaOP).where("usuariooperario", "==", "Revision Reprocesos")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          var canti=parseInt(`${doc.data().cantidadElaborada}`);
          //  consultaref=`${doc.data().Referenc}`;
        var  tiempTrabaPrepa1=parseInt(`${doc.data().tiempo}`);
        var  numeroOperarios2 = `${doc.data().NumeroOpera}`;

        if (isNaN(tiempTrabaPrepa1)) {
          tiempTrabaPrepa1 = 0;
        }
        if(tiempTrabaPrepa1==""){
          tiempTrabaPrepa1=0;
        }
        if (isNaN(canti)) {
          canti = 0;
        }
        if(canti==""){
          canti=0;
        }
      
          can40=can40+canti;
          totalTiem40=totalTiem40+(tiempTrabaPrepa1*numeroOperarios2);

//console.log("LA CANTIDAD DE ENSAMBLE 2 ES:"+can4);
          document.getElementById("unidadesRevision").value=can40;
        resulEnsam2=  document.getElementById("tiemTermiRevision").value=((totalTiem40/60)).toFixed(2);




       /*   db.collection("OrdenProduccion").where("OrdenP", "==", consultaOP)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                var  cantiOp=`${doc.data().Cantidad}`;
                  var consultaref=`${doc.data().Referenc}`;
      
                  var porcePre4=(can4*100)/cantiOp;
                   document.getElementById("porceReprocesoAjeno2").value=porcePre4.toFixed(2);


                  });
                })*/
        
                });
                })

                
               


}
indicadoresResumen=function(){
  
  var consultaOP=document.getElementById("buscaCedu").value;
  var cantiOpo=document.getElementById("cantiOp").value;
  tiempoTotal=0;
  tiemPre1=0;
  tiemPre2=0;
  tiemPre3=0;
  tiemPre4=0;
  tiemEnsa1=0;
  tiemEnsa2=0;
  tiemTer1=0;
  tiemTer2=0;
  tiemTer3=0;

  tiemTer4=0;

  comida=0;
  comiPre1=0;
  comiPre2=0;
  comiPre3=0;
  comiPre4=0;

  comiEnsa1=0;
  comiEnsa2=0;
  comiTer1=0;
  comiTer2=0;
  comiTer3=0;
  comiTer4=0;

  pausaTinPre1=0;
  pausaTinPre2=0;
  pausaTinPre3=0;
  pausaTinPre4=0;

  pausaTinEnsa1=0;
  pausaTinEnsa2=0;
  pausaTinTer1=0;
  pausaTinTer2=0;
  pausaTinTer3=0;
  pausaTinTer4=0;

  pausa11=0;
  pausa2Pre1=0;
  tiemImproducPre1=0;
  pausa2Pre2=0;
  pausa2Ensa1=0;
  pausa2Ensa2=0;
  pausa2Ter1=0;
  pausa2Ter2=0;
  pausa2Ter3=0;
  pausa2Ter4=0;


  tiemImproducPre2=0;
  tiemImproducPre3=0;
  tiemImproducPre4=0;

  tiemImproducEnsa1=0;
  tiemImproducEnsa2=0;
  tiemImproducTerm1=0;
  tiemImproducTerm2=0;
  tiemImproducTerm3=0;
  tiemImproducTerm4=0;

  totalImprodu=0;

  tiemPyR1=0;
  comiPyR1=0;
  pausaTinPyR1=0;
  pausa2PyR1=0;

  tiemPyR2=0;
  comiPyR2=0;
  pausaTinPyR2=0;
  pausa2PyR2=0;

  tiemPyR3=0;
  comiPyR3=0;
  pausaTinPyR3=0;
  pausa2PyR3=0;

  tiemImproducPre3=0;
tiemImproducPre4=0;
tiemImproducTerm3=0;
tiemImproducTerm4=0;

tiemImproducPyR1=0;
tiemImproducPyR2=0;
tiemImproducPyR3=0;

pausa2Pre3=0;
pausa2Pre4=0;

prepara1=0;
prepara2=0;
prepara3=0;
prepara4=0;

ensam1=0;
ensam2=0;

termi1=0;
termi2=0;
termi3=0;
termi4=0;

tiemImproducApoyoPr1=0;
comiApoyoPr1=0;
pausaTinApoyoPr1=0;
pausa2ApoyoPr1=0;

tiemImproducApoyoPr2=0;
comiApoyoPr2=0;
pausaTinApoyoPr2=0;
pausa2ApoyoPr2=0;

tiemImproducApoyoEn1=0;
comiApoyoEn1=0;
pausaTinApoyoEn1=0;
pausa2ApoyoEn1=0;

tiemImproducApoyoEn2=0;
comiApoyoEn2=0;
pausaTinApoyoEn2=0;
pausa2ApoyoEn2=0;

tiemImproducRuedo1=0;
comiRuedo1=0;
pausaTinRuedo1=0;
pausa2Ruedo1=0;

tiemImproducRuedo2=0;
comiRuedo2=0;
pausaTinRuedo2=0;
pausa2Ruedo2=0;

tiemReproce1=0;
comiReproce1=0;
pausaTinReproce1=0;
pausa2Reproce1=0;

tiemReproce2=0;
comiReproce2=0;
pausaTinReproce2=0;
pausa2Reproce2=0;

tiemReproceAjeno1=0;
comiReproceAjeno1=0;
pausaTinReproceAjeno1=0;
pausa2ReproceAjeno1=0;

tiemReproceAjeno2=0;
comiReproceAjeno2=0;
pausaTinReproceAjeno2=0;
pausa2ReproceAjeno2=0;


tiemRevisionRepro=0;
comiRevisionRepro=0;
pausaTinRevisionRepro=0;
pausa2RevisionRepro=0;








  db.collection("controladministradores").where("referencia", "==", consultaOP)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
         // var ur=`${doc.data().UrlFrente}`;
       var mq=`${doc.data().usuariooperario}`;
        var tiem=Number(`${doc.data().tiempo}`);
        var comida=Number(`${doc.data().Comida}`);
        var pausa11=Number(`${doc.data().Tinto}`);
        var pausa2=Number(`${doc.data().Tinto2}`);

        // console.log(maqu);

        if(mq=="Preparación 1"){
            tiemPre1=tiem+tiemPre1;
            comiPre1=comiPre1+comida;
            pausaTinPre1=pausaTinPre1+pausa11;
            pausa2Pre1=pausa2Pre1+pausa2;


        }
        if(mq=="Preparación 2"){
          tiemPre2=tiem+tiemPre2;
          comiPre2=comiPre2+comida;
          pausaTinPre2=pausaTinPre2+pausa11;
          pausa2Pre2=pausa2Pre2+pausa2;



      }
      if(mq=="Preparación 3"){
        tiemPre3=tiem+tiemPre3;
        comiPre3=comiPre3+comida;
        pausaTinPre3=pausaTinPre3+pausa11;
        pausa2Pre3=pausa2Pre3+pausa2;



    }
    if(mq=="Preparación 4"){
      tiemPre4=tiem+tiemPre4;
      comiPre4=comiPre4+comida;
      pausaTinPre4=pausaTinPre4+pausa11;
      pausa2Pre4=pausa2Pre4+pausa2;



  }
      if(mq=="Ensamble 1"){
          tiemEnsa1=tiem+tiemEnsa1;
          comiEnsa1=comiEnsa1+comida;
          pausaTinEnsa1=pausaTinEnsa1+pausa11;
          pausa2Ensa1=pausa2Ensa1+pausa2;



      }

      if(mq=="Ensamble 2"){
          tiemEnsa2=tiem+tiemEnsa2;
          comiEnsa2=comiEnsa2+comida;
          pausaTinEnsa2=pausaTinEnsa2+pausa11;
          pausa2Ensa2=pausa2Ensa2+pausa2;



      }
      if(mq=="Terminación 1"){
        tiemTer1=tiem+tiemTer1;
        comiTer1=comiTer1+comida;
        pausaTinTer1=pausaTinTer1+pausa11;
        pausa2Ter1=pausa2Ter1+pausa2;



    }
    if(mq=="Terminación 2"){
        tiemTer2=tiem+tiemTer2;
        comiTer2=comiTer2+comida;
        pausaTinTer2=pausaTinTer2+pausa11;
        pausa2Ter2=pausa2Ter2+pausa2;



    }
    if(mq=="Terminación 3"){
      tiemTer3=tiem+tiemTer3;
      comiTer3=comiTer3+comida;
      pausaTinTer3=pausaTinTer3+pausa11;
      pausa2Ter3=pausa2Ter3+pausa2;



  }
  if(mq=="Terminación 4"){
    tiemTer4=tiem+tiemTer4;
    comiTer4=comiTer4+comida;
    pausaTinTer4=pausaTinTer4+pausa11;
    pausa2Ter4=pausa2Ter4+pausa2;



}
if(mq=="Pulida y Revisada 1"){
  tiemPyR1=tiem+tiemPyR1;
  comiPyR1=comiPyR1+comida;
  pausaTinPyR1=pausaTinPyR1+pausa11;
  pausa2PyR1=pausa2PyR1+pausa2;



}
if(mq=="Pulida y Revisada 2"){
  tiemPyR2=tiem+tiemPyR2;
  comiPyR2=comiPyR2+comida;
  pausaTinPyR2=pausaTinPyR2+pausa11;
  pausa2PyR2=pausa2PyR2+pausa2;



}
if(mq=="Pulida y Revisada 3"){
  tiemPyR3=tiem+tiemPyR3;
  comiPyR3=comiPyR3+comida;
  pausaTinPyR3=pausaTinPyR3+pausa11;
  pausa2PyR3=pausa2PyR3+pausa2;



}
if(mq=="Apoyo preparacion 1"){
  tiemApoyoPr1=tiem+tiemApoyoPr1;
  comiApoyoPr1=comiApoyoPr1+comida;
  pausaTinApoyoPr1=pausaTinApoyoPr1+pausa11;
  pausa2ApoyoPr1=pausa2ApoyoPr1+pausa2;



}
if(mq=="Apoyo preparacion 2"){
  tiemApoyoPr2=tiem+tiemApoyoPr2;
  comiApoyoPr2=comiApoyoPr2+comida;
  pausaTinApoyoPr2=pausaTinApoyoPr2+pausa11;
  pausa2ApoyoPr2=pausa2ApoyoPr2+pausa2;

}
if(mq=="Apoyo ensamble 1"){
  tiemApoyoEn1=tiem+tiemApoyoEn1;
  comiApoyoEn1=comiApoyoEn1+comida;
  pausaTinApoyoEn1=pausaTinApoyoEn1+pausa11;
  pausa2ApoyoEn1=pausa2ApoyoEn1+pausa2;

}
if(mq=="Apoyo ensamble 2"){
  tiemApoyoEn2=tiem+tiemApoyoEn2;
  comiApoyoEn2=comiApoyoEn2+comida;
  pausaTinApoyoEn2=pausaTinApoyoEn2+pausa11;
  pausa2ApoyoEn2=pausa2ApoyoEn2+pausa2;

}
if(mq=="Ruedo 1"){
  tiemRuedo1=tiem+tiemRuedo1;
  comiRuedo1=comiRuedo1+comida;
  pausaTinRuedo1=pausaTinRuedo1+pausa11;
  pausa2Ruedo1=pausa2Ruedo1+pausa2;

}
if(mq=="Ruedo 2"){
  tiemRuedo2=tiem+tiemRuedo2;
  comiRuedo2=comiRuedo2+comida;
  pausaTinRuedo2=pausaTinRuedo2+pausa11;
  pausa2Ruedo2=pausa2Ruedo2+pausa2;

}
if(mq=="Reproceso propio 1"){
  tiemReproce1=tiem+tiemReproce1;
  comiReproce1=comiReproce1+comida;
  pausaTinReproce1=pausaTinReproce1+pausa11;
  pausa2Reproce1=pausa2Reproce1+pausa2;

}
if(mq=="Reproceso propio 2"){
  tiemReproce2=tiem+tiemReproce2;
  comiReproce2=comiReproce2+comida;
  pausaTinReproce2=pausaTinReproce2+pausa11;
  pausa2Reproce2=pausa2Reproce2+pausa2;

}

if(mq=="Reproceso ajeno 1"){
  tiemReproceAjeno1=tiem+tiemReproceAjeno1;
  comiReproceAjeno1=comiReproceAjeno1+comida;
  pausaTinReproceAjeno1=pausaTinReproceAjeno1+pausa11;
  pausa2ReproceAjeno1=pausa2ReproceAjeno1+pausa2;

}

if(mq=="Reproceso ajeno 2"){
  tiemReproceAjeno2=tiem+tiemReproceAjeno2;
  comiReproceAjeno2=comiReproceAjeno2+comida;
  pausaTinReproceAjeno2=pausaTinReproceAjeno2+pausa11;
  pausa2ReproceAjeno2=pausa2ReproceAjeno2+pausa2;

}
if(mq=="Revision Reprocesos"){
  tiemRevisionRepro=tiem+tiemRevisionRepro;
  comiRevisionRepro=comiRevisionRepro+comida;
  pausaTinRevisionRepro=pausaTinRevisionRepro+pausa11;
  pausa2RevisionRepro=pausa2RevisionRepro+pausa2;

}
prepara1=document.getElementById("tiemPrepa1").value;
prepara2=document.getElementById("tiemPrepa2").value;
prepara3=document.getElementById("tiemPrepa7").value;
prepara4=document.getElementById("tiemPrepa8").value;

ensam1=document.getElementById("tiemEnsam1").value;
ensam2=document.getElementById("tiemEnsam2").value;

termi1=document.getElementById("tiemTermi1").value;
termi2=document.getElementById("tiemTermi2").value;
termi3=document.getElementById("tiemTermi9").value;
termi4=document.getElementById("tiemTermi10").value;




//-----------------------------------improductivo apoyos------------------------------------
tiemImproducApoyoPr1=comiApoyoPr1+pausaTinApoyoPr1+pausa2ApoyoPr1;
document.getElementById("improApoyoPr1").value=tiemImproducApoyoPr1/60;

tiemImproducApoyoPr2=comiApoyoPr2+pausaTinApoyoPr2+pausa2ApoyoPr2;
document.getElementById("improApoyoPr2").value=tiemImproducApoyoPr2/60;

tiemImproducApoyoEn1=comiApoyoEn1+pausaTinApoyoEn1+pausa2ApoyoEn1;
document.getElementById("improApoyoEn1").value=tiemImproducApoyoEn1/60;


tiemImproducApoyoEn2=comiApoyoEn2+pausaTinApoyoEn2+pausa2ApoyoEn2;
document.getElementById("improApoyoEn2").value=tiemImproducApoyoEn2/60;

tiemImproducRuedo1=comiRuedo1+pausaTinRuedo1+pausa2Ruedo1;
document.getElementById("improRuedo1").value=tiemImproducRuedo1/60;


tiemImproducRuedo2=comiRuedo2+pausaTinRuedo2+pausa2Ruedo2;
document.getElementById("improRuedo2").value=tiemImproducRuedo2/60;


//--------------------------------------------reprocesos -----------------------------------------------
tiemImproducReproce1=comiReproce1+pausaTinReproce1+pausa2Reproce1;
document.getElementById("improRepreceso1").value=tiemImproducReproce1/60;

tiemImproducReproce2=comiReproce2+pausaTinReproce2+pausa2Reproce2;
document.getElementById("improRepreceso2").value=tiemImproducReproce2/60;

tiemImproducReproceAjeno1=comiReproceAjeno1+pausaTinReproceAjeno1+pausa2ReproceAjeno1;
document.getElementById("improReprecesoAjeno1").value=tiemImproducReproceAjeno1/60;

tiemImproducReproceAjeno2=comiReproceAjeno2+pausaTinReproceAjeno2+pausa2ReproceAjeno2;
document.getElementById("improReprecesoAjeno2").value=tiemImproducReproceAjeno2/60;



     
      //tiempoTotal=tiemPre1+tiemPre2+tiemPre3+tiemPre4+tiemEnsa1+tiemEnsa2+tiemTer1+tiemTer2+tiemTer3+tiemTer4+tiemPyR1+tiemPyR2+tiemPyR3;
/*-------------------------------improductivo 1------------------------------------------ */
      tiemImproducPre1=comiPre1+pausaTinPre1+pausa2Pre1;
      document.getElementById("improPre1").value=tiemImproducPre1/60;
/*-------------------------------improductivo 2------------------------------------------ */
      tiemImproducPre2=comiPre2+pausaTinPre2+pausa2Pre2;
      document.getElementById("improPre2").value=tiemImproducPre2/60;

      /*-------------------------------improductivo 3------------------------------------------*/
      tiemImproducEnsa1=comiEnsa1+pausaTinEnsa1+pausa2Ensa1;
      document.getElementById("improEnsa1").value=tiemImproducEnsa1/60;

        /*-------------------------------improductivo 4------------------------------------------*/
        tiemImproducEnsa2=comiEnsa2+pausaTinEnsa2+pausa2Ensa2;
        document.getElementById("improEnsa2").value=tiemImproducEnsa2/60;
         /*-------------------------------improductivo 5------------------------------------------*/
         tiemImproducTerm1=comiTer1+pausaTinTer1+pausa2Ter1;
         document.getElementById("improTermi1").value=tiemImproducTerm1/60;
            /*-------------------------------improductivo 6------------------------------------------*/
            tiemImproducTerm2=comiTer2+pausaTinTer2+pausa2Ter2;
            document.getElementById("improTermi2").value=tiemImproducTerm2/60;
             /*-------------------------------improductivo 7------------------------------------------*/
             tiemImproducPre3=comiPre3+pausaTinPre3+pausa2Pre3;
      document.getElementById("improPre7").value=tiemImproducPre3/60;
              /*-------------------------------improductivo 8------------------------------------------*/
              tiemImproducPre4=comiPre4+pausaTinPre4+pausa2Pre4;
              document.getElementById("improPre8").value=tiemImproducPre4/60;
             /*-------------------------------improductivo 9------------------------------------------*/
             tiemImproducTerm3=comiTer3+pausaTinTer3+pausa2Ter3;
             document.getElementById("improTermi9").value=tiemImproducTerm3/60;
              /*-------------------------------improductivo 10------------------------------------------*/
              tiemImproducTerm4=comiTer4+pausaTinTer4+pausa2Ter4;
              document.getElementById("improTermi10").value=tiemImproducTerm4/60;
              /*-------------------------------improductivo PyR1------------------------------------------*/
              tiemImproducPyR1=comiPyR1+pausaTinPyR1+pausa2PyR1;
              document.getElementById("improTermiPyR1").value=tiemImproducPyR1/60;
              /*-------------------------------improductivo PyR2------------------------------------------*/
              tiemImproducPyR2=comiPyR2+pausaTinPyR2+pausa2PyR2;
              document.getElementById("improTermiPyR2").value=tiemImproducPyR2/60;
              /*-------------------------------improductivo PyR3------------------------------------------*/
              tiemImproducPyR3=comiPyR3+pausaTinPyR3+pausa2PyR3;
              document.getElementById("improTermiPyR3").value=tiemImproducPyR3/60;
             /*-------------------------------improductivo total------------------------------------------*/
             totalImprodu=tiemImproducPre1+tiemImproducPre2+tiemImproducPre3+tiemImproducPre4+tiemImproducEnsa1+tiemImproducEnsa2+tiemImproducTerm1+tiemImproducTerm2+tiemImproducTerm3+tiemImproducTerm4+tiemImproducPyR1+tiemImproducPyR2+tiemImproducPyR3+tiemImproducApoyoPr1+tiemImproducApoyoPr2+tiemImproducApoyoEn1+tiemImproducApoyoEn2+tiemImproducRuedo1+tiemImproducRuedo2;
             document.getElementById("totalImpro").value=totalImprodu/60;
             

     /*console.log("comida pre1"+comiPre1 + "comida pre2" +comiPre2+"comida ensa1"+comiEnsa1 +"comida ensa2"+comiEnsa2+ "comida ter1"+comiTer1+"comida ter2"+comiTer2);*/
      document.getElementById("pxCamisa").value=(tiempoTotal/60).toFixed(2);
      document.getElementById("camisaUnidad").value=((tiempoTotal/60)/cantiOpo).toFixed(2);
      



  
    });
  
        })


}

sumaTiemposCompletos=function(){
  prepara1=0;
  prepara2=0;
  prepara3=0;
  prepara4=0;
  
  ensam1=0;
  ensam2=0;
  
  termi1=0;
  termi2=0;
  termi3=0;
  termi4=0;

  tiempoTotal=0;
  
  prepara1=document.getElementById("tiemPrepa1").value;
  prepara2=document.getElementById("tiemPrepa2").value;
  prepara3=document.getElementById("tiemPrepa7").value;
  prepara4=document.getElementById("tiemPrepa8").value;
  
  ensam1=document.getElementById("tiemEnsam1").value;
  ensam2=document.getElementById("tiemEnsam2").value;
  
  termi1=document.getElementById("tiemTermi1").value;
  termi2=document.getElementById("tiemTermi2").value;
  termi3=document.getElementById("tiemTermi9").value;
  termi4=document.getElementById("tiemTermi10").value;
  
  
 // tiempoTotal=prepara1+prepara2+prepara3+prepara4+ensam1+ensam2+termi1+termi2+termi3+termi4;
  /*console.log("preparacion1y1"+prepara1);
  console.log("preparacion2y2"+prepara2);
  console.log("preparacion3y3"+prepara3);
  console.log("preparacion4y4"+prepara4);
  console.log("ensamble1y1"+ensam1);
  console.log("ensamble2y2"+ensam2);
  console.log("terminacion1y1"+termi1);
  console.log("terminacion2y2"+termi2);
  console.log("terminacion3y3"+termi3);
  console.log("terminacion4y4"+termi4);*/
  
}



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
 

     