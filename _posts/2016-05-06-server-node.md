---
layout: post
title: Servidor con Nodejs
subtitle: como crear un servidor basico con nodejs.
---

Creando un servidor basico con nodejs.


{% highlight javascript linenos %}
var http= require('http');

http.createServer(
  function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end("Welcome to my server....")
  }
).listen(8000)

console.log("server start.....")

{% endhighlight %}
Otra forma de crear un servidor de "bajo nivel" es el siguiente:

{% highlight javascript linenos %}
var http = require("hppt");
var server = http.createServer();

server.on("request", function(request, response){
  response.writeHead(200,{"Content-type":"application/json"});
  response.write('{"valor":"10"}');
  response.end();
});

server.listen(5000);
{% endhighlight %}
