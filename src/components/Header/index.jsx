import { IoSunnySharp } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";

import styles from "./style.module.scss"

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useThemeContext } from "../../providers/themeProvider";
import Hamburger from "hamburger-react";
import { useModalContext } from "../../providers/ModalProvider";
import { ModalSection } from "../Modal";

export const Header = ({ activeId }) => {
    const [isOpen, setOpen] = useState(false)
    const {openModal, toggleModal} = useModalContext()

    const {toggleTheme, isOn} = useThemeContext()

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };

    const [scrollY, setScrollY] = useState(0);
    const [modo, setModo] = useState(false)

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.headerContainer} ${scrollY > 80 ? styles.headerScroll : ""}`}>
            <div className={styles.divContainer}>
                <h2 className={styles.titleHeader}>RyanT.</h2>
                <nav className={styles.navBox}>
                    <div className={styles.listHeader}>
                        <a href="#home" className={activeId === 'home' ? `${styles.activeHome}` : ''}>Home</a>
                        <a href="#about" className={activeId === 'about' ? `${styles.active}` : ''}>Sobre</a>
                        <a href="#services" className={activeId === 'services' ? `${styles.active}` : ''}>Habilidades</a>
                        <a href="#portfólio" className={activeId === 'portfólio' ? `${styles.active}` : ''}>Projetos</a>
                        <a href="#contact" className={activeId === 'contact' ? `${styles.active}` : ''}>Contato</a>
                    </div>
                    <div className={styles.divHamburguer} onClick={() => toggleModal()}>
                        <Hamburger   toggled={isOpen} toggle={setOpen} />
                    </div>
                    <div className={styles.switch} data-isOn={isOn} onClick={toggleTheme}>
                    <motion.div  className={isOn ? styles.sol : styles.lua} layout transition={spring} />
                    </div>

                </nav>
            </div>
            {openModal ? <ModalSection /> : ""}
        </header>
    )
}
