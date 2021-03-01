import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

//pags
import Home from "./paginas/Home"
import Alljobs from "./paginas/Alljobs"
import DescPag from "./paginas/DescPag"
import HowWorks from "./paginas/HowWorks"

function Routes() {

    return (
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Alljobs} path="/positions/page=:pag/description=:description/full_time=:type/location=:location" exact />
            <Route component={DescPag} path="/post/:id" exact />
            <Route component={HowWorks} path="/faq" exact />
            <Redirect to="/" from="*" />
        </Switch>
    )
}

export default Routes