import User from "../../models/User.js"

export default async(req, res, next) => {
    try {
        await User.findByIdAndUpdate(
            {_id: req.body._id}, {online: false}
        )

        return res.status(200).json(
            {
                success: true,
                message: "Disconnected"
            }
        )
    } catch (error) {
        next(error)
    }
}