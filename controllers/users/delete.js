import User from "../../models/User.js";

const deleteOne = async (req, res, next) => {
    try {
        let user = req.body;
        let deleteUser = await User.deleteOne({_id:user._id});
        return res.status(200).json({response:deleteUser})
    } catch (error) {
        next(error)
    }
}

export {deleteOne}