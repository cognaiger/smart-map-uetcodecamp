import mongoose, { Schema } from "mongoose";
const roomSchema = new mongoose.Schema({
    roomName : {type:String,required: true},
    roomNumber: { type: String, required: true },
    buildingId: {type:mongoose.Schema.Types.ObjectId}
   
  });
  const  Room = mongoose.model('Room', roomSchema);
  export default Room;