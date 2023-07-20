import express from "express";
import Controllers from "../controllers/index.js";
import upload from '../middlewares/imageProcessor.js';

const router = express.Router();

// router.get('/', (req, res)=>{
//     Controllers.userController.getUser(res);
// })

router.get('/:userId', (req, res)=>{
    Controllers.userController.getUserById(req, res);
})

router.put('/:id', upload.single('avatar') ,(req, res) => {
    console.log(req);
    Controllers.userController.updateUser(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
})

export default router;