import Company from "../../models/Company.js";

const updateCompany = async (req, res, next)=>{
    try {
      const {_id, ...updateBody} = req.body
      const update = await Company.findOneAndUpdate(
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
  export {updateCompany}