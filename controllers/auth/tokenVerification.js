
const tokenVerification = (req, res, next) =>{
    return res.status(200).json({
        user: req.user
    })
}
export default tokenVerification