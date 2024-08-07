import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={styles.home}>
        <figure>
          <img
            className={styles.img_home}
            src="/foto.svg"
            alt="Imagem de Home"
          />
        </figure>
      </section>
    </>
  );
}

export default Home;
