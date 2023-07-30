import BuildingModel from '../models/Building.js'
import CourseModel from '../models/Course.js';
export const searchBuilding = async (req, res) => {

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
export const searchCourse = async (req, res) => {
    const nameQuery = req.query.name;
    console.log(nameQuery)

    const regexPattern = new RegExp(nameQuery, 'i');
    const queryObject = {
        $or: [

            { courseCode: { $regex: regexPattern } },
            { courseName: { $regex: regexPattern } }
        ]
    }
    try {
        const results = await CourseModel.find(queryObject);

        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}