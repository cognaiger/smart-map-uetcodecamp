import mongoose from "mongoose";
const subjectTimeSchema = new mongoose.Schema({
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    subject: { type: String, required: true },
    dayOfWeek: { type: String, required: true },
    timeSlot: { type: String, required: true },
    // Other subject time-related properties
});

 const SubjectTime = mongoose.model('SubjectTime', subjectTimeSchema);
 export default SubjectTime;