import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../../components/Header'
import { SectionCursor } from '../../components/Section/SectionCursor'
import { SectionHome } from '../../components/Section/SectionHome'
import { SectionAbout } from '../../components/Section/SectionAbout'
import { SectionServices } from '../../components/Section/SectionServices'
import { SectionProjects } from '../../components/Section/SectionProjects'
import { SectionContact } from '../../components/Section/SectionContact'
import { Footer } from '../../components/Footer'

export const DefaultTemplate = () => {
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
            const offset = sec.offsetTop - 250;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
  
            if (scrollPosition >= offset && scrollPosition < offset + height) {
                setActiveId(id);
            }
        });
    };
    window.addEventListener('scroll', handleScroll);
  
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
            <Header activeId={activeId} />
            <SectionCursor />
            <SectionHome addToRefs={addToRefs} />
            <SectionAbout addToRefs={addToRefs} />
            <SectionServices addToRefs={addToRefs} />
            <SectionProjects addToRefs={addToRefs} />
            <SectionContact addToRefs={addToRefs} />
            <Footer />
        </>
    )
}
