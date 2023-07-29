import BuildingModel from '../models/Building.js'
export const search = async (req, res) => {
   
    const nameQuery = req.query.name;
    
    const regexPattern = new RegExp(nameQuery, 'i');
    const queryObject = {
        $or: [

            { name: { $regex: regexPattern } },
            { display_name: { $regex: regexPattern } }
        ]
    }

    
    try {
        const results = await BuildingModel.find(queryObject);
        
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}