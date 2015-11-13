---
layout: post
title: Envio de datos por ajax usando JQuery.
subtitle: Envio de datos de un formulario html por ajax
---

Primero que nada les mostrare el pequeño formulario en donde supondremos que es un login, tendremos un input de tipo text para el nombre del usuario y un input de tipo password ademas de un input de tipo button para el envio de los datos, asi quedaria mas o menos el código:

NOTA: es muy importante que tengan JQuery referenciado ya sea por CDN o en archivo local y tener instalado un servidor local para poder correr php (xamp, lamp, wamp etc.).

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
   		<title> Acción onclick en js </title>
   		// Aquí esta la referencia a jquery
   		<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
 	</head>

 	<body>
   		<form method="post" id="formulario">
	  		<input type="text" name="usuario" placeholder="Usuario" autofocus/>
	  		<input type="password" name="contrasena" placeholder="Contraseña"/>
	  		<input type="button" id="btn-ingresar" value="Ingresar" />
   		</form>
   		// Este div nos servirá para cachar la respuesta enviada 
   		// por el backend en caso de que sea necesario.
   		<div id="resp"></div>
 	</body>
</html>
{% endhighlight %}

Ahora crearemos el script que se encargara de enviar los datos del formulario al backend a un archivo php, el código quedaría dela siguiente manera:

{% highlight javascript linenos %}
$(document).on('ready',function(){ // para esperar a que la viste se cargue por completo antes
                                   // antes de cargar el javaScript.
      
    $('#btn-ingresar').click(function(){ // Esta función se ejecuta al presionar el botón
                                         // (creo que es obvio por el nombre).

        var url = "datos_login.php";     // aquí referenciamos el nombre del archivo php que se encargara de
                                         // cachar los datos enviados (mas abajo lo declaramos).

        $.ajax({                         // comienza en método ajax.
           type: "POST",                 // indicamos el método que utilizaremos para enviar los datos.
           url: url,                     // aquí colocamos la url del archivo php referenciado mas arriba.
           data: $("#formulario").serialize(), // como dato mandamos todo lo que contenga el form
           success: function(data)             // en caso de éxito se ejecuta la funcion
           {
             $('#resp').html(data);            // coloca la respuesta en el div indicado por su id.      
           }
       });
    });
});
{% endhighlight %}


