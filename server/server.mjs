import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/users.mjs"
import postRoutes from "./routes/posts.mjs"
import echoRoutes from "./routes/echoes.mjs"
import commentRoutes from "./routes/comments.mjs"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/echoes", echoRoutes)
app.use("/api/comments", commentRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to db")
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

