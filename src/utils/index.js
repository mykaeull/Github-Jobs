import api from "../servidor"

export async function GetPage(desc= '', loc= '', fullTime= false, pag = 1) {
    let time = fullTime? '&full_time=true' : ''
    const response = await api.get(`positions.json?page=${pag}&description=${desc}${time}&location=${loc}`)
        .then(res => {
            console.log("SUCESS!")
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log("ERROR!")
            console.log(err)
        })
    return response
}

export async function GetById(id) {
    const response = await api.get(`positions/${id}.json`)
        .then(res => {
            console.log("SUCESS!")
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log("ERROR!")
            console.log(err)
        })
    return response
}