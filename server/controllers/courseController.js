import Room from "../models/Room.js";
import Schedule from "../models/Schedule.js";
import Building from "../models/Building.js";
import Course from "../models/Course.js";


export const getRoomAndBuildingbyCourseId = async (req, res) => {
    try {
        const course = await Course.findById(req.query.courseId)
        const allSchedules = await Schedule.find({ courseId: req.query.courseId });

        let result = [];
        const rooms = await Promise.all(allSchedules.map(async (e) => await Room.findOne({ _id: e.roomId })));
        const building = await Promise.all(rooms.map(async (e) => await Building.findOne({ _id: e.buildingId })));

        for (let i = 0; i < rooms.length; i++) {
            let tmp = {
                "beginTime" : allSchedules[i].beginTime + "h",
                "endTime" : allSchedules[i].endTime + "h",
                "day" : allSchedules[i].day,
                "courseCode": course.courseCode,
                "courseName": course.courseName,
                "teacher": course.teacherName,
                "roomName": rooms[i].roomName,
                "buildingName": building[i].name,
                "lat": building[i].lat, 
                "lon": building[i].lon,
                "id": building[i].id,
            }
            result.push(tmp);
        }
        res.status(200).json(result);

    } catch (err) {
        res.status(500).json(err.message);
    }
}
export const addNewCourse = async (req,res) => {
    console.log("hehee")
    try{

        const newCourse = await Course.create({
            courseCode:req.body.courseCode,
            courseName:req.body.courseName,
            teacherName:req.body.teacherName,
        })
        await newCourse.save()
        res.status(200).json(newCourse)
    }
    catch(err){
        res.status(500).json(err.message)

    }
}
