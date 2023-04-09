import express from "express"
import {getFeedPosts, getUserpost, likepost} from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js"
import User from "../models/User.js"
import Post from "../models/Post.js"

const router = express.Router()


router.get("/", verifyToken,getFeedPosts)
router.get("/:userId/posts",verifyToken,getUserpost)
router.patch("/:id/like", verifyToken,likepost)
// router.post("/newPost", verifyToken,(req,res)=>{
    router.post("/newPost",async (req,res)=>{
        try {
            const {userId, description, picturePath} = req.body
            const user = await User.findById(userId)
            const data = {
                userId,
                firstName:user.firstName,
                lastName: user.lastName,
                location: user.location,
                description,
                userPicturePath: user.picturePath,
                picturePath,
                likes:{},
                comments:[]
        }
            const newPost =new Post(data)
            await newPost.save()
            const post = await Post.find()
            res.send(data)
        } catch (error) {
            res.status(409).json({message:error.message})
            
        }
})

export default router