var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  user_name: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  about: {
    type: String
  },
  photo_info: [{
    type: Schema.Types.ObjectId,
    ref: "Photo"
  }],
  pokedex: [{
    type: Schema.Types.ObjectId,
    ref: "Pokedex"
  }]
},{
  timestamps: true
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
