import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";

const Routes = ()=>{
    return (
        <BrowserRouter>

        <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/contact"} exact component={Contact}></Route>
        </Switch>
          
        
        </BrowserRouter>
    )
}

export default Routes;