import User from "../../models/User.js";

const update = async (req, res, next) => {
    try {
        let user = req.body
        let update = await User.updateOne(
            {_id: user._id}, {active: user.photo}
        )
        return res.status(200).json({response : update})
    } catch (error) {
        next(error)
    }
}

export {update}