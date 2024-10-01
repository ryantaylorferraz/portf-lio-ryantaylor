import React from 'react'
import styles from "./style.module.scss"

export const SectionContact = ({addToRefs}) => {
    return (
        <section id='contact' ref={addToRefs} className={styles.sectionContact}>
            <div className={styles.divContainer}>
                <h2 className={styles.titleContact}>Contate<span>-me!</span></h2>
                <form className={styles.form} action='https://api.staticforms.xyz/submit' method='post' >
                    <div className={styles.divInput}>
                        <input type="text" name='name' required placeholder='Nome Completo' />
                        <input type="text" name='email' required placeholder='Endereço de email'/>
                    </div>
                    <div className={styles.divInput}>
                        <input type="text" name='phone' placeholder='Número de celular'/>
                        <input type="text" name='assunto' placeholder='Assunto'/>
                    </div>

                    <textarea className={styles.textareaForm} required name='message' placeholder='Sua mensagem'>
                    </textarea>
                    <button className={styles.btnContact} type='submit'>Enviar mensagem</button>

                    <input type="hidden" name="accessKey" value="ab00dff9-3640-402c-ad88-5c6ffea61c54" />
                    <input type="hidden" name="redirectTo" value="http://localhost:5173/thanks" />
                </form>
            </div>
        </section>
    )
}
