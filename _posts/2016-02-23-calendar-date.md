---
layout: post
title: Date y calendar en java
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

Ahora pasaremos a sobreescribir el método Run recuerden que estamos heredando de Thread, en el método Run creamos un ciclo con un while en donde estaremos mandando llamar un método llamado getTime que declararemos mas abajo, la variable "corre" que es un boolean nos permitirá que el ciclo se ejecute. dentro del ciclo colocamos un try and catch para en caso de que surja un error, dentro del try mandamos llamar el método getTime y debajo el método sleep para que se espere 1 segundo antes de volver a entrar de nuevo al while. el código quedaría de la siguiente manera:

{% highlight java linenos %}
public void run(){
  
   while(corre){   
      try {
         System.out.println(getTime());
         sleep(1000);
    
      } catch (InterruptedException e) {
         System.out.println("Error "+e.getMessage());
      } 
   }   
}
{% endhighlight %}

Ahora pasaremos a crear el método getTime que es el que se encarga de regresarnos la hora. primero que nada dentro del método creamos un objeto de tipo Calendar y otro de tipo Date una vez creado los objeto mandamos llamar el método setTime que pertenece a Calendar, pasando el objeto Date creado para indicarle los datos del día presente, ahora en el ejemplo yo cree 3 variables los cuales almacenar la hora los minutos y los segundos, entonces a cada una de las variables les asigno un valor utilizando el objeto Calendar y llamando el método get pasando la instancia que quiero de regreso, como se muestra en el ejemplo, por ultimo tengo un if el cual solo sirve para que los minutos del 0 al 9 contengan un cero a la su izquierda y no solo aparezca el numero solo. el código quedaría de la siguiente manera:

{% highlight java linenos %}
public String getTime(){  
    Date d = new Date();
    Calendar c = new GregorianCalendar();
    c.setTime(d);
  
    hora     = c.get(Calendar.HOUR_OF_DAY);
    minuto   = c.get(Calendar.MINUTE);
    segundo  = c.get(Calendar.SECOND);
  
    if(minuto < 10){
       return "Hora: "+hora+" Minuto: 0"+minuto+" Segundo: "+segundo;
    }else{
       return "Hora: "+hora+" Minuto: "+minuto+" Segundo: "+segundo;
    } 
}
{% endhighlight %}

Noten que el método getTime regresa un string y que las variables "hora", "minuto" y "segundo" son enteros y están declarado de manera que sean globales al igual que el boolean "corre".

Ahora solo queda declara la clase main que solo es crear un objeto y mandar llamar el método Run. como se muestra en el siguiente ejemplo:

{% highlight java linenos %}
public class main {
    public static void main(String[] args) {
    // TODO Auto-generated method stub
  
       DateTime h1 = new DateTime("Hilo 1");
       h1.run();  
    }
}
{% endhighlight %}

No olviden que el método get de calendar nos puede regresar muchas cosas mas, yo solo tome la hora para realizar el post si quieres saber mas de lo que puedes obtener checa aquí.

Saludos.


