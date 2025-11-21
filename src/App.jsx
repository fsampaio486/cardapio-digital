import Header from "./components/Header";
import Inicio from "./components/Inicio";
import SobreNos from "./components/SobreNos";
import Populares from "./components/Populares";
import Comentarios from "./components/Comentarios";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div className=" m-auto flex flex-col justify-center items-center w-[70vw] box-border">
      <Header />
      <Inicio />
      <SobreNos />
      <Populares />
      <Comentarios />
      <Rodape />
    </div>
  );
}

export default App;
