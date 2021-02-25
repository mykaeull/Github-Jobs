import React, { useState, useEffect } from "react"
import './styles.css'
import HeaderJobs from "../../components/HeaderJobs"
import TableJobs from "../../components/TableJobs"
import { GetPage } from "../../utils"

function Alljobs() {
    
    const [dataLocation, setDataLocation] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await GetPage()
            setDataLocation(response)
        }
        getData()
    }, [])

    console.log(dataLocation)

    useEffect(() => {
        console.log('==================')
        console.log(dataLocation)
        console.log('==================')
    }, [dataLocation])

    return (
        <div className="container-jobs">
            <HeaderJobs />
            {dataLocation.length ? 
            (
                <TableJobs dataLocation={dataLocation} />
            )
            :
            <h1>Carregando...</h1>
            }
        </div>
    )
}

export default Alljobs