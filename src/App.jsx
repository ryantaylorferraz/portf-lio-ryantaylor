import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { SectionAbout } from "./components/Section/SectionAbout";
import { SectionHome } from "./components/Section/SectionHome";
import "./styles/index.scss"
import { Footer } from "./components/Footer";
import { SectionServices } from "./components/Section/SectionServices";
import { SectionProjects } from "./components/Section/SectionProjects";
import { SectionContact } from "./components/Section/SectionContact";

import { motion } from "framer-motion";

function App() {

  const sectionsRef = useRef([]);
  const [activeId, setActiveId] = useState('');

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
    }
};

  
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
