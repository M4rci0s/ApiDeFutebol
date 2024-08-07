import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tabela from "./pages/Tabela";
import Mascotes from "./pages/Mascotes";
import Estados from "./pages/Estados";
import PageBase from "./pages/PaginaBase";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
        <Route path='/' element={ <PageBase /> }/>
          <Route index element={<Home />}></Route>
          <Route path="/tabela" element={<Tabela />}></Route>
          <Route path="/mascotes" element={<Mascotes />}></Route>
          <Route path="/estados" element={<Estados />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
