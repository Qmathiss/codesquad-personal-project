const { response } = require("express");
const data = require("../data/data");
const { v4: uuid } = require("uuid");
const Plants = require("../models/plants");
module.exports = {
  create: (request, response) => {
    // model creates a new doc with browser data
    const plant = new Plants({
      plantName: request.body.plantName,
      benefits: request.body.benefits,
      image: request.body.imageUrl,
      url: request.body.purchase,
    });
    plant.save(plant).then(() => {

       
        response.redirect('./herbals')
       
      
    });
    // res.render("create", { Error: "block" });
  },
  edit: (request, response) => {
    Plants.findOne({ _id: request.params.id })
      .then(function (docs) {
        response.render("pages/edit", { data: docs });
      })
      .catch((err) => console.log(err));
  },
  update: (request, response) => {
    Plants.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          plantName: request.body.plantName,
          benefits: request.body.benefits,
          image: request.body.image,
          url: request.body.url,
        },
      },
      { new: true }
    ).then((err, docs) => {
      if (err) {
        console.log(err);
        // response.render("/pages/admin", { data: request.body });
      }
      response.redirect("../admin");
    });
  },
  delete: (request, response) => {
    Plants.findByIdAndRemove(request.params.id).then((err, doc) => {
      response.redirect("/admin");
      console.log("plant successfully removed");
      if (err) {
        console.log(err);
      }
    });
    // .catch((err) => );s
  },
  read: (request, response, next) => {
    Plants.find({})
      .then((docs) => {
        response.render("pages/herbals", {
          data: docs,
        });
      })
      .catch((err) => console.log(err));
  },
  read_admin: (request, response, next) => {
    Plants.find({})
      .then((docs, err) => {
        response.render("pages/admin", {
          data: docs,
        });
      })
      .catch((err) => console.log(err));
    // } else {
    //   console.log("Failed to retrieve the plants List: " + err);
  },
};
