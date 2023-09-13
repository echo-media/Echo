import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  user: {
    type: String,
    ref: "User",
    required: true,
  },
  postid: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [{
    type: String,
    ref: "User"
  }],
}, {timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)
export default Comment;