import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>Brasileirão 2021</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tabela">Tabela</Link>
        <Link to="/mascotes">Mascotes</Link>
        <Link to="/estados">Estados</Link>
      </nav>
    </header>
  );
}

export default Header;
