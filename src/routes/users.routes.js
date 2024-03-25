const {Router} = require ("express")
const UserController = require("../controller/UserController")
const checkUserExist = require("../middleware/checkUserExist")

const userRoutes = Router()

const userController = new UserController

userRoutes.post("/users", userController.createUser)
userRoutes.get("/users", userController.listUsers)
userRoutes.get("/users/:id", checkUserExist, userController.listUsersById)
userRoutes.put("/users/:id", checkUserExist, userController.updateUser)
userRoutes.delete("/users/:id", checkUserExist, userController.deleteUser)

module.exports = userRoutes
