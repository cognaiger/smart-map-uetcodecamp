import BuildingModel from "../models/Building.js";

export const createBuilding = async (req,res) => {
    try{
        console.log(req.body);
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
    try{
        const allBuildings = await BuildingModel.find({});
        res.status(200).json(allBuildings);
    } catch(err){
        res.status(500).json(err.message);
    }
}