import express from "express";
import Controllers from "../controllers/index.js";
const router = express.Router();

router.get('/userid/:userId', (req, res)=>{
    Controllers.cartController.getCartId(req, res);
})

router.get('/:cartId', (req, res)=>{
    Controllers.cartController.getCartitmebyCartId(req, res);
})

router.post('/create', (req, res)=>{
    Controllers.cartController.createCart(req, res);
})

router.post('/item/create', (req, res)=>{
    Controllers.cartController.createCartItem(req, res);
})

router.put('/:cartId', (req, res)=>{
    Controllers.cartController.updateCart(req, res);
})

router.put('/item/:itemId', (req, res) => {
    Controllers.cartController.updateCartItem(req, res);
})

router.delete('/:cartId', (req, res) => {
    Controllers.cartController.deleteCart(req, res);
})

router.delete('/item/:itemId', (req, res) => {
    Controllers.cartController.deleteCartItem(req, res);
})

export default router;