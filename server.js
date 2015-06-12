'use strict' // Uso de caracteristicas de ES5 (ECMAScript5)

/* Creacion del servidor HTTP 
 * const = variables que no cambian
 * http = peticion del modulo para crear el server
 */
const http = require('http')
// Lectura del puerto a utilizar desde la variable de entorno, sino utiliza el puerto por default 8080
const port = process.env.PORT || 8080
// Server creado, agregado callback
const server = http.createServer(onRequest)
// Puerto que utilizara el servidor
server.listen(port, onListening)

// Refactorizando codigo
function onRequest(req, res){
    res.end("Hola io.js")
}
function onListening(){
    console.log("Servidor escuchando en el puerto: "+port)
}