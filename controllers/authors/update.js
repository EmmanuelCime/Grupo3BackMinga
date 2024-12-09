import Author from "../../models/Author.js"

export const update = async (req, res, next) => {
    try {
        const {...updateBody} = req.body
        let update = await Author.findOneAndUpdate(
            {_id: updateBody._id}, updateBody, {new: true}
        )
        return res.status(200).json({success:true ,author: update})
    } catch (error) {
        next(error)
    }
}