const mongoose = require('mongoose')

async function connect () {

    try {
        await mongoose.connect('mongodb://localhost:27017/api-restful')
        console.log('Conectado ao banco de dados!')
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados!', error)
    }

}

module.exports = {
    connect,
}