---
layout: post
title: Mongo Beginners.
subtitle: Comandos básicos para principiantes en mongoBD.
---

* '>' comando de entrada
* R: respuesta una vez puesto el comando (las respuestas pueden variar dependiendo los datos en tu colección).

{% highlight javascript linenos %}

  > show dbs // muestra las db que tengas creadas.
  R: admin        
     local        
     test         
     vehicle     
    
  > use mycustomers // crea la db y te swichea a ella.
  R: switched to db mycustomers
  
  > db // una vez estando en la db con el comando anterior, con este puedes ver en que db te encuentras situado.
  R: mycustomers
  
  > db.createCollection('customers') // crea una nueva colección dentro de la db.
  R: { "ok" : 1 }
  
  > db.customers.create({first_name:"jose",last_name:"gregorio"}); // agregar nuevo elemento a la colección.
  R: WriteResult({ "nInserted" : 1 })
  
  > db.customers.find() // muestra todos los datos de la colección:
  R: { "_id" : ObjectId("5810ed522ad2cfaa306d0bff"), "first_name" : "jose", "last_name" : "gregorio" }
  
  > db.customers.find({first_name:"sofia"}) // trae consigo todo los datos de ese objeto, busqueda individual.
  R: { "_id" : ObjectId("5810f7722ad2cfaa306d0c03"), "first_name" : "sofia", "last_name" : "gregorio", "genero" : "female" }
  
  > db.customers.find({$or:[{first_name:"sofia"},{first_name:"juan"}]}); busqueda multible usando el first_name.
  R: { "_id" : ObjectId("5810ee342ad2cfaa306d0c00"), "first_name" : "juan", "last_name" : "gregorio", "gender" : "male" }
     { "_id" : ObjectId("5810f7722ad2cfaa306d0c03"), "first_name" : "sofia", "last_name" : "gregorio", "genero" : "female" }
  
  > db.customers.find({gender:"male"}); // busqueda por atrubuto de la coleccion, por ejemplo usando el genero.
  R: { "_id" : ObjectId("5810ee342ad2cfaa306d0c00"), "first_name" : "juan", "last_name" : "gregorio", "gender" : "male" }
     { "_id" : ObjectId("5810f0312ad2cfaa306d0c01"), "first_name" : "luis", "last_name" : "gregorio", "gender" : "male" }
     { "_id" : ObjectId("5810f7212ad2cfaa306d0c02"), "first_name" : "venus", "last_name" : "gregorio", "gender" : "male" }
  
  > db.customers.find().count(); // retorna en numero total de elementos en la colección.
  R: 4
  
  > db.customers.find({"genero":"female"}).count(); // filtrado en el count.
  R: 1 
  
  > db.customers.find().limit(2); // busqueda de toda la colección con un limite de 2
  R: { "_id" : ObjectId("5810ee342ad2cfaa306d0c00"), "first_name" : "juan", "last_name" : "gregorio", "gender" : "male" }
     { "_id" : ObjectId("5810f0312ad2cfaa306d0c01"), "first_name" : "luis", "last_name" : "gregorio", "gender" : "male" }
 
  > db.customers.find().forEach(function(elem){ print("customer name: "+elem.first_name)}) // busqueda con funcion anonima.
  R: customer name: juan
     customer name: luis
     customer name: venus
     customer name: sofia 
 
  > db.customers.find().pretty() // muestra todos los datos de la colección de manera ordenada.
  R: {
	    "_id" : ObjectId("5810ed522ad2cfaa306d0bff"),
	    "first_name" : "jose",
	    "last_name" : "gregorio"
     }
  
  > db.customers.update({first_name:"jose"},{$set:{gender:"male"}}) // agregar un nuevo campo o columna a la colección.
  R: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  
  > db.customers.update({first_name:"jose"},{$unset:{gender:1}}) // eliminas el campo o columna "gender" de la colección.
  R: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  
  > db.customers.update({first_name:"jose"},{$rename:{"gender":"genero"}}) // renombre campo o columna de colección.
  R: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  
  > db.customers.remove({first_name:"jose"}); // eliminar un elemento de la colección.
  R: WriteResult({ "nRemoved" : 1 })

{% endhighlight %}