import React, { useState } from 'react'

//Icons import
import { FaBars, FaReact } from 'react-icons/fa'
import { HiX } from 'react-icons/hi';

//React-router-dom import
import { Link } from 'react-router-dom'

const Navbar = () => {

  const data = [
    {
      label: 'HOME',
      to: '/'
    },
    {
      label: 'ABOUT ME',
      to: '/about'
    },
    {
      label: 'SKILLS',
      to: '/skills'
    },
    {
      label: 'RESUME',
      to: '/resume'
    },
    {
      label: 'PORTFOLIO',
      to: '/portfolio'
    },
    {
      label: 'CONTACT',
      to: '/contact'
    }
  ];

// Toggle icon
const [toggleIcon, setToggleIcon] = useState(false);

const handleToggleIcon = () => {
  setToggleIcon(!toggleIcon);
}


  return (
      <nav className='navbar'>
        <div className='navbar__container'>

          {/* React logo */}
          <Link to='/' className='navbar__container__logo'>
            <FaReact size={30}/>
          </Link>

          {/* Navbar list */}
          <ul className='navbar__container__menu'>
            {
              data.map((item, key) => (
                <li key={key} className='navbar__container__menu__item'>
                  <Link to={item.to} className='navbar__container__menu__item__links'>
                     {item.label}
                  </Link>
                </li>)
              )
            }
          </ul>

          {/* Navbar icon */}
          <div className='nav-icon' onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>

        </div>
      </nav>
  )
}

export default Navbar