import express from "express";
import Controllers from "../controllers/index.js";
const router = express.Router();

router.get('/', (req, res)=>{
    Controllers.categoryController.getCategory(res);
})

router.post('/create', (req, res)=>{
    Controllers.categoryController.createCategory(req.body, res);
})

router.put('/:id', (req, res) => {
    console.log(req.body);
    Controllers.categoryController.updateCategory(req.body, res);
})

router.delete('/:id', (req, res) => {
    Controllers.categoryController.deleteCategory(req, res);
})

export default router;