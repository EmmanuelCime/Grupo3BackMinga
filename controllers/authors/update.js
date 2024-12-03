import Author from "../../models/Author.js"

const update = async (req, res, next) => {
    try {
        let author = req.body
        let update = await Author.updateOne(
            {active: author.active}, {active: author.active}
        )
        return res.status(200).json({response : update})
    } catch (error) {
        next(error)
    }
}

export {update}