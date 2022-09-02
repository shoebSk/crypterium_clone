import SiteLogo from "../../assets/images/site_logo.png";
import flagOne from "../../assets/icons/1.png";
import flagTwo from "../../assets/icons/2.png";
import flagThree from "../../assets/icons/3.png";
import flagFour from "../../assets/icons/4.png";
import { FlexBox } from "../../shared/FlexBox/Flexbox";
import {
  FlagContainer,
  FlagListWrap,
  HeaderWrap,
  LogoImage,
  NavItemSpan,
  NavLink,
  ResponsiveHeaderContainer,
} from "./headerStyles";
import { PrimaryButton, SecondaryButton } from "../../shared/Button/Button";
import { useState } from "react";

const Header = () => {
  const [showFlag, setShowFlag] = useState(false);

  return (
    <HeaderWrap>
      <FlexBox
        display="flex"
        justifyContent="space-between"
        padding="30px 70px 0 70px">
        <div style={{width: '30%'}}>
          <NavLink href="#">
            <LogoImage height="42px" src={SiteLogo} alt="SiteLogo" />
          </NavLink>
        </div>
        <ResponsiveHeaderContainer>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <FlexBox display="flex" gap="40px">
            <NavLink href="#">
              <NavItemSpan className="arrow-down home-nav">Home</NavItemSpan>
              <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">Home Page</li>
                <li className="dropdown_item-2">Home Slider</li>
                <li className="dropdown_item-3">Agency</li>
                <li className="dropdown_item-4">Landing Wallet</li>
                <li className="dropdown_item-5">Item 5</li>
              </ul>
            </NavLink>
            <NavLink href="#">
              <NavItemSpan className="arrow-down page-nav">Pages</NavItemSpan>
              <ul className="dropdown_menu pages dropdown_menu--animated dropdown_menu-6">
                <li className="dropdown_item-1">About</li>
                <li className="dropdown_item-2">Services</li>
                <li className="dropdown_item-3">Blog Post</li>
                <li className="dropdown_item-4">Blog</li>
                <li className="dropdown_item-5">Pricing Table</li>
                <li className="dropdown_item-5">Contact</li>
              </ul>
            </NavLink>
            <NavLink href="#">
              <NavItemSpan>White Papers</NavItemSpan>
            </NavLink>
            <NavLink href="#">
              <NavItemSpan>FAQ's</NavItemSpan>
            </NavLink>
            <NavLink href="#">
              <NavItemSpan>Support</NavItemSpan>
            </NavLink>
          </FlexBox>
          <FlexBox display="flex" gap="20px">
            <PrimaryButton hoverColor="#26de81">Login</PrimaryButton>
            <SecondaryButton>Sign up</SecondaryButton>
            <FlagContainer onClick={() => setShowFlag(!showFlag)}>
              <FlagListWrap show={showFlag ? "block" : "none"}>
                <ul>
                  <li>
                    <LogoImage width="24px" src={flagTwo} alt="flag" />
                  </li>
                  <li>
                    <LogoImage width="24px" src={flagThree} alt="flag" />
                  </li>
                  <li>
                    <LogoImage width="24px" src={flagFour} alt="flag" />
                  </li>
                </ul>
              </FlagListWrap>
              <LogoImage
                className="first-logo"
                width="24px"
                src={flagOne}
                alt="flag"
              />
            </FlagContainer>
          </FlexBox>
        </ResponsiveHeaderContainer>
      </FlexBox>
    </HeaderWrap>
  );
};

export default Header;
