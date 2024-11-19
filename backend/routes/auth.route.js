import express from 'express'
import { login, logout, signup } from '../controllers/auth.controller.js'

const authroute = express.Router()

authroute.post("/login", login)
authroute.post("/signup", signup)
authroute.post("/logout", logout)


export default authroute;