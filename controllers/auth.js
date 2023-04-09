import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import Post from "../models/Post.js"
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
            picturePath,
            friends:0,
            location,
            occupation,
            viewedProfile:200,
            impressions:200

        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
            res.status(500).json({error:err.message})
    }
}
// login

export const login = async (req,res)=>{
    try {
        const{email,password} =req.body
        const user = await User.findOne({email:email})
        const post = await Post.find().sort({_id: -1})
        const post1 = await Post.findOne()





        if(!user) return res.status(400).json({msg:"User does not exist"})
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg:" invalid creds"})
        const token =jwt.sign({id:user.id}, process.env.SECRET)
        delete user.password
        res.render("home/home", {post, post1,user})
    } catch (err) {
        console.log("data");
        res.status(500).json({error:err.message})
    }
}

export default {login, register}



