const PorqueVotar = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center max-container pt-[50px]">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-sm:padding-x-2">
        <a id="porque-votar" className="anchor" />
        <p className="text-xl font-montserrat text-accent font-medium">
          #4 • Porquê votar?
        </p>
        <h1 className="font-palanquin text-6xl max-sm:text-[50px] mobile-1:text-[56px] leading-none mobile-1:leading-[60px] max-sm:leading-[56px] font-bold">
          <span className="relative z-10 pr-10 whitespace-normal break-words">
            <span>Revolução 25 de abril & Democracia</span>
          </span>
          <br />
          <span className="text-accent inline-block text-5xl">
            Direito ao voto
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-[30px] mt-6 mb-2 sm:max-w-[32rem]">
          Estamos quase a celebrar os 50 anos do fim de uma ditadura que vigorou
          durante 41 anos. Não deveríamos deixar que toda a luta envolvida em
          tornar isso numa realidade fosse desperdiçada devido à preguiça de se
          deslocar à urna de voto.
          <br />
          <strong>Ao votar...</strong>
          <br />
          <strong>• não deixamos</strong> que os outros decidam por nós.
          <br />
          <strong>• participamos</strong> na decisão de assuntos com grande
          impacto na vida de todos.
          <br />
          <strong>• defendemos</strong> o direito à opinião do cidadão.
          <br />
          <strong>• igualamo-nos</strong> aos outros cidadãos na medida em que
          cada voto tem o mesmo valor.
        </p>
      </div>

      <div className="flex-1 flex max-xl:py-[18vh] bg-bg3 bg-contain bg-no-repeat bg-center" />
    </section>
  );
};

export default PorqueVotar;
