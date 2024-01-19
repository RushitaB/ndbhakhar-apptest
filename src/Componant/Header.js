import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export function Header (){
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLinkClick = (newPath) => {
    navigate(newPath)

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

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
              <li><span onClick={()=> handleLinkClick('/about-us')} className="no-underline">About Us</span>
              </li>
              <li><span onClick={()=> handleLinkClick('/service-detail')} className="no-underline">Services</span>
              </li>
              <li><span onClick={()=> handleLinkClick('/contact-us')} className="no-underline">Contact</span>
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
              <li className="p-3 border-b-2"> <span onClick={()=> handleLinkClick('/about-us')} className="no-underline">About Us</span>
              </li>
              <li className="p-3 border-b-2"> <span onClick={()=> handleLinkClick('/service-detail')} className="no-underline">Services</span>
              </li>
              <li className="p-3 border-b-2"> <span onClick={()=> handleLinkClick('/contact-us')} className="no-underline">Contact</span>
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