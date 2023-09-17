import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
      required: true,
  },
  followers: [{
    username: {
      type: String,
      ref: "User",
    },
  }],
  following: [{
    username: {
      type: String,
      ref: "User",
    },
  }],
  posts: [{
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
}, {timestamps: true})



const User = mongoose.model("User", userSchema)
export default User;  