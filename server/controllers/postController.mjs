import Post from "../models/post.mjs"
import mongoose from "mongoose"

const createPost = async (req, res) => {
    const { user, title, content, isEcho } = req.body

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

const getPost = async (res, req) => {

}

export default createPost;