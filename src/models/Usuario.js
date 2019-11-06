const { Schema, model} = require("mongoose");

const UserSchema = new Schema(
  {
    nome:{
      type: String,
      require: true
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    senha:{
      type: String,
      required: true
    },
    token:{
      type: String,
      required: true
    }
  },
  {
    timestamp: true
  }
);
module.exports = model("Usuario", UserSchema);