import Card from "../../components/Card2";
import { useEffect, useState } from "react";
import styles from "./Estados.module.css";

function Estados() {
  const [times, setMascotes] = useState([]);
  const [filtro, setFiltro] = useState(null);

  useEffect(() => {
    const buscarEstados = async () => {
      const response = await fetch("./apifut.json");
      console.log(response)
      const data = await response.json();
      console.log(data)
      setMascotes(data.times);
    };
    buscarEstados();
  }, []);

  function filtagem(time){
    if(time.estado == filtro || filtro == null) {
      return true
    }
  }

  


  return (
    <>
      <section className={styles.estados}>
        
        <h2>Estados</h2>

      <nav id={styles.navEst}>

      <button onClick={() => setFiltro("Minas Gerais")}>
         <h4>Minas Gerais</h4> 
        </button>

        <button onClick={() => setFiltro("São Paulo")}>
          <h4>São Paulo</h4>
        </button>

        <button onClick={() => setFiltro("Rio de Janeiro")}>
          <h4>Rio de Janeiro</h4>
        </button>

        <button onClick={() => setFiltro("Ceará")}>
        <h4>Ceará</h4>
        </button>

        <button onClick={() => setFiltro("Goiás")}>
        <h4>Goiás</h4>
        </button>

        <button id="rgs" onClick={() => setFiltro("Rio Grande do Sul")}>
        <h4>Rio Grande do Sul</h4>
        </button>

        <button onClick={() => setFiltro("Paraná")}>
        <h4>Paraná</h4>
        </button>

        <button onClick={() => setFiltro("Mato Grosso")}>
        <h4>Mato Grosso</h4>
        </button>

        <button onClick={() => setFiltro("Bahia")}>
        <h4>Bahia</h4>
        </button>

        <button onClick={() => setFiltro("Pernambuco")}>
        <h4>Pernambuco</h4>
        </button>

        <button onClick={() => setFiltro("Santa Catarina")}>
        <h4>Santa Catarina</h4>
        </button>
        
      </nav>
       

        {times.length > 0 ? ( 
          <section className={styles.lista}>
            {times.filter(filtagem).map((estd) => (
              <Card
              estado={estd.estado}
                nome={estd.nome}
              />
            ))}
          </section>
        ) : (
          <p>Carregando estados...</p>
        )}
      </section>
    </>
  );
}

export default Estados;