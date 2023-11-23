const Hero = () => {
  return (
    <section
      id="a-nossa-lista"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 max-sm:padding-x-2">
        <p className="text-xl font-montserrat text-accent font-medium">
          #1 • Quem somos?
        </p>
        <h1 className="mt-4 font-palanquin text-6xl max-sm:text-[50px] mobile-1:text-[72px] leading-none mobile-1:leading-[82px] max-sm:leading-[56px] font-bold">
          <span className="relative z-10 pr-10 whitespace-normal break-words">
            <span className="xl:whitespace-nowrap xl:bg-bg2 xl:bg-cover xl:bg-no-repeat xl:bg-right xl:pr-4 xl:h-[82px] xl:inline-block">
              Agrupamento de Escolas
            </span>
            <br />
            Condeixa-a-Nova
          </span>
          <br />
          <span className="text-accent inline-block mt-3">A Nossa Lista</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Conjunto de mambos malucos que vão dar <i>box</i> no André Ventura e
          comer uns bons chocolates em Bruxelas. Odiamos o Cassiano e o pai do
          Henrique Claro. Obrigado pela compreensão. <strong>Vota 𝕏 </strong>
        </p>
      </div>

      <div className="flex-1 flex xl:min-h-screen max-xl:py-[20vh] bg-bg1* bg-contain bg-no-repeat bg-center" />
    </section>
  );
};

export default Hero;
