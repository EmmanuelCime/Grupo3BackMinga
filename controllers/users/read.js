import User from "../../models/User.js"

let allUsers = async (req, res, next) => {
    try {
        let { name } = req.query
        console.log(name)
        let query = {}
        
        if (name) {
            query.name = {$regex: '^' + name, $options:"i"}
        }

        let all = await User.find(query)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
       next(error)
    }
}

export default allUsers