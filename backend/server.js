import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import session from 'express-session';
import cors from 'cors';
import dbConnect from "./config/dbConnect.js";
import Routers from './routes/index.js';

const app = express();
dbConnect.connectMysql();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

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
    console.log(`Check working: ${req.session}`);
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

app.get("/", (req, res)=>{console.log(req.session.user); res.send("hello");});
//Router
app.use("/upload", express.static("upload"));
app.use("/api/auth", Routers.authRouter);
app.use("/api/user", requireAuth, Routers.userRouter);
app.use("/api/category", Routers.categoryRouter);
app.use("/api/product", Routers.productRouter);
app.use("/api/review", Routers.reviewRouter);
app.use("/api/cart", Routers.cartRouter);
app.use("/api/order", Routers.orderRouter);
app.use("/admin", requireAdmin, Routers.adminRouter);

const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});