const journRouter = require("express").Router()
const Journ = require("../models/journ")
const logger = require("../utils/logger")
const mongoose = require ('mongoose')

journRouter.get("/", async (request, response, next) => {
    try {
    const journs = await Journ.find({})
    
            response.json(journs)
        
    } catch (exception) {
        next(exception)
    }

    
})


module.exports = journRouter