import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { fabook, faBookmark, faGoogle } from '@fortawesome/free-solid-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Services = () => {
  return (
    <div className="services">
        <h1 className='py-5'>My Services</h1>
            <div className='container'>
                <div className='row'>
                    <div className=" col-lg-3 col-md-3 col-sm-6">
                        <div className="box">

<div  className='circle'><FontAwesomeIcon className= "icon "icon={faDesktop} size='2x'/></div>

                        <h3>Web Design</h3>
                                <p>I always approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/** */}
                    <div className=" col-lg-3 col-md-3 col-sm-6">
                        <div className="box">
<div  className='circle'><FontAwesomeIcon className="icon" icon={faFileCode} size='2x'/></div>
                            <h3>Web Development</h3>
                                <p>Your Website will be build with a new proven technologies</p>
                        </div>
                    </div>
                    {/** */}
                    <div className=" col-lg-3 col-md-3 col-sm-6">
                        <div className="box">
<div  className='circle'><FontAwesomeIcon className="icon" icon={faFacebook} size='2x'/></div>
                            <h3>Facebook AD and SMM</h3>
                                <p>Your potential client will see your services or product on Facebook</p>
                        </div>
                    </div>
                    {/** */}
                    <div className=" col-lg-3 col-md-3 col-sm-6">
                        <div className="box">
<div  className='circle'><FontAwesomeIcon  className= "icon" icon={faGooglePlus} size='2x'/></div>
                            <h3>Google Ads</h3>
                                <p>Your services and products will appear at the top of Google searches.</p>
                        </div>
                    </div>
                    {/** */}
                </div>
            </div>

        </div>
     
  )
}

export default Services;
