import axios from 'axios'
import Characters from './characters'

export const client = axios.create({
  baseURL: 'https://swapi.co/api/'
})

client.defaults.headers['Content-Type'] = 'application/json'
client.defaults.headers.Accept = 'application/json'

export default {
  characters: Characters(client)
}
