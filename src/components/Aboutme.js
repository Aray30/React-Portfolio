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
                <h1 className="about-heading">aboutme</h1>
                <p>
                Hello my name is Aaron, 

                Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
                omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice.
                andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?
                </p>
            
            </div>
        </div>
      
    </div>
  )
}

export default aboutme
