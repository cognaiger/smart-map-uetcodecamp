import mongoose from "mongoose";
import Room from "../models/Room.js";
import Schedule from "../models/Schedule.js";
import Course from "../models/Course.js";
import Building from "../models/Building.js";

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
          type: req.body.type
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
                "id": course.id,
                "courseCode": course.courseCode,
                "name": course.courseName,
                "teacherName": course.teacherName,
                "day": obj.day,
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

export const getEmptyRoom = async (req, res) => {
  try {
      const scheduleInDay = await Schedule.find({day: (Number)(req.query.day)});
      const allRooms = await Room.find({type: 1});
      let scheduleInTime = [];
      for (let i = 0; i < scheduleInDay.length; i++) {
        if (scheduleInDay[i].beginTime >= (Number)(req.query.endTime) || 
          scheduleInDay[i].endTime <= (Number)(req.query.beginTime)) {
            continue;
          }
          scheduleInTime.push(scheduleInDay[i]);
      }
      const roomInUse = await Promise.all(scheduleInTime.map(async(e) => await Room.findById(e.roomId)));
      const roomInUsee = roomInUse.flat(1);
      let roomOk = [];
      for (let i = 0; i < allRooms.length; i++) {
          let check = true;
          for(let j=0;j<roomInUsee.length;j++){
            if(allRooms[i]._id.toString() === roomInUsee[j]._id.toString()) {
                check = false;
                break;
            }
          }
          if (check) roomOk.push(allRooms[i]);
      }
      const buildings = await Promise.all(roomOk.map(async(e) => await Building.findById(e.buildingId)));
      let result = [];
      for (let i = 0; i < roomOk.length; i++) {
        let tmp = {
          "name": roomOk[i].roomName,
          "building": buildings[i].name,
          "lat": buildings[i].lat,
          "lon": buildings[i].lon
        }
        result.push(tmp);
      }
      res.status(200).json(result);

  } catch (err) {
      res.status(500).json(err.message);
  }
}