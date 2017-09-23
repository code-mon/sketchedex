var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
  pokemon_id: {
    type: String,
    required: true
  },
  pokemon_name: {
    type: String,
    required: true
  },
  species_id: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  base_experience: {
    type: Number,
    required: true
  },
  is_default: {
    type: Boolean,
    required: true
  },
  img_location: {
    type: String,
  },
  pokemon_type: [{
    type: Schema.Types.ObjectId,
    ref: "PokemonType"
  }]
});

var Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;
