---
layout: post
title: Retornar diferentes valores de una función en Swift.
subtitle: Cómo retornar diferentes valores de una función en swift, usando tuplas.
image: https://personal-buckets.s3-us-west-2.amazonaws.com/swift.jpg
---

Las funciones basicamente son pequeños bloques de código que se encargar de una tarea en especifico y que podemos mandarlas llamar siempre que las necesitemos.

Veremos como definir una funcion y como podemos regresar mas de un tipo de dato de esa misma función, esto con ayuda de las famosas tuplas que podemos usar en swift.

Aquí el ejemplo:

{% highlight javascript %}
func Calc(peso: Double, altura: Double) -> (Double, String){

    let imc = peso / (altura \* altura)
    var mensaje = ""

    if(imc > 10.50 && imc < 25.00){
        mensaje = "todo bien"
    }else{
        mensaje = "acudir al medico"
    }

    let resultado = (imc, mensaje)
    return resultado

}
{% endhighlight %}

En la función de arriba lo que hacemos es calcular el índice de masa corporal, después de eso hacemos una pequeña validación para ver como estamos, y al final devolvemos la tupla, nótese que al definir la función indicamos que regresaremos una tupla, ahora veremos como mandar llamar la función y como podemos acceder a sus datos.

{% highlight javascript %}
let resultadoImc = Calc(66.0, altura: 1.6);

resultadoImc.0
resultadoImc.1q
{% endhighlight %}

Espero les sirva de algo, saludos.
