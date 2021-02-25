import React from "react"
import './styles.css'

function Input({...rest}) {

    return (
        <input className="input-padrao" {...rest} />
    )
}

export default Input