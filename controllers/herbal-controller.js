const { response } = require("express");
const data = require("../data/data");
const { v4:uuid } = require('uuid');
module.exports = { create_form:(request,response)=>{
    response.render("pages/create");
  },
  create: (request, response) => {
    const {
      _id = uuid(),
      plantName,
      benefits,
      purchase,
    
    } = request.body;
    
    console.log(plantName,benefits,purchase,)
    console.log(data)
    data.push({
      _id,
      plantName,
      benefits,
      purchase,
    });
    console.log(data)
    response.redirect("/admin-console");
  },
  update: (request, response) => {
    const { _id } = request.params;
    const { plantName, benefits, purchase} = request.body;
    const foundHerbal = data.find((herbal) => herbal.id === String(_id));console.log(foundHerbal)
    foundHerbal.plantName = plantName;
    foundHerbal.benefits = benefits;
    foundHerbal.purchase = purchase;
    response.redirect("/admin-console");
  },
};
