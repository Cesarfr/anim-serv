// Llamamos a la libreria st
const st = require('st')
const path = require('path')

// Configuracion de st
const mount = st({
    path: path.join(__dirname, '..', 'public'),
    index: 'index.html'
})

function onRequest(req, res){
    mount(req, res, function (){
        if (err) return res.end(err.message)
        
        res.statusCode = 404
        res.end(`Not Found ${req.url}`)
    })
}

// Exportamos a server.js para cargar este modulo
module.exports = onRequest