import React from 'react';
import Nucamp from '../images/nuCamp place holder.PNG';
// font awesome imports ///
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//  React Popup Box //
import {PopupboxManager} from 'reactjs-popup';






const Portfolio = () => {

    // Nucamp 
    const popupboxManagerNucamp = () => {
        <>
        <img src={Nucamp} alt= " NuCamp project..."/>
        <p>Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
                omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice.
                andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?
        </p>
        <b>Github link</b> <a className="hyper-link">Insert your git hub here </a>
        </>
    }


  return (
    <div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
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

                {/* - */}

                <div className='portfolio-image-box'>
                    <img className="portfolio-image" src={Nucamp} alt="NuCamp RV"/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
