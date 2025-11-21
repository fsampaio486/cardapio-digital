import imgPrato from "../assets/imagens-pratos/5.png";

const SobreNos = () => {
  return (
    <section
      id="sobreNos"
      className="flex flex-col justify-between items-center h-[75vh] "
    >
      <div className=" flex justify-between  w-[70vw] h-[65vh] mt-[10vh] ">
        <div className=" flex justify-start items-start ">
          <img
            className="w-[30vw] h-[30vw] rounded-[2vw] "
            src={imgPrato}
            alt="Prato típico"
          />
        </div>

        <div className=" w-[35vw] h-[30vw] ">
          <p className="text-[1.5rem] text-[#ff0000] font-[Koh-Santepheap] mb-[2vh]">
            Sobre nós
          </p>
          <h2 className=" text-[3rem] font-[Koh-Santepheap] w-[25vw] mb-[3vh] leading-none">
            Feita de forma tradicional
          </h2>
          <p className=" text-[1.4rem] mt-[1vw] text-justify ">
            Cada prato "feita de forma tradicional" é uma ode à excelência.
            Desde o meticuloso corte do sashimi até a preparação delicada do
            sushi, cada etapa é uma reverência à herança culinária do Japão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
