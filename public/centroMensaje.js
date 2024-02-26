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

  window.onload = function () {

    var tabl = document.getElementById("tabla3");
  
    db.collection("OrdenProduccion").orderBy("OrdenP", "desc").onSnapshot((querySnapshot) => {
      tabl.innerHTML = "";
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
  
        tabl.innerHTML += `
                     <tr>
                 <th scope="row">${doc.data().OrdenP}</th>
                 <td>${doc.data().Referenc}</td>
                 <td>${doc.data().Tipo2}</td>
  
                
                 </tr>
  
            
            
            `
        var tabl3 = document.getElementById("tabla3");
  
  
        db.collection("controladministradores").where("tiempo", "==", "").orderBy("usuariooperario", "asc").onSnapshot((querySnapshot) => {
          tabl3.innerHTML = "";
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
  
            tabl3.innerHTML += `
                           <tr>
                       <th scope="row">${doc.data().usuariooperario}</th>
                       <td>${doc.data().Comen}</td>
                       <td>${doc.data().referencia}</td>
        
                      
                       </tr>
        
                  
                  
                  `
  
  
          });
        })
  
      });
    }) 

    

  
  }

  function enviarMsj(){
      
    var hora=new Date().getHours();
    var minutos=new Date().getMinutes();
    var seg=new Date().getSeconds();
    
  /*  var f = new Date();

    fech=(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());*/

                              var hoy = new Date();
                var dia = Number(hoy.getDate());
                var mes = Number(hoy.getMonth() + 1);
                var ano = Number(hoy.getFullYear());


                if (dia < 10 && mes < 10) {

                  fechaDelDia =Number (ano+"0"+mes+"0"+dia);

                }
                else if (mes < 10) {
                  // alert(ano+"-0"+mes+"-"+dia);
                  fechaDelDia =Number (ano+"0"+mes+dia);
                }
                else if (dia < 10) {

                  fechaDelDia =Number (ano+"0"+mes+"0"+dia);

                }
                else {
                  // alert(ano+"-"+mes+"-"+dia);
                  fechaDelDia =Number (ano+mes+dia);
                }


    if(hora<10 && minutos<10 && seg<10){
      var fecha =Number(fechaDelDia+hora+minutos+seg);
      console.log("la fecha es:"+fecha);


    }
    else if(hora<10 && minutos<10){
      var fecha =Number(fechaDelDia+hora+minutos+seg) ;
      console.log("la fecha es:"+fecha);


    }
    else if(hora<10 && seg<10){
      var fecha =Number(fechaDelDia+hora+minutos+seg);
      console.log("la fecha es:"+fecha);


    }
    else if(minutos<10 && seg<10){
      var fecha =Number(fechaDelDia+hora+minutos+seg);
      console.log("la fecha es:"+fecha);


    }
    else if(hora<10 ){
      var fecha =Number(fechaDelDia+hora+minutos+seg);
      console.log("la fecha es:"+fecha);


    }
    else if(minutos<10){
      var fecha =Number(fechaDelDia+hora+minutos+seg);
      console.log("la fecha es:"+fecha);


    }
    else if(seg<10){
      var fecha =Number(fechaDelDia+hora+minutos+seg) ;
      console.log("la fecha es:"+fecha);


    }
    else{
      var fecha =fechaDelDia+hora+minutos+seg;
      console.log("la fecha es:"+fecha);



    }

      var usuario=document.getElementById('nomUsu').value;
      var mensaje=document.getElementById('txtMsj').value;
      var estado=document.getElementById('estado').value;

    console.log('nombre'+usuario+'mensaje'+mensaje);
    if(usuario=='Preparación 1'){
       /* db.collection("centroMensajesPr1").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesPr1").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesPr1").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,
                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Preparación 2'){
       /* db.collection("centroMensajesPr2").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesPr2").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesPr2").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Ensamble 1'){
       /* db.collection("centroMensajesEn1").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesEn1").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesEn1").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Ensamble 2'){
       /* db.collection("centroMensajesEn2").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesEn2").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesEn2").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Apoyo preparacion 1'){
       /* db.collection("centroMensajesAPr1").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesAPr1").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesAPr1").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Apoyo preparacion 2'){
        /*db.collection("centroMensajesAPr2").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesAPr2").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesAPr2").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Apoyo ensamble 1'){
        /*db.collection("centroMensajesAen1").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesAen1").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesAen1").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Apoyo ensamble 2'){
      /*  db.collection("centroMensajesAen2").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesAen2").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesAen2").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Terminación 1'){
     /*   db.collection("centroMensajesT1").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesT1").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesT1").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Terminación 2'){
       /* db.collection("centroMensajesT2").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesT2").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesT2").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Terminación 3'){
      /*  db.collection("centroMensajesT3").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,    
          })*/
          db.collection("centroMensajesT3").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesT3").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Terminación 4'){
       /* db.collection("centroMensajesT4").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
            
          })*/
          db.collection("centroMensajesT4").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesT4").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Pulida y Revisada 1'){
      /*  db.collection("centroMensajesPyR1").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesPyR1").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesPyR1").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Pulida y Revisada 2'){
      /*  db.collection("centroMensajesPyR2").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesPyR2").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesPyR2").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Ruedo 1'){
      /*  db.collection("centroMensajesR1").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesR1").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesR1").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else if(usuario=='Ruedo 2'){
       /* db.collection("centroMensajesR2").add({

            Usuario: usuario,
            Mensaje: mensaje,
            Fecha:fecha,
          })*/
          db.collection("centroMensajesR2").orderBy("Fecha", "asc").limit(1)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());

              var washingtonRef = db.collection("centroMensajesR2").doc(doc.id);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Mensaje: mensaje,
                        Estado:estado,

                    })
                    .then(() => {
                        console.log("Document successfully updated!");
                        document.getElementById('txtMsj').value='';
                        Swal.fire(
                            'Mensaje Enviado!!!',
                            'Ha enviado el mensaje de forma exitosa...',
                            'success'
                          )

                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            });
        })
    }
    else{
        alert('VERIFIQUE EL USUARIO PARA PODER ENVIAR EL MSJ');
    }

    
  }
