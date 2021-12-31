import './navbar-hide-on-scroll.scss'
import {useState } from 'react';


const NavbarHideOnScroll = ()=> {

    const [showNavBar, setShowNavBar] = useState(true)
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        setShowNavBar(false)
    } else {
        setShowNavBar(true)
    }
    prevScrollpos = currentScrollPos;
    }

    
    return (
        <div className={showNavBar ? 'navigation hide-nav' : 'navigation' }>
    <div className='navigation'>
            <div className='pages-list'>
    
              Shop 
                About
                Blog
                 </div>
    
            <div className='nav-logo'>

            </div>
        <div className='nav-links-container'>
    
        </div>
        </div>
        
        </div>
    )
}

export default NavbarHideOnScroll;