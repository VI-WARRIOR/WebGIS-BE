import mongoose from "mongoose";

const Schema = mongoose.Schema;

const coordinatesStruct = {
  longitude: {
    type: String,
  },
  latitude: {
    type: String,
  },
};

const locationStruct = {
  name: {
    type: String,
    require: true,
  },
  images: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: [coordinatesStruct],
    required: true,
  },
  isDeleted: {
    type: Boolean,
    require: false,
    default: false,
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

const locationSchema = new Schema(locationStruct);

export const locationModel = mongoose.model("Location", locationSchema);
