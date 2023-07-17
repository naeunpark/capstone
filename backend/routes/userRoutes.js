import express from "express";
import Controllers from "../controllers/index.js";
const router = express.Router();

// router.get('/', (req, res)=>{
//     Controllers.userController.getUser(res);
// })

router.get('/:userId', (req, res)=>{
    Controllers.userController.getUserById(req, res);
})

router.put('/:id', (req, res) => {
    console.log(req.body);
    Controllers.userController.updateUser(req.body, res);
})

router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
})

export default router;