import User from "../../models/User.js";

let create = async(req, res, next) => {
    try {
        let user =  req.body;
        user.role = 0;
        user.online = true;
        
        let newUser = (await User.create(user)).lean()
        const {password, ...dataUser} = newUser
        return res.status(201).json({
            user: dataUser,
            token: req.token

        })
    } catch (error) {
        next(error);
    }
}


export {create}