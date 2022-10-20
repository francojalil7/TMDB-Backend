var express = require("express");
var router = express.Router();
var Fav = require("../models").Fav;
// /api/favs
router.get("/:id", function (req, res) {
    Fav.findAll({
        where: {
            userId: req.params.id, // ver el :id
        },
    });
});
router.post("/", function (req, res) {
    // findOrCreate
    console.log("REQ BODY", req.body);
    console.log("FAV", Fav);
    Fav.Create({
        title: req.body.title,
        poster: req.body.poster,
    }).then(function (fav) {
        console.log("FAV", fav);
        fav.setUser(req.body.userId);
        res.status(200).json(fav);
    });
});
module.exports = router;
