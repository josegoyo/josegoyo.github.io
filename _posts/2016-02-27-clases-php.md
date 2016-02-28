---
layout: post
title: Clases en php.
subtitle: Manipular clases en php.
---

La programación orientada a objetos es una de las mejores técnicas, hoy en día muchos lenguajes de programación lo soportan ya que es fundamental optimizar código para tener un mejor orden en el nuestras lineas. Oviamente PHP no será la exepción es por eso que aquí les coloco un ejemplo de la creación de clases en PHP.

Primeramente crearemos la clase Carro, por lo tanto un archivo llamado Carro.php, que tendrá una serie de funciones que solo tendrán un echo dentro de ellas haciendo señal de lo que sucedería cuando la función de mande llamar.

{% highlight php linenos %}
class Carro{

   function prenderCarro(){
     echo "Se ha prendido el carro";
   }

   function avanzarCarro(){
     echo "El carro avanza";
   }

   function frenarCarro(){
     echo "El carro frena";
   }

   function apagarCarro(){
     echo "El carro se ha apagado";
   }

}

{% endhighlight %}

Ahora cremos otro archivo al cual le llamaremos Principal.php, lo colocaremos dentro de la misma carpeta donde tendremos nuestro archivo Carro.php, en el archivo Principal.php mandaremos llamar el archivo Carro.php para poder hacer unos de la clase que escribimos dentro de ella.

{% highlight php linenos %}
include "carro.php";//incluimos el archivo carro para hacer uso de ella

$carro = new Carro();//creamos nuestro objeto carro.

$carro -> prenderCarro();//mandamos llamar los métodos de la clase carro.
$carro -> avanzarCarro();
$carro -> frenarCarro();
$carro -> apagarCarro();
{% endhighlight %}

Y listo solo vamos a nuestro navegador accedemos a nuestro localhost o servidor en donde lo tengamos y a correr. Este es un ejemplo muy básico pero fácil de comprender las clases en php. :D
