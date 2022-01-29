const express = require('express')
const CORS = require('cors')
const bodyParser = require('body-parser')
const projectController = require('./controllers/projectController')

require('dotenv').config()

const app = express()
app.use(CORS())
app.use(bodyParser.json())
app.use('/project', projectController)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Rodando aqui ${PORT}`))
