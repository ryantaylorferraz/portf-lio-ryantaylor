import React from 'react'
import { Swiper } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import "./style.scss"
export const Slider = ({ children }) => {
    return (
        <Swiper >
            {children}
        </Swiper>
    )
}
