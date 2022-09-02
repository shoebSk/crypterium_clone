import React from "react";
import { PrimaryButton } from "../../shared/Button/Button";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  ContactUsContainer,
  ContactUsContent,
  ContactUsFormContainer,
  ContactUsWrapper,
} from "./ContactUsStyle";

const ContactUs = () => {
  return (
    <ContactUsWrapper padding='0 15px'>
      <ContactUsContainer>
        <ContactUsContent>
          <BannerHeader
            fontSize="17px"
            fontWeight="100"
            marginbottom="2rem"
            textAlign="left">
            GET IN TOUCH
          </BannerHeader>
          <BannerHeader
            maxWidth="60px"
            textAlign="left"
            fontSize="40px"
            fontWeight="600">
            We can Help You
          </BannerHeader>
          <BannerHeader fontSize="20px" fontWeight="300" textAlign="left">
            Data center guarantees trouble-free operation of your equipment,
            control and monitoring for optimal external temperature, humidity,
            dust protection.
          </BannerHeader>
        </ContactUsContent>
        <ContactUsFormContainer>
          <div className="form-div">
            <div className="input-wrap textfield">
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-wrap textfield">
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <div className="form-div">
            <div className="input-wrap textfield textarea">
              <textarea placeholder="Comments"></textarea>
            </div>
            <PrimaryButton bgColor='#43c1a8' fontSize='16px' padding="22px 59px 22px 59px">Send Message</PrimaryButton>
          </div>
          
        </ContactUsFormContainer>
      </ContactUsContainer>
    </ContactUsWrapper>
  );
};

export default ContactUs;
