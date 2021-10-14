import express from "express"
import router from "./routes/index.js"

const app = express()

const PORT = process.env.port || 3000

// Agregar el router
app.use("/",router)

// Definir carpeta publica
app.use(express.static("public"))

// Habilitar pug
app.set("view engine","pug")

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
})