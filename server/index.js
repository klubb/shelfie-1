require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const massive = require('massive')
const connectionString = process.env.CONNECTION_STRING
const PORT = process.env.PORT

const app = express()
app.use(bodyParser.json())


massive(connectionString)
.then(connection => {
    app.set('db', connection)
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT} 👌`))
})

app.get('/api/inventory', ctrl.get)
app.post('/api/product', ctrl.add)
app.delete('/api/product/:id', ctrl.delete)