import React from "react"
import './styles.css'
import { MdDescription } from "react-icons/md"
import { GiEarthAmerica } from "react-icons/gi"
import Input from "../Input"
import Button from "../Button"

function HeaderJobs() {

    return (
        <div className="header-jobs">
            <div className="container-header-jobs">
                <div className="icon-text">
                    <MdDescription size={18} />
                    <h3>Job Description</h3>
                </div>
                <div className="search-input">
                    <Input placeholder="Filter by title, benefits, companies, expertise" style={{height: "30px"}}  />
                </div>
                <div className="icon-text">
                    <GiEarthAmerica size={18} />
                    <h3>Location</h3>
                </div>
                <div className="search-input">
                    <Input placeholder="Filter by city, state, zip code or country" style={{height: "30px"}}  />
                </div>
                <Button />
                <div className="check-content" >
                    <input type="checkbox" />
                    <span>Full Time Only</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderJobs