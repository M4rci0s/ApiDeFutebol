import styles from "./Tabela.module.css";
import { useState, useEffect } from "react";
import Tabelaa from "../../components/Tabelaa/index"

function Tabela() {
  const [times, setTabela] = useState([]);

  useEffect(() => {
    buscarTimes();
  }, []);

  const buscarTimes = async () => {
    const response = await fetch("./apifut.json");
    console.log(response)
    const data = await response.json();
    console.log(data)
    setTabela(data.times);
  };


  return (
    <>
      <h1>Tabela</h1>
        <tr>
          <th>Sigla</th>
          <th>Nome</th>
          <th>Estado</th>
          <th>Pontos</th>
        </tr>

        <section className={styles.tabelaa}>
        {times.length > 0 ? ( 
          <section className={styles.lista}>
            {times.map((tabela) => (
              <Tabelaa
                sigla={tabela.sigla}
                nome={tabela.nome}
                estado={tabela.estado}
                pontos={tabela.pontos}
              />
            ))}
          </section>
        ) : (
          <p>Carregando tabela...</p>
        )}
      </section>
    </>
  )
}

export default Tabela;
