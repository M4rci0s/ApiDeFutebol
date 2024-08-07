import styles from "./Card.module.css";

function Card(props) {
  return (
    <section className={styles.card}>
      <h3>{props.nome}</h3>
      {<img src={props.imagem_mascote} alt="" />}
      <p>{props.mascote}</p>
    </section>
  );
}

export default Card;
