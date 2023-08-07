import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    edited: {
        type: Boolean,
        default: false,
    },
    likes: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)
export default Comment;