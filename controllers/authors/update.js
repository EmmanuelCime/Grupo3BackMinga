import Author from "../../models/Author.js"

const update = async (req, res, next) => {
    try {
        const {_id, ...updateBody} = req.body
        let update = await Author.findOneAndUpdate(
            {_id: _id}, updateBody, {new: true}
        )
        return res.status(200).json({success:true ,author: update})
    } catch (error) {
        next(error)
    }
}

export {update}