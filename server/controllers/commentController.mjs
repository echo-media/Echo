import Comment from "../models/comment.mjs"
import Post from "../models/post.mjs"
import User from "../models/user.mjs"

//define get all comments
const getAllComments = async (req, res) => {
    const allcomments = await Comment.find({})
    res.status(200).json(allcomments)
}

const getPostsComments = async (req, res) => {
  const { postid } = req.params

  const postscomments = await Comment.find({postid: postid})

  res.status(200).json({
    postid: postid,
    comments: postscomments
  })
}

//define post comments 
const createComment = async (req, res) => {
    const { username, postid, content } = req.body
  
    try {
      // Check if user and postid exist and are valid
      const existingUser = await User.findOne({ username: username })
      const existingPost = await Post.findOne({ _id: postid })
  
      if (!existingUser) {
        res.status(404).json({
          success: false,
          error: "User not found",
        })
      }
  
      if (!existingPost) {
        res.status(404).json({
          success: false,
          error: "Post not found",
        })
      }
  
      if (!content) {
        res.status(400).json({
          success: false,
          error: "You must provide comment content",
        })
      }
  
      // Create a new comment
      const newComment = await Comment.create({ user: username, postid, content })
      
      // Update the post's comments array
      existingPost.comments.push(newComment._id)
      await existingPost.save()
  
      res.status(201).json({
        success: true,
        details: newComment,
        post: existingPost,
      });
    } catch (error) {
     
      res.status(500).json({
        success: false,
        error: error.message
      })
    }
}

export {getAllComments, createComment, getPostsComments};

