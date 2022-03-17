import { Container } from "./style";
interface PropsBotaoSocial {
  link: string;
  titulo: string;
}
function BotaoSocial({ link, titulo }: PropsBotaoSocial) {
  return (
    <Container>
      <img src={link} alt={titulo} />
    </Container>
  );
}

export default BotaoSocial;
