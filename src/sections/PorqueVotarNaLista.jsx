import Medidas from "../assets/docs/temp_medidas.pdf";

const PorqueVotar = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center max-container pt-[50px]">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-sm:padding-x-2">
        <a id="porque-votar-na-lista-x" className="anchor" />
        <p className="text-xl font-montserrat text-accent font-medium">
          #5 • Porquê votar na Lista 𝕏?
        </p>
        <h1 className="font-palanquin text-6xl max-sm:text-[50px] mobile-1:text-[56px] leading-none mobile-1:leading-[60px] max-sm:leading-[56px] font-bold">
          <span className="relative z-10 pr-10 whitespace-normal break-words">
            <span>Importância do voto</span>
          </span>
          <br />
          <span className="text-accent inline-block text-5xl">
            Dia da eleição
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-[30px] mt-6 mb-2 sm:max-w-[32rem]">
          A eleição dos deputados à Sessão Escolar ocorrerá no dia 14 de
          dezembro. Será importante usufruíres do dia de reflexão (13 de
          dezembro), para meditares na escolha importante que te espera no dia
          seguinte. Para te facilitar esse processo, disponibilizamos&nbsp;
          <a href={Medidas} target="_blank" rel="noreferrer noopener">
            as medidas que defendemos
            <i> (clica aqui). </i>
          </a>
          Para além disso, aqui tens alguns pontos que achamos importante teres
          em consideração:
          <br />
          <strong>A Lista 𝕏 certifica-se que...</strong>
          <br />
          <strong>• há diversidade de opiniões</strong> e pensamentos e que
          todos os seus membros têm voz na matéria de forma equitativa.
          <br />
          <strong>• todo o esforço e dedicação</strong> por parte dos seus
          constituintes é vocacionado para o desenvolvimento do projeto.
          <br />
          <strong>• os seus ideais são sustentados</strong> pela legislação
          vigente.
          <br />
          <strong>• as medidas que defende são exequíveis</strong>, inovadoras,
          objetivas e estão em conformidade com o tema.
        </p>
      </div>

      <div className="flex-1 flex max-xl:py-[18vh] bg-bg6 hover:bg-bg6* bg-contain bg-no-repeat bg-center" />
    </section>
  );
};

export default PorqueVotar;
