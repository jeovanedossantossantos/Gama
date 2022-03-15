import React from 'react';
import Butto  from '../Button';
import { Header } from '../Header';
import { Main, Titulo} from './style';

export const Banner: React.FC=()=>{

    return (
        <Main>
            <Header></Header>
           <Titulo>Escutar muda<br></br>tudo</Titulo>
           <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
           <Butto text="Baixe o Spotify FREE" background="#1ED760" color='#2941AB'/>
        </Main>
    )

}