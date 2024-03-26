const AppError = require("../../utils/appError")
const knex = require("../database/knex")
const {hash} = require("bcryptjs")

class UserController{
    async createUser(req, res){
        const {name, email, password} = req.body

        const checkUserExist = await knex("users").where({email})

        if(checkUserExist.length > 0){
            throw new AppError("Esse e-mail ja está em uso")
        }

        const hashedPassword = await hash(password, 8)

        await knex("users").insert({name, email, password: hashedPassword})
        
        res.status(200).json()
    }

    async listUsers(req, res){
        const users = await knex ("users")
        res.status(200).json(users)
    }

    async listUsersById(req, res){
        const {id} = req.params
        const user = await knex ("users").where({id})

        res.status(200).json(user)
    }

    async updateUser(req, res){
        const {id} = req.params
        const {name, email, password} = req.body

        await knex("users").where({id}).update({name, email, password})

        res.status(201).json("Usuario atualizado")
    } 

    async deleteUser(req, res){
        const {id} = req.params
        await knex("users").where({id}).delete()

        res.status(201).json("Usuário deletado")
    }
 

    
}

module.exports = UserController