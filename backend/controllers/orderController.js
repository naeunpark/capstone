import Models from "../models/index.js";
import { Op } from "sequelize";

const getOrder = (req, res) => {
  const userId = req.params.userId;
  console.log(req.params)
  Models.Orders.findAll({where:{
    userId: userId
  }})
  .then((data)=>{
  res.send({result:200, data:data})
  })
  .catch(error => {
    throw error
  })
}

//[Op.and]: [{ a: 5 }, { b: 6 }],
const getOrderitmebyOrderId = (req, res) => {
  let orderDetail = "";

    Models.Orders.findByPk(req.params.orderId)
    .then((data)=>{
      orderDetail = data;
    })
    .catch(error => {
      throw error
    })

    Models.Orderitem.findAll({where: {[Op.and]: [{orderId:req.params.orderId},{userId:req.body.userId}]}})
    .then((data) => {
        res.send({result: 200, orderDetail: orderDetail, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createOrder = (req, res) => {
    Models.Orders.create(req.body)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const createOrderItem = (req, res) => {
    Models.Orderitem.create(req.body)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateOrderItem = (req, res) => {
    Models.Orderitem.update(req.body, {where: {id:req.params.itemId}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateOrder = (req, res) => {
  Models.Orders.update(req.body, {where: {id:req.params.orderId}})
  .then((data)=>res.send({result: 200, data: data}))
  .catch(error => {throw error})
}

const deleteOrderItem = (data, res) => {
    Models.Orderitem.destroy({
        where: {
          id: data.params.itemId
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

const deleteOrder = (data, res) => {
    Models.Orderitem.destroy({
        where: {
          orderId: data.params.orderId
        }
      })
      .catch(error => {throw error})

    Models.Orders.destroy({
        where: {
          id: data.params.orderId
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

const Controllers = {
  getOrder, getOrderitmebyOrderId, createOrder, createOrderItem, updateOrder, updateOrderItem,
    deleteOrder, deleteOrderItem
}

export default Controllers;