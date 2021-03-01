import React from "react"
import './styles.css'
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"

function Button({link, ...rest}) {

    return (
        <a href={link} className="search-btn" {...rest}>
            <FiSearch size={18} style={{marginRight: "8px"}} />
            Search
        </a>
    )
}

export default Button