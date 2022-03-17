import React from "react";
import Logo from "../../assets/images/logo.png";
import IconInsta from "../../assets/images/icon-insta.png";
import BotaoSocial from "../BotaoSocial";
import Lista from "../Lista";

// import "./styles.css";
import { FooterStyle } from "./style";
const listaEmpresa = [
  {
    nome: "Sobre",
    link: "#",
  },
  {
    nome: "Empregos",
    link: "#",
  },
  {
    nome: "For the Record",
    link: "#",
  },
];

const listaComunidades = [
  {
    nome: "Para Artistas",
    link: "#",
  },
  {
    nome: "Desenvolvedores",
    link: "#",
  },
  {
    nome: "Publicidade",
    link: "#",
  },
  {
    nome: "Investidores",
    link: "#",
  },
  {
    nome: "Fornecedores",
    link: "#",
  },
];

const listaLinks = [
  {
    nome: "Suporte",
    link: "#",
  },
  {
    nome: "Player da Web",
    link: "#",
  },
  {
    nome: "Aplicativo móvel grátis",
    link: "#",
  },
];
const Footer: React.FC = () => {
  return (
    <FooterStyle >
      <div className="wrapper">
        <img className="logo" src={Logo} alt="Logo spotify" />
        <Lista titulo="EMPRESA" itens={listaEmpresa} />
        <Lista titulo="COMUNIDADES" itens={listaComunidades} />
        <Lista titulo="LINKS ÚTEIS" itens={listaLinks} />
        <div className="redes">
          <BotaoSocial link={IconInsta} titulo="insta" />
          <BotaoSocial link={IconInsta} titulo="insta" />
          <BotaoSocial link={IconInsta} titulo="insta" />
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
