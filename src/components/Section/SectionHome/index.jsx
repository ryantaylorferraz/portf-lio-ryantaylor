import React, { useEffect, useRef } from 'react'
import styles from "./style.module.scss"
import { CircleTools } from '../../animacoes/CircleTools'
import icongithub from "../../../assets/icongithub.png"
import iconlinkedin from "../../../assets/iconlinkedin.png"
import iconwhatsapp from "../../../assets/iconwhatsapp.png"
import 'boxicons/css/boxicons.min.css';

const tools = [
  'Javascript',
  'Typescript',
  'React.js',
  'Node.js',
  'NestJS',
  'Express',
  'Jest',
  'PostgreSQL',
  'SASS',
  'Tailwind',
  'Styled Components'

];

export const SectionHome = ({ addToRefs }) => {


  return (
    <section ref={addToRefs} id='home' className={styles.sectionContainer}>
      <div className={styles.divApresentation}>
        <div className={styles.divTexts}>
          <div>
            <h1 className={styles.titleSection1}>Olá! Eu sou o </h1>
            <h1 className={styles.titleSection2}>Ryan Taylor</h1>
          </div>
          <h3 className={styles.titleSection3}>Desevolvedor Web <span>Full Stack</span></h3>
        </div>
        <div className={styles.divInfo}>
          <p className={styles.pDev}>Desenvolvendo o futuro da web, <span className={styles.spanSite}>um site de cada vez.</span></p>
          <span className={styles.spanIcons}>
            <a href="#" target='_blank'><i className={`bx bxl-github ${styles.bx}`}></i></a>
            <a href="#" target='_blank'><i className={`bx bxl-linkedin ${styles.bx}`}></i></a>
            <a href="#" target='_blank'><i className={`bx bxl-whatsapp ${styles.bx}`}></i></a>
          </span>
          <button className={styles.btnCv}>Download CV</button>
        </div>
      </div>
      <div className={styles.divBox}>
      </div>
      <CircleTools />
      <div className={styles.carousel}>
        <ul className={styles.ulHome}>
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
          {tools.map((tool, index) => (
            <li key={`duplicate-${index}`}>{tool}</li>
          ))}
        </ul>
      </div>

    </section>
  )
}
