import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});

// Use AutoIncrement plugin for the "id" field
userSchema.plugin(AutoIncrement(mongoose), { inc_field: "id" });

// Create a model for the user schema
const User = mongoose.model("user", userSchema);

export default User;