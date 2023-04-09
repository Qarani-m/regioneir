import mongoose from "mongoose"

const PostSChema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true,
        min:3,
        max:50
    },
    lastName:{
        type:String,
        required:true,
        min:3,
        max:50
    },
    location: String,
   description:String,
   picturePath:String,
   userPicturePath:String,
   likes:{
        type:Map,
        of: Boolean
   },
   comments:{
    type:Array,
    default:[]
   }


},{timestamps:true})

const Post = mongoose.model("Post", PostSChema)

export default Post