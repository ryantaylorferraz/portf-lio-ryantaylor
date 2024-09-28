import React from 'react'
import styles from "./style.module.scss"

export const CircleTools = () => {
    return (
        <div className={styles.circle}>
            <ul>
                <li className={styles.html} ><p>HTML</p></li>
                <li className={styles.css} >CSS</li>
                <li className={styles.js} >JAVASCRIPT</li>
                <li className={styles.react} >REACT JS</li>
            </ul>
        </div>
    )
}
