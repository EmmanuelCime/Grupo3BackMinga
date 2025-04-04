const validator = (schema) => [
    (req, res, next)=> {
        console.log(req.body);
        
        const validation = schema.validate(req.body, {abortEarly:false})
        if (validation.error) {            
            return res.status(400).json({
                succes: false,
                message: validation.error.details.map(error => ({ [error.path[0]]: error.message}))
            })
        }
        return next()
    }
 ]

export default validator