import mongoose from "mongoose";
const subjectTimeSchema = new mongoose.Schema({
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, required: true,ref: 'Course' },

    date: { type: Date, required: true },
    beginTime: {type: String,required:true},
    endTime: {type:String, required:true}
    // Other subject time-related properties
});

 const SubjectTime = mongoose.model('SubjectTime', subjectTimeSchema);
 export default SubjectTime;