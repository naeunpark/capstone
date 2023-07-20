import Models from "../models/index.js";
import { Op } from "sequelize";

const getCartId = (req, res) => {
  Models.Cart.findOne({where: {[Op.and]: [{active: true},{userId:req.params.userId}]}})
  .then(data=>res.send({result: 200, data: data}))
}

//[Op.and]: [{ a: 5 }, { b: 6 }],
const getCartitmebyCartId = (req, res) => {
    Models.Cartitem.findAll({
      where: {
        [Op.and]: [{cartId:req.params.cartId},{userId:req.session.user.id}]
      }, 
      include: {
      model: Models.Product,
      required: true
    }})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createCart = (req, res) => {
    Models.Cart.findOrCreate({ 
      where: { userId: req.body.userId, active: true}, 
      defaults: { userId: req.body.userId, active: true}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const createCartItem = (req, res) => {

  let stock = 0;
  Models.Product.findByPk(req.body.productId)
  .then(data=>{
    console.log(`db: ${data.stock}`)
    stock = data.stock})
  .then(()=>{
    console.log(parseInt(req.body.qty));
    stock = stock - parseInt(req.body.qty)
    if (stock >=0){
      Models.Cartitem.create(req.body)
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
    }else{
      res.send({result: 406, msg: "Sorry! Not enough stock"})
    }
  })

}

const updateCart = (req, res) => {
  console.log(req.params.cartId)
  Models.Cart.update({active: false}, {where: {id:req.params.cartId}})
  .then((data)=>res.send({result: 200, data: data}))
  .catch(error => {throw error})
}

const updateCartItem = (req, res) => {
    Models.Cartitem.update(req.body, {where: {id:req.params.itemId}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteCartItem = (req, res) => {
    Models.Cartitem.destroy({
        where: {
          id: req.params.itemId
        }
      })
      .then((data)=>res.send({result: 200, data: data, msg: "Item is deleted successfully."}))
      .catch(error => {throw error})
}

const deleteCart = (data, res) => {
    Models.Cartitem.destroy({
        where: {
          cartId: data.params.cartId
        }
      })
      .catch(error => {throw error})

    Models.Cart.destroy({
        where: {
          id: data.params.cartId
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

const Controllers = {
  getCartId, getCartitmebyCartId, createCart, updateCart, updateCartItem, deleteCart,
    createCartItem, deleteCartItem
}

export default Controllers;