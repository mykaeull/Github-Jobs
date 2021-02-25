import api from "../servidor"

export async function GetPage() {
    const response = await api.get('positions.json?search=city')
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