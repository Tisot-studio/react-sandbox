import './ImageRevealEffect.scss'
import Fashion from './img/benigno-hoyuela-o6u8CVC3Sd4-unsplash.jpg'
import { useRef, useLayoutEffect } from 'react'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import  {TimelineLite, Power2} from 'gsap';


const ImageRevealEffect = ()=> {

let container = useRef(null)
let image = useRef(null)
let ImageReveal = CSSRulePlugin.getRule('.rel-ef-img-container:after')
console.log(ImageReveal)

const tl = new TimelineLite()

useLayoutEffect(()=>{
tl
.to(container, 0, {css:{visibility: 'visible'}})
.to(ImageReveal, 1.4,{width: '0%', ease: Power2.easeInOut})
.from(image, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6})
})

    return (
        <div ref={el => container = el} className='img-rel-eff-component-container'>
            <div  className='rel-ef-img-container'>
            <img ref={el=> image = el} src={Fashion} alt='pic'/>
        </div>
        </div>
        
    )
}

export default ImageRevealEffect;