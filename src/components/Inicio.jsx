import imgSushi from "../assets/imagens-pratos/1.png";

const Inicio = () => {
  return (
    <section
      id="inicio"
      className="flex justify-between items-center w-[70vw] mt-[10vh] mb-[11vh] "
    >
      <div className="w-[40vw] ">
        <h2 className=" font-[Koh-Santepheap] text-[3rem] mb-[3vh]">
          Comida Oriental
        </h2>
        <p className="font-[Poppins] text-[1.5rem] text-justify">
          A culinária Japonesa é bastante equilibrada, sendo muito rica em
          peixes (ômega 3), vegetais, massas e ingredientes frescos.
        </p>
        <p className=" rounded-[2vw] bg-[#FF0000] text-[#ffff] w-[15vw] h-[7vh] text-[1.4rem] flex items-center justify-center mt-[4vw] cursor-pointer">
          Ver cardápio
        </p>
      </div>
      <div>
        <img className="w-[25vw] h-[35vw]" src={imgSushi} alt="Imagem sushi" />
      </div>
    </section>
  );
};

export default Inicio;
