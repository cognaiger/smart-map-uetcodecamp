import mongoose from "mongoose";
const scheduleSchema = new mongoose.Schema({
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, required: true,ref: 'Course' },

    day: {type: Number, required: true},
    beginTime: {type: Number,required:true},
    endTime: {type:Number, required:true}
    // Other subject time-related properties
});

 const Schedule = mongoose.model('Schedule', scheduleSchema);
 export default Schedule;