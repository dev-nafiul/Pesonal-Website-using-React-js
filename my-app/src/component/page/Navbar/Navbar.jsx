// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { links } from '../../../data';
import '../Navbar/navbar.css'
function Navbar() {
    const [showMenu,setShowmenu]=useState(false);
  return (
    <nav className='nav'>
        <div className={`${showMenu ? 'nav-menu show-menu' : 'nav-menu'}`}>
            <ul className="nav-list">
                {links.map(({name,icon,path},index)=>{
                    return(
                       <li className="nav-item" key={index}>
                        <NavLink to={path} className={({isActive})=>isActive? 'nav-link active-nav':'nav-link'}>
                            {icon}
                            <h2 className='nav-name'>{name}</h2>
                        </NavLink>
                       </li>
                    )
                })}
            </ul>
        </div>
        <div className={`${showMenu ? 'nav-toggle animate-toggle' : 'nav-toggle'}`} onClick={()=>setShowmenu (!showMenu)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  )
}

export default Navbar
