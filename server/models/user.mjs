import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    /* 
    need to add:
    - followers
    - following
    - posts (and echoes in one)
    - comments
    - liked comments
    - liked posts (maybe "liked" with type comment or post)
    */
})