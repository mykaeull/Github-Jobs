import React from "react"
import { Link } from "react-router-dom"
import './styles.css'

function TableJobs({desc, loc, time, dataLocation, dataLocationLength, page, setPage }) {

    return (
        <div className="container-table">
            <div className="container-middle">
                <span>Showing {dataLocationLength} - page {page}</span>
                <div className="content-elements">
                    <div className="left-elements">
                        {dataLocation.map((element, index) => (
                        <div key={index} className="item-table">
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
            <Link to={`/positions/page=${page+1}/description=${desc === '' ? "undefined" : desc}/full_time=${time}/location=${loc === '' ? "undefined" : loc}`} className="btn" onClick={(e) => {
                setPage(page+1)
            }} >
                <h4>show more</h4>
            </Link>
        </div> 
    )
}

export default TableJobs