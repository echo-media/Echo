import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.json({message: "GET all users"})
})

router.post("/:id", (req, res) => {
    res.json({message: "POST a new user"})
})

router.get("/:id", (req, res) => {
    res.json({message: "GET a specific user"})
})

router.patch("/:id", (req, res) => {
    res.json({message: "UPDATE a user"})
})

router.delete("/:id", (req, res) => {
    res.json({message: "DELETE a user"})
})

export default router