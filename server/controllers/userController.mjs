import User from "../models/user.mjs"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"
import jwt from "jsonwebtoken"

//create token function 
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" })
}

//get all users
const getUsers = async (req, res) => {
  const users = await User.find({})
  res.status(201).json(users)
}

//get a single user
const getUser = async (req, res) => {
  const { username } = req.params
  const user = await User.findOne({username: username})

  if (!user) {
    res.status(404).json({error: "No such user!"})
  } else { 
    res.status(200).json(user)
  }
}

//create a new user 
const createUser = async (req, res) => {
  const { username, email, password } = req.body

  let emptyFields = []
  if (!username) {
    emptyFields.push("username")
  } 
  if (!email) {
    emptyFields.push("email")
  } 
  if (!password) {
    emptyFields.push("password")
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash( password, salt )

  
  
  if (emptyFields.length > 0) {
    res.status(400).json({error: "All fields must be filled!", emptyFields})
  }
  else if (await User.findOne({username: username})) { 
    res.status(400).json({error: "Username is taken!"})
  }
  else if (await User.findOne({email: email})) { 
    res.status(400).json({error: "Email is taken!"})
  } 
  else if (!validator.isEmail(email)) {
    res.status(400).json({error: "Invalid Email!"})
  }
  /*else if (!validator.isStrongPassword(password)) {
    res.status(400).json({error: "Weak password! Try adding special characters and numbers."})
  } */
  else {

    try {
      const user = await User.create({ username, email, password: hash })

      //create token 
      const token = createToken(user._id)

      res.status(201).json({user, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
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

//log into a user account
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let emptyFields = []

  if (!email) {
    emptyFields.push("email")
  } 
  if (!password) {
    emptyFields.push("password")
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "All fields must be filled!", emptyFields});
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    if (user.password) {
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(401).json({ error: "Password is incorrect" });
      }
    }

    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

//define new follower 

const newFollower = async (req, res) => {
  const { id } = req.body

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Invalid user, cannot update follow count"
      })
    }

    user.followCount += 1;

    await user.save();

    return res.status(200).json({
      success: true,
      user: user.username,
      followCount: user.followCount
    })

  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

//define unfollow 

const unFollow = async (req, res) => {
  const { id } = req.body

  try {
    const user = await User.findById(id)

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Invalid user, cannot update follow count"
      })
    }

    user.followCount -= 1;

    await user.save();

    return res.status(200).json({
      success: true,
      user: user.username,
      followCount: user.followCount
    })

  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

//define new following and unfollowing function IN PROGRESS...

const followUser = async (req, res) => {
  const { follower, toFollow } = req.body

  const followingUser = await User.findOne({ username: follower })
  const userToFollow = await User.findOne({ username: toFollow })

  if (!followingUser) {
    return res.status(404).json({
      success: false,
      error: "Request came from an unknown user",
    })
  }

  if (!userToFollow) {
    return res.status(404).json({
      success: false,
      error: "You are trying to follow an unknown user",
    });
  }

  
  followingUser.following.push(userToFollow)
  userToFollow.followers.push(followingUser)

  await followingUser.save()
  await userToFollow.save()

  return res.status(200).json({
    success: true,
    following: followingUser.following,
  })
};


export {getUser, getUsers, createUser, deleteUser, updateUser, loginUser, followUser};