
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


function consultarFechas() {
    //---------------inicio------------
    var consultaFecha = document.getElementById('fecha').value;


    var tabl23 = document.getElementById("tabla");

    dataSet = new Array();
    var i = 1;

    cantidadElabo = 0;
    buenas = 0;
    malas = 0;
    ano = "";

    db.collection("controladministradores").where("fecha", "==", consultaFecha)
        .get()
        .then((querySnapshot) => {
            tabl23.innerHTML = "";

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                var OperarioFec = `${doc.data().usuariooperario}`;
                //var numberOperarios = `${doc.data().NumeroOpera}`;
                // Maqui=`${doc.data().color}`;
                // horaFin=`${doc.data().usuariooperario}`;
                //tFinal = `${doc.data().culminacion}`;

                comi = `${doc.data().Comida}`;
                tin = `${doc.data().Tinto}`;
                tin2 = `${doc.data().Tinto2}`;
                var numeOp = `${doc.data().referencia}`;
                //ano = `${doc.data().Anotaciones}`;
                inicio = `${doc.data().TiempoIni}`;
                fianl = `${doc.data().culminacion}`;
                var Operacion = `${doc.data().operacionElaborada}`;
                var Operacion2 = `${doc.data().operacionElaborada2}`;
                var Operacion3 = `${doc.data().operacionElaborada3}`;
                var Operacion4 = `${doc.data().operacionElaborada4}`;
                var Operacion5 = `${doc.data().operacionElaborada5}`;
                var Operacion6 = `${doc.data().operacionElaborada6}`;
                var Operacion7 = `${doc.data().operacionElaborada7}`;
                var Operacion8 = `${doc.data().operacionElaborada8}`;
                var Operacion9 = `${doc.data().operacionElaborada9}`;
                var numeroOperarios = `${doc.data().NumeroOpera}`;
                console.log('el numero de operarios de' + OperarioFec + ' es' + numeroOperarios);
                var integrantes = `${doc.data().Comen}`;
                var nombreReferencia = `${doc.data().nombreRef}`;
                primer2 = `${doc.data().Primer}`;
                ultimo2 = `${doc.data().Ultimo}`;
                //color2 = `${doc.data().Color}`;
                //lota = `${doc.data().lote}`;
                //talle = `${doc.data().talla}`;
                var cantidadElabo = `${doc.data().cantidadElaborada}`;
                var tiemTrabajado = `${doc.data().tiempo}`;

                var fecha = `${doc.data().fecha}`;
                //----------------------------------------inicio ref-----------------------------------

                db.collection("FichaTecniGlobal").where("Referencia", "==", nombreReferencia)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
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
                            pausa = "";

                            if (comi != 0) {
                                pausa = "Pausa Comida";
                            }
                            if (tin != 0) {
                                pausa = "Pausa Activa 11am";
                            }
                            if (tin2 != 0) {
                                pausa = "Pausa Activa 2pm"
                            }
                            if (comi != 0 && tin != 0) {
                                pausa = "Pausa Comida y Activa 11am";
                            }

                            if (comi != 0 && tin2 != 0) {
                                pausa = "Pausa Comida y Activa 2pm"
                            }

                            if (comi != 0 && tin != 0 && tin2 != 0) {
                                pausa = "Pausa Comida, Activa 11am y 2pm"
                            }







                            //---------------------------calculo porcentaje-----------------------------
                            TiempoStdTotal = ((tiempEstan1 / cantidadElabo) + (tiempEstan2 / cantidadElabo) + (tiempEstan3 / cantidadElabo)
                                + (tiempEstan4 / cantidadElabo) + (tiempEstan5 / cantidadElabo) + tiempEstan6 + tiempEstan7 + tiempEstan8 + tiempEstan9);
                            console.log("el tiempo total STD es de:  " + TiempoStdTotal);
                            unidadSTD = parseInt(Unidad1 + Unidad2 + Unidad3 + Unidad4 + Unidad5);
                            console.log("Las undiades Std son :" + unidadSTD);

                            rela = TiempoStdTotal * cantidadElabo;

                            //Rendi=(TiempoStdTotal*100)/(tiemTrabajado-comi-tin);
                            TiempoTrabajaSin = tiemTrabajado - comi - tin - tin2;
                            Rendi = ((rela * 100) / (TiempoTrabajaSin)) / numeroOperarios;





                            //---------------fin ref--------------


                            dataSet.push([fecha, numeOp, nombreReferencia, OperarioFec, integrantes, Operacion + '  ' + Operacion2 + '  ' + Operacion3 + '  ' + Operacion4 + '  ' + Operacion5 + '  ' + Operacion6 + '  ' + Operacion7 + '  ' + Operacion8 + '  ' + Operacion9, TiempoStdTotal, cantidadElabo, TiempoTrabajaSin, Math.round(Rendi)]);

                            i = i + 1;


                            $(document).ready(function () {
                                var tablaSuma = $('#example').DataTable({


                                    dom: "Bfrtip",
                                    pageLength: 1000,
                                    resposive: true,

                                    buttons: [
                                        { 
                                            extend: "excelHtml5",
                                            text:'<i class="fas fa-file-excel  btn btn-success" ></i>',
                                            tittleAttr:'Exportar a Excel',
                                            className:'btn btn-success'

                                    },
                                    ],
                                    //"serverSide": true,
                                    data: dataSet,
                                    "bDestroy": true,

                                    columns: [
                                        { title: "Fecha" },
                                        { title: "OP" },
                                        { title: "Referencia" },
                                        { title: "Modulo" },
                                        { title: "Operarios" },
                                        { title: "Operaciones" },
                                        { title: "STD" },

                                        { title: "Cantidad" },
                                        { title: "Tiempo Trabajado" },
                                        { title: "Rendimiento" },


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

                            //-----------------ref------------
                        });
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    });

                //-----------------------------------


            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    //--------------fin-------------------
}


toalTiempo = function () {

    var tabl4 = document.getElementById("example"), sumVal4 = 0;

    for (var i = 1; i < tabl4.rows.length; i++) {

        if (isNaN(sumVal4)) {
            sumVal4 = 0;
        }

        sumVal4 = sumVal4 + parseFloat(tabl4.rows[i].cells[8].innerHTML);
    }

    //console.log("SUMAAAAAAAAAAAAAAAAAAAAAAAA TIEEEEEEEEEEEEEEM" + "......" + sumVal4);
    document.getElementById("timez").value = sumVal4.toFixed(2);


}

toalCanti = function () {

    var tabl4 = document.getElementById("example"), sumVal4 = 0;

    for (var i = 1; i < tabl4.rows.length; i++) {

        if (isNaN(sumVal4)) {
            sumVal4 = 0;
        }

        sumVal4 = sumVal4 + parseFloat(tabl4.rows[i].cells[7].innerHTML);
    }

    //console.log("SUMAAAAAAAAAAAAAAAAAAAAAAAA TIEEEEEEEEEEEEEEM" + "......" + sumVal4);
    document.getElementById("canti").value = sumVal4.toFixed(2);


}
porcentajePromedio = function () {
    var rows = document.getElementById('example').getElementsByTagName('tbody')[0].getElementsByTagName('tr').length;

    var tabl3 = document.getElementById("example"), sumVal3 = 0;

    for (var i = 1; i < tabl3.rows.length; i++) {

        if (isNaN(sumVal3)) {
            sumVal3 = 0;
        }

        sumVal3 = sumVal3 + parseInt(tabl3.rows[i].cells[9].innerHTML);
    }

    //console.log("SUMAAAAAAAAAAAAAAAAAAAAAAAA TIEEEEEEEEEEEEEEM"+"......"+sumVal2);
    document.getElementById("medio").value = (sumVal3 / rows).toFixed(2);




}
function consultarIndi() {
    toalTiempo();
    toalCanti();
    porcentajePromedio();
}