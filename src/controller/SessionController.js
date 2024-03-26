const {compare} = require("bcryptjs")
const knex = require("../database/knex")
const sign = require("jsonwebtoken/sign")
const authConfig = require("../configs/auth")
const AppError = require("../../utils/appError")

class SessionController{
    async createSession(req, res){
        const{email, password} = req.body

        const user = await knex("users").where({email}).first()
        if(!user){
            throw new AppError ("E-mail e/ou senha invalida", 400)
        }

        const passwordMatched = await compare(password, user.password)
        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha invalida", 400)
        }

        const {secret, expiresIn} = authConfig.jwt

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })
        res.status(201).json({token, user})

    }
}

module.exports = SessionController