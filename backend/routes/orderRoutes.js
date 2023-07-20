import express from "express";
import Controllers from "../controllers/index.js";
const router = express.Router();

router.get('/:userId', (req, res)=>{
    Controllers.orderController.getOrder(req, res);
})

// router.get('/:orderId', (req, res)=>{
//     Controllers.orderController.getOrderitmebyOrderId(req, res);
// })

router.post('/create', (req, res)=>{
    Controllers.orderController.createOrder(req, res);
})

router.post('/item/create', (req, res)=>{
    Controllers.orderController.createOrderItem(req, res);
})

router.put('/:userId/:orderId', (req, res) => {
    Controllers.orderController.updateOrder(req, res);
})

router.put('/item/:itemId', (req, res) => {
    Controllers.orderController.updateOrderItem(req, res);
})

router.delete('/:userId/:orderId', (req, res) => {
    Controllers.orderController.deleteOrder(req, res);
})

router.delete('/item/:itemId', (req, res) => {
    Controllers.orderController.deleteOrderItem(req, res);
})

export default router;