import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  // Other booking-related fields
});
const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;