const express = require("express");
const router = express.Router();
const { Fav } = require("../models");

// /api/favs
router.get("/:id", (req, res) => {
  Fav.findAll({
    where: {
      userId: req.params.id, // ver el :id
    },
  });
});

router.post("/", (req, res) => {
  // findOrCreate
  console.log("REQ BODY", req.body);
  console.log("FAV", Fav);
  Fav.Create({
    title: req.body.title,
    poster: req.body.poster,
  }).then((fav) => {
    console.log("FAV", fav);
    fav.setUser(req.body.userId);
    res.status(200).json(fav);
  });
});

module.exports = router;
