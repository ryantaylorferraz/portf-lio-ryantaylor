import styles from "./styles.module.scss"

export const SectionAbout = ({addToRefs}) => {
    return (
        <section ref={addToRefs} id='about' className={styles.sectionAbout}>
            <div className={styles.divContainer}>
                {/* <div className={styles.divImg}>
                    <img src="" alt="" />
                    </div> */}
                <div className={styles.divAbout}>
                    <h2 className={styles.titleAbout}>Sobre <span>Mim</span></h2>
                    <h3 className={styles.titleName}>Olá, pode me chamar de <span>Ryan</span></h3>
                    <p className={styles.textAbout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae quae iure aliquam earum ab unde molestias mollitia cumque nihil ipsa nisi a, eum illum eveniet. Animi sapiente assumenda doloribus!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed impedit officiis laudantium adipisci, corrupti pariatur incidunt praesentium ipsa voluptatem mollitia eveniet error accusantium, culpa nulla expedita! Sequi aliquam ipsam fugiat!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis aliquid repellat perspiciatis provident architecto vitae facilis sed repellendus quisquam eligendi rerum distinctio, minima quia officia cum soluta? Eligendi, illo! Sunt!
                    </p>
                </div>
            </div>
        </section>
    )
}
