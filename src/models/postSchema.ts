import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  user: {
    type: String,
    required: [true, "Please provide a user"],
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
