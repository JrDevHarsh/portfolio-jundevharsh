import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { HeaderIntro } from "./components/HeaderIntro";
import { Project } from "./components/Project";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import "./sass/main.scss";

function App() {
  return (
    <div className="App" style={{ counterReset: "item" }}>
      <Header />
      <HeaderIntro />
      <About />
      <Skills />
      <Project />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
