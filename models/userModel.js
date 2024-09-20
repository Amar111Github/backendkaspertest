const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    gender: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v); // Adjust regex as per your mobile number format
        },
        message: (props) => `${props.value} is not a valid mobile number!`
      }
    }
  },
  {
    timestamps: true
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
