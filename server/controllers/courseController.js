import CourseModel from "../models/Course.js" 
export const createCourse = async (req,res) => {
    try{
        const newCourse = await CourseModel.create({
            courseCode: req.body.courseCode,
            courseName: req.body.courseName,
            teacherName: req.body.teacherName
        })
         await newCourse.save();
         res.status(200).json(newCourse);
    }
    catch (err){
        res.status(500).json(err.message)
    }
}
export const getAllCourses = async (req,res) => {
    try{
        const allBuildings = await CourseModel.find({});
        res.status(200).json(allBuildings);
    } catch(err){
        res.status(500).json(err.message);
    }
}