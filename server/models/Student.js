import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    studentID: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    // Additional fields for student if needed
  });
const Student = mongoose.model('Student', studentSchema);
export default Student;