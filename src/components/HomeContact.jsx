import React from "react";
import "../styles/components/HomeContact.scss";
import bg from "../assets/contact-bg.png";
import IconPhone from "../icons/IconPhone";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconMail from "../icons/IconMail";
const HomeContact = () => {
  return (
    <section className="contact" style={{ backgroundImage: `url(${bg})` }}>
      <div className="contact__container">
        <h3 className="contact__title">Kontakt</h3>
        <div className="contact__element">
          <IconPhone /> 123 456 789
        </div>
        <div className="contact__element">
          <IconFacebook /> www.facebook.com/wonderful-dish
        </div>
        <div className="contact__element">
          <IconInstagram /><p>www.instagram.com/wonderful-dish/</p> 
        </div>
        <div className="contact__element">
          <IconMail /> contact@wonderful.com
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
