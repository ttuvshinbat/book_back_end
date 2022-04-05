const { validationResult } = require("express-validator");
const Book = require("../models/book");
// const { default: mongoose } = require("mongoose");

function get_books(req, res) {
  Book.find({}, function (err, data) {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: data });
  });
}

function create_books(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  } else {
    const data = req.body;
    Book.create(data, function (err, data) {
      if (err) res.json({ success: false, data: err });
      else res.json({ success: true, data: data });
    });
  }
}
function update_book(req, res) {
  const id = req.params.id;
  const data = req.body;
  console.log(id);
  Book.updateOne({ _id: id }, data, function (err, data) {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: data });
  });
}
function delete_book(req, res) {
  const id = req.params.id;
  Book.deleteOne({ _id: id }, function (err, data) {
    if (err) res.json({ success: false, data: data });
    else res.json({ success: true, data: " data deleted" });
  });
}
module.exports = {
  get_books,
  create_books,
  update_book,
  delete_book,
};
