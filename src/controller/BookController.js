const knex = require("../database/knex")

class BookController{
    async createBook(req, res){
        const {title, author, category, pageNumber} = req.body

        const book = {
            title,
            author,
            category,
            pageNumber    
        }
        await knex("books").insert({title, author, category, pageNumber})

        res.status(200).json(book)
    }
    async listBooks(req, res){
        const books = await knex("books")
        res.status(200).json(books)
    }

    async listBooksById(req, res){
        const {id} = req.params
        const book = await knex("books").where({id})

        res.status(200).json(book)
    }
    async updateBook(req, res){
        const {id} = req.params
        const {title, author, category, pageNumber} = req.body

        await knex("books").where({id}).update({title, author, category, pageNumber})

        res.status(201).json("Livro Atualizado")
    }
    async deleteBook(req, res){
        const {id} = req.params
        
        await knex("books").where({id}).delete()

        res.status(201).json("Livro deletado")
    }

}

module.exports = BookController