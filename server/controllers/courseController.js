import Room from "../models/Room.js";
import Schedule from "../models/Schedule.js";
import Building from "../models/Building.js";
import Course from "../models/Course.js";


export const getRoomAndBuildingbyCourseId = async (req, res) => {
    try {
        const allSchedules = await Schedule.find({courseId: req.query.courseId});

        let result = [];
        const rooms = await Promise.all(allSchedules.map(async(e) => await Room.findOne({_id: e.roomId})));
        const building = await Promise.all(rooms.map(async(e) => await Building.findOne({_id: e.buildingId})));

        for (let i = 0; i < rooms.length; i++) {
            let tmp = {
                "roomName": rooms[i].roomName,
                "buildingName": building[i].display_name
            }
            result.push(tmp);
        }
        res.status(200).json(result);

    } catch (err) {
        res.status(500).json(err.message);
    }
}