
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import styles from "../Mascotes/Mascotes.module.css";

function Mascotes() {
  const [times, setMascotes] = useState([]);

  useEffect(() => {
    const buscarMascotes = async () => {
      const response = await fetch("./apifut.json");
      console.log(response)
      const data = await response.json();
      console.log(data)
      setMascotes(data.times);
    };
    buscarMascotes();
  }, []);

  return (
    <>
      <section className={styles.mascotes}>
        <h2>Mascotes</h2>
        {times.length > 0 ? ( 
          <section className={styles.lista}>
            {times.map((masc) => (
              <Card
                mascote={masc.mascote}
                imagem_mascote={masc.imagem_mascote}
                nome={masc.nome}
              />
            ))}
          </section>
        ) : (
          <p>Carregando mascotes...</p>
        )}
      </section>
    </>
  );
}
export default Mascotes;
