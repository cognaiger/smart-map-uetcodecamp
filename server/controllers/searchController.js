import BuildingModel from '../models/Building.js'
export const search = async (req,res)=>{
    const nameQuery = req.body.name;
    const regexPattern = new RegExp(nameQuery,'i');
    const queryObject = {name: {$regex: regexPattern}}
    console.log(queryObject)
    try{
        const results = await BuildingModel.find(queryObject);
        console.log(results)
        res.status(200).json(results);
    }
    catch(error){
        res.status(500).send(error.message)
    }
}