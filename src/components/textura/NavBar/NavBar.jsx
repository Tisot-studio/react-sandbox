import './nav-bar.scss';
import LeftToRightUnderline from '../../underlines/Left_to_Right_Undrline/LeftToRightUnderline';
import { useState  } from 'react';
import Logo from '../../Logo/Logo';

export default function NavBar() {

    const [showNavBar, setShowNavBar] = useState(true)
    const [shrinkNav, setSrinkNav] = useState(false)

    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {

        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos >= currentScrollPos) {
            setShowNavBar(true)

            // Если текущая позиция скролла превышает 870px то запускается фукция по условию которой будет меняться стиль
            if (document.body.scrollTop > 870 || document.documentElement.scrollTop > 870) {
                setSrinkNav(true)
            } else {
                setSrinkNav(false)
            }
        } else {
            setShowNavBar(false)
        }
        
        prevScrollpos = currentScrollPos;
    }


    return (
        <nav className='navigation-container' style={ showNavBar? {top:'0px'} : {top: '-100px'}}>
            <div className='navigation'style={ shrinkNav ? {
                background:'#FFF2EE',
                color: '#7B7297',
                borderBottom: '#7B7297 1px solid'
                } : {
                background: 'transparent'}} >
                <div className='pages-list'>
                 <span><LeftToRightUnderline fontSize={'16px'}> Shop </LeftToRightUnderline> </span>   
                  <span><LeftToRightUnderline fontSize={'16px'}> About </LeftToRightUnderline> </span>  
                  <span><LeftToRightUnderline fontSize={'16px'}> Blog </LeftToRightUnderline></span>   
                </div>
                <div className='nav-logo'>
                            <Logo 
                            color={ shrinkNav ? "#7B7297" : "black"}
                            style={ shrinkNav ? {
                                color: '#7B7297',
                                } : {
                                color: 'black'}}
                            />
                </div>
                <div className='nav-links-container'>
                    {/* <SignInIcon/>
            
                    <BagIcon/> */}
                </div>
            </div>
        </nav>
    )
}
