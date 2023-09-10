import requireAuth from "../middleware/requireAuth.mjs"
import express from "express"
import {getAllComments, createComment} from "../controllers/commentController.mjs"

const router = express.Router()

router.use(requireAuth)

router.post("/newcomment", createComment)

router.get("/getallcomments", getAllComments)

router.patch("/:id", (req, res) => {
  res.json({message: "UPDATE a comment"})
})

router.delete("/:id", (req, res) => {
  res.json({message: "DELETE a comment"})
})

export default router