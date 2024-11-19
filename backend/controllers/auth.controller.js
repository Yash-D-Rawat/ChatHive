import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateAndSet from "../utils/generatejwt.js";

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        const passwordcheck = await bcrypt.compare(password, user?.password || "")
        if (!user || !passwordcheck) {
            return res.status(400).json({ error: "Incorrect username or password" })
        }
        generateAndSet(user._id, res)
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in login", error)
        res.status(500).json({ error: 'Error' })
    }
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

        if (newuser) {
            generateAndSet(newuser._id, res)
            return res.status(201).json(newuser)
        }
        else {
            res.status(500).json({ error: "Invalid user data" })
        }

    } catch (error) {
        console.log("Error in signup", error)
        res.status(404).json({ error: 'Error' })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge: 0})
        res.status(200).json({message: "logout successfull"})
    } catch (error) {
        console.log("Error in logout", error)
        res.status(404).json({ error: 'Error' })
    }
}