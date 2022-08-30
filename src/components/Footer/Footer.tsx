import React from "react";
import { MainWrapper } from "../../shared/MainWrapper/MainWrapper";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import { ContactUsWrapper } from "../ContactUs/ContactUsStyle";
import { LogoImage } from "../Header/headerStyles";
import { FooterContent } from "./FooterStyle";
import SiteLogo from "../../assets/images/site_logo.png";
import Twitter from "../../assets/icons/twitter.svg";
import FB from "../../assets/icons/fb.svg";
import LinkedIn from "../../assets/icons/linkedIn.svg";
import { FlexBox } from "../../shared/FlexBox/Flexbox";

const Footer = () => {
  return (
    <ContactUsWrapper marginTop="235px" padding="140px 0 45px 0">
      <MainWrapper display="flex">
        <FooterContent>
          <LogoImage height="42px" src={SiteLogo} alt="SiteLogo" />
          <FlexBox justifyContent="flex-start" margin="30px 0" marginTop='0' gap="7px">
            <div>
              <LogoImage height="24px" src={Twitter} alt="SiteLogo" hoverColor='red'/>
            </div>
            <div>
              <LogoImage height="24px" src={FB} alt="SiteLogo" />
            </div>
            <div>
              <LogoImage height="24px" src={LinkedIn} alt="SiteLogo" />
            </div>
          </FlexBox>
          <span className="span-content">
            © 2018, Crypterium Theme by Artureanec |
            <br />
            Privacy Policy | Sitemap
          </span>
        </FooterContent>
        <FooterContent>
          <BannerHeader fontSize="24px" fontWeight="300" textAlign="left">
            Contact Information
          </BannerHeader>
          <BannerHeader
            lineHeight="1.4"
            fontSize="17px"
            fontWeight="300"
            textAlign="left">
            1010 Avenue of the Moon New York,
            <br />
            NY 10018 US.
            <br />
            Call Us:
            <span className="underline-hover"> (066) 052 39876</span>
            <br />
            Email:
            <span className="underline-hover"> nfo@cryptonet.co</span>
          </BannerHeader>
        </FooterContent>
        <FooterContent>
          <BannerHeader fontSize="24px" fontWeight="300" textAlign="left">
            Main menu
          </BannerHeader>
          <FlexBox justifyContent="space-between">
            <div>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                Home
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                About Us
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                Contact
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                News
              </BannerHeader>
            </div>
            <div>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                Event
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                Wallet
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                FAQ's
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                Support
              </BannerHeader>
            </div>
            <div>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                Application
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                Web design
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                UI/UX design
              </BannerHeader>
              <BannerHeader fontSize="17px" fontWeight="300" textAlign="left">
                Documentation
              </BannerHeader>
            </div>
          </FlexBox>
        </FooterContent>
      </MainWrapper>
    </ContactUsWrapper>
  );
};

export default Footer;
