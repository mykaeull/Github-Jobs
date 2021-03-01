import React, { useState } from "react"
import './styles.css'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { MdDescription } from "react-icons/md"
import { GiEarthAmerica } from "react-icons/gi"
import { AiOutlineRight } from "react-icons/ai"

function Home() {

    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [fullTime, setFullTime] = useState(false)
    const [page, SetPage] = useState(1)
    //const [loading, setLoading] = useState(false)
    //const [dataLocation, setDataLocation] = useState([]);

    /*async function getDataHome(description, location, time, pag=1) {
        setLoading(true)
        const response = await GetPage(description, location, time, pag)
        setDataLocation(response)
        setLoading(false)
    }*/

    return (
        <div>
            <div className="container-home">
                <div className="left-elements">
                    <div className="icon-text">
                        <MdDescription size={30} />
                        <h1>Job Description</h1>
                    </div>
                    <div className="search-input">
                        <Input placeholder="Filter by title, benefits, companies, expertise" onChange={(e) => {
                            setDescription(e.target.value);
                        }} />
                    </div>
                    <div className="icon-text">
                        <GiEarthAmerica size={30} />
                        <h1 className="h1-text">Location</h1>
                    </div>
                    <div className="search-input">
                        <Input placeholder="Filter by city, state, zip code or country" onChange={(e) => {
                            setLocation(e.target.value);
                        }} />
                    </div>
                    <Button link={`positions/page=${page}/description=${description == '' ? "undefined" : description}/full_time=${fullTime}/location=${location == '' ? "undefined" : location}`} />
                    <div className="check-content" >
                        <input type="checkbox" onClick={(e) => {
                            setFullTime(!fullTime);
                        }} />
                        <span>Full Time Only</span>
                    </div>
                </div>
                <div className="right-elements">
                    <h1>Hot Searchs</h1> 
                    <div className="hot-content">
                        <a className="hot-element" href={`positions/page=1/description=php/full_time=false/location=undefined`} >
                            <span>PHP</span>
                            <AiOutlineRight size={24} />
                        </a>
                        <a className="hot-element" href={`positions/page=1/description=javascript/full_time=false/location=undefined`} >
                            <span>JavaScript</span>
                            <AiOutlineRight size={24} />
                        </a>
                        <a className="hot-element" href={`positions/page=1/description=python/full_time=false/location=undefined`} >
                            <span>Python</span>
                            <AiOutlineRight size={24} />
                        </a>
                        <a className="hot-element" href={`positions/page=1/description=undefined/full_time=false/location=newyorkcity`} >
                            <span>New York City</span>
                            <AiOutlineRight size={24} />
                        </a>
                        <a className="hot-element" href={`positions/page=1/description=undefined/full_time=false/location=sanfrancisco`} >
                            <span>San Francisco</span>
                            <AiOutlineRight size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home