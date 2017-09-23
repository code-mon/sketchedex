var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PokemonTypeSchema = new Schema({
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

var PokemonType = mongoose.model("PokemonType", PokemonTypeSchema);

module.exports = PokemonType;
