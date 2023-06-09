const express = require("express");
const { getAllitems, createItem , updateitem} = require("../controllers/itemController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/items").get(getAllitems);
router.route("/item/new").post(createItem);
router.route("/item/:id").put(updateitem);


module.exports= router