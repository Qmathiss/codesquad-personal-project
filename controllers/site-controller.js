const { response } = require("express");
const data = require("../data/data");
module.exports = {
  index: (request, response) => {
    response.render("pages/index");
  },
  about: (request, response) => {
    response.render("pages/about");
  },
  book: (request, response) => {
    response.render("pages/book");
  },
};
