console.log('HAS STARTED');

const testRoutes =
require('./routes/myTestRoutes');
const express = require('express')
const app = express()
const port = 3000
const port1 = 3000
const port2 = 80

app.get('/', (req, res) => {
res.send('Hello World! It worked')
})

app.get('/test', (req, res) => {
    res.send('This is a test')
    })

app.get('/E1', (req, res) => {
    res.send('Exercise 1 Example')
    })



app.listen(port1, () => {
console.log(`Example app listening
at http://localhost:${port1}`)
})


app2.listen(port2, () => {
    console.log(`Example app listening
    at http://localhost:${port2}`)
    })


app.use('/', express.static('public'))

app.use('/mytest', testRoutes);


app.listen(port, () => {
    console.log(`Example app listening
    at http://localhost:${port}`)
    })