import mongoose from "mongoose"

const Schema = mongoose.Schema

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
  edited: {
    type: Boolean,
    default: false,
  },
  isEcho: {
    type: Boolean,
    required: true,
  },
  echoedPost: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)
export default Post;