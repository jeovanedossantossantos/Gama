import Button from "../Button";
import { Main, Titulo } from "./style";


function Banner() {
  return (
    <Main id="banner">
      <Titulo>
        Escutar muda <br />
        tudo
      </Titulo>
      <p>
        Milhões de músicas e podcasts para explorar. E nem precisa de cartão de
        crédito.
      </p>
      <div style={{ marginTop: -10 }}>
        <Button text="Baixe o Spotify FREE" background="#1ED760" color='#2941AB' />
      </div>
    </Main>
  );
}

export default Banner;
