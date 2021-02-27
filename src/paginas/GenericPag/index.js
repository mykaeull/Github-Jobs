import React, { useState, useEffect } from "react"
import './styles.css'
import HeaderJobs from "../../components/HeaderJobs"
import TableJobs from "../../components/TableJobs"
import { GetPage } from "../../utils"

function GenericPag({desc = '', loc = '', fullTime = false, setDesc, setLoc, setFullTime}) {
    
    const [dataLocation, setDataLocation] = useState([]);
    const [dataLocationLength, setDataLocationLength] = useState(null)
    const [clickSearch, setClickSearch] = useState(false)
    const [clickShowMore, setClickShowMore] = useState(false)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const response = await GetPage(desc, loc, fullTime, page)
            setDataLocation(response)
            setLoading(false)
        }
        getData()
    }, [clickSearch])

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const response = await GetPage(desc, loc, fullTime, page)
            setDataLocation(response)
            setLoading(false)
        }
        getData()
    }, [clickShowMore])

    //console.log(dataLocation)

    useEffect(() => {
        console.log('==================')
        console.log(dataLocation)
        console.log('==================')
        setDataLocationLength(dataLocation.length)
    }, [dataLocation])

    return (
        <div className="container-jobs-generic">
            <HeaderJobs setPage={setPage} loc={loc} desc={desc} fullTime={fullTime} setDesc={setDesc} setLoc={setLoc} setFullTime={setFullTime} clickSearch={clickSearch} setClickSearch={setClickSearch} />
            {dataLocation.length !== 0 ? 
            (
                <TableJobs clickShowMore={clickShowMore} setClickShowMore={setClickShowMore} page={page} setPage={setPage} dataLocation={dataLocation} dataLocationLength={dataLocationLength} />
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