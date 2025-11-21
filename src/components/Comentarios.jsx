import { AvaliacaoClientes } from "../assets/Usuario";
import ComentariosClientes from "./ComentariosClientes";

const Comentarios = () => {
  return (
    <section
      id="comentarios"
      className=" flex flex-col justify-center items-center mt-[10vh] mb-[10vh]"
    >
      <h2 className="text-[2.5rem] font-[Koh-Santepheap] font-bold mb-[7vh]">
        Comentários
      </h2>

      <div className="flex gap-[5vw]">
        {AvaliacaoClientes.map((item) => (
          <ComentariosClientes
            imagem={item.imagem}
            nome={item.nome}
            descricao={item.descricao}
            avaliacao={item.avaliacao}
          />
        ))}
      </div>
    </section>
  );
};

export default Comentarios;
