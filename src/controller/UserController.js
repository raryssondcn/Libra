const knex = require("../database/knex")

class UserController{
    async createUser(req, res){
        const {name, email, fone} = req.body

        const user = {
            name,
            email,
            fone
        }
        await knex("users").insert({name, email, fone})
        
        res.status(200).json(user)
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
   /*  async lendBook(req, res){
        const {id} = req.params
        const {bookId} = req.params
        await knex("users").where({id})
        await knex("books").where({id: bookId}).update({available: false})


        res.status(201).json("Emprestado")
    }
    async returnBook(req, res){
        const {id} = req.params
        const {bookId} = req.params
        await knex("users").where({id})
        await knex("books").where({id: bookId}).update({available: true})

        res.status(201).json("Devolvido")
    } */

    
}

module.exports = UserController