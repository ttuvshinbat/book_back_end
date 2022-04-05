const { body, validationResult } = require("express-validator");
const createBook = () => {
  return [
    body("name").notEmpty().isString().withMessage("string and notempty"),
    body("isbn").notEmpty().isNumeric().withMessage("isbn number and notempty"),
    body("author")
      .isString()
      .notEmpty()
      .withMessage("author is notempty and string"),
    body("publish_date").notEmpty().isDate().withMessage("date and notempty"),
    body("price")
      .notEmpty()
      .isNumeric()
      .withMessage("price is number and notempty"),
  ];
};
exports.createBook = createBook;
