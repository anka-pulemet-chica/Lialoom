import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Kick = () => {
    return (
        <div >
            <div className="block block--right"><StaticImage
                className="img"
                alt="step 1"
                src="../assets/img/kick/img1.png"
                width={400}
                height={250} />
                <StaticImage
                    className="step step--right"
                    alt="step 1"
                    src="../assets/img/kick/step1.svg"
                    width={550}
                    height={300} /> </div>

            <div className="block block--left">
                <StaticImage
                    className="step step--left"
                    alt="step 2"
                    src="../assets/img/kick/step2.svg"
                    width={550}
                    height={300} />
                <StaticImage
                    className="img"
                    alt="step 2"
                    src="../assets/img/kick/img2.png"
                    width={400}
                    height={250} />
            </div>


            <div className="block block--right"><StaticImage
                className="img"
                alt="step 3"
                src="../assets/img/kick/img3.png"
                width={400}
                height={250} />
                <StaticImage
                    className="step step--right"
                    alt="step 3"
                    src="../assets/img/kick/step3.svg"
                    width={550}
                    height={300} /> </div>


            <div className="block block--left">
                <StaticImage
                    className="step step--left step--last"
                    alt="step 4"
                    src="../assets/img/kick/step4.svg"
                    width={570}
                    height={280}
                    quality={100} />
                <StaticImage
                    className="img"
                    alt="step 4"
                    src="../assets/img/kick/img4.png"
                    width={400}
                    height={250} />
            </div>
        </div>
    )
}

export default Kick
