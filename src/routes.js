import React from "react"
import { Route, Switch } from "react-router-dom"

//pags
import Home from "./paginas/Home"
import Alljobs from "./paginas/Alljobs"

function Routes() {

    return (
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Alljobs} path="/positions" exact />
        </Switch>
    )
}

export default Routes