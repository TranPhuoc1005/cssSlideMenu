import React, { useEffect, useState } from 'react';
import { LogoApple, LogOutOutline, PersonCircleOutline } from 'react-ionicons';
import './Header.scss';
import './Header_responsive.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { links } from "./data";



function Header() {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    const [isActive, setisActive] = useState(true);
    const [selected, setSelected] = useState('');
    const pathname = useLocation().pathname;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
        if(windowSize[0] <= 750) {
            setisActive = false;
        }
    }, [])
    return (
        <header>
            <p className="sidebar__logo sp"><LogoApple />Website logo</p>
            <div className={`menuToggle${isActive ? ' active' : ''}`} onClick={() => setisActive(!isActive)}></div>
            <div className={`sidebar${isActive ? ' active' : ''}`}>
                <div className="sidebar__top">
                    <p className="sidebar__logo pc"><LogoApple />Website logo</p>
                    <ul className="sidebar__menu">
                        {links.map((link) => (
                            <li className={ link.url === pathname ? 'active' : '' }>
                                <NavLink to={link.url}>
                                    <span className="icon">{link.icon}</span>
                                    <span className="text">{link.text}</span>
                                </NavLink>
                            </li>
                        ))}
                        <div className='indicator'><span></span></div>
                    </ul>
                </div>
                <ul className="sidebar__user">
                    <li className="sidebar__user--info">
                        <p className="sidebar__user--avt"><PersonCircleOutline /></p>
                        <p className="sidebar__user--name">THP</p>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><LogOutOutline /></span>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <div className="menu__sp"></div> */}
        </header>
    );
}
export default Header;