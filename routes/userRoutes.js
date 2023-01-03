import express from 'express'
import User from '../models/userModel'
import { generateToken } from '../utils.js'

const userRouter = express.Router()

userRouter.post('/login', expressAsyncHandler(async (req, res) =>{
    const user = await User.findOne({password:req.body.password})
    if(user){
        res.send({
       name: user.name,
       checkedOut: user.checkedOut,
       token: generateToken
        })
        return;

    }
    res.status(401).send({message: 'invalid ISBN'})
}))