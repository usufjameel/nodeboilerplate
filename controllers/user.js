let rs = require('./../constants/response');
let status = require('./../constants/status');
let db = require('./../database/user');
let {isAllParametersPresent} = require('../validators/params.validator');
let userValidator = require('../validators/user');
let {decryptText} = require('../security')
let {getJWTToken} = require('../security/jwt')


/** @description - first user will be added using this API . No Middleware will be used */
exports.addUser = (req, res) => {
    let jsonData = req.body

    if (!isAllParametersPresent(userValidator.addUser(jsonData))) {
        return res.status(status.success).send(rs.getParameterMissingResponse())
    }

    db.add(jsonData)
        .then(doc => {
            return res.status(status.success).send(rs.getSuccessResponse())
        })
        .catch(err => {
            console.log(err)
            return res.status(status.success).send(rs.getServerErrorResponse())
        })
};


exports.getUser = (req, res) => {
    let email = req.headers.email

    db.getUser(email)
        .then(doc => {
            return res.status(status.success).send(rs.getSuccessResponse(doc))
        })
        .catch(err => {
            return res.status(status.success).send(rs.getServerErrorResponse())
        })
};


exports.getUsers = (req, res) => {
    let jsonData = req.body

    db.getUsers(jsonData)
        .then(docs => {
            return res.status(status.success).send(rs.getSuccessResponse(docs))
        })
        .catch(err => {
            return res.status(status.success).send(rs.getServerErrorResponse())
        })
};

exports.updateUser = (req, res) => {
    let jsonData = req.body

    db.updateUser(jsonData.email)
        .then(doc => {
            return res.status(status.success).send(rs.getSuccessResponse())
        })
        .catch(err => {
            return res.status(status.success).send(rs.getServerErrorResponse())
        })
};

exports.enableUser = (req, res) => {
    let jsonData = req.body

    db.enableUser(jsonData.email)
        .then(doc => {
            return res.status(status.success).send(rs.getSuccessResponse())
        })
        .catch(err => {
            return res.status(status.success).send(rs.getServerErrorResponse())
        })
};

exports.disableUser = (req, res) => {
    let jsonData = req.body

    db.disableUser(jsonData.email)
        .then(doc => {
            return res.status(status.success).send(rs.getSuccessResponse())
        })
        .catch(err => {
            return res.status(status.success).send(rs.getServerErrorResponse())
        })
};

exports.login = (req, res) => {
    let jsonData = req.body

    if (!isAllParametersPresent(userValidator.login(jsonData))) {
        return res.status(status.success).send(rs.getParameterMissingResponse())
    }

    db.getUserAllData(jsonData.email)
        .then(doc => {
            if (doc) {
                if (decryptText(doc.password) === jsonData.password) {
                    let generatedToken = getJWTToken(doc.toObject())
                    return res.status(status.success).send(rs.getSuccessResponse({token: generatedToken}))
                } else {
                    return res.status(status.success).send(rs.getUnauthorizedAccessResponse())
                }
            } else {
                return res.status(status.success).send(rs.getDataNotFoundResponse())
            }
        })
        .catch(err => {
            console.log(err)
            return res.status(status.success).send(rs.getServerErrorResponse())
        })
}
