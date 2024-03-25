const {Router} = require("express")
const BookController = require("../controller/BookController")
const checkBookExist = require("../middleware/checkBookExist")

const bookRoutes = Router()

const bookController = new BookController

bookRoutes.post("/books", bookController.createBook)
bookRoutes.get("/books", bookController.listBooks)
bookRoutes.get("/books/:id", checkBookExist, bookController.listBooksById)
bookRoutes.put("/books/:id", checkBookExist, bookController.updateBook)
bookRoutes.delete("/books/:id", checkBookExist, bookController.deleteBook)

module.exports = bookRoutes