import React from 'react'
import styles from "./style.module.scss"
import 'boxicons/css/boxicons.min.css';

export const Footer = () => {
    return (
        <footer id='footer' className={styles.footer}>
            <div className={styles.divFooter}>
                <p className={styles.pFooter}>Copyright © 2024 by Ryan | All Rights Reserved</p>
                <a href="#home"><i className={`bx bx-chevrons-up ${styles.bx}`}></i></a>
            </div>
        </footer>
    )
}
