const config = require("./utils/config")
const express = require('express')
const app = express()
const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
const { info, add } = require('./mongo');

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connection to mongo" , error.message)
  })


module.exports = app