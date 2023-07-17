import Models from "../models/index.js";

// PRODUCT 
const createProduct = (data, res) => {
    Models.Product.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateProduct = (data, res) => {
    console.log(data);
    Models.Product.update(data,{where: {id:data.id}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteProduct = (data, res) => {
    Models.Product.destroy({
        where: {
          id: data.params.id
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

const Controllers = {
    createProduct, updateProduct, deleteProduct
}

export default Controllers;