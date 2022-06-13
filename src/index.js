const express = require('express')
const app = express()

const PORT = 5000

const route = require('./routes')

route(app)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
