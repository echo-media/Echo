import express from "express"
import createPost from "../controllers/postController.mjs"

const router = express.Router()

router.post("/", createPost)

router.get("/:id", (req, res) => {
  res.json({message: "GET a specific post"})
})

router.patch("/:id", (req, res) => {
  res.json({message: "UPDATE a post"})
})

router.delete("/:id", (req, res) => {
  res.json({message: "DELETE a post"})
})

export default router