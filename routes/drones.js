const express = require("express");
const router = express.Router();
const DroneModel = require("../models/Drone.model");

// require the Drone model here

router.get("/all", async (req, res, next) => {
  const allDrones = await DroneModel.find();
  res.render("drones/list", { allDrones });
});

router.get("/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/create", async (req, res, next) => {
  try {
    const newDrone = await DroneModel.create(req.body);
    console.log("New Drone Created ", newDrone);
    res.redirect("/drones/all");
  } catch (err) {
    console.log("there was an error", err);
    res.redirect("/drones/create");
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
