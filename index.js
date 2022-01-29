const express = require('express')
const CORS = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(routes)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Rodando aqui ${PORT}`))
