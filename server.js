'use strict' // Uso de caracteristicas de ES5 (ECMAScript5)

/* Creacion del servidor HTTP 
 * const = variables que no cambian
 * http = peticion del modulo para crear el server
 */
const http = require('http')
// Lectura del puerto a utilizar desde la variable de entorno, sino utiliza el puerto por default 8080
// Uso del recurso File System
const fs = require('fs')
const port = process.env.PORT || 8080
// Server creado, agregado callback
const server = http.createServer()

// Event emitters
server.on('request', onRequest)
server.on('listening', onListening)

// Puerto que utilizara el servidor
server.listen(port)

// Refactorizando codigo
function onRequest(req, res){
    let file = fs.readFileSync('public/index.html')
    res.end(file)
}
function onListening(){
    console.log("Servidor escuchando en el puerto: "+port)
}