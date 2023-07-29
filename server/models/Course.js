import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    courseCode : {type: String,required: true},
    name: { type: String, required: true },
    teacherName: { type: String, required: true },
   
    
});
const Course = mongoose.model('Course', courseSchema);

export default Course;