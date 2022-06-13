function route(app) {

    app.use('*', (req, res) => res.render('404'))
}

module.exports = route
