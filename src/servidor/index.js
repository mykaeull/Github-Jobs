import axios from "axios"

const api = axios.create({
    baseURL: "https://cors.bridged.cc/https://jobs.github.com/"
})

export default api