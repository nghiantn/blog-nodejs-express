function route(app) {
    app.use('/', (req, res) => res.send('Hello world'))
}

module.exports = route
