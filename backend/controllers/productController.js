import Models from "../models/index.js";

const getProduct = (res) => {
    Models.Product.findAll({include: 
        {
          model: Models.Category,
          required: true
        }
      })
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

const updateProduct = (req, res) =>{
    Models.Product.findOne({ where: { id: req.params.id } })
    .then((data) => {
        const stock = data.stock - req.body.qty;
        return stock;
    }).then(stock=>{
        Models.Product.update({stock:stock}, {where:{id:req.params.id}})
        .then(data=>console.log(data))
    })
    .catch(error => {
        throw error
    })
}

const Controllers = {
    getProduct, getSingleProduct, updateProduct
}

export default Controllers;