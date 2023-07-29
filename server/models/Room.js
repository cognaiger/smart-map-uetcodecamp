import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
    floorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Floor', required: true },
    roomNumber: { type: String, required: true },
    bookedTimeSlots: [{ type: String }], // Optional field to track booked time slots
    // Other room-related properties
  });
  const  Room = mongoose.model('Room', roomSchema);
  export default Room;