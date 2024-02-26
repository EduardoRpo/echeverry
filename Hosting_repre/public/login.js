
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
function login(){
    var user;
    var pass;
    var usuario = document.getElementById('usuario').value; 
    var password = document.getElementById('password').value;
    if(password=="" && usuario==""){
        alert("verifique que los campos esten llenos ");
    }else{
    db.collection("inicioadministradores").where("usuario","==",usuario.trim()).where("contrasena","==",password.trim()).get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        user=`${doc.data().usuario}`;
        pass=`${doc.data().contrasena}`;
        });
        if(usuario==user && password==pass){
          window.location.href='entrada.html';
          
        }else{
            alert("Usuario o Contraseña incorrecta");
            password="";

        }
    })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      }); 
    }
  }
  