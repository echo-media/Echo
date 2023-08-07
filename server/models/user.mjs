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
    followers: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    }],
    following: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    }],
    posts: [{
        post: {
            type: Schema.Types.ObjectId,
            ref: "Post"
        },
    }],
    likedPosts: [{
        post: {
          type: Schema.Types.ObjectId,
          ref: "Post"
        },
    }],
    comments: [{
        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
    }],
    likedComments: [{
        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
    }]
}, {timestamps: true})

const User = mongoose.model("User", userSchema)
export default User;