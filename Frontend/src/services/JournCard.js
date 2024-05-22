import axios from 'axios'

//const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get("http://localhost:3002/api/journs")
    console.log(response);
    return response.data
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

export default {getAll}  