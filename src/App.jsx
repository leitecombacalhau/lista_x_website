import {
  Footer,
  Hero,
  PorqueVotar,
  ParlamentoJovens,
  Tema,
  PorqueVotarNaLista,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
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
);

export default App;
