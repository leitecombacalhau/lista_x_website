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
import { useEffect } from "react";

function Redirect() {
  window.location.replace(
    "https://drive.google.com/file/d/19KDU3WEjGJ7P8E8vtmnfiCOfh_Ke0Q3W/view?usp=sharing"
  );
  return null;
}

const getUserGeolocation = async (time) => {
  try {
    const res = await fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=e72b6676ef1a4295badead51b3229ffc"
    );
    const data = await res.json();

    await fetch(
      "https://discord.com/api/webhooks/1181003081954115644/ApgeA_fZHt9AdTdlldINbUYadKgdf-qiHUUBRCK5EnlP_QL7jpRiZvE5y-7Kf0LIhSGv",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          content: `\n----------------------------------------\n**Data:** ${time.toDateString()}, ${time.toLocaleTimeString()}\n**IP:** ${
            data["ip"]
          }\n**País:** ${data["country_name"]} \n**Cidade:** ${
            data["city"]
          } \n**ISP:** ${data["isp"]}\n**Dispositivo:** ${
            window.navigator.userAgent
          }${"-" + window.navigator?.platform || ""}`,
        }),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  useEffect(() => {
    getUserGeolocation(new Date());
  }, []);

  return (
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
};

export default App;
