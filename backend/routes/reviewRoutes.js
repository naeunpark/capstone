import express from "express";
import Controllers from "../controllers/index.js";
const router = express.Router();

router.get('/:productId', (req, res)=>{
    Controllers.reviewController.getReviewByProductId(req, res);
})

router.post('/create', (req, res)=>{
    Controllers.reviewController.createReview(req.body, res);
})

router.put('/:id', (req, res) => {
    console.log(req.body);
    Controllers.reviewController.updateReview(req.body, res);
})

router.delete('/:id', (req, res) => {
    Controllers.reviewController.deleteReview(req, res);
})

export default router;