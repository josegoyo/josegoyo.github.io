---
layout: post
title: Petición Get con $http en angular.js
subtitle: Petición Get utilizando el servicio $http en angular.js
---

El servicio $http nos permite realizar peticiones ajax de un manera my simple ya solo tenemos que agregar el servicio a nuestro controlador y realizar la peticion que nosotros queramos.

Como se muestra en el siguiente ejemplo, en donde realizaremos una petición a un servicio que esta en linea (rest API) que nos devolvera los nombres de los paises del mundo, lo cacharemos en un arreglo y lo mandaremos imprimir en la colsola del navegador.

{% highlight javascript linenos %}
var $scope.conuntries = [];

$http({
	method: 'GET',
	url: 'https://restcountries.eu/rest/v1/all'
}).then(function successCallback(response) {

	$scope.countries = response.data;
	console.log("Success",response);
	
}, function errorCallback(response) {

	console.log("Error Countries",response);
	
});
{% endhighlight %}

si quieres saber mas sobre el servicio aquí les dejo el link de la [pagina oficial](https://restcountries.eu/).