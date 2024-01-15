import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header (){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
        <div className="fixed header-fixed">
            <div id="header">
      <div className="header-menu style-one style-two">
        <div className="container"> <a className="logo" href="/"> 
              <img src={require('../images/logo.png')} alt="" className="h-[55px]"/>
              </a>
          <div className="menu-main"> 
            <ul className="flex-center">
              <li> <span><a href="/" className="no-underline">Home</a></span>
              </li>
              <li> <span><a href="/about-us" className="no-underline">About Us</a></span>
              </li>
              <li> <span><a href="/service-detail" className="no-underline">Services</a></span>
              </li>
              <li> <span><a href="/contact-us" className="no-underline">Contact</a></span>
              </li>
              
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="mobile-menu d-none text-black">
          <GiHamburgerMenu className="text-[#13558A] text-[20px]" onClick={handleShow}/>
          <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={require('../images/logo.png')} alt="" className="h-[55px]"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="">
              <li className="p-3 border-b-2"> <span><a href="/" className="no-underline">Home</a></span>
              </li>
              <li className="p-3 border-b-2"> <span><a href="/about-us" className="no-underline">About Us</a></span>
              </li>
              <li className="p-3 border-b-2"> <span><a href="/service-detail" className="no-underline">Services</a></span>
              </li>
              <li className="p-3 border-b-2"> <span><a href="/contact-us" className="no-underline">Contact</a></span>
              </li>
              
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
          </div>

        </div>
      </div>
    </div>
    </div>
        </>
    )
}