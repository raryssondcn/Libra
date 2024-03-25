const knex = require("../database/knex")

class LoanController{
    async borrowBooks(req, res){
        const {user_id, book_id} = req.params

        const user = await knex("users").where({id: user_id}).first()
        const book = await knex("books").where({id: book_id}).first()

        if(!user){
            return res.status(400).json("Usuario não encontrado")
        }

        if(!book){
            return res.status(400).json("Livro não encontrado")
        }

        await knex("loans").insert({user_id, book_id})
        await knex("books").where({id: book_id}).update({available: false})

        res.status(201).json("Emprestimo realizado")
    }
    async listBorrowedBooks(req, res){
        const {user_id} = req.params

        const loans = await knex("loans")
        .where({user_id})
        .innerJoin('books', 'books.id', 'loans.book_id')
        .select('books.title', 'books.author','books.category', 'books.pageNumber')

        return res.status(200).json(loans)
    }
    async totalBorrowedBooks(req, res){
        const {user_id} = req.params

        const [total] = await knex('loans').where({user_id}).count({books: 'book_id'})
        return res.status(200).json(total)

    }
    async returnBorrowedBooks(req, res){
        const {user_id, book_id} = req.params

        const user = await knex("users").where({id: user_id}).first()
        const book = await knex("books").where({id: book_id}).first()

        if(!user){
            return res.status(400).json("Usuario não encontrado")
        }

        if(!book){
            return res.status(400).json("Livro não encontrado")
        }
        
        const [loans] = await knex("loans").where({})
        const bookId = loans.book_id

        if(bookId == book_id){
            await knex("books").where({id: book_id}).update({available: true})

            return res.status(201).json("Livro devolvido")
        }
        return res.status(400).json("Operação mal sucedida")

    }
}

module.exports = LoanController