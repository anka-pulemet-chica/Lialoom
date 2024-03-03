import React from 'react'
import { Link } from 'gatsby'


import inst from '../assets/img/icons/inst.png'
import linkedin from '../assets/img/icons/linkedin.png'
import site from '../assets/img/icons/site.png'


const Footer = () => {
    return (
        <div className='page-footer'>
            <div className='info'>
                <div className='contacts'>
                    <div className="icons">
                        <a href="https://www.linkedin.com/company/lialoom/"><img src={linkedin} alt="linkedin"></img></a>
                        <a href="https://clutch.co/ " ><img src={site} alt="site"></img></a>
                        <a href="https://www.instagram.com/lialoomagency/"><img src={inst} alt="instagram"></img></a>

                    </div>
                    <div className='menu'>
                        <span>London, United Kingdom</span>
                        <a className="email" href="mailto:hello@lialoom.com" id="email">hello@lialoom.com</a>
                        <Link to='/careers'>Careers</Link>
                    </div>


                </div>
                <div className='menu'>
                    <Link to='/'>Homepage</Link>
                    <Link to='/solutions/for-scale-ups'>Solutions</Link>
                    <Link to='/case-studies'>Case Studies</Link>
                    <Link to='/pricing'>Pricing</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/PR'>PR & Marketing</Link>


                </div>
            </div>

            <Link to="/form"><button className="button--book"> Book a call in a calendar</button></Link>

        </div>
    )
}

export default Footer
