import React, { useState, useEffect } from "react"
import './styles.css'
import HeaderJobs from "../../components/HeaderJobs"
import TableJobs from "../../components/TableJobs"
import { GetPage } from "../../utils"

function GenericPag({desc = '', loc = '', fullTime = false, setDesc, setLoc, setFullTime}) {
    
    //const [dataLocation, setDataLocation] = useState([]);
    const [loading, setLoading] = useState(false)
    const [dataLocation, setDataLocation] = useState([]);
    const [dataLocationLength, setDataLocationLength] = useState(null)
    const [page, setPage] = useState(1)
    const [firstTime, setFirstTime] = useState(true)

    async function getData(description, location, time, pag) {
        setLoading(true)
        const response = await GetPage(description, location, time, pag)
        setDataLocation(response)
        setLoading(false)
    }

    useEffect(() => {
        if (firstTime) {
            getData(desc, loc, fullTime, 1)
            setFirstTime(false)
        }
    }, [desc, loc, fullTime, firstTime])

    //console.log(dataLocation)

    useEffect(() => {
        console.log('==================')
        console.log(dataLocation)
        console.log('==================')
        setDataLocationLength(dataLocation.length)
    }, [dataLocation])

    return (
        <div className="container-jobs-generic">
            <HeaderJobs getData={getData} setPage={setPage} loc={loc} desc={desc} fullTime={fullTime} setDesc={setDesc} setLoc={setLoc} setFullTime={setFullTime} />
            {dataLocation.length !== 0 ? 
            (
                <TableJobs desc={desc} loc={loc} time={fullTime} getData={getData} page={page} setPage={setPage} dataLocation={dataLocation} dataLocationLength={dataLocationLength} />
            )
            :
            loading ?
            <h1>Loading...</h1>
            :
            <h1>Nothing Found</h1>
            }
        </div>
    )
}

export default GenericPag