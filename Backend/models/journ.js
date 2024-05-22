const mongoose = require("mongoose")

const journSchema = new mongoose.Schema({
  title: { 
    type: String,
    required:false
  },
  journ: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required : false
  }
})

journSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})



module.exports = mongoose.model("Journ", journSchema)





 