const { json } = require('express')
const express = require('express') //Requerimos una instancia de express
const app = express()
const hbs = require('hbs') //Requerimos una instancia de hbs
require('./helpers/helpers') // helpers
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public/'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'zenObio'
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.listen(port, () => console.log(`Servidor Ejecutandose en el puerto ${port}!`))