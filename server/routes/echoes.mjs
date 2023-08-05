import express from "express"

const router = express.Router()

router.post("/:id", (req, res) => {
    res.json({message: "POST a new echo"})
})

router.get("/:id", (req, res) => {
    res.json({message: "GET a specific echo"})
})

router.patch("/:id", (req, res) => {
    res.json({message: "UPDATE an echo"})
})

router.delete("/:id", (req, res) => {
    res.json({message: "DELETE an echo"})
})

export default router