const express = require ("express")
const routes = require ("./routes")

const app = express()

app.use(express.json())
app.use(routes)

const PORT = 3333

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Algo deu errado")

    next()
})

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
})