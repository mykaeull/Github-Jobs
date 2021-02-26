import React, { useState, useEffect } from "react"
import './styles.css'
import HeaderJobs from "../../components/HeaderJobs"
import TableJobs from "../../components/TableJobs"
import { GetPage } from "../../utils"

function Alljobs({desc = '', loc = '', fullTime = false}) {
    
    const [dataLocation, setDataLocation] = useState([]);
    const [dataLocationLength, setDataLocationLength] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await GetPage(desc, loc, fullTime)
            setDataLocation(response)
        }
        getData()
    }, [])

    console.log(dataLocation)

    useEffect(() => {
        console.log('==================')
        console.log(dataLocation)
        console.log('==================')
        setDataLocationLength(dataLocation.length)
    }, [dataLocation])

    return (
        <div className="container-jobs">
            <HeaderJobs />
            {dataLocation.length !== 0 ? 
            (
                <TableJobs dataLocation={dataLocation} dataLocationLength={dataLocationLength} />
            )
            :
            <h1>Carregando...</h1>
            }
        </div>
    )
}

export default Alljobs