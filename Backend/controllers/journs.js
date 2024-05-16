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


journRouter.get("/:id", async (request, response, next) => {

  try {
    const journ = await Journ.findById(request.params.id)
    response.json(journ) 
    } catch (exception) {
      next (exception)
    }
  })

const constructJourn =  (title, journ, next) => {
    try {
    const JournToBeSaved = new Journ({
      "title": title,
      "journ": journ,
      "date": new Date()
    }) 
        return JournToBeSaved;
    } catch (exception) {
    next(exception)
    }
    } 

journRouter.post('/', async (request, response, next) => {

  try {  
    console.log(request.body);
    const journToBeSaved = await constructJourn(request.body.title, request.body.journ); 
    const savedJourn = await journToBeSaved.save()
    response.status(200).json(savedJourn);
    logger.info(`added ${savedJourn} to db`)
  } catch (exception) {
    next(exception)
}
})

journRouter.put("/:id", async (request, response, next) => {
  const body = request.body

  const updateTheJournWith = {
    "title": body.title,
    "journ": body.journ,
    "date" : body.date,
    "editdate" : new Date()
  }
  console.log(request);
  try {
    const updatedJourn = await Journ.findByIdAndUpdate(request.params.id, updateTheJournWith, { new:true })
    console.log(request);
    response.json(updatedJourn.toJSON())
    logger.info(`${updatedJourn} is succesfully updated`)
  } catch (exception) {
    next (exception)
  }
})

module.exports = journRouter