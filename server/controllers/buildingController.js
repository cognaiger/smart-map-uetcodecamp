import BuildingModel from "../models/Building.js";

export const createBuilding = async (req,res) => {
    try{

        const newBuilding = await BuildingModel.create({
            name: req.body.name,
        })
        await newBuilding.save();

        return res.status(200).json(newBuilding);

    }
    catch(err){
        return res.status(500).json(err.message)
    }

}