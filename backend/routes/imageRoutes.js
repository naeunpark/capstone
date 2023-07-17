import express from "express";
import Controllers from "../controllers/index.js";
const router = express.Router();

router.get('/:imageId', (req, res)=>{
    Controllers.imageController.getImageById(req, res);
})

router.post('/create', (req, res)=>{
    Controllers.imageController.createImage(req.body, res);
})

router.put('/:imageId', (req, res) => {
    console.log(req.body);
    Controllers.imageController.updateImage(req.body, res);
})

router.delete('/:imageId', (req, res) => {
    Controllers.imageController.deleteImage(req, res);
})

export default router;