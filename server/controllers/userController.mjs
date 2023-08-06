import User from "../models/user.mjs"
import mongoose from "mongoose"

//get all users
const getUsers = async (req, res) => {
    const users = await User.find({})
    res.status(201).json(users)
}

//get a single user
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user!"})
    }

    const user = await User.findById(id)

    if ( !user ) {
        res.status(404).json({error: "No such user!"})
    }
    res.status(200).json(user)
}

//create a new user 
const createUser = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const newuser = await User.create({ username, email, password })
        res.status(201).json(newuser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


//delete a user
const deleteUser = async (res, req) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user!"})
    }

    const user = await User.findByIdAndDelete({_id: id})

    if (!user) {
        return res.status(404).json({error: "No such user!"})
    }

    res.status(200).json(user)
}
//update a user
const updateUser = async (res, req) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user!"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({error: "No such user!"})
    }

    res.status(200).json(user)


}

export {getUser, getUsers, createUser, deleteUser, updateUser};