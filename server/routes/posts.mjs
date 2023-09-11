import express from "express"
import {createPost, getAllPosts, getUsersPosts, likePost, unLikePost} from "../controllers/postController.mjs"

const router = express.Router()

router.get("/getall", getAllPosts)

router.post("/newpost", createPost)

router.get("/userposts/:user", getUsersPosts)

router.post("/likepost", likePost)

router.post("/unlikepost", unLikePost)

export default router