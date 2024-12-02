import Chapter from "../../models/Chapter.js"

const updateChapter = async (req, res, next)=>{
    try {
      const {_id, ...updateBody} = req.body
      const update = await Chapter.findOneAndUpdate(
        {_id: _id},
        updateBody,
        {new:true}
      )
      return res.status(201).json({
        success: true,
        company: update
        })
    } catch (error) {      
      return next(error)
    }
  }
  export {updateChapter}