import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },  
    message:{
        type: String,
        required: true
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chats',
    }
}, {timestamps:true})