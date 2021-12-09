exports.addUser = (json) => {
    return [json, json.email, json.password];
}

exports.login = (json) => {
    return [json, json.email, json.password];
}
