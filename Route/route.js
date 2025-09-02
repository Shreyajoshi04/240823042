const express = require('express'); 
const Router = express.Router();
const StudentController = require("../Controller/StudentController");

Router.get("/index",StudentController.index);
Router.get("/show/:id",StudentController.show);
// Router.post("/store",StudentController.store);  
// Router.put("/update/:id",StudentController.update);
Router.delete("/delete/:id",StudentController.delete);

module.exports = Router;
const StudentValidator = require("../Validations/Studentvalidator");
Router.post("/store", StudentValidator.validate, StudentController.store);
Router.put("/update/:id", StudentValidator.updatevalidate, StudentController.update);