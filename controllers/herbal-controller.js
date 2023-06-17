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
    plant.save(plant).then((err, plantpost) => {
      if (err) {
        response.status(500).send(err);
        //  console.log(error);
      } else {
        response.status(200).send(plantpost);
        response.redirect("/herbals");
        // console.log(plantpost);
      }
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


















  //   create_form: (request, response) => {
//     response.render('pages/create');
//   },
//   herbal: (request, response)=>{
//     Herb.find({}, (error, data) => {
//       if (error) {
//           return error;
//       } else {
//           response.render('pages/herbals', {
//               data: data
          
//               // herb data prevents the for loop from reading data herb:data
//           });
//         }  
//   })},
//   create: (request, response) => {
//     const { _id = uuid(), plantName, benefits, purchase } = request.body;
// const newHerb = new Herb(
//   {
//   plantName:plantName,
//   benefits:benefits,
//   purchase:purchase, 
//   }
 
// )
// newHerb.save()
// response.render('/')
  
//   },
//   read:(request, response) => {
//     const { _id = uuid(), plantName, benefits, purchase } = request.body;
// const newHerb = new Herb(
//   {
//   plantName:plantName,
//   benefits:benefits,
//   purchase:purchase, 
//   }
 
// )
// newHerb.save()
// response.redirect('/')
  
  // },
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
  
  // }
