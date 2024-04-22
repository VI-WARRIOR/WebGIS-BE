import { roomModel } from "../models/roomModel";
import { RoomDto } from "./dto/room.create";

export async function CreateRoomController(data: RoomDto) {
  try {
    const room = new roomModel(data);
    await room.save();
    return room;
  } catch (error) {
    throw new Error("cannot create room");
  }
}
