import React, { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import Mission from "./Mission";
import Journey2 from "./Journey2";
import emailjs from '@emailjs/browser';
import { PiCheck, PiEnvelope, PiMapPin, PiPhoneCall } from "react-icons/pi";

export default function AboutUs() {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_0x63t57', 'template_zi0kwwp', form.current, 'VoGsm1xhQrw3MWjnt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      e.target.reset();
  }
  useEffect(() => {
    const config = {
        delay: 300,
        distance: '100px',
        origin: 'bottom',
        opacity: 0,
        duration: 1000, // Adjust the duration as needed
        easing: 'ease-in-out', // Use a suitable easing function
        reset: false // Ensures the reveal effect triggers every time the element is scrolled into view
      };
    // Scroll bottom to top 
ScrollReveal().reveal('.scroll-bottom-to-top2', config)
  }, []);
  useEffect(() => {
    document.title = 'About Us'; 
  }, []);
  return (
    <>
      <div id="content" className="mt-[74px]">
        <div className="bg-subpage"></div>
        <div className="heading-title pt-60">
          <div className="container text-center">
            <div className="title heading2 text-center">About Us</div>
            <div className="desc body2 text-on-surface-variant1 mt-12">
              Discover our story, our mission, and our passion for creativity
              and innovation
            </div>
          </div>
        </div>
        <div className="heading-content pt-60">
          <div className="container">
            <div className="content-main style-one bg-white bora-24 overflow-hidden">
              <div className="row row-gap-40 flex-between">
                <div className="col-lg-6 pr-40 pr-col-lg-0 flex-center">
                  <div className="text-content pl-80 pt-80 pb-80">
                    <div className="category caption1 fw-700 text-blue bg-blue-surface display-inline-block pt-4 pb-4 pl-12 pr-12 bora-4">
                      About Us
                    </div>
                    <div className="name heading3 mt-16">
                      Elevating Small and Mid-Sized Companies through Tailored
                      Accounting Services
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-img">
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={require("../../images/about.jpg")}
                      alt="Elevating Small and Mid-Sized Companies through Tailored IT Services"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div key={'Journey2'} className="scroll-bottom-to-top2">
        <Journey2/>
        </div>
        <div key={'Mission'} className="scroll-bottom-to-top2">
        <Mission/>
        </div>
        <div key={'contactus'} className="scroll-bottom-to-top2">
                    <div className="section-contact bg-linear-grey pt-60 pb-60">
                        <div className="container">
                            <div className="row flex-between row-gap-40">
                                <div key={'detail'} className="col-12 col-xl-7 text-white">
                                    <div className="text-label text-white pt-4 pb-4 pl-12 pr-12 bg-blue bora-2 display-inline-block">Contact us</div>
                                    <div className="heading3 text-white mt-12">Free consultation - discover Accounting solutions for your business</div>
                                    <div className="list-features gy-2 mt-16">
                                        <div key={`contact_1`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Confirmation of appointment details</div>
                                        </div>
                                        <div key={`contact_2`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Consultation to discuss accounting solutions</div>
                                        </div>
                                        <div key={`contact_3`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Needs assessment for tailored solutions</div>
                                        </div>
                                        <div key={`contact_4`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Presentation of proposed solutions</div>
                                        </div>
                                        <div key={`contact_5`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Project execution and ongoing support</div>
                                        </div>
                                        <div key={`contact_6`} className="item flex-item-center">
                                            <i className="fs-20"><PiCheck /></i>
                                            <div className="body2 pl-12">Follow-up to evaluate effectiveness and satisfaction</div>
                                        </div>
                                    </div>
                                    <div className="line mt-24"></div>
                                    <div className="flex-item-center mt-24"><i className="fs-20"><PiEnvelope /></i>
                                        <div className="body2 pl-12">info@ndbhakhar.in</div>
                                    </div>
                                    <div className="flex-item-center mt-8"><i className="fs-20"><PiPhoneCall /></i>
                                        <div className="body2 pl-12">90546 84292</div>
                                    </div>
                                    <div className="flex-item-center mt-8"><i className="fs-20"><PiMapPin /></i>
                                        <div className="body2 pl-12">109, Apple square, near Yogi chowk, Surat</div>
                                    </div>
                                </div>
                                <div key={'form'} className="col-12 col-xl-4">
                                    <form className="form-block bora-16 bg-white pt-24 pb-24 pl-28 pr-28 d-flex flex-column gap-20" ref={form} onSubmit={sendEmail}>
                                        <div className="heading5">Schedule a free consultation</div>
                                        <div className="row gy-2">
                                            <div key={'f_name'} className="col-12 col-sm-6">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="firstName">First Name *</label>
                                                <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="firstName" placeholder="" name="user_name" required />
                                            </div>
                                            <div key={'s_name'} className="col-12 col-sm-6">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="lastName">Last Name</label>
                                                <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="lastName" placeholder="" />
                                            </div>
                                            <div key={'sub'} className="col-12">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="phone">Subject *</label>
                                                <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="phone" placeholder="" name="subject" required />
                                            </div>
                                            <div key={'email'} className="col-12">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="companyEmail">Email *</label>
                                                <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="email" id="companyEmail" placeholder="" name="user_email" required />
                                            </div>
                                            <div key={'msg'} className="col-12">
                                                <label className="caption1 text-on-surface-variant1 pb-8" htmlFor="message">Your message *</label>
                                                <textarea className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline display-block" name="message" rows="3" id="message" placeholder="" required></textarea>
                                            </div>
                                        </div>
                                        <div className="block-button">
                                            <button className="button-blue button-blue-hover w-100" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </>
  );
}
