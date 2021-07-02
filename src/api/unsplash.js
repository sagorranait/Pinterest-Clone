import axios from 'axios'

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID MGuqqK2jb4xL8grLJTfIt2AntbrRX1REuugbfiI6fgw"
  }
})