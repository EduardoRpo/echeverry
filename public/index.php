<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Ficha Tecnica</title>
	<link rel="shortcut icon" href="img/logo.jpg" type="image/x-icon">
    
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-firestore.js"></script>
    <script src="app.js"></script>
    <link rel="stylesheet" type="text/css" href="estiloLogin.css">

</head>
  </head>
  <body>
      <div class="login-box">
      <img src="img/logo.jpg" class="avatar" alt="Avatar Image">


      <h1>Inicio de Sesion</h1>
  <div class="container" id="formularioingreso">
    <div  name="loginusuario">
      <div class="form-group">
        <label for="usuario">Usuario</label>
        <input name="usuario" type="text" class="form-control" id="usuario" aria-describedby="emailHelp" placeholder="ingrese su usuario">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input name="password" type="password" class="form-control" id="password" placeholder="Contraseña">
      </div>
      <button id="b5" type="Button" class="btn" onclick="login()">Ingresar</button>
  </div>
</div>



      </div>
  

  </body>
  <script src="login.js"></script>
</html>