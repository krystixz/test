import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
