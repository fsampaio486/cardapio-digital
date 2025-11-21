import Pratos from "./Pratos";
import { pratosPopulares } from "../assets/cardapio";
import Header from "./Header";
import { Link } from "react-router-dom";

const Populares = () => {
  return (
    <section id="populares" className=" m-[2vh] w-[70vw] ">
      <h2
        id="popularesPage"
        className=" font-[Koh-Santepheap] text-[3rem] text-center mb-[17vh] mt-[5vh] "
      >
        Populares
      </h2>

      <div className=" flex justify-center items-center gap-5 w-[70vw]">
        {pratosPopulares.map((item) => (
          <Pratos
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Populares;
