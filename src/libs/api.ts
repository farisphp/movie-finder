import axios from 'axios'
import config from 'config'

const instance = axios.create({
  baseURL: config.API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${config.API_TOKEN}`
  }
})

export default instance
