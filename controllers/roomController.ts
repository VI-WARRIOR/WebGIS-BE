import { roomModel } from "../models/roomModel";
import { RoomDto } from "./dto/room.create";

async function CreateRoom(data: RoomDto) {
  try {
    const room = new roomModel(data);
    await room.save();
    return room;
  } catch (error) {
    throw new Error("cannot create room");
  }
}

async function findOneRoom(id: string) {
  try {
    const room = await roomModel.findOne({ id });
    if (!room) {
      throw new Error("room not found");
    }
    return room;
  } catch (error: any) {
    throw new Error("cannot find room ");
  }
}

async function updateRoom(idRoom: string, room: RoomDto) {
  try {
    const room = await roomModel.findOne({ id: idRoom });
    if (!room) {
      throw new Error("room not found");
    }
    await roomModel.findByIdAndUpdate({ id: idRoom }, { room });
    return "OK";
  } catch (error) {
    throw new Error("cannot update room ");
  }
}

async function deletedRoom(id: string) {
  try {
    await roomModel.findByIdAndUpdate({ id: id }, { isDeleted: true });
    return "OK";
  } catch (error: any) {
    throw new Error("cannot find room ");
  }
}



export { CreateRoom, findOneRoom, updateRoom, deletedRoom };
