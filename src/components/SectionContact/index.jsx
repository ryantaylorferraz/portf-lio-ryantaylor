import React from 'react'
import styles from "./style.module.scss"

export const SectionContact = ({addToRefs}) => {
    return (
        <section id='contact' ref={addToRefs} className={styles.sectionContact}>
            <div className={styles.divContainer}>
                <h2 className={styles.titleContact}>Contate<span>-me!</span></h2>
                <form className={styles.form} >
                    <div className={styles.divInput}>
                        <input type="text" placeholder='Nome Completo' />
                        <input type="text" placeholder='Endereço de email'/>
                    </div>
                    <div className={styles.divInput}>
                        <input type="text" placeholder='Número de celular'/>
                        <input type="text" placeholder='Assunto'/>
                    </div>

                    <textarea className={styles.textareaForm} placeholder='Sua mensagem'>
                    </textarea>
                    <button className={styles.btnContact}>Enviar mensagem</button>
                </form>
            </div>
        </section>
    )
}
