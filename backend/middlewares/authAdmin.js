import jwt from "jsonwebtoken"
//admin authentication middleware

const authAdmin = async (req, req, next) =>{
    try {
        const {atoken} = req.headers
        if (!atoken){
            return res.json({succes:false,message:"Not Authorized Login Again"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}