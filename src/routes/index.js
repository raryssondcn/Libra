const {Router} = require ("express")
const userRoutes = require("./users.routes")
const bookRoutes = require("./books.routes")
const loanRoutes = require("./loan.routes")
const sessionRoutes = require("./session.routes")

const routes = Router()

routes.use("/", userRoutes)
routes.use("/", bookRoutes)
routes.use("/", loanRoutes)
routes.use("/", sessionRoutes)

module.exports = routes