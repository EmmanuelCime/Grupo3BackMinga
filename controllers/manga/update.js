import Manga from "../../models/Manga.js"

const updateManga = async (req, res, next)=>{
    try {
      const {_id, ...updateBody} = req.body
      const update = await Manga.findOneAndUpdate(
        {_id: _id},
        updateBody,
        {new:true}
      )
      return res.status(201).json({
        success: true,
        manga: update
        })
    } catch (error) {      
      return next(error)
    }
  }
  export {updateManga}