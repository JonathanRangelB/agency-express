import express from "express"
import router from "./routes/index.js"

const app = express()

const PORT = process.env.port || 3000

// Habilitar pug
app.set("view engine","pug")


// Obtener el año actual
// Las variables siempre se deben definir antes de utilizar el routing/vistas, caso contrario las variables asignadas alos response no seran visibles mas adelante y no habra valor que mostrar en el HTML porque el proceso de hacer un res.render() va a tomar todo lo que tenga y hara el render, asi que de nada servira crear una variable despues del res.render()
app.use((req,res,next) => {
    const year = new Date().getFullYear()
    res.locals.actualYear = year;
    res.locals.nombreSitio = "Agencia de Viajes"
    next();
})

// Definir carpeta publica
app.use(express.static("public"))

// Agregar el router
app.use("/",router)

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
})