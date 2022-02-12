import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./private.routes";
import Home from "./views/Home";
import Cursos from "./views/Cursos";
import SignIn from "./views/Signin";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard"

const Routes = ()=>{
    return (
        <BrowserRouter>

        <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/cursos"} exact component={Cursos}></Route>
            
            <Route path={"/signin"} exact component={SignIn}></Route>
            
            <Route path={"/signup"} exact component={SignUp}></Route>

            <PrivateRoute path={"/dashboard"} exact component={Dashboard}/>
        </Switch>
          
        
        </BrowserRouter>
    )
}

export default Routes;