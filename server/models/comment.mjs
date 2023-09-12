import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({

  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postid: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [{
    type: String,
    ref: "User"
  }]
}, {timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)
export default Comment;