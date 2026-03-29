const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // phone:{type: String},
    // role: {
    //     type: String,
    //     enum : [roles.admin, roles.client],
    //     default: roles.client
    // }

});

// Hash the plain text password before saving
userSchema.pre('save', async function () {
    try {
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(this.password, salt);
            this.password = hashedpassword;
        }
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model("User", userSchema)
module.exports = User;
