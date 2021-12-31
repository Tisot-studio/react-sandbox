import './fill-loader.scss'
import {useState, useEffect} from 'react';
import { gsap } from 'gsap';


export default function FillLoader() {


    let [count, setCount] = useState(0)


    function counter(){
       setCount(count + 1)
    }


useEffect(()=>{
    if (count < 100) {
       setTimeout(function(){counter()}, 50) 
    }
    else {
        gsap.to(".delay-pb", {duration: 0.5, width: '100%', delay: 0.5});
        gsap.to(".count", {duration: 1, opacity: 0});
        gsap.to(".pb-container", {duration: 1, height: '100vh', delay: 1});
        gsap.to(".delay-pb", {duration: 0.5, height: '50rem', top:0, left:0, delay: 1});
        gsap.to(".loading", {duration: 0.5, opacity: 0, delay: 2});
        gsap.to(".loading", {duration: 1, display: 'none', delay: 2.5});
    }
}, [count])





console.log(count)

    return (

            <div className="loading">
                {/* <p className='text'> Hi! My name is Ilya!  </p> */}

                <div className='pb-container'>
                    <div className='delay-pb'> </div>
                    <div  className="progress-bar" style={{width:` ${count}% `}} >
                       
                    </div>

                </div>
                
                <p className='count-pb'> {count}% </p>
            </div>

    )
}



