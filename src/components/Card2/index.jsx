import styles from "./Card.module.css";

function Card(props) {
  return (
    <section className={styles.card}>
      <h3>{props.nome}</h3>
      <p>{props.estado}</p>
    </section>
  );
}

export default Card;
