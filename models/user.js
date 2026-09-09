const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongooseModule = require("passport-local-mongoose");

const passportLocalMongoose =
    typeof passportLocalMongooseModule === "function"
        ? passportLocalMongooseModule
        : passportLocalMongooseModule.default;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

if (typeof passportLocalMongoose !== "function") {
    throw new Error("passport-local-mongoose plugin is not loading correctly");
}

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
