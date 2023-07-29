import BuildingModel from "../models/Building.js";
import Room from "../models/Room.js";

export const createBuilding = async (req,res) => {
    try{
        
        const newBuilding = await BuildingModel.create({
            name: req.body.name,
            lat:req.body.lat,
            lon:req.body.lon,
            display_name : req.body.display_name,
        })
        await newBuilding.save();

        return res.status(200).json(newBuilding);

    }
    catch(err){
        return res.status(500).json(err.message)
    }

}
export const getAllBuildings = async (req,res) => {
    const roomId = req.query.roomId;
    
    try{
        const allBuildings = await BuildingModel.find({});
        res.status(200).json(allBuildings);
    } catch(err){
        res.status(500).json(err.message);
    }
}
export const getBuildingById = async (req,res) => {
    const buildingId = req.body.buildingId;
    try{
  
      const findedBuilding = await BuildingModel.findOne({_id:buildingId})
      res.status(200).json(findedBuilding);
    }
    catch(err){
      res.status(500).json(err.message)
    }
    
  }
export const getBuildingByRoomId = async (req,res) => {
    const room = Room.find({_id: req.body.roomId});
    let buildingId = room.buildingId;
    try{
      const findedBuilding = await BuildingModel.findOne({_id:buildingId})
      res.status(200).json(findedBuilding);
    }
    catch(err){
      res.status(500).json(err.message)
    }
}