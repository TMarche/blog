import axios from 'axios'


// Using https://jsonplaceholder.typicode.com
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})