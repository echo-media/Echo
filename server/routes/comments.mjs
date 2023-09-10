import requireAuth from "../middleware/requireAuth.mjs"
import express from "express"
import {getAllComments, createComment} from "../controllers/commentController.mjs"

const router = express.Router()

<<<<<<< Updated upstream
router.use(requireAuth)

router.post("/:id", (req, res) => {
  res.json({message: "POST a new comment"})
})
=======
router.post("/newcomment", createComment)
>>>>>>> Stashed changes

router.get("/getallcomments", getAllComments)

router.patch("/:id", (req, res) => {
  res.json({message: "UPDATE a comment"})
})

router.delete("/:id", (req, res) => {
  res.json({message: "DELETE a comment"})
})

export default router