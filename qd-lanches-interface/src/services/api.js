import axios from 'axios'

const apiQdLanches = axios.create({
    baseURL: 'http://localhost:3001'
})

export default apiQdLanches