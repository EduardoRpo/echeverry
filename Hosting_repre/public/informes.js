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

  actualizar=function(){

    var fecha=document.getElementById('fechaConsultar').value;


    db.collection("Informes").where("Fecha", "==", fecha)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data()); 

            var washingtonRef = db.collection("cities").doc(doc.id);

      var note1="";
      var note2="";
      var note3="";
      var note4="";
      var note5="";
      var note6="";
      var note7="";
      var note8="";
      var note9="";
      var note10="";
      var note11="";
      var note12="";

      var usu1="";
      var usu2="";
      var usu3="";
      var usu4="";
      var usu5="";
      var usu6="";
      var usu7="";
      var usu8="";
      var usu9="";
      var usu10="";
      var usu11="";
      var usu12="";

      var ref1="";
      var ref2=""; 
      var ref3="";
      var ref4="";
      var ref5="";
      var ref6="";
      var ref7="";
      var ref8="";
      var ref9="";
      var ref10="";
      var ref11="";
      var ref12="";

      var op1="";
      var op2="";
      var op3="";
      var op4="";
      var op5="";
      var op6="";
      var op7="";
      var op8="";
      var op9="";
      var op10="";
      var op11="";
      var op12="";

      var uds1="";
      var uds2="";
      var uds3="";
      var uds4="";
      var uds5="";
      var uds6="";
      var uds7="";
      var uds8="";
      var uds9="";
      var uds10="";
      var uds11="";
      var uds12="";

      var tiem1="";
      var tiem2="";
      var tiem3="";
      var tiem4="";
      var tiem5="";
      var tiem6="";
      var tiem7="";
      var tiem8="";
      var tiem9="";
      var tiem10="";
      var tiem11="";
      var tiem12="";

      var ritMin1="";
      var ritMin2="";
      var ritMin3="";
      var ritMin4="";
      var ritMin5="";
      var ritMin6="";
      var ritMin7="";
      var ritMin8="";
      var ritMin9="";
      var ritMin10="";
      var ritMin11="";
      var ritMin12="";

      var ritHour1="";
      var ritHour2="";
      var ritHour3="";
      var ritHour4="";
      var ritHour5="";
      var ritHour6="";
      var ritHour7="";
      var ritHour8="";
      var ritHour9="";
      var ritHour10="";
      var ritHour11="";
      var ritHour12="";


      var note1=document.getElementById('notas1').value;
      var note2=document.getElementById('notas2').value;
      var note3=document.getElementById('notas3').value;
      var note4=document.getElementById('notas4').value;
      var note5=document.getElementById('notas5').value;
      var note6=document.getElementById('notas6').value;
      var note7=document.getElementById('notas7').value;
      var note8=document.getElementById('notas8').value;
      var note9=document.getElementById('notas9').value;
      var note10=document.getElementById('notas10').value;
      var note11=document.getElementById('notas11').value;
      var note12=document.getElementById('notas12').value;

      var usu1=document.getElementById('usuario1').value;
      var usu2=document.getElementById('usuario2').value;
      var usu3=document.getElementById('usuario3').value;
      var usu4=document.getElementById('usuario4').value;
      var usu5=document.getElementById('usuario5').value;
      var usu6=document.getElementById('usuario6').value;
      var usu7=document.getElementById('usuario7').value;
      var usu8=document.getElementById('usuario8').value;
      var usu9=document.getElementById('usuario9').value;
      var usu10=document.getElementById('usuario10').value;
      var usu11=document.getElementById('usuario11').value;
      var usu12=document.getElementById('usuario12').value;

      var ref1=document.getElementById('reference1').value;
      var ref2=document.getElementById('reference2').value;
      var ref3=document.getElementById('reference3').value;
      var ref4=document.getElementById('reference4').value;
      var ref5=document.getElementById('reference5').value;
      var ref6=document.getElementById('reference6').value;
      var ref7=document.getElementById('reference7').value;
      var ref8=document.getElementById('reference8').value;
      var ref9=document.getElementById('reference9').value;
      var ref10=document.getElementById('reference10').value;
      var ref11=document.getElementById('reference11').value;
      var ref12=document.getElementById('reference12').value;

      var op1=document.getElementById('operaciones1').value;
      var op2=document.getElementById('operaciones2').value;
      var op3=document.getElementById('operaciones3').value;
      var op4=document.getElementById('operaciones4').value;
      var op5=document.getElementById('operaciones5').value;
      var op6=document.getElementById('operaciones6').value;
      var op7=document.getElementById('operaciones7').value;
      var op8=document.getElementById('operaciones8').value;
      var op9=document.getElementById('operaciones9').value;
      var op10=document.getElementById('operaciones10').value;
      var op11=document.getElementById('operaciones11').value;
      var op12=document.getElementById('operaciones12').value;

      var uds1=document.getElementById('uds1').value;
      var uds2=document.getElementById('uds2').value;
      var uds3=document.getElementById('uds3').value;
      var uds4=document.getElementById('uds4').value;
      var uds5=document.getElementById('uds5').value;
      var uds6=document.getElementById('uds6').value;
      var uds7=document.getElementById('uds7').value;
      var uds8=document.getElementById('uds8').value;
      var uds9=document.getElementById('uds9').value;
      var uds10=document.getElementById('uds10').value;
      var uds11=document.getElementById('uds11').value;
      var uds12=document.getElementById('uds12').value;

      var tiem1=document.getElementById('time1').value;
      var tiem2=document.getElementById('time2').value;
      var tiem3=document.getElementById('time3').value;
      var tiem4=document.getElementById('time4').value;
      var tiem5=document.getElementById('time5').value;
      var tiem6=document.getElementById('time6').value;
      var tiem7=document.getElementById('time7').value;
      var tiem8=document.getElementById('time8').value;
      var tiem9=document.getElementById('time9').value;
      var tiem10=document.getElementById('time10').value;
      var tiem11=document.getElementById('time11').value;
      var tiem12=document.getElementById('time12').value;

      var ritMin1=document.getElementById('ritmo1').value;
      var ritMin2=document.getElementById('ritmo2').value;
      var ritMin3=document.getElementById('ritmo3').value;
      var ritMin4=document.getElementById('ritmo4').value;
      var ritMin5=document.getElementById('ritmo5').value;
      var ritMin6=document.getElementById('ritmo6').value;
      var ritMin7=document.getElementById('ritmo7').value;
      var ritMin8=document.getElementById('ritmo8').value;
      var ritMin9=document.getElementById('ritmo9').value;
      var ritMin10=document.getElementById('ritmo10').value;
      var ritMin11=document.getElementById('ritmo11').value;
      var ritMin12=document.getElementById('ritmo12').value;

      var ritHour1=document.getElementById('ritmoHora1').value;
      var ritHour2=document.getElementById('ritmoHora2').value;
      var ritHour3=document.getElementById('ritmoHora3').value;
      var ritHour4=document.getElementById('ritmoHora4').value;
      var ritHour5=document.getElementById('ritmoHora5').value;
      var ritHour6=document.getElementById('ritmoHora6').value;
      var ritHour7=document.getElementById('ritmoHora7').value;
      var ritHour8=document.getElementById('ritmoHora8').value;
      var ritHour9=document.getElementById('ritmoHora9').value;
      var ritHour10=document.getElementById('ritmoHora10').value;
      var ritHour11=document.getElementById('ritmoHora11').value;
      var ritHour12=document.getElementById('ritmoHora12').value;



            // Set the "capital" field of the city 'DC'
            return washingtonRef.update({
                Fecha:fecha,
                Nota1: note1,
                Usuario1: usu1,
                Referencia1:ref1,
                Operaciones1:op1,
                Unidades1:uds1,
                Tiempo1:tiem1,
                Minutos1:ritMin1,
                Hora1:ritHour1,

                Nota2: note2,
                Usuario2: usu2,
                Referencia2:ref2,
                Operaciones2:op2,
                Unidades2:uds2,
                Tiempo2:tiem2,
                Minutos2:ritMin2,
                Hora2:ritHour2,

                Nota3: note3,
                Usuario3: usu3,
                Referencia3:ref3,
                Operaciones3:op3,
                Unidades3:uds3,
                Tiempo3:tiem3,
                Minutos3:ritMin3,
                Hora3:ritHour3,

                Nota4: note4,
                Usuario4: usu4,
                Referencia4:ref4,
                Operaciones4:op4,
                Unidades4:uds4,
                Tiempo4:tiem4,
                Minutos4:ritMin4,
                Hora4:ritHour4,

                Nota5: note5,
                Usuario5: usu5,
                Referencia5:ref5,
                Operaciones5:op5,
                Unidades5:uds5,
                Tiempo5:tiem5,
                Minutos5:ritMin5,
                Hora5:ritHour5,

                Nota6: note6,
                Usuario6: usu6,
                Referencia6:ref6,
                Operaciones6:op6,
                Unidades6:uds6,
                Tiempo6:tiem6,
                Minutos6:ritMin6,
                Hora6:ritHour6,

                Nota7: note7,
                Usuario7: usu7,
                Referencia7:ref7,
                Operaciones7:op7,
                Unidades7:uds7,
                Tiempo7:tiem7,
                Minutos7:ritMin7,
                Hora7:ritHour7,

                Nota8: note8,
                Usuario8: usu8,
                Referencia8:ref8,
                Operaciones8:op8,
                Unidades8:uds8,
                Tiempo8:tiem8,
                Minutos8:ritMin8,
                Hora8:ritHour8,

                Nota9: note9,
                Usuario9: usu9,
                Referencia9:ref9,
                Operaciones9:op9,
                Unidades9:uds9,
                Tiempo9:tiem9,
                Minutos9:ritMin9,
                Hora9:ritHour9,

                Nota10: note10,
                Usuario10: usu10,
                Referencia10:ref10,
                Operaciones10:op10,
                Unidades10:uds10,
                Tiempo10:tiem10,
                Minutos10:ritMin10,
                Hora10:ritHour10,

                Nota11: note11,
                Usuario11: usu11,
                Referencia11:ref11,
                Operaciones11:op11,
                Unidades11:uds11,
                Tiempo11:tiem11,
                Minutos11:ritMin11,
                Hora11:ritHour11,

                Nota12: note12,
                Usuario12: usu12,
                Referencia12:ref12,
                Operaciones12:op12,
                Unidades12:uds12,
                Tiempo12:tiem12,
                Minutos12:ritMin12,
                Hora12:ritHour12,
            })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  }

  function consultar(){

    var fecha=document.getElementById('fechaConsultar').value;

    db.collection("Informes").where("Fecha", "==", fecha)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            Swal.fire(
                'Consulta Exitosa!!!',
                'La consulta efectuada ha sido completada...',
                'success'
              )

            nota1 = `${doc.data().Nota1}`;
            usu1 = `${doc.data().Usuario1}`;
            ref1 = `${doc.data().Referencia1}`;
            op1 = `${doc.data().Operaciones1}`;
            uds1 = `${doc.data().Unidades1}`;
            tiem1 = `${doc.data().Tiempo1}`;
            ritMin1 = `${doc.data().Minutos1}`;
            ritHour1 = `${doc.data().Hora1}`;

            nota2 = `${doc.data().Nota2}`;
            usu2 = `${doc.data().Usuario2}`;
            ref2 = `${doc.data().Referencia2}`;
            op2 = `${doc.data().Operaciones2}`;
            uds2 = `${doc.data().Unidades2}`;
            tiem2 = `${doc.data().Tiempo2}`;
            ritMin2 = `${doc.data().Minutos2}`;
            ritHour2 = `${doc.data().Hora2}`;

            nota3 = `${doc.data().Nota3}`;
            usu3 = `${doc.data().Usuario3}`;
            ref3 = `${doc.data().Referencia3}`;
            op3 = `${doc.data().Operaciones3}`;
            uds3 = `${doc.data().Unidades3}`;
            tiem3 = `${doc.data().Tiempo3}`;
            ritMin3 = `${doc.data().Minutos3}`;
            ritHour3 = `${doc.data().Hora3}`;

            nota4 = `${doc.data().Nota4}`;
            usu4 = `${doc.data().Usuario4}`;
            ref4 = `${doc.data().Referencia4}`;
            op4 = `${doc.data().Operaciones4}`;
            uds4 = `${doc.data().Unidades4}`;
            tiem4 = `${doc.data().Tiempo4}`;
            ritMin4 = `${doc.data().Minutos4}`;
            ritHour4 = `${doc.data().Hora4}`;

            nota5 = `${doc.data().Nota5}`;
            usu5 = `${doc.data().Usuario5}`;
            ref5 = `${doc.data().Referencia5}`;
            op5 = `${doc.data().Operaciones5}`;
            uds5 = `${doc.data().Unidades5}`;
            tiem5 = `${doc.data().Tiempo5}`;
            ritMin5 = `${doc.data().Minutos5}`;
            ritHour5 = `${doc.data().Hora5}`;

            nota6 = `${doc.data().Nota6}`;
            usu6 = `${doc.data().Usuario6}`;
            ref6 = `${doc.data().Referencia6}`;
            op6 = `${doc.data().Operaciones6}`;
            uds6 = `${doc.data().Unidades6}`;
            tiem6 = `${doc.data().Tiempo6}`;
            ritMin6 = `${doc.data().Minutos6}`;
            ritHour6 = `${doc.data().Hora6}`;

            nota7 = `${doc.data().Nota7}`;
            usu7 = `${doc.data().Usuario7}`;
            ref7 = `${doc.data().Referencia7}`;
            op7 = `${doc.data().Operaciones7}`;
            uds7 = `${doc.data().Unidades7}`;
            tiem7 = `${doc.data().Tiempo7}`;
            ritMin7 = `${doc.data().Minutos7}`;
            ritHour7 = `${doc.data().Hora7}`;

            nota8 = `${doc.data().Nota8}`;
            usu8 = `${doc.data().Usuario8}`;
            ref8 = `${doc.data().Referencia8}`;
            op8 = `${doc.data().Operaciones8}`;
            uds8 = `${doc.data().Unidades8}`;
            tiem8 = `${doc.data().Tiempo8}`;
            ritMin8 = `${doc.data().Minutos8}`;
            ritHour8 = `${doc.data().Hora8}`;

            nota9 = `${doc.data().Nota9}`;
            usu9 = `${doc.data().Usuario9}`;
            ref9 = `${doc.data().Referencia9}`;
            op9 = `${doc.data().Operaciones9}`;
            uds9 = `${doc.data().Unidades9}`;
            tiem9 = `${doc.data().Tiempo9}`;
            ritMin9 = `${doc.data().Minutos9}`;
            ritHour9 = `${doc.data().Hora9}`;
          //  console.log(nota9+usu9+ref9+op9+uds9+tiem9+ritMin9+ritHour9);

            nota10 = `${doc.data().Nota10}`;
            usu10 = `${doc.data().Usuario10}`;
            ref10 = `${doc.data().Referencia10}`;
            op10 = `${doc.data().Operaciones10}`;
            uds10 = `${doc.data().Unidades10}`;
            tiem10 = `${doc.data().Tiempo10}`;
            ritMin10 = `${doc.data().Minutos10}`;
            ritHour10 = `${doc.data().Hora10}`;

            nota11 = `${doc.data().Nota11}`;
            usu11 = `${doc.data().Usuario11}`;
            ref11 = `${doc.data().Referencia11}`;
            op11 = `${doc.data().Operaciones11}`;
            uds11 = `${doc.data().Unidades11}`;
            tiem11 = `${doc.data().Tiempo11}`;
            ritMin11 = `${doc.data().Minutos11}`;
            ritHour11 = `${doc.data().Hora11}`;

            nota12 = `${doc.data().Nota12}`;
            usu12 = `${doc.data().Usuario12}`;
            ref12 = `${doc.data().Referencia12}`;
            op12 = `${doc.data().Operaciones12}`;
            uds12 = `${doc.data().Unidades12}`;
            tiem12 = `${doc.data().Tiempo12}`;
            ritMin12 = `${doc.data().Minutos12}`;
            ritHour12 = `${doc.data().Hora12}`;

            nota13 = `${doc.data().Nota13}`;
            usu13 = `${doc.data().Usuario13}`;
            ref13 = `${doc.data().Referencia13}`;
            op13 = `${doc.data().Operaciones13}`;
            uds13 = `${doc.data().Unidades13}`;
            tiem13 = `${doc.data().Tiempo13}`;
            ritMin13 = `${doc.data().Minutos13}`;
            ritHour13 = `${doc.data().Hora13}`;

            nota14 = `${doc.data().Nota14}`;
            usu14 = `${doc.data().Usuario14}`;
            ref14 = `${doc.data().Referencia14}`;
            op14 = `${doc.data().Operaciones14}`;
            uds14 = `${doc.data().Unidades14}`;
            tiem14 = `${doc.data().Tiempo14}`;
            ritMin14 = `${doc.data().Minutos14}`;
            ritHour14 = `${doc.data().Hora14}`;

            nota15 = `${doc.data().Nota15}`;
            usu15 = `${doc.data().Usuario15}`;
            ref15 = `${doc.data().Referencia15}`;
            op15 = `${doc.data().Operaciones15}`;
            uds15 = `${doc.data().Unidades15}`;
            tiem15 = `${doc.data().Tiempo15}`;
            ritMin15 = `${doc.data().Minutos15}`;
            ritHour15 = `${doc.data().Hora15}`;

            nota16 = `${doc.data().Nota16}`;
            usu16 = `${doc.data().Usuario16}`;
            ref16 = `${doc.data().Referencia16}`;
            op16 = `${doc.data().Operaciones16}`;
            uds16 = `${doc.data().Unidades16}`;
            tiem16 = `${doc.data().Tiempo16}`;
            ritMin16 = `${doc.data().Minutos16}`;
            ritHour16 = `${doc.data().Hora16}`;

            nota17 = `${doc.data().Nota17}`;
            usu17 = `${doc.data().Usuario17}`;
            ref17 = `${doc.data().Referencia17}`;
            op17 = `${doc.data().Operaciones17}`;
            uds17 = `${doc.data().Unidades17}`;
            tiem17 = `${doc.data().Tiempo17}`;
            ritMin17 = `${doc.data().Minutos17}`;
            ritHour17 = `${doc.data().Hora17}`;

            nota18 = `${doc.data().Nota18}`;
            usu18 = `${doc.data().Usuario18}`;
            ref18 = `${doc.data().Referencia18}`;
            op18 = `${doc.data().Operaciones18}`;
            uds18 = `${doc.data().Unidades18}`;
            tiem18 = `${doc.data().Tiempo18}`;
            ritMin18 = `${doc.data().Minutos18}`;
            ritHour18 = `${doc.data().Hora18}`;

            nota19 = `${doc.data().Nota19}`;
            usu19 = `${doc.data().Usuario19}`;
            ref19 = `${doc.data().Referencia19}`;
            op19 = `${doc.data().Operaciones19}`;
            uds19 = `${doc.data().Unidades19}`;
            tiem19 = `${doc.data().Tiempo19}`;
            ritMin19 = `${doc.data().Minutos19}`;
            ritHour19 = `${doc.data().Hora19}`;

            nota20 = `${doc.data().Nota20}`;
            usu20 = `${doc.data().Usuario20}`;
            ref20 = `${doc.data().Referencia20}`;
            op20 = `${doc.data().Operaciones20}`;
            uds20 = `${doc.data().Unidades20}`;
            tiem20 = `${doc.data().Tiempo20}`;
            ritMin20 = `${doc.data().Minutos20}`;
            ritHour20 = `${doc.data().Hora20}`;




            document.getElementById('notas1').value=nota1;
            document.getElementById('usuario1').value=usu1;
            document.getElementById('reference1').value=ref1;
            document.getElementById('operaciones1').value=op1;
            document.getElementById('uds1').value=uds1;
            document.getElementById('time1').value=tiem1;
            document.getElementById('ritmo1').value=ritMin1;
            document.getElementById('ritmoHora1').value=ritHour1;

            document.getElementById('notas2').value=nota2;
            document.getElementById('usuario2').value=usu2;
            document.getElementById('reference2').value=ref2;
            document.getElementById('operaciones2').value=op2;
            document.getElementById('uds2').value=uds2;
            document.getElementById('time2').value=tiem2;
            document.getElementById('ritmo2').value=ritMin2;
            document.getElementById('ritmoHora2').value=ritHour2;

            document.getElementById('notas3').value=nota3;
            document.getElementById('usuario3').value=usu3;
            document.getElementById('reference3').value=ref3;
            document.getElementById('operaciones3').value=op3;
            document.getElementById('uds3').value=uds3;
            document.getElementById('time3').value=tiem3;
            document.getElementById('ritmo3').value=ritMin3;
            document.getElementById('ritmoHora3').value=ritHour3;

            document.getElementById('notas4').value=nota4;
            document.getElementById('usuario4').value=usu4;
            document.getElementById('reference4').value=ref4;
            document.getElementById('operaciones4').value=op4;
            document.getElementById('uds4').value=uds4;
            document.getElementById('time4').value=tiem4;
            document.getElementById('ritmo4').value=ritMin4;
            document.getElementById('ritmoHora4').value=ritHour4;

            document.getElementById('notas5').value=nota5;
            document.getElementById('usuario5').value=usu5;
            document.getElementById('reference5').value=ref5;
            document.getElementById('operaciones5').value=op5;
            document.getElementById('uds5').value=uds5;
            document.getElementById('time5').value=tiem5;
            document.getElementById('ritmo5').value=ritMin5;
            document.getElementById('ritmoHora5').value=ritHour5;

            document.getElementById('notas6').value=nota6;
            document.getElementById('usuario6').value=usu6;
            document.getElementById('reference6').value=ref6;
            document.getElementById('operaciones6').value=op6;
            document.getElementById('uds6').value=uds6;
            document.getElementById('time6').value=tiem6;
            document.getElementById('ritmo6').value=ritMin6;
            document.getElementById('ritmoHora6').value=ritHour6;

            document.getElementById('notas7').value=nota7;
            document.getElementById('usuario7').value=usu7;
            document.getElementById('reference7').value=ref7;
            document.getElementById('operaciones7').value=op7;
            document.getElementById('uds7').value=uds7;
            document.getElementById('time7').value=tiem7;
            document.getElementById('ritmo7').value=ritMin7;
            document.getElementById('ritmoHora7').value=ritHour7;

            document.getElementById('notas8').value=nota8;
            document.getElementById('usuario8').value=usu8;
            document.getElementById('reference8').value=ref8;
            document.getElementById('operaciones8').value=op8;
            document.getElementById('uds8').value=uds8;
            document.getElementById('time8').value=tiem8;
            document.getElementById('ritmo8').value=ritMin8;
            document.getElementById('ritmoHora8').value=ritHour8;

            document.getElementById('notas9').value=nota9;
            document.getElementById('usuario9').value=usu9;
            document.getElementById('reference9').value=ref9;
            document.getElementById('operaciones9').value=op9;
            document.getElementById('uds9').value=uds9;
            document.getElementById('time9').value=tiem9;
            document.getElementById('ritmo9').value=ritMin9;
            document.getElementById('ritmoHora9').value=ritHour9;

            document.getElementById('notas10').value=nota10;
            document.getElementById('usuario10').value=usu10;
            document.getElementById('reference10').value=ref10;
            document.getElementById('operaciones10').value=op10;
            document.getElementById('uds10').value=uds10;
            document.getElementById('time10').value=tiem10;
            document.getElementById('ritmo10').value=ritMin10;
            document.getElementById('ritmoHora10').value=ritHour10;

            document.getElementById('notas11').value=nota11;
            document.getElementById('usuario11').value=usu11;
            document.getElementById('reference11').value=ref11;
            document.getElementById('operaciones11').value=op11;
            document.getElementById('uds11').value=uds11;
            document.getElementById('time11').value=tiem11;
            document.getElementById('ritmo11').value=ritMin11;
            document.getElementById('ritmoHora11').value=ritHour11;

            document.getElementById('notas12').value=nota12;
            document.getElementById('usuario12').value=usu12;
            document.getElementById('reference12').value=ref12;
            document.getElementById('operaciones12').value=op12;
            document.getElementById('uds12').value=uds12;
            document.getElementById('time12').value=tiem12;
            document.getElementById('ritmo12').value=ritMin12;
            document.getElementById('ritmoHora12').value=ritHour12;

            document.getElementById('notas13').value=nota13;
            document.getElementById('usuario13').value=usu13;
            document.getElementById('reference13').value=ref13;
            document.getElementById('operaciones13').value=op13;
            document.getElementById('uds13').value=uds13;
            document.getElementById('time13').value=tiem13;
            document.getElementById('ritmo13').value=ritMin13;
            document.getElementById('ritmoHora13').value=ritHour13;

            document.getElementById('notas14').value=nota14;
            document.getElementById('usuario14').value=usu14;
            document.getElementById('reference14').value=ref14;
            document.getElementById('operaciones14').value=op14;
            document.getElementById('uds14').value=uds14;
            document.getElementById('time14').value=tiem14;
            document.getElementById('ritmo14').value=ritMin14;
            document.getElementById('ritmoHora14').value=ritHour14;

            document.getElementById('notas15').value=nota15;
            document.getElementById('usuario15').value=usu15;
            document.getElementById('reference15').value=ref15;
            document.getElementById('operaciones15').value=op15;
            document.getElementById('uds15').value=uds15;
            document.getElementById('time15').value=tiem15;
            document.getElementById('ritmo15').value=ritMin15;
            document.getElementById('ritmoHora15').value=ritHour15;

            document.getElementById('notas16').value=nota16;
            document.getElementById('usuario16').value=usu16;
            document.getElementById('reference16').value=ref16;
            document.getElementById('operaciones16').value=op16;
            document.getElementById('uds16').value=uds16;
            document.getElementById('time16').value=tiem16;
            document.getElementById('ritmo16').value=ritMin16;
            document.getElementById('ritmoHora16').value=ritHour16;

            document.getElementById('notas17').value=nota17;
            document.getElementById('usuario17').value=usu17;
            document.getElementById('reference17').value=ref17;
            document.getElementById('operaciones17').value=op17;
            document.getElementById('uds17').value=uds17;
            document.getElementById('time17').value=tiem17;
            document.getElementById('ritmo17').value=ritMin17;
            document.getElementById('ritmoHora17').value=ritHour17;

            document.getElementById('notas18').value=nota18;
            document.getElementById('usuario18').value=usu18;
            document.getElementById('reference18').value=ref18;
            document.getElementById('operaciones18').value=op18;
            document.getElementById('uds18').value=uds18;
            document.getElementById('time18').value=tiem18;
            document.getElementById('ritmo18').value=ritMin18;
            document.getElementById('ritmoHora18').value=ritHour18;

            document.getElementById('notas19').value=nota19;
            document.getElementById('usuario19').value=usu19;
            document.getElementById('reference19').value=ref19;
            document.getElementById('operaciones19').value=op19;
            document.getElementById('uds19').value=uds19;
            document.getElementById('time19').value=tiem19;
            document.getElementById('ritmo19').value=ritMin19;
            document.getElementById('ritmoHora19').value=ritHour19;

            document.getElementById('notas20').value=nota20;
            document.getElementById('usuario20').value=usu20;
            document.getElementById('reference20').value=ref20;
            document.getElementById('operaciones20').value=op20;
            document.getElementById('uds20').value=uds20;
            document.getElementById('time20').value=tiem20;
            document.getElementById('ritmo20').value=ritMin20;
            document.getElementById('ritmoHora20').value=ritHour20;



            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }

  function guardar(){
    
   if(confirm("Seguro que desea guardar  el registro?")){
      var fecha=document.getElementById('fechaConsultar').value;

      var note1="";
      var note2="";
      var note3="";
      var note4="";
      var note5="";
      var note6="";
      var note7="";
      var note8="";
      var note9="";
      var note10="";
      var note11="";
      var note12="";
      var note13="";
      var note14="";
      var note15="";
      var note16="";
      var note17="";
      var note18="";
      var note19="";
      var note20="";


      var usu1="";
      var usu2="";
      var usu3="";
      var usu4="";
      var usu5="";
      var usu6="";
      var usu7="";
      var usu8="";
      var usu9="";
      var usu10="";
      var usu11="";
      var usu12="";
      var usu13="";
      var usu14="";
      var usu15="";
      var usu16="";
      var usu17="";
      var usu18="";
      var usu19="";
      var usu20="";

      var ref1="";
      var ref2="";
      var ref3="";
      var ref4="";
      var ref5="";
      var ref6="";
      var ref7="";
      var ref8="";
      var ref9="";
      var ref10="";
      var ref11="";
      var ref12="";
      var ref13="";
      var ref14="";
      var ref15="";
      var ref16="";
      var ref17="";
      var ref18="";
      var ref19="";
      var ref20="";

      var op1="";
      var op2="";
      var op3="";
      var op4="";
      var op5="";
      var op6="";
      var op7="";
      var op8="";
      var op9="";
      var op10="";
      var op11="";
      var op12="";
      var op13="";
      var op14="";
      var op15="";
      var op16="";
      var op17="";
      var op18="";
      var op19="";
      var op20="";

      var uds1="";
      var uds2="";
      var uds3="";
      var uds4="";
      var uds5="";
      var uds6="";
      var uds7="";
      var uds8="";
      var uds9="";
      var uds10="";
      var uds11="";
      var uds12="";
      var uds13="";
      var uds14="";
      var uds15="";
      var uds16="";
      var uds17="";
      var uds18="";
      var uds19="";
      var uds20="";

      var tiem1="";
      var tiem2="";
      var tiem3="";
      var tiem4="";
      var tiem5="";
      var tiem6="";
      var tiem7="";
      var tiem8="";
      var tiem9="";
      var tiem10="";
      var tiem11="";
      var tiem12="";
      var tiem13="";
      var tiem14="";
      var tiem15="";
      var tiem16="";
      var tiem17="";
      var tiem18="";
      var tiem19="";
      var tiem20="";

      var ritMin1="";
      var ritMin2="";
      var ritMin3="";
      var ritMin4="";
      var ritMin5="";
      var ritMin6="";
      var ritMin7="";
      var ritMin8="";
      var ritMin9="";
      var ritMin10="";
      var ritMin11="";
      var ritMin12="";
      var ritMin13="";
      var ritMin14="";
      var ritMin15="";
      var ritMin16="";
      var ritMin17="";
      var ritMin18="";
      var ritMin19="";
      var ritMin20="";

      var ritHour1="";
      var ritHour2="";
      var ritHour3="";
      var ritHour4="";
      var ritHour5="";
      var ritHour6="";
      var ritHour7="";
      var ritHour8="";
      var ritHour9="";
      var ritHour10="";
      var ritHour11="";
      var ritHour12="";
      var ritHour13="";
      var ritHour14="";
      var ritHour15="";
      var ritHour16="";
      var ritHour17="";
      var ritHour18="";
      var ritHour19="";
      var ritHour20="";


      var note1=document.getElementById('notas1').value;
      var note2=document.getElementById('notas2').value;
      var note3=document.getElementById('notas3').value;
      var note4=document.getElementById('notas4').value;
      var note5=document.getElementById('notas5').value;
      var note6=document.getElementById('notas6').value;
      var note7=document.getElementById('notas7').value;
      var note8=document.getElementById('notas8').value;
      var note9=document.getElementById('notas9').value;
      var note10=document.getElementById('notas10').value;
      var note11=document.getElementById('notas11').value;
      var note12=document.getElementById('notas12').value;
      var note13=document.getElementById('notas13').value;
      var note14=document.getElementById('notas14').value;
      var note15=document.getElementById('notas15').value;
      var note16=document.getElementById('notas16').value;
      var note17=document.getElementById('notas17').value;
      var note18=document.getElementById('notas18').value;
      var note19=document.getElementById('notas19').value;
      var note20=document.getElementById('notas20').value;


      var usu1=document.getElementById('usuario1').value;
      var usu2=document.getElementById('usuario2').value;
      var usu3=document.getElementById('usuario3').value;
      var usu4=document.getElementById('usuario4').value;
      var usu5=document.getElementById('usuario5').value;
      var usu6=document.getElementById('usuario6').value;
      var usu7=document.getElementById('usuario7').value;
      var usu8=document.getElementById('usuario8').value;
      var usu9=document.getElementById('usuario9').value;
      var usu10=document.getElementById('usuario10').value;
      var usu11=document.getElementById('usuario11').value;
      var usu12=document.getElementById('usuario12').value;
      var usu13=document.getElementById('usuario13').value;
      var usu14=document.getElementById('usuario14').value;
      var usu15=document.getElementById('usuario15').value;
      var usu16=document.getElementById('usuario16').value;
      var usu17=document.getElementById('usuario17').value;
      var usu18=document.getElementById('usuario18').value;
      var usu19=document.getElementById('usuario19').value;
      var usu20=document.getElementById('usuario20').value;


      var ref1=document.getElementById('reference1').value;
      var ref2=document.getElementById('reference2').value;
      var ref3=document.getElementById('reference3').value;
      var ref4=document.getElementById('reference4').value;
      var ref5=document.getElementById('reference5').value;
      var ref6=document.getElementById('reference6').value;
      var ref7=document.getElementById('reference7').value;
      var ref8=document.getElementById('reference8').value;
      var ref9=document.getElementById('reference9').value;
      var ref10=document.getElementById('reference10').value;
      var ref11=document.getElementById('reference11').value;
      var ref12=document.getElementById('reference12').value;
      var ref13=document.getElementById('reference13').value;
      var ref14=document.getElementById('reference14').value;
      var ref15=document.getElementById('reference15').value;
      var ref16=document.getElementById('reference16').value;
      var ref17=document.getElementById('reference17').value;
      var ref18=document.getElementById('reference18').value;
      var ref19=document.getElementById('reference19').value;
      var ref20=document.getElementById('reference20').value;

      var op1=document.getElementById('operaciones1').value;
      var op2=document.getElementById('operaciones2').value;
      var op3=document.getElementById('operaciones3').value;
      var op4=document.getElementById('operaciones4').value;
      var op5=document.getElementById('operaciones5').value;
      var op6=document.getElementById('operaciones6').value;
      var op7=document.getElementById('operaciones7').value;
      var op8=document.getElementById('operaciones8').value;
      var op9=document.getElementById('operaciones9').value;
      var op10=document.getElementById('operaciones10').value;
      var op11=document.getElementById('operaciones11').value;
      var op12=document.getElementById('operaciones12').value;
      var op13=document.getElementById('operaciones13').value;
      var op14=document.getElementById('operaciones14').value;
      var op15=document.getElementById('operaciones15').value;
      var op16=document.getElementById('operaciones16').value;
      var op17=document.getElementById('operaciones17').value;
      var op18=document.getElementById('operaciones18').value;
      var op19=document.getElementById('operaciones19').value;
      var op20=document.getElementById('operaciones20').value;


      var uds1=document.getElementById('uds1').value;
      var uds2=document.getElementById('uds2').value;
      var uds3=document.getElementById('uds3').value;
      var uds4=document.getElementById('uds4').value;
      var uds5=document.getElementById('uds5').value;
      var uds6=document.getElementById('uds6').value;
      var uds7=document.getElementById('uds7').value;
      var uds8=document.getElementById('uds8').value;
      var uds9=document.getElementById('uds9').value;
      var uds10=document.getElementById('uds10').value;
      var uds11=document.getElementById('uds11').value;
      var uds12=document.getElementById('uds12').value;
      var uds13=document.getElementById('uds13').value;
      var uds14=document.getElementById('uds14').value;
      var uds15=document.getElementById('uds15').value;
      var uds16=document.getElementById('uds16').value;
      var uds17=document.getElementById('uds17').value;
      var uds18=document.getElementById('uds18').value;
      var uds19=document.getElementById('uds19').value;
      var uds20=document.getElementById('uds20').value;


      var tiem1=document.getElementById('time1').value;
      var tiem2=document.getElementById('time2').value;
      var tiem3=document.getElementById('time3').value;
      var tiem4=document.getElementById('time4').value;
      var tiem5=document.getElementById('time5').value;
      var tiem6=document.getElementById('time6').value;
      var tiem7=document.getElementById('time7').value;
      var tiem8=document.getElementById('time8').value;
      var tiem9=document.getElementById('time9').value;
      var tiem10=document.getElementById('time10').value;
      var tiem11=document.getElementById('time11').value;
      var tiem12=document.getElementById('time12').value;
      var tiem13=document.getElementById('time13').value;
      var tiem14=document.getElementById('time14').value;
      var tiem15=document.getElementById('time15').value;
      var tiem16=document.getElementById('time16').value;
      var tiem17=document.getElementById('time17').value;
      var tiem18=document.getElementById('time18').value;
      var tiem19=document.getElementById('time19').value;
      var tiem20=document.getElementById('time20').value;

      var ritMin1=document.getElementById('ritmo1').value;
      var ritMin2=document.getElementById('ritmo2').value;
      var ritMin3=document.getElementById('ritmo3').value;
      var ritMin4=document.getElementById('ritmo4').value;
      var ritMin5=document.getElementById('ritmo5').value;
      var ritMin6=document.getElementById('ritmo6').value;
      var ritMin7=document.getElementById('ritmo7').value;
      var ritMin8=document.getElementById('ritmo8').value;
      var ritMin9=document.getElementById('ritmo9').value;
      var ritMin10=document.getElementById('ritmo10').value;
      var ritMin11=document.getElementById('ritmo11').value;
      var ritMin12=document.getElementById('ritmo12').value;
      var ritMin13=document.getElementById('ritmo13').value;
      var ritMin14=document.getElementById('ritmo14').value;
      var ritMin15=document.getElementById('ritmo15').value;
      var ritMin16=document.getElementById('ritmo16').value;
      var ritMin17=document.getElementById('ritmo17').value;
      var ritMin18=document.getElementById('ritmo18').value;
      var ritMin19=document.getElementById('ritmo19').value;
      var ritMin20=document.getElementById('ritmo20').value;


      var ritHour1=document.getElementById('ritmoHora1').value;
      var ritHour2=document.getElementById('ritmoHora2').value;
      var ritHour3=document.getElementById('ritmoHora3').value;
      var ritHour4=document.getElementById('ritmoHora4').value;
      var ritHour5=document.getElementById('ritmoHora5').value;
      var ritHour6=document.getElementById('ritmoHora6').value;
      var ritHour7=document.getElementById('ritmoHora7').value;
      var ritHour8=document.getElementById('ritmoHora8').value;
      var ritHour9=document.getElementById('ritmoHora9').value;
      var ritHour10=document.getElementById('ritmoHora10').value;
      var ritHour11=document.getElementById('ritmoHora11').value;
      var ritHour12=document.getElementById('ritmoHora12').value;
      var ritHour13=document.getElementById('ritmoHora13').value;
      var ritHour14=document.getElementById('ritmoHora14').value;
      var ritHour15=document.getElementById('ritmoHora15').value;
      var ritHour16=document.getElementById('ritmoHora16').value;
      var ritHour17=document.getElementById('ritmoHora17').value;
      var ritHour18=document.getElementById('ritmoHora18').value;
      var ritHour19=document.getElementById('ritmoHora19').value;
      var ritHour20=document.getElementById('ritmoHora20').value;

      // Add a new document with a generated id.
                db.collection("Informes").add({
                    Fecha:fecha,
                    Nota1: note1,
                    Usuario1: usu1,
                    Referencia1:ref1,
                    Operaciones1:op1,
                    Unidades1:uds1,
                    Tiempo1:tiem1,
                    Minutos1:ritMin1,
                    Hora1:ritHour1,

                    Nota2: note2,
                    Usuario2: usu2,
                    Referencia2:ref2,
                    Operaciones2:op2,
                    Unidades2:uds2,
                    Tiempo2:tiem2,
                    Minutos2:ritMin2,
                    Hora2:ritHour2,

                    Nota3: note3,
                    Usuario3: usu3,
                    Referencia3:ref3,
                    Operaciones3:op3,
                    Unidades3:uds3,
                    Tiempo3:tiem3,
                    Minutos3:ritMin3,
                    Hora3:ritHour3,

                    Nota4: note4,
                    Usuario4: usu4,
                    Referencia4:ref4,
                    Operaciones4:op4,
                    Unidades4:uds4,
                    Tiempo4:tiem4,
                    Minutos4:ritMin4,
                    Hora4:ritHour4,

                    Nota5: note5,
                    Usuario5: usu5,
                    Referencia5:ref5,
                    Operaciones5:op5,
                    Unidades5:uds5,
                    Tiempo5:tiem5,
                    Minutos5:ritMin5,
                    Hora5:ritHour5,

                    Nota6: note6,
                    Usuario6: usu6,
                    Referencia6:ref6,
                    Operaciones6:op6,
                    Unidades6:uds6,
                    Tiempo6:tiem6,
                    Minutos6:ritMin6,
                    Hora6:ritHour6,

                    Nota7: note7,
                    Usuario7: usu7,
                    Referencia7:ref7,
                    Operaciones7:op7,
                    Unidades7:uds7,
                    Tiempo7:tiem7,
                    Minutos7:ritMin7,
                    Hora7:ritHour7,

                    Nota8: note8,
                    Usuario8: usu8,
                    Referencia8:ref8,
                    Operaciones8:op8,
                    Unidades8:uds8,
                    Tiempo8:tiem8,
                    Minutos8:ritMin8,
                    Hora8:ritHour8,

                    Nota9: note9,
                    Usuario9: usu9,
                    Referencia9:ref9,
                    Operaciones9:op9,
                    Unidades9:uds9,
                    Tiempo9:tiem9,
                    Minutos9:ritMin9,
                    Hora9:ritHour9,

                    Nota10: note10,
                    Usuario10: usu10,
                    Referencia10:ref10,
                    Operaciones10:op10,
                    Unidades10:uds10,
                    Tiempo10:tiem10,
                    Minutos10:ritMin10,
                    Hora10:ritHour10,

                    Nota11: note11,
                    Usuario11: usu11,
                    Referencia11:ref11,
                    Operaciones11:op11,
                    Unidades11:uds11,
                    Tiempo11:tiem11,
                    Minutos11:ritMin11,
                    Hora11:ritHour11,

                    Nota12: note12,
                    Usuario12: usu12,
                    Referencia12:ref12,
                    Operaciones12:op12,
                    Unidades12:uds12,
                    Tiempo12:tiem12,
                    Minutos12:ritMin12,
                    Hora12:ritHour12,

                    Nota13: note13,
                    Usuario13: usu13,
                    Referencia13:ref13,
                    Operaciones13:op13,
                    Unidades13:uds13,
                    Tiempo13:tiem13,
                    Minutos13:ritMin13,
                    Hora13:ritHour13,

                    Nota14: note14,
                    Usuario14: usu14,
                    Referencia14:ref14,
                    Operaciones14:op14,
                    Unidades14:uds14,
                    Tiempo14:tiem14,
                    Minutos14:ritMin14,
                    Hora14:ritHour14,

                    Nota15: note15,
                    Usuario15: usu15,
                    Referencia15:ref15,
                    Operaciones15:op15,
                    Unidades15:uds15,
                    Tiempo15:tiem15,
                    Minutos15:ritMin15,
                    Hora15:ritHour15,

                    Nota16: note16,
                    Usuario16: usu16,
                    Referencia16:ref16,
                    Operaciones16:op16,
                    Unidades16:uds16,
                    Tiempo16:tiem16,
                    Minutos16:ritMin16,
                    Hora16:ritHour16,

                    Nota18: note18,
                    Usuario18: usu18,
                    Referencia18:ref18,
                    Operaciones18:op18,
                    Unidades18:uds18,
                    Tiempo18:tiem18,
                    Minutos18:ritMin18,
                    Hora18:ritHour18,

                    Nota19: note19,
                    Usuario19: usu19,
                    Referencia19:ref19,
                    Operaciones19:op19,
                    Unidades19:uds19,
                    Tiempo19:tiem19,
                    Minutos19:ritMin19,
                    Hora19:ritHour19,

                    Nota20: note20,
                    Usuario20: usu20,
                    Referencia20:ref20,
                    Operaciones20:op20,
                    Unidades20:uds20,
                    Tiempo20:tiem20,
                    Minutos20:ritMin20,
                    Hora20:ritHour20,
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    Swal.fire(
                        'Informe Guardado!!!',
                        'ha guardado el informe de forma exitosa...',
                        'success'
                      )

                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });

    }else{
      Swal.fire(
        'Oops...',
        'Registro Cancelado',
        'error'
      )

    }

    

  }

  function calcular(){

    var uds=document.getElementById('uds1').value;
    var tiempo=document.getElementById('time1').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo1').value=ritmo;
    document.getElementById('ritmoHora1').value=(ritmo*60).toFixed(2);




  }

  function calcular2(){

    var uds=document.getElementById('uds2').value;
    var tiempo=document.getElementById('time2').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo2').value=ritmo;
    document.getElementById('ritmoHora2').value=(ritmo*60).toFixed(2);




  }
  function calcular3(){

    var uds=document.getElementById('uds3').value;
    var tiempo=document.getElementById('time3').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo3').value=ritmo;
    document.getElementById('ritmoHora3').value=(ritmo*60).toFixed(2);




  }
  function calcular4(){

    var uds=document.getElementById('uds4').value;
    var tiempo=document.getElementById('time4').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo4').value=ritmo;
    document.getElementById('ritmoHora4').value=(ritmo*60).toFixed(2);




  }
  function calcular5(){

    var uds=document.getElementById('uds5').value;
    var tiempo=document.getElementById('time5').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo5').value=ritmo;
    document.getElementById('ritmoHora5').value=(ritmo*60).toFixed(2);




  }
  function calcular6(){

    var uds=document.getElementById('uds6').value;
    var tiempo=document.getElementById('time6').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo6').value=ritmo;
    document.getElementById('ritmoHora6').value=(ritmo*60).toFixed(2);




  }
  function calcular7(){

    var uds=document.getElementById('uds7').value;
    var tiempo=document.getElementById('time7').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo7').value=ritmo;
    document.getElementById('ritmoHora7').value=(ritmo*60).toFixed(2);




  }
  function calcular8(){

    var uds=document.getElementById('uds8').value;
    var tiempo=document.getElementById('time8').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo8').value=ritmo;
    document.getElementById('ritmoHora8').value=(ritmo*60).toFixed(2);




  }
  function calcular9(){

    var uds=document.getElementById('uds9').value;
    var tiempo=document.getElementById('time9').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo9').value=ritmo;
    document.getElementById('ritmoHora9').value=(ritmo*60).toFixed(2);




  }
  function calcular10(){

    var uds=document.getElementById('uds10').value;
    var tiempo=document.getElementById('time10').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo10').value=ritmo;
    document.getElementById('ritmoHora10').value=(ritmo*60).toFixed(2);




  }
  function calcular11(){

    var uds=document.getElementById('uds11').value;
    var tiempo=document.getElementById('time11').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo11').value=ritmo;
    document.getElementById('ritmoHora11').value=(ritmo*60).toFixed(2);




  }
  function calcular12(){

    var uds=document.getElementById('uds12').value;
    var tiempo=document.getElementById('time12').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo12').value=ritmo;
    document.getElementById('ritmoHora12').value=(ritmo*60).toFixed(2);




  }

  function calcular13(){

    var uds=document.getElementById('uds13').value;
    var tiempo=document.getElementById('time13').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo13').value=ritmo;
    document.getElementById('ritmoHora13').value=(ritmo*60).toFixed(2);




  }
  function calcular14(){

    var uds=document.getElementById('uds14').value;
    var tiempo=document.getElementById('time14').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo14').value=ritmo;
    document.getElementById('ritmoHora14').value=(ritmo*60).toFixed(2);




  }

  function calcular15(){

    var uds=document.getElementById('uds15').value;
    var tiempo=document.getElementById('time15').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo15').value=ritmo;
    document.getElementById('ritmoHora15').value=(ritmo*60).toFixed(2);




  }
  function calcular16(){

    var uds=document.getElementById('uds16').value;
    var tiempo=document.getElementById('time16').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo16').value=ritmo;
    document.getElementById('ritmoHora16').value=(ritmo*60).toFixed(2);




  }

  function calcular17(){

    var uds=document.getElementById('uds17').value;
    var tiempo=document.getElementById('time17').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo17').value=ritmo;
    document.getElementById('ritmoHora17').value=(ritmo*60).toFixed(2);




  }
  function calcular18(){

    var uds=document.getElementById('uds18').value;
    var tiempo=document.getElementById('time18').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo18').value=ritmo;
    document.getElementById('ritmoHora18').value=(ritmo*60).toFixed(2);




  }

  function calcular19(){

    var uds=document.getElementById('uds19').value;
    var tiempo=document.getElementById('time19').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo19').value=ritmo;
    document.getElementById('ritmoHora19').value=(ritmo*60).toFixed(2);




  }
  function calcular20(){

    var uds=document.getElementById('uds20').value;
    var tiempo=document.getElementById('time20').value;

    var ritmo=0;

    ritmo=(uds/tiempo).toFixed(2);
    document.getElementById('ritmo20').value=ritmo;
    document.getElementById('ritmoHora20').value=(ritmo*60).toFixed(2);




  }