import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import upload from '../middlewares/imageProcessor.js';
import Controllers from "../controllers/index.js";

const router = express.Router();

// multer image file process
// const upload = multer({ dest: 'uploads/' });

router.post('/signin', (req, res)=>{
    Controllers.authController.signIn(req, res);
})

router.get('/signout', (req, res)=>{
    Controllers.authController.signOut(req, res);
})

router.post('/signup', upload.single('avatar'), (req, res)=>{
    Controllers.authController.singUp(req, res);
})

export default router;