---
layout: post
title: Envio de datos por ajax usando JQuery.
subtitle: Envio de datos de un formulario html por ajax
---

Primero que nada les mostrare el pequeño formulario en donde supondremos que es un login, tendremos un input de tipo text para el nombre del usuario y un input de tipo password ademas de un input de tipo button para el envio de los datos, asi quedaria mas o menos el código:

NOTA: es muy importante que tengan JQuery referenciado ya sea por CDN o en archivo local y tener instalado un servidor local para poder correr php (xamp, lamp, wamp etc.).

{% highlight javascript linenos %}
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
	   // Este div nos servirá para cachar la respuesta enviada por el backend en caso 
	   // de que sea necesario.
	   <div id="resp"></div>
	 </body>
	</html>
{% endhighlight %}