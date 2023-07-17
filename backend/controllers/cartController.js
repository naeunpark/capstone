import Models from "../models/index.js";
import { Op } from "sequelize";

//[Op.and]: [{ a: 5 }, { b: 6 }],
const getCartitmebyCartId = (req, res) => {
    Models.Cartitem.findAll({where: {[Op.and]: [{cartId:req.params.cartId},{userId:req.body.userId}]}})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createCart = (data, res) => {
    Models.Cart.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const createCartItem = (data, res) => {
    Models.Cartitem.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateCartItem = (req, res) => {
    Models.Cartitem.update(req.body, {where: {id:req.params.itemId}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteCartItem = (data, res) => {
    Models.Cartitem.destroy({
        where: {
          id: data.params.itemId
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
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
    getCartitmebyCartId, createCart, updateCartItem, deleteCart,
    createCartItem, deleteCartItem
}

export default Controllers;