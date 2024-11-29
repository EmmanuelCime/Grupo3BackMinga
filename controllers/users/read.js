import User from "../../models/User.js";

let allUsers = async(req, res, next) => {
    try {
        let all = await User.find();
        return res.status(200).json({users:all})
    } catch (error) {
        next(error)
    }
}

export {allUsers}