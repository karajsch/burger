var express = require("express");

// Use router method off of express object to control routes in the application
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js")

router.get("/", function (req, res) {
    burger.selectAll("burgers", function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.newBurger(req.body, function (result) {
        res.json(result)
    })
})

router.put("/burgers/:id", function (req, res) {
    burger.updateBurger(req.params.id, function (result) {
        res.json(result)
    })
})

router.delete("/burgers", function (req, res) {
    burger.destroyBurger(req.body, function (result) {
        res.json(result)
    })
})

module.exports = router;



/* var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router; */