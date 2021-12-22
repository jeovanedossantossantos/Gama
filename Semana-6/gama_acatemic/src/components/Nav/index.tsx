import React from "react";
import { NavBar } from "./style";
import LogoGama from "../../assents/img/logo.png"
import {Link} from 'react-router-dom'
const Nav: React.FC = () => {
    return (
        <div>
            <NavBar>
                <img src={LogoGama} alt="" />
               <div className="nav-links">
                   <Link to='/'>Home</Link>
                   <Link to='/cursos'>Cursos</Link>
                   <Link to='/signup'>Cadastre-se</Link>
                   <Link to='/signin'>Login</Link>
               </div>
            </NavBar>
        </div>
    );
}

export default Nav