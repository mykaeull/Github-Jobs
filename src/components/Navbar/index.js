import React, { useState } from "react"
import './styles.css'
import { Link } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose, AiFillGithub } from "react-icons/ai"

function Navbar() {

    const [menu, setMenu] = useState(true);

    /*window.addEventListener('click', (e) => {
        if ((e.target).id == "teste") {
            setMenu(false);
        } 
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === "Escape") {
          setMenu(false);
        }
    })*/

    return (
        <div className="header-container" id="teste">
            {menu && menu? 
            <></>
            :
            <div className="menu">
                <a href="/positions">
                    <div className="first-item">
                        All jobs
                    </div>
                </a>
                <a href="/">
                    <div className="first-item">
                        Post a job
                    </div>
                </a>
                <a href="/faq" style={{borderRadius: "0 0 4px 4px"}}>
                    <div className="first-item">
                        How it works
                    </div>
                </a>
            </div>
            }
            <div className="header-content">
                <div className="logo">
                    <a href="/">
                        <h2>Github Jobs</h2>
                    </a>
                </div>
                <div className="logo-git">
                    <a href="/">
                        <AiFillGithub size={30} color={"#FFFFFF"} />
                    </a>
                </div>
                <div className="links">
                    <Link to="/positions">All jobs</Link>
                    <Link to="/">Post a job</Link>
                    <Link to="/faq">How it works</Link>
                </div>
                {menu && menu? 
                <div className="menu-icon" onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                }}>
                    <AiOutlineMenu size={24} color={"#FFFFFF"} />
                </div>
                :
                <div className="close-icon" onClick={(e) => {
                    e.preventDefault();
                    setMenu(true);
                }}>
                    <AiOutlineClose size={24} color={"#FFFFFF"} />
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar