// console.log('HAS STARTED');
const calcRoute = require('./routes/calcRoute');

const userRoutes = require('./routes/userRoutes');

const testRoutes = require('./routes/myTestRoutes');

const express = require('express')

const app = express()
const port = 3000

app.use(express.json());

app.get('/E1', (req, res) => {
    res.send('Exercise 1 Example')
    })


app.use('/', express.static('public'))

// app.use('/', express.static('calc'))


app.use('/mytest', testRoutes);

app.use('/calc', calcRoute);

app.use('/users', userRoutes);


app.listen(port, () => {
    console.log(`Example app listening
    at http://localhost:${port}`)
    })