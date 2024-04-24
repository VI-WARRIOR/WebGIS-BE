import { locationModel } from "../models/locationModel";
import { locationDto } from "./dto/location.create";

async function Createlocation(data: locationDto) {
  try {
    const location = new locationModel(data);
    await location.save();
    return location;
  } catch (error) {
    throw new Error("cannot create location");
  }
}

async function findOnelocation(id: string) {
  try {
    const location = await locationModel.findOne({ id });
    if (!location) {
      throw new Error("location not found");
    }
    return location;
  } catch (error: any) {
    throw new Error("cannot find location ");
  }
}

async function updatelocation(idlocation: string, location: locationDto) {
  try {
    const location = await locationModel.findOne({ id: idlocation });
    if (!location) {
      throw new Error("location not found");
    }
    await locationModel.findByIdAndUpdate({ id: idlocation }, { location });
    return "OK";
  } catch (error) {
    throw new Error("cannot update location ");
  }
}

async function deletedlocation(id: string) {
  try {
    await locationModel.findByIdAndUpdate({ id: id }, { isDeleted: true });
    return "OK";
  } catch (error: any) {
    throw new Error("cannot find location ");
  }
}

export { Createlocation, findOnelocation, updatelocation, deletedlocation };
