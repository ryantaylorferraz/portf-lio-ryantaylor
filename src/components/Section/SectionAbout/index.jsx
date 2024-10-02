import styles from "./styles.module.scss"
import imgPerfil from "../../../assets/imgperfil.png"

export const SectionAbout = ({ addToRefs }) => {
    return (
        <section ref={addToRefs} id='about' className={styles.sectionAbout}>
            <div className={styles.divContainer}>
                    <img className={styles.imgPerfil} src={imgPerfil} alt="imagem de perfil" />
                <div className={styles.divAbout}>
                    <h2 className={styles.titleAbout}>Sobre <span>Mim</span></h2>
                    <h3 className={styles.titleName}>Olá, pode me chamar de <span>Ryan</span></h3>
                    <p className={styles.textAbout}>
                    Sou um desenvolvedor web, Conclui minha formação na <span>Kenzie Academy Brasil</span>, onde construí uma base sólida em programação <span>full-stack</span> aprendendo a colaborar em equipes e enfrentar <span>desafios complexos</span>, sempre buscando <span>soluções criativas e eficientes</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}
