'use strict' // Uso de caracteristicas de ES5 (ECMAScript5)

/* Creacion del servidor HTTP 
 * const = variables que no cambian
 * http = peticion del modulo para crear el server
 */
const http = require('http')
// Lectura del puerto a utilizar desde la variable de entorno, sino utiliza el puerto por default 8080
// Uso del recurso File System
const fs = require('fs')
// Uso del modulo Path
const path = require('path')
// Importamos el router
const router = require('./router')
const port = process.env.PORT || 8080
// Server creado, agregado callback
const server = http.createServer()

// Event emitters
server.on('request', router)
server.on('listening', onListening)

// Puerto que utilizara el servidor
server.listen(port)

function onListening() {
    // Uso de template strings (ES6)
    console.log(`Servidor escuchando en el puerto: ${port}`)
}