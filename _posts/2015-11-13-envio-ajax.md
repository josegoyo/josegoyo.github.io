---
layout: post
title: Envio de datos por ajax usando JQuery.
subtitle: Envio de datos de un formulario html por ajax
fb-img: https://personal-buckets.s3-us-west-2.amazonaws.com/javascript.jpg
---

Primero que nada les mostrare el pequeño formulario en donde supondremos que es un login, tendremos un input de tipo text para el nombre del usuario y un input de tipo password ademas de un input de tipo button para el envio de los datos, asi quedaria mas o menos el código:

NOTA: es muy importante que tengan JQuery referenciado ya sea por CDN o en archivo local y tener instalado un servidor local para poder correr php (xamp, lamp, wamp etc.).

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="es">
  <head>
	<meta charset="UTF-8" />
   	<title> Acción onclick en js </title>
   	<!--Aquí esta la referencia a jquery-->
   	<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
  </head>
  <body>
	<form method="post" id="formulario">
		<input type="text" name="usuario" placeholder="Usuario" autofocus/>
		<input type="password" name="contrasena" placeholder="Contraseña"/>
		<input type="button" id="btn-ingresar" value="Ingresar" />
	</form>
	<!--Este div nos servirá para cachar la respuesta enviada 
		por el backend en caso de que sea necesario.-->
	<div id="resp"></div>
  </body>
</html>
{% endhighlight %}

Ahora crearemos el script que se encargara de enviar los datos del formulario al backend a un archivo php, el código quedaría dela siguiente manera:

{% highlight javascript linenos %}
$(document).on('ready',function(){ 

    $('#btn-ingresar').click(function(){
        var url = "datos_login.php";
        $.ajax({                        
           type: "POST",                 
           url: url,                     
           data: $("#formulario").serialize(), 
           success: function(data)             
           {
             $('#resp').html(data);               
           }
       });
    });

});
{% endhighlight %}

Ahora crearemos el archivo php al cual le llamamos datos_login.php se encargara de cachar los datos y colocaremos un par de echos para que sean las respuestas y se muestren en la vista (en el div que cacha la respuesta en el html), el código quedaría mas o menos así:

{% highlight php linenos %}
<?php   
    $usuario = $_POST['usuario'];
    $contra  = $_POST['contrasena'];
    
    echo "tu usuario es: ".$usuario; 
    echo "contraseña es: ".$contrsena;
?>
{% endhighlight %}

Así quedaría el código completo del lado del html ya que el php queda como se muestra arriba:

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="es">
  <head>
	<meta charset="UTF-8" />
   	<title> Acción onclick en js </title>
   	<!--Aquí esta la referencia a jquery-->
   	<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
	<script>
	$(document).on('ready',function(){

	  $('#btn-ingresar').click(function(){
		var url = "datos_login.php";                                      

		$.ajax({                        
		   type: "POST",                 
		   url: url,                    
		   data: $("#formulario").serialize(),
		   success: function(data)            
		   {
			 $('#resp').html(data);           
		   }
		 });
	  });

	});
	</script>
  </head>
  <body>
	<form method="post" id="formulario">
		<input type="text" name="usuario" placeholder="Usuario" autofocus/>
		<input type="password" name="contrasena" placeholder="Contraseña"/>
		<input type="button" id="btn-ingresar" value="Ingresar" />
	</form>
	<!--Este div nos servirá para cachar la respuesta enviada 
		por el backend en caso de que sea necesario.-->
	<div id="resp"></div>
  </body>
</html>
{% endhighlight %}

Bueno espero que les sea de ayuda, recuerden comentar sus dudas, saludos.

