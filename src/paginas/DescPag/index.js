import React, { useState, useEffect } from "react"
import './styles.css'
import ReactMarkdown from 'react-markdown';
import { GetById } from "../../utils"
import { useParams } from "react-router-dom"

function DescPag() {

    const { id } = useParams()

    const [dataLocation, setDataLocation] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await GetById(id)
            setDataLocation(response)
        }
        getData()
    }, [id])

    /*useEffect(() => {
        console.log('==================')
        console.log(dataLocation)
        console.log('==================')
    }, [dataLocation])*/

    return (
        <div className="container-desc">
            {dataLocation ?
            <div className="container-middle">
                <span className="title">{dataLocation.title}</span>
                <div>
                    Time: <span className="time">{dataLocation.type}</span>
                </div>
                <div>
                    Location: {dataLocation.location}
                </div>
                <div className="content-elements">
                    <div className="left-elements">
                        <ReactMarkdown  source={dataLocation.description} allowDangerousHtml={true} linkTarget="_blank" />
                    </div>
                    <div className="right-elements">
                        <span className="company">{dataLocation.company}</span>
                        <img alt="logo" src={dataLocation.company_logo} style={{margin: "0"}} />
                        <span className="how-to-apply"> <ReactMarkdown source={dataLocation.how_to_apply} allowDangerousHtml={true} linkTarget="_blank" /> </span>
                    </div>
                </div>
            </div>
            :
            <h1 style={{marginBottom: "400px"}}>Loading...</h1>
            }
        </div>
    )
}

export default DescPag