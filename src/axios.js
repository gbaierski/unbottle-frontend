import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.6:8001/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')