import React, { useState } from "react"
import './styles.css'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { MdDescription } from "react-icons/md"
import { GiEarthAmerica } from "react-icons/gi"
import { AiOutlineRight } from "react-icons/ai"
import GenericPag from "../GenericPag"

function Home() {

    const [atualizar, setAtualizar] = useState(false)
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [fullTime, setFullTime] = useState(false)
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
            {atualizar && atualizar? 
            <GenericPag desc={description} loc={location} fullTime={fullTime} setDesc={setDescription} setLoc={setLocation} setFullTime={setFullTime} />
            :
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
                    <Button onClick={(e) => {
                        //getDataHome(description, location, fullTime, 1)
                        setAtualizar(true);
                    }} />
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
                        <div className="hot-element" onClick={(e) => {
                            setDescription('php')
                            setAtualizar(true)
                        }}>
                            <span>PHP</span>
                            <AiOutlineRight size={24} />
                        </div>
                        <div className="hot-element" onClick={(e) => {
                            setDescription('javascript')
                            setAtualizar(true)
                        }}>
                            <span>JavaScript</span>
                            <AiOutlineRight size={24} />
                        </div>
                        <div className="hot-element" onClick={(e) => {
                            setDescription('python')
                            setAtualizar(true)
                        }}>
                            <span>Python</span>
                            <AiOutlineRight size={24} />
                        </div>
                        <div className="hot-element" onClick={(e) => {
                            setLocation('newyork')
                            setAtualizar(true)
                        }}>
                            <span>New York City</span>
                            <AiOutlineRight size={24} />
                        </div>
                        <div className="hot-element" onClick={(e) => {
                            setLocation('sanfrancisco')
                            setAtualizar(true)
                        }}>
                            <span>San Francisco</span>
                            <AiOutlineRight size={24} />
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Home