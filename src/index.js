const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

const PORT = 5000

const route = require('./routes')

const hbs = handlebars.create({
    extname: '.hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.static(path.join(__dirname, 'public')))

route(app)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
