import "./styles.css";

interface Item {
  nome: string;
  link: string;
}
interface PropsLista {
  titulo: string;
  itens: Item[];
}
function Lista({ itens, titulo }: PropsLista) {
  return (
    <ul className="lista">
      <h4>{titulo}</h4>
      {itens.map((item) => (
        <li>
          <a href={item.link}>{item.nome}</a>
        </li>
      ))}
    </ul>
  );
}

export default Lista;
