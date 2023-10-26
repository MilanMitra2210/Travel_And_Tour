import React, { useState } from 'react';
import './NavBar.css';
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const NavBar = () => {
    const [active , setActive] = useState('navBar');
    
    //function to toggle navbar
    const showNavBar = () =>{
        setActive('navBar activeNavBar');
    }
    //function to remove navbar
    const removeNavBar = () =>{
        setActive('navBar');
    }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
            <a href='#' className='log flex'>
                <h1> <MdOutlineTravelExplore className="icon"/>Travel.</h1>
            </a>
        </div>
        <div className={active}>
            <ul className='navLists flex'>
                <li className='navItem'>
                    <a href='#' className='navLink'>Home</a>
                </li>
                <li className='navItem'>
                    <a href='#' className='navLink'>Packages</a>
                </li>
                <li className='navItem'>
                    <a href='#' className='navLink'>Shop</a>
                </li>
                <li className='navItem'>
                    <a href='#' className='navLink'>About</a>
                </li>
                <li className='navItem'>
                    <a href='#' className='navLink'>Pages</a>
                </li>
                <li className='navItem'>
                    <a href='#' className='navLink'>News</a>
                </li>
                <li className='navItem'>
                    <a href='#' className='navLink'>Contact</a>
                </li>
                <button className='btn'>
                    <a href='#'>BOOK NOW</a>
                </button>
            </ul>
            <div onClick={removeNavBar} className='closeNavbar'>
                <AiFillCloseCircle className='icon'/>
            </div>
        </div>

        <div onClick={showNavBar} className='toggleNavbar'>
            <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default NavBar
