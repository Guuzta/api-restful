const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    name: String,
    brand: String,
    price: Number
})

const Model = mongoose.model('products', productSchema)

module.exports = Model