import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locationStruct = {
  longitude: {
    type: "string",
  },
  latitude: {
    type: "string",
  },
};

const roomStruct = {
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    readonly: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: [locationStruct],
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  rate: {
    type: Number,
    require: true,
  },
  currency: {
    type: String,
    require: false,
    default: "VND",
  },
  policy: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
};

const roomSchema = new Schema(roomStruct);

export const roomModel = mongoose.model("Room", roomSchema);
