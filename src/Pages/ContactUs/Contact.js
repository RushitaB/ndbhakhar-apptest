import React, { useEffect, useRef } from "react";
import { PiEnvelopeBold, PiMapPinBold, PiPhoneBold } from "react-icons/pi";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) =>{
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
    document.title = "Contact Us";
  }, []);
  return (
    <>
      <div id="content" className="mt-[74px]">
        <div className="bg-subpage"></div>
        <div className="form-contact-us pt-80">
          <div className="container">
            <div className="row flex-between row-gap-32">
              <div className="col-12 col-lg-5">
                <div className="infor">
                  <div className="heading">
                    <div className="caption1 fw-700 text-blue bg-blue-surface display-inline-block pt-4 pb-4 pl-10 pr-10 bora-8">
                      Contact Us
                    </div>
                    <div className="heading2 mt-16">We’d love to help</div>
                    <div className="body2 mt-16">
                    Contact us and let's make conversations. Send us a message or just say hello, please do complete the form or contact us via details given above.
                    </div>
                  </div>
                  <div className="style-contact-us">
                    <div className="list-social flex-item-center gap-10 mt-28">
                      <a
                        className="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="icon-facebook"></i>
                      </a>
                      <a
                        className="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="icon-linkedin"></i>
                      </a>
                      <a
                        className="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="icon-twitter"></i>
                      </a>
                      <a
                        className="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="icon-youtube"></i>
                      </a>
                      <a
                        className="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="icon-instagram fs-14"></i>
                      </a>
                    </div>
                  </div>
                  <div className="list-more-infor mt-40">
                    <div className="item flex-item-center">
                      <i className="text-white bg-blue p-12 bora-50">
                        <PiPhoneBold />
                      </i>
                      <div className="body2">90546 84292</div>
                    </div>
                    <div className="item flex-item-center mt-20">
                      <i className="text-white bg-blue p-12 bora-50">
                        <PiEnvelopeBold />
                      </i>
                      <div className="body2">info@ndbhakhar.in</div>
                    </div>
                    <div className="item flex-item-center mt-20">
                      <i className="text-white bg-blue p-12 bora-50">
                        <PiMapPinBold />
                      </i>
                      <div className="body2">
                      109, Apple square, near Yogi chowk, Surat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <form className="form-block bg-white bora-16 p-40" ref={form} onSubmit={sendEmail}>
                  <div className="row row-gap-24">
                    <div className="col-12 col-sm-6">
                      <input
                        className="w-100 bg-surface text-secondary caption1 pl-16 pr-16 pt-12 pb-12 bora-8"
                        type="text"
                        placeholder="Name"
                        name="user_name"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        className="w-100 bg-surface text-secondary caption1 pl-16 pr-16 pt-12 pb-12 bora-8"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        className="w-100 bg-surface text-secondary caption1 pl-16 pr-16 pt-12 pb-12 bora-8"
                        type="text"
                        placeholder="Email"
                        name="user_email"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="w-100 bg-surface text-secondary caption1 pl-16 pr-16 pt-12 pb-12 bora-8"
                        name="message"
                        cols="10"
                        rows="4"
                        placeholder="Your Questions..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="block-button mt-40">
                    <button className="button-blue button-blue-hover" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="bg-white mt-[80px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4347557462015!2d72.88755739999999!3d21.214602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe9b98e62b1%3A0xdd967f123f266851!2sApple%20square!5e0!3m2!1sen!2sin!4v1701936109421!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl" title="add"></iframe>
            </div>
            </div>
      </div>
    </>
  );
}
