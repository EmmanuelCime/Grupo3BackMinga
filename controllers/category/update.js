import Category from "../../models/Category.js"

const updateCategory = async (req, res, next)=>{
    try {
      const {_id, ...updateBody} = req.body
      const update = await Category.findOneAndUpdate(
        {_id: _id},
        updateBody,
        {new:true}
      )
      return res.status(201).json({
        success: true,
        category: update
        })
    } catch (error) {      
      return next(error)
    }
  }
  export {updateCategory}