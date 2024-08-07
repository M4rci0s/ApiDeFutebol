import styles from "./Tabelaa.module.css";

function Tabelaa(props) {
    return (
        <section className={styles.tabelaa}>
            <tr>
                <th>{props.sigla}</th>
                <th>{props.nome}</th>
                <th>{props.estado}</th>
                <th>{props.pontos}</th>
            </tr>
        </section>
    );
}

export default Tabelaa;