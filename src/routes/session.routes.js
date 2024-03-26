const {Router} = require("express")
const SessionController = require("../controller/SessionController")

const sessionController = new SessionController()

const sessionRoutes = Router()
sessionRoutes.post("/sessions", sessionController.createSession)

module.exports = sessionRoutes