import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    isgroupchat: {
        type: Boolean,
        required: true
    },
    chatname:{
        type: String,
        trim: true
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ],
    latestmessage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages"
    },
    groupadmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
}, {timestamps:true})

const chatmodel = mongoose.model("Chats", chatSchema)

export default chatmodel