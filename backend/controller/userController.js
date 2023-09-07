import userModel from '../models/userModel.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'
import jwt from 'jsonwebtoken';


export const test = (req,res) => {
  res.json('test is working')
}

// Register Endpoint
export const registerUser = async (req,res) => {
  try {
    // const {vorName,nachName, email, password} = req.body;
    const {vorName, nachName,strasse,hausNummer,postleitzahl,ort,telefon, email, password} = req.body;
    // Check if name was entered
    if(!vorName && nachName) {
      return res.json({
        error: 'Bitte vollständigen Name eingeben'
      })
    }



    // if password is good
    if(!password || password.length < 6) {
      return res.json({
        error: 'Password is required and should be at least 6 characters long'
      })
    };

    // Check Email
    const exist = await userModel.findOne({email})
    if(exist){
      return res.json({
        error: 'Email is taken already'
      })
    }

    const hashedPassword = await hashPassword(password)
    // Create user in database
    const user = await userModel.create({
      vorName,
      nachName,
      strasse,
      hausNummer,
      postleitzahl,
      ort,
      telefon,
      email,
      password: hashedPassword,
    })

    return res.json(user)

  } catch (error) {
    console.log(error);
  }
}

// Login Endpoint
export const loginUser = async (req,res) => {
  try {
    const { email, password} = req.body

    // Check if User exists
    const user = await userModel.findOne({email});
    if(!user) {
      return res.json({
        error: 'No user found'
      })
    }

    // Check if passwords match
    const match = await comparePassword(password, user.password)
    if(match) {
      jwt.sign({email: user.email, id: user._id, name:user.name}, process.env.JWT_SECRET, {}, (err, token) => {
        if(err) throw err;
        res.cookie('token', token).json(user)
      })
    }
    if(!match) {
      res.json({
        error: 'Password do not match'
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const getProfile = (req,res) => {
  const{token} = req.cookies
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if(err) throw err;
      res.json(user)
    })
  } else {
    res.json(null)
  }
}

// Get all User
export const getAllProfiles = async (req, res) => {
  try {
    const users = await userModel.find()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.json()
  }
}