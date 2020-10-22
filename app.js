// ***** Crear Servidor *****//
const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let datos = { nombre: 'gabriel', edad: 32, url: req.url }
    res.end(JSON.stringify(datos));
}).listen(8080)
console.log('Escuchando el puerto 8080');;