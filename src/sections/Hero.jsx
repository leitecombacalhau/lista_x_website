const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center max-container pt-28">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-sm:padding-x-2">
        <a id="a-nossa-lista" className="anchor" />
        <p className="text-xl font-montserrat text-accent font-medium">
          #1 • Quem somos?
        </p>
        <h1 className="mt-4 font-palanquin text-6xl max-sm:text-[50px] mobile-1:text-[56px] leading-none mobile-1:leading-[60px] max-sm:leading-[56px] font-bold">
          <span className="relative z-10 pr-10 whitespace-normal break-words">
            <span>
              {/* <span className="xl:whitespace-nowrap xl:bg-bg2 xl:bg-cover xl:bg-no-repeat xl:bg-right xl:pr-4 xl:h-[82px] xl:inline-block"> */}
              Agrupamento de Escolas
            </span>
            <br />
            Condeixa-a-Nova
          </span>
          <br />
          <span className="text-accent inline-block text-5xl">A Lista 𝕏</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-[30px] mt-6 mb-2 sm:max-w-[32rem]">
          A nossa equipa é composta por 10 elementos, enquadrados em mais que um
          curso, o que nos confere com uma extensa panóplia de aptidões em
          diversos ramos do conhecimento e artes: ciências socioeconómicas,
          ciências naturais e formais, ciências aplicadas, artes e multimédia,
          <i> etc. </i>
          Decidimos que não iríamos permanecer quietos a observar o declínio da
          educação no nosso país e resolvemos mobilizar as nossas competências
          para alterar aquilo que tem que ser alterado, e que, através de
          projetos como este, se encontra
          <strong> ao nosso e ao teu alcance</strong>!
        </p>
      </div>

      <div className="flex-1 flex max-xl:py-[18vh] bg-bg1* bg-contain bg-no-repeat bg-center" />
    </section>
  );
};

export default Hero;
