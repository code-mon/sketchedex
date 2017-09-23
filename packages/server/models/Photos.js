var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  photo_id: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  default_pic: {
    type: Boolean,
    required: true
  },
  pokemon: [{
    type: Schema.Types.ObjectId,
    ref: "Pokemon"
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

var Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
