import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Container } from "./style";

const Header: React.FC = () => {
  return (
    
    <Container>
      <header className="menu web">
        <div className="wrapper">
          <img className="logo" src={Logo} alt="Logo Spotify" />

          <nav>
            <Link to={"/"}>Premium</Link>
            <Link to={"/sobre"}>Sobre</Link>
            <Link to="">Baixar</Link>
            <span className="divisor"></span>
            <Link to="">Inscrever-se</Link>
            <Link to="">Entrar</Link>
          </nav>
        </div>
      </header>

      <nav className="navbar navbar-light preto fixed-top mobile">
        <div className="container-fluid">
         <Link to={"/"} className="navbar-brand" 
            style={{ color: "white" }}
          ><img className="logo" src={Logo} alt="Logo Spotify" /></Link>
          <button style={{ color: "#fff", background:"#fff" }} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon " style={{ color: "#fff" }} ></span>
          </button>
          <div className="offcanvas offcanvas-end preto" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img className="logo" src={Logo} alt="Logo Spotify" /></h5>
              <button type="button" className="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                 <Link to={"/"} className="nav-link active text-light" aria-current="page" >Premium</Link>
                </li>
                <li className="nav-item">
                 <Link to={"/sobre"} className="nav-link text-light" >Sobre</Link>
                </li>
                <li className="nav-item">
                 <Link to="" className="nav-link text-light" >Baixar</Link>
                </li>
                <li className="nav-item">
                 <Link to="" className="nav-link text-light" >Suporte</Link>
                </li>
                <li className="nav-item">
                 <Link to="" className="nav-link text-light" >Suporte</Link>
                </li>

                
              </ul>
             
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
