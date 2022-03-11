import React from "react";
import author from "../me2.jpg";


const aboutme = () => {
  return (
    <div className="contiainer py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">

                <img className="profile-img" src={author} alt="author"/>

                </div>
            
            </div>
            <div className="col-lg-6 col-xm-12"> 
                <h1 className="about-heading">About Me</h1>
                <p>
                Hello my name is Aaron, 

                If soomeone would've told me I would go from being Army Ranger to playing semi-pro ball to a software engineer, I wouldnt believe them.
                However,just like HTML, CSS and JavaScript have their own unique characteristics that are important in the creation of a webpage.
                My current and previous careers have helped me become a proficient, effective and appealing web developer.
                
                Considering my significant programming experience and recent certification through NuCamp I completed in software development .
                 I am confident I have the skills to make your website dream a reality.I am very knowledgeable in HTML,CSS, JavaScript,React Native and React.
                
                </p>
            
            </div>
        </div>
      
    </div>
  )
}

export default aboutme
