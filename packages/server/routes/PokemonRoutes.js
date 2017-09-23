const PokemonSeed = require('../models/pokemon.json')
const Pokemon = require("../models/Pokemon.js");
const PokemonType = require("../models/PokemonType.js");


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

  app.put("/pokemonTypeSeed/", function(req, res) {
    PokemonSeed.PokemonType.forEach(function(element) {
    var newPokemonType = new PokemonType(element);
    newPokemonType.save(function(error, data) {
      if (error) {
        console.log(error);
      }
      else {
        Pokemon.findOneAndUpdate({ "pokemon_id": data.pokemon_id }, { $push: { "pokemon_type": data }})
        .exec(function(err, data) {
          if (err) {
            console.log("Pokemon Types couldn't be added " + err);
            res.send("Pokemon Types couldn't be added " + err);
          }
          else {
            console.log(data.pokemon_id + " types added");
          }
        });
      }
    });
  });
  res.send("Pokemon Types Added to DB");
  });

  app.get("/pokemon/:pokemon_id", function(req, res) {
    Pokemon.findOne({ "pokemon_id": req.params.pokemon_id })
    .populate("pokemon_type")
    .exec(function(error, data) {
      if (error) {
        console.log(error);
      }
      else {
        res.json(data);
      }
    });
  });

};