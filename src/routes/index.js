const {Router} = require ("express")
const userRoutes = require("./users.routes")
const bookRoutes = require("./books.routes")
const loanRoutes = require("./loan.routes")

const routes = Router()

routes.use("/", userRoutes)
routes.use("/", bookRoutes)
routes.use("/", loanRoutes)

module.exports = routes