import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header className='header'>
            <div className="header-logo">
                Formation
            </div>
            <ul className='header-ul'>
                <li className='header-link'><a href="#">mentorhi</a></li>
                <li className='header-link'><a href="#">Peace&Work</a></li>
                <li className='header-link'><a href="#">Jobhospitality</a></li>
            </ul>
            <button className="header-button">
                Contactez-nous
            </button>
        </header>
    )
}

export default Header