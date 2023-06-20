const mongoose = require("mongoose"); // additional line to import the mongoose

const Schema = mongoose.Schema;
const PlantsSchema = new Schema({
  plantName: String,
  plant_id: String,
  benefits: String,
  image: String,
  url: String,
});

const Plants = mongoose.model("plants", PlantsSchema); // make this module importable in other modules
module.exports = Plants;
