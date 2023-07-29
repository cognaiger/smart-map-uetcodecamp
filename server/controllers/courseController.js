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
    const roomId = req.query.roomId;
    if(!roomId){
        try{
            const allCourses = await CourseModel.find({});
            res.status(200).json(allCourses);
        } catch(err){
            res.status(500).json(err.message);
        }
    }
    else{
        try{
            const courseInARoom = await CourseModel.find({roomId:roomId})
            res.status(200).json(courseInARoom)
        }
        catch(err){
            res.status(500).json(err.message)
        }
    }

}
