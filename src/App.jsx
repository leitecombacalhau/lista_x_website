import {
  Footer,
  Hero,
  PorqueVotar,
  ParlamentoJovens,
  Tema,
  PorqueVotarNaLista,
} from "./sections";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";

function Redirect() {
  window.location.replace(
    "https://drive.google.com/file/d/1K0Z2GHpxr9w2KpnshSOfA2GE9jRBy3Cb/view?usp=sharing"
  );
  return null;
}

const App = () => (
  <Routes>
    <Route path="/medidas" element={<Redirect />} />
    <Route
      path="/"
      element={
        <main className="relative bg-background">
          <section className="xl:padding-l wide:padding-r">
            <Hero />
          </section>
          <section className="xl:padding-l wide:padding-r">
            <ParlamentoJovens />
          </section>
          <section className="xl:padding-l wide:padding-r">
            <Tema />
          </section>
          <section className="xl:padding-l wide:padding-r">
            <PorqueVotar />
          </section>
          <section className="xl:padding-l wide:padding-r">
            <PorqueVotarNaLista />
          </section>
          <section className="bg-secondary padding-x padding-t pb-8 mt-20">
            <Footer />
          </section>
          <Nav />
        </main>
      }
    />
  </Routes>
);

export default App;
