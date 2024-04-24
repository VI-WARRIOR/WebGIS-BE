import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userStruct = {
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
};

const userSchema = new Schema(userStruct);

export const userModel = mongoose.model("User", userSchema);
