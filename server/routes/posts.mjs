import express from "express"
import {createPost, getAllPosts, getUsersPosts, likePost, deletePost, echoPost, getOnePost, sharePost} from "../controllers/postController.mjs"

const router = express.Router()

router.get("/getall", getAllPosts)

router.get("/getone/:id", getOnePost)

router.post("/newpost", createPost)

router.get("/userposts/:user", getUsersPosts)

router.post("/likepost", likePost)

router.delete("/deletepost", deletePost)

router.post("/echopost", echoPost)

router.post("/sharepost", sharePost)

export default router