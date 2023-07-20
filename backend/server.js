import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import session from 'express-session';
import cors from 'cors';
import dbConnect from "./config/dbConnect.js";
import Routers from './routes/index.js';
import { Route } from 'react-router-dom';

const app = express();
app.use(express.json());

dbConnect.connectMysql();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

app.use(cors(corsOptions));

// Session setting
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: parseInt(process.env.SESSION_MAX_AGE)
    }
}))

// middleware to test if authenticated
const requireAuth = (req, res, next) => {
    const {user} = req.session;
    console.log('Session ID:', req.session.id)
    if(!user){
        return res.status(401).json({message: 'Unauthorized'})
    }
    next();
}
const requireAdmin = (req, res, next) => {
    const {user} = req.session;
    if(user.usertype !== 'admin'){
        return res.status(401).json({message: 'Insufficient role'})
    }
    next();
}

//Router
app.use("/upload", express.static("upload"));
app.use("/api/auth", Routers.authRouter);
app.use("/api/user", requireAuth, Routers.userRouter);
app.use("/api/category", Routers.categoryRouter);
app.use("/api/product", Routers.productRouter);
app.use("/api/review", requireAuth, Routers.reviewRouter);
app.use("/api/cart", Routers.cartRouter);
app.use("/api/order", requireAuth, Routers.orderRouter);
app.use("/admin", Routers.adminRouter);

const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});