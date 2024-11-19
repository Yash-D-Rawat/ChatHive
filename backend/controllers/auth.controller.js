import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const login = (req, res) => {
    console.log("login")
}

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmpassword, gender } = req.body;
        if (password !== confirmpassword) {
            return res.status(400).json({ error: "Passwords don't match." })
        }
        const user = await userModel.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists!" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedpass = await bcrypt.hash(password, salt)
        const newuser = await userModel.create({
            fullname: fullname,
            username: username,
            password: hashedpass,
            gender: gender
        })

        return res.status(201).json(newuser)
    } catch (error) {
        console.log("Error in signup",error)
        res.status(404).json({error: 'Error'})
    }
}

export const logout = (req, res) => {
    console.log("logout ")
}