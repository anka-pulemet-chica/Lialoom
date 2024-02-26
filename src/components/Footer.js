import React from 'react'
import { Link } from 'gatsby'


import '../assets/sass/style.scss'
import inst from '../assets/img/icons/inst.png'
import linkedin from '../assets/img/icons/linkedin.png'
import site from '../assets/img/icons/site.png'


const Footer = () => {
    return (
        <div className='page-footer'>
            <div className='block1'>
                <div className='contacts'>
                    <div>
                        <a href="https://www.linkedin.com/company/lialoom/"><img src={linkedin} alt="linkedin"></img></a>
                        <a href="https://clutch.co/ " ><img src={site} alt="site"></img></a>
                        <a href="https://www.instagram.com/lialoomagency/"><img src={inst} alt="instagram"></img></a>

                    </div>
                    <ul>
                        <li>London, United Kingdom</li>
                        <li><a className="email" href="mailto:hello@lialoom.com" id="email">hello@lialoom.com</a></li>
                        <li><Link to='/careers'>Careers</Link></li>
                    </ul>

                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <Link to='/'>Homepage</Link>
                        </li>
                        <li>
                            <Link to='/solutions/for-scale-ups'>Solutions</Link>
                        </li>
                        <li>
                            <Link to='/case-studies'>Case Studies</Link>
                        </li>
                        <li>
                            <Link to='/pricing'>Pricing</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='btn'>
                <Link to="/form"><button> Book a call in a calendar</button></Link>
            </div>

        </div>
    )
}

export default Footer
