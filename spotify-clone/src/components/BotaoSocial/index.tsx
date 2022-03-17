import "./styles.css";
interface PropsBotaoSocial {
  link: string;
  titulo: string;
}
function BotaoSocial({ link, titulo }: PropsBotaoSocial) {
  return (
    <div className="botao-social">
      <img src={link} alt={titulo} />
    </div>
  );
}

export default BotaoSocial;
