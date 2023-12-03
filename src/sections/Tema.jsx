const ParlamentoJovens = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center max-container pt-[50px]">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-sm:padding-x-2">
        <a id="tema" className="anchor" />
        <p className="text-xl font-montserrat text-accent font-medium">
          #3 • Qual é o tema deste ano?
        </p>
        <h1 className="font-palanquin text-6xl max-sm:text-[50px] mobile-1:text-[56px] leading-none mobile-1:leading-[60px] max-sm:leading-[56px] font-bold">
          <span className="relative z-10 pr-10 whitespace-normal break-words">
            <span>Parlamento dos Jovens</span>
          </span>
          <br />
          <span className="text-accent inline-block text-5xl">Tema deste ano</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-[30px] mt-6 mb-2 sm:max-w-[32rem]">
          Todos os anos, os estudantes participantes do Parlamento dos Jovens escolhem o
          assunto a tratar no próximo ano. Para este ano, 2023, foi escolhido o tema
          <strong>
            <i>
              &quot;Viver Abril na Educação: caminhos para uma escola mais
              plural e participativa&quot;
            </i>
          </strong>
          . A Lista 𝕏 certifica-se de que as medidas que apresenta são exequíveis,
          inovadoras, objetivas e estão em
          <strong> conformidade com o tema</strong>. <i>(clica na imagem adjacente
          para acaderes ao site do PdJ)</i>
        </p>
      </div>

      <a
        className="flex-1 flex max-xl:py-[18vh] bg-bg5 bg-contain bg-no-repeat bg-center"
        href="https://jovens.parlamento.pt/"
        target="_blank"
        rel="noreferrer"
      />
    </section>
  );
};

export default ParlamentoJovens;
