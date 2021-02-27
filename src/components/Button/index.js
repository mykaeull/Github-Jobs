import React from "react"
import './styles.css'
import { FiSearch } from "react-icons/fi"

function Button({link, ...rest}) {

    return (
        <button className="search-btn" {...rest}>
            <FiSearch size={18} style={{marginRight: "8px"}} />
            Search
        </button>
    )
}

export default Button