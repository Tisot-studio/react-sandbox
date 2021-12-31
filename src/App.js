import './App.scss';
import FillLoader from './components/FillLoader/FillLoader';
import { gsap, Power2 } from 'gsap';
import {useEffect} from 'react';



function App() {


useEffect(()=>{

  gsap.to('.quote', {
    duration: 1,
    y: -30,
    opacity: 1,
    delay: 7.6,
    ease: Power2
  })

})

  return (
      <div className="App">

          <div className='components-container'>
            <FillLoader/>
            <div className='quote' 
            style={{position: 'relative', 
            fontSize: '140px', 
            fontFamily: 'Spartan', 
            opacity: 0,
            }} 
            onClick={()=> alert('hi')}>
              content
            </div>
          </div>
      </div>
 

    
  );
}

export default App;
