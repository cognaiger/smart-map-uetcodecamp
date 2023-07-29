import mongoose, { Schema } from "mongoose";
const roomSchema = new mongoose.Schema({
    roomName : {type:String,required: true},
    floorNumber: { type: Number, required: true },
    buildingId: {type:mongoose.Schema.Types.ObjectId},
    
  });
  const  Room = mongoose.model('Room', roomSchema);
  export default Room;