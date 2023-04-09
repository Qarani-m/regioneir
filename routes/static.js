import express from "express"
import path from "path"
const router = express.Router()


const __dirname = "/home/martin/Desktop/server"
console.log("sss-->");
router.get("/auth/css",express.static(path.join(__dirname, "public/auth/css")))

export default router