module.exports = {
    success: 200,
    successCreated: 201,
    accepted: 202,
    successNoRecords: 204,
    badRequest: 400, // if parameter missing
    unauthorized: 401, // if token is invalid
    conflict: 409,
    sessionExpired: 440, // if the token is expired
    internalServerError: 500
}
