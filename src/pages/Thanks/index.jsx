import React from 'react'
import styles from "./style.module.scss"
import { Link } from 'react-router-dom'

export const Thanks = () => {
  return (
    <section className={styles.sectionContainer}>
        <div className={styles.divContainer}>
            <h1>Obrigado por se conectar!</h1>
            <p>Logo retornarei o contato 😉</p>
            <Link to="/"> <button>Home</button> </Link>
        </div>
    </section>
  )
}
