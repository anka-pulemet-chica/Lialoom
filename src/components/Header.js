import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import drop1 from "../assets/img/icons/drop1.svg"
import drop2 from "../assets/img/icons/drop2.svg"
import drop3 from "../assets/img/icons/drop3.svg"

import { Link } from 'gatsby'
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IconContext } from 'react-icons';


function changeIcon(isDropped) {
    if (isDropped) return (

        <span className='arrow'> <IoIosArrowUp /> </span>
    )

    else return (<span className='arrow'> <IoIosArrowDown /> </span>);
}

function changeMenuIcon(isShown) {
    if (isShown) {
        return (<IconContext.Provider value={{ size: "100%", color: "#0040C5" }}> <IoCloseSharp />
        </IconContext.Provider >)
    }
    else
        return (<IconContext.Provider value={{ size: "100%", color: "#0040C5" }}> <BsList />
        </IconContext.Provider >)
}

function createDrop(isDropped) {
    if (isDropped) return (
        <div className="drop">
            <span ><img className="dropped-img" src={drop1} alt="start-up" /><Link to="/solutions/for-start-ups" activeClassName="active-link">  For start-ups </Link></span>
            <span ><img className="dropped-img" src={drop2} alt="scale-up" /> <Link to="/solutions/for-scale-ups" activeClassName="active-link">   For scale-ups and SMB</Link></span >
            <span ><img className="dropped-img" src={drop3} alt="services" /><Link to="/solutions/services-list" activeClassName="active-link">   Services list</Link></span >
        </div>

    )
}

const Header = () => {
    const [isShown, setShow] = useState(false);

    const [isDropped, setDrop] = useState(false);

    return (
        <div className="header">
            <div className="nav">

                <div className="nav-header">
                    <Link to="/"><StaticImage className="logo"
                        src="../assets/img/icons/smallLogo.png"
                        alt="Lialoom logo"
                        placeholder='none'
                    /></Link>

                    <button className="nav-btn" onClick={() => setShow(!isShown)} >
                        {changeMenuIcon(isShown)} </button>
                </div>



                <div className={isShown ? "nav-links show container" : "nav-links close"}>
                    <Link to='/' activeClassName='active-link' className="nav-link">Homepage</Link>

                    <div activeClassName='active-link' className="nav-link trigger" onClick={() => setDrop(!isDropped)}>Solutions
                        {changeIcon(isDropped)}</div>

                    {createDrop(isDropped)}

                    <Link to='/case-studies' activeClassName='active-link' className="nav-link">Case Studies </Link>

                    <Link to='/pricing' activeClassName='active-link' className="nav-link">Pricing </Link>

                    <Link to='/blog' activeClassName='active-link' className="nav-link">Blog</Link>

                    <Link to='/PR' activeClassName='active-link' className="nav-link">PR & Marketing</Link>

                </div>
                <div className={isShown ? "show" : "close"}>
                    <Link to="/form" className="button--book"><button >
                        Book a meeting
                        {/* <IconContext.Provider value={{ className: 'button-icon', size: '1em' }}> <IoIosArrowForward /></IconContext.Provider> */}
                    </button></Link>
                </div>

            </div >
        </div >
    )
}



export default Header
