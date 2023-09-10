import Comment from "../models/comment.mjs"

//define get all comments
const getAllComments = async (req, res) => {
    const allcomments = await Comment.find({})
    res.status(200).json(allcomments)
}

//define post comments 
const createComment = async (req, res) => {

    const { user, post, content } = req.body

    if (!content) {
        res.status(400).json({
            sucess: false,
            error: "You must have comment content"
        })
    } else {
        try{
            const newcomment = await Comment.create({user, post, content})

            res.status(201).json({
                sucess: true, 
                details: newcomment
            })
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

}

export {getAllComments, createComment};

