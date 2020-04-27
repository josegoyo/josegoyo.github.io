---
layout: post
title: Prompt y confirm en javaScript
subtitle: como utilizar prompt y confirm en js.
comments: true
---

Ademas de la ya muy conocida función alert que tiene JavaScrip para la interacción con el usuario también cuenta con otras muy interesantes de las cuales hablaremos y veremos su sintaxis.

### Confim.

Esta función permite preguntarle al usuario si desea realizar alguna acción en donde la respuesta es ACEPTAR o CANCELAR, esta función regresa como resultado un boleano (boolean), es decir, si el usuario hizo clic en ACEPTAR la función regresa un true, de lo contrario, si el usuario hace clic en CANCELAR la función regresa un false.

En el siguiente ejemplo crearemos una variable en donde almacenaremos el valor que nos regrese la función confirm dependiendo de la respuesta seleccionada por el usuario, y luego la mandaremos imprimir en consola.

{% highlight javascript linenos %}
var theConfirm = confirm("Exit?");
console.log(theConfirm);
{% endhighlight %}

### Prompt.

Esta función puede ser usado para hacer una pregunta abierta, el primer argumento que le mandaremos es la pregunta que deseamos realizar, El segundo argumento es un texto que aparecerá al ejecutarse la función pero esta se sobreescribira con la respuesta del usuario, esta función nos regresa una cadena de texto (string).

> nota: el segundo argumento no siempre es necesario a menos que así lo requieras.

En el siguiente ejemplo crearemos una variable en donde guardaremos el valor que nos regrese la función y después lo mandaremos pintar en la consola.

{% highlight javascript linenos %}
var name= prompt("What is your name?","..");
console.log("Your name is: " + name);
{% endhighlight %}

Pero que pasa si lo que queremos del usuario no es su nombre si no su edad y ocupamos que a fuerza el valor que nos regrese sea un entero (int), pues realizamos una conversión con la función Number(),
el cual nos convertirá la respuesta del usuario a entero.

> nota: si nosotros queremos utilizamos la función Number pero ingresamos una cadena de texto, entonces nos regresara una valor NaN lo que tenemos que hacer para evitar eso es una pequeña validación en donde cheque el valor de la variable que cachará lo que regrese la función Number, antes de mandarlo imprimir a la consola.

El código quedaría mas o menos asi:

{% highlight javascript linenos %}
var user_a = Number(prompt("How old are you?:",".."));

if(!isNaN(user_a)){
    console.log("Your age is: "+user_a);
}else{
    console.log("is not a number!!, try again.");
}
{% endhighlight %}

Bueno espero que les sirva este post y si tiene alguna duda pueden comentarlo.
Saludos.
