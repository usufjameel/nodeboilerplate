const {verifyToken} = require("../middlewares/auth");
module.exports = (router) => {

    let controller = require('../controllers/user');

    router.post('/register', controller.addUser);
    router.post('/login', controller.login);
    router.get('/user', verifyToken, controller.getUser);
    router.get('/users', verifyToken, controller.getUsers);

}
