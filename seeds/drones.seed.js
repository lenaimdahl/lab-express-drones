const droneModel = require("../models/Drone.model");
const mongoose = require("mongoose");

require("../db");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const savedrone = async () => {
  try {
    const responseFromDB = await droneModel.create(drones);
    console.log("Got all the info in the DB!", responseFromDB);
  } catch (err) {
    console.log("there was an error", err);
  }
  mongoose.connection.close();
};
savedrone();
