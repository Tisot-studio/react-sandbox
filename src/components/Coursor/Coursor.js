import './coursor.scss';

import {useRef, useEffect} from 'react'

export default function Coursor() {

    const coursorRef = useRef(null)

    useEffect(()=>{
        document.addEventListener('mousemove', (event)=>{
            const {clientX, clientY} = event
            const mouseX = clientX - coursorRef.current.clientWidth / 1
            const mouseY = clientY - coursorRef.current.clientHeight / 1
            coursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })

    }, [])
    return (
        <div className='app-coursor' ref={coursorRef} />
            

    )
}
