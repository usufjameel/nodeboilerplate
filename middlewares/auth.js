let status = require('./../constants/status')
let rs = require('./../constants/response')
let {getObjectFromJWT} = require('../security/jwt')
let {setDecodedPayload} = require('../helpers/auth')

exports.verifyToken = (req, res, next) => {
    let auth = req.get('Authorization')
    if (!auth) {
        res.status(status.success).send(rs.getAuthHeaderMissingResponse())
    } else {
        let token = auth.split(' ')[1];
        if (!token) {
            res.status(status.success).send(rs.getAuthHeaderMissingResponse())
        } else {
            try {
                setDecodedPayload(req, getObjectFromJWT(token))
                next()
            } catch (err) {
                if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError")
                    return res.status(status.success).send(rs.getSessionExpiredResponse())

                return res.status(status.success).send(rs.getUnauthorizedAccessResponse())
            }
        }
    }
}
