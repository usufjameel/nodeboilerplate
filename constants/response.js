let status = require('./status')
let message = require('./message')

let getResponseStructure = (status, message, data = undefined) => {
    return {
        status: status,
        message: message,
        data: data
    }
}

let getAuthHeaderMissingResponse = () => {
    return getResponseStructure(status.unauthorized, message.tokenMissing)
}

let getParameterMissingResponse = () => {
    return getResponseStructure(status.badRequest, message.parameterMissing)
}

let getSessionExpiredResponse = () => {
    return getResponseStructure(status.sessionExpired, message.sessionExpired)
}

let getServerErrorResponse = () => {
    return getResponseStructure(status.internalServerError, message.failure)
}

let getUnauthorizedAccessResponse = () => {
    return getResponseStructure(status.unauthorized, message.failure)
}

let getSuccessResponse = (data) => {
    return getResponseStructure(status.success, message.success, data)
}

let getDataNotFoundResponse = () => {
    return getResponseStructure(status.successNoRecords, message.success)
}

let getConflictWithDataResponse = (reason) => {
    return getResponseStructure(status.conflict, message.conflict, reason)
}


module.exports = {
    getResponseStructure,
    getParameterMissingResponse,
    getServerErrorResponse,
    getSessionExpiredResponse,
    getSuccessResponse,
    getUnauthorizedAccessResponse,
    getDataNotFoundResponse,
    getConflictWithDataResponse,
    getAuthHeaderMissingResponse
}
