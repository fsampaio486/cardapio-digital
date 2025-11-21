import imgLogo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-5 text-[1.3rem] w-[70vw] h-[10vh] font-[Poppins]">
      <img src={imgLogo} alt="logo" />

      <ul className="w-[25vw] flex gap-5">
        <li className="cursor-pointer">
          <a href="#inicio">Início</a>
        </li>
        <li className="cursor-pointer">
          <a href="#populares">Populares</a>
        </li>
        <li className="cursor-pointer">
          <a href="#sobreNos">Sobre nós</a>{" "}
        </li>
      </ul>

      <p
        onClick={() => SecaoBaixarApp()}
        className="w-40 h-12 rounded-[4rem] bg-[#FF0000] text-[#ffff] flex justify-center items-center cursor-pointer"
      >
        Baixar o App
      </p>

      {/* 
      <svg
        className="w-6 invisible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6"
      >
        <path
          fill-rule="evenodd"
          d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          clip-rule="evenodd"
        />
      </svg>
      */}
    </div>
  );
};

export default Header;
