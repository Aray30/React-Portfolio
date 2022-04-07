import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { appendErrors, useForm } from "react-hook-form";

const Contacts = () => {

  const [successMessage, setsuccessMessage ]= useState("");
  const { register, handleSubmit, error}= useForm();

  const serviceID= "service_ID";
  const templateID= "template_ID";
  const userID= "hMiCDFmMwYOf94ftz"

  const onSubmit= (data, r) => {
    sendEmail(
      serviceID, 
      templateID, 
      { 
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description 
      },

      userID
    )
    r.target.reset();
  }



  


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(serviceID, templateID, e.target, userID)
      .then((result) => {
        setsuccessMessage("Form Sent Successfully! I'll contact you as soon as possible ");
      },).catch(error => console.error("Something went wrong"));
  };

  return (
    <div className="contacts">
      <div className="text-center">
       
        <h1>Contact Me</h1>
        <p>Please fill out the form and describe your project needs and i will contact you as soon as possible.</p>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
                {/*NAME IMPUT***/}
                <div className="text-center">
                  <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="Name"
                  ref={register({
                    required: "Please enter Name",
                    maxLength: {
                      value: 20,
                      message: "Please enter a name with fewer than 20 characters"
                    }
                  })}
                  />
                  <div className="line"></div>
                </div>
                
                 {/*PHONE IMPUT***/}
                 <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="Phone"
                  />
                  <div className="line"></div>
                </div>
                 {/*Email IMPUT***/}
                 <div className="text-center">
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="Email"
                    />
                    <div className="line"></div>
                </div>
                {/*Subject IMPUT***/}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="Subject"
                  />
                  <div className="line"></div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                {/*DESCRIPTION***/}
                <div className="text-center">
                <textarea
                type="text"
                className="form-control"
                placeholder=" Please give me description of the Project or how i can assist you ..... "
                name="Description"
                ></textarea>
                <div className="line"></div>
                </div>

                <button className="btn-main-offer contact-btn" type="subject">Contact Me</button>
                </div>
               </div>
          </form>
        </div>
      </div>

  )
}

export default Contacts
