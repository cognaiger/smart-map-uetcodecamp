import Room from "../models/Room.js";

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