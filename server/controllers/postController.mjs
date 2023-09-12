import Post from "../models/post.mjs"
import User from "../models/user.mjs"
import mongoose from "mongoose"

const getAllPosts = async (req, res) => {
    const allposts = await Post.find({})
    res.status(200).json(allposts)

}

const getOnePost = async (req, res) => {
  const { id } = req.params; // Access the id parameter

  try {
    const post = await Post.findOne({ _id: id }); // Use _id to search by the post's unique identifier

    if (!post) {
      res.status(404).json({ error: "No such post!" });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    // Handle any potential errors, e.g., database connection issues
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUsersPosts = async (req, res) => {
  try {
    const username = req.params.user; 

    
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
    const { postid, userid } = req.body 

    const post = await Post.findOne({_id: postid})
    const user = await User.findOne({_id: userid})

    if (!post) {
      res.status(400).json({
        success: false,
        error: "post not found",
      })
    }
    
    if (!user) {
      res.status(400).json({
        success: false,
        error: "user not found",
      })
    }

    if (post.like.includes(user.username)){
      post.likes = post.likes.filter(id => id != user.username)

      await post.save()
    } else {
      post.likes.push(user.username)

      await post.save()

    }

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


//define delete post 

const deletePost = async (req, res) => {
  try {
    const { postid } = req.body

    const post = await Post.findOneAndDelete({_id: postid})

    res.status(200).json({
      sucess:true,
      deletedpost: post,
    })

  } catch (error) {
    res.status(400).json({
      sucess: false,

    })

  }
}


export {getAllPosts, createPost, getUsersPosts, likePost, deletePost, getOnePost};