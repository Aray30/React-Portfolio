import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {FacebookShareButton,InstapaperShareButton,TwitterShareButton,FacebookIcon, InstapaperIcon,TwitterIcon, LinkedinIcon,LinkedinShareButton, RedditShareButton, RedditIcon} from 'react-share'

const footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-6 col-sm-6">
                   <div className="d-flex">
                       <p> Atlanta Ga, 30080</p>
                   </div>
                    <div className="d-flex">
                        <a href="tel:312-956-6402">(312)956-6402</a>
                    </div>
                    <div className="d-flex">
                       <p>aray3030@gmail.com</p>
                   </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <a className="footer-nav">Home</a>
                            <br/>
                            <a className="footer-nav">About me</a>
                            <br/>
                            <a className="footer-nav">Services</a>
                        </div>
                        <div className="col">
                            <a className="footer-nav">Experience</a>
                            <br/>
                            <a className="footer-nav">Portfolio</a>
                            <br/>
                            <a className="footer-nav">Contacts</a>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton url={"https://github.com/Aray30/React-Portfolio/tree/contacts"} quote={"Frontend Web Developer"}>
                                
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <LinkedinShareButton url={"https://github.com/Aray30/React-Portfolio/tree/contacts"} quote={"Frontend Web Developer"}>
                                
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>

                            <TwitterShareButton url={"https://github.com/Aray30/React-Portfolio/tree/contacts"} quote={"Frontend Web Developer"}>
                                
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <RedditShareButton url={"https://github.com/Aray30/React-Portfolio/tree/contacts"} quote={"Frontend Web Developer"}>
                                
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyrights&copy;
                            {new Date().getFullYear()}
                        </p>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default footer
