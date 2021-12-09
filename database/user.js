let userSchema = require('../models/user')
let {encryptText} = require('../security')

exports.add = (json) => {
    let user = new userSchema();
    user._id = json.email;
    user.email = json.email;
    user.name = json.name;
    user.password = encryptText(json.password);
    return user.save();
}

exports.getUserAllData = (email) => {
    return userSchema.findById(email).exec();
}

exports.getUser = (email) => {
    return userSchema.findById(email).select("-_id -__v -password -isActive").exec();
}

exports.getUsers = () => {
    return userSchema.find().select("-_id -__v -password -isActive").exec();
}

exports.updateUser = (email, json) => {
    return userSchema.updateOne({_id: email}, {$set: json}).exec()
}

exports.enableUser = (email) => {
    return userSchema.updateOne({_id: email}, {$set: {isActive: true}}).exec()
}

exports.disableUser = (email) => {
    return userSchema.updateOne({_id: email}, {$set: {isActive: false}}).exec()
}

// do not use it
exports.removeUser = (email) => {
    return userSchema.deleteOne({_id: email}).exec()
}
