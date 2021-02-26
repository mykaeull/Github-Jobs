import api from "../servidor"

export async function GetPage(desc= '', loc= '', fullTime= false) {
    let time = fullTime? '&full_time=true' : ''
    const response = await api.get(`positions.json?description=${desc}${time}&location=${loc}`)
        .then(res => {
            console.log("deu certo!")
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log("deu errado!")
            console.log(err)
        })
    return response
}