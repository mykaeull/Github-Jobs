import api from "../servidor"

export async function GetPage() {
    const response = await api.get('positions.json?page=1&search=code', { headers: true, mode: 'cors' })
        .then(res => {
            console.log("deu certo!")
            console.log(res.data)
        })
        .catch(err => {
            console.log("deu errado!")
            console.log(err)
            console.log(err.response)
        })
}