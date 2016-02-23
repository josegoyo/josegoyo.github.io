---
layout: post
title: Date y calendar en java.
subtitle: Interacción con el objeto date y calendar en java.
---

En este post veremos como mostrar la hora en java, para esto usaremos el objeto Calendar y el objeto Date, primero les comento que el resultado sera en consola es decir, vamos utilizar un hilo para estar pintando la hora cada segundo pero como lo mencione anteriormente en la consola, una vez aclarado ésto procederé a explicar lo siguiente:

Primeramente crearemos una clase que heredara de un Thread para poder sobre escribir el método Run a esta clase yo la llamare DateTime.

Dentro de esta clase crearemos el constructor en donde si ustedes quieren le pasen un string si no, no hay problema esto solo es para ponerle un nombre, ademas de un boolean para ejecutar el método Run que sobre escribiremos mas tarde, en mi caso el constructor quedaría de la siguiente manera:


{% highlight java linenos %}
public DateTime(String nombre) {
   super(nombre); 
   corre = true;  
}
{% endhighlight %}