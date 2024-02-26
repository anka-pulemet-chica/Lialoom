import React, { useState } from 'react'

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// import slide1 from '../assets/img/slides/slide1.svg'
import slide2 from '../assets/img/slides/slide2.svg'
import slide3 from '../assets/img/slides/slide3.svg'
import slide4 from '../assets/img/slides/slide4.svg'
import slide5 from '../assets/img/slides/slide5.svg'

import '../assets/css/slides.css'


let sliders = [slide2, slide3, slide4, slide5]

function changeSlide(state) {
    return (<img alt="slide" style={{ width: "95 %" }} src={sliders[state]} />)
}

const Slides = () => {
    const [state, setState] = useState(0);

    return (
        <div>
            <div className="slides">
                <div className="next-page">
                    <button onClick={() => {
                        if (state - 1 < 0) return setState(3);
                        return setState(state - 1)
                    }
                    } className="change"> <MdArrowBackIos /> </button>
                    <button onClick={() => {
                        console.log(state);

                        if (state + 1 > 3) return setState(0);
                        return setState(state + 1)
                    }} className="change prev">  <MdArrowForwardIos /> </button>
                    {changeSlide(state)}

                </div>


            </div>

        </div>
    )
}

export default Slides
