const UserModel = require('../model/user.model')

exports.getUser = async (query) => {
    try {
        var user = await UserModel.findOne(query)
        return user
    } catch (e) {
        throw Error('Error while getting user!!')
    }
}

exports.createUser = async (query) => {
    try {
        var user = await new UserModel(query)
        return user.save()
    } catch (e) {
        throw Error('Error while creating a user!!')
    }
}
