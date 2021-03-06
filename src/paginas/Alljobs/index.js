import React, { useState, useEffect } from "react"
import './styles.css'
import HeaderJobs from "../../components/HeaderJobs"
import TableJobs from "../../components/TableJobs"
import { GetPage } from "../../utils"

function Alljobs() {
    
    const [dataLocation, setDataLocation] = useState([]);
    const [dataLocationLength, setDataLocationLength] = useState(null)
    const [desc, setDesc] = useState('')
    const [loc, setLoc] = useState('')
    const [fullTime, setFullTime] = useState(false)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    async function getData(description, location, time, pag = 1) {
        setLoading(true)
        const response = await GetPage(description, location, time, pag)
        setDataLocation(response)
        setLoading(false)
    }

    useEffect(() => {
        getData('', '', false, 1)
    }, [])

    useEffect(() => {
        console.log('==================')
        console.log(dataLocation)
        console.log('==================')
        setDataLocationLength(dataLocation.length)
        //dataLocation.length == 0 ? setTeste(true) : setTeste(false)
        //console.log("AQUII");
        //console.log(teste);
    }, [dataLocation])

    /*useEffect(() => {
        
        setDataLocationLength(dataLocation.length)
        //setTeste(!teste)
    }, [ClickSearch])*/

    return (
        <div className="container-jobs">
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

export default Alljobs