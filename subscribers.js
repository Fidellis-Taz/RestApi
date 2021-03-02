const express = require("express");
const router = express.Router();

//get all subscribers
router.get("/", (req, res) => {});
//get a specific or one subscriber
router.get("/:id", (req, res) => {
  //req.params.id
});

//create one
router.post("/", (req, res) => {});

//update user:: we use patch instead of put becoz we only wanna update changes not everything
router.patch("/:id", (req, res) => {});
//delete user
router.delete("/:id", (req, res) => {});

module.exports = router;
