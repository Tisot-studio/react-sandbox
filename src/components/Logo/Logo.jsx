import './logo.scss';
import T from './svg/T.svg';
import E from './svg/E.svg';
import X from './svg/X.svg';
import U from './svg/U.svg';
import R from './svg/R.svg';
import A from './svg/A.svg';



import React from 'react'

export default function Logo({color}) {
    return (
        <div className='logo-container'>
            <span> 
                <svg className='central-letter' 
                        width="20" 
                        height="32" 
                        viewBox="0 0 27 32" 
                        xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.288 2.24H6.968C2.968 2.24 0.968 4.08 0.968 7.76H0.00800008V4.16C0.00800008 1.6 1.368 0.319999 4.088 0.319999H26.408V2.24H15.608V32H11.288V2.24Z" 
                    fill={color}/>
                </svg>
            </span>

            <span> 
                <svg className='hidden-letter'
                    width="20" 
                    height="32" 
                    viewBox="0 0 27 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.088 6.08C5.088 4.448 4.864 3.248 4.416 2.48C3.968 1.68 3.072 1.28 1.728 1.28H0.768V0.319999H21.216C23.936 0.319999 25.296 1.6 25.296 4.16V7.76H24.336C24.336 4.08 22.336 2.24 18.336 2.24H9.408V14.72H22.368V16.64H9.408V30.08H17.808C20.016 30.08 21.744 29.68 22.992 28.88C24.24 28.08 25.232 26.72 25.968 24.8L26.928 25.04L25.248 29.6C24.672 31.2 23.472 32 21.648 32H5.088V6.08Z" 
                    fill={color}/>
                </svg>
            </span>

            <span>
            <svg className='hidden-letter'
                width="27" 
                height="32" 
                viewBox="0 0 34 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M14.968 16.4L8.248 6.56C7.48 5.44 6.808 4.56 6.232 3.92C5.656 3.248 4.904 2.656 3.976 2.144C3.048 1.632 1.912 1.344 0.568 1.28V0.319999H6.328C7.736 0.319999 8.92 0.783998 9.88 1.712C10.84 2.608 11.896 3.904 13.048 5.6L17.848 12.8L27.448 0.319999H29.848L19.048 14.48L26.728 25.76C27.72 27.232 28.776 28.464 29.896 29.456C31.048 30.416 32.312 30.944 33.688 31.04V32H28.648C27.272 32 26.056 31.52 25 30.56C23.944 29.568 22.92 28.288 21.928 26.72L16.168 18.08L5.368 32H2.968L14.968 16.4Z" 
                fill={color}/>
                </svg>
            
            </span>
            <span> 
                <svg className='hidden-letter' 
                width="20" 
                height="32" 
                viewBox="0 0 27 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11.288 2.24H6.968C2.968 2.24 0.968 4.08 0.968 7.76H0.00800008V4.16C0.00800008 1.6 1.368 0.319999 4.088 0.319999H26.408V2.24H15.608V32H11.288V2.24Z" 
                fill={color}/>
                </svg>
                            
            </span>
            <span> 
            <svg className='hidden-letter' width="23" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.992 32.48C13.92 32.48 11.488 31.968 9.696 30.944C7.904 29.888 6.624 28.336 5.856 26.288C5.12 24.24 4.752 21.584 4.752 18.32V6.08C4.752 4.448 4.528 3.248 4.08 2.48C3.632 1.68 2.736 1.28 1.392 1.28H0.432V0.319999H4.752C5.936 0.319999 6.816 0.479999 7.392 0.799998C8 1.088 8.432 1.632 8.688 2.432C8.944 3.232 9.072 4.448 9.072 6.08V19.76C9.072 23.312 9.728 26 11.04 27.824C12.352 29.648 14.528 30.56 17.568 30.56C20 30.56 21.92 30.128 23.328 29.264C24.768 28.4 25.792 27.088 26.4 25.328C27.008 23.568 27.312 21.232 27.312 18.32V0.319999H29.232V18.32C29.232 21.648 28.88 24.336 28.176 26.384C27.472 28.4 26.224 29.92 24.432 30.944C22.672 31.968 20.192 32.48 16.992 32.48Z" 
                fill={color}/>
                </svg>
            
            </span>
            <span> 
                <svg className='hidden-letter' width="23" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.208 32.48C24.512 32.48 23.024 31.984 21.744 30.992C20.496 29.968 19.104 28.144 17.568 25.52L12.768 17.36H9.408V32H5.088V6.08C5.088 4.448 4.864 3.248 4.416 2.48C3.968 1.68 3.072 1.28 1.728 1.28H0.768V0.319999H13.248C16.288 0.319999 19.04 0.927999 21.504 2.144C24 3.328 25.248 5.6 25.248 8.96C25.248 13.216 22.688 15.936 17.568 17.12L22.608 25.52C23.792 27.504 24.848 28.896 25.776 29.696C26.736 30.464 27.84 30.912 29.088 31.04V32C28.8 32.128 28.384 32.24 27.84 32.336C27.328 32.432 26.784 32.48 26.208 32.48ZM13.008 15.68C14 15.68 15.072 15.44 16.224 14.96C17.408 14.48 18.4 13.728 19.2 12.704C20.032 11.68 20.448 10.432 20.448 8.96C20.448 7.392 20.032 6.096 19.2 5.072C18.4 4.016 17.408 3.248 16.224 2.768C15.072 2.256 14 2 13.008 2C11.888 2 10.688 2.16 9.408 2.48V15.2C10.688 15.52 11.888 15.68 13.008 15.68Z" 
                    fill={color}/>
                </svg>
            </span>
            <span> 
                <svg className='hidden-letter' width="24" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.856 32.24C27.32 32.24 25.8 31.824 24.296 30.992C22.792 30.128 21.592 28.464 20.696 26L19.496 22.88H6.056L2.216 32H0.0560001L13.496 0.319999H14.936L25.496 26C26.296 27.856 27.048 29.136 27.752 29.84C28.456 30.512 29.464 30.912 30.776 31.04V32C30.2 32.16 29.56 32.24 28.856 32.24ZM6.776 20.96H18.536L12.776 7.04L6.776 20.96Z" 
                fill={color}/>
                </svg>
            </span>
            <span className='right-letter-container'> <i  class="far fa-registered right-letter"></i> </span> 
        </div>
    )
}



// <span> <img className='central-letter' src={T} alt='letter' /></span>
// <span> <img className='hidden-letter' src={E} alt='letter' /></span>
// <span> <img className='hidden-letter' src={X} alt='letter' /></span>
// <span> <img className='hidden-letter' src={T} alt='letter' /></span>
// <span> <img className='hidden-letter' src={U} alt='letter' /></span>
// <span> <img className='hidden-letter' src={R} alt='letter' /></span>
// <span> <img className='hidden-letter' src={A} alt='letter' /></span>