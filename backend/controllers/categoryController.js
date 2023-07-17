import Models from "../models/index.js";

const getCategory = (res) => {
    Models.Category.findAll({})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createCategory = (data, res) => {
    Models.Category.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateCategory = (data, res) => {
    console.log(data);
    Models.Category.update(data,{where: {id:data.id}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteCategory = (data, res) => {
    Models.Category.destroy({
        where: {
          id: data.params.id
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

const Controllers = {
    getCategory, createCategory, updateCategory, deleteCategory
}

export default Controllers;