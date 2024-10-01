import React from 'react'
import styles from "./style.module.scss";
import { imgSkills } from '../../images';

export const SectionServices = ({ addToRefs }) => {
    return (
        <section ref={addToRefs} id='services' className={styles.containerSkills}>
            <div>
                <h2>Minhas <span>Habilidades</span></h2>
                <div >
                    <ul className={styles.containerImg}>
                        {imgSkills.map((skill, i) => (
                            <div key={i}>
                                <img src={skill.img} alt="" />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    )
}