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
    // verificar la url
    let uri = req.url
    if(uri.startsWith('/index') || uri === '/index.html') {
        return serverIndex(res)
    }
    if(uri === '/app.js'){
        return serverApp(res)
    }
    res.statusCode = 404
    res.end(`404 not found: ${uri}`)
}

// Funcion que envia el index.html
function serverIndex(res){
    // path join permite concatenar rutas y directorios
    let index = path.join(__dirname, 'public', 'index.html')
    
    // Especifica el tipo de cabecera a utilizar
    res.setHeader('Content-Type', 'text/html')
    
    // creacion de Read Stream
    let rs = fs.createReadStream(index)
    rs.pipe(res)
    
    // Controlar errores
    rs.on('error', function (err) {
        res.setHeader('Content-Type', 'text/plain')
        res.end(err, message)
    })
}
// Funcion que envia app.js
function serverApp(res) {
    // path join permite concatenar rutas y directorios
    let app = path.join(__dirname, 'public', 'app.js')
    
    // Especifica el tipo de cabecera a utilizar
    res.setHeader('Content-Type', 'text/javascript')
    
    // creacion de Read Stream
    let rs = fs.createReadStream(app)
    rs.pipe(res)
    
    // Controlar errores
    rs.on('error', function (err) {
        res.setHeader('Content-Type', 'text/plain')
        res.end(err, message)
    })
}
function onListening() {
    // Uso de template strings (ES6)
    console.log(`Servidor escuchando en el puerto: ${port}`)
}