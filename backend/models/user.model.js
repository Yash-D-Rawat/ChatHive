import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female", "others"]
    },
    profilepic:{
        type: String,
        default: "https://tse4.mm.bing.net/th?id=OIP.5JbXzPVIhu6I6qsHF8JyUAHaHa&pid=Api&P=0&h=180"
    }
},{timestamps: true})

const userModel = mongoose.model("Users", userSchema)
export default userModel