import express from 'express'
import cors from 'cors'
import { test, registerUser, loginUser, getProfile, getAllProfiles } from '../controller/userController.js'



const userRouter = express.Router()

// // middleware
// userRouter.use(
//   cors({
//     credentials: true,
//     origin: 'http://localhost:3000/'
//   })
// )

userRouter.get('/', test)
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/profile', getProfile)
userRouter.get('/profiles', getAllProfiles)
export default userRouter