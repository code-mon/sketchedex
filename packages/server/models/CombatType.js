var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CombatTypeSchema = new Schema({
  pokemon_id: {
    type: String,
    required: true
  },
  identifier: {
    type: String,
    required: true
  },
  generation_id: {
    type: String,
    required: true
  }
});

var CombatType = mongoose.model("CombatType", CombatTypeSchema);

module.exports = CombatType;
