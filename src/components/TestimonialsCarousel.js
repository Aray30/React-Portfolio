import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//**** AVATAR IMPORTS  */
import avatar1 from "../images/avatar-1.png";
import avatar2 from "../images/avatar-2.png";
import avatar3 from "../images/avatar-3.png";
import avatar4 from "../images/avatar-4.png";

const TestimonialsCarousel = () => { 
  return (
    <Carousel autoPlay={true} interval={5000} infiniteLoop
        
    >
        <>
        <img src={avatar1} alt="John Doe 1"/>
        <div className='mycarousel'>
        <h3>John Doe 1</h3>
        <p>Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
                omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice.
                andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?</p>
            
            </div>

       
        </>

        <>
        <img src={avatar2} alt="Jane Doe 2"/>
        <div className='mycarousel'>
        <h3>John Doe 1</h3>
        <p>Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
                omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice.
                andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?</p>
            </div>
        
        </>
        <>
        <img src={avatar3} alt="John Doe 3"/>
        <div className='mycarousel'>
        <h3>John Doe 1</h3>
        <p>Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
                omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice.
                andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?</p>
            </div>
       
        </>
        <>
        <img src={avatar4} alt="John Doe 4"/>
        <div className='mycarousel'>
        <h3>John Doe 1</h3>
        <p>Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
                omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice.
                andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?</p>
            </div>
       
        </>
    </Carousel>
  )
}

export default TestimonialsCarousel
