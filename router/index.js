const path = require('path')
// Agregar 'course' para el manejo de rutas dinamicas
const course = require('course')
// Llamamos a la libreria st
const st = require('st')

const router = course()

// Configuracion de st
// passthrough: la ejecucion continua si no hay archivo estatico
const mount = st({
    path: path.join(__dirname, '..', 'public'),
    index: 'index.html',
    passthrough: true
})

function onRequest(req, res){
    mount(req, res, function (err){
        if (err) return fail(err, res)
        
        router(req, res, function(err) {
            if (err) return fail(err, res)
            
            res.statusCode = 404
            res.end(`404 Not Found ${req.url}`)
        })
    })
}

function fail(err, res) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(err.message);
}

// Exportamos a server.js para cargar este modulo
module.exports = onRequest