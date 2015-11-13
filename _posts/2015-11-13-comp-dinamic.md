---
layout: post
title: Crear componentes HTML dinamicamente con JavaScript.
subtitle: crear componentes html dinamicamente con javascript puro.
---

Hoy por hoy los sitios dinámicos son mas atractivos para el usuario final, es por eso que hoy les traigo un post para crear componentes dinamicamente usando javascript, es muy sencillo ya que solo tiene que agrear unas cuantas lineas de código.

suponiendo que tenemos el siguiente código:

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="es">
 <head>
   <meta charset="UTF-8" />
   <title>Index</title>
   <script>
      //Aquí colocaremos el resto del código        
   </script>
 </head>

 <body>
   <div id="padre">
      
   </div>
   <input type="button" id="btn_agregar" value="+">
 </body>
</html>
{% endhighlight %}

y lo que queremos es agregar un elemento input de tipo text cada vez que presionemos el botón + entonces, primeramente creamos una función que sera el que se encargue de agregar los datos al componente padre que sera el div con el id "padre" colocado en el código de arriba, la función quedaría algo como esto:

{% highlight javascript linenos %}
function crearDin(){
   //aquí instanciamos al componente padre
   var padre = document.getElementById("padre");
   //aquí agregamos el componente de tipo input
   var input = document.createElement("INPUT");
   //aquí indicamos que es un input de tipo text
   input.type = 'text';
   
   //y por ultimo agreamos el componente creado al padre
   padre.appendChild(input);
 }
{% endhighlight %}






