import React from 'react';
import Nucamp from '../images/nuCamp place holder.PNG';
// font awesome imports ///
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//  React Popup Box //
import {Popup} from 'reactjs-popup';
import "reactjs-popup/dist/";






const Portfolio = () => {

    // Nucamp 
    const popupboxManagerNucamp = () => {
        const content =(
            <>
            <img className="portfolio-image-popupbox" src={Nucamp} alt= " NuCamp project..."/>
            <p>Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
                    omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice.
                    andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?
            </p>
            <b>Github link</b> <a className="hyper-link" onClick={() =>  window.open("https://github.com/Aray30/React-Portfolio")}>https://github.com/Aray30/React-Portfolio </a>
            </>
         )


        Popup.open({content})
    }

    const popupboxConfigNucamp = {
        titleBar: {
            enable: true,
            Text: "NuCamp Project"
        },
            fadeIn: true,
            fadeInSpeed:500 
    }

        



  return (
    <div id='portfolio' className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
                <div className='portfolio-image-box' onClick={popupboxManagerNucamp }>
                    <img className="portfolio-image" src={Nucamp} alt="NuCamp RV"/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>

                {/* - */}

                <div className='portfolio-image-box'>
                    <img className="portfolio-image" src={Nucamp} alt="NuCamp RV"/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>

                {/* - */}

                <div className='portfolio-image-box'>
                    <img className="portfolio-image" src={Nucamp} alt="NuCamp RV"/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
            </div>
        </div>
        <popupboxContianer {...popupboxConfigNucamp} />
    </div>
  )
}

export default Portfolio
