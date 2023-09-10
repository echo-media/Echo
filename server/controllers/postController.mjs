import Post from "../models/post.mjs"
import User from "../models/user.mjs"
import mongoose from "mongoose"

const getAllPosts = async (req, res) => {
    const allposts = await Post.find({})
    res.status(200).json(allposts)

}

const getUsersPosts = async (res, req) => {

}

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


export {getAllPosts, createPost};