import styled from "styled-components"

export const Main = styled.main`

    background: #2941AB;
    height: 100vh;
    color:#1ED760;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:30px;

    p{
        text-align: center;  
        font-weight: bold;
        font-size:20px;
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

