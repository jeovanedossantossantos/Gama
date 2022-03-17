import styled from "styled-components"

export const Main = styled.main`
    
    
    background: #2941AB;
    height: 90vh;
    color:#1ED760;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:30px;
    background-image: url(https://www-growth.scdn.co/static/home/bursts.svg);
  background-position: 46% 4%;
  background-size: 175%;
  font-family: Helvetica;
  
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    @media (max-width:769px){
        height: 100vh;
    }

    p{

        text-align: center;  
        font-weight: bold;
        font-size:25px;
        margin-bottom:-10px;
        
    }
    

`
export const Titulo = styled.h1`

    font-size: 156px;
    text-align: center;
    @media (max-width:600px){
        font-size: 90px;
    }
    @media (max-width:320px){
        font-size: 60px;
    }

`

