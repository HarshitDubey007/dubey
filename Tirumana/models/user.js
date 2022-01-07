const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// mongoose.promise = Promise;
// const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    hash_password: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: Number,
      required: true,
      unique: true,
    },
    role: { type: String, role: ["user", "admin"], default: "user" },
    contactNumber: { type: String },
    profilePitcher: { type: String },
  },
  { timestamps: true }
);

UserSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync("password", 10);
});

// UserSchema.methods = {
//   authenticate: function(password){
//     return bcrypt.compareSync(password, this.hash_password)
//   }
// }

UserSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compare(password, this.hash_password);
  },
};

// UserSchema.methods = {
//   checkPassword: function (inputPassword) {
//     return bcrypt.compareSync(inputPassword, this.password);
//   },
//   hashPassword: (plainTextPassword) => {
//     return bcrypt.hashSync(plainTextPassword, 10);
//   }
// };

// // Define hooks for pre-saving
// UserSchema.pre("save", function (next) {
//   if (!this.password) {
//     console.log("models/user.js =======NO PASSWORD PROVIDED=======");
//     next();
//   } else {
//     console.log("models/user.js hashPassword in pre save");
//     this.password = this.hashPassword(this.password);
//     next();
//   }
// });

const User = mongoose.models.User || mongoose.model("User", UserSchema);
// module.exports = mongoose.model('User', UserSchema)
module.exports = User;
