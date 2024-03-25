const knex = require("../database/knex")

async function checkUserExist(req, res, next){
    const {id} = req.params
    const user = await knex("users").where({id})

    if(user.length === 0){
        return res.status(400).json("Usuario não encontrado")
    }
    next()
}

module.exports = checkUserExist