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
        message: "sucess"
    })

}

async function put (req,res) {

    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: "sucess",
        product
    })

   /*  const product = await ProductsModel.findOne({ _id: id })

    await product.updateOne(req.body)

    res.send({
        message: "Produto atualizado com sucesso!",
        product
    }) */

}

async function remove (req, res) {

    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    let message = remove.deletedCount ? 'sucess' : 'error'

    res.send({
        message,
    })

}

module.exports = {
    get,
    post,
    put,
    remove,
}