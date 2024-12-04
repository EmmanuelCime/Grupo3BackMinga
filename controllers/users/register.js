import User from "../../models/User.js";

let create = async(req, res, next) => {
    try {
        let user =  req.body;
        user.role = 0;
        user.online = false;
        
        let newUser = await User.create(user);
        return res.status(201).json({response: newUser})
    } catch (error) {
        next(error);
    }
}


export {create}