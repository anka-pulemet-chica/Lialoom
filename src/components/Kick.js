import React from 'react'

import kick1 from '../assets/img/slides/kick1.svg'
import kick2 from '../assets/img/slides/kick2.svg'
import kick3 from '../assets/img/slides/kick3.svg'
import kick4 from '../assets/img/slides/kick4.svg'


const Kick = () => {
    return (
        <div style={{ width: "100%", marginLeft: "15%" }}>
            <img src={kick1} alt="step1" />
            <img src={kick2} alt="step2" />
            <img src={kick3} alt="step3" />
            <img src={kick4} alt="step4" />

        </div>
    )
}

export default Kick
