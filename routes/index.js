module.exports = (app, express) => {
    const router = express.Router()
    const user = require('./user')

    router.get('/', (req, res) => {
        res.render('index', {title: "Node Boilerplate"})
    })

    user(router);

    app.use('/', router)
}
