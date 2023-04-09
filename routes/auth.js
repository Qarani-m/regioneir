import express  from "express";
import {login} from "../controllers/auth.js"

const router  = express()
router.post("/",login)


export default router;