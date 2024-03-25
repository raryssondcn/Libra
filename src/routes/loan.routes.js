const {Router} = require("express")
const LoanController = require("../controller/LoanController")

const loanRoutes = Router()

const loanController = new LoanController

loanRoutes.post("/loan/:user_id/:book_id", loanController.borrowBooks)
loanRoutes.get("/loan/:user_id", loanController.listBorrowedBooks)
loanRoutes.get("/total/:user_id", loanController.totalBorrowedBooks)
loanRoutes.patch("/loan/:user_id/:book_id", loanController.returnBorrowedBooks)

module.exports = loanRoutes