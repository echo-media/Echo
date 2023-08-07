import express from "express"
import {createUser, getUser, getUsers, deleteUser, updateUser} from "../controllers/userController.mjs"

const router = express.Router()

router.get("/", getUsers)

router.post("/", createUser)

router.get("/:username", getUser)

router.patch("/:id", updateUser)

router.delete("/delete/:id", deleteUser)

export default router