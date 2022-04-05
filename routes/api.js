const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const middleware = require("../midleware/create_update");
const bookController = require("../controller/bookController");

router.get("/books", bookController.get_books);
router.post(
  "/createbook",
  middleware.createBook(),
  bookController.create_books
);
router.put("/updatebook/:id", bookController.update_book);
router.delete("/deletebook/:id", bookController.delete_book);
module.exports = router;
