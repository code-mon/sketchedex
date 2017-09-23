const PokemonSeed = require('../models/pokemon.json')
const Pokemon = require("../models/Pokemon.js");


module.exports = function (app) {
app.get("/pokemon", function (req, res) {
    console.log("inside");
    Pokemon.find({}, function (err, data) {
      console.log("deeper");
      if (err) {
        console.log(err);
      }
      else {
        res.json(data);
      }
    });
  });
  
  app.put("/pokemonSeed", function (req, res) {
    PokemonSeed.Pokemon.forEach(function(element) {
      var newPokemon = new Pokemon(element);
      newPokemon.save(function (err, data) {
        if (err) {
          console.log("Pokemon couldn't be added " + err);
          res.send("Pokemon couldn't be added " + err);
          return;
        }
        console.log(data.pokemon_name + " added");
      })
    });
    res.send("Pokemon Added to DB");
  });

};