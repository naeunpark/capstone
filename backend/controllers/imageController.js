import Models from "../models/index.js";

const getImageById = (req, res) => {
    Models.Image.findByPk(req.params.imageId)
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createImage = (data, res) => {
    Models.Image.findOrCreate({where: { email: data.body.email }, defaults: data})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateImage = (data, res) => {
    console.log(data);
    Models.Image.update(data,{where: {id:data.imageId}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteImage = (data, res) => {
    Models.Image.destroy({
        where: {
          id: data.params.imageId
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

const Controllers = {
    getImageById, createImage, updateImage, deleteImage
}

export default Controllers;