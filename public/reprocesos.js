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


window.onload = function(){
    tabl=document.getElementById("tabla");
    tabl2=document.getElementById("tabla2");
    tabl3=document.getElementById("tabla3");
    tabl4=document.getElementById("tabla4");



    db.collection("controladministradores").where('usuariooperario','==','Reproceso propio 1').orderBy("fecha","desc").limit(30).onSnapshot((querySnapshot) =>{
      tabl.innerHTML="";
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());

           usuario=`${doc.data().Comen}`;
           tiempo=`${doc.data().tiempo}`;
           fecha=`${doc.data().fecha}`;


          tabl.innerHTML += `
                   <tr>
               <th scope="row">${fecha}</th>
               <td>${usuario}</td>
               <td>${(tiempo/60).toFixed(2)}min</td>
              
               </tr>
          `
         
       });
   })
   db.collection("controladministradores").where('usuariooperario','==','Reproceso propio 2').orderBy("fecha","desc").limit(30).onSnapshot((querySnapshot) =>{
    tabl2.innerHTML="";
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

         usuario=`${doc.data().Comen}`;
         tiempo=`${doc.data().tiempo}`;
         fecha=`${doc.data().fecha}`;


        tabl2.innerHTML += `
                 <tr>
             <th scope="row">${fecha}</th>
             <td>${usuario}</td>
             <td>${(tiempo/60).toFixed(2)}min</td>
            
             </tr>
        `
        
      
     });
 })
 db.collection("controladministradores").where('usuariooperario','==','Reproceso ajeno 1').orderBy("fecha","desc").limit(30).onSnapshot((querySnapshot) =>{
  tabl3.innerHTML="";
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

       usuario=`${doc.data().Comen}`;
       tiempo=`${doc.data().tiempo}`;
       fecha=`${doc.data().fecha}`;


      tabl3.innerHTML += `
               <tr>
           <th scope="row">${fecha}</th>
           <td>${usuario}</td>
           <td>${(tiempo/60).toFixed(2)}min</td>
          
           </tr>
      `
      
    
   });
})
db.collection("controladministradores").where('usuariooperario','==','Reproceso ajeno 2').orderBy("fecha","desc").limit(30).onSnapshot((querySnapshot) =>{
  tabl4.innerHTML="";
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

       usuario=`${doc.data().Comen}`;
       tiempo=`${doc.data().tiempo}`;
       fecha=`${doc.data().fecha}`;


      tabl4.innerHTML += `
               <tr>
           <th scope="row">${fecha}</th>
           <td>${usuario}</td>
           <td>${(tiempo/60).toFixed(2)}min</td>
          
           </tr>
      `
      
    
   });
})
  }