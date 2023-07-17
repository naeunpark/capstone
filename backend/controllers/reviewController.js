import Models from "../models/index.js";

const getReviewByProductId = (req, res) => {
    Models.Review.findAll({where: {productId:req.params.productId}})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createReview = (data, res) => {
    Models.Review.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateReview = (data, res) => {
    console.log(data);
    Models.Review.update(data,{where: {id:data.id}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteReview = (data, res) => {
    Models.Review.destroy({
        where: {
          id: data.params.id
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

const Controllers = {
    getReviewByProductId, createReview, updateReview, deleteReview
}

export default Controllers;