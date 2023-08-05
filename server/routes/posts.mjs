import express from "express"

const router = express.Router()

router.post("/:id", (req, res) => {
    res.json({message: "POST a new post"})
})

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