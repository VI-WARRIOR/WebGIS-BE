import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookingStruct = {
  // have resloved by staff
  status: {
    type: Boolean,
    required: false,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
};

const bookingSchema = new Schema(bookingStruct);

export const bookingModel = mongoose.model("Booking", bookingSchema);
