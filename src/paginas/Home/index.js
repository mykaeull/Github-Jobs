import React, { useState, useEffect } from "react"
import './styles.css'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { MdDescription } from "react-icons/md"
import { GiEarthAmerica } from "react-icons/gi"
import { AiOutlineRight } from "react-icons/ai"
import Alljobs from "../Alljobs"

function Home() {

    const [atualizar, setAtualizar] = useState(false)
    const [descripton, setDescripton] = useState('')
    const [location, setLocation] = useState('')
    const [fullTime, setFullTime] = useState(false)

    return (
        <div>
            {atualizar && atualizar? 
            <Alljobs desc={descripton} loc={location} fullTime={fullTime} />
            :
            <div className="container-home">
                <div className="left-elements">
                    <div className="icon-text">
                        <MdDescription size={30} />
                        <h1>Job Description</h1>
                    </div>
                    <div className="search-input">
                        <Input placeholder="Filter by title, benefits, companies, expertise" onChange={(e) => {
                            setDescripton(e.target.value);
                            console.log(descripton);
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
                        e.preventDefault();
                        setAtualizar(true);
                    }} />
                    <div className="check-content" >
                        <input type="checkbox" onClick={(e) => {
                            setFullTime(!fullTime);
                            console.log(fullTime);
                        }} />
                        <span>Full Time Only</span>
                    </div>
                </div>
                <div className="right-elements">
                    <h1>Hot Searchs</h1> 
                    <div className="hot-content">
                        <div className="hot-element">
                            <span>PHP</span>
                            <AiOutlineRight size={24} />
                        </div>
                        <div className="hot-element">
                            <span>JavaScript</span>
                            <AiOutlineRight size={24} />
                        </div>
                        <div className="hot-element">
                            <span>Python</span>
                            <AiOutlineRight size={24} />
                        </div>
                        <div className="hot-element">
                            <span>New York City</span>
                            <AiOutlineRight size={24} />
                        </div>
                        <div className="hot-element">
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