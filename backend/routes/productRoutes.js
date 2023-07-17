import express from "express";
import Controllers from "../controllers/index.js";
const router = express.Router();

router.get('/', (req, res)=>{
    Controllers.productController.getProduct(res);
})

router.get('/:id', (req, res)=>{
    Controllers.productController.getSingleProduct(req, res);
})

router.post('/create', (req, res)=>{
    Controllers.productController.createProduct(req.body, res);
})

router.put('/:id', (req, res) => {
    console.log(req.body);
    Controllers.productController.updateProduct(req.body, res);
})

router.delete('/:id', (req, res) => {
    Controllers.productController.deleteProduct(req, res);
})

export default router;