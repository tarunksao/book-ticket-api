const {Schema, model} = require('mongoose');

const userSchema = Schema({
    name:{type: String, required:true},
    email:{type: String, required:true, unique:true},
    password:{type: String, required:true}
}, {
    versionKey:false,
});

const UserModel = model('User', userSchema);

module.exports = {
    UserModel
};