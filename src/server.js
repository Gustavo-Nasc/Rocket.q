const express = require('express')
const route = require('./route')
const path = require('path')
const { Server } = require('tls')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

app.use(route)

app.listen(3000, () => console.log("Servidor iniciado e funcionando!"))