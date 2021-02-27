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
    const [click, setClick] = useState(false)
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
    }, [click])

    useEffect(() => {
        console.log('==================')
        console.log(dataLocation)
        console.log('==================')
        setDataLocationLength(dataLocation.length)
        //dataLocation.length == 0 ? setTeste(true) : setTeste(false)
        console.log("AQUII");
        //console.log(teste);
    }, [dataLocation])

    /*useEffect(() => {
        
        setDataLocationLength(dataLocation.length)
        //setTeste(!teste)
    }, [click])*/

    return (
        <div className="container-jobs">
            <HeaderJobs loc={loc} desc={desc} fullTime={fullTime} setDesc={setDesc} setLoc={setLoc} setFullTime={setFullTime} click={click} setClick={setClick} />
            {dataLocation.length !== 0 ? 
            (
                <TableJobs click={click} setClick={setClick} page={page} setPage={setPage} dataLocation={dataLocation} dataLocationLength={dataLocationLength} />
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