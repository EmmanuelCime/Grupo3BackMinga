import Manga from "../../models/Manga.js"

const updateManga = async (req, res, next)=>{
    try {
      const { id } = req.params
      const updateBody = req.body
      const update = await Manga.findOneAndUpdate(
        {_id: id},
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