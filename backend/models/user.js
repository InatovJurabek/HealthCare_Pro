const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Ism kiritish shart"],
    },

    email: {
      type: String,
      required: [true, "Email shart"],
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Parol shart"],
      minlength: 8,
      select: false,
    },

    role: {
      type: String,
      enum: ["patient", "doctor", "admin"],
      default: "patient",
    },
  },
  { timestamaps: true },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
  console.log(next, "next");
});

userSchema.methods.matchPassword = async function (newPassword) {
  return await bcrypt.compare(newPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
