import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './styles.css'

function TableJobs({ dataLocation, dataLocationLength }) {

    

    return (
        <div className="container-table">
            <div className="container-middle">
                {dataLocationLength > 10 ?
                <span>Showing 1 - 10 of {dataLocationLength} jobs</span>
                :
                <span>Showing {dataLocationLength}</span>
                }
                <div className="content-elements">
                    <div className="left-elements">
                        {dataLocation.slice(0, 9).map((e, i) => (
                        <div className="item-table">
                            <Link to="/positions" >
                                <h3>{dataLocation[i].title}</h3>
                            </Link>
                            <span>{dataLocation[i].company}</span>
                            <div className="time">
                                Time: <span> {dataLocation[i].type}</span>
                            </div>
                            <div className="location">
                                <span>Location: {dataLocation[i].location}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableJobs