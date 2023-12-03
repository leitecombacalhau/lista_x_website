const ParlamentoJovens = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center max-container pt-[50px]">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-sm:padding-x-2">
        <a id="o-que-e-pdj" className="anchor" />
        <p className="text-xl font-montserrat text-accent font-medium">
          #2 • O que é o Parlamento dos Jovens?
        </p>
        <h1 className="font-palanquin text-6xl max-sm:text-[50px] mobile-1:text-[56px] leading-none mobile-1:leading-[60px] max-sm:leading-[56px] font-bold">
          <span className="relative z-10 pr-10 whitespace-normal break-words">
            <span>Parlamento dos Jovens</span>
          </span>
          <br />
          <span className="text-accent inline-block text-5xl">Objetivos</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-[30px] mt-6 mb-2 sm:max-w-[32rem]">
          O Programa Parlamento dos Jovens é, desde 1995, uma iniciativa da
          Assembleia da República, dirigida aos jovens dos 2.º e 3.º ciclos do
          ensino básico e do ensino secundário, de escolas do ensino público,
          particular e cooperativo do Continente, das Regiões Autónomas e dos
          círculos da Europa e de Fora da Europa.
          <br />
          <strong> O Programa pretende...</strong>
          <br /><strong>• educar</strong> para a cidadania,
          <strong> estimulando</strong> o gosto pela participação cívica e
          política.
          <br /><strong>• promover</strong> o debate democrático e o respeito
          pela diversidade de opiniões.
          <br /><strong>• incentivar</strong> a reflexão e o debate sobre um
          tema pertinente, definido anualmente.
          <br /> <i>(clica na imagem adjacente para acaderes ao site do PdJ)</i>
        </p>
      </div>

      <a
        className="flex-1 flex max-xl:py-[18vh] bg-bg4 bg-contain bg-no-repeat bg-center"
        href="https://jovens.parlamento.pt/"
        target="_blank"
        rel="noreferrer"
      />
    </section>
  );
};

export default ParlamentoJovens;
