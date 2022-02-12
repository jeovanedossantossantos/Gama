import React from "react";
import { NavBar } from "./style";
import LogoGama from "../../assents/img/logo.png"
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../store/modules/user/type';
const Nav: React.FC = () => {
    const state = useSelector((state: IGlobalState) => state.users)
    return (
        <div>
            <NavBar>
                <img src={LogoGama} alt="" />
               <div className="nav-links">
                   <Link to='/'>Home</Link>
                   <Link to='/cursos'>Cursos</Link>
                   <Link to='/signup'>Cadastre-se</Link>
                   <Link to='/signin'>Login</Link>
                   {state !== null && (<Link to="/dashboard">
                       Dash
                   </Link>)}
               </div>
            </NavBar>
        </div>
    );
}

export default Nav