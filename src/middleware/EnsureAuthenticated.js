const {verify} = require("jsonwebtoken")
const auth = require("../configs/auth")
const AppError = require("../../utils/appError")

function ensureAuthenticated(req, res, next){
    const authHeader = req.headers.authorization

    if(!authHeader){
        throw new AppError("JWT token não informado", 401)
    }

    const [, token] = authHeader.split(" ")

    try{
        const {sub: user_id} = verify(token, auth.jwt.secret)
        req.user = {
            id: Number(user_id)
        }
        next()
    } catch{
        throw new AppError ("JWT token inválido", 400)
    }
    
}

module.exports = ensureAuthenticated