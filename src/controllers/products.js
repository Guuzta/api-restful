const ProductsModel = require('../models/products')

async function get (req, res) {

    const { id } = req.params

    const object = id ? { _id: id } : null

    const products = await ProductsModel.find(object)

    res.send(products)

}

async function post (req,res) {

    const {
        name,
        brand,
        price
    } = req.body

    const newProduct = new ProductsModel({
        name,
        brand,
        price
    })

    console.log(req.body)

    newProduct.save()

    res.send({
        message: "Produto cadastrado com sucesso!"
    })

}

module.exports = {
    get,
    post,
}