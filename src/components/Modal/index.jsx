// Modal.js
import React from 'react';
import styles from './style.module.scss'; // Ajuste o caminho conforme necessário
import { useModalContext } from '../../providers/ModalProvider';

export const ModalSection = () => {
    const {openModal} = useModalContext()
    return (
        <div className={`${styles.modalOverlay} ${openModal ? styles.open : styles.close}`} role='dialog'>
            <div className={styles.modalBox}>
                <nav>
                    <div className={styles.listModal}>
                        <a href="#home">Home</a>
                        <a href="#about">Sobre</a>
                        <a href="#services">Habilidades</a>
                        <a href="#portfólio">Projetos</a>
                        <a href="#contact">Contato</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};