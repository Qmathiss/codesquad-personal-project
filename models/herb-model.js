// do not touch
const mongoose = require('mongoose'); 
const {Schema}=mongoose
// call the schema
const herbalSchema = new Schema(
    {
      plantName: {
        // form validation requires a type required key word, and a minium length if it applies
      type:String,
      required: [
        true, "A plant name is required"
      ]
    },
    benefits:{
        type:String,
        required:[
            true, "Benefits description is required"
        ]
    },
    purchase:{
        type:String,
        required:[
            true, "purchase link is required"
        ]
    }  
    }

)
const Herb = mongoose.model(
    "Herb", herbalSchema
)
module.exports= Herb