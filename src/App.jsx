import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { SectionAbout } from "./components/Section/SectionAbout";
import { SectionHome } from "./components/Section/SectionHome";
import { SectionContact } from "./components/SectionContact";
import { SectionProjects } from "./components/SectionProjects";
import { SectionServices } from "./components/SectionServices";
import "./styles/index.scss"
import { Footer } from "./components/footer";

function App() {
  const sectionsRef = useRef([]);
  const [activeId, setActiveId] = useState('');

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
    }
};

console.log(activeId);

  
useEffect(() => {
  const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sectionsRef.current.forEach((sec) => {
          const offset = sec.offsetTop - 250; // Ajuste para o offset
          const height = sec.offsetHeight;
          const id = sec.getAttribute('id');

          if (scrollPosition >= offset && scrollPosition < offset + height) {
              setActiveId(id); // Atualiza o ID da seção ativa
          }
      });
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
      window.removeEventListener('scroll', handleScroll); // Limpa o listener ao desmontar
  };
}, []);

  return <>

  <Header activeId={activeId} />
  <SectionHome addToRefs={addToRefs} />
  <SectionAbout addToRefs={addToRefs} />
  <SectionServices addToRefs={addToRefs} />
  <SectionProjects addToRefs={addToRefs} />
  <SectionContact addToRefs={addToRefs} />
  <Footer />

  </>;
}

export default App;
