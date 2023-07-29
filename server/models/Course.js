import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    teacherName: { type: String, required: true },
    // Other course-related properties
});
const Course = mongoose.model('Course', courseSchema);

export default Course;