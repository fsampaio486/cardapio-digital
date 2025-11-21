import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Rodape = () => {
  return (
    <section>
      <div className=" flex place-content-between w-[70vw] h-[25vh] text-[#3a3838] ">
        <div className=" font-[Poppins] text-[1.1rem]">
          <h2 className=" font-[Koh-Santepheap] text-[1.6rem]">Produto</h2>
          <p>
            <a href="">Todos</a>
          </p>
          <p>
            <a href="">Sushi</a>
          </p>
          <p>
            <a href="">Premium</a>
          </p>
        </div>
        <div className=" font-[Poppins] text-[1.1rem]">
          <h2 className=" font-[Koh-Santepheap] text-[1.6rem] ">Informações</h2>
          <p>
            <a href="">FAQ</a>
          </p>
          <p>
            <a href="">Blog</a>
          </p>
          <p>
            <a href="">Suporte</a>
          </p>
        </div>
        <div className=" font-[Poppins] text-[1.1rem]">
          <h2 className=" font-[Koh-Santepheap] text-[1.6rem]">Empresa</h2>
          <p>
            <a href="">Local</a>
          </p>
          <p>
            <a href="">Contato</a>
          </p>
        </div>
      </div>

      <hr className="mb-[30px] text-neutral-500" />

      <div className="flex place-content-between mb-[5vh]">
        <img src={logo} alt="logo" />
        <div className="flex gap-3">
          <img src={facebook} alt="logo facebook" />
          <img src={twitter} alt="logo twitter" />
          <img src={instagram} alt="logo instagram" />
        </div>
      </div>
    </section>
  );
};

export default Rodape;
