import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
    title: String,
    description: String,
    url: String,
}, { timestamps: true });

const messageSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "full name"]
    },
    email: {
        type: String,
        required: [true, "email address"]
    },
    message: {
        type: String,
        required: [true, "message"]
    },
}, { timestamps: true });

const Post = models.Post || model('Post', postSchema);
const Message = models.Message || model('Message', messageSchema);

export { Post, Message };
