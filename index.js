/*const http = require('http')
const server = http.createServer( (req, res) => {
    res.status = 200
    res.setHeader('Content-Type', 'text-plain')
    res.end('Hola mundo a nodeJS')
})
server.listen(5000, () => { console.log('Server running') })
*/

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//route
app.get('/hola', (req, res) => res.send('Hola Jerson') )


app.get('/', (req, res) => res.send('Get') )
app.delete('/', (req, res) => res.send('Delete') )
app.put('/', (req, res) => res.send('Put') )
app.post('/', (req, res) => res.send('Post Hola') )

app.get('/sumar/:n1/:n2', (req, res) => { //url params
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let suma = n1 + n2
    res.send( "suma: " + suma )
})

app.get('/multiplicar', (req, res) => { //get query-string params
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let multiplciar = n1 * n2
    res.send('Multiplicar: ' + multiplciar)
})

//ejercicios
/* (GET)
    1) Servicio web que permita recibir 3 datos numéricos y devolver el mayor
    2) Desarrollar un servicio llamado /saludar y reciba su nombre como parametro y muestre
        una respuesta de "Bienvenido {nombre}"
    3) Desarrollar un servicio web que reciba la fecha de nacimiento y retorne la edad
*/


app.listen(5000, () => console.log('Server expressJS Running') )