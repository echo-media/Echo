import express from "express"

const router = express.Router()

router.post("/:id", (req, res) => {
    res.json({message: "POST a new comment"})
})

router.get("/:id", (req, res) => {
    res.json({message: "GET a specific comment"})
})

router.patch("/:id", (req, res) => {
    res.json({message: "UPDATE a comment"})
})

router.delete("/:id", (req, res) => {
    res.json({message: "DELETE a comment"})
})

export default router