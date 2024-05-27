import axios from 'axios'

const baseUrl = "http://localhost:3003/api/journs"

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log(response);
    return response.data
}

const createNew = async (content) => {
    const journ = content
    console.log(journ);
    const response = await axios.post(baseUrl, journ)
    console.log(response);
    return response.data
}


const remove = async (journ) => {

    try {

    
    const response = await axios.delete(`${baseUrl}/${journ}`, journ)
    console.log("Journ Deleted")
    return  response.data 
    
    } catch (error) {
        console.log("It's already gone baby, not on the elemental chart");
       // console.error("An error occurred:", error);
    } 
  }


//const createNew = async (content) => {
//    const anecdote = { content, votes : 0}
//    const response = await axios.post(baseUrl, anecdote)
//    return response.data
//}


//
//const update = async anecdote => {
//    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
//    console.log(response.data)
//    return  response.data
//  }

export default {getAll, createNew, remove}  