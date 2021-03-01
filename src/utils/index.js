import api from "../servidor"

export async function GetPage(pag, desc, type, loc) {
    const response = await api.get(`positions.json?page=${pag}&description=${desc === "undefined" ? '' : desc}&full_time=${type}&location=${loc === "undefined" ? '' : loc}`)
        .then(res => {
            console.log("SUCESS!")
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
            return res.data
        })
        .catch(err => {
            console.log("ERROR!")
            console.log(err)
        })
    return response
}