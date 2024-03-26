require("express-async-errors")

const cors = require("cors")
const express = require ("express")
const routes = require ("./routes")
const AppError = require("../utils/appError")

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = 3333

app.use((err, req, res, next) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }
    console.error(err.stack)
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    })

    next()
})

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
})