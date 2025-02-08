import axios from 'axios'

const apiQdLanches = axios.create({
    baseURL: 'http://localhost:3001'
})

apiQdLanches.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('QDLanches:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config
})

export default apiQdLanches