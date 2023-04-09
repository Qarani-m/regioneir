
import express from "express"
import bodyparser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import morgan from "morgan"
import helmet from "helmet" 
import path from "path"
import {fileURLToPath} from "url"
import {register} from "./controllers/auth.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import {createPost} from "./controllers/posts.js"
import { verifyToken } from "./middleware/auth.js"
import User from "./models/User.js"
import Post from "./models/Post.js"
import {users, posts} from "./data/index.js"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname);
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}) )
app.use(morgan("common"))
app.use(bodyparser.json({limit:"30mb",extended:true}))
app.use(bodyparser.urlencoded({limit:"30mb", extended:true}))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,"public/assets")))




app.use("/css", express.static(path.join(__dirname, "public/home/css")));
app.use("/images", express.static(path.join(__dirname, "public/home/images")));
app.use("/js", express.static(path.join(__dirname, "public/home/js")));

app.set("view engine", "ejs")
// db
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/assets")
    },
    filename:function(req,file,cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})
// files uploads
app.post("/auth/register",upload.single("picture"),register)
app.post("/posts",verifyToken,upload.single("picture"),createPost)
// 
// Routes
app.get("/login",(req,res)=>{
    res.render("auth/login")
})

app.get("/signup",(req,res)=>{
    res.render("auth/signup")
})





app.use("/auth",authRoutes)
app.use("/users",userRoutes)
app.use("/posts",postRoutes)

































// db
const port = process.env.PORT || 6061
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(port, () => {
        console.log(`Server started on ${port}`);
    });
    // User.insertMany(users)
    // Post.insertMany(posts)
}).catch((err)=>{
    console.log("did not connect");
})