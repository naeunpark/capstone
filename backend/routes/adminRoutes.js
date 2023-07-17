import express from "express";
import Controllers from "../controllers/index.js";
const router = express.Router();

router.post('/create', (req, res)=>{
    Controllers.adminController.createProduct(req.body, res);
})

router.put('/:id', (req, res) => {
    console.log(req.body);
    Controllers.adminController.updateProduct(req.body, res);
})

router.delete('/:id', (req, res) => {
    Controllers.adminController.deleteProduct(req, res);
})

export default router;