import express from "express"
import {createUser, getUser, getUsers, deleteUser, updateUser, loginUser, newFollower, unFollow} from "../controllers/userController.mjs"

const router = express.Router()

router.get("/", getUsers)

router.post("/signup", createUser)

router.get("/:username", getUser)

router.patch("/:id", updateUser)

router.delete("/delete/:id", deleteUser)

router.post("/login", loginUser)

router.post("/follow", newFollower)

router.post("/unfollow", unFollow)

export default router