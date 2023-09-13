import requireAuth from "../middleware/requireAuth.mjs"
import express from "express"
import {getAllComments, createComment, getPostsComments, likeComment} from "../controllers/commentController.mjs"

const router = express.Router()

router.post("/newcomment", createComment)

router.get("/getallcomments", getAllComments)

router.get("/getpostscomments/:postid", getPostsComments)

router.post("/likecomment", likeComment)

router.delete("/:id", (req, res) => {
  res.json({message: "DELETE a comment"})
})

export default router