const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    name: String,
    brand: Number,
    price: Number
})

const Model = mongoose.model('products', productSchema)

module.exports = Model