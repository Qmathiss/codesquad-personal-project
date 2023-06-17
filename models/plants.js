// do not touch

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



// const mongoose = require('mongoose'); 
// const Schema = mongoose.Schema;
// // call the schema
// const herbalSchema = new Schema(
//     {
//       plantName: {
//         // form validation requires a type required key word, and a minium length if it applies
//       type:String,
//       required: [
//         true, "A plant name is required"
//       ]
//     },
//     benefits:{
//         type:String,
//         required:[
//             true, "Benefits description is required"
//         ]
//     },
//     purchase:{
//         type:String,
//         required:[
//             true, "purchase link is required"
//         ]
//     }  
//     }

// )
// const Herb = mongoose.model(
//     "Herb", herbalSchema
// )
module.exports= Plants;