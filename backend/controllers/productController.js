import Models from "../models/index.js";

const getProduct = (res) => {
    Models.Product.findAll({})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const getSingleProduct = (req, res) => {
    Models.Product.findOne({ where: { id: req.params.id } })
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const Controllers = {
    getProduct, getSingleProduct
}

export default Controllers;