import Post from "../models/post.mjs"
import User from "../models/user.mjs"
import mongoose from "mongoose"

const getAllPosts = async (req, res) => {
    const allposts = await Post.find({})
    res.status(200).json(allposts)

}

const getUsersPosts = async (req, res) => {
  try {
    const username = req.params.user; // Use req.query to get the username from the URL query parameters

    
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    
    const posts = await Post.find({ user: username });

    res.status(200).json({
      success: true,
      user: user.username,
      posts: posts,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createPost = async (req, res) => {
    const { user, title, content, isEcho } = req.body


    if (!title) {
        res.status(400).json({
            error: "You must have a title"
        })
    }
    else if (!content) {
        res.status(400).json({
            error: "You must have some content"
        })
    }
    else if (!await User.findOne({username: user})) {
        res.status(400).json({
            error: "Invalid user attempting to post"
        })
    }
    else{

        try {
            const newpost = await Post.create({ user, title, content, isEcho })

            res.status(201).json({ 
                success: true,
                newpost: newpost
            })
        } catch (error) {
            res.status(400).json( {
                success: false,
                error: error.message
            })
            
        }
    }
}

//define like post

const likePost = async (req, res) => {
  try {
    const { postid } = req.body 

    const post = Post.findOne({_id: postid})

    if (!post) {
      res.status(400).json({
        success: false,
        error: "post not found",
      })
    }

    post.likes += 1

    await post.save()

    res.status(200).json({
      sucess: true,
      user: post.user,
      likes: post.likes
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

//define unlike post 
const unLikePost = async (req, res ) => {
  try {
    const { postid } = req.body 

    const post = Post.findOne({_id: postid})

    if (!post) {
      res.status(400).json({
        success: false,
        error: "post not found",
      })
    }

    post.likes -= 1

    await post.save()

    res.status(200).json({
      sucess: true,
      user: post.user,
      likes: post.likes
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}


export {getAllPosts, createPost, getUsersPosts, likePost, unLikePost};