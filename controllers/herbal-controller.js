const express = require("express");
const passport = require("passport");
const data = require("../data/data");
// after you have a model be you will be able to render data
const Herb = require("../models/herb-model");
module.exports = {
  create_form: (request, response) => {
    response.render('pages/create');
  },
  herbal: (request, response)=>{
    Herb.find({}, (error, data) => {
      if (error) {
          return error;
      } else {
          response.render('pages/herbals', {
              data: data
          
              // herb data prevents the for loop from reading data herb:data
          });
        }  
  })},
  create: (request, response) => {
    const { _id = uuid(), plantName, benefits, purchase } = request.body;
const newHerb = new Herb(
  {
  plantName:plantName,
  benefits:benefits,
  purchase:purchase, 
  }
 
)
newHerb.save()
response.render('/')
  
  },
  read:(request, response) => {
    const { _id = uuid(), plantName, benefits, purchase } = request.body;
const newHerb = new Herb(
  {
  plantName:plantName,
  benefits:benefits,
  purchase:purchase, 
  }
 
)
newHerb.save()
response.redirect('/')
  
  },
  // update: (request, response) => {
  //   const { _id } = request.params;
  //   const { plantName, benefits, purchase } = request.body;
  //   const foundHerbal = data.find((herbal) => herbal.id === String(_id));
  //   console.log(foundHerbal);
  //   foundHerbal.plantName = plantName;
  //   foundHerbal.benefits = benefits;
  //   foundHerbal.purchase = purchase;
  //   response.redirect("/admin-console");
  // },
  
  }
