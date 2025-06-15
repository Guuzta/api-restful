const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes/routes')
const dataBase = require('./database/dataBase')

//habilitar o servidor para receber dados no formato json
app.use(express.json())

//habilita CORS
app.use(cors())

//definindo as rotas
app.use('/api', routes)

//conexão com o banco de dados
dataBase.connect()

//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}...`))