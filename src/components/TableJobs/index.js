import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './styles.css'

function TableJobs({ dataLocation }) {

    const [teste, setTeste] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

    return (
        <div className="container-table">
            <div className="container-middle">
                <span>Showing 1 - 10 of 18 jobs</span>
                <div className="content-elements">
                    <div className="left-elements">
                        {teste.map((e) => (
                        <div className="item-table">
                            <Link to="/positions" >
                                <h3>{dataLocation[e].title}</h3>
                            </Link>
                            <Link to="positions" >
                                <span>{dataLocation[e].company}</span>
                            </Link>
                            <div className="time">
                                Time: <span> {dataLocation[e].type}</span>
                            </div>
                            <div className="location">
                                <span>Location: {dataLocation[e].location}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="right-elements">
                        oi
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableJobs