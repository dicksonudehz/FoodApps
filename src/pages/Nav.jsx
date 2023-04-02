import React from "react";
import "./Nav.css";
import logo from "../images/logo.png";
import heroimg from "../images/img0.png";
import phne from "../images/img1.png";
import phne1 from "../images/phone1.png";
import phne2 from "../images/phone2.png";
import footerimg from "../images/img.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  return (
    <>
      <div className="outContainer">
        <div className="navContainer">
          <img src={logo} alt="main logo" className="logo" />

          <div className="listItems">
            <MenuIcon className="barsMenu" />
            <input type="checkbox" className="checkboxed" />
            <div className="navItemsUi">
              <ul>
                <li className="navLinks">home</li>
                <li className="navLinks">products</li>
                <li className="navLinks">faqs</li>
                <li className="navLinks">contacts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="heroContainer">
          <img src={heroimg} alt="hero description" className="heroimage" />
          <div className="heroContent">
            <h6>Food app</h6>
            <h1 className="heroContentHeader">
              why stay hungry when <br />
              you can order from bella onojie
            </h1>
            <h6>Download bella onojie food app now</h6>
            <div className="buttonContainer">
              <button className="leftButton">play Store</button>
              <button className="rightButton">app Store</button>
            </div>
          </div>
        </div>
        <div className="phoneHeaderContainer">
          <img src={phne} alt="" className="phoneHeaderimg" />
        </div>
        <div className="middleContainer">
          <h1 className="middleHeader">how the app works</h1>
          <hr className="middleLine" />
        </div>
        <div className="creatAccountSession">
          <div className="leftSesion">
            <img src={phne1} alt="illustration background" />
          </div>
          {/* this is right session */}
          <div className="rightSession">
            <h4 className="linkHeader">create an account</h4>
            <h2 className="theHeader">
              Create/Login to existing
              <br /> account to get started
            </h2>
            <p className="descpara">
              An Account is created with your email and desired password
            </p>
          </div>
        </div>
        <div className="exploreSession">
          <div className="exploreContent">
            <div className="leftExploreSession">
              <h4 className="exploreLinkHeader">explore varieties</h4>
              <h2 className="exploreHeader">
                shop for your favorite <br /> meals as ee d hot
              </h2>
              <p className="descexplore">
                shop for your favorie meal or drinks and enjoy while doing that
              </p>
            </div>
            <div className="rightExploreSession">
              <img src={phne2} alt="" />
            </div>
          </div>
        </div>
        {/* this is the checkout session for this project  */}
        <div className="checkoutSession">
          <div className="leftCheckoutSesion">
            <img src={phne1} alt="" />
          </div>
          <div className="rightCheckoutSession">
            <h4 className="checkoutLink">checkout</h4>
            <h2 className="theCheckoutHeader">
              when you done checkout <br />
              and get it delivered
            </h2>
            <p className="descparaCheckout">
              when you done check out and get it delivered with ease when you
              done check out and get it delivered with ease when you done check
              out and get it delivered with ease
            </p>
          </div>
        </div>
        <div className="footerSession">
          {/* <img src={footerimg} alt="" className='footerImage' /> */}
        </div>
        <div className="heroContainerFooter">
          <img src={footerimg} alt="hero descriptoin" className="heroimage" />
          <div className="footerheroContent">
            <h6>Download the app now.</h6>
            <div className="downloadAppDesc">
              Available on your favorite store. start your premium experience
              now
            </div>
            <div className="buttonContainer">
              <button className="leftButtonFooter">play Store</button>
              <button className="rightButtonFooter">app Store</button>
            </div>
          </div>
        </div>
        <div className="footerSession">
          <div className="logoFooterSession">
            <img src={logo} alt="main logo" />
          </div>
          <div className="footerIcons">
            <FacebookIcon className="footerIcon" />
            <InstagramIcon className="footerIcon" />
            <TwitterIcon className="footerIcon" />
          </div>
          <div className="copyrightSession">
            <p>copyright: 2010 dricks designs</p>
          </div>
        </div>
      </div>
    </>
  );
}
