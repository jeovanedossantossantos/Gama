import "./styles.css";

interface PropsButton {
  texto: string;
  variante: string;
}

export default function Button(props: PropsButton) {
  return <button className={`button ${props.variante}`}>{props.texto}</button>;
}
