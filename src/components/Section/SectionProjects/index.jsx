import React from "react";
import styles from "./style.module.scss";
import { Slider } from "../../Slider";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, A11y } from "swiper/modules";
import { imgProjects } from "../../images";

export const SectionProjects = ({addToRefs}) => {
  return (
    <section ref={addToRefs} id="portfólio" className={styles.containerProject}>
      <div>
        <h2>
          Meus <span>Projetos</span>
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 15,
            stretch: 10,
            depth: 100,
            modifier: 2,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, A11y]}
          className={styles.swiper_container}
        >
          <ul>
            {imgProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <img src={project.img} alt="imagem do projeto" />
                <div>
                  <a href={project.link} target="_blank">
                    Site
                  </a>
                  <a href={project.link} target="_blank">
                    Github
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </ul>
          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
