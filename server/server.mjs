import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/users.mjs"
import postRoutes from "./routes/posts.mjs"
import commentRoutes from "./routes/comments.mjs"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors( {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
} ));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
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

