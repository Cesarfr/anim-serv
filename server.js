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
const port = process.env.PORT || 8080
// Server creado, agregado callback
const server = http.createServer()

// Event emitters
server.on('request', onRequest)
server.on('listening', onListening)

// Puerto que utilizara el servidor
server.listen(port)

// Refactorizando codigo
function onRequest(req, res) {
    // path join permite concatenar rutas y directorios
    let fileName = path.join(__dirname, 'public', 'index.html')
    
    // Especifica el tipo de cabecera a utilizar
    res.setHeader('Content-Type', 'text/html')
    
    // creacion de Read Stream
    let rs = fs.createReadStream(fileName)
    rs.pipe(res)
    
    // Controlar errores
    rs.on('error', function (err) {
        res.end(err, message)
    })
}
function onListening() {
    // Uso de template strings (ES6)
    console.log(`Servidor escuchando en el puerto: ${port}`)
}