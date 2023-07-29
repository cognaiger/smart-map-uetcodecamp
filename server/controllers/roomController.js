import mongoose from "mongoose";
import Room from "../models/Room.js";
import Schedule from "../models/Schedule.js";
import Course from "../models/Course.js";

export const createRoom = async (req, res) => {
    try {
      const room = await Room.findOne({ roomName: req.body.roomName}, {buildingId: req.body.buildingId})
        .lean()
        .exec();
      if (room) {
        res.json("exist");
        return;
      } else {
        const newRoom = await Room.create({
          roomName: req.body.roomName,
          floorNumber: req.body.floorNumber,
          buildingId: req.body.buildingId,
        });
        await newRoom.save();
        res.status(200).json("notexist");
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

export const getRoomSchedule = async (req, res) => {
    try {
        const allSchedules = await Schedule.find({roomId: req.query.roomId});


        let result = [];
        const courses = await Promise.all(allSchedules.map(async(e) => await Course.find({_id: e.courseId})));
        
        for (let i = 0; i < allSchedules.length; i++) {
          let obj = allSchedules[i];
          let course = courses[i][0];
            let tmp = {
                "name": course.courseName,
                "teacherName": course.teacherName,
                "date": obj.date,
                "beginTime": obj.beginTime,
                "endTime": obj.endTime
            }
            result.push(tmp);
        }
        res.status(200).json(result);

    } catch (err) {
        res.status(500).json(err.message);
    }
}