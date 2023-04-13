const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const droneModel = model("drone", droneSchema);
module.exports = droneModel;
