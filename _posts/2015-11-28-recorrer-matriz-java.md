---
layout: post
title: Recorrer una matriz en java
subtitle: Recorrer una matriz en java, validando dimensiones.
---

En esta ocasión veremos como recorrer un matriz en java, teniendo en cuenta que la matriz puede ser de diferentes dimensiones.

Acá abajo pondre el codigo con algunos comentarios para su explicación.

{% highlight java linenos %}
public class Main {
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Primero creamos nuestra matriz 
		//(pueden hacer cambios en las dimensiones).
		int[][] numeros = new int[3][5];

		// Ahora instanciamos un entero para
		// poder agregarle valores a la matriz.
		int n = 0;

		// Este ciclo anidado nos funciona
		// para agregarle valores a la matriz.
		for (int x = 0; x < numeros.length;x++) {
			for (int y = 0; y < numeros[x].length; y++) {
				 n++;
				 numeros[x][y] = n;
			}   
		}

		// Este ciclo anidado nos permite pintar
		// la matriz en consola.
		for (int x = 0; x < numeros.length;x++) {
			for (int y = 0; y < numeros[x].length; y++) {
				 System.out.print("["+numeros[x][y]+"]");
			}
			System.out.println("\n");
		}

		// Por ultimo solo pintamos las filas y
		// columnas de nuestra matriz.				
		System.out.println("Número de fila: "+numeros.length);
    System.out.println("Número de columnas: "+numeros[0].length);  
	}
}
{% endhighlight %}

Espero que les sirva de algo el codigo, saludos.