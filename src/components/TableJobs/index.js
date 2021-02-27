import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './styles.css'

function TableJobs({ dataLocation, dataLocationLength, page, setPage, clickShowMore, setClickShowMore }) {

    return (
        <div className="container-table">
            <div className="container-middle">
                <span>Showing {dataLocationLength} - page {page}</span>
                <div className="content-elements">
                    <div className="left-elements">
                        {dataLocation.map((element) => (
                        <div className="item-table">
                            <Link to={`/post/${element.id}`} >
                                <h3>{element.title}</h3>
                            </Link>
                            <span>{element.company}</span>
                            <div className="time">
                                Time: <span> {element.type}</span>
                            </div>
                            <div className="location">
                                <span>Location: {element.location}</span>
                            </div>
                            <div className="created-at">
                                <span>{element.created_at}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="btn" onClick={(e) => {
                setPage(page+1);
                setClickShowMore(!clickShowMore)
            }}>
                <h4>show more</h4>
            </div>
        </div> 
    )
}

export default TableJobs