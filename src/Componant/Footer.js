import { useRef } from "react";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import emailjs from '@emailjs/browser';


export default function Footer() {
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_0x63t57', 'template_hess83opm', form.current, 'VoGsm1xhQrw3MWjnt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <>
         <div id="footer">
      <div className="footer-block bg-white pt-60 md:px-[150px] px-[20px] pb-[40px]">
        <div className="">
          <div className="row row-gap-32">
            <div className="col-xl-5 col-md-6">
              <div className="footer-company-infor d-flex flex-column gap-20"><a className="logo" href="/"> 
              <img src={require('../images/logo.png')} alt="" className="h-[55px]"/>
                  </a>
                <div className="caption1">N D Bhakhar & Co. has delivered quality services with an emphasis on knowledge, research, experience and professionalism. </div>
                <div className="caption1">Mon - Sat: 10:00 - 19:00</div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-navigate">
                <div className="footer-nav-item">
                  <div className="item-heading text-button">Company</div>
                  <ul className="list-nav mt-12">
                    <li className="mt-8"><a className="caption1 text-line hover-underline" href="/">Home</a></li>
                    <li className="mt-8"><a className="caption1 text-line hover-underline" href="/about-us">About us</a></li>
                    <li className="mt-8"><a className="caption1 text-line hover-underline" href="/service-detail">Services</a></li>
                    <li className="mt-8"><a className="caption1 text-line hover-underline" href="contact-us">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-12">
              <div className="company-contact"> 
                <div className="heading text-button">Newsletter</div>
                <form className="send-block mt-20 flex-item-center" ref={form} onSubmit={sendEmail}><i><TfiEmail/></i>
                  <input className="caption1" type="text" placeholder="Your email address" name="user_email"/>
                  <button type="submit"><i><PiPaperPlaneTilt /></i></button>
                </form>
                <div className="list-social flex-item-center gap-10 mt-28"><a className="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="icon-facebook"></i></a><a className="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="icon-linkedin"></i></a><a className="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="icon-twitter"></i></a><a className="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="icon-youtube"></i></a><a className="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="icon-instagram fs-14"></i></a></div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}
