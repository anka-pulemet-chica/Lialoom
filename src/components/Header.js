import React, { useState } from 'react';
import logo from '../assets/img/icons/logo.png'
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

        <IoIosArrowUp />
    )

    else return (<IoIosArrowDown />);
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
        <>
            <div className='drop'>
                <ul>
                    <li><img className="dropped-img" src={drop1} alt="start-up" /><Link to="/solutions/for-start-ups" >  For start-ups </Link></li>
                    <li><img className="dropped-img" src={drop2} alt="scale-up" /> <Link to="/solutions/for-scale-ups">   For scale-ups</Link></li>
                    <li><img className="dropped-img" src={drop3} alt="services" /><Link to="/solutions/services-list" >   Services list</Link></li>
                </ul>
            </div>
        </>

    )
}

const Header = () => {
    const [isShown, setShow] = useState(false);

    const [isDropped, setDrop] = useState(false);

    return (
        <div className="header">
            <div className='nav-center'>

                <div className="nav-header">
                    <Link to='/'><img src={logo} alt="logo" /></Link>

                    <button className="nav-btn" onClick={() => setShow(!isShown)}>
                        {changeMenuIcon(isShown)} </button>
                </div>
                <div className={isShown ? "nav-links show" : "nav-links close"}>
                    <Link to='/' activeClassName='active-link' className="nav-link">Homepage</Link>

                    <div activeClassName='active-link' className="nav-link" onClick={() => setDrop(!isDropped)}> Solutions
                        {changeIcon(isDropped)}</div>
                    <div className="drop">
                        {createDrop(isDropped)}
                    </div>

                    <Link to='/case-studies' activeClassName='active-link' className="nav-link">Case Studies </Link>

                    <Link to='/pricing' activeClassName='active-link' className="nav-link">Pricing </Link>

                    <Link to='/blog' activeClassName='active-link' className="nav-link">Blog</Link>

                    <Link to='/careers' activeClassName='active-link' className="nav-link">Careers</Link>

                </div>
                <div className={isShown ? " show" : "close"}>
                    <Link to="/form"><button className="btn">
                        Book a meeting
                    </button></Link>
                </div>

            </div>
        </div>
    )
}



export default Header
