import Manga from "../../models/Manga.js"

const updateManga = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateBody = req.body

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Manga ID is required for update."
      })
    }

    const updatedManga = await Manga.findOneAndUpdate(
      { _id: id },
      updateBody,
      { new: true }
    )

    if (!updatedManga) {
      return res.status(404).json({
        success: false,
        message: "Manga not found."
      })
    }

    return res.status(200).json({
      success: true,
      manga: updatedManga
    })
  } catch (error) {
    return next(error)
  }
}
export { updateManga }