const mongoose = require("mongoose");
const schema = mongoose.Schema;
const BookSchema = new schema({
  name: {
    type: String,
    required: [true, "Oh Come on! Food name is must!"],
  },
  isbn: {
    type: Number,
  },
  author: {
    type: String,
  },
  publish_date: {
    type: Date,
  },
  price: {
    type: Number,
  },
});
const Book = mongoose.model("book", BookSchema);
module.exports = Book;
