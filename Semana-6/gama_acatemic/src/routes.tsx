import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import SignIn from "./views/Signin";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard"

const Routes = ()=>{
    return (
        <BrowserRouter>

        <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/contact"} exact component={Contact}></Route>
            
            <Route path={"/signin"} exact component={SignIn}></Route>
            
            <Route path={"/signup"} exact component={SignUp}></Route>

            <Route path={"/dashboard"} component={Dashboard}></Route>
        </Switch>
          
        
        </BrowserRouter>
    )
}

export default Routes;