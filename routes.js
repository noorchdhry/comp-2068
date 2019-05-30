const express = require('express')
const app = express()

//import page routes
const pageRoutes = require('./routes/pages')

//register our page routes with our app
app.use('/', pageRoutes)

//export our changes
module.exports = app