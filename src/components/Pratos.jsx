const Pratos = ({ imagem, nome, descricao, preco }) => {
  return (
    <div className=" bg-mint-500 rounded-3xl content-center items-center flex flex-col h-[53vh] w-[45vw] ">
      <img
        className=" -mt-[4vw] w-[17vw] "
        src={imagem}
        alt="imagem do produto"
      />

      <p className=" mt-[2vh] mb-[2vh] font-[Koh-Santepheap] text-[2rem] text-center text-[#232323] leading-none ">
        {nome}
      </p>
      <p className=" font-[Poppins] text-[1.2rem] text-center mt-[2vh] mb-[2vh] text-[#232323]">
        {descricao}
      </p>
      <p className=" font-[Koh-Santepheap] text-[2rem] font-bold text-[#ff0000] ">
        {preco}
      </p>
    </div>
  );
};

export default Pratos;
